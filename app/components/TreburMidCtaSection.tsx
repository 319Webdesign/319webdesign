'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useReduceMotion } from './ReducedMotionProvider'

const trustItems = [
  'Individuelles Design',
  'SEO-optimiert',
  'Persönliche Betreuung',
  'DSGVO-konform',
] as const

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

/**
 * Zwischen-CTA nach Leistungen – nur /webdesign/trebur.
 * Volle Breite, Markenblau + Amber.
 */
export default function TreburMidCtaSection() {
  const reduceMotion = useReduceMotion()
  const ContentEl = reduceMotion ? 'div' : motion.div

  return (
    <section
      className="relative overflow-hidden bg-blue-600 px-6 py-16 md:py-20"
      aria-labelledby="trebur-mid-cta-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(168deg, rgb(29 78 216) 0%, rgb(37 99 235) 48%, rgb(30 64 175) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 80% 20%, rgba(255,255,255,0.16) 0%, transparent 55%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
      </div>

      <ContentEl
        {...(!reduceMotion ? fadeIn : {})}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <h2
          id="trebur-mid-cta-heading"
          className="text-balance text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl lg:text-[2.15rem] lg:leading-[1.15]"
        >
          Bereit für eine Website,
          <br className="hidden sm:block" /> die neue Kunden gewinnt?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-50/95 md:text-lg md:leading-relaxed">
          Ob Neugestaltung oder Relaunch – ich unterstütze Unternehmen und Handwerksbetriebe aus
          Trebur und der Region dabei, online professionell aufzutreten und mehr Anfragen über
          ihre Website zu erhalten.
        </p>

        <ul
          className="mt-8 flex list-none flex-col flex-wrap items-center justify-center gap-x-5 gap-y-2.5 sm:flex-row md:gap-x-7"
          aria-label="Vertrauenshinweise"
        >
          {trustItems.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-50 md:text-[0.9375rem]"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-white shadow-sm shadow-emerald-900/20">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3.5">
          <Link
            href="/kontakt"
            className="group inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-amber-300/70 bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-900/25 transition-all duration-300 hover:scale-[1.02] hover:border-amber-200 hover:bg-amber-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 active:scale-[0.98] sm:w-auto sm:max-w-none"
          >
            Kostenloses Erstgespräch
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/60 hover:bg-white/15 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 active:scale-[0.98] sm:w-auto sm:max-w-none"
          >
            Kostenlosen Website-Check
          </Link>
        </div>
      </ContentEl>
    </section>
  )
}
