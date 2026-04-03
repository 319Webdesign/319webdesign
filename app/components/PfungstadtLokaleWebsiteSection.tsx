import { Gauge, Search, ShieldCheck } from 'lucide-react'

const goals = [
  {
    icon: Search,
    body: (
      <>
        <span className="font-bold text-slate-900">Gefunden werden:</span> Lokale Suchmaschinenoptimierung
        sorgt dafür, dass Sie bei Suchanfragen wie &quot;Handwerker <strong>Pfungstadt</strong>&quot; oder
        &quot;Makler Südhessen&quot; sichtbar sind.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    body: (
      <>
        <span className="font-bold text-slate-900">Vertrauen aufbauen:</span> Ein professionelles Design,
        echte Referenzen aus der Region und klare Inhalte machen aus Besuchern Anfragen.
      </>
    ),
  },
  {
    icon: Gauge,
    body: (
      <>
        <span className="font-bold text-slate-900">Technisch performen:</span> Mit Next.js entwickelte
        Websites erreichen einen PageSpeed-Score von <strong>99/100</strong> – das verbessert das
        Google-Ranking messbar.
      </>
    ),
  },
] as const

/**
 * Verkaufsstarke Sektion nur /webdesign/pfungstadt – Standard vs. Next.js, eine H2, keine H3.
 */
export default function PfungstadtLokaleWebsiteSection() {
  return (
    <section
      className="border-y border-slate-200/90 bg-slate-50 py-16 md:py-20 px-6"
      aria-labelledby="pfungstadt-lokale-website-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-8 shadow-sm backdrop-blur-sm md:px-10 md:py-12">
          <div className="mb-10 text-center">
            <h2
              id="pfungstadt-lokale-website-heading"
              className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
            >
              Was eine lokale Website wirklich leisten muss
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              Viele Unternehmenswebsites in der Region <strong>Pfungstadt</strong> und{' '}
              <strong>Darmstadt</strong> haben eines gemeinsam: Sie existieren, aber sie arbeiten nicht.
              Besucher kommen – und springen ab, weil die Seite zu langsam lädt, auf dem Smartphone schlecht
              aussieht oder keine klare Handlungsaufforderung hat.
            </p>
          </div>

          <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {goals.map(({ icon: Icon, body }, i) => (
              <li
                key={i}
                className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm"
              >
                <div
                  className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/10"
                  aria-hidden
                >
                  <Icon className="h-6 w-6 text-blue-600" strokeWidth={1.75} />
                </div>
                <p className="text-base leading-relaxed text-slate-700">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
