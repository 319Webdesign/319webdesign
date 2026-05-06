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
      className="w-full bg-white px-6 pb-16 pt-16 md:pb-24 md:pt-20 lg:pb-28 lg:pt-24"
      aria-labelledby="warum-319-entscheidung-heading"
      aria-describedby="warum-319-entscheidung-sub"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="warum-319-entscheidung-heading"
          className="mx-auto max-w-4xl text-balance text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.35rem] lg:leading-tight"
        >
          Der Unterschied zwischen einer Website – und einer, die Kunden bringt
        </h2>
        <p
          id="warum-319-entscheidung-sub"
          className="mx-auto mt-4 max-w-2xl text-pretty text-center text-base leading-relaxed text-slate-600 md:mt-5 md:text-lg"
        >
          Viele Unternehmen verlieren täglich Anfragen durch eine Website, die{' '}
          <Link
            href="/seo-darmstadt"
            className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800 hover:decoration-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
          >
            bei Google kaum gefunden wird
          </Link>{' '}
          oder nicht zur Kontaktaufnahme führt – ohne dass sie es merken.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* Links: Standard / ohne strategisches Webdesign */}
          <article
            className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-8 shadow-lg shadow-slate-900/10 md:p-10"
            aria-labelledby="vergleich-standard-heading"
          >
            <header className="border-b border-slate-200 pb-6">
              <h3 id="vergleich-standard-heading" className="text-xl font-bold text-slate-900 md:text-2xl">
                Typische Website ohne Strategie
              </h3>
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
          <div className="relative md:z-[1]">
            <div
              className="pointer-events-none absolute -inset-2 rounded-[1.25rem] bg-gradient-to-br from-emerald-400/18 via-blue-500/12 to-emerald-500/15 opacity-80 blur-xl md:-inset-2.5 md:rounded-[1.45rem] md:blur-2xl"
              aria-hidden
            />
            <article
              className="relative flex flex-col rounded-2xl border border-emerald-300/55 bg-white p-8 shadow-[0_16px_40px_-18px_rgba(15,23,42,0.14),0_0_28px_-16px_rgba(52,211,153,0.18)] md:p-10"
              aria-labelledby="vergleich-profi-heading"
            >
              <header className="border-b border-slate-200 pb-6">
                <h3 id="vergleich-profi-heading" className="text-xl font-bold text-slate-900 md:text-2xl">
                  Website, die Kunden gewinnt
                </h3>
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
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 md:mt-14">
          <Link
            href="/unser-angebot"
            className="inline-flex items-center justify-center rounded-lg border border-amber-300/70 bg-amber-400 px-8 py-3.5 text-base font-semibold text-slate-950 shadow-md shadow-amber-900/25 transition-all duration-300 hover:scale-[1.02] hover:border-amber-200 hover:bg-amber-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            aria-label="Kostenfreies Angebot anfordern – zur Seite Unser Angebot"
          >
            Kostenfreies Angebot anfordern
          </Link>
          <p className="max-w-xl text-center text-sm text-slate-600 md:text-base">
            Details zu Ablauf und Paketen finden Sie unter{' '}
            <Link
              href="/leistungen"
              className="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800 hover:decoration-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
            >
              Leistungen für Webdesign &amp; SEO
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
