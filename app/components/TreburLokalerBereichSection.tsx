import Link from 'next/link'
import { MapPin } from 'lucide-react'

const places: { name: string; href?: string; note: string }[] = [
  {
    name: 'Trebur',
    note: 'Mein Standort und Ausgangspunkt für persönliche Betreuung – kurze Wege zu lokalen Unternehmen und Handwerksbetrieben.',
  },
  {
    name: 'Astheim',
    note: 'Ortsteil von Trebur: ideale Nähe für Abstimmung vor Ort und Websites mit starkem lokalem Bezug.',
  },
  {
    name: 'Geinsheim',
    note: 'Ebenfalls Trebur: Betriebe hier profitieren von derselben regionalen Sichtbarkeit und persönlichen Zusammenarbeit.',
  },
  {
    name: 'Groß-Gerau',
    note: 'Kreisstadt mit lebendiger Wirtschaft – Webdesign und SEO für KMU und Handwerk im Kreis Groß-Gerau.',
  },
  {
    name: 'Nauheim',
    note: 'Nachbarort mit kurzen Wegen: moderne Homepages für Betriebe, die regional gefunden werden wollen.',
  },
  {
    name: 'Rüsselsheim',
    href: '/kontakt',
    note: 'Wirtschaftsstarker Standort am Main: professionelle Webauftritte für Unternehmen mit überregionaler Zielgruppe.',
  },
  {
    name: 'Ginsheim-Gustavsburg',
    note: 'Rhein-Main-Lage mit Pendler- und Gewerbepotenzial – digitale Präsenz, die Vertrauen und Anfragen aufbaut.',
  },
]

/**
 * Lokaler Bereich – nur /webdesign/trebur.
 */
export default function TreburLokalerBereichSection() {
  return (
    <section
      className="relative overflow-hidden bg-blue-600 px-6 pb-28 pt-20 md:pb-32 md:pt-28"
      aria-labelledby="trebur-lokal-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(168deg, rgb(29 78 216) 0%, rgb(37 99 235) 45%, rgb(30 64 175) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 28%, rgba(255, 255, 255, 0.14) 0%, transparent 52%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 95% 85% at 50% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 55%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="trebur-lokal-heading"
            className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl"
          >
            Webdesign in Trebur und der Region
          </h2>
          <p className="text-lg leading-relaxed text-blue-50/95 md:text-xl">
            Trebur liegt im Kreis Groß-Gerau – zwischen Mainz, Rüsselsheim und Darmstadt – und ist
            mit den Ortsteilen Astheim und Geinsheim fest in der Rhein-Main-Region verankert. Genau
            hier betreue ich Unternehmen persönlich: als Webdesigner vor Ort, nicht als anonyme
            Fernagentur.
          </p>
        </div>

        <div className="mb-12 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-sm backdrop-blur-sm md:p-10">
          <p className="mb-5 text-base leading-relaxed text-blue-50/90 md:text-lg">
            Viele Betriebe in Trebur brauchen keine überladene Marketingmaschine, sondern eine
            Website, die im Alltag funktioniert: Leistungen erklären, Vertrauen aufbauen, mobil
            Anfragen ermöglichen und bei Google lokal sichtbar sein. Ob Handwerk, Dienstleistung
            oder mittelständisches Unternehmen – der digitale Auftritt ist oft der erste Kontakt,
            bevor jemand anruft oder vorbeikommt.
          </p>
          <p className="text-base leading-relaxed text-blue-50/90 md:text-lg">
            Gleichzeitig reicht der Einzugsbereich weit über die Gemeindegrenze hinaus. Kunden aus
            Nauheim, Groß-Gerau, Rüsselsheim oder Ginsheim-Gustavsburg suchen Anbieter in der Nähe –
            und vergleichen online. Wer hier mit einer veralteten Seite auftritt, verliert Aufträge
            an Betriebe mit klarerer Präsenz. Deshalb betreue ich Kunden in der gesamten Region und
            verknüpfe bei Bedarf Themen wie{' '}
            <Link
              href="/seo-darmstadt"
              className="font-medium text-white underline decoration-blue-200/50 underline-offset-2 hover:decoration-white"
            >
              SEO Darmstadt
            </Link>{' '}
            oder{' '}
            <Link
              href="/webdesign/darmstadt"
              className="font-medium text-white underline decoration-blue-200/50 underline-offset-2 hover:decoration-white"
            >
              Webdesign Darmstadt
            </Link>{' '}
            mit Ihrer lokalen Strategie.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {places.map(({ name, href, note }) => (
            <li
              key={name}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-amber-300/60 hover:bg-white/[0.14]"
            >
              <p className="mb-2 inline-flex items-center gap-2 text-lg font-bold text-white">
                <MapPin className="h-4 w-4 shrink-0 text-amber-200" aria-hidden />
                {href ? (
                  <Link
                    href={href}
                    className="text-white underline decoration-blue-200/40 underline-offset-2 hover:decoration-white"
                  >
                    {name}
                  </Link>
                ) : (
                  name
                )}
              </p>
              <p className="text-sm leading-relaxed text-blue-50/90 md:text-base">{note}</p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-blue-100/90">
          Mehr über mich und die Arbeitsweise erfahren Sie unter{' '}
          <Link
            href="/uber-mich"
            className="font-medium text-white underline decoration-blue-200/50 underline-offset-2 hover:decoration-white"
          >
            Über mich
          </Link>
          . Für ein unverbindliches Gespräch genügt der Weg zum{' '}
          <Link
            href="/kontakt"
            className="font-medium text-white underline decoration-blue-200/50 underline-offset-2 hover:decoration-white"
          >
            Kontakt
          </Link>
          .
        </p>
      </div>

      {/* Weicher Wellen-Übergang zur weißen Folgesektion */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] overflow-hidden leading-[0]"
        aria-hidden
      >
        <svg
          className="relative block h-12 w-full md:h-16 lg:h-[4.75rem]"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0 36C240 36 360 84 720 84s480-48 720-48v60H0V36z"
          />
        </svg>
      </div>
    </section>
  )
}
