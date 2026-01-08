'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Projekt-Daten
const allProjects = [
  {
    id: 1,
    title: 'Heinerfilm',
    category: 'Webdesign',
    imageUrl: '/heinerfilm_header.jpeg',
    liveUrl: 'https://heinerfilm.vercel.app/',
    size: 'wide', // breit
  },
  {
    id: 2,
    title: 'DemoSeite',
    category: 'Handwerksbetrieb',
    imageUrl: '/headerscreen.png',
    liveUrl: 'https://319webdesign.com/malerbetrieb/',
    size: 'normal', // normal
  },
]

// Nur Heinerfilm und DemoSeite anzeigen
const portfolioProjects = allProjects.filter(
  project => project.title === 'Heinerfilm' || project.title === 'DemoSeite'
)

const categories = ['Alle', 'Webdesign', 'Handwerksbetrieb']

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
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeFilter)

  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background - Mesh Gradient (wie auf Startseite) */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-zinc-900" />
          
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Ausgewählte Arbeiten
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            Wo Design auf Performance trifft – unsere erfolgreichsten Case Studies.
          </p>
        </motion.div>
      </section>

      {/* Filter Menu */}
      <section className="py-8 px-6 bg-slate-950 border-b border-slate-800/50 sticky top-0 z-40 backdrop-blur-sm bg-slate-950/95">
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
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-slate-200 border border-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid - Bento Style */}
      <section className="py-16 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {filteredProjects.map((project, index) => {
              // Bento-Style Grid: unterschiedliche Größen
              const gridClasses = {
                wide: 'md:col-span-2', // breit (2 Spalten)
                tall: 'md:row-span-2', // hoch (2 Zeilen)
                normal: '', // normal (1x1)
              }

              return (
                <motion.div
                  key={`${activeFilter}-${project.id}`}
                  variants={staggerItem}
                  initial="initial"
                  animate="whileInView"
                  className={`group relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 ${gridClasses[project.size as keyof typeof gridClasses]}`}
                  style={{
                    minHeight: project.size === 'tall' ? '500px' : project.size === 'wide' ? '300px' : '300px',
                  }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-full overflow-hidden">
                    <motion.img
                      src={project.imageUrl || '/placeholder-project.jpg'}
                      alt={`Webdesign Portfolio Mockup für ${project.title} - ${project.category} Projekt von 319Webdesign`}
                      className="w-full h-full object-cover"
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
                          <motion.a
                            href={project.liveUrl || '#'}
                            target={project.liveUrl !== '#' ? '_blank' : undefined}
                            rel={project.liveUrl !== '#' ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            View Project
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>

                    {/* View Project Button (immer sichtbar, aber dezent) */}
                    <motion.a
                      href={project.liveUrl || '#'}
                      target={project.liveUrl !== '#' ? '_blank' : undefined}
                      rel={project.liveUrl !== '#' ? 'noopener noreferrer' : undefined}
                      className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 text-blue-400" />
                    </motion.a>

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
              <p className="text-xl text-slate-400">
                Keine Projekte in dieser Kategorie gefunden.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

