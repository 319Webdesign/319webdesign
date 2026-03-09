import type { Metadata } from 'next'
import { getCanonicalUrl, truncateTitleForSeo } from '../../../config/seo'
import Link from 'next/link'
import { ArrowRight, Check, MapPin, Users, Building2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import ProzessSection from '../../components/ProzessSection'
import { getCityBySlug, getAllCitySlugs } from '../../../config/cities'
import {
  getHeroIntro,
  getCityPageTexts,
  getLocalSectionText,
} from '../../../config/cityPageTemplate'
import { getUniqueH1Webdesign, getDescriptionWebdesign } from '../../../config/cityContent'

// Generate Metadata
export async function generateMetadata({
  params,
}: {
  params: { city: string }
}): Promise<Metadata> {
  const city = getCityBySlug(params.city)

  if (!city) {
    return {
      title: 'Stadt nicht gefunden',
    }
  }

  const canonicalUrl = getCanonicalUrl(`/webdesign/${city.slug}`)
  const pageTitle = truncateTitleForSeo(`Webdesign ${city.name} | High-Performance Websites`)
  return {
    title: pageTitle,
    description: getDescriptionWebdesign(city),
    keywords: city.keywords.join(', '),
    robots: { index: true, follow: true },
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: pageTitle,
      description: getDescriptionWebdesign(city),
      url: canonicalUrl,
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

  const texts = getCityPageTexts(city)
  const h1 = getUniqueH1Webdesign(city)

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
      description: texts.personalBetreuung,
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
    ...texts.benefits,
    'Moderne Technologien (Next.js, React)',
    'Barrierefreie Umsetzung (WCAG)',
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            {/* Breadcrumb mit JSON-LD Schema */}
            <div className="flex justify-center">
              <Breadcrumbs
                items={[
                  { name: 'Startseite', url: '/' },
                  { name: 'Webdesign & Launch', url: '/leistungen/webdesign-launch' },
                  { name: city.name, url: `/webdesign/${city.slug}` },
                ]}
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                {h1.main}
              </span>
              {h1.sub && (
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-slate-700 font-semibold">
                  {h1.sub}
                </span>
              )}
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-8">
              {getHeroIntro(city)}
            </p>

            {/* Location Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-700 mb-10">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>{city.name}, {city.region}</span>
              </div>
              {city.population && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>{city.population} Einwohner</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>{texts.personalBetreuung}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* Prozess – stadt-spezifischer Content */}
        <ProzessSection citySlug={city.slug} />

        {/* Performance Section – zusammengefasst, weniger Überschriften */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-slate-900">
              Performance in {city.name}
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              {texts.performanceIntro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <p className="text-2xl font-bold mb-4 text-blue-600">
                  PageSpeed 99/100
                </p>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center border border-green-200">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-600 mb-2">99</div>
                    <div className="text-2xl text-slate-600">/100</div>
                    <div className="text-sm text-slate-500 mt-2">PageSpeed Score</div>
                  </div>
                </div>
                <p className="text-slate-700 mt-4">
                  Durchschnittlicher Score von 99/100 für alle meine Projekte
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <p className="text-2xl font-bold mb-4 text-blue-600">
                  Ladezeit unter 2 Sekunden
                </p>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-200">
                  <div className="text-center w-full px-6">
                    <div className="flex justify-around items-end mb-4">
                      <div>
                        <div className="text-4xl font-bold text-green-600 mb-1">1.72s</div>
                        <div className="text-sm text-slate-600">Meine Websites</div>
                      </div>
                      <div className="text-slate-400 text-2xl mb-6">vs</div>
                      <div>
                        <div className="text-4xl font-bold text-red-500 mb-1">3.5s</div>
                        <div className="text-sm text-slate-600">Durchschnitt</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500">Largest Contentful Paint (LCP)</div>
                  </div>
                </div>
                <p className="text-slate-700 mt-4">
                  Meine Websites laden 2x schneller als der Durchschnitt
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200 text-center shadow-sm">
              <p className="text-lg text-slate-700">
                <strong className="text-blue-600">Warum ist das wichtig?</strong>{' '}
                {texts.performanceWarum}
              </p>
            </div>
          </div>
        </section>

        {/* Features – H3 zu bold p für besseres Überschriften-Verhältnis */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900">
              <strong>Was Sie bekommen</strong>
            </p>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              {texts.featuresIntro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-xl font-bold mb-3 text-blue-600">
                    {feature.title}
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Ihre Vorteile
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Section – H3 zu bold p */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              <strong>Webdesign aus {city.region}</strong>
            </p>
            <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {city.description} {getLocalSectionText(city)}
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 max-w-3xl mx-auto shadow-sm">
              <p className="text-xl font-bold mb-4 text-blue-600">
                Auch in Ihrer Nähe: {city.nearbyPlaces.slice(0, 3).join(', ')}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {city.nearbyPlaces.map((place) => (
                  <span
                    key={place}
                    className="px-4 py-2 bg-white rounded-lg text-slate-700 border border-slate-200"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-blue-100/50 to-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              {texts.ctaHeading}
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              {texts.ctaParagraph}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/491773236454"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
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
