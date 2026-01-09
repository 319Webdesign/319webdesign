'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-zinc-900" />
        
        {/* Animated Mesh Gradients */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30, 41, 59, 0.12) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(15, 23, 42, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.10) 0%, transparent 50%), radial-gradient(circle at 20% 60%, rgba(30, 41, 59, 0.10) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30, 41, 59, 0.12) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Additional subtle gradient layer */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05), transparent 70%)',
          }}
        />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-balance"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Design
          </span>
          , das überzeugt.{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Technik
          </span>
          , die performt.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto text-balance"
        >
          Wir helfen kleinen Unternehmen und Selbstständigen in Südhessen dabei, online sichtbar zu werden und neue Kunden zu gewinnen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
                '0 15px 35px -5px rgba(59, 130, 246, 0.6)',
                '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 inline-flex items-center gap-2 group/btn"
            aria-label="Zum Kontaktformular springen - Projekt starten"
          >
            Projekt starten
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
          </motion.a>
          <motion.a
            href="#benefits"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-slate-600 text-slate-200 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group/btn2"
            aria-label="Zu den Vorteilen scrollen - Mehr erfahren"
          >
            Mehr erfahren
            <ArrowDown className="w-4 h-4 group-hover/btn2:translate-y-1 transition-transform" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown className="w-5 h-5" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  )
}

