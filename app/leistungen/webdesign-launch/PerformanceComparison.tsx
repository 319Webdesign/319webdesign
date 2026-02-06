'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, TrendingUp, Users, Rocket } from 'lucide-react'
import PerformanceGauge from './PerformanceGauge'

export default function PerformanceComparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Zap,
      text: 'Schnellere Ladezeiten = mehr zufriedene Kunden in Darmstadt.',
    },
    {
      icon: TrendingUp,
      text: 'Bessere Rankings bei Google durch technisch fehlerfreien Code.',
    },
    {
      icon: Users,
      text: 'Höhere Conversion-Rate: Besucher werden zu Anfragen.',
    },
  ]

  return (
    <section 
      ref={ref} 
      className="py-20 px-6 bg-white relative overflow-hidden"
      aria-label="Vergleich der Webseiten-Performance: 65 Prozent Durchschnitt zu 99 Prozent Optimierung"
    >
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-600 font-semibold mb-4 text-lg"
          >
            Warum Performance?
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Geschwindigkeit ist Ihr digitaler{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Marktvorteil
            </span>{' '}
            in Darmstadt.
          </h2>
        </motion.div>

        {/* Comparison: Flex Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 mb-16 justify-center items-center relative">
          {/* Gauge 1: Poor Performance */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <PerformanceGauge
              value={65}
              color="#ef4444"
              label="Darmstädter Durchschnitt"
              isInView={isInView}
              delay={0}
            />
          </motion.div>

          {/* Center: Rocket Animation (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:flex"
          >
            <motion.div
              animate={isInView ? {
                x: [0, 10, 0],
                y: [0, -5, 0],
              } : {}}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Rocket
                className="w-14 h-14 lg:w-16 lg:h-16 text-blue-500 transform rotate-45"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>

          {/* Gauge 2: Excellent Performance with Glow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center relative"
          >
            {/* Glow effect behind the gauge */}
            <div className="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full scale-150" />
            <PerformanceGauge
              value={99}
              color="#3b82f6"
              label="Dein Standard mit 319Webdesign"
              isInView={isInView}
              delay={300}
            />
          </motion.div>

          {/* Mobile Rocket */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex md:hidden"
          >
            <motion.div
              animate={isInView ? {
                y: [0, -8, 0],
              } : {}}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Rocket
                className="w-12 h-12 text-blue-500 transform rotate-90"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-start gap-4 bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Icon 
                    className="w-6 h-6 text-blue-600" 
                    aria-hidden="true"
                  />
                </div>
                <p className="text-slate-700 leading-relaxed">{benefit.text}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* SEO optimized image alternatives */}
        <div className="sr-only" aria-hidden="true">
          <img 
            src="" 
            alt="Performance Webdesign Darmstadt - schnelle Ladezeiten für bessere Rankings" 
          />
          <img 
            src="" 
            alt="Webdesign Performance Vergleich Darmstadt - 99/100 PageSpeed Score" 
          />
        </div>
      </div>
    </section>
  )
}
