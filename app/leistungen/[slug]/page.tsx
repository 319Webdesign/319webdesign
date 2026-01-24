import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import Breadcrumbs from '../../components/Breadcrumbs'

// Leistungen-Daten
const leistungen = {
  webdesign: {
    title: 'Professionelles Webdesign für Kleinunternehmen in Südhessen',
    metaTitle: 'Webdesign Darmstadt & Pfungstadt | High-Performance Websites',
    metaDescription: 'Professionelles Webdesign in Darmstadt und Pfungstadt. PageSpeed 99/100, modernes Design und messbare Ergebnisse für Ihr Unternehmen.',
    subtitle: 'High-Performance Websites, die verkaufen',
    problem: {
      title: 'Das Problem',
      description: 'Viele Websites sehen zwar gut aus, laden aber langsam, sind nicht mobilfreundlich und bringen keine Kunden. Das kostet Sie täglich Umsatz.',
    },
    solution: {
      title: 'Meine Lösung',
      description: 'Ich erstelle moderne, blitzschnelle Websites mit Next.js, die durchschnittlich 99/100 bei PageSpeed erreichen. Ihre Website wird nicht nur schön, sondern auch ein echtes Verkaufsinstrument.',
    },
    features: [
      'PageSpeed-Score von durchschnittlich 99/100',
      'Mobile-First Design für perfekte Darstellung auf allen Geräten',
      'SEO-optimiert für Google-Rankings',
      'Conversion-optimierte Layouts',
      'Barrierefreie Umsetzung (WCAG-konform)',
      'Wartungsfreundlich und erweiterbar',
    ],
    process: [
      {
        step: '1. Erstgespräch',
        description: 'Wir besprechen Ihre Ziele, Zielgruppe und was Ihre Website erreichen soll.',
      },
      {
        step: '2. Konzept & Design',
        description: 'Ich erstelle ein maßgeschneidertes Design-Konzept, das zu Ihrer Marke passt.',
      },
      {
        step: '3. Entwicklung',
        description: 'Umsetzung mit modernsten Technologien für maximale Performance.',
      },
      {
        step: '4. Testing & Launch',
        description: 'Ausführliche Tests auf allen Geräten, dann geht Ihre Website live.',
      },
    ],
    relatedServices: [
      { slug: 'seo', title: 'SEO-Optimierung' },
      { slug: 'wartung', title: 'Website-Wartung' },
    ],
  },
  seo: {
    title: 'SEO-Optimierung für lokale Unternehmen in Südhessen',
    metaTitle: 'SEO Darmstadt & Pfungstadt | Lokale Google-Optimierung',
    metaDescription: 'Professionelle SEO-Optimierung für Unternehmen in Darmstadt und Pfungstadt. Mehr Sichtbarkeit bei Google und mehr Kundenanfragen.',
    subtitle: 'Mehr Sichtbarkeit bei Google, mehr Kunden',
    problem: {
      title: 'Das Problem',
      description: 'Sie haben eine Website, aber niemand findet sie? Ihre Konkurrenz steht bei Google auf Seite 1, während Sie unsichtbar bleiben. Das bedeutet verlorene Kunden.',
    },
    solution: {
      title: 'Meine Lösung',
      description: 'Ich optimiere Ihre Website technisch und inhaltlich für Google. Mit lokalem SEO-Fokus auf Darmstadt, Pfungstadt und Südhessen erreichen Sie genau die Kunden, die nach Ihren Leistungen suchen.',
    },
    features: [
      'Technische SEO-Optimierung (Core Web Vitals, PageSpeed)',
      'Keyword-Recherche für Ihre Branche',
      'On-Page Optimierung aller Seiten',
      'Lokales SEO für Südhessen',
      'Google Business Profile Optimierung',
      'Monatliche Reportings und Analysen',
    ],
    process: [
      {
        step: '1. SEO-Audit',
        description: 'Analyse Ihrer aktuellen Website und Identifikation von Optimierungspotenzialen.',
      },
      {
        step: '2. Keyword-Strategie',
        description: 'Entwicklung einer Keyword-Strategie basierend auf Ihrer Zielgruppe.',
      },
      {
        step: '3. Umsetzung',
        description: 'Technische und inhaltliche Optimierung Ihrer Website.',
      },
      {
        step: '4. Monitoring',
        description: 'Kontinuierliche Überwachung der Rankings und Anpassung der Strategie.',
      },
    ],
    relatedServices: [
      { slug: 'webdesign', title: 'Webdesign' },
      { slug: 'wartung', title: 'Website-Wartung' },
    ],
  },
  wartung: {
    title: 'Website-Wartung & Support für Ihr Unternehmen',
    metaTitle: 'Website-Wartung Darmstadt | Professioneller Support',
    metaDescription: 'Professionelle Website-Wartung in Darmstadt und Pfungstadt. Updates, Backups, Security und schneller Support für Ihre Website.',
    subtitle: 'Ihre Website immer aktuell und sicher',
    problem: {
      title: 'Das Problem',
      description: 'Veraltete Plugins, Sicherheitslücken und plötzliche Ausfälle können Ihre Website lahmlegen. Das schadet Ihrem Geschäft und Ihrem Image.',
    },
    solution: {
      title: 'Meine Lösung',
      description: 'Ich kümmere mich um regelmäßige Updates, Backups und die Sicherheit Ihrer Website. Bei Problemen bin ich schnell zur Stelle – damit Sie sich auf Ihr Geschäft konzentrieren können.',
    },
    features: [
      'Regelmäßige Updates von CMS und Plugins',
      'Tägliche automatische Backups',
      'Security-Monitoring und Malware-Schutz',
      'Performance-Optimierung',
      'Schneller Support bei Problemen',
      'Monatliche Reports über den Website-Status',
    ],
    process: [
      {
        step: '1. Bestandsaufnahme',
        description: 'Analyse Ihrer Website und Einrichtung der Monitoring-Tools.',
      },
      {
        step: '2. Setup',
        description: 'Einrichtung von Backups, Security-Maßnahmen und Update-Routinen.',
      },
      {
        step: '3. Wartung',
        description: 'Regelmäßige Updates und Checks Ihrer Website.',
      },
      {
        step: '4. Support',
        description: 'Bei Problemen oder Änderungswünschen bin ich für Sie da.',
      },
    ],
    relatedServices: [
      { slug: 'webdesign', title: 'Webdesign' },
      { slug: 'seo', title: 'SEO-Optimierung' },
    ],
  },
}

type LeistungSlug = keyof typeof leistungen

// Generate Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const leistung = leistungen[params.slug as LeistungSlug]

  if (!leistung) {
    return {
      title: 'Leistung nicht gefunden | 319Webdesign',
    }
  }

  return {
    title: leistung.metaTitle,
    description: leistung.metaDescription,
    openGraph: {
      title: leistung.metaTitle,
      description: leistung.metaDescription,
      url: `https://319webdesign.com/leistungen/${params.slug}`,
      siteName: '319Webdesign',
      locale: 'de_DE',
      type: 'website',
    },
  }
}

// Generate Static Params
export async function generateStaticParams() {
  return Object.keys(leistungen).map((slug) => ({
    slug,
  }))
}

export default function LeistungPage({ params }: { params: { slug: string } }) {
  const leistung = leistungen[params.slug as LeistungSlug]

  if (!leistung) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-zinc-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          {/* Breadcrumb mit JSON-LD Schema */}
          <div className="flex justify-center mb-8">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Leistungen', url: '/leistungen' },
                { name: leistung.title, url: `/leistungen/${params.slug}` },
              ]}
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            {leistung.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            {leistung.subtitle}
          </p>
        </div>
      </section>

      {/* Problem-Lösung Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Problem */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-4 text-red-400">
                {leistung.problem.title}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {leistung.problem.description}
              </p>
            </div>

            {/* Lösung */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/30">
              <h2 className="text-3xl font-bold mb-4 text-blue-400">
                {leistung.solution.title}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {leistung.solution.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Das bekommen Sie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leistung.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance-Beweis Section */}
      {params.slug === 'webdesign' && (
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
              Performance, die überzeugt
            </h2>
            <p className="text-xl text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Während andere Agenturen langsame Websites ausliefern, erreiche ich
              konstant PageSpeed-Scores von 99/100. Das bedeutet: Bessere Rankings,
              zufriedenere Besucher, mehr Conversions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* PageSpeed Score */}
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  PageSpeed Insight Score
                </h3>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-400 mb-2">99</div>
                    <div className="text-2xl text-slate-400">/100</div>
                    <div className="text-sm text-slate-500 mt-2">PageSpeed Score</div>
                  </div>
                </div>
                <p className="text-slate-300 mt-4">
                  Durchschnittlicher Score von 99/100 für alle meine Projekte
                </p>
              </div>

              {/* LCP Vergleich */}
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Largest Contentful Paint (LCP)
                </h3>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
                  <div className="text-center w-full px-6">
                    <div className="flex justify-around items-end mb-4">
                      <div>
                        <div className="text-4xl font-bold text-green-400 mb-1">1.72s</div>
                        <div className="text-sm text-slate-400">Meine Websites</div>
                      </div>
                      <div className="text-slate-600 text-2xl mb-6">vs</div>
                      <div>
                        <div className="text-4xl font-bold text-red-400 mb-1">3.5s</div>
                        <div className="text-sm text-slate-400">Durchschnitt</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500">Largest Contentful Paint (LCP)</div>
                  </div>
                </div>
                <p className="text-slate-300 mt-4">
                  Meine Websites laden 2x schneller als der Durchschnitt
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Prozess Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
            So läuft die Zusammenarbeit ab
          </h2>
          <p className="text-xl text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Transparent, persönlich und professionell – so arbeite ich in Südhessen
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leistung.process.map((item, index) => (
              <div
                key={index}
                className="relative bg-slate-800/50 rounded-xl p-6 border border-slate-700"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white mt-4">
                  {item.step}
                </h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Bereit für Ihr Projekt?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie ich
            Ihnen helfen kann, online erfolgreicher zu werden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
            >
              Kostenlose Erstberatung vereinbaren
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/491773236454"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-200 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Weitere Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leistung.relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/leistungen/${service.slug}`}
                className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors inline-flex items-center gap-2">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/491773236454"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp kontaktieren"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </main>
  )
}
