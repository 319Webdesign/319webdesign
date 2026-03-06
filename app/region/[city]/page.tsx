import type { Metadata } from 'next'
import { getCanonicalUrl } from '../../../config/seo'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, MapPin, ExternalLink } from 'lucide-react'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import ProzessSection from '../../components/ProzessSection'
import LocalBusinessSchema from '../../components/LocalBusinessSchema'
import { getCityBySlug, getAllCitySlugs } from '../../../config/cities'
import { getProjectsByCity } from '../../../config/projects'
import {
  getHeroIntro,
  getCityPageTexts,
  getLocalSectionText,
} from '../../../config/cityPageTemplate'
import { getUniqueH1Region, getWarumWebdesignContent, getDescriptionRegion } from '../../../config/cityContent'

export async function generateMetadata({
  params,
}: {
  params: { city: string }
}): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  if (!city) return { title: 'Stadt nicht gefunden | 319Webdesign' }

  const canonicalUrl = getCanonicalUrl(`/region/${city.slug}`)
  return {
    title: `Webdesign ${city.name} | High-Performance Websites | 319Webdesign`,
    description: getDescriptionRegion(city),
    keywords: city.keywords.join(', '),
    robots: { index: true, follow: true },
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Webdesign ${city.name} | 319Webdesign`,
      description: getDescriptionRegion(city),
      url: canonicalUrl,
      siteName: '319Webdesign',
      locale: 'de_DE',
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }))
}

export default function RegionCityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  const localProjects = getProjectsByCity(city.slug)
  const texts = getCityPageTexts(city)
  const h1 = getUniqueH1Region(city)
  const warumContent = getWarumWebdesignContent(city)

  const leistungenLinks = [
    { href: '/leistungen/webdesign-launch', label: 'Webdesign & Launch' },
    { href: '/leistungen/wachstum-seo', label: 'Wachstum & SEO' },
    { href: '/leistungen/strategische-begleitung', label: 'Strategische Begleitung' },
  ]

  return (
    <>
      <LocalBusinessSchema
        cityName={city.name}
        additionalAreas={[city.region, ...city.nearbyPlaces]}
      />
      <Header />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Region', url: '/leistungen' },
                { name: city.name, url: `/region/${city.slug}` },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                {h1.main}
              </span>
              {h1.sub && (
                <span className="block text-2xl md:text-3xl mt-2 text-slate-700 font-semibold">
                  {h1.sub}
                </span>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-8">
              {getHeroIntro(city)}
            </p>
            <div className="flex items-center justify-center gap-4 text-slate-600 mb-10">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                {city.name}, {city.region}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all"
              >
                Alle Leistungen
              </Link>
            </div>
          </div>
        </section>

        {/* Prozess – stadt-spezifischer Content */}
        <ProzessSection citySlug={city.slug} />

        {/* Warum Webdesign + Referenzen kombiniert – weniger Überschriften */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              {warumContent.heading}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-12">
              {warumContent.content}
            </p>
          </div>
        </section>

        {/* Lokale Referenzen */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900">
              Lokale Referenzen aus {city.name}
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              {texts.referenzenIntro}
            </p>

            {localProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localProjects.map((project) => (
                  <a
                    key={project.id}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all"
                  >
                    <div className="relative aspect-video overflow-hidden bg-slate-200">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} – ${project.category} Webdesign ${city.name}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                        <ExternalLink className="w-4 h-4 text-slate-700" />
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {project.category}
                      </span>
                      <p className="text-xl font-bold text-slate-900 mt-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 rounded-2xl border border-slate-200 bg-slate-50">
                <p className="text-slate-600">
                  Aktuell werden für {city.name} keine Referenzen angezeigt.
                  Schauen Sie sich unser{' '}
                  <Link
                    href="/portfolio"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Portfolio
                  </Link>{' '}
                  an.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Leistungen */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-slate-900">
              Leistungen in {city.name}
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12">
              Von der ersten Website bis zur langfristigen Begleitung – alles aus
              einer Hand.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leistungenLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
                >
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.label}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-auto" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              {texts.ctaHeading}
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              {texts.ctaParagraph}
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
