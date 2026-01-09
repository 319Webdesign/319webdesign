'use client'

import { motion } from 'framer-motion'
import { Search, Palette, FileText, Code, Wrench, ArrowRight } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: 'Analyse & Strategieentwicklung',
    description: 'Wir analysieren Ihre Ziele, Zielgruppen und Wettbewerber, um eine maßgeschneiderte Strategie zu entwickeln.',
  },
  {
    step: 2,
    icon: Palette,
    title: 'Webdesign & Branding Konzeptionierung',
    description: 'Ich erstelle ein modernes Design, das exakt zu Ihrer Marke passt und Ihre Zielgruppe anspricht.',
  },
  {
    step: 3,
    icon: FileText,
    title: 'Verkaufspsychologische Werbetexte',
    description: 'Überzeugende Texte, die Ihre Besucher zum Handeln bewegen und Ihre Conversion-Rate steigern.',
  },
  {
    step: 4,
    icon: Code,
    title: 'Entwicklung deiner neuen Webseite',
    description: 'Professionelle Umsetzung mit modernsten Technologien für optimale Performance und SEO.',
  },
  {
    step: 5,
    icon: Wrench,
    title: 'Wartung & Service',
    description: 'Auch nach dem Launch bin ich für Wartung, Updates und Support an Ihrer Seite da.',
  },
]

export default function ProzessSection() {
  return (
    <section id="prozess" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            In 5 einfachen Schritten zu Ihrer digitalen Präsenz
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transparenter Prozess, keine versteckten Kosten.
          </p>
        </motion.div>

        <div className="relative">
          {/* SVG Connection Lines - Desktop */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-40 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
                  <stop offset="50%" stopColor="rgba(34, 211, 238, 0.4)" />
                  <stop offset="100%" stopColor="rgba(34, 211, 238, 0.2)" />
                </linearGradient>
              </defs>
              {/* Central anchor point - positioned at center top */}
              <circle cx="600" cy="20" r="3" fill="rgba(34, 211, 238, 0.5)" />
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
          <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-8 items-stretch mt-40">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-slate-800/30 backdrop-blur-sm pt-12 pb-8 px-8 rounded-2xl border border-slate-700/50 shadow-lg shadow-slate-900/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 group/process relative overflow-visible h-full flex flex-col"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover/process:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)]" />
                </div>
                
                {/* Step Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-lg shadow-cyan-500/30">
                    {String(item.step).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl mb-6 mx-auto group-hover/process:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
                  <p className="text-slate-400 text-center text-sm leading-relaxed flex-grow">{item.description}</p>
                </div>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <motion.div
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-lg shadow-slate-900/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 group/cta relative overflow-visible h-full flex flex-col"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)]" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center flex-grow">
                <h3 className="text-2xl font-bold mb-6">
                  Jetzt deine Konkurrenz in den Schatten stellen.
                </h3>
                <motion.a
                  href="/kontakt"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 10px 25px -5px rgba(34, 211, 238, 0.3)',
                      '0 15px 35px -5px rgba(34, 211, 238, 0.4)',
                      '0 10px 25px -5px rgba(34, 211, 238, 0.3)',
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  className="group relative inline-block"
                  aria-label="Zum Kontaktformular springen - Erstgespräch vereinbaren"
                >
                  <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative px-8 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold text-lg rounded-xl shadow-md shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center gap-2">
                    Erstgespräch vereinbaren
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Mobile: Vertical Layout */}
          <div className="md:hidden space-y-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-slate-800/30 backdrop-blur-sm pt-12 pb-8 px-8 rounded-2xl border border-slate-700/50 shadow-lg shadow-slate-900/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 group/process relative overflow-visible"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover/process:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)]" />
                </div>
                
                {/* Step Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-lg shadow-cyan-500/30">
                    {String(item.step).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl mb-6 mx-auto group-hover/process:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                  <p className="text-slate-400 text-center">{item.description}</p>
                </div>
              </motion.div>
            ))}
            
            {/* CTA Card Mobile */}
            <motion.div
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-lg shadow-slate-900/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 group/cta relative overflow-visible"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)]" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold mb-6">
                  Jetzt deine Konkurrenz in den Schatten stellen.
                </h3>
                <motion.a
                  href="/kontakt"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 10px 25px -5px rgba(34, 211, 238, 0.3)',
                      '0 15px 35px -5px rgba(34, 211, 238, 0.4)',
                      '0 10px 25px -5px rgba(34, 211, 238, 0.3)',
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  className="group relative inline-block"
                  aria-label="Zum Kontaktformular springen - Erstgespräch vereinbaren"
                >
                  <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative px-8 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold text-lg rounded-xl shadow-md shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center gap-2">
                    Erstgespräch vereinbaren
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

