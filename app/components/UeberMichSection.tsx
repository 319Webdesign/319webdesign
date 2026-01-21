'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function UeberMichSection() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bild links */}
          <motion.div
            {...fadeInUp}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-blue-500/20">
              <Image
                src="/maik.webp"
                alt="Maik - Ihr Partner für digitales Wachstum in Südhessen"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Dekorativer Glow-Effekt */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Zusätzlicher Glow für extra Effekt */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/5 blur-2xl -z-10 scale-105" />
          </motion.div>

          {/* Text rechts */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Kleine Headline */}
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
              Hinter den Kulissen
            </h3>

            {/* Große Haupt-Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Webdesign & Digitales Wachstum
              </span>
              {' '}für Südhessen
            </h2>

            {/* Prägnanter Text */}
            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                Ich bin dein Partner für professionelles Webdesign in Pfungstadt, Darmstadt und Umgebung. Ich spezialisiere mich auf Kleinunternehmen und Selbstständige, die nicht nur eine schöne Website wollen, sondern messbare Ergebnisse.
              </p>
              
              {/* Highlight-Box */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-6 my-6">
                <p className="text-lg text-slate-200 leading-relaxed">
                  Mein Fokus liegt auf <span className="text-blue-400 font-semibold">High-End Performance</span>. Mit modernen Technologien wie Next.js erreiche ich für meine Kunden durchschnittliche PageSpeed-Scores von <span className="text-blue-400 font-semibold">99/100</span>.
                </p>
              </div>

              <p>
                Projekte in der Region Südhessen betreue ich persönlich – von der ersten Beratung bis zum Livegang.
              </p>
            </div>

            {/* Call-to-Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="#prozess"
              >
                <motion.div
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 group/btn cursor-pointer"
                  aria-label="Mehr über die Arbeitsweise erfahren"
                >
                  Mehr über meine Arbeitsweise
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
