'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, BarChart3 } from 'lucide-react'

export default function MonitoringGrowth() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const bulletPoints = [
    {
      title: 'Monatliche Reports',
      description: 'Transparente Übersicht Ihrer Rankings in Darmstadt und Pfungstadt.',
    },
    {
      title: 'Conversion-Tracking',
      description: 'Wir messen nicht nur Klicks, sondern wie viele Darmstädter tatsächlich bei Ihnen anfragen.',
    },
    {
      title: 'Kontinuierliche Anpassung',
      description: 'SEO ist kein Ziel, sondern ein Prozess. Wir optimieren monatlich, damit Sie vorne bleiben.',
    },
  ]

  // Punkte für eine ansteigende Kurve (Keyword-Rankings verbessern sich), viewBox 0 0 100 100
  const curvePoints = [
    { x: 0, y: 100 },
    { x: 20, y: 85 },
    { x: 40, y: 65 },
    { x: 60, y: 45 },
    { x: 80, y: 25 },
    { x: 100, y: 8 },
  ]

  const linePath = curvePoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const areaPath = `${linePath} L 100 100 L 0 100 Z`

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/20"
      aria-label="Messbarer Erfolg: Monitoring und Wachstum bei SEO"
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
              <BarChart3 className="w-5 h-5" aria-hidden="true" />
              Messbarer Erfolg: Monitoring & Wachstum
            </motion.p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Daten statt Bauchgefühl:{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Ihr Wachstum
              </span>{' '}
              schwarz auf weiß.
            </h2>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Ich bin Ihr langfristiger Partner für SEO – nicht nur für den Launch, 
              sondern für nachhaltiges Wachstum Ihrer Sichtbarkeit in Darmstadt.
            </p>

            <ul className="space-y-6" role="list">
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
                      className="w-6 h-6 text-blue-600 relative z-10"
                      aria-hidden="true"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))',
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side - SEO Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <figure className="m-0">
              <div
                className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl"
                role="img"
                aria-label="SEO Dashboard mit steigender Keyword-Ranking-Kurve für Darmstadt"
              >
                {/* Dashboard Header */}
                <div className="border-b border-slate-700 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-slate-400 text-sm font-medium">
                    Keyword-Rankings · Darmstadt
                  </span>
                </div>

                {/* Chart Area */}
                <div className="p-6">
                  <div className="flex items-end justify-between gap-2 mb-4">
                    <span className="text-xs text-slate-500 font-medium">Position</span>
                    <span className="text-xs text-blue-400 font-semibold">↑ Verbesserung</span>
                  </div>

                  <div className="relative h-48 w-full">
                    {/* Y-Axis Labels */}
                    <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-slate-500">
                      <span>#5</span>
                      <span>#15</span>
                      <span>#30</span>
                      <span>#50</span>
                      <span>#100</span>
                    </div>

                    {/* Chart Container - offset for y-axis */}
                    <div className="absolute left-8 right-0 top-0 bottom-8">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-full border-t border-slate-700/50"
                            aria-hidden="true"
                          />
                        ))}
                      </div>

                      {/* Animated Curve */}
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="monitoringCurveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Area under curve */}
                        <motion.path
                          fill="url(#monitoringCurveGradient)"
                          d={areaPath}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                        {/* Line – wächst beim Scrollen */}
                        <motion.path
                          d={linePath}
                          fill="none"
                          stroke="rgb(59, 130, 246)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
                        />
                      </svg>

                      {/* Endpoint dot */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.3, delay: 1.1 }}
                        className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg shadow-blue-500/50"
                        style={{
                          left: '92%',
                          bottom: '8%',
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* X-Axis Labels */}
                  <div className="flex justify-between mt-2 px-8 text-xs text-slate-500">
                    <span>Monat 1</span>
                    <span>Monat 3</span>
                    <span>Monat 6</span>
                    <span>Monat 9</span>
                    <span>Monat 12</span>
                  </div>
                </div>

                {/* Footer Stats */}
                <div className="border-t border-slate-700 px-4 py-3 flex justify-between text-sm">
                  <span className="text-slate-500">Durchschnittliche Position</span>
                  <span className="text-blue-400 font-semibold">#12 → #3</span>
                </div>
              </div>
              <figcaption className="sr-only">
                SEO-Dashboard: Entwicklung der Keyword-Rankings über 12 Monate. 
                Steigende Kurve zeigt Verbesserung von Position 100 auf Top-10 in Darmstadt und Pfungstadt.
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
