import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import { notFound } from 'next/navigation'
import {
  baseUrl,
  getCanonicalUrl,
  seoKeywordsBase,
  SEO_MAX_ABSOLUTE_TITLE_LENGTH,
  truncateDescriptionForSeo,
  truncateTitleForSeo,
} from '../../../config/seo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import CreativeWorkSchema from '../../components/CreativeWorkSchema'
import { getProjectBySlug, getAllProjectSlugs } from '../../../config/projects'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Projekt nicht gefunden' }

  const canonicalUrl = getCanonicalUrl(`/portfolio/${project.slug}`)
  const rawMetaTitle =
    project.seoPageTitle ?? `${project.title} | ${project.category} ${project.location}`
  const documentTitle = truncateTitleForSeo(rawMetaTitle, SEO_MAX_ABSOLUTE_TITLE_LENGTH)
  const descriptionTemplate = `${project.title} – Webdesign-Portfolio ${project.category} in ${project.location}. ${project.task} PageSpeed ${project.lighthouseScore}/100, Next.js Webdesign von 319Webdesign – Darmstadt, Pfungstadt, Südhessen.`
  const description = truncateDescriptionForSeo(
    project.seoMetaDescription?.trim() || descriptionTemplate,
  )
  const ogTitle = documentTitle
  const ogImageAlt = `Webdesign Portfolio ${project.title} – ${project.category} in ${project.location}, 319Webdesign`
  return {
    title: { absolute: documentTitle },
    description,
    keywords: [...seoKeywordsBase, project.category, project.location, 'Webdesign Referenz'],
    robots: { index: true, follow: true },
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: ogTitle,
      description,
      url: canonicalUrl,
      images: [
        {
          url: `${baseUrl}${project.imageUrl}`,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      siteName: '319Webdesign',
      locale: 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [`${baseUrl}${project.imageUrl}`],
    },
  }
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export default function PortfolioProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const pageUrl = `${baseUrl}/portfolio/${project.slug}`

  return (
    <>
      <CreativeWorkSchema
        name={project.title}
        description={`${project.category} in ${project.location} – ${project.task}`}
        image={project.imageUrl}
        url={pageUrl}
      />
      <Header />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Portfolio', url: '/portfolio' },
                { name: project.title, url: `/portfolio/${project.slug}` },
              ]}
            />

            <div className="mt-8 md:mt-12">
              {/* Großer Screenshot */}
              <div className="relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 shadow-xl mb-8">
                <Image
                  src={project.imageUrl}
                  alt={`Webdesign Portfolio ${project.title} – ${project.category} in ${project.location}, Next.js Referenzprojekt 319Webdesign`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-white transition-all text-slate-700 font-medium text-sm"
                  aria-label={`${project.title} live ansehen`}
                >
                  Live ansehen
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h1>
                  <p className="text-lg text-slate-600">
                    {project.category} · {project.location}
                  </p>
                </div>
                {/* Lighthouse Badge + Zum Projekt Button */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 px-5 py-3 bg-green-50 border border-green-200 rounded-xl">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {project.lighthouseScore}
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-green-800">
                        Lighthouse Score
                      </span>
                      <span className="block text-xs text-green-600">
                        PageSpeed {project.lighthouseScore}/100
                      </span>
                    </div>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
                    aria-label={`${project.title} – Website besuchen`}
                  >
                    Zum Projekt
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2-Spalten: Aufgabe & Technische Lösung */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Aufgabe */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Aufgabe
                </h2>
                {project.taskDetailed ? (
                  <div className="text-slate-700 leading-relaxed space-y-5">
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        {project.taskDetailed.ausgangslageTitle}
                      </h3>
                      <p>{project.taskDetailed.ausgangslage}</p>
                    </div>
                    {project.taskDetailed.meineAufgabe && (
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">
                          {project.taskDetailed.meineAufgabeTitle}
                        </h3>
                        <p>{project.taskDetailed.meineAufgabe}</p>
                      </div>
                    )}
                    {project.taskDetailed.kernaufgaben.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">
                          {project.taskDetailed.kernaufgabenTitle}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 pl-1">
                          {project.taskDetailed.kernaufgaben.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-slate-700 leading-relaxed">{project.task}</p>
                )}
              </div>

              {/* Technische Lösung */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Technische Lösung
                </h2>
                {project.technicalSolutionDetailed ? (
                  <div className="text-slate-700 leading-relaxed space-y-5">
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        {project.technicalSolutionDetailed.introTitle}
                      </h3>
                      <p className="mb-3">
                        {project.technicalSolutionDetailed.intro}
                      </p>
                      <ul className="list-disc list-inside space-y-2 pl-1">
                        {project.technicalSolutionDetailed.points.map(
                          (item, i) => (
                            <li key={i}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                    {project.technicalSolutionDetailed.resultPoints.length >
                      0 && (
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">
                          {project.technicalSolutionDetailed.resultTitle}
                        </h3>
                        <p className="mb-3">
                          {project.technicalSolutionDetailed.resultIntro}
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-1">
                          {project.technicalSolutionDetailed.resultPoints.map(
                            (item, i) => (
                              <li key={i}>{item}</li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-slate-700 leading-relaxed">
                    {project.technicalSolution}
                  </p>
                )}
              </div>
            </div>

            {project.beforeAfterComparison && (
              <div className="mt-16 md:mt-20 border-t border-slate-200/90 pt-14 md:pt-16">
                {project.beforeAfterComparison.sectionTitle ? (
                  <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 md:mb-10">
                    {project.beforeAfterComparison.sectionTitle}
                  </p>
                ) : null}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-10">
                  <figure className="m-0 flex flex-col gap-3">
                    <figcaption className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
                      {project.beforeAfterComparison.beforeLabel}
                    </figcaption>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                      <Image
                        src={project.beforeAfterComparison.beforeImageUrl}
                        alt={`${project.title} – Website vor dem Relaunch (Vorher-Ansicht)`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                  </figure>
                  <figure className="m-0 flex flex-col gap-3">
                    <figcaption className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
                      {project.beforeAfterComparison.afterLabel}
                    </figcaption>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                      <Image
                        src={project.beforeAfterComparison.afterImageUrl}
                        alt={`${project.title} – Website nach dem Relaunch (Nachher-Ansicht)`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Erzielte Ergebnisse mit Checkmarks */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
              Erzielte Ergebnisse
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2
                    className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <p className="text-lg font-medium text-slate-800">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Ähnliche Erfolge für Ihr Unternehmen in {project.location} erzielen?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie
              wir auch Ihr Projekt zum Erfolg führen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                Jetzt Projekt besprechen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all"
              >
                Weitere Referenzen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
