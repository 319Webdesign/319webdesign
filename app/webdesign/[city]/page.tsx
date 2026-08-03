import type { Metadata } from 'next'
import Image from 'next/image'
import { getCanonicalUrl, seoKeywordsBase, truncateDescriptionForSeo, truncateTitleForSeo } from '../../../config/seo'
import Link from 'next/link'
import { ArrowRight, MapPin, Users, Building2 } from 'lucide-react'
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
import { getUniqueH1Webdesign, getMetaDescriptionWebdesignCity } from '../../../config/cityContent'
import PfungstadtWebdesignFaqJsonLd from '../../components/PfungstadtWebdesignFaqJsonLd'
import PfungstadtRegionalTrustSection from '../../components/PfungstadtRegionalTrustSection'
import PfungstadtLokaleWebsiteSection from '../../components/PfungstadtLokaleWebsiteSection'
import PfungstadtDaSoundReferenzSection from '../../components/PfungstadtDaSoundReferenzSection'
import PfungstadtZielgruppeSection from '../../components/PfungstadtZielgruppeSection'
import PfungstadtWebdesignFaqSection from '../../components/PfungstadtWebdesignFaqSection'
import DarmstadtWissenschaftsstadtSection from '../../components/DarmstadtWissenschaftsstadtSection'
import DarmstadtBusinessRequirementsSection from '../../components/DarmstadtBusinessRequirementsSection'
import DarmstadtReferenzenSection from '../../components/DarmstadtReferenzenSection'
import DarmstadtBranchenSection from '../../components/DarmstadtBranchenSection'
import DarmstadtWebdesignFaqJsonLd from '../../components/DarmstadtWebdesignFaqJsonLd'
import DarmstadtWebdesignFaqSection from '../../components/DarmstadtWebdesignFaqSection'
import DarmstadtWebdesignHeroSection from '../../components/DarmstadtWebdesignHeroSection'
import DarmstadtClosingCtaSection from '../../components/DarmstadtClosingCtaSection'
import TreburWebdesignHeroSection from '../../components/TreburWebdesignHeroSection'
import TreburTrustSection from '../../components/TreburTrustSection'
import TreburWarumSection from '../../components/TreburWarumSection'
import TreburLeistungenSection from '../../components/TreburLeistungenSection'
import TreburMidCtaSection from '../../components/TreburMidCtaSection'
import TreburWarumWebsiteSection from '../../components/TreburWarumWebsiteSection'
import TreburHandwerkerSection from '../../components/TreburHandwerkerSection'
import TreburProzessSection from '../../components/TreburProzessSection'
import TreburReferenzenSection from '../../components/TreburReferenzenSection'
import TreburLokalerBereichSection from '../../components/TreburLokalerBereichSection'
import TreburWebdesignFaqSection from '../../components/TreburWebdesignFaqSection'
import TreburWebdesignFaqJsonLd from '../../components/TreburWebdesignFaqJsonLd'
import TreburClosingCtaSection from '../../components/TreburClosingCtaSection'

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
  const absoluteMetaTitles: Record<string, string> = {
    pfungstadt: 'Webdesign Pfungstadt | Moderne Websites für Betriebe',
    darmstadt: 'Webdesign Darmstadt | Websites die Kunden bringen',
    griesheim: 'Webdesign Griesheim | Moderne Websites für Unternehmen',
    weiterstadt: 'Webdesign Weiterstadt | Websites die Kunden bringen',
    trebur: 'Webdesign Trebur | Moderne Webseiten für Unternehmen | 319Webdesign',
  }
  const absoluteTitle = absoluteMetaTitles[city.slug]
  const pageTitle =
    absoluteTitle ?? truncateTitleForSeo(`Next.js Webdesign ${city.name} | Südhessen`)
  const metaDescriptionRaw = getMetaDescriptionWebdesignCity(city)
  const description =
    city.slug === 'pfungstadt' || city.slug === 'darmstadt' || city.slug === 'trebur'
      ? metaDescriptionRaw.trim()
      : truncateDescriptionForSeo(metaDescriptionRaw)
  const ogTitle = absoluteTitle ?? `${pageTitle} | 319Webdesign`
  const ogImageAlt =
    city.slug === 'trebur'
      ? 'Webdesign Trebur – moderne Websites für Unternehmen und Handwerksbetriebe in der Rhein-Main-Region'
      : `Webdesign ${city.name} – Next.js und lokales SEO in Darmstadt & Pfungstadt`
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : pageTitle,
    description,
    keywords: [...seoKeywordsBase, ...city.keywords],
    robots: { index: true, follow: true },
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: ogTitle,
      description,
      url: canonicalUrl,
      siteName: '319Webdesign',
      locale: 'de_DE',
      type: 'website',
      images: [
        {
          url: '/319Web_Mockup_iphone.png',
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: ['/319Web_Mockup_iphone.png'],
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
  const h1 =
    city.slug !== 'darmstadt' && city.slug !== 'trebur' ? getUniqueH1Webdesign(city) : null

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

  return (
    <>
      {city.slug === 'pfungstadt' && <PfungstadtWebdesignFaqJsonLd />}
      {city.slug === 'darmstadt' && <DarmstadtWebdesignFaqJsonLd />}
      {city.slug === 'trebur' && <TreburWebdesignFaqJsonLd />}
      <Header />
      <main className="min-h-screen bg-white">
        {city.slug === 'darmstadt' ? (
          <DarmstadtWebdesignHeroSection city={city} />
        ) : city.slug === 'trebur' ? (
          <TreburWebdesignHeroSection city={city} />
        ) : (
            <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 pt-24">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

              {/* Portrait rechts im Hintergrund */}
              <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[min(46%,28rem)] md:block lg:w-[min(42%,32rem)]">
                <div className="relative h-full min-h-[320px] w-full translate-x-3 md:translate-x-5 lg:translate-x-6">
                  <Image
                    src="/maik-removebg.png"
                    alt="Maik Schmidt – Webdesigner, 319Webdesign"
                    fill
                    className="object-contain object-right object-bottom lg:object-center"
                    sizes="(max-width: 768px) 0px, (max-width: 1024px) 38vw, 32rem"
                    priority
                  />
                </div>
              </div>

              <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
                <div className="flex justify-center">
                  <Breadcrumbs
                    items={[
                      { name: 'Startseite', url: '/' },
                      { name: 'Webdesign & Launch', url: '/leistungen/webdesign-launch' },
                      { name: city.name, url: `/webdesign/${city.slug}` },
                    ]}
                  />
                </div>

                {h1 && (
                  <>
                    <h1 className="mb-6 text-2xl font-bold leading-tight text-slate-900 md:text-3xl lg:text-4xl">
                      <span className="whitespace-pre-line bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                        {h1.main}
                      </span>
                      {h1.sub && (
                        <span className="mt-2 block text-lg font-semibold text-slate-700 md:text-xl lg:text-2xl">
                          {h1.sub}
                        </span>
                      )}
                    </h1>

                    <p className="mx-auto mb-8 max-w-4xl text-lg text-slate-600 md:text-xl">
                      {getHeroIntro(city)}
                    </p>

                    <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-slate-700">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <span>
                          {city.name}, {city.region}
                        </span>
                      </div>
                      {city.population && (
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-blue-600" />
                          <span>{city.population} Einwohner</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <span>{texts.personalBetreuung}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
                      >
                        Kostenloses Erstgespräch
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/leistungen"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
                      >
                        Leistungen ansehen
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </section>
        )}

        {city.slug === 'darmstadt' && <DarmstadtWissenschaftsstadtSection />}
        {city.slug === 'darmstadt' && <DarmstadtBusinessRequirementsSection />}

        {city.slug === 'pfungstadt' && <PfungstadtRegionalTrustSection />}

        {city.slug === 'trebur' && <TreburTrustSection />}
        {city.slug === 'trebur' && <TreburWarumSection />}
        {city.slug === 'trebur' && <TreburLeistungenSection />}
        {city.slug === 'trebur' && <TreburMidCtaSection />}
        {city.slug === 'trebur' && <TreburWarumWebsiteSection />}
        {city.slug === 'trebur' && <TreburHandwerkerSection />}

        {/* Prozess – stadt-spezifischer Content */}
        {city.slug === 'trebur' ? (
          <TreburProzessSection />
        ) : (
          <ProzessSection citySlug={city.slug} />
        )}

        {city.slug === 'pfungstadt' && <PfungstadtLokaleWebsiteSection />}
        {city.slug === 'pfungstadt' && <PfungstadtDaSoundReferenzSection />}

        {city.slug === 'darmstadt' && <DarmstadtReferenzenSection />}
        {city.slug === 'trebur' && <TreburReferenzenSection />}

        {city.slug !== 'pfungstadt' && city.slug !== 'darmstadt' && city.slug !== 'trebur' && (
          /* Performance Section – auf Pfungstadt & Darmstadt entfällt sie (Darmstadt: Referenzen-Sektion) */
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
        )}

        {city.slug === 'darmstadt' && <DarmstadtBranchenSection />}

        {city.slug !== 'pfungstadt' && city.slug !== 'darmstadt' && city.slug !== 'trebur' && (
          <section className="py-20 px-6 bg-white" aria-labelledby="was-sie-bekommen-heading">
            <div className="max-w-6xl mx-auto">
              <h2
                id="was-sie-bekommen-heading"
                className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900"
              >
                Was Sie bekommen
              </h2>
              <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                {texts.featuresIntro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-3 text-blue-600">
                      {feature.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {city.slug === 'pfungstadt' && <PfungstadtZielgruppeSection />}
        {city.slug === 'trebur' && <TreburLokalerBereichSection />}

        {city.slug !== 'pfungstadt' && city.slug !== 'darmstadt' && city.slug !== 'trebur' && (
          <section className="py-20 px-6 bg-white" aria-labelledby="webdesign-region-heading">
            <div className="max-w-5xl mx-auto text-center">
              <h2
                id="webdesign-region-heading"
                className="text-3xl md:text-4xl font-bold mb-6 text-slate-900"
              >
                Webdesign für KMU und Immobilienmakler in {city.name} und Südhessen
              </h2>
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
        )}

        {city.slug === 'pfungstadt' && <PfungstadtWebdesignFaqSection />}
        {city.slug === 'darmstadt' && <DarmstadtWebdesignFaqSection />}
        {city.slug === 'trebur' && <TreburWebdesignFaqSection />}

        {city.slug === 'darmstadt' ? (
          <DarmstadtClosingCtaSection />
        ) : city.slug === 'trebur' ? (
          <TreburClosingCtaSection />
        ) : (
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
        )}
      </main>
      <Footer />
    </>
  )
}
