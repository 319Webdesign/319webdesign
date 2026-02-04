'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Smartphone, Zap, MapPin, ArrowRight } from 'lucide-react'

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
      slug: 'umsatzstark',
      icon: Zap,
      title: 'Umsatzstark',
      tagline: 'Kunden gewinnen statt warten lassen.',
      description: 'Mit 1,72s Ladezeit sind Sie schneller als 95% Ihrer Konkurrenz in der Region.',
      ariaLabel: 'Umsatzstark – Conversion',
      showScoreBadge: false,
    },
    {
      slug: 'blitzschnell',
      icon: Smartphone,
      title: 'Blitzschnell',
      tagline: 'Gefunden werden, wenn es zählt.',
      description: 'Wir bringen Ihr Business in Pfungstadt und Umgebung bei Google ganz nach oben.',
      ariaLabel: 'Blitzschnell – Performance',
      showScoreBadge: true,
    },
    {
      slug: 'lokal',
      icon: MapPin,
      title: 'Lokal',
      tagline: 'Perfekt auf jedem Smartphone.',
      description: '80% Ihrer Kunden suchen mobil. Wir sorgen dafür, dass der erste Eindruck sitzt.',
      ariaLabel: 'Lokal – Regional sichtbar',
      showScoreBadge: false,
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
            Umsatzstark, Blitzschnell, Lokal.
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            In der digitalen Welt entscheidet der erste Eindruck. Ein professionelles Design schafft Vertrauen und steigert Ihre Conversion-Rate – für Unternehmen in Darmstadt, Pfungstadt und Südhessen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="p-8 rounded-[16px] border border-[#3b82f6]/40 bg-slate-800/30 backdrop-blur-md hover:border-[#3b82f6] hover:shadow-lg hover:shadow-[#3b82f6]/15 transition-all duration-300 group/card relative overflow-visible"
              >
                {/* Glass-Effect Hintergrund */}
                <div className="absolute inset-0 rounded-[16px] bg-white/[0.04] pointer-events-none" aria-hidden />
                <div className="absolute inset-0 rounded-[16px] shadow-[0_0_30px_rgba(59,130,246,0.08)] group-hover/card:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-shadow duration-300 pointer-events-none" />

                {/* 99/100 Score-Badge nur bei Blitzschnell-Card beim Hover */}
                {feature.showScoreBadge && (
                  <span
                    className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-lg bg-[#3b82f6]/20 border border-[#3b82f6]/50 text-xs font-semibold text-[#3b82f6] backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                    aria-label="Lighthouse Performance Score 99 von 100"
                  >
                    99/100 Score
                  </span>
                )}

                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover/card:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent
                      className="w-7 h-7 text-white"
                      aria-label={feature.ariaLabel}
                      aria-hidden="false"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{feature.title}</h3>
                  <p className="text-slate-300 font-medium mb-3 text-center">{feature.tagline}</p>
                  <p className="text-slate-400 text-center text-sm leading-relaxed mb-6">{feature.description}</p>
                  <div className="text-center">
                    <Link
                      href={`/warum/${feature.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#3b82f6]/60 text-[#3b82f6] font-medium text-sm hover:bg-[#3b82f6]/10 hover:border-[#3b82f6] transition-all duration-300 group-hover/card:gap-3 group/btn"
                    >
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

