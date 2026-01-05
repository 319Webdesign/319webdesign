'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-slate-950 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="relative max-w-sm aspect-[9/16]">
                <Image
                  src="/319Web_Mockup_iphone.png"
                  alt="Website Mockup"
                  width={384}
                  height={682}
                  sizes="(max-width: 768px) 300px, 384px"
                  className="w-full h-full object-contain"
                />
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Bereit für den{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  digitalen Vorsprung?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
                Verlieren Sie keine Kunden mehr an die Konkurrenz. Lassen Sie uns gemeinsam Ihre Website modernisieren und Ihre Angebote überzeugend präsentieren.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="#kontakt"
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
              >
                <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative px-8 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-md shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2">
                  Kostenloses Erstgespräch vereinbaren
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-400 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>100% unverbindlich</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Antwort innerhalb von 24h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

