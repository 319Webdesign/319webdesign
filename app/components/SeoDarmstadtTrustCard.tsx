'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Clock, ExternalLink, Star, UserRound } from 'lucide-react'

interface ApiResponse {
  rating?: number | null
  userRatingsTotal?: number | null
  error?: string
  reviews: unknown[]
}

function StarRow({ rating }: { rating: number }) {
  const rounded = Math.min(5, Math.max(0, Math.round(rating)))
  return (
    <div className="flex gap-0.5" aria-label={`${rating.toFixed(1)} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= rounded ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`}
          aria-hidden
        />
      ))}
    </div>
  )
}

export default function SeoDarmstadtTrustCard({ googleReviewsUrl }: { googleReviewsUrl?: string }) {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((r) => r.json())
      .then((json: ApiResponse) => setData(json))
      .catch(() => setData({ reviews: [] }))
      .finally(() => setLoading(false))
  }, [])

  const rating = data?.rating
  const total = data?.userRatingsTotal
  const showGoogle =
    !loading && rating != null && total != null && total > 0 && !data?.error

  return (
    <aside
      className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 p-6 shadow-xl shadow-slate-900/[0.07] ring-1 ring-slate-900/[0.04] md:p-7"
      aria-label="SEO-Erstanalyse und Vertrauen"
    >
      <p className="text-xl font-bold tracking-tight text-slate-900 md:text-[1.35rem] md:leading-snug">
        Kostenlose SEO-Erstanalyse
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Kurz prüfen, wo Ihre Website in Darmstadt &amp; Region noch Luft nach oben hat — unverbindlich.
      </p>

      {/* Google Bewertungen */}
      <div className="mt-6 rounded-xl border border-slate-200/95 bg-white p-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Google-Bewertungen</p>
        {loading ? (
          <div className="mt-3 h-11 animate-pulse rounded-lg bg-slate-100" />
        ) : showGoogle ? (
          googleReviewsUrl ? (
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 flex items-center justify-between gap-3 rounded-lg border border-transparent px-1 py-0.5 transition-colors hover:border-slate-100 hover:bg-slate-50/80"
            >
              <div className="flex min-w-0 items-center gap-3">
                <StarRow rating={rating!} />
                <div className="min-w-0">
                  <p className="text-sm font-bold tabular-nums text-slate-900">
                    {rating!.toFixed(1)} <span className="font-semibold text-slate-600">· {total} Bewertungen</span>
                  </p>
                  <p className="truncate text-xs text-blue-700 group-hover:underline">Auf Google ansehen</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-blue-600" aria-hidden />
            </a>
          ) : (
            <div className="mt-3 flex items-center gap-3">
              <StarRow rating={rating!} />
              <p className="text-sm font-bold tabular-nums text-slate-900">
                {rating!.toFixed(1)} <span className="font-semibold text-slate-600">· {total} Bewertungen</span>
              </p>
            </div>
          )
        ) : (
          <p className="mt-3 text-sm text-slate-600">
            Sterne-Bewertung auf Google{' '}
            {googleReviewsUrl ? (
              <a href={googleReviewsUrl} className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900">
                ansehen
              </a>
            ) : null}
          </p>
        )}
      </div>

      <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
        <li className="flex gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100/80">
            <Clock className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
          </span>
          <span className="pt-1 leading-snug">Antwort innerhalb 24&nbsp;h</span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100/80">
            <UserRound className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
          </span>
          <span className="pt-1 leading-snug">
            Lokaler Ansprechpartner <span className="font-normal text-slate-500">(Darmstadt &amp; Umland)</span>
          </span>
        </li>
      </ul>

      <Link
        href="/kontakt"
        className="mt-8 flex w-full items-center justify-center rounded-lg border border-amber-300/70 bg-amber-400 px-5 py-3.5 text-center text-base font-semibold text-slate-950 shadow-lg shadow-amber-900/20 transition-all hover:border-amber-200 hover:bg-amber-500 hover:shadow-xl active:scale-[0.98]"
      >
        Kostenlose SEO-Analyse sichern
      </Link>
    </aside>
  )
}
