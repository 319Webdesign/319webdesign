import type { ReactNode } from 'react'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  Building2,
  Camera,
  Hammer,
  Stethoscope,
  UtensilsCrossed,
} from 'lucide-react'

const items: {
  icon: LucideIcon
  label: string
  href: string
  body: ReactNode
}[] = [
  {
    icon: Hammer,
    label: 'Handwerk',
    href: '/webdesign-handwerker',
    body: (
      <>
        <strong>Handwerksbetriebe</strong> in allen Darmstädter Stadtteilen
      </>
    ),
  },
  {
    icon: Building2,
    label: 'Immobilien',
    href: '/immobilienmakler-webdesign',
    body: (
      <>
        <strong>Immobilienmakler</strong> und Hausverwaltungen in <strong>Darmstadt</strong> und{' '}
        <strong>Südhessen</strong>
      </>
    ),
  },
  {
    icon: Stethoscope,
    label: 'Gesundheit',
    href: '/leistungen/webdesign-launch',
    body: <>Praxen, Therapeuten und Gesundheitsdienstleister</>,
  },
  {
    icon: UtensilsCrossed,
    label: 'Gastronomie',
    href: '/leistungen/webdesign-launch',
    body: <>Gastronomie, Cafés und lokale Einzelhändler</>,
  },
  {
    icon: Briefcase,
    label: 'Dienstleister',
    href: '/leistungen/webdesign-launch',
    body: <>Dienstleister, Berater und Freiberufler</>,
  },
  {
    icon: Camera,
    label: 'Kreative',
    href: '/leistungen/webdesign-launch',
    body: <>Kreativschaffende, Fotografen und Medienproduzenten</>,
  },
]

/**
 * Branchen-Fokus – nur /webdesign/darmstadt. Eine H2, keine H-Tags in den Karten.
 */
export default function DarmstadtBranchenSection() {
  return (
    <section
      className="bg-white py-20 md:py-24 px-6"
      aria-labelledby="darmstadt-branchen-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="darmstadt-branchen-heading"
          className="mb-6 text-center text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
        >
          Für welche Unternehmen eignet sich modernes
          <br />
          Webdesign besonders?
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-slate-700 md:text-xl">
          Ich arbeite mit Unternehmen unterschiedlichster Branchen zusammen — überall dort, wo lokale
          Sichtbarkeit und professioneller Auftritt den Unterschied machen:
        </p>

        <ul className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {items.map(({ icon: Icon, label, href, body }) => (
            <li key={label} className="flex h-full min-h-0">
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-slate-50/40 p-8 shadow-sm ring-1 ring-slate-900/[0.02] transition-all duration-300 hover:border-amber-300/80 hover:shadow-md hover:shadow-amber-900/10 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <span
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-900/25 ring-1 ring-white/40 transition-transform duration-300 group-hover:scale-[1.04]"
                  aria-hidden
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <p className="mb-3 text-lg font-bold text-slate-900">
                  <span className="text-amber-800">{label}</span>
                </p>
                <p className="text-base leading-relaxed text-slate-700">{body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
