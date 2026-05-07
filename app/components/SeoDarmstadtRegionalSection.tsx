import Link from 'next/link'
import { MapPin, TrendingUp } from 'lucide-react'

const REGION_CHIPS = [
  { label: 'Darmstadt', href: '/webdesign/darmstadt', ariaLabel: 'Webdesign & SEO für Darmstadt' },
  { label: 'Pfungstadt', href: '/webdesign/pfungstadt', ariaLabel: 'Webdesign & SEO für Pfungstadt' },
  { label: 'Griesheim', href: '/webdesign/griesheim', ariaLabel: 'Webdesign & SEO für Griesheim' },
  { label: 'Weiterstadt', href: '/webdesign/weiterstadt', ariaLabel: 'Webdesign & SEO für Weiterstadt' },
  { label: 'Seeheim', href: '/kontakt', ariaLabel: 'Kontakt zu Projekten in Seeheim-Jugenheim' },
  { label: 'Reinheim', href: '/kontakt', ariaLabel: 'Kontakt zu Projekten in Reinheim' },
] as const

const EXAMPLE_RANKINGS = [
  { query: 'SEO Darmstadt', position: 3 },
  { query: 'Webdesign Darmstadt', position: 5 },
  { query: 'SEO Pfungstadt', position: 2 },
] as const

/** Regional / lokale SEO für /seo-darmstadt */
export default function SeoDarmstadtRegionalSection() {
  return (
    <section
      id="regional-seo"
      className="relative overflow-hidden bg-blue-600 py-16 md:py-24 rounded-b-[3rem] md:rounded-b-[5rem]"
      aria-labelledby="regional-seo-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        {/* LINKS */}
        <div className="min-w-0">
          <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-50 shadow-sm backdrop-blur-md">
            Regional vor Ort
          </p>
          <h2
            id="regional-seo-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl md:leading-tight"
          >
            SEO für Unternehmen in Darmstadt &amp; Umgebung
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-50/95">
            Von Darmstadt bis Pfungstadt: lokale Sichtbarkeit funktioniert nur mit regionaler Relevanz, technischer Qualität
            und klarer Strategie.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2.5" aria-label="Regionen und Stadtteile">
            {REGION_CHIPS.map(({ label, href, ariaLabel }) => (
              <Link
                key={label}
                href={href}
                aria-label={ariaLabel}
                className="rounded-full border border-blue-100/60 bg-white/95 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-blue-700 hover:shadow-lg hover:shadow-blue-950/20 active:translate-y-0 active:scale-[0.98]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* RECHTS — Map + lokales Ranking-Dashboard */}
        <div className="relative min-w-0">
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-white/10 blur-3xl lg:-inset-6" aria-hidden />
          <RegionalVisualCard />
        </div>
      </div>
    </section>
  )
}

function RegionalVisualCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_24px_70px_-16px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.05]">
      <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-16 bottom-32 h-48 w-48 rounded-full bg-blue-400/25 blur-3xl" aria-hidden />

      {/* Map-Bereich (Google-Maps-nah: Raster + Pins) */}
      <div className="relative aspect-[16/11] min-h-[220px] overflow-hidden bg-gradient-to-br from-emerald-50/90 via-sky-50/40 to-slate-100/90 md:aspect-[16/10] md:min-h-[260px]">
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(148 163 184 / 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.22) 1px, transparent 1px)`,
            backgroundSize: '22px 22px',
          }}
          aria-hidden
        />
        {/* „Straßen“ */}
        <svg className="absolute inset-0 h-full w-full text-white/70" aria-hidden>
          <path
            d="M-10 120 Q80 100 180 130 T380 110"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            className="opacity-90"
          />
          <path
            d="M40 -10 L60 320"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="opacity-80"
          />
          <path
            d="M280 20 Q320 140 240 280"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            className="opacity-75"
          />
        </svg>

        {/* Stats-Pills */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2 md:left-5 md:top-5">
          <span className="rounded-full border border-white/80 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur-sm md:text-[11px]">
            Maps
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/90 bg-emerald-50/95 px-2.5 py-1 text-[10px] font-semibold text-emerald-900 shadow-sm backdrop-blur-sm md:text-[11px]">
            <TrendingUp className="h-3 w-3 shrink-0" aria-hidden />
            Local Pack
          </span>
          <span className="rounded-full border border-blue-200/90 bg-blue-50/95 px-2.5 py-1 text-[10px] font-semibold text-blue-900 shadow-sm backdrop-blur-sm md:text-[11px]">
            +24% Sichtbarkeit
          </span>
        </div>

        {/* Pins — relative Positionen (stilisiert) */}
        <ul className="absolute inset-0 list-none" aria-label="Kartenmarkierungen (schematisch)">
          {(
            [
              { label: 'Darmstadt', left: '46%', top: '42%' },
              { label: 'Pfungstadt', left: '44%', top: '62%' },
              { label: 'Griesheim', left: '28%', top: '38%' },
              { label: 'Weiterstadt', left: '56%', top: '58%' },
              { label: 'Seeheim', left: '38%', top: '22%' },
              { label: 'Reinheim', left: '72%', top: '48%' },
            ] as const
          ).map(({ label, left, top }) => (
            <li
              key={label}
              className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center gap-0.5"
              style={{ left, top }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/35 ring-[3px] ring-white">
                <MapPin className="h-4 w-4" strokeWidth={2.2} aria-hidden />
              </span>
              <span className="rounded-md bg-white/95 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-700 shadow-md ring-1 ring-slate-200/90 md:text-[10px]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Ranking-Dashboard */}
      <div className="relative border-t border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 px-4 py-4 md:px-5 md:py-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Lokale Suchbegriffe</p>
          <p className="text-[10px] font-medium text-slate-400 md:text-[11px]">Beispielhafte Darstellung</p>
        </div>
        <ul className="space-y-2.5">
          {EXAMPLE_RANKINGS.map(({ query, position }) => (
            <li
              key={query}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white px-3 py-2.5 shadow-sm ring-1 ring-slate-900/[0.03] md:px-4"
            >
              <span className="min-w-0 truncate text-sm font-semibold text-slate-800">&bdquo;{query}&rdquo;</span>
              <span className="shrink-0 rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold tabular-nums text-blue-800 ring-1 ring-blue-100">
                Position #{position}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
