import Link from 'next/link'
import {
  ArrowRight,
  ChevronDown,
  Compass,
  Gauge,
  MapPin,
  MessageSquare,
  Palette,
  Phone,
  Rocket,
  Timer,
  Users,
} from 'lucide-react'
import Breadcrumbs from './Breadcrumbs'

const painPoints = [
  {
    icons: [Timer, Phone] as const,
    title: 'Keine Zeit für Telefonate',
    text: (
      <>
        Ihre Website nimmt Ihnen Vorarbeit ab: klare Leistungen, einfache Anfrage – statt endloser Rückruf-Listen nach
        Feierabend. Sie entscheiden, wann Sie antworten – ohne Chancen zu verschenken.
      </>
    ),
  },
  {
    icons: [Users] as const,
    title: 'Fachkräftemangel',
    text: (
      <>
        Gesellen und Azubis informieren sich online. Wenn Ihre Seite nur nach „Preis“ schreit, wirkt das dünn. Zeigen
        Sie Team, Ausbildung und Arbeitsalltag – ehrlich und regional, damit sich die richtigen Leute melden.
      </>
    ),
  },
  {
    icons: [Compass, MapPin] as const,
    title: 'Mangelnde Sichtbarkeit bei Google',
    text: (
      <>
        Wenn Kunden nach einem Betrieb in Darmstadt, Pfungstadt oder der Region suchen, zählt technische Qualität plus
        lokales SEO. Dann stehen Sie da, wo Aufträge entstehen – nicht drei Seiten hinter der Konkurrenz.
      </>
    ),
  },
] as const

const processSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Erstgespräch & Strategie',
    description: 'Wir klären Ihre Ziele vor Ort oder per Video – ohne Folien-Marathon, dafür mit klarem Plan.',
  },
  {
    step: 2,
    icon: Palette,
    title: 'Inhalt & Design',
    description: 'Ich erstelle Texte und Design; Sie liefern Fakten aus dem Alltag. Sie bleiben beim Handwerk.',
  },
  {
    step: 3,
    icon: Gauge,
    title: 'Entwicklung & Optimierung',
    description: 'Schnelle Ladezeiten, sauberer Code und lokales SEO für Darmstadt, Pfungstadt & Südhessen.',
  },
  {
    step: 4,
    icon: Rocket,
    title: 'Go-Live & Betreuung',
    description: 'Ihre Seite geht online – und ich bleibe als Partner dran: Updates, Sicherheit, Weiterentwicklung.',
  },
] as const

const faqItems = [
  {
    question: 'Wie viel Zeit muss ich investieren?',
    answer:
      'Minimal. Nach dem Erstgespräch übernehme ich das Steuer. Sie geben Inhalte frei und einmal das Design – fertig.',
  },
  {
    question: 'Werde ich bei Google gefunden?',
    answer:
      'Wir optimieren gezielt für lokale Suchen wie „Elektriker Darmstadt“ oder „Schreiner Pfungstadt“ – technisch sauber und inhaltlich passend.',
  },
  {
    question: 'Betreuen Sie die Seite auch danach?',
    answer:
      'Gerne. Ich arbeite langfristig mit Betrieben zusammen, damit Technik, Inhalte und SEO nicht einrosten.',
  },
] as const

export default function WebdesignHandwerkerServicePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
        aria-labelledby="handwerker-service-hero-heading"
      >
        <div className="absolute inset-0 bg-white" aria-hidden />
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 55%)',
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Breadcrumbs
            items={[
              { name: 'Startseite', url: '/' },
              { name: 'Webdesign Handwerker Südhessen', url: '/webdesign-handwerker' },
            ]}
          />
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Webdesign für Handwerksbetriebe in Südhessen
          </p>
          <h1
            id="handwerker-service-hero-heading"
            className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            Ihre digitale Visitenkarte: Professionelles Webdesign für Handwerker in Darmstadt & Umgebung
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Gewinnen Sie die richtigen Kunden und qualifizierte Mitarbeiter mit einer Website, die für Sie arbeitet,
            während Sie auf der Baustelle sind.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/kontakt"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-md shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.98] sm:w-auto"
              aria-label="Kostenloses Beratungsgespräch vereinbaren – zum Kontaktformular"
            >
              Kostenloses Beratungsgespräch vereinbaren
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
            <a
              href="tel:+491773236454"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
            >
              <Phone className="h-4 w-4 shrink-0 text-blue-600" aria-hidden />
              Direkt anrufen
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Aus Pfungstadt – persönlich, ohne Callcenter-Floskeln.
          </p>
        </div>
      </section>

      {/* Pain points */}
      <section
        className="border-t border-slate-200/80 bg-slate-50 py-16 md:py-24"
        aria-labelledby="handwerker-pain-heading"
        id="handwerker-vorteile"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2
              id="handwerker-pain-heading"
              className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Warum eine 08/15-Website Sie Zeit und Geld kostet
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Standard-Vorlagen hören sich für Kunden und Bewerber gleich an. Sie brauchen Klarheit, Geschwindigkeit und
              regionale Relevanz – sonst klicken sie weiter.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {painPoints.map(({ icons, title, text }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-xl border border-slate-200/90 bg-white p-8 shadow-md shadow-slate-900/5 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-slate-900/10 md:p-9"
              >
                <div
                  className="mb-5 flex h-12 w-fit min-w-[3rem] items-center justify-center gap-1.5 rounded-lg bg-blue-100 px-3"
                  aria-hidden
                >
                  {icons.map((Icon, i) => (
                    <Icon key={i} className="h-5 w-5 shrink-0 text-blue-600" />
                  ))}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
                <p className="flex-1 text-base leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="handwerker-process-heading" id="ablauf">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 id="handwerker-process-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              In 4 Schritten zur neuen Website – ohne Stress für Sie
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Schlüsselfertig heißt: Sie müssen kein „IT-Mensch“ sein. Ich übernehme Struktur, Texte, Technik und
              Launch – Sie geben Rückmeldung, wenn es passt.
            </p>
          </header>
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {processSteps.map(({ step, icon: Icon, title, description }) => (
              <li
                key={step}
                className="relative flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-8 pt-10 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="absolute -top-3 left-6 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 text-xs font-bold text-white shadow-md shadow-blue-500/30">
                  Schritt {step}
                </span>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/25">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Regional trust */}
      <section
        className="border-y border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 py-16 md:py-24"
        aria-labelledby="handwerker-regional-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <MapPin className="h-7 w-7" aria-hidden />
          </div>
          <h2 id="handwerker-regional-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Persönlich. Regional. Zuverlässig.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            Ich bin kein anonymes Callcenter. Als Webdesigner aus Pfungstadt kenne ich den Markt in Südhessen. Ich komme
            zu Ihnen in den Betrieb, verstehe Ihre Arbeit und setze sie digital so um, dass Kunden und Bewerber sofort
            checken, wer Sie sind.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="handwerker-faq-heading">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 id="handwerker-faq-heading" className="mb-3 text-center text-3xl font-bold text-slate-900">
            Häufige Fragen
          </h2>
          <p className="mb-10 text-center text-slate-600">
            Kurz und ehrlich – ohne Marketing-Blabla.
          </p>
          <div className="space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-slate-300 [&[open]]:border-blue-500/50 [&[open]]:ring-2 [&[open]]:ring-blue-500/20 [&[open]_summary_.faq-chevron]:rotate-180"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="pr-2">{faq.question}</span>
                  <ChevronDown
                    className="faq-chevron h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200"
                    aria-hidden
                  />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 text-white md:py-24"
        aria-labelledby="handwerker-final-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 id="handwerker-final-cta-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Lust auf eine Website, die wirklich liefert?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Schreiben Sie kurz, was Sie machen – ich melde mich persönlich und wir klären den Rest in einem
            unkomplizierten Gespräch.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/35 transition-all hover:scale-[1.02] hover:shadow-blue-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Jetzt unverbindlich anfragen
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <p className="text-sm text-slate-400">
              Oder rufen Sie direkt an:{' '}
              <a
                href="tel:+491773236454"
                className="font-medium text-white underline-offset-2 hover:text-blue-200 hover:underline tabular-nums"
              >
                +49 177 3236 454
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
