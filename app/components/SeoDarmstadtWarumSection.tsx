import { Activity, Gauge, MapPin, Search, TrendingUp } from 'lucide-react'

/** Problem + Premium-Dashboard-Visual für /seo-darmstadt */
export default function SeoDarmstadtWarumSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-16 md:py-24"
      aria-labelledby="seo-warum-heading"
    >
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        {/* LINKS */}
        <div className="min-w-0">
          <p className="text-2xl font-bold leading-snug tracking-tight text-slate-900 md:text-3xl md:leading-tight">
            Schönes Design allein generiert keine Anfragen.
          </p>
          <h2
            id="seo-warum-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl md:leading-tight"
          >
            Warum viele Websites trotz schönem Design keine Kunden bringen
          </h2>
          <ul className="mt-8 space-y-4 text-lg font-medium text-slate-800 md:text-xl" aria-label="Typische Probleme">
            {(
              [
                'keine lokale Sichtbarkeit',
                'schlechte Google-Platzierungen',
                'keine klare Conversion-Struktur',
              ] as const
            ).map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-rose-500" aria-hidden>
                  ✕
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 border-l-4 border-blue-600 bg-blue-50/80 py-3 pl-5 pr-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Die meisten lokalen Websites werden nie für relevante Suchanfragen gefunden.
          </p>
        </div>

        {/* RECHTS — dominante SEO-Card */}
        <div className="min-w-0 lg:sticky lg:top-28">
          <SeoPremiumDashboardCard />
        </div>
      </div>
    </section>
  )
}

function SeoPremiumDashboardCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 p-6 shadow-[0_28px_90px_-18px_rgba(15,23,42,0.22)] ring-1 ring-slate-900/[0.04] md:p-8">
      <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-slate-400/10 blur-3xl" aria-hidden />

      <div className="relative flex flex-wrap items-start justify-between gap-3 border-b border-slate-200/90 pb-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">SEO Übersicht</p>
          <p className="mt-1 flex items-center gap-2 text-lg font-bold text-slate-900 md:text-xl">
            <Activity className="h-5 w-5 shrink-0 text-blue-600" aria-hidden />
            Performance &amp; Sichtbarkeit
          </p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200/90">
          Live-Daten
        </span>
      </div>

      <div className="relative mt-6 grid gap-5">
        {/* SEO Score + Keyword Visibility */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <Gauge className="h-3.5 w-3.5 text-blue-600" aria-hidden />
              SEO Score
            </div>
            <div className="mt-3 flex items-end gap-3">
              <span className="text-4xl font-bold tabular-nums tracking-tight text-slate-900">94</span>
              <span className="mb-1 text-sm font-medium text-emerald-600">+12</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <Search className="h-3.5 w-3.5 text-blue-600" aria-hidden />
              Keyword Visibility
            </div>
            <div className="mt-4 flex h-14 items-end justify-between gap-1 px-0.5">
              {[42, 58, 48, 72, 65, 88, 76].map((h, i) => (
                <div
                  key={i}
                  className="w-full max-w-[14%] rounded-t bg-gradient-to-t from-blue-600 to-blue-400 opacity-90"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">Suchanfragen mit Ranking Top 20</p>
          </div>
        </div>

        {/* Ranking-Grafik + Growth Curve */}
        <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-sm md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Ranking &amp; Growth</span>
            <span className="text-xs font-medium text-emerald-600">Ø Position ▲ 6 Plätze</span>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-[1fr_1.15fr] md:items-end">
            <div aria-hidden>
              <p className="mb-2 text-[11px] font-medium text-slate-400">Top Keywords (Rank)</p>
              <div className="flex h-24 items-end justify-between gap-2 border-b border-slate-100 pb-1">
                {[55, 72, 48, 88, 62].map((pct, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col justify-end">
                    <div
                      className="mx-auto w-[70%] rounded-t-md bg-slate-800/85"
                      style={{ height: `${pct}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1 text-[11px] font-medium text-slate-400">Wachstum organische Sichtbarkeit</p>
              <svg viewBox="0 0 200 72" className="h-20 w-full" aria-hidden>
                <defs>
                  <linearGradient id="seoGrowthFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgb(59 130 246 / 0.35)" />
                    <stop offset="100%" stopColor="rgb(59 130 246 / 0)" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#seoGrowthFill)"
                  d="M0,58 C35,52 45,48 70,42 C95,36 110,38 130,28 C155,15 175,12 200,8 L200,72 L0,72 Z"
                />
                <polyline
                  fill="none"
                  stroke="rgb(37 99 235)"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="0,58 28,54 52,46 78,40 104,34 130,28 156,22 182,14 200,8"
                />
              </svg>
              <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-blue-700">
                <TrendingUp className="h-3.5 w-3.5" aria-hidden />
                +37 % Sichtbarkeit
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps + Core Web Vitals + Local SEO */}
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-blue-600" aria-hidden />
              Google Maps · Local Pack
            </div>
            <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-blue-100/80 ring-1 ring-slate-200/80">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `linear-gradient(to right, rgb(148 163 184 / 0.28) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.28) 1px, transparent 1px)`,
                  backgroundSize: '18px 18px',
                }}
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/25 ring-4 ring-white">
                  <MapPin className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                </div>
                <span className="rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200">
                  Darmstadt
                </span>
              </div>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-slate-600">
              <li className="rounded-full bg-slate-100 px-2.5 py-1 ring-1 ring-slate-200/80">Maps-Eintrag</li>
              <li className="rounded-full bg-slate-100 px-2.5 py-1 ring-1 ring-slate-200/80">Reviews</li>
              <li className="rounded-full bg-slate-100 px-2.5 py-1 ring-1 ring-slate-200/80">Öffnungszeiten</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Core Web Vitals</p>
              <ul className="mt-3 space-y-2.5 text-sm">
                {(
                  [
                    ['LCP', 'Gut'],
                    ['INP', 'Gut'],
                    ['CLS', 'Gut'],
                  ] as const
                ).map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium text-slate-700">{k}</span>
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white shadow-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-200/90">Local SEO</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {['NAP konsistent', 'Standort-Landingpages', 'lokale Keywords', 'Regionaler Content'].map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 text-xs font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
