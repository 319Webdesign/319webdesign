import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ClipboardCheck } from 'lucide-react'

const checkPoints = [
  'Performance-Analyse (PageSpeed-Check)',
  'Mobile Nutzerfreundlichkeit',
  'Sichtbarkeit bei Google in der Region Darmstadt/Südhessen',
  'Potentiale für mehr Kundenanfragen',
] as const

/** Abschluss-CTA nur /website-relaunch – eine H2, kein weiteres Heading. */
export default function WebsiteRelaunchClosingCtaSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-slate-800/80 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-5 py-14 sm:px-6 sm:py-16 md:py-24"
      aria-labelledby="relaunch-closing-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.22),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-10 md:text-left">
          <div className="flex shrink-0 flex-col items-center gap-3 md:items-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-blue-400/40 bg-slate-800/80 shadow-lg shadow-blue-900/40 ring-2 ring-white/10 sm:h-28 sm:w-28">
              <Image
                src="/maik-removebg.png"
                alt="Maik Schmidt – Webdesigner, persönlicher Ansprechpartner für Ihren Website-Check"
                width={224}
                height={224}
                className="h-full w-full object-contain object-top scale-[1.12]"
              />
            </div>
            <div
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm sm:text-sm"
              aria-hidden
            >
              <ClipboardCheck className="h-4 w-4 shrink-0 text-blue-400" strokeWidth={2} />
              <span>Strukturierter Check</span>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h2
              id="relaunch-closing-cta-heading"
              className="text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              Ihr Weg zu einer Website, die wirklich für Sie arbeitet
            </h2>

            <p className="mt-5 text-xl font-extrabold leading-snug text-white sm:text-2xl md:text-3xl">
              Kostenloser Website-Check für Unternehmen in <strong className="font-extrabold text-blue-300">Darmstadt</strong>
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Ich analysiere Ihre aktuelle Website und zeige Ihnen in{' '}
              <strong className="font-semibold text-white">20 Minuten</strong> konkret, was ein Relaunch bringen würde —{' '}
              <strong className="font-semibold text-white">unverbindlich</strong> und ohne versteckte Kosten.
            </p>

            <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-blue-300/90">
              Was wir im Check prüfen:
            </p>
            <ul className="mt-3 space-y-2.5 text-left text-base leading-relaxed text-slate-200 sm:text-lg" role="list">
              {checkPoints.map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)]"
                    aria-hidden
                  />
                  <span>
                    {line.includes('Darmstadt') ? (
                      <>
                        Sichtbarkeit bei Google in der Region <strong className="font-semibold text-white">Darmstadt</strong>
                        /Südhessen
                      </>
                    ) : line.includes('Kundenanfragen') ? (
                      <>
                        Potentiale für mehr <strong className="font-semibold text-white">Kundenanfragen</strong>
                      </>
                    ) : (
                      line
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:items-center md:items-start">
              <Link
                href="/kontakt"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 text-center text-base font-bold text-white shadow-lg shadow-blue-600/35 transition-transform hover:scale-[1.02] hover:shadow-blue-500/45 active:scale-[0.99] sm:w-auto sm:min-w-[min(100%,20rem)] sm:px-8 sm:text-lg"
              >
                Jetzt kostenlosen Website-Check in <strong className="font-extrabold">Darmstadt</strong> anfragen
                <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
              </Link>
              <p className="text-center text-sm text-slate-400 md:text-left">
                Transparent, ohne Verkaufsdruck – Sie entscheiden in Ruhe, ob und wann es für Sie passt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
