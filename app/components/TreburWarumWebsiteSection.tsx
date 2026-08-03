import Link from 'next/link'
import { Search, ShieldAlert, TrendingUp, ShoppingCart } from 'lucide-react'

const examples = [
  {
    icon: Search,
    title: 'Viele Kunden suchen zuerst bei Google',
    text: 'Ob Handwerker, Dienstleister oder regionales Unternehmen: Die meisten starten mit einer Suche. Wer in Trebur und Umgebung nicht sichtbar ist, verliert Aufträge an Betriebe, die online klar und aktuell auftreten – oft noch bevor ein Anruf bei Bekannten erfolgt.',
  },
  {
    icon: ShieldAlert,
    title: 'Eine schlechte Website kostet Vertrauen',
    text: 'Veraltetes Design, langsame Ladezeiten oder unklare Leistungen wirken unprofessionell. Gerade bei größeren Aufträgen prüfen Kunden den digitalen Eindruck. Eine schwache Homepage kann gute Mundpropaganda zunichtemachen.',
  },
  {
    icon: TrendingUp,
    title: 'Gute Rankings bringen neue Anfragen',
    text: 'Lokale Sichtbarkeit für relevante Suchbegriffe sorgt für planbaren Zustrom – statt nur auf Empfehlungen zu warten. Mit sauberer Technik, lokalen Inhalten und einem gepflegten Google-Profil steigen die Chancen auf Anrufe aus Trebur, Nauheim oder Rüsselsheim.',
  },
  {
    icon: ShoppingCart,
    title: 'Moderne Websites verkaufen besser',
    text: 'Klare Nutzenversprechen, mobile Kontaktwege und glaubwürdige Referenzen führen Besucher zur Anfrage. Conversion ist kein Zufall, sondern Ergebnis von Struktur und Fokus – genau das, was moderne Websites für lokale Unternehmen leisten sollen.',
  },
] as const

/**
 * Warum moderne Website – nur /webdesign/trebur.
 */
export default function TreburWarumWebsiteSection() {
  return (
    <section
      className="bg-white px-6 py-20 md:py-28"
      aria-labelledby="trebur-warum-website-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2
            id="trebur-warum-website-heading"
            className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
          >
            Warum eine moderne Website heute entscheidend ist
          </h2>
          <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
            In Trebur und der Rhein-Main-Region entscheiden sich Kunden oft digital – auch wenn der
            Auftrag später vor Ort erledigt wird. Eine moderne Website ist damit kein Nice-to-have,
            sondern Teil Ihrer Vertriebskette.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {examples.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-[1.35rem] border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-amber-400 hover:shadow-md hover:shadow-amber-900/10"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
              <p className="text-base leading-relaxed text-slate-700">{text}</p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-slate-600">
          Wenn Ihre bestehende Seite nicht mehr mithält, hilft oft ein gezielter{' '}
          <Link
            href="/website-relaunch"
            className="font-medium text-blue-700 underline-offset-2 hover:underline"
          >
            Website-Relaunch
          </Link>{' '}
          – oder ein neuer Auftritt über{' '}
          <Link
            href="/leistungen/webdesign-launch"
            className="font-medium text-blue-700 underline-offset-2 hover:underline"
          >
            Webdesign &amp; Launch
          </Link>
          . Lassen Sie uns im{' '}
          <Link href="/kontakt" className="font-medium text-blue-700 underline-offset-2 hover:underline">
            Kontaktgespräch
          </Link>{' '}
          klären, was für Ihren Betrieb sinnvoll ist.
        </p>
      </div>
    </section>
  )
}
