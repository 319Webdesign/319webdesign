'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import { portfolioProjects } from '../../config/projects'

const MotionLink = motion(Link)

const GoogleReviewsSection = dynamic(() => import('../components/GoogleReviewsSection'), { ssr: true })

const DISPLAY_SLUGS = ['heinerfilm', 'da-sound', 'he-immologis', 'tierhotel-rhein-main'] as const

const displayProjects = DISPLAY_SLUGS.map((slug) => portfolioProjects.find((p) => p.slug === slug)).filter(
  (p): p is NonNullable<typeof p> => p != null
)

const categories = ['Alle', 'Medienagentur', 'Veranstaltungstechnik', 'Immobilienmakler', 'Tierhotel']

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  },
}

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Alle')

  const filteredProjects =
    activeFilter === 'Alle'
      ? displayProjects
      : displayProjects.filter((project) => project.category === activeFilter)

  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-white" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 12% 18%, rgba(59, 130, 246, 0.12) 0%, transparent 45%), radial-gradient(circle at 80% 25%, rgba(37, 99, 235, 0.08) 0%, transparent 42%), radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.08) 0%, transparent 40%)',
              'radial-gradient(circle at 18% 22%, rgba(59, 130, 246, 0.15) 0%, transparent 48%), radial-gradient(circle at 72% 24%, rgba(30, 64, 175, 0.11) 0%, transparent 44%), radial-gradient(circle at 82% 70%, rgba(251, 191, 36, 0.1) 0%, transparent 42%)',
              'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 45%), radial-gradient(circle at 84% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 42%), radial-gradient(circle at 70% 72%, rgba(251, 191, 36, 0.08) 0%, transparent 40%)',
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-14 pt-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:pb-16">
          <motion.div {...fadeInUp} className="space-y-6">
            <div className="opacity-70">
              <Breadcrumbs
                items={[
                  { name: 'Startseite', url: '/' },
                  { name: 'Portfolio', url: '/portfolio' },
                ]}
              />
            </div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
              Referenzen aus Darmstadt &amp; Sudhessen
            </span>
            <h1 className="max-w-2xl text-balance text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-[3.25rem]">
              Websites, die nicht nur gut aussehen - sondern Ergebnisse liefern.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Einblicke in ausgewahlte Websites fur lokale Unternehmen, Dienstleister, Immobilienmakler und kreative
              Betriebe - entwickelt mit Fokus auf Design, Performance, SEO und mehr Anfragen.
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {['Next.js Webdesign', 'Performance & SEO', 'Projekte aus der Region', 'Personliche Umsetzung'].map(
                (point) => (
                  <li
                    key={point}
                    className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/60 backdrop-blur"
                  >
                    {point}
                  </li>
                )
              )}
            </ul>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/35"
              >
                Projekt anfragen
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md hover:shadow-blue-100"
              >
                Leistungen ansehen
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="relative mx-auto h-[360px] w-full max-w-[520px] md:h-[430px]"
          >
            {displayProjects.slice(0, 4).map((project, index) => {
              const cardPositions = [
                'left-0 top-6 w-[62%] md:w-[58%]',
                'right-2 top-0 w-[56%] md:w-[52%]',
                'left-12 bottom-8 w-[60%] md:w-[56%]',
                'right-0 bottom-0 w-[52%] md:w-[48%]',
              ]
              return (
                <motion.div
                  key={`hero-preview-${project.slug}`}
                  className={`group absolute overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.28)] backdrop-blur ${cardPositions[index]}`}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={project.imageUrl || '/placeholder-project.jpg'}
                      alt={`${project.title} - Webdesign Referenz aus ${project.location}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 px-3 py-2.5">
                    <span className="truncate text-sm font-semibold text-slate-800">{project.title}</span>
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              )
            })}
            <div className="pointer-events-none absolute -left-3 bottom-2 rounded-full border border-blue-200/70 bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-md shadow-blue-100">
              PageSpeed 95+
            </div>
            <div className="pointer-events-none absolute left-4 top-0 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-md shadow-slate-200/70">
              Local SEO
            </div>
            <div className="pointer-events-none absolute right-2 top-24 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-md shadow-slate-200/70">
              Responsive Design
            </div>
            <div className="pointer-events-none absolute right-8 bottom-2 rounded-full border border-amber-200 bg-amber-50/90 px-3 py-1.5 text-xs font-semibold text-amber-700 shadow-md shadow-amber-100">
              Mehr Anfragen
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Menu */}
      <section className="relative z-20 -mt-1 px-6 pb-10 pt-2">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200/70 bg-white/95 p-5 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur md:p-7">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-center text-sm font-semibold text-slate-600 md:text-base">Projekte nach Branche filtern</p>
            <div className="flex items-center gap-3 overflow-x-auto pb-1 md:flex-wrap md:justify-center md:overflow-visible">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'border-blue-600 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md hover:shadow-blue-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio-Grid: drei gleich große Karten */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr"
          >
            {filteredProjects.map((project) => {
              return (
                <motion.div
                  key={`${activeFilter}-${project.slug}`}
                  variants={staggerItem}
                  initial="initial"
                  animate="whileInView"
                  className="h-full"
                >
                  <MotionLink
                    href={`/portfolio/${project.slug}`}
                    className="group relative block h-full overflow-hidden rounded-2xl bg-slate-50 backdrop-blur-sm border border-slate-200 hover:border-blue-500/50 transition-all duration-500"
                  >
                    {/* Einheitliche Kartenhöhe über festes Bild-Seitenverhältnis */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <motion.img
                        src={project.imageUrl || '/placeholder-project.jpg'}
                        alt={`Webdesign Darmstadt und Pfungstadt – ${project.title} Portfolio-Projekt ${project.category} von 319Webdesign`}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      />

                      {/* Glassmorphism Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                          <div className="space-y-3">
                            <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-wide px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                              {project.category}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                              {project.title}
                            </h3>
                            <span className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 font-medium transition-colors">
                              Projekt {project.title} ansehen
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Externe Live-URL: Button statt <a> in <a> (ungültiges HTML, Hydration-Risiko) */}
                      <motion.button
                        type="button"
                        aria-label={`${project.title} – Live-Website in neuem Tab öffnen`}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
                        }}
                        className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5 text-blue-400" aria-hidden />
                      </motion.button>

                      {/* Category Badge (immer sichtbar) */}
                      <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-wide px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full border border-slate-700/50">
                          {project.category}
                        </span>
                      </div>

                      {/* Title (immer sichtbar, aber dezent) */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-transparent p-4 md:p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </MotionLink>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-slate-600">
                Keine Projekte in dieser Kategorie gefunden.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Google-Bewertungen */}
      <GoogleReviewsSection />

      {/* Abschluss CTA – Social Proof & Kontaktaufforderung */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Wann wird Ihr Projekt mein nächstes Highlight in Darmstadt?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Hinter jedem dieser Projekte steckt eine individuelle Strategie. Als Ihr lokaler Partner für Webdesign Darmstadt entwickle ich nicht nur „schöne“ Webseiten – ich baue digitale Werkzeuge, die durch 99/100 Performance und lokale SEO-Optimierung echte Anfragen generieren. Vom Martinsviertel bis Eberstadt: In der Wissenschaftsstadt setze ich auf ergebnisorientierte Zusammenarbeit mit KMUs und Maklern. Starten Sie Ihre eigene Erfolgsgeschichte – ich freue mich auf Ihr Projekt.
            </p>
            <div className="pt-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Calendar className="w-5 h-5" aria-hidden />
                Jetzt unverbindliches Erstgespräch in Darmstadt vereinbaren
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  )
}

