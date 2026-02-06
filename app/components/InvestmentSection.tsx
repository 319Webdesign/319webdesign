'use client'

import { motion } from 'framer-motion'
import { Rocket, TrendingUp, Crown, Check, Server, Wrench, PenTool, Palette } from 'lucide-react'

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

export default function InvestmentSection() {
  const wachstumsBereiche = [
    {
      icon: Rocket,
      title: 'Launch',
      subtitle: 'Performance-Fundament & Schnelligkeit',
      description: 'Professioneller Start mit High-End Performance.',
      benefits: [
        'PageSpeed-Score 99/100 als technisches Fundament',
        'Responsive Design für alle Endgeräte optimiert',
        'Blitzschnelle Ladezeiten unter 2 Sekunden',
        'SEO-Grundlagen für lokale Sichtbarkeit in Hessen',
      ],
      ariaLabel: 'Launch - Professioneller Start',
      recommended: false,
    },
    {
      icon: TrendingUp,
      title: 'Scale',
      subtitle: 'Reichweite in ganz Hessen & SEO-Dominanz',
      description: 'Kontinuierliche Optimierung und SEO für Hessen.',
      benefits: [
        'Gezielte SEO-Strategie für Darmstadt bis Kassel',
        'Monatliche Performance-Analysen & Anpassungen',
        'Content-Optimierung für mehr organische Anfragen',
        'Technische Wartung und Sicherheits-Updates inklusive',
      ],
      ariaLabel: 'Scale - Kontinuierliche Optimierung',
      recommended: true,
    },
    {
      icon: Crown,
      title: 'Partner',
      subtitle: 'Strategische Begleitung & Full-Service',
      description: 'Vollumfängliche digitale Begleitung für Marktführer.',
      benefits: [
        'Dedizierter Ansprechpartner für alle digitalen Fragen',
        'Proaktive Optimierung basierend auf Nutzerdaten',
        'Vorrang bei Support-Anfragen und Änderungswünschen',
        'Quartalsweise Strategie-Meetings für Ihr Wachstum',
      ],
      ariaLabel: 'Partner - Vollumfängliche Begleitung',
      recommended: false,
    },
  ]

  const zusatzleistungen = [
    {
      icon: Server,
      title: 'High-Performance Hosting',
      description: 'Die Basis für Ihre 99/100 Scores. Inkl. SSL, täglichen Backups und maximaler Ausfallsicherheit für Ihr Business in Hessen.',
      ariaLabel: 'High-Performance Hosting',
    },
    {
      icon: Wrench,
      title: 'Wachstum & Betreuung',
      description: 'Kein Stillstand nach dem Launch. Regelmäßige Updates, Performance-Checks und strategische Anpassungen für dauerhaften Erfolg.',
      ariaLabel: 'Wachstum & Betreuung',
    },
    {
      icon: PenTool,
      title: 'Verkaufspsychologische Texte',
      description: 'Inhalte, die nicht nur informieren, sondern überzeugen. Wir schreiben Texte, die Ihre Zielgruppe in ganz Hessen direkt zum Handeln bewegen.',
      ariaLabel: 'Verkaufspsychologische Texte',
    },
    {
      icon: Palette,
      title: 'Corporate Identity Fokus',
      description: 'Ein konsistenter Auftritt von Pfungstadt bis Kassel. Wir entwickeln Logos und Brandings, die Vertrauen bei Ihren Kunden schaffen.',
      ariaLabel: 'Corporate Identity Fokus',
    },
  ]

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Headline & Text */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-slate-900">
            Maßgeschneiderte <span className="text-blue-600">Strategien</span> statt Pakete von der Stange.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Jedes Unternehmen in Hessen hat andere Ziele. Deshalb biete ich keine starren Preise, sondern individuelle Lösungen, die sich an Ihrem Bedarf und Ihrem Wachstum orientieren. Mein Fokus liegt auf einer langfristigen Partnerschaft, die messbare Ergebnisse liefert.
          </p>
        </motion.div>

        {/* Wachstums-Bereiche Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {wachstumsBereiche.map((bereich, index) => {
            const IconComponent = bereich.icon
            return (
              <motion.div
                key={bereich.title}
                {...cardStagger}
                transition={{
                  ...cardStagger.transition,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className={`rounded-2xl bg-white border-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 group/card relative ${
                  bereich.recommended 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/10 pt-12 pb-8 px-8' 
                    : 'border-slate-200 hover:border-blue-500 p-8'
                }`}
              >
                {/* Empfehlung Badge */}
                {bereich.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
                      Empfohlen für hessische KMU
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    aria-label={bereich.ariaLabel}
                  >
                    <IconComponent
                      className="w-7 h-7 text-white"
                      aria-hidden="true"
                    />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900">
                    {bereich.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-blue-600 font-semibold text-sm mb-6">
                    {bereich.subtitle}
                  </p>
                  
                  {/* Key Benefits */}
                  <ul className="space-y-3">
                    {bereich.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Zusatzleistungen Section */}
        <motion.div
          {...fadeInUp}
          className="mt-20 mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center mb-10 text-slate-900">
            Zusatzleistungen <span className="text-slate-500 font-normal text-lg">(optional)</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zusatzleistungen.map((leistung, index) => {
              const IconComponent = leistung.icon
              return (
                <motion.div
                  key={leistung.title}
                  {...cardStagger}
                  transition={{
                    ...cardStagger.transition,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.3 },
                  }}
                  className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group/zusatz"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover/zusatz:bg-blue-200 transition-colors duration-300">
                    <IconComponent
                      className="w-6 h-6 text-blue-600"
                      aria-label={leistung.ariaLabel}
                    />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-base font-bold mb-3 text-slate-900">
                    {leistung.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {leistung.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeInUp}
          className="text-center"
        >
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 mb-4"
          >
            Individuelle Strategie anfragen
          </a>
          
          {/* Hinweis */}
          <p className="text-sm text-slate-500 mt-4">
            Kostenloses Erstgespräch zur Zieldefinition inklusive.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
