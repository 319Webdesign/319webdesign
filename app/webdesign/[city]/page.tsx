import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, MapPin, Users, Building2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'

// Stadt-Konfiguration
interface City {
  slug: string
  name: string
  region: string
  description: string
  keywords: string[]
  population?: string
  nearbyPlaces: string[]
}

const cities: Record<string, City> = {
  darmstadt: {
    slug: 'darmstadt',
    name: 'Darmstadt',
    region: 'Südhessen',
    description: 'Die Wissenschaftsstadt Darmstadt ist Zentrum der Region Südhessen und bekannt für Innovation und Technologie.',
    keywords: [
      'Webdesign Darmstadt',
      'Website erstellen Darmstadt',
      'SEO Darmstadt',
      'Webentwicklung Darmstadt',
    ],
    population: '160.000',
    nearbyPlaces: ['Pfungstadt', 'Griesheim', 'Weiterstadt', 'Eberstadt'],
  },
  pfungstadt: {
    slug: 'pfungstadt',
    name: 'Pfungstadt',
    region: 'Südhessen',
    description: 'Pfungstadt liegt südlich von Darmstadt und bietet eine ideale Mischung aus städtischem Leben und ländlicher Idylle.',
    keywords: [
      'Webdesign Pfungstadt',
      'Website erstellen Pfungstadt',
      'SEO Pfungstadt',
      'Webentwicklung Pfungstadt',
    ],
    population: '25.000',
    nearbyPlaces: ['Darmstadt', 'Griesheim', 'Eberstadt', 'Seeheim-Jugenheim'],
  },
  griesheim: {
    slug: 'griesheim',
    name: 'Griesheim',
    region: 'Südhessen',
    description: 'Griesheim westlich von Darmstadt bietet optimale Bedingungen für lokale Unternehmen und Selbstständige.',
    keywords: [
      'Webdesign Griesheim',
      'Website erstellen Griesheim',
      'SEO Griesheim',
      'Webentwicklung Griesheim',
    ],
    population: '27.000',
    nearbyPlaces: ['Darmstadt', 'Pfungstadt', 'Weiterstadt', 'Riedstadt'],
  },
  weiterstadt: {
    slug: 'weiterstadt',
    name: 'Weiterstadt',
    region: 'Südhessen',
    description: 'Weiterstadt ist ein wichtiger Wirtschaftsstandort südlich von Darmstadt mit vielen mittelständischen Unternehmen.',
    keywords: [
      'Webdesign Weiterstadt',
      'Website erstellen Weiterstadt',
      'SEO Weiterstadt',
      'Webentwicklung Weiterstadt',
    ],
    population: '26.000',
    nearbyPlaces: ['Darmstadt', 'Griesheim', 'Mörfelden-Walldorf', 'Erzhausen'],
  },
}

const getAllCitySlugs = (): string[] => {
  return Object.keys(cities)
}

const getCityBySlug = (slug: string): City | undefined => {
  return cities[slug]
}

// Generate Metadata
export async function generateMetadata({
  params,
}: {
  params: { city: string }
}): Promise<Metadata> {
  const city = getCityBySlug(params.city)

  if (!city) {
    return {
      title: 'Stadt nicht gefunden | 319Webdesign',
    }
  }

  return {
    title: `Webdesign ${city.name} | High-Performance Websites | 319Webdesign`,
    description: `Professionelles Webdesign in ${city.name} mit PageSpeed 99/100. Moderne Websites für Unternehmen in ${city.region}. Persönliche Betreuung vor Ort.`,
    keywords: city.keywords.join(', '),
    openGraph: {
      title: `Webdesign ${city.name} | High-Performance Websites`,
      description: `Professionelles Webdesign in ${city.name} mit PageSpeed 99/100. Moderne Websites für Unternehmen in ${city.region}.`,
      url: `https://319webdesign.com/webdesign/${city.slug}`,
      siteName: '319Webdesign',
      locale: 'de_DE',
      type: 'website',
    },
  }
}

// Generate Static Params
export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    city: slug,
  }))
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city)

  if (!city) {
    notFound()
  }

  const features = [
    {
      title: 'PageSpeed 99/100',
      description: 'Blitzschnelle Ladezeiten für bessere Google-Rankings',
    },
    {
      title: 'Mobile-First Design',
      description: 'Perfekte Darstellung auf allen Geräten',
    },
    {
      title: 'SEO-optimiert',
      description: 'Lokale Suchmaschinenoptimierung für Ihre Region',
    },
    {
      title: 'Persönliche Betreuung',
      description: `Direkte Ansprechpartner in ${city.region}`,
    },
    {
      title: 'Conversion-fokussiert',
      description: 'Websites, die Besucher zu Kunden machen',
    },
    {
      title: 'Wartung & Support',
      description: 'Schneller Service bei Fragen und Problemen',
    },
  ]

  const benefits = [
    'Kostenloses Erstgespräch vor Ort oder online',
    'Transparente Preise ohne versteckte Kosten',
    'Schnelle Umsetzung Ihres Projekts',
    'Persönlicher Ansprechpartner',
    'Moderne Technologien (Next.js, React)',
    'Barrierefreie Umsetzung (WCAG)',
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-zinc-900" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            {/* Breadcrumb mit JSON-LD Schema */}
            <div className="flex justify-center">
              <Breadcrumbs
                items={[
                  { name: 'Startseite', url: '/' },
                  { name: 'Webdesign', url: '/leistungen/webdesign' },
                  { name: city.name, url: `/webdesign/${city.slug}` },
                ]}
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Webdesign{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {city.name}
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                High-Performance Websites für Ihre Region
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-8">
              Professionelles Webdesign in {city.name} mit PageSpeed-Scores von
              99/100. Ich helfe Unternehmen und Selbstständigen in {city.region}
              , online erfolgreich zu sein.
            </p>

            {/* Location Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 mb-10">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{city.name}, {city.region}</span>
              </div>
              {city.population && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>{city.population} Einwohner</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span>Persönliche Betreuung vor Ort</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-200 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
              Performance, die überzeugt
            </h2>
            <p className="text-xl text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Während viele Agenturen langsame Websites ausliefern, erreiche ich
              konstant PageSpeed-Scores von 99/100. Das bedeutet: Bessere
              Google-Rankings, zufriedenere Besucher und mehr Conversions für Ihr
              Unternehmen in {city.name}.
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

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/30 text-center">
              <p className="text-lg text-slate-300">
                <strong className="text-blue-400">Warum ist das wichtig?</strong>{' '}
                Google berücksichtigt die Ladegeschwindigkeit als Rankingfaktor.
                Schnellere Websites erscheinen weiter oben in den Suchergebnissen
                – das bedeutet mehr potenzielle Kunden für Ihr Unternehmen in{' '}
                {city.name}.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
              Was Sie bekommen
            </h2>
            <p className="text-xl text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Professionelles Webdesign für Unternehmen in {city.name} und Umgebung
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3 text-blue-400">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Ihre Vorteile
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-slate-800/50 rounded-lg p-6 border border-slate-700"
                >
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Webdesign direkt aus {city.region}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {city.description} Als lokaler Webdesigner kenne ich die Region und
              die Bedürfnisse der Unternehmen vor Ort. Ob in {city.name} oder den
              umliegenden Orten wie {city.nearbyPlaces.slice(0, 3).join(', ')} –
              ich bin Ihr persönlicher Ansprechpartner für professionelles
              Webdesign.
            </p>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Auch in Ihrer Nähe
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {city.nearbyPlaces.map((place) => (
                  <span
                    key={place}
                    className="px-4 py-2 bg-slate-700/50 rounded-lg text-slate-300"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Bereit für Ihre neue Website?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie ich
              Ihrem Unternehmen in {city.name} helfen kann, online erfolgreicher
              zu werden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
              >
                Jetzt Kontakt aufnehmen
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
      </main>
      <Footer />
    </>
  )
}
