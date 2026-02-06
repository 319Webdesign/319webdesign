'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReduceMotion } from './ReducedMotionProvider'
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
    title: 'da-sound',
    category: 'Veranstaltungstechnik',
    imageUrl: '/dasound-header.png',
    liveUrl: 'https://www.da-sound.de/',
  },
  {
    id: 3,
    title: 'Arena Sportsbar',
    category: 'Gastronomie',
    imageUrl: '/arena-sportsbar-header.png',
    liveUrl: 'https://arena-sportsbar.vercel.app/',
  },
]

export default function PortfolioSection() {
  const [portfolioIndex, setPortfolioIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const reduceMotion = useReduceMotion()
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

  // Immer eine volle Karte anzeigen, damit nichts abgeschnitten wird
  const itemsPerView = portfolioProjects.length === 1 ? 1 : (isMobile ? 1 : 1)
  // Berechne maxIndex: Anzahl der möglichen Scroll-Positionen
  // Wenn wir mehr Items haben als sichtbar sind, können wir scrollen
  const maxIndex = portfolioProjects.length > itemsPerView 
    ? Math.ceil(portfolioProjects.length - itemsPerView)
    : 0

  return (
    <section className="py-16 px-6 bg-white relative group">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {reduceMotion ? (
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Webdesign <span className="text-blue-600">Portfolio</span> – ausgewählte Projekte
            </h2>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group/link">
              Alle Projekte ansehen
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <motion.div {...fadeInUp} className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Webdesign <span className="text-blue-600">Portfolio</span> – ausgewählte Projekte
            </h2>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group/link">
              Alle Projekte ansehen
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>
        )}

        {/* Portfolio Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          {portfolioIndex > 0 && (
            <motion.button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-full border border-slate-200 hover:border-blue-500/50 hover:bg-slate-50 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
              onClick={() => {
                setPortfolioIndex(portfolioIndex - 1)
              }}
              aria-label="Vorheriges Portfolio-Projekt anzeigen"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" aria-hidden="true" />
            </motion.button>
          )}

          {portfolioIndex < maxIndex && (
            <motion.button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-full border border-slate-200 hover:border-blue-500/50 hover:bg-slate-50 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
              onClick={() => {
                setPortfolioIndex(portfolioIndex + 1)
              }}
              aria-label="Nächstes Portfolio-Projekt anzeigen"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" aria-hidden="true" />
            </motion.button>
          )}

          {/* Slider Container */}
          <div className={`overflow-hidden ${portfolioProjects.length === 1 ? 'flex justify-center' : ''}`}>
            {reduceMotion ? (
              <div
                ref={portfolioRef}
                className={`flex ${portfolioProjects.length === 1 ? 'justify-center' : ''} gap-4`}
                style={{
                  width: portfolioProjects.length === 1 ? '100%' : `${(portfolioProjects.length / itemsPerView) * 100}%`,
                  transform: portfolioProjects.length === 1 ? 'none' : `translateX(-${portfolioIndex * (100 / portfolioProjects.length)}%)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
              {portfolioProjects.map((project, index) => {
                const centerIndex = portfolioProjects.length === 1 ? 0 : portfolioIndex + (itemsPerView / 2)
                const distance = Math.abs(index - centerIndex)
                const scale = portfolioProjects.length === 1 ? 1 : Math.max(0.85, 1 - distance * 0.08)
                const opacity = portfolioProjects.length === 1 ? 1 : Math.max(0.5, 1 - distance * 0.15)
                
                // Bei itemsPerView=1: Jede Karte = 1/3 des Containers, volle Ansicht ohne Abschneiden
                const cardWidthClass = portfolioProjects.length === 1
                  ? (isMobile ? 'w-full max-w-full' : 'w-full max-w-5xl mx-auto')
                  : 'min-w-0 flex-[1_0_0]'
                
                const CardWrapper = reduceMotion ? 'div' : motion.div
                const CardLink = reduceMotion ? 'a' : motion.a
                const cardWrapperProps = reduceMotion ? { key: project.id, className: `flex-shrink-0 ${cardWidthClass}`, style: { scale: 1, opacity: 1 } } : { key: project.id, className: `flex-shrink-0 ${cardWidthClass}`, style: { scale, opacity }, transition: { duration: 0.3 } }
                const cardLinkProps = reduceMotion ? { href: project.liveUrl || '#', target: '_blank', rel: 'noopener noreferrer', className: 'block relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 backdrop-blur-sm cursor-pointer group/card' } : { href: project.liveUrl || '#', target: '_blank', rel: 'noopener noreferrer', className: 'block relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 backdrop-blur-sm cursor-pointer group/card', whileHover: { scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)' }, whileTap: { scale: 0.98 }, transition: { type: 'spring', stiffness: 300, damping: 25 } }
                return (
                  <CardWrapper {...cardWrapperProps}>
                    <CardLink {...cardLinkProps}>
                      {/* Image Container */}
                      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-slate-200">
                        <Image
                          src={project.imageUrl || '/placeholder-project.jpg'}
                          alt={`Webdesign Darmstadt und Pfungstadt – ${project.title} Portfolio-Projekt ${project.category} von 319Webdesign`}
                          fill
                          sizes="(max-width: 768px) 95vw, (max-width: 1280px) 60vw, 800px"
                          quality={90}
                          className="object-contain object-center transition-transform duration-300 group-hover/card:scale-[1.02]"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                        {/* Live View Button - nur auf Desktop sichtbar */}
                        {!isMobile && (
                          <motion.div
                            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-slate-200 group-hover/card:border-blue-500/50 transition-all duration-300 z-10"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4 text-slate-700 group-hover/card:text-blue-600 transition-colors" aria-hidden="true" />
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
                    </CardLink>
                  </CardWrapper>
                )
              })}
              </div>
            ) : (
              <motion.div
                ref={portfolioRef}
                className={`flex ${portfolioProjects.length === 1 ? 'justify-center' : ''} gap-4`}
                drag={portfolioProjects.length > 1 ? 'x' : false}
                dragConstraints={{ left: -maxIndex * (100 / portfolioProjects.length), right: 0 }}
                dragElastic={0.2}
                animate={{ x: portfolioProjects.length === 1 ? '0%' : `-${portfolioIndex * (100 / portfolioProjects.length)}%` }}
                onDragEnd={(_e, info) => {
                  if (portfolioProjects.length <= 1) return
                  const threshold = 50
                  if (info.offset.x > threshold && portfolioIndex > 0) setPortfolioIndex(portfolioIndex - 1)
                  else if (info.offset.x < -threshold && portfolioIndex < maxIndex) setPortfolioIndex(portfolioIndex + 1)
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ width: portfolioProjects.length === 1 ? '100%' : `${(portfolioProjects.length / itemsPerView) * 100}%` }}
              >
              {portfolioProjects.map((project, index) => {
                const centerIndex = portfolioProjects.length === 1 ? 0 : portfolioIndex + (itemsPerView / 2)
                const distance = Math.abs(index - centerIndex)
                const scale = portfolioProjects.length === 1 ? 1 : Math.max(0.85, 1 - distance * 0.08)
                const opacity = portfolioProjects.length === 1 ? 1 : Math.max(0.5, 1 - distance * 0.15)
                const cardWidthClass = portfolioProjects.length === 1 ? (isMobile ? 'w-full max-w-full' : 'w-full max-w-5xl mx-auto') : 'min-w-0 flex-[1_0_0]'
                const CardWrapper = motion.div
                const CardLink = motion.a
                const cardWrapperProps = { key: project.id, className: `flex-shrink-0 ${cardWidthClass}`, style: { scale, opacity }, transition: { duration: 0.3 } }
                const cardLinkProps = { href: project.liveUrl || '#', target: '_blank' as const, rel: 'noopener noreferrer', className: 'block relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 backdrop-blur-sm cursor-pointer group/card', whileHover: { scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)' }, whileTap: { scale: 0.98 }, transition: { type: 'spring' as const, stiffness: 300, damping: 25 } }
                return (
                  <CardWrapper {...cardWrapperProps}>
                    <CardLink {...cardLinkProps}>
                      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-slate-200">
                        <Image src={project.imageUrl || '/placeholder-project.jpg'} alt={`Webdesign Darmstadt und Pfungstadt – ${project.title} Portfolio-Projekt ${project.category} von 319Webdesign`} fill sizes="(max-width: 768px) 95vw, (max-width: 1280px) 60vw, 800px" quality={90} className="object-contain object-center transition-transform duration-300 group-hover/card:scale-[1.02]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                        {!isMobile && (
                          <motion.div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-slate-200 group-hover/card:border-blue-500/50 transition-all duration-300 z-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <ExternalLink className="w-4 h-4 text-slate-700 group-hover/card:text-blue-600 transition-colors" aria-hidden="true" />
                          </motion.div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent backdrop-blur-sm p-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wide">{project.category}</span>
                            <h3 className="text-lg font-bold text-white group-hover/card:text-blue-200 transition-colors">{project.title}</h3>
                          </div>
                        </div>
                      </div>
                    </CardLink>
                  </CardWrapper>
                )
              })}
              </motion.div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
            {reduceMotion ? (
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                style={{
                  width: `${Math.min(100, ((portfolioIndex + itemsPerView) / portfolioProjects.length) * 100)}%`,
                  transition: 'width 0.3s ease-out',
                }}
              />
            ) : (
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min(100, ((portfolioIndex + itemsPerView) / portfolioProjects.length) * 100)}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

