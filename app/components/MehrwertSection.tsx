'use client'

import { motion } from 'framer-motion'
import { useReduceMotion } from './ReducedMotionProvider'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Langfristige Unterstützung',
    description:
      'Wir begleiten dich nicht nur beim Start, sondern optimieren deine Präsenz kontinuierlich – ideal für das langfristige Wachstum deines Web-Auftritts.',
  },
  {
    icon: CheckCircle2,
    title: 'Starke Marke',
    description:
      'Wir sorgen dafür, dass dein Unternehmen (egal ob Handwerk oder Immobilien) online sichtbar bleibt und sich deutlich vom Wettbewerb abhebt.',
  },
  {
    icon: CheckCircle2,
    title: 'Mehr Wirkung',
    description:
      'Damit du nur noch TOP-Aufträge, TOP-Kunden und TOP-Mitarbeiter erreichst.',
  },
]

export default function MehrwertSection() {
  const reduceMotion = useReduceMotion()
  const LeftEl = reduceMotion ? 'div' : motion.div
  const RightEl = reduceMotion ? 'div' : motion.div
  const leftProps = reduceMotion ? { className: 'flex flex-col justify-center' } : { ...fadeInUp, className: 'flex flex-col justify-center' }
  const rightProps = reduceMotion ? { className: 'relative' } : { ...fadeInUp, transition: { ...fadeInUp.transition, delay: 0.15 }, className: 'relative' }

  return (
    <section className="py-16 md:py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Linke Spalte: Text und Vorteile */}
          <LeftEl {...leftProps}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-slate-900 leading-tight">
              Ihr Partner für regionalen Erfolg – digital sichtbar in Südhessen 💡
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Für KMU: Neue Kunden über Vertrauen und Regionalität gewinnen. Für Immobilienmakler: Effizienz durch Objekt-Schnittstellen (onOffice, FlowFact), mehr Eigentümer-Anfragen und weniger manuelle Pflege. Beide Zielgruppen profitieren von einem starken Webdesign.
            </p>

            <dl className="space-y-6 mb-10">
              {benefits.map((item, index) => {
                const IconComponent = item.icon
                const ItemEl = reduceMotion ? 'div' : motion.div
                const itemProps = reduceMotion
                  ? { className: 'flex gap-4' }
                  : { ...fadeInUp, transition: { ...fadeInUp.transition, delay: 0.1 + index * 0.08 }, className: 'flex gap-4' }
                return (
                  <ItemEl key={item.title} {...itemProps}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <dt className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">
                        {item.title}
                      </dt>
                      <dd className="text-slate-600 leading-relaxed">{item.description}</dd>
                    </div>
                  </ItemEl>
                )
              })}
            </dl>

            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300"
              aria-label="Zum Kontaktformular – Projekt starten"
            >
              Starte jetzt Dein Projekt mit uns!
            </Link>
          </LeftEl>

          {/* Rechte Spalte: Mockup + Trust-Badges */}
          <RightEl {...rightProps}>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/expertenteam-laptop.png"
                  alt="Webdesign für Immobilienmakler und KMU in Hessen – Laptop-Arbeitsplatz professionelle Websites"
                  width={600}
                  height={450}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Trust-Badges (schwebend) */}
              <div className="absolute -left-2 top-1/4 hidden md:block">
                <span className="inline-flex px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-500/40 text-sm font-semibold">
                  SEO Optimiert
                </span>
              </div>
              <div className="absolute -right-2 top-1/2 hidden md:block">
                <span className="inline-flex px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-500/40 text-sm font-semibold">
                  Mobile First
                </span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 hidden md:block">
                <span className="inline-flex px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-500/40 text-sm font-semibold">
                  High Performance
                </span>
              </div>
            </div>
          </RightEl>
        </div>
      </div>
    </section>
  )
}
