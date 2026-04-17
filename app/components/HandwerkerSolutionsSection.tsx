import Link from 'next/link'
import { ArrowRight, Compass, MapPin, Phone, Timer, Users } from 'lucide-react'

const features = [
  {
    icons: [Timer, Phone] as const,
    title: 'Keine Zeit für Telefon-Marathons?',
    text: (
      <>
        Ihre Website filtert Voranfragen. Statt abends stundenlang Termine zu koordinieren, erhalten Sie
        qualifizierte Anfragen direkt über ein einfaches Formular – schlüsselfertig.
      </>
    ),
  },
  {
    icons: [Users] as const,
    title: 'Gesellen & Azubis verzweifelt gesucht?',
    text: (
      <>
        Der moderne Fachkräftemangel ist real. Wir verwandeln Ihre Seite in ein Magnet für talentierte
        Mitarbeiter. Zeigen Sie Ihre Team-Kultur und überzeugen Sie Bewerber, noch bevor sie sich bewerben.
      </>
    ),
  },
  {
    icons: [Compass, MapPin] as const,
    title: 'Die Konkurrenz ist auf Google sichtbarer?',
    text: (
      <>
        Wir sorgen dafür, dass Ihr Betrieb in Darmstadt und Umgebung ganz oben steht. Wenn Kunden nach einem
        Fachbetrieb in Pfungstadt oder Eberstadt suchen, werden{' '}
        <em className="italic font-semibold text-slate-900">Sie</em> gefunden, nicht der Wettbewerb.
      </>
    ),
  },
] as const

export default function HandwerkerSolutionsSection() {
  return (
    <section
      className="relative w-full bg-white py-16 md:py-24"
      aria-labelledby="handwerker-solutions-heading"
      id="handwerker-loesungen"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2
            id="handwerker-solutions-heading"
            className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.5rem] lg:leading-tight"
          >
            Digitales Handwerk aus Pfungstadt: Wir bauen Webseiten, die Ihnen Arbeit abnehmen.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 md:text-xl">
            Maßgeschneiderte Lösungen statt Stangenware – persönlich, transparent und effizient.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
          {features.map(({ icons, title, text }) => (
            <article
              key={title}
              className="flex h-full flex-col rounded-xl border border-slate-200/90 bg-white p-8 shadow-md shadow-slate-900/5 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-50/40 hover:shadow-lg hover:shadow-slate-900/10 md:p-9"
            >
              <div
                className="mb-5 flex h-12 w-fit min-w-[3rem] items-center justify-center gap-1.5 rounded-lg bg-blue-100 px-3"
                aria-hidden
              >
                {icons.map((Icon, iconIndex) => (
                  <Icon key={iconIndex} className="h-5 w-5 shrink-0 text-blue-600" />
                ))}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 md:text-[1.35rem]">{title}</h3>
              <p className="flex-1 text-base leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center md:mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Ihre Web-Präsenz: So professionell wie Ihre Werkstatt.
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl">
            Verlassen Sie sich nicht auf Zufalls-Anfragen. Investieren Sie in eine digitale Präsenz, die
            planbar Kunden und Mitarbeiter gewinnt.
          </p>
          <div className="mt-8">
            <Link
              href="/webdesign-handwerker"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-md shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.98]"
              aria-label="Erfahren Sie mehr – Webdesign für Handwerker in Südhessen"
            >
              Erfahren Sie mehr
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
