'use client'

import { motion } from 'framer-motion'
import { useReduceMotion } from './ReducedMotionProvider'
import { Search, Palette, FileText, Code, Wrench, ArrowRight } from 'lucide-react'
import {
  getProcessStepTexts,
  type ProcessStepKey,
} from '../../config/processSteps'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

const stepConfig = [
  { step: 1, icon: Search, title: 'Analyse & Ziel-Strategie', key: 'analyse' as const },
  { step: 2, icon: Palette, title: 'Performance-Design & Branding', key: 'design' as const },
  { step: 3, icon: FileText, title: 'Verkaufsstarke Inhalte', key: 'inhalte' as const },
  { step: 4, icon: Code, title: 'High-End Entwicklung', key: 'entwicklung' as const },
  { step: 5, icon: Wrench, title: 'Website-Betreuung', key: 'begleitung' as const },
]

interface ProzessSectionProps {
  /** Optional: Stadt-Slug für einzigartigen Content auf Stadt-Unterseiten */
  citySlug?: string
}

const darmstadtStepTitles: Record<ProcessStepKey, string> = {
  analyse: 'Kostenlose Website-Analyse',
  design: 'Strategie & Seitenstruktur',
  inhalte: 'Design & Inhalte',
  entwicklung: 'Technische Umsetzung',
  begleitung: 'Launch & Betreuung',
}

const introTexts: Record<string, string> = {
  pfungstadt: 'Webdesign in Pfungstadt – in fünf Schritten zu Ihrer sichtbaren Online-Präsenz vor Ort.',
  griesheim: 'Webdesign in Griesheim – in fünf Schritten zu Ihrer sichtbaren Online-Präsenz in der Region.',
  weiterstadt: 'Webdesign in Weiterstadt – in fünf Schritten zu Ihrer sichtbaren Online-Präsenz am Wirtschaftsstandort.',
  immobilienmakler: 'Immobilienmakler Webdesign – von der Analyse bis zum Launch: fünf Schritte zu Ihrer automatisierten Makler-Website.',
}

export default function ProzessSection({ citySlug }: ProzessSectionProps) {
  const texts = getProcessStepTexts(citySlug)
  const intro = citySlug && introTexts[citySlug]
    ? introTexts[citySlug]
    : 'Webdesign für Pfungstadt und Darmstadt – in fünf Schritten zu Ihrer sichtbaren Online-Präsenz.'
  const processSteps = stepConfig.map(({ step, icon, title, key }) => ({
    step,
    icon,
    title:
      citySlug === 'darmstadt' ? darmstadtStepTitles[key] : title,
    description: texts[key],
  }))
  const sectionHeading =
    citySlug === 'darmstadt'
      ? 'So läuft Ihr Webdesign-Projekt in Darmstadt ab'
      : 'Wie läuft Webdesign bei 319Webdesign ab?'
  const reduceMotion = useReduceMotion()

  const CardEl = reduceMotion ? 'div' : motion.div
  const cardProps = reduceMotion ? {} : { whileHover: { y: -3, transition: { duration: 0.3 } } }
  const IconEl = reduceMotion ? 'div' : motion.div
  const iconProps = reduceMotion ? {} : { whileHover: { rotate: [0, -5, 5, 0] }, transition: { duration: 0.5 } }
  const LinkEl = reduceMotion ? 'a' : motion.a
  const linkProps = reduceMotion ? { href: '/kontakt', className: 'group relative inline-block', 'aria-label': 'Zum Kontaktformular springen - Erstgespräch vereinbaren' } : { href: '/kontakt', whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 }, animate: { boxShadow: ['0 10px 25px -5px rgba(59, 130, 246, 0.3)', '0 15px 35px -5px rgba(59, 130, 246, 0.4)', '0 10px 25px -5px rgba(59, 130, 246, 0.3)' ] }, transition: { boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }, className: 'group relative inline-block', 'aria-label': 'Zum Kontaktformular springen - Erstgespräch vereinbaren' }

  return (
    <section id="prozess" className="py-12 md:py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {reduceMotion ? (
          <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {sectionHeading}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {citySlug === 'darmstadt' ? (
              'Klarer Ablauf, feste Ansprechpartner und transparente Schritte – von der ersten Analyse bis zur fertigen Website.'
            ) : (
              <>
                In 5 strategischen <span className="text-blue-600">Schritten</span> zu Ihrem digitalen{' '}
                <span className="text-blue-600">Marktvorsprung</span>. {intro}
              </>
            )}
          </p>
          </div>
        ) : (
          <motion.div {...fadeInUp} className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {sectionHeading}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {citySlug === 'darmstadt' ? (
              'Klarer Ablauf, feste Ansprechpartner und transparente Schritte – von der ersten Analyse bis zur fertigen Website.'
            ) : (
              <>
                In 5 strategischen <span className="text-blue-600">Schritten</span> zu Ihrem digitalen{' '}
                <span className="text-blue-600">Marktvorsprung</span>. {intro}
              </>
            )}
          </p>
          </motion.div>
        )}

        <div className="relative">
          {/* SVG Connection Lines - Desktop */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-32 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                  <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>
              </defs>
              {/* Central anchor point - positioned at center top */}
              <circle cx="600" cy="20" r="3" fill="rgba(59, 130, 246, 0.5)" />
              {/* Curved lines to each card - 2 rows of 3 cards each */}
              {/* Top row: Cards 1, 2, 3 */}
              <path
                d="M 600 20 Q 200 10 200 80"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3,3"
              />
              <path
                d="M 600 20 Q 600 10 600 80"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3,3"
              />
              <path
                d="M 600 20 Q 1000 10 1000 80"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3,3"
              />
              {/* Bottom row: Cards 4, 5, 6 (CTA) */}
              <path
                d="M 600 20 Q 200 30 200 140"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3,3"
              />
              <path
                d="M 600 20 Q 600 30 600 140"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3,3"
              />
              <path
                d="M 600 20 Q 1000 30 1000 140"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3,3"
              />
            </svg>
          </div>

          {/* Desktop: 3-Column Grid with 2 rows */}
          <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-5 lg:gap-6 items-stretch mt-28 md:mt-32">
            {processSteps.map((item) => (
              <CardEl
                key={item.step}
                {...cardProps}
                className="bg-slate-50 backdrop-blur-sm pt-9 pb-6 px-5 rounded-xl border border-slate-200/90 shadow-md hover:border-blue-400/40 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 group/process relative overflow-visible h-full flex flex-col"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover/process:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                  <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.12)]" />
                </div>
                
                {/* Step Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-xs px-3 py-1 rounded-full shadow-md shadow-blue-500/25">
                    {String(item.step).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <motion.div 
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-900/20 ring-1 ring-white/35 mb-4 mx-auto group-hover/process:scale-[1.06] transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-slate-950" aria-hidden="true" strokeWidth={2} />
                  </motion.div>
                  <p className="text-base md:text-lg font-bold mb-2.5 text-center leading-snug">{item.title}</p>
                  <p className="text-slate-600 text-center text-xs md:text-sm leading-relaxed flex-grow">{item.description}</p>
                </div>
              </CardEl>
            ))}
            
            {/* CTA Card */}
            <CardEl
              {...cardProps}
              className="bg-slate-50 backdrop-blur-sm px-5 py-6 rounded-xl border border-slate-200/90 shadow-md hover:border-blue-400/40 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 group/cta relative overflow-visible h-full flex flex-col"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.12)]" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center flex-grow">
                <p className="text-lg md:text-xl font-bold mb-4 leading-snug">
                  Bereit für mehr Anfragen über Ihre Website?
                </p>
                <LinkEl {...linkProps}>
                  <div className="absolute inset-0 bg-blue-500 rounded-lg blur-lg opacity-15 group-hover:opacity-25 transition-opacity" />
                  <div className="relative px-6 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base rounded-lg shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 inline-flex items-center gap-2">
                    Erstgespräch vereinbaren
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </LinkEl>
              </div>
            </CardEl>
          </div>

          {/* Mobile: Vertical Layout */}
          <div className="md:hidden space-y-5">
            {processSteps.map((item) => (
              <CardEl
                key={item.step}
                {...cardProps}
                className="bg-slate-50 backdrop-blur-sm pt-9 pb-6 px-5 rounded-xl border border-slate-200/90 shadow-md hover:border-blue-400/40 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 group/process relative overflow-visible"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover/process:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                  <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.12)]" />
                </div>
                
                {/* Step Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-xs px-3 py-1 rounded-full shadow-md shadow-blue-500/25">
                    {String(item.step).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <IconEl {...iconProps} className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-900/20 ring-1 ring-white/35 mb-4 mx-auto group-hover/process:scale-[1.06] transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-slate-950" aria-hidden="true" strokeWidth={2} />
                  </IconEl>
                  <p className="text-lg font-bold mb-2.5 text-center leading-snug">{item.title}</p>
                  <p className="text-slate-600 text-center text-sm leading-relaxed">{item.description}</p>
                </div>
              </CardEl>
            ))}
            
            {/* CTA Card Mobile */}
            <CardEl
              {...cardProps}
              className="bg-slate-50 backdrop-blur-sm px-5 py-6 rounded-xl border border-slate-200/90 shadow-md hover:border-blue-400/40 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 group/cta relative overflow-visible"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.12)]" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <p className="text-lg font-bold mb-4 leading-snug">
                  Bereit für mehr Anfragen über Ihre Website?
                </p>
                <LinkEl {...linkProps}>
                  <div className="absolute inset-0 bg-blue-500 rounded-lg blur-lg opacity-15 group-hover:opacity-25 transition-opacity" />
                  <div className="relative px-6 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base rounded-lg shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 inline-flex items-center gap-2">
                    Erstgespräch vereinbaren
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </LinkEl>
              </div>
            </CardEl>
          </div>
        </div>
      </div>
    </section>
  )
}

