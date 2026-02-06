'use client'

import { motion } from 'framer-motion'
import { Clock, Search, Target } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const cardStagger = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export default function WarumSection() {
  const features = [
    {
      icon: Clock,
      title: 'Die Warte-Falle',
      description: '53 % der Nutzer springen ab, wenn eine Seite länger als 3 Sekunden lädt. Performance ist kein Bonus, sondern die Basis für Ihren Umsatz.',
      ariaLabel: 'Speed – Die Warte-Falle',
    },
    {
      icon: Search,
      title: 'Die Unsichtbarkeits-Lücke',
      description: 'Gutes Design ohne SEO ist wie ein Flyer im Müll. Wir sorgen dafür, dass Ihr Business in ganz Hessen (von Darmstadt bis Kassel) auch gefunden wird.',
      ariaLabel: 'SEO – Die Unsichtbarkeits-Lücke',
    },
    {
      icon: Target,
      title: 'Die digitale Sackgasse',
      description: 'Besucher müssen zu Kunden werden. Wir eliminieren unnötige Klicks und führen Nutzer direkt zu Ihrem Kontaktformular.',
      ariaLabel: 'Conversion – Die digitale Sackgasse',
    },
  ]

  return (
    <section id="benefits" className="pt-24 pb-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-slate-900">
            Warum eine „<span className="text-blue-600">schöne</span>" Website heute nicht mehr reicht.
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.article
                key={feature.title}
                {...cardStagger}
                transition={{
                  ...cardStagger.transition,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 group/card"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent
                      className="w-7 h-7 text-white"
                      aria-label={feature.ariaLabel}
                      aria-hidden="false"
                    />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Strategischer Abschluss */}
        <motion.div
          {...fadeInUp}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            <span className="font-semibold text-slate-900">Erkenntnis:</span> Eine Website muss ein klares Ziel verfolgen. Ich helfe Ihnen dabei, dieses Ziel nicht nur zu definieren, sondern langfristig zu erreichen.
          </p>
          
          {/* CTA Button */}
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300"
          >
            Kontakt aufnehmen
          </a>
        </motion.div>
      </div>
    </section>
  )
}

