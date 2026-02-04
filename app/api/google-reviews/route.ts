import { NextResponse } from 'next/server'

const MAX_REVIEWS = 3

export interface GoogleReview {
  author_name: string
  rating: number
  relative_time_description: string
  text: string
  time: number
  profile_photo_url?: string
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Google Places API nicht konfiguriert', reviews: [] },
      { status: 200 }
    )
  }

  try {
    const baseUrl = 'https://maps.googleapis.com/maps/api/place/details/json'
    const fetchReviews = async (lang: 'de' | 'none'): Promise<{ data: Record<string, unknown>; res: Response }> => {
      const url = new URL(baseUrl)
      url.searchParams.set('place_id', placeId)
      url.searchParams.set('fields', 'name,rating,reviews,user_ratings_total')
      url.searchParams.set('reviews_sort', 'newest')
      if (lang === 'de') url.searchParams.set('language', 'de')
      url.searchParams.set('key', apiKey)
      const res = await fetch(url.toString(), { cache: 'no-store' })
      const data = await res.json()
      return { data, res }
    }

    // 1. Zuerst mit language=de (Deutsch) anfragen
    const { data: dataDe } = await fetchReviews('de')

    if (dataDe.status !== 'OK') {
      const errorMessage =
        dataDe.status === 'REQUEST_DENIED'
          ? 'REQUEST_DENIED – API-Key prüfen oder Places API aktivieren'
          : dataDe.status === 'INVALID_REQUEST'
            ? 'INVALID_REQUEST – Place ID prüfen'
            : dataDe.status === 'OVER_QUERY_LIMIT'
              ? 'OVER_QUERY_LIMIT – API-Limit oder Billing prüfen'
              : (dataDe.error_message as string)
                ? `${dataDe.status}: ${dataDe.error_message}`
                : (dataDe.status as string) || 'Unbekannter Fehler'
      return NextResponse.json(
        { error: errorMessage, reviews: [] },
        { status: 200 }
      )
    }

    const reviewsDe: GoogleReview[] = (dataDe.result as { reviews?: GoogleReview[] })?.reviews ?? []
    const userRatingsTotal = (dataDe.result as { user_ratings_total?: number })?.user_ratings_total ?? 0

    // 2. Mit language=de liefert Google oft nur 1 Bewertung, obwohl mehrere existieren.
    //    Wenn wir weniger Bewertungen haben als user_ratings_total, erneut OHNE Sprache holen → alle (bis 5).
    let result = dataDe.result as { name?: string; rating?: number; reviews?: GoogleReview[]; user_ratings_total?: number }
    let usedFallback = false
    if (reviewsDe.length < userRatingsTotal && userRatingsTotal >= 2) {
      const { data: dataAll } = await fetchReviews('none')
      if (dataAll.status === 'OK' && dataAll.result) {
        const reviewsAll: GoogleReview[] = (dataAll.result as { reviews?: GoogleReview[] }).reviews ?? []
        if (reviewsAll.length > reviewsDe.length) {
          result = dataAll.result as typeof result
          usedFallback = true
        }
      }
    }

    let reviews: GoogleReview[] = (result.reviews || []).slice(0, MAX_REVIEWS)
    let translatedToDe = false
    const translateApiKey = process.env.GOOGLE_TRANSLATE_API_KEY || apiKey

    // 3. Bewertungstexte und Zeitangaben immer auf Deutsch übersetzen (auch wenn nicht Fallback)
    if (reviews.length > 0 && translateApiKey) {
      // 3a. Bewertungstexte auf Deutsch
      const textsToTranslate: string[] = []
      const indicesWithText: number[] = []
      reviews.forEach((r, i) => {
        if (r.text?.trim()) {
          textsToTranslate.push(r.text.trim())
          indicesWithText.push(i)
        }
      })
      if (textsToTranslate.length > 0) {
        try {
          const translateRes = await fetch(
            `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(translateApiKey)}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ q: textsToTranslate, target: 'de' }),
              cache: 'no-store',
            }
          )
          const translateData = await translateRes.json()
          if (!translateData?.error) {
            const translations = translateData?.data?.translations as { translatedText: string }[] | undefined
            if (Array.isArray(translations) && translations.length === indicesWithText.length) {
              const nextReviews = [...reviews]
              indicesWithText.forEach((idx, i) => {
                nextReviews[idx] = { ...nextReviews[idx], text: translations[i].translatedText }
              })
              reviews = nextReviews
              translatedToDe = true
            }
          }
        } catch (_) {
          // Übersetzung fehlgeschlagen – Bewertungen in Originalsprache ausliefern
        }
      }

      // 3b. Zeitangaben (z. B. "a week ago", "2 weeks ago") auf Deutsch
      const timeStrings = reviews.map((r) => r.relative_time_description || '.')
      const hasNonDeTime = timeStrings.some(
        (t) => t !== '.' && !/^(vor|vor einer|vor \d+|vor über|vor etwa|vor mehr als|heute|gestern|gerade eben)/i.test(t)
      )
      if (hasNonDeTime) {
        try {
          const trRes = await fetch(
            `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(translateApiKey)}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ q: timeStrings, target: 'de' }),
              cache: 'no-store',
            }
          )
          const trData = await trRes.json()
          if (!trData?.error) {
            const trList = trData?.data?.translations as { translatedText: string }[] | undefined
            if (Array.isArray(trList) && trList.length === reviews.length) {
              reviews = reviews.map((r, i) => ({ ...r, relative_time_description: trList[i].translatedText }))
            }
          }
        } catch (_) {
          // Zeit-Übersetzung optional
        }
      }
    }

    const placeName = result.name || ''
    const rating = result.rating ?? null
    const userRatingsTotalOut = result.user_ratings_total ?? null

    return NextResponse.json({
      reviews,
      placeName,
      rating,
      userRatingsTotal: userRatingsTotalOut,
      usedFallback,
      translatedToDe,
    })
  } catch (e) {
    console.error('Google Reviews API Error:', e)
    return NextResponse.json(
      { error: 'Fehler beim Laden der Bewertungen', reviews: [] },
      { status: 200 }
    )
  }
}
