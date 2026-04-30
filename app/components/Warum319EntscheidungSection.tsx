import Link from 'next/link'
import { Check, X } from 'lucide-react'

const standardNachteile = [
  'Standard Baukasten-Vorlage',
  'Langsame Ladezeiten',
  'Wenig Anfragen/Umsatz',
  'Schlechte Google-Platzierung',
  'Schwierige Mitarbeiterfindung',
  'Unklare Kosten',
  'Unsicher & Fehleranfällig',
  'DSGVO-Risiken',
] as const

const profiVorteile = [
  'Individuelles Maßdesign',
  'Extreme Ladegeschwindigkeit',
  'Automatisierte Neukundengewinnung',
  'Top-Platzierung auf Google',
  'Attraktives Arbeitgeberbild',
  'Transparente Festpreise',
  'Maximale Sicherheit & Stabilität',
  '100% DSGVO-konform',
] as const

export default function Warum319EntscheidungSection() {
  return (
    <section
      className="w-full bg-white px-6 pb-16 pt-44 md:pb-24 md:pt-56 lg:pb-28 lg:pt-64"
      aria-labelledby="warum-319-entscheidung-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="warum-319-entscheidung-heading"
          className="text-balance text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.35rem] lg:leading-tight"
        >
          Warum{' '}
          <span className="whitespace-nowrap text-[1.1em] font-bold text-blue-600 md:text-[1.14em] lg:text-[1.16em]">
            319Webdesign
          </span>{' '}
          die richtige Entscheidung ist
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* Links: Standard / ohne strategisches Webdesign */}
          <article
            className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-8 shadow-lg shadow-slate-900/10 md:p-10"
            aria-labelledby="vergleich-standard-heading"
          >
            <header className="border-b border-slate-200 pb-6">
              <h3 id="vergleich-standard-heading" className="text-xl font-bold text-slate-900 md:text-2xl">
                Standard-Homepage
              </h3>
              <p className="mt-2 text-base font-semibold text-red-600 md:text-lg">ohne strategisches Webdesign</p>
            </header>
            <ul className="mt-8 flex flex-col gap-5" role="list">
              {standardNachteile.map((punkt) => (
                <li key={punkt} className="flex gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-red-200/80"
                    aria-hidden
                  >
                    <X className="h-5 w-5 stroke-[2.5]" />
                  </span>
                  <span className="pt-1 text-base leading-relaxed text-slate-700 md:text-[1.05rem]">{punkt}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Rechts: Profi / mit 319Webdesign */}
          <article
            className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-slate-900/15 md:p-10"
            aria-labelledby="vergleich-profi-heading"
          >
            <header className="border-b border-slate-200 pb-6">
              <h3 id="vergleich-profi-heading" className="text-xl font-bold text-slate-900 md:text-2xl">
                Profi-Website
              </h3>
              <p className="mt-2 text-base font-semibold text-emerald-600 md:text-lg">mit 319Webdesign</p>
            </header>
            <ul className="mt-8 flex flex-col gap-5" role="list">
              {profiVorteile.map((punkt) => (
                <li key={punkt} className="flex gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200/80"
                    aria-hidden
                  >
                    <Check className="h-5 w-5 stroke-[2.5]" />
                  </span>
                  <span className="pt-1 text-base leading-relaxed text-slate-700 md:text-[1.05rem]">{punkt}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-lg border border-amber-300/70 bg-amber-400 px-8 py-3.5 text-base font-semibold text-slate-950 shadow-md shadow-amber-900/25 transition-all duration-300 hover:scale-[1.02] hover:border-amber-200 hover:bg-amber-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            aria-label="Kostenfreies Angebot anfordern – zum Kontaktformular"
          >
            Kostenfreies Angebot anfordern
          </Link>
        </div>
      </div>
    </section>
  )
}
