'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, MapPin } from 'lucide-react'

export default function LocalVisibility() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const bulletPoints = [
    'Google Business Profil Optimierung für lokale Top-Platzierungen.',
    'Keyword-Targeting auf Stadtteil-Ebene (z.B. Bessungen, Arheilgen oder Pfungstadt-Ost).',
    'Mobile SEO: Damit Kunden Sie auf dem Smartphone finden, während sie in der Stadt unterwegs sind.',
  ]

  const mapPackItems = [
    { name: 'Ihr Unternehmen', rating: 4.9, reviews: 127, isHighlighted: true },
    { name: 'Konkurrent A', rating: 4.2, reviews: 43, isHighlighted: false },
    { name: 'Konkurrent B', rating: 4.0, reviews: 28, isHighlighted: false },
  ]

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-slate-900 relative overflow-hidden"
      aria-label="Lokale Sichtbarkeit in Darmstadt und Umgebung"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/5" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/15 blur-3xl rounded-full -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
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
              className="text-blue-400 font-semibold mb-4 text-lg flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" aria-hidden="true" />
              Lokale Sichtbarkeit in Darmstadt & Umgebung
            </motion.p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Gefunden werden, wenn es zählt:{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                In Darmstadt und Pfungstadt
              </span>{' '}
              ganz oben.
            </h2>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Lokales SEO bringt Sie in die Top-Ergebnisse, wenn Kunden in Ihrer Nähe suchen – 
              auf Google Maps und in der lokalen Suche.
            </p>

            <ul className="space-y-4 mb-8" role="list">
              {bulletPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CheckCircle2
                      className="w-6 h-6 text-blue-400 relative z-10"
                      aria-hidden="true"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))',
                      }}
                    />
                  </div>
                  <span className="text-slate-300 text-lg leading-relaxed">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Conversion-Fokus Textblock */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6"
            >
              <p className="text-lg text-slate-200 leading-relaxed">
                Wir sorgen dafür, dass Sie nicht nur Klicks bekommen, sondern{' '}
                <strong className="text-blue-400">echte Anfragen von Kunden aus Ihrer Nachbarschaft</strong>.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Google Map Pack Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden shadow-2xl"
              role="img"
              aria-label="Local SEO Darmstadt Experte – Beispiel Google Map Pack mit Top-Platzierung"
            >
              {/* Map Pack Header */}
              <div className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-400 text-sm font-medium">
                  Lokale Ergebnisse · Darmstadt
                </span>
              </div>

              {/* Map Placeholder / Stylized Map Area */}
              <div className="relative h-48 bg-slate-900/50 border-b border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-500/60 mx-auto mb-2" aria-hidden="true" />
                    <span className="text-slate-500 text-sm font-medium">
                      Karte · Darmstadt & Umgebung
                    </span>
                  </div>
                </div>
                {/* Pin for "Ihr Unternehmen" */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 rounded-full border-4 border-white shadow-lg shadow-blue-500/50"
                  aria-hidden="true"
                />
              </div>

              {/* Local Pack Listings */}
              <div className="p-4 space-y-3">
                {mapPackItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                      item.isHighlighted
                        ? 'bg-blue-500/15 border-2 border-blue-500/50'
                        : 'bg-slate-800/50 border border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                          item.isHighlighted
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <p className={`font-semibold ${item.isHighlighted ? 'text-white' : 'text-slate-300'}`}>
                          {item.name}
                        </p>
                        <p className="text-sm text-slate-500">
                          Darmstadt · Geschäft
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-amber-400 font-semibold flex items-center gap-1 justify-end">
                        ★ {item.rating}
                      </p>
                      <p className="text-xs text-slate-500">
                        ({item.reviews} Bewertungen)
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="px-4 pb-4">
                <p className="text-xs text-slate-500 text-center">
                  So erscheinen Sie bei „IhrUnternehmen Darmstadt“ und lokalen Suchanfragen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
