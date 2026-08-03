'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  ClipboardList,
  Code,
  Compass,
  Palette,
  Rocket,
  Search,
  Wrench,
} from 'lucide-react'
import { useReduceMotion } from './ReducedMotionProvider'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

const steps = [
  {
    step: 1,
    icon: Search,
    title: 'Analyse',
    description:
      'Ist-Zustand, Ziele und Wettbewerb in Trebur & Umgebung: Was funktioniert, wo verlieren Sie Anfragen, welche Suchintentionen zählen?',
  },
  {
    step: 2,
    icon: Compass,
    title: 'Planung',
    description:
      'Seitenstruktur, Inhalte und SEO-Basis festlegen – abgestimmt auf Ihre Leistungen, Zielgruppe und regionalen Markt.',
  },
  {
    step: 3,
    icon: Palette,
    title: 'Design',
    description:
      'Individuelles Design mit klarer Hierarchie und starkem ersten Eindruck – mobil wie am Desktop überzeugend.',
  },
  {
    step: 4,
    icon: Code,
    title: 'Entwicklung',
    description:
      'Technische Umsetzung mit Next.js oder WordPress: schnell, wartbar, SEO-fähig und DSGVO-konform.',
  },
  {
    step: 5,
    icon: Rocket,
    title: 'Onlinegang',
    description:
      'Launch inkl. Checks, Weiterleitungen und Feinschliff – damit Ihre neue Website sauber live geht.',
  },
  {
    step: 6,
    icon: Wrench,
    title: 'Betreuung',
    description:
      'Nach dem Start: Updates, Anpassungen und optional SEO – damit der Auftritt dauerhaft Anfragen bringt.',
  },
] as const

/**
 * 6-Schritte-Timeline – nur /webdesign/trebur (Optik analog ProzessSection).
 */
export default function TreburProzessSection() {
  const reduceMotion = useReduceMotion()
  const CardEl = reduceMotion ? 'div' : motion.div
  const cardProps = reduceMotion ? {} : { whileHover: { y: -3, transition: { duration: 0.3 } } }
  const HeaderEl = reduceMotion ? 'div' : motion.div
  const headerProps = reduceMotion
    ? { className: 'mb-10 text-center md:mb-12' }
    : { ...fadeInUp, className: 'mb-10 text-center md:mb-12' }

  return (
    <section
      id="prozess"
      className="bg-white px-6 py-12 md:py-20"
      aria-labelledby="trebur-prozess-heading"
    >
      <div className="mx-auto max-w-6xl">
        <HeaderEl {...headerProps}>
          <h2 id="trebur-prozess-heading" className="mb-6 text-2xl font-bold md:text-4xl">
            So läuft die Zusammenarbeit
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Klarer Ablauf in sechs Schritten – von der ersten Analyse bis zur laufenden Betreuung.
            Transparent, persönlich und ohne Agentur-Chaos.
          </p>
        </HeaderEl>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {steps.map((item) => (
            <CardEl
              key={item.step}
              {...cardProps}
              className="group/process relative flex h-full flex-col overflow-visible rounded-xl border border-slate-200/90 bg-slate-50 px-5 pb-6 pt-9 shadow-md transition-all duration-300 hover:border-blue-400/40 hover:shadow-md hover:shadow-blue-500/10"
            >
              <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 transform">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-md shadow-blue-500/25">
                  {String(item.step).padStart(2, '0')}
                </div>
              </div>
              <div className="relative z-10 flex flex-grow flex-col">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-900/20 ring-1 ring-white/35 transition-transform duration-300 group-hover/process:scale-[1.06]">
                  <item.icon className="h-6 w-6 text-slate-950" aria-hidden strokeWidth={2} />
                </div>
                <p className="mb-2.5 text-center text-base font-bold leading-snug md:text-lg">
                  {item.title}
                </p>
                <p className="flex-grow text-center text-xs leading-relaxed text-slate-600 md:text-sm">
                  {item.description}
                </p>
              </div>
            </CardEl>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
          >
            <ClipboardList className="h-5 w-5" aria-hidden />
            Projekt starten
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
