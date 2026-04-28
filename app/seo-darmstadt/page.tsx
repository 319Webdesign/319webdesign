import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getSeoMetadata, seoConfig } from '../../config/seo'
import Breadcrumbs from '../components/Breadcrumbs'

const Header = dynamic(() => import('../components/Header'), { ssr: true })
const Footer = dynamic(() => import('../components/Footer'), { ssr: true })

export const metadata: Metadata = getSeoMetadata(seoConfig.seoDarmstadt)

const faqItems = [
  {
    question: 'Was kostet SEO in Darmstadt?',
    answer:
      'Die Kosten hängen von Ausgangslage, Wettbewerb und Zielen ab. Für lokale Unternehmen starten sinnvolle SEO-Pakete meist im mittleren dreistelligen Bereich pro Monat, bei komplexeren Projekten entsprechend höher.',
  },
  {
    question: 'Wie lange dauert es, bis ich bei Google auf Seite 1 stehe?',
    answer:
      'SEO ist kein Sofortprogramm. Je nach Wettbewerb sind erste sichtbare Verbesserungen oft nach 8 bis 12 Wochen möglich, stabile Top-Platzierungen benötigen in der Regel mehrere Monate konsequenter Optimierung.',
  },
  {
    question: 'Warum ist SEO für Webdesign wichtig?',
    answer:
      'Eine schöne Website reicht nicht, wenn sie nicht gefunden wird. Webdesign und SEO Darmstadt gehören zusammen: Struktur, Inhalte, Ladezeit und mobile Nutzung entscheiden direkt über Sichtbarkeit und Anfragen.',
  },
] as const

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function SeoDarmstadtPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 text-slate-900 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 md:py-24">
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <div className="mb-8 flex justify-center md:justify-start">
              <Breadcrumbs
                items={[
                  { name: 'Startseite', url: '/' },
                  { name: 'SEO Darmstadt', url: '/seo-darmstadt' },
                ]}
              />
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">SEO Agentur Darmstadt</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Suchmaschinenoptimierung (SEO) in Darmstadt &amp; Südhessen
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Mehr Sichtbarkeit für Kleinunternehmen &amp; Selbstständige: Wir helfen Ihnen, in Darmstadt und der Region
              bei Google dort aufzutauchen, wo potenzielle Kunden konkret nach Leistungen suchen.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-500/35 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50"
              >
                Kostenlose Erstberatung vereinbaren
              </a>
              <a
                href="tel:+491773236454"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition-colors hover:border-blue-300 hover:text-blue-700"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20" aria-labelledby="problem-loesung-heading">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <h2 id="problem-loesung-heading" className="text-3xl font-bold tracking-tight text-slate-900">
              Schöne Website, aber keine Kundenanfragen?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Genau das ist die häufigste Ausgangslage bei Unternehmen, die zu uns kommen. Ohne klare lokale SEO-Strategie
              bleibt Ihre Seite unter dem Radar, während größere Agenturen mit starken Inhalten und Struktur den
              Sichtbarkeitsvorsprung ausbauen.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Mit gezielter Suchmaschinenoptimierung Darmstadt für Kleinunternehmen schaffen wir eine faire Ausgangslage:
              regional relevante Inhalte, technische Qualität und klare Nutzerführung für mehr qualifizierte Kontakte.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16 md:pb-20" aria-labelledby="leistungen-seo-heading">
          <h2 id="leistungen-seo-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Unsere SEO-Module für nachhaltiges Wachstum
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Local SEO &amp; Google Business Profil Optimierung</h3>
              <p className="mt-3 text-slate-600">
                Fokus auf Darmstadt und Pfungstadt: Wir optimieren Ihr Profil, lokale Landingpages und Eintragskonsistenz, damit Sie für lokale Suchanfragen in Südhessen besser gefunden werden.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Lokale Relevanz für Local SEO Südhessen</li>
                <li>Google Ranking verbessern Pfungstadt mit klaren Standortsignalen</li>
              </ul>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">On-Page SEO &amp; Content Strategie</h3>
              <p className="mt-3 text-slate-600">
                Inhalte entlang von Relevanz und Nutzerintention: Wir strukturieren Seiten so, dass Suchmaschinen und Besucher sofort verstehen, für wen Sie arbeiten und welches Problem Sie lösen.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Keyword-Cluster rund um SEO Agentur Darmstadt</li>
                <li>Kleinunternehmen Sichtbarkeit Google durch klare Angebotsseiten</li>
              </ul>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Technisches SEO für Webdesigner</h3>
              <p className="mt-3 text-slate-600">
                Geschwindigkeit, Mobile First und Core Web Vitals als Basis für stabile Rankings. So verbinden wir Webdesign und SEO Darmstadt in einem sauberen technischen Fundament.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Performance-Checks für bessere Ladezeiten</li>
                <li>Technische Struktur, die Nutzer und Google führt</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50/80 py-16 md:py-20" aria-labelledby="regional-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="regional-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Regional verankert in der Wissenschaftsstadt Darmstadt
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Wir unterstützen Unternehmen in der Wissenschaftsstadt Darmstadt und im direkten Umland - Pfungstadt, Griesheim und Weiterstadt. Als regional arbeitende SEO Agentur kennen wir die lokale Konkurrenzsituation und entwickeln Strategien, die zu Ihrer Zielgruppe vor Ort passen.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 md:py-20" aria-labelledby="faq-seo-heading">
          <h2 id="faq-seo-heading" className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Häufige Fragen zu SEO in Darmstadt
          </h2>
          <div className="mt-10 space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-slate-300"
              >
                <summary className="cursor-pointer px-5 py-4 text-base font-semibold text-slate-900 md:text-lg">
                  {item.question}
                </summary>
                <div className="px-5 pb-5">
                  <p className="leading-relaxed text-slate-600">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
