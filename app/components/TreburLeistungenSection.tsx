'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  Code2,
  Gauge,
  Globe2,
  LayoutTemplate,
  MapPinned,
  Search,
  Target,
  Wrench,
} from 'lucide-react'
import { useReduceMotion } from './ReducedMotionProvider'

const leistungen: {
  icon: LucideIcon
  title: string
  href: string
  body: string
}[] = [
  {
    icon: LayoutTemplate,
    title: 'Webdesign',
    href: '/leistungen/webdesign-launch',
    body: 'Individuelle Websites für Unternehmen und Handwerksbetriebe in Trebur – klar strukturiert, mobil stark und auf echte Anfragen ausgerichtet.',
  },
  {
    icon: Search,
    title: 'SEO',
    href: '/seo-darmstadt',
    body: 'Lokale Suchmaschinenoptimierung für Trebur und Umgebung: saubere Struktur, relevante Inhalte und technische Basis für mehr Sichtbarkeit bei Google.',
  },
  {
    icon: Wrench,
    title: 'Website-Wartung',
    href: '/leistungen/strategische-begleitung',
    body: 'Updates, Backups und schnelle Anpassungen – damit Ihre Website zuverlässig läuft, ohne dass Sie sich um technische Details kümmern müssen.',
  },
  {
    icon: Globe2,
    title: 'WordPress',
    href: '/leistungen/webdesign-launch',
    body: 'WordPress-Umsetzungen, die pflegbar bleiben: schlank, performant und so aufgebaut, dass Sie Inhalte später selbst aktualisieren können.',
  },
  {
    icon: Code2,
    title: 'Next.js',
    href: '/leistungen/webdesign-launch',
    body: 'Moderne Next.js-Websites mit starker Performance und SEO-Technik – ideal, wenn Geschwindigkeit und Conversion im Vordergrund stehen.',
  },
  {
    icon: MapPinned,
    title: 'Google-Unternehmensprofil',
    href: '/leistungen/wachstum-seo',
    body: 'Optimierung Ihres Google-Profils für Maps und lokale Suche – damit Kunden aus Trebur und der Region Sie schneller finden und anrufen.',
  },
  {
    icon: Gauge,
    title: 'Performanceoptimierung',
    href: '/website-relaunch',
    body: 'Schnellere Ladezeiten und bessere Core Web Vitals – für mehr Nutzerzufriedenheit, bessere Rankings und weniger Absprünge auf dem Smartphone.',
  },
  {
    icon: Target,
    title: 'Conversionoptimierung',
    href: '/leistungen/wachstum-seo',
    body: 'Klare Wege zur Anfrage: verständliche Angebote, sichtbare Kontaktpunkte und eine Nutzerführung, die Besucher zu Kunden macht.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

/**
 * Leistungs-Sektion – nur /webdesign/trebur (Aufbau analog Warum-Sektion).
 */
export default function TreburLeistungenSection() {
  const reduceMotion = useReduceMotion()
  const HeaderEl = reduceMotion ? 'div' : motion.div
  const CardEl = reduceMotion ? 'li' : motion.li

  return (
    <section
      className="bg-white px-6 py-20 md:py-28"
      aria-labelledby="trebur-leistungen-heading"
    >
      <div className="mx-auto max-w-6xl">
        <HeaderEl
          {...(!reduceMotion ? fadeInUp : {})}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2
            id="trebur-leistungen-heading"
            className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
          >
            Leistungen für Unternehmen in
            <br />
            Trebur &amp; Umgebung
          </h2>
          <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
            Von Webdesign und SEO bis Wartung und Conversion: Alles aus einer Hand – abgestimmt auf
            lokale Betriebe in Trebur und der Rhein-Main-Region. Einen Überblick finden Sie auch unter{' '}
            <Link href="/leistungen" className="font-medium text-blue-700 underline-offset-2 hover:underline">
              Leistungen
            </Link>
            .
          </p>
        </HeaderEl>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {leistungen.map(({ icon: Icon, title, href, body }, index) => (
            <CardEl
              key={title}
              {...(!reduceMotion
                ? {
                    ...fadeInUp,
                    transition: {
                      ...fadeInUp.transition,
                      delay: 0.06 * index,
                    },
                  }
                : {})}
              className="h-full"
            >
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm ring-1 ring-slate-900/[0.02] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-amber-400 hover:shadow-md hover:shadow-amber-900/10 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:p-7"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-700">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-700 md:text-xl">
                  {title}
                </h3>
                <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-700 md:text-base">
                  {body}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition-colors group-hover:text-blue-800">
                  Mehr lesen
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </CardEl>
          ))}
        </ul>
      </div>
    </section>
  )
}
