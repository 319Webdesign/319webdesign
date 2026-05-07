import { FileStack, Gauge, MapPin } from 'lucide-react'

const FEATURES = [
  {
    title: 'Local SEO',
    quote: 'Gefunden werden, wenn Kunden in Darmstadt suchen.',
    Icon: MapPin,
    visual: LocalSeoMiniVisual,
  },
  {
    title: 'Technisches SEO',
    quote: 'Schnelle Websites mit starken Core Web Vitals.',
    Icon: Gauge,
    visual: TechSeoMiniVisual,
  },
  {
    title: 'Content & Struktur',
    quote: 'Klare Seitenstruktur für bessere Rankings.',
    Icon: FileStack,
    visual: ContentMiniVisual,
  },
] as const

/** Drei kompakte Feature-Karten für /seo-darmstadt */
export default function SeoDarmstadtFeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20" aria-labelledby="leistungen-seo-heading">
      <h2 id="leistungen-seo-heading" className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        Unsere SEO-Module für nachhaltiges Wachstum
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
        {FEATURES.map(({ title, quote, Icon, visual: Visual }) => (
          <article
            key={title}
            className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm ring-1 ring-slate-900/[0.03] transition-shadow hover:shadow-md md:min-h-[11.5rem]"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner shadow-blue-900/5 ring-1 ring-blue-100/80">
                <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={2.25} aria-hidden />
              </span>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-base font-bold tracking-tight text-slate-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-snug text-slate-600">&bdquo;{quote}&rdquo;</p>
              </div>
            </div>
            <div className="mt-4 flex flex-1 flex-col justify-end border-t border-slate-100 pt-3">
              <Visual />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function LocalSeoMiniVisual() {
  return (
    <div className="flex items-center justify-between gap-2" aria-hidden>
      <svg viewBox="0 0 120 36" className="h-9 w-full max-w-[9rem] text-slate-400/90">
        <circle cx="22" cy="18" r="3" className="fill-blue-200" />
        <circle cx="52" cy="12" r="2.5" className="fill-slate-300" />
        <circle cx="78" cy="22" r="2.5" className="fill-slate-300" />
        <circle cx="98" cy="14" r="2" className="fill-slate-200" />
        <path
          d="M62 26 L62 14"
          className="stroke-blue-600"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M62 26 L56 20 L68 20 Z"
          className="fill-blue-600"
        />
      </svg>
      <span className="shrink-0 rounded-md bg-slate-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 ring-1 ring-slate-200/90">
        Maps
      </span>
    </div>
  )
}

function TechSeoMiniVisual() {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <div className="relative h-11 w-11 shrink-0">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle cx="18" cy="18" r="14" fill="none" className="stroke-slate-100" strokeWidth="5" />
          <circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            className="stroke-emerald-500"
            strokeWidth="5"
            strokeDasharray="68 100"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold tabular-nums text-slate-800">
          98
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="w-[92%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          CWV im grünen Bereich
        </div>
      </div>
    </div>
  )
}

function ContentMiniVisual() {
  return (
    <div className="space-y-1.5 pt-0.5" aria-hidden>
      <div className="flex items-center gap-2">
        <span className="h-2 w-8 shrink-0 rounded-sm bg-blue-600/90" />
        <span className="h-2 flex-1 rounded-sm bg-slate-200" />
      </div>
      <div className="flex items-center gap-2 pl-2">
        <span className="h-2 w-6 shrink-0 rounded-sm bg-blue-400/85" />
        <span className="h-2 flex-1 rounded-sm bg-slate-200/95" />
      </div>
      <div className="flex items-center gap-2 pl-4">
        <span className="h-2 w-5 shrink-0 rounded-sm bg-slate-300" />
        <span className="h-2 flex-1 rounded-sm bg-slate-100" />
      </div>
      <p className="pt-1 text-[10px] font-medium text-slate-500">H1 → Unterseiten → Conversion</p>
    </div>
  )
}
