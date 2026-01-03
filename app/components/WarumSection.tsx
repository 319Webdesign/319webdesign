'use client'

import { motion } from 'framer-motion'
import { Smartphone, Zap, Search } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function WarumSection() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Ihre Website ist auf allen Geräten perfekt optimiert und bietet eine herausragende Nutzererfahrung.',
      ariaLabel: 'Mobile First Icon - Responsive Design',
    },
    {
      icon: Zap,
      title: 'Blitzschnell',
      description: 'Ladezeiten unter einer Sekunde sorgen für bessere Rankings und zufriedenere Besucher.',
      ariaLabel: 'Blitzschnell Icon - Performance',
    },
    {
      icon: Search,
      title: 'SEO-optimiert',
      description: 'Wir sorgen dafür, dass Sie von potenziellen Kunden gefunden werden, wenn sie nach Ihren Dienstleistungen suchen.',
      ariaLabel: 'SEO-optimiert Icon - Suchmaschinenoptimierung',
    },
  ]

  return (
    <section id="benefits" className="pt-24 pb-32 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Warum eine moderne Website?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            In der digitalen Welt entscheidet der erste Eindruck. Ein professionelles Design schafft Vertrauen und steigert Ihre Conversion-Rate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group/card relative overflow-hidden"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover/card:from-blue-500/10 group-hover/card:to-blue-600/10 rounded-xl transition-all duration-300 pointer-events-none" />
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover/card:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent 
                      className="w-7 h-7 text-white" 
                      aria-label={feature.ariaLabel}
                      role="img"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                  <p className="text-slate-400 text-center">{feature.description}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

