'use client'

import { motion } from 'framer-motion'
import { Laptop, Search, Shield, Zap, ArrowRight, Award } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

const leistungen = [
  {
    icon: Laptop,
    title: 'Webdesign',
    description: 'Individuelle Designs, die Ihre Zielgruppe überzeugen. Optimiert für alle Endgeräte.',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Lokale Sichtbarkeit erhöhen und organische Anfragen über Google generieren.',
  },
  {
    icon: Shield,
    title: 'Support',
    description: 'Wir kümmern uns um Updates, Backups und die Sicherheit Ihrer Seite – 365 Tage im Jahr.',
  },
]

export default function LeistungenSection() {
  return (
    <section id="leistungen" className="py-28 md:py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Maßgeschneiderte Lösungen für Ihren digitalen Auftritt
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {leistungen.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-[#3B82F6] transition-all duration-300 group text-center md:text-left"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#3B82F6]/10 rounded-xl mb-6 group-hover:bg-[#3B82F6]/20 transition-colors duration-300 mx-auto md:mx-0">
                <item.icon className="w-8 h-8 text-[#3B82F6]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Performance Teaser Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3 }
          }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8 md:p-10 hover:border-[#3B82F6] transition-all duration-300 group relative overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)]" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              {/* Icon Section */}
              <div className="flex items-center justify-center w-16 h-16 bg-[#3B82F6]/10 rounded-xl group-hover:bg-[#3B82F6]/20 transition-colors duration-300 flex-shrink-0">
                <Zap className="w-8 h-8 text-[#3B82F6]" aria-hidden="true" />
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  High-Performance Websites
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4 text-lg">
                  <span className="text-[#3B82F6] font-semibold">59% schneller</span> als der Branchendurchschnitt – Optimiert für maximale Geschwindigkeit und beste User Experience.
                </p>

                {/* PageSpeed Badge */}
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-4 py-2 border border-slate-700/50">
                    <Award className="w-5 h-5 text-[#3B82F6]" aria-hidden="true" />
                    <span className="text-white font-bold text-lg">99/100</span>
                    <span className="text-slate-400 text-sm">PageSpeed</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/leistungen"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-lg transition-all duration-300 group/btn"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

