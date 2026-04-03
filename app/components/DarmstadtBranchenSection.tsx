import type { ReactNode } from 'react'
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
  body: ReactNode
}[] = [
  {
    icon: Hammer,
    label: 'Handwerk',
    body: (
      <>
        <strong>Handwerksbetriebe</strong> in allen Darmstädter Stadtteilen
      </>
    ),
  },
  {
    icon: Building2,
    label: 'Immobilien',
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
    body: <>Praxen, Therapeuten und Gesundheitsdienstleister</>,
  },
  {
    icon: UtensilsCrossed,
    label: 'Gastronomie',
    body: <>Gastronomie, Cafés und lokale Einzelhändler</>,
  },
  {
    icon: Briefcase,
    label: 'Dienstleister',
    body: <>Dienstleister, Berater und Freiberufler</>,
  },
  {
    icon: Camera,
    label: 'Kreative',
    body: <>Kreativschaffende, Fotografen und Medienproduzenten</>,
  },
]

/**
 * Branchen-Fokus – nur /webdesign/darmstadt. Eine H2, keine H-Tags in den Karten.
 */
export default function DarmstadtBranchenSection() {
  return (
    <section
      className="border-t border-slate-100 bg-white py-20 md:py-24 px-6"
      aria-labelledby="darmstadt-branchen-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="darmstadt-branchen-heading"
          className="mb-6 text-center text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
        >
          Welche Unternehmen in <strong>Darmstadt</strong> profitieren besonders?
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-slate-700 md:text-xl">
          Ich arbeite mit Unternehmen unterschiedlichster Branchen zusammen — überall dort, wo lokale
          Sichtbarkeit und professioneller Auftritt den Unterschied machen:
        </p>

        <ul className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {items.map(({ icon: Icon, label, body }) => (
            <li
              key={label}
              className="flex flex-col rounded-2xl border border-slate-200/90 bg-slate-50/40 p-8 shadow-sm ring-1 ring-slate-900/[0.02]"
            >
              <span
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/80"
                aria-hidden
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="mb-3 text-lg font-bold text-slate-900">
                <span className="text-blue-600">{label}</span>
              </p>
              <p className="text-base leading-relaxed text-slate-700">{body}</p>
            </li>
          ))}
        </ul>

        <p className="mx-auto max-w-3xl border-t border-slate-200 pt-12 text-center text-lg leading-relaxed text-slate-700 md:text-xl">
          Die Gemeinsamkeit: Alle suchen eine Lösung, die über ein simples Visitenkarten-Web hinausgeht —
          eine Website, die arbeitet, während sie es nicht tun.
        </p>
      </div>
    </section>
  )
}
