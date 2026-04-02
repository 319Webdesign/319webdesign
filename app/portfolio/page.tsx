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

const DISPLAY_SLUGS = ['heinerfilm', 'da-sound', 'he-immologis'] as const

const displayProjects = DISPLAY_SLUGS.map((slug) => portfolioProjects.find((p) => p.slug === slug)).filter(
  (p): p is NonNullable<typeof p> => p != null
)

const categories = ['Alle', 'Medienagentur', 'Veranstaltungstechnik', 'Immobilienmakler']

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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background - Mesh Gradient (wie auf Startseite) */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-white" />
          
          {/* Animated Mesh Gradients */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30, 41, 59, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(15, 23, 42, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.10) 0%, transparent 50%), radial-gradient(circle at 20% 60%, rgba(30, 41, 59, 0.10) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30, 41, 59, 0.12) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Additional subtle gradient layer */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05), transparent 70%)',
            }}
          />
        </div>

        <motion.div
          {...fadeInUp}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <div className="flex justify-center mb-8">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Portfolio', url: '/portfolio' },
              ]}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Ausgewählte Arbeiten
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Wo Design auf Performance trifft – Next.js Webdesign-Referenzen aus Darmstadt, Pfungstadt und Südhessen.
          </p>
        </motion.div>
      </section>

      {/* Filter Menu */}
      <section className="py-8 px-6 bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
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

