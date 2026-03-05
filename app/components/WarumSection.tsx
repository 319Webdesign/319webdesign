'use client'

import { motion } from 'framer-motion'
import { useReduceMotion } from './ReducedMotionProvider'
import { AlertTriangle, Ban, TrendingDown } from 'lucide-react'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const listItems = [
  {
    icon: AlertTriangle,
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-50',
    title: 'Verlorene Kunden',
    text: 'Sie verlieren potenzielle Kunden, die an Ihrer Professionalität zweifeln und sich der Konkurrenz zuwenden.',
  },
  {
    icon: Ban,
    iconColor: 'text-rose-500',
    bgColor: 'bg-rose-50',
    title: 'Verpasste Bewerber',
    text: 'Qualifizierte Fachkräfte suchen nach modernen Arbeitgebern. Wenn Ihr Unternehmen digital unsichtbar ist, springen sie ab.',
  },
  {
    icon: TrendingDown,
    iconColor: 'text-slate-600',
    bgColor: 'bg-slate-100',
    title: 'Kein Wettbewerbsvorteil',
    text: 'Wenn Sie wie alle anderen aussehen, heben Sie sich nicht von der Konkurrenz ab und verlieren Marktanteile.',
  },
]

export default function WarumSection() {
  const reduceMotion = useReduceMotion()
  const LeftEl = reduceMotion ? 'div' : motion.div
  const RightEl = reduceMotion ? 'div' : motion.div
  const leftProps = reduceMotion ? { className: 'flex flex-col justify-center' } : { ...fadeInUp, className: 'flex flex-col justify-center' }
  const rightProps = reduceMotion ? { className: 'relative' } : { ...fadeInUp, transition: { ...fadeInUp.transition, delay: 0.15 }, className: 'relative' }

  return (
    <section id="benefits" className="pt-20 md:pt-32 lg:pt-48 pb-20 md:pb-28 lg:pb-36 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Linke Spalte: Text und Liste */}
          <LeftEl {...leftProps}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-slate-900 leading-tight">
              Herausforderungen im{' '}
              <span className="text-blue-600">digitalen Marketing</span>{' '}
              für <strong className="text-slate-900">KMU & Immobilienmakler</strong>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Viele KMU und Immobilienmakler vernachlässigen ihr{' '}
              <span className="font-medium text-slate-700">Webdesign und digitales Marketing</span>, sei es aus Zeitmangel, fehlendem Budget oder Bedenken bezüglich der Rentabilität. Ein starkes Webdesign ist für{' '}
              <strong className="text-slate-800">KMU & Immobilienmakler</strong> entscheidend – sonst gewinnt die Konkurrenz.
            </p>

            <ul className="space-y-5">
              {listItems.map((item, index) => {
                const IconComponent = item.icon
                const ItemEl = reduceMotion ? 'li' : motion.li
                const itemProps = reduceMotion
                  ? { className: 'flex gap-4 items-start' }
                  : { ...fadeInUp, transition: { ...fadeInUp.transition, delay: 0.1 + index * 0.08 }, className: 'flex gap-4 items-start' }
                return (
                  <ItemEl key={item.title} {...itemProps}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                      <IconComponent className={`w-5 h-5 ${item.iconColor}`} aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1">{item.title}:</strong>
                      <span className="text-slate-600 leading-relaxed">{item.text}</span>
                    </div>
                  </ItemEl>
                )
              })}
            </ul>

            {/* Strategischer Abschluss & CTA */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                <span className="font-semibold text-slate-900">Erkenntnis:</span> Eine Website muss ein klares Ziel verfolgen. Ich helfe Ihnen dabei, dieses Ziel nicht nur zu definieren, sondern langfristig zu erreichen.
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </LeftEl>

          {/* Rechte Spalte: Bild */}
          <RightEl {...rightProps}>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/problem.png"
                alt="Webdesign für Immobilienmakler und KMU – Herausforderungen im digitalen Marketing lösen"
                width={640}
                height={480}
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
                loading="lazy"
                priority={false}
              />
            </div>
          </RightEl>
        </div>
      </div>
    </section>
  )
}
