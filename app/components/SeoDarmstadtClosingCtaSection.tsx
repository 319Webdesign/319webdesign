import Link from 'next/link'
import { ArrowRight, Check, Clock } from 'lucide-react'

const trustPoints = [
  'Persönlicher Ansprechpartner aus der Region',
  'Klare Strategie statt SEO-Buzzwords',
  'Kostenloses Erstgespräch ohne Verpflichtung',
] as const

const statChips = [
  'Google Business optimiert',
  'Local SEO',
  'Core Web Vitals',
  'Mehr lokale Sichtbarkeit',
] as const

/** Abschließende Premium-CTA für /seo-darmstadt */
export default function SeoDarmstadtClosingCtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28" aria-labelledby="seo-closing-cta-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(59,130,246,0.09),transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#081225] via-[#0a1f48] to-[#0F2E6D] px-6 py-10 shadow-[0_40px_110px_-30px_rgba(8,18,37,0.7)] ring-1 ring-white/10 md:px-10 md:py-14 lg:px-14 lg:py-16">
        <div className="pointer-events-none absolute -right-28 top-4 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(380px,440px)] lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:pr-2">
            <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-100 backdrop-blur-sm">
              LOKALE SEO FÜR DARMSTADT &amp; SÜDHESSEN
            </p>
            <h2
              id="seo-closing-cta-heading"
              className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.85rem] lg:leading-[1.08]"
            >
              Bereit für mehr Sichtbarkeit in Darmstadt?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-50/90 md:text-lg md:leading-relaxed">
              Lassen Sie uns gemeinsam analysieren, warum Ihre Website aktuell nicht das volle Potenzial ausschöpft -
              und welche konkreten Maßnahmen mehr Sichtbarkeit, bessere Rankings und qualifizierte Anfragen bringen
              können.
            </p>
            <ul className="mt-10 space-y-3.5 text-sm font-medium text-blue-50/95 md:text-[15px] lg:pr-8">
              {trustPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-300/70 bg-emerald-400/15 text-emerald-200">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-2 lg:order-none lg:self-center">
            <div className="relative overflow-hidden rounded-[26px] border border-white/20 bg-white/10 p-6 shadow-[0_24px_64px_-20px_rgba(15,23,42,0.7)] backdrop-blur-xl ring-1 ring-white/20 md:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-300/20 blur-2xl" aria-hidden />

              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-100">KOSTENLOSE SEO-ERSTANALYSE</p>
              <p className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white md:text-[1.9rem]">
                Potenziale erkennen. Rankings verbessern.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-blue-100/90 md:text-base">
                In einem unverbindlichen Gespräch analysieren wir Ihre aktuelle Sichtbarkeit, lokale Auffindbarkeit
                und technische Basis.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {statChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-50/95 shadow-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <Link
                href="/kontakt"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300/70 bg-amber-400 px-5 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-amber-900/30 transition-all duration-300 hover:scale-[1.01] hover:border-amber-200 hover:bg-amber-500 hover:shadow-xl active:scale-[0.98]"
              >
                Kostenlose Analyse anfragen
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
              </Link>

              <p className="mt-4 inline-flex items-center gap-2 text-sm text-blue-100/90">
                <Clock className="h-4 w-4 shrink-0 text-blue-200" aria-hidden />
                Antwort meist innerhalb von 24 Stunden.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
