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
    title: 'Analyse & Ziel-Strategie',
    description: 'Wir definieren Ihre konkreten Ziele und analysieren den hessischen Wettbewerb, um Sie an die Spitze zu bringen.',
  },
  {
    step: 2,
    icon: Palette,
    title: 'Performance-Design & Branding',
    description: 'Ich entwickle ein Design, das nicht nur Ihre Marke widerspiegelt, sondern psychologisch auf Konversion optimiert ist.',
  },
  {
    step: 3,
    icon: FileText,
    title: 'Verkaufsstarke Inhalte',
    description: 'Texte und Strukturen, die Besucher in ganz Hessen überzeugen und messbar zu Kunden machen.',
  },
  {
    step: 4,
    icon: Code,
    title: 'High-End Entwicklung',
    description: 'Mit Next.js erreiche ich Bestwerte von 99/100, damit Ihre Seite technisch fehlerfrei und blitzschnell liefert.',
  },
  {
    step: 5,
    icon: Wrench,
    title: 'Strategische Begleitung',
    description: 'Nach dem Launch beginnt die eigentliche Arbeit. Ich bleibe Ihr Partner für kontinuierliche Optimierung und messbaren Erfolg.',
  },
]

export default function ProzessSection() {
  return (
    <section id="prozess" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            In 5 strategischen <span className="text-blue-600">Schritten</span> zu Ihrem digitalen <span className="text-blue-600">Marktvorsprung</span> in Hessen.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ein transparenter Prozess, der auf ein klares Ziel ausgerichtet ist: Ihr Wachstum.
          </p>
        </motion.div>

        <div className="relative">
          {/* SVG Connection Lines - Desktop */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-40 pointer-events-none z-0">
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
          <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-8 items-stretch mt-40">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-slate-50 backdrop-blur-sm pt-12 pb-8 px-8 rounded-2xl border border-slate-200 shadow-lg hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 group/process relative overflow-visible h-full flex flex-col"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover/process:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)]" />
                </div>
                
                {/* Step Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
                    {String(item.step).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6 mx-auto group-hover/process:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
                  <p className="text-slate-600 text-center text-sm leading-relaxed flex-grow">{item.description}</p>
                </div>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <motion.div
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-slate-50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 group/cta relative overflow-visible h-full flex flex-col"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)]" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center flex-grow">
                <h3 className="text-2xl font-bold mb-6">
                  In 5 Schritten zu Ihrer neuen Website – jetzt starten.
                </h3>
                <motion.a
                  href="/kontakt"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
                      '0 15px 35px -5px rgba(59, 130, 246, 0.4)',
                      '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
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
                  <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative px-8 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-md shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2">
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
                className="bg-slate-50 backdrop-blur-sm pt-12 pb-8 px-8 rounded-2xl border border-slate-200 shadow-lg hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 group/process relative overflow-visible"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover/process:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)]" />
                </div>
                
                {/* Step Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
                    {String(item.step).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6 mx-auto group-hover/process:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                  <p className="text-slate-600 text-center">{item.description}</p>
                </div>
              </motion.div>
            ))}
            
            {/* CTA Card Mobile */}
            <motion.div
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-slate-50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 group/cta relative overflow-visible"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)]" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold mb-6">
                  Erstgespräch vereinbaren und gemeinsam durchstarten.
                </h3>
                <motion.a
                  href="/kontakt"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
                      '0 15px 35px -5px rgba(59, 130, 246, 0.4)',
                      '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
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
                  <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative px-8 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-md shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2">
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

