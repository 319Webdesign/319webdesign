'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface GoogleReview {
  author_name: string
  rating: number
  relative_time_description: string
  text: string
  time: number
  profile_photo_url?: string
}

interface ApiResponse {
  reviews: GoogleReview[]
  placeName?: string
  rating?: number
  userRatingsTotal?: number
  error?: string
  usedFallback?: boolean
  translatedToDe?: boolean
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-slate-700 text-slate-700'
          }`}
          aria-hidden
        />
      ))}
    </div>
  )
}

export default function GoogleReviewsSection() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((res) => res.json())
      .then((json: ApiResponse) => {
        setData(json)
      })
      .catch(() => setData({ reviews: [] }))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section className="py-24 px-6 bg-slate-900" aria-label="Kundenbewertungen werden geladen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kundenbewertungen</h2>
            <p className="text-slate-400">Bewertungen werden geladen…</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-48 rounded-2xl bg-slate-800/50 border border-slate-700 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  const reviews = data?.reviews ?? []
  const error = data?.error

  return (
    <section className="py-24 px-6 bg-slate-900" id="bewertungen" aria-labelledby="reviews-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-14"
        >
          <h2 id="reviews-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Kundenbewertungen
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Das sagen Kunden über 319Webdesign – aktuellste Bewertungen von Google.
          </p>
          {data?.rating != null && data?.userRatingsTotal != null && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700">
              <StarRating rating={Math.round(data.rating)} />
              <span className="text-slate-300 font-medium">
                {data.rating.toFixed(1)} · {data.userRatingsTotal} Bewertungen
              </span>
            </div>
          )}
        </motion.div>

        {reviews.length === 0 ? (
          <motion.div
            {...fadeInUp}
            className="rounded-2xl border border-slate-700 bg-slate-800/50 p-10 text-center"
          >
            <p className="text-slate-300 mb-2">
              Aktuell werden keine Bewertungen angezeigt.
            </p>
            {error && (
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Hinweis: {error}. Bitte prüfen Sie in .env die Variablen GOOGLE_PLACES_API_KEY und GOOGLE_PLACE_ID sowie die Aktivierung der Places API (Place Details) in der Google Cloud Console.
              </p>
            )}
          </motion.div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            const reviewId = `${review.time}-${review.author_name}-${index}`
            const isExpanded = expandedIds.has(reviewId)
            const hasLongText = review.text && review.text.length > 180
            return (
            <motion.article
              key={reviewId}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/80 p-6 hover:border-[#3b82f6]/40 transition-colors duration-300"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-[#3b82f6]/20" aria-hidden />
              <div className="flex items-center gap-4 mb-4">
                {review.profile_photo_url ? (
                  <img
                    src={review.profile_photo_url}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center text-slate-300 font-semibold">
                    {review.author_name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-white">{review.author_name}</p>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              {review.text && (
                <div className="mb-3">
                  <p
                    className={`text-slate-300 leading-relaxed ${!isExpanded && hasLongText ? 'line-clamp-4' : ''}`}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>
                  {hasLongText && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(reviewId)}
                      className="text-sm font-medium text-[#3b82f6] hover:text-[#60a5fa] transition-colors mt-1"
                    >
                      {isExpanded ? 'Weniger' : 'Mehr lesen'}
                    </button>
                  )}
                </div>
              )}
              <p className="text-sm text-slate-500">{review.relative_time_description}</p>
            </motion.article>
          )})}
        </div>
        )}
      </div>
    </section>
  )
}
