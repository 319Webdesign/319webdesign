'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
    imageUrl: '/heinerfilm_header.jpeg',
    liveUrl: 'https://heinerfilm.vercel.app/',
  },
  {
    id: 2,
    title: 'DemoSeite',
    category: 'Malerbetrieb',
    imageUrl: '/headerscreen.png',
    liveUrl: 'https://319webdesign.com/malerbetrieb/',
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

  const itemsPerView = isMobile ? 1.2 : 1.5
  // Berechne maxIndex: Anzahl der möglichen Scroll-Positionen
  // Wenn wir mehr Items haben als sichtbar sind, können wir scrollen
  const maxIndex = portfolioProjects.length > itemsPerView 
    ? Math.ceil(portfolioProjects.length - itemsPerView)
    : 0
  const cardWidth = isMobile ? 83.333 : 66.667

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
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-medium transition-colors group/link"
          >
            Alle Projekte ansehen
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Portfolio Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          {portfolioIndex > 0 && (
            <motion.button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-slate-800/90 backdrop-blur-sm p-3 rounded-full border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
              onClick={() => {
                setPortfolioIndex(portfolioIndex - 1)
              }}
              aria-label="Vorheriges Portfolio-Projekt anzeigen"
            >
              <ChevronLeft className="w-5 h-5 text-slate-200" aria-hidden="true" />
            </motion.button>
          )}

          {portfolioIndex < maxIndex && (
            <motion.button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-slate-800/90 backdrop-blur-sm p-3 rounded-full border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
              onClick={() => {
                setPortfolioIndex(portfolioIndex + 1)
              }}
              aria-label="Nächstes Portfolio-Projekt anzeigen"
            >
              <ChevronRight className="w-5 h-5 text-slate-200" aria-hidden="true" />
            </motion.button>
          )}

          {/* Slider Container */}
          <div className="overflow-hidden">
            <motion.div
              ref={portfolioRef}
              className="flex gap-4"
              drag="x"
              dragConstraints={{
                left: -maxIndex * (100 / itemsPerView),
                right: 0
              }}
              dragElastic={0.2}
              animate={{
                x: `-${portfolioIndex * (100 / itemsPerView)}%`,
              }}
              onDragEnd={(event, info) => {
                // Optional: Drag-to-swipe functionality
                const threshold = 50
                if (info.offset.x > threshold && portfolioIndex > 0) {
                  setPortfolioIndex(portfolioIndex - 1)
                } else if (info.offset.x < -threshold && portfolioIndex < maxIndex) {
                  setPortfolioIndex(portfolioIndex + 1)
                }
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
                    className={`flex-shrink-0 ${isMobile ? 'w-[calc(83.333%-0.67rem)]' : 'w-[calc(66.667%-0.5rem)]'}`}
                    style={{
                      scale,
                      opacity,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative rounded-2xl overflow-hidden shadow-xl bg-slate-800/50 backdrop-blur-sm cursor-pointer group/card"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden">
                        <Image
                          src={project.imageUrl || '/placeholder-project.jpg'}
                          alt={`Webdesign Portfolio Screenshot für ${project.title} - ${project.category} Projekt von 319Webdesign`}
                          width={1920}
                          height={820}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover/card:scale-105"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                        {/* Live View Button - nur auf Desktop sichtbar */}
                        {!isMobile && (
                          <motion.div
                            className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm p-2 rounded-lg border border-slate-700/50 group-hover/card:border-blue-500/50 transition-all duration-300 z-10"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4 text-slate-200 group-hover/card:text-blue-300 transition-colors" aria-hidden="true" />
                          </motion.div>
                        )}

                        {/* Overlay Banner */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent backdrop-blur-sm p-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                              {project.category}
                            </span>
                            <h3 className="text-lg font-bold text-white group-hover/card:text-blue-200 transition-colors">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </motion.a>
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

