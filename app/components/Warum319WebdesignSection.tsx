'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Search, Zap } from 'lucide-react'
import { useReduceMotion } from './ReducedMotionProvider'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

const cards = [
  {
    icon: Zap,
    eyebrow: 'Next.js & Performance',
    title: 'Performance & Speed',
    description:
      'Moderne Technologie für schnelle Ladezeiten und eine reibungslose Nutzererfahrung – auf allen Geräten.',
    bullets: ['SSR & Static Generation', 'Optimierte Core Web Vitals', 'Edge Functions'],
  },
  {
    icon: Search,
    eyebrow: 'SEO & Sichtbarkeit',
    title: 'Auffindbarkeit & Reichweite',
    description:
      'Struktur und Inhalte, die Suchmaschinen und Besucher gleichermaßen überzeugen – messbar und nachhaltig.',
    bullets: ['Semantisches HTML', 'Meta- & Content-Strategie', 'Technische SEO-Basics'],
  },
  {
    icon: MapPin,
    eyebrow: 'Region & Vertrauen',
    title: 'Persönlich in Darmstadt',
    description:
      'Beratung mit Substanz statt anonymer Hotline – Ziele und Anforderungen klären wir im direkten Austausch.',
    bullets: ['Lokale Expertise', 'Transparente Abläufe', 'Langfristige Partnerschaft'],
  },
] as const

export default function Warum319WebdesignSection() {
  const reduceMotion = useReduceMotion()
  const CardWrap = reduceMotion ? 'div' : motion.div
  const CtaEl = reduceMotion ? 'div' : motion.div
  const ctaProps = reduceMotion
    ? { className: 'mt-12 text-center md:mt-14' }
    : { ...fadeInUp, transition: { ...fadeInUp.transition, delay: 0.28 }, className: 'mt-12 text-center md:mt-14' }

  return (
    <section
      id="warum-319webdesign"
      className="relative mt-20 w-full bg-white py-16 md:mt-28 md:py-24 lg:py-28"
      aria-labelledby="warum-319webdesign-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <header className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            Warum 319Webdesign
          </p>
          <h2
            id="warum-319webdesign-heading"
            className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.5rem] lg:leading-tight"
          >
            Der Unterschied liegt im Detail
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
            Keine Templates, keine Baukästen. Jede Website wird individuell für Ihre Anforderungen entwickelt.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            const cardProps = reduceMotion
              ? { className: 'h-full' }
              : {
                  ...fadeInUp,
                  transition: { ...fadeInUp.transition, delay: index * 0.08 },
                  className: 'h-full',
                }
            return (
              <CardWrap key={card.title} {...cardProps}>
                <article
                  className="flex h-full flex-col rounded-xl border border-slate-200/90 bg-[#f8f9fa] p-8 shadow-lg shadow-slate-900/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/20 md:p-9"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-5 w-5 text-blue-600" aria-hidden />
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                    {card.eyebrow}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 md:text-[1.35rem]">{card.title}</h3>
                  <p className="mb-6 flex-1 text-base leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                  <ul className="space-y-2.5 border-t border-slate-200/80 pt-5">
                    {card.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </CardWrap>
            )
          })}
        </div>

        <CtaEl {...ctaProps}>
          <p className="mb-4 text-base text-slate-600 leading-relaxed">
            Bereit für den nächsten Schritt? Wir klären gemeinsam Umfang, Ziele und Budget – unverbindlich.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            aria-label="Kontakt aufnehmen: Individuellen Plan festlegen"
          >
            Jetzt Ihren individuellen Plan festlegen
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
          </Link>
        </CtaEl>
      </div>
    </section>
  )
}
