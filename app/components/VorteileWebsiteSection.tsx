'use client'

import { motion } from 'framer-motion'
import { BarChart3, Briefcase, Mail, PenTool, ShieldCheck, Users } from 'lucide-react'
import { useReduceMotion } from './ReducedMotionProvider'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
}

const vorteile = [
  { icon: PenTool, title: 'Professionelles Erscheinungsbild' },
  { icon: Users, title: 'Gewinnung von Neukunden' },
  { icon: Mail, title: 'Gewinnung von Mitarbeitern' },
  { icon: BarChart3, title: 'Langfristige Betreuung Ihrer Website' },
  { icon: Briefcase, title: 'Mehr Zeit für Ihr Geschäft' },
  { icon: ShieldCheck, title: '100% DSGVO konform' },
] as const

export default function VorteileWebsiteSection() {
  const reduceMotion = useReduceMotion()
  const CardEl = reduceMotion ? 'div' : motion.div

  return (
    <section className="relative z-10 mt-10 overflow-visible bg-blue-600 px-6 pb-10 pt-24 md:mt-14 md:pb-14 md:pt-28" aria-labelledby="vorteile-website-heading">
      <div
        className="pointer-events-none absolute -top-8 left-1/2 h-8 w-[150%] -translate-x-1/2 rounded-t-[100%] bg-blue-600 md:-top-10 md:h-10"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <h2 id="vorteile-website-heading" className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Welche Vorteile hat eine Website von 319Webdesign
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
          {vorteile.map((item, index) => {
            const Icon = item.icon
            const cardProps = reduceMotion
              ? { className: 'h-full' }
              : {
                  ...fadeInUp,
                  transition: { ...fadeInUp.transition, delay: index * 0.06 },
                  className: 'h-full',
                }

            return (
              <CardEl key={item.title} {...cardProps}>
                <article className="flex h-full flex-col items-center rounded-2xl border border-slate-200/90 bg-white px-6 py-8 text-center shadow-lg shadow-blue-950/20">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <Icon className="h-8 w-8 text-amber-500" aria-hidden />
                  </div>
                  <p className="text-base font-bold leading-tight text-slate-900 md:text-xl">{item.title}</p>
                </article>
              </CardEl>
            )
          })}
        </div>
      </div>
      <div
        className="pointer-events-none absolute -bottom-16 left-1/2 h-16 w-[150%] -translate-x-1/2 rounded-b-[100%] bg-blue-600 md:-bottom-24 md:h-24"
        aria-hidden
      />
    </section>
  )
}
