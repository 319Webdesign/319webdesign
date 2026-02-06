'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, TrendingUp } from 'lucide-react'

export default function SeoDeepDive() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const focusPoints = [
    {
      title: 'Core Web Vitals',
      subtitle: 'Technische SEO Pfungstadt',
      description: 'Wir optimieren für Google-Metriken, die andere Agenturen ignorieren (LCP, CLS, FID).',
    },
    {
      title: 'Local Search Dominanz',
      subtitle: 'SEO Agentur Darmstadt',
      description: 'Gezielte Optimierung für Suchanfragen in Darmstadt, Pfungstadt und Südhessen.',
    },
    {
      title: 'Semantische Struktur',
      subtitle: 'Lokale SEO Darmstadt',
      description: 'Sauberes HTML5-Markup, damit Suchmaschinen Ihre Leistungen sofort verstehen.',
    },
  ]

  const searchResults = [
    {
      position: 1,
      title: 'Ihr Unternehmen – Webdesign Darmstadt',
      url: 'www.ihr-unternehmen.de',
      description: 'Professionelles Webdesign und Entwicklung in Darmstadt. Moderne Websites für mehr Erfolg...',
      isHighlighted: true,
      rank: '#1',
    },
    {
      position: 2,
      title: 'Konkurrent A – Webdesign Agentur',
      url: 'www.konkurrent-a.de',
      description: 'Webdesign und digitales Marketing in der Region. Wir bieten...',
      isHighlighted: false,
      rank: '#2',
    },
    {
      position: 3,
      title: 'Konkurrent B – Website Erstellung',
      url: 'www.konkurrent-b.de',
      description: 'Homepage erstellen lassen von Profis. Schnelle Umsetzung...',
      isHighlighted: false,
      rank: '#3',
    },
  ]

  return (
    <section 
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      aria-label="SEO Strategie und Optimierung für Darmstadt"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-600 font-semibold mb-4 text-lg flex items-center gap-2"
            >
              <TrendingUp className="w-5 h-5" aria-hidden="true" />
              Strategische SEO-Optimierung
            </motion.p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Mehr als nur{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Keywords:
              </span>{' '}
              Ihre SEO-Strategie für Darmstadt.
            </h2>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Echtes SEO beginnt im Code. Wir kombinieren blitzschnelle Ladezeiten mit lokaler Relevanz, 
              um Ihre Konkurrenz zu überholen.
            </p>

            <div className="space-y-6">
              {focusPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <CheckCircle2 
                        className="w-6 h-6 text-blue-600 relative z-10" 
                        aria-hidden="true"
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mb-2">
                        {point.subtitle}
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Google Search Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Search Box Header */}
              <div className="bg-white rounded-t-2xl border border-slate-200 border-b-0 p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-600">
                    Webdesign Darmstadt
                  </div>
                </div>
              </div>

              {/* Search Results */}
              <div 
                className="bg-white rounded-b-2xl border border-slate-200 p-6 shadow-xl"
                role="list"
                aria-label="Beispiel Google Suchergebnisse für Webdesign Darmstadt"
              >
                <p className="text-xs text-slate-500 mb-4">
                  Ungefähr 42.300 Ergebnisse (0,31 Sekunden)
                </p>

                <div className="space-y-6">
                  {searchResults.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                      className={`relative ${
                        result.isHighlighted 
                          ? 'bg-blue-50/50 rounded-xl p-4 -mx-2 border-2 border-blue-300' 
                          : 'opacity-60'
                      }`}
                      role="listitem"
                    >
                      {/* Glow Effect for #1 */}
                      {result.isHighlighted && (
                        <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-xl -z-10" />
                      )}

                      {/* Rank Badge */}
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                          result.isHighlighted 
                            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg' 
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                          {result.position}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-slate-600">{result.url}</span>
                            {result.isHighlighted && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                Anzeige
                              </span>
                            )}
                          </div>
                          <h4 className={`font-medium mb-1 leading-tight ${
                            result.isHighlighted 
                              ? 'text-blue-600 text-lg' 
                              : 'text-slate-700 text-base'
                          }`}>
                            {result.title}
                          </h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {result.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-2xl border-4 border-white font-bold text-sm whitespace-nowrap"
              >
                🎯 Platz 1 in Darmstadt
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
