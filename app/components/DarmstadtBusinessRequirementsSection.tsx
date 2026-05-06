import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Code2,
  FileJson2,
  MapPinned,
  Search,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'

const techRow = [
  { Icon: Code2, label: 'Next.js' },
  { Icon: Activity, label: 'Core Web Vitals' },
  { Icon: Sparkles, label: 'Schema.org' },
  { Icon: FileJson2, label: 'JSON-LD' },
  { Icon: Search, label: 'Local SEO' },
] as const

const bentoLift =
  'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-20px_rgba(15,23,42,0.12)]'

/**
 * „Was lokale Unternehmen in Darmstadt wirklich brauchen“ — Premium-Bento, nur /webdesign/darmstadt.
 */
export default function DarmstadtBusinessRequirementsSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-slate-50 via-white to-blue-50/[0.35] px-6 py-20 md:py-28"
      aria-labelledby="darmstadt-business-requirements-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[min(90vw,52rem)] -translate-x-1/2 rounded-full bg-blue-400/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-400/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-14 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 lg:gap-y-0">
          {/* LINKS */}
          <div className="lg:col-span-4 lg:pt-2">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-1.5 text-xs font-medium tracking-wide text-slate-600 shadow-sm shadow-slate-900/[0.03] backdrop-blur-md">
              <span className="text-blue-600">Strategie</span>
              <span className="text-slate-300" aria-hidden>
                ·
              </span>
              <span>Performance</span>
              <span className="text-slate-300" aria-hidden>
                ·
              </span>
              <span>Lokale Sichtbarkeit</span>
            </p>

            <h2
              id="darmstadt-business-requirements-heading"
              className="mb-6 text-[1.65rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl md:text-[2rem] md:leading-tight"
            >
              In <span className="text-blue-600">Darmstadt</span> reicht eine durchschnittliche Website nicht
              mehr aus.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-slate-600 md:text-[1.05rem] md:leading-relaxed">
              <p>
                Wer als <strong className="font-semibold text-slate-800">lokales Unternehmen</strong> online{' '}
                <strong className="font-semibold text-slate-800">sichtbar</strong> werden will, braucht mehr
                als nur ein schönes Layout: Es zählen{' '}
                <strong className="font-semibold text-slate-800">schnelle Ladezeiten</strong>,{' '}
                <strong className="font-semibold text-slate-800">lokale Relevanz</strong> für{' '}
                <strong className="font-semibold text-slate-800">SEO</strong> — und eine Struktur, die
                Besucher zuverlässig in echte <strong className="font-semibold text-slate-800">Anfragen</strong>{' '}
                führt.
              </p>
              <p>
                Genau dort setze ich an: mit durchdachtem{' '}
                <strong className="font-semibold text-slate-800">Webdesign</strong>, das technisch mitspielt
                und inhaltlich überzeugt — damit Ihre Website in Darmstadt und Umgebung nicht nur existiert,
                sondern <strong className="font-semibold text-slate-800">Conversion</strong> liefert.
              </p>
            </div>

            <Link
              href="/kontakt"
              className="group/cta mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Kostenlose Website-Analyse sichern
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
            </Link>
          </div>

          {/* RECHTS — Bento */}
          <div className="flex min-w-0 flex-col gap-4 sm:gap-5 lg:col-span-8">
            <div className="grid auto-rows-min grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:grid-rows-[auto_auto_minmax(0,1fr)]">
              {/* Highlight: Lokale Sichtbarkeit */}
              <article
                className={`group relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/50 p-6 shadow-[0_2px_40px_-12px_rgba(37,99,235,0.18)] ring-1 ring-blue-200/30 backdrop-blur-xl sm:p-7 lg:col-span-8 lg:row-span-2 lg:rounded-3xl lg:p-8 ${bentoLift}`}
              >
                <div
                  className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-blue-400/20 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-indigo-400/15 blur-2xl"
                  aria-hidden
                />

                <div className="relative flex flex-wrap items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-800 shadow-sm ring-1 ring-blue-100/80 backdrop-blur-sm">
                    Wichtigster Faktor
                  </span>
                  <div className="flex items-center gap-2 rounded-2xl bg-white/50 px-3 py-2 ring-1 ring-white/80 backdrop-blur-md">
                    <MapPinned className="h-4 w-4 text-blue-600" aria-hidden />
                    <Search className="h-4 w-4 text-blue-500/90" aria-hidden />
                  </div>
                </div>

                <h3 className="relative mt-5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  <span className="bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
                    Lokale Sichtbarkeit
                  </span>
                </h3>
                <p className="relative mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-relaxed">
                  Für Unternehmen in <strong className="text-slate-800">Darmstadt</strong> und der Region:
                  Suchintention, Ortsbezug und saubere Struktur — damit{' '}
                  <strong className="text-slate-800">lokale SEO</strong> greift und Google Sie den richtigen
                  Suchanfragen zuordnet.
                </p>

                {/* Mini-Visual: dezent, kein Dashboard */}
                <div className="relative mt-6 flex flex-wrap items-center gap-4 rounded-2xl bg-gradient-to-r from-slate-900/[0.03] to-blue-600/[0.04] px-4 py-3.5 ring-1 ring-slate-200/40">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                    Region Darmstadt
                  </div>
                  <div className="hidden h-4 w-px bg-slate-200/80 sm:block" aria-hidden />
                  <div className="flex gap-1.5" aria-hidden>
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-blue-300/80"
                        style={{ opacity: 0.35 + i * 0.2 }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">{'SERP & Maps'}</span>
                </div>
              </article>

              {/* Performance — schmal, höher wirkt durch Padding */}
              <article
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.35rem] bg-white/70 p-5 shadow-[0_8px_32px_-16px_rgba(15,23,42,0.1)] ring-1 ring-white/90 backdrop-blur-xl sm:p-6 lg:col-span-4 lg:row-start-1 lg:min-h-[11.5rem] ${bentoLift}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-600 ring-1 ring-amber-400/25">
                  <Zap className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-bold text-slate-900">Performance</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    <strong className="text-slate-800">Schnelle Websites</strong> — messbar, stabil, ohne
                    Ballast.
                  </p>
                </div>
              </article>

              {/* Conversion */}
              <article
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.35rem] bg-white/70 p-5 shadow-[0_8px_32px_-16px_rgba(15,23,42,0.1)] ring-1 ring-white/90 backdrop-blur-xl sm:p-6 lg:col-span-4 lg:row-start-2 lg:min-h-[11.5rem] ${bentoLift}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 ring-1 ring-violet-400/20">
                  <Target className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-bold text-slate-900">Conversion</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    Klare Wege zur Anfrage — statt Besucher in Sackgassen zu führen.
                  </p>
                </div>
              </article>

              {/* Tech-Zeile — horizontal, reduziert */}
              <div
                className={`relative overflow-hidden rounded-[1.35rem] bg-gradient-to-r from-slate-900/[0.04] via-white/80 to-blue-50/60 px-4 py-5 ring-1 ring-slate-200/50 backdrop-blur-xl sm:px-6 lg:col-span-12 lg:row-start-3 lg:rounded-2xl ${bentoLift}`}
              >
                <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-left">
                  Technische Basis
                </p>
                <ul className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3">
                  {techRow.map(({ Icon, label }) => (
                    <li key={label}>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200/40 transition-colors duration-200 hover:bg-white hover:ring-blue-200/50">
                        <Icon className="h-4 w-4 shrink-0 text-blue-600 opacity-90" strokeWidth={2} aria-hidden />
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
