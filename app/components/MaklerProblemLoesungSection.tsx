'use client'

import { motion } from 'framer-motion'
import { useReduceMotion } from './ReducedMotionProvider'
import { Copy, Building2, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const cardStagger = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const cards = [
  {
    icon: Copy,
    problem: 'Schluss mit Copy-Paste',
    solution: 'Vollautomatische Schnittstellen-Anbindung (API)',
  },
  {
    icon: Building2,
    problem: 'Raus aus der Portal-Falle',
    solution: 'Eigene High-End Plattform zur Eigentümer-Akquise',
  },
  {
    icon: Zap,
    problem: 'Warten bedeutet Abbrechen',
    solution: 'Next.js High-Performance für sofortige Ladezeiten',
  },
]

export default function MaklerProblemLoesungSection() {
  const reduceMotion = useReduceMotion()
  const HeaderEl = reduceMotion ? 'div' : motion.div
  const headerProps = reduceMotion
    ? { className: 'text-center mb-16' }
    : { ...fadeInUp, className: 'text-center mb-16' }

  return (
    <section className="py-12 md:py-24 px-6 bg-slate-50/80">
      <div className="max-w-6xl mx-auto">
        <HeaderEl {...headerProps}>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center max-w-3xl mx-auto">
            Vom Daten-Chaos zur automatisierten Vermarktung – für{' '}
            <span className="text-blue-600">Immobilienmakler</span>
          </h2>
        </HeaderEl>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon
            const CardEl = reduceMotion ? 'article' : motion.article
            const gradientWrapperClass =
              'rounded-2xl p-[1px] bg-gradient-to-br from-rose-200/50 via-slate-200/30 to-blue-200/50 transition-transform duration-300'
            const cardProps = reduceMotion
              ? { className: `${gradientWrapperClass} hover:scale-[1.02] md:hover:scale-[1.05]` }
              : {
                  ...cardStagger,
                  transition: { ...cardStagger.transition, delay: index * 0.12 },
                  whileHover: { scale: 1.05 },
                  className: gradientWrapperClass,
                }

            const cardInnerClass =
              'rounded-[calc(1rem-1px)] p-8 bg-white/80 backdrop-blur-md shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col items-center text-center'

            return (
              <CardEl key={card.problem} {...cardProps}>
                <div className={cardInnerClass}>
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-rose-100 to-blue-100 flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-slate-600" aria-hidden="true" />
                  </div>
                  <p className="text-rose-700/90 text-sm font-semibold uppercase tracking-wide mb-2">
                    {card.problem}
                  </p>
                  <p className="text-blue-600 md:text-blue-700 font-bold text-lg leading-snug">
                    {card.solution}
                  </p>
                </div>
              </CardEl>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/immobilienmakler-webdesign"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 group"
            aria-label="Webdesign für Immobilienmakler entdecken"
          >
            Webdesign für Makler entdecken
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
