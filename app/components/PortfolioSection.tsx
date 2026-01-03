'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

const portfolioProjects = [
  {
    id: 1,
    title: 'Heinerfilm',
    category: 'Medienagentur',
    imageUrl: '/heiner-header.png',
    liveUrl: 'https://heinerfilm.de',
  },
  {
    id: 2,
    title: 'DemoSeite',
    category: 'Malerbetrieb',
    imageUrl: '/headerscreen.png',
    liveUrl: 'https://319webdesign.com/malerbetrieb/',
  },
  {
    id: 3,
    title: 'Rechtsanwaltskanzlei Schmidt',
    category: 'Dienstleister',
    imageUrl: '/placeholder-project.jpg',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Elektroinstallation Weber',
    category: 'Handwerk',
    imageUrl: '/placeholder-project.jpg',
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Café am Markt',
    category: 'Gastronomie',
    imageUrl: '/placeholder-project.jpg',
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'Marketing Agentur',
    category: 'Dienstleister',
    imageUrl: '/placeholder-project.jpg',
    liveUrl: '#',
  },
]

export default function PortfolioSection() {
  const [portfolioIndex, setPortfolioIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const portfolioRef = useRef<HTMLDivElement>(null)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemsPerView = isMobile ? 1.2 : 3
  const maxIndex = Math.max(0, portfolioProjects.length - Math.ceil(itemsPerView))
  const cardWidth = isMobile ? 83.333 : 33.333

  return (
    <section className="py-16 px-6 bg-slate-950 relative group">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere neuesten Werke
          </h2>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
          >
            Alle Projekte ansehen
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Portfolio Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-slate-800/90 backdrop-blur-sm p-3 rounded-full border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed"
            onClick={() => {
              if (portfolioIndex > 0) {
                setPortfolioIndex(portfolioIndex - 1)
              }
            }}
            disabled={portfolioIndex === 0}
          >
            <ChevronLeft className="w-5 h-5 text-slate-300" />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-slate-800/90 backdrop-blur-sm p-3 rounded-full border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed"
            onClick={() => {
              if (portfolioIndex < maxIndex) {
                setPortfolioIndex(portfolioIndex + 1)
              }
            }}
            disabled={portfolioIndex >= maxIndex}
          >
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </motion.button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <motion.div
              ref={portfolioRef}
              className="flex gap-4"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              animate={{
                x: `-${portfolioIndex * (100 / itemsPerView)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                width: `${(portfolioProjects.length / itemsPerView) * 100}%`,
              }}
            >
              {portfolioProjects.map((project, index) => {
                const centerIndex = portfolioIndex + (itemsPerView / 2)
                const distance = Math.abs(index - centerIndex)
                const scale = Math.max(0.85, 1 - distance * 0.08)
                const opacity = Math.max(0.5, 1 - distance * 0.15)
                
                return (
                  <motion.div
                    key={project.id}
                    className={`flex-shrink-0 ${isMobile ? 'w-[calc(83.333%-0.67rem)]' : 'w-[calc(33.333%-0.67rem)]'}`}
                    style={{
                      scale,
                      opacity,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobile ? (
                      <motion.a
                        href={project.liveUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative rounded-2xl overflow-hidden shadow-xl bg-slate-800/50 backdrop-blur-sm"
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Image Container */}
                        <div className="relative aspect-[21/9] md:aspect-video overflow-hidden">
                          <img
                            src={project.imageUrl || '/placeholder-project.jpg'}
                            alt={project.title}
                            className="w-full h-full object-cover object-center"
                          />

                          {/* Overlay Banner */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent backdrop-blur-sm p-4">
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                                {project.category}
                              </span>
                              <h3 className="text-lg font-bold text-white">
                                {project.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-800/50 backdrop-blur-sm">
                        {/* Image Container */}
                        <div className="relative aspect-[21/9] md:aspect-video overflow-hidden">
                          <img
                            src={project.imageUrl || '/placeholder-project.jpg'}
                            alt={project.title}
                            className="w-full h-full object-cover object-center"
                          />
                          
                          {/* Live View Button */}
                          <motion.a
                            href={project.liveUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm p-2 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 z-10"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4 text-slate-300" />
                          </motion.a>

                          {/* Overlay Banner */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent backdrop-blur-sm p-4">
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                                {project.category}
                              </span>
                              <h3 className="text-lg font-bold text-white">
                                {project.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(100, ((portfolioIndex + itemsPerView) / portfolioProjects.length) * 100)}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

