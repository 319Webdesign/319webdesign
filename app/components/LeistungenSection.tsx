'use client'

import { motion } from 'framer-motion'
import { Laptop, Search, Shield } from 'lucide-react'

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <item.icon className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

