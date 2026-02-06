import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, MapPin, ExternalLink } from 'lucide-react'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import LocalBusinessSchema from '../../components/LocalBusinessSchema'
import { getCityBySlug, getAllCitySlugs } from '../../../config/cities'
import { getProjectsByCity } from '../../../config/projects'

// =============================================================================
// ANWEISUNG: Warum Webdesign in [City] wichtig ist
// =============================================================================
// Dieser Abschnitt MUSS für jede Stadt individuell verfasst werden.
// Mindestens 300 Wörter unique Content pro Stadt – keine Duplicate Content.
// Berücksichtigen Sie: lokale Wirtschaft, Branchen, Wettbewerb, Besonderheiten.
// =============================================================================

const warumWebdesignPlaceholder: Record<
  string,
  { heading: string; content: string }
> = {
  darmstadt: {
    heading: 'Warum Webdesign in Darmstadt wichtig ist',
    content:
      '[PLATZHALTER – mind. 300 Wörter] Individueller Text für Darmstadt: Wissenschaftsstadt, Tech-Hub, Hochschulen, Wirtschaftsstruktur, lokale Branchen (IT, Forschung, Handel), Wettbewerbssituation, Besonderheiten der Darmstädter Unternehmen. Dieser Text muss einzigartig sein und darf nicht von anderen Stadt-Seiten kopiert werden.',
  },
  pfungstadt: {
    heading: 'Warum Webdesign in Pfungstadt wichtig ist',
    content:
      '[PLATZHALTER – mind. 300 Wörter] Individueller Text für Pfungstadt: Mittelzentrum, Nähe zu Darmstadt, lokale Handwerksbetriebe, Einzelhandel, Dienstleister, typische Unternehmensstruktur. Pfungstadts Besonderheiten und warum eine professionelle Website für die lokale Wirtschaft essenziell ist.',
  },
  griesheim: {
    heading: 'Warum Webdesign in Griesheim wichtig ist',
    content:
      '[PLATZHALTER – mind. 300 Wörter] Individueller Text für Griesheim: Westlich von Darmstadt, Pendler-Standort, lokale Unternehmen, Branchenmix. Griesheim-spezifische Argumente für professionelles Webdesign.',
  },
  weiterstadt: {
    heading: 'Warum Webdesign in Weiterstadt wichtig ist',
    content:
      '[PLATZHALTER – mind. 300 Wörter] Individueller Text für Weiterstadt: Wirtschaftsstandort, Logistik, Mittelstand, Industrie. Weiterstadt-spezifische Inhalte für die Webdesign-Entscheidung.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: { city: string }
}): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  if (!city) return { title: 'Stadt nicht gefunden | 319Webdesign' }

  const canonicalUrl = `https://319webdesign.com/region/${city.slug}`
  return {
    title: `Webdesign ${city.name} | High-Performance Websites | 319Webdesign`,
    description: `Professionelles Webdesign in ${city.name} mit PageSpeed 99/100. Lokale Referenzen, individuelle Beratung und moderne Websites für Unternehmen in ${city.region}.`,
    keywords: city.keywords.join(', '),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Webdesign ${city.name} | 319Webdesign`,
      description: `Professionelles Webdesign in ${city.name}. Lokale Referenzen und persönliche Betreuung in ${city.region}.`,
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
  const warumContent = warumWebdesignPlaceholder[city.slug] ?? {
    heading: `Warum Webdesign in ${city.name} wichtig ist`,
    content: `[PLATZHALTER – mind. 300 Wörter] Individueller Text für ${city.name} erforderlich. Siehe Anweisung im Quellcode.`,
  }

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
              Webdesign{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                {city.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-8">
              Professionelles Webdesign in {city.name} mit PageSpeed 99/100.
              Persönliche Betreuung in {city.region}.
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

        {/* Warum Webdesign in [City] – Platzhalter für unique Content */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              {warumContent.heading}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
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
              Ausgewählte Webdesign-Projekte für Unternehmen in {city.name} und
              Umgebung.
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
                      <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
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

        {/* Interne Verlinkung – Leistungsseiten für Autoritäts-Erbe */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-slate-900">
              Leistungen für Unternehmen in {city.name}
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
              Bereit für Ihre Website in {city.name}?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kostenloses Erstgespräch – persönlich oder online.
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
