import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeEuro,
  Info,
  LayoutList,
  Phone,
  Search,
  Sparkles,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type Benefit = {
  headline: string
  body: ReactNode
  micro: string
  icon: LucideIcon
  featured?: boolean
}

/** Erste Reihe Desktop: Highlight mittig. */
const benefits: Benefit[] = [
  {
    headline: 'Bei Google sichtbar in Darmstadt',
    body: (
      <>
        Sauberer Aufbau und Inhalte auf{' '}
        <Link
          href="/seo-darmstadt"
          className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800 hover:decoration-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
        >
          lokale Suchbegriffe
        </Link>{' '}
        ausgerichtet – damit dich Kunden finden, wenn sie aktiv einen Anbieter suchen.
      </>
    ),
    micro: 'Regionale Relevanz statt beliebigem Template-Text.',
    icon: Search,
  },
  {
    headline: 'Mehr Anfragen statt nur Besucher',
    body:
      'Klare Botschaften und sichtbare Kontaktwege: Die Seite soll konkret Anfragen auslösen – nicht nur Traffic ohne Ende.',
    micro: 'Ausrichtung auf Handwerk und lokale Dienstleister.',
    icon: TrendingUp,
    featured: true,
  },
  {
    headline: 'Klare Struktur, die Kunden führt',
    body:
      'Leistungen, Ablauf und Kontakt auf einen Blick – weniger Orientierungsstress, weniger Absprünge, mehr qualifizierte Kontakte.',
    micro: 'Nutzerführung statt überfrachteter Startseiten.',
    icon: LayoutList,
  },
  {
    headline: 'Schnelle Ladezeiten ohne Absprünge',
    body:
      'Schlanke Technik und optimierte Medien. Auf dem Smartphone entscheidet Tempo oft über bleiben oder wegklicken.',
    micro: 'Technik, die Nutzer und Suchmaschinen erwarten.',
    icon: Zap,
  },
  {
    headline: 'Weniger unnötige Anrufe durch klare Infos',
    body:
      'Zeiten, Gebiet und FAQs stehen online – wer anruft, ist häufig schon informiert und weiter im Entscheidungsprozess.',
    micro: 'Mehr Zeit für echte Aufträge.',
    icon: Info,
  },
  {
    headline: 'Festpreise und nachvollziehbare Schritte',
    body:
      'Du weißt vor dem Start, was enthalten ist und wie wir arbeiten – transparent statt stundenbasierter Überraschungen.',
    micro: 'Investition planbar, Projektablauf nachvollziehbar.',
    icon: BadgeEuro,
  },
]

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const Icon = benefit.icon
  const featured = benefit.featured === true

  if (featured) {
    return (
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-amber-400/60 bg-gradient-to-b from-white via-white to-amber-50/90 p-7 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_24px_48px_-12px_rgba(15,23,42,0.28),0_0_0_1px_rgba(251,191,36,0.15)] transition-[transform,box-shadow] duration-300 md:p-8 lg:hover:-translate-y-1 lg:hover:shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_32px_64px_-16px_rgba(15,23,42,0.35)]">
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-400/25 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
          aria-hidden
        />
        <div className="relative mb-4 flex items-start justify-between gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-900/25 ring-1 ring-white/40">
            <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-600/15 bg-amber-400/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-950">
            <Sparkles className="h-3 w-3" aria-hidden />
            Kernnutzen
          </span>
        </div>
        <h3 className="relative mb-3 text-lg font-bold leading-snug tracking-tight text-slate-950 md:text-xl">
          {benefit.headline}
        </h3>
        <p className="relative mb-5 flex-1 text-[0.9375rem] leading-relaxed text-slate-700 md:text-base">
          {benefit.body}
        </p>
        <p className="relative mt-auto border-t border-amber-300/50 pt-4 text-xs font-medium leading-snug text-slate-600 md:text-sm">
          {benefit.micro}
        </p>
      </article>
    )
  }

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_2px_8px_rgba(15,23,42,0.04),0_16px_40px_-12px_rgba(15,23,42,0.12)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-amber-200/90 hover:shadow-[0_8px_24px_-8px_rgba(251,191,36,0.28),0_24px_48px_-16px_rgba(15,23,42,0.14)] md:p-7 lg:p-8">
      <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600/[0.07] ring-1 ring-blue-600/[0.12] transition-colors duration-300 group-hover:bg-blue-600/[0.11]">
        <Icon className="h-6 w-6 text-blue-600" strokeWidth={1.75} aria-hidden />
      </div>
      <h3 className="mb-3 text-base font-semibold leading-snug tracking-tight text-slate-900 md:text-lg">
        {benefit.headline}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem]">{benefit.body}</p>
      <p className="mt-auto border-t border-slate-100 pt-4 text-xs font-medium leading-snug text-slate-500 md:text-sm">
        {benefit.micro}
      </p>
    </article>
  )
}

export default function VorteileWebsiteSection() {
  return (
    <section
      className="relative z-10 mt-10 overflow-visible bg-white px-6 pb-12 pt-16 md:mt-14 md:pb-16 md:pt-20"
      aria-labelledby="vorteile-website-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_-5%,rgba(37,99,235,0.055),transparent_58%),radial-gradient(ellipse_55%_35%_at_100%_100%,rgba(251,191,36,0.06),transparent_45%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto min-w-0 max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700 md:text-xs">
            Strategie · Technik · Anfragen
          </p>
          <h2
            id="vorteile-website-heading"
            className="text-balance text-3xl font-bold tracking-[-0.02em] text-slate-900 md:text-4xl lg:text-[2.5rem] lg:leading-[1.12]"
          >
            So bringt dir deine Website messbar mehr Kunden
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 md:mt-6 md:text-lg md:leading-relaxed">
            Wir entwickeln Websites für{' '}
            <Link
              href="/webdesign/darmstadt"
              className="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800 hover:decoration-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
            >
              Unternehmen in Darmstadt
            </Link>
            , die <span className="font-semibold text-blue-700">bei Google gefunden werden</span> und{' '}
            <span className="font-semibold text-blue-700">konkrete Anfragen</span> liefern – ohne leere Versprechen.
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {benefits.map((b) => (
            <BenefitCard key={b.headline} benefit={b} />
          ))}
        </div>

        <aside
          id="vorteile-cta"
          className="relative mx-auto mt-14 max-w-2xl md:mt-16"
          aria-labelledby="vorteile-cta-heading"
        >
          <div
            className="pointer-events-none absolute -inset-3 rounded-[1.6rem] bg-blue-600/10 blur-2xl md:-inset-4 md:rounded-[2rem]"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[1.25rem] border border-blue-500/25 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 p-8 shadow-[0_24px_48px_-12px_rgba(30,58,138,0.35)] md:rounded-3xl md:p-10">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_85%_0%,rgba(251,191,36,0.12),transparent_50%)]"
              aria-hidden
            />
            <div className="relative">
              <h3 id="vorteile-cta-heading" className="sr-only">
                Nächster Schritt
              </h3>
              <p className="text-center text-sm font-medium leading-relaxed text-blue-50 md:text-base">
                Kurzes Gespräch, klare Einordnung deiner Situation –{' '}
                <span className="text-white">ohne Verpflichtung</span>.
              </p>
              <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/kontakt"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-amber-400 to-amber-500 px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_12px_28px_-6px_rgba(251,191,36,0.55)] ring-1 ring-amber-300/80 transition-[transform,filter] hover:brightness-[1.03] hover:shadow-[0_1px_0_rgba(255,255,255,0.55)_inset,0_16px_36px_-8px_rgba(251,191,36,0.6)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700 sm:flex-none sm:min-w-[240px]"
                  aria-describedby="vorteile-cta-footnote"
                >
                  Kostenloses Erstgespräch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-base font-semibold text-white transition-colors hover:border-white/55 hover:bg-white/18 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700 sm:flex-none"
                >
                  Erfolgreiche Projekte im Portfolio
                </Link>
              </div>
              <p
                id="vorteile-cta-footnote"
                className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs text-blue-100/95 md:text-sm"
              >
                <span>Direkt und persönlich aus Darmstadt & Umgebung</span>
                <span className="hidden sm:inline text-blue-300/70" aria-hidden>
                  ·
                </span>
                <a
                  href="tel:+491773236454"
                  className="inline-flex items-center gap-1.5 font-medium text-white underline-offset-4 hover:underline tabular-nums"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                  +49 177 3236 454
                </a>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
