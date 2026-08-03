'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  HeartHandshake,
  MapPinned,
  Shield,
  Users,
  Wrench,
  TrendingUp,
} from 'lucide-react'
import { useReduceMotion } from './ReducedMotionProvider'

const points = [
  {
    icon: MapPinned,
    title: 'Regionale Zusammenarbeit',
    href: '/leistungen',
    text: 'Als Webdesigner mit Sitz in Trebur kenne ich die Region zwischen Groß-Gerau, Rüsselsheim und Darmstadt aus dem Alltag – nicht nur aus der Landkarte. Kurze Abstimmungswege, lokale Branchenkenntnis und ein Verständnis dafür, wie Handwerk und KMU hier Kunden gewinnen.',
  },
  {
    icon: HeartHandshake,
    title: 'Kurze Wege, direkte Kommunikation',
    href: '/uber-mich',
    text: 'Sie sprechen mit mir – nicht mit einer wechselnden Agentur-Schicht. Termine vor Ort in Trebur, Astheim oder Geinsheim sind ebenso möglich wie klare Video-Calls. Entscheidungen fallen schneller, wenn niemand „noch einmal intern klären“ muss.',
  },
  {
    icon: Users,
    title: 'Persönliche Betreuung',
    href: '/leistungen/strategische-begleitung',
    text: 'Vom ersten Gespräch bis nach dem Onlinegang bleibt ein Ansprechpartner. Das spart Zeit und Nerven – besonders wenn Sie parallel Auftragslage, Personal und Tagesgeschäft managen.',
  },
  {
    icon: Shield,
    title: 'IT-Knowhow statt Baukasten-Glück',
    href: '/leistungen/webdesign-launch',
    text: 'Moderne Websites brauchen saubere Technik: Performance, Sicherheit, SEO-Grundlagen und wartbare Struktur. Genau dort setze ich an – mit Next.js oder WordPress, je nachdem was zu Ihrem Betrieb passt.',
  },
  {
    icon: Wrench,
    title: 'Fokus auf Handwerksbetriebe',
    href: '/webdesign-handwerker',
    text: 'Elektriker, SHK, Dachdecker, Gartenbau und Co. brauchen keine Marketing-Floskeln, sondern klare Leistungen, Vertrauen und Anfragen. Meine Projekte sind darauf ausgelegt – von der Startseite bis zur Google-Sichtbarkeit.',
  },
  {
    icon: TrendingUp,
    title: 'Websites, die Kunden gewinnen',
    href: '/leistungen/wachstum-seo',
    text: 'Schön allein reicht nicht. Eine gute Website führt Besucher zur Anfrage: verständliche Angebote, starke Call-to-Actions, mobile Nutzbarkeit und lokale Relevanz. Mehr dazu unter meinen Leistungen und im Portfolio.',
  },
] as const

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

/**
 * Contentblock „Warum Trebur“ – nur /webdesign/trebur.
 */
export default function TreburWarumSection() {
  const reduceMotion = useReduceMotion()
  const HeaderEl = reduceMotion ? 'div' : motion.div
  const CardEl = reduceMotion ? 'li' : motion.li
  const FooterEl = reduceMotion ? 'div' : motion.div

  return (
    <section
      className="bg-white px-6 py-20 md:py-28"
      aria-labelledby="trebur-warum-heading"
    >
      <div className="mx-auto max-w-6xl">
        <HeaderEl
          {...(!reduceMotion ? fadeInUp : {})}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2
            id="trebur-warum-heading"
            className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
          >
            Warum Unternehmen aus Trebur mit 319Webdesign arbeiten
          </h2>
          <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
            Trebur ist kein anonymer Großstadtmarkt. Betriebe hier leben von Empfehlungen, Verlässlichkeit
            und sichtbarer Präsenz in der Region – online wie offline.
          </p>
        </HeaderEl>

        <ul className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {points.map(({ icon: Icon, title, href, text }, index) => (
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
                <p className="flex-grow text-sm leading-relaxed text-slate-700 md:text-base">{text}</p>
              </Link>
            </CardEl>
          ))}
        </ul>

        <FooterEl
          {...(!reduceMotion
            ? {
                ...fadeInUp,
                transition: { ...fadeInUp.transition, delay: 0.12 },
              }
            : {})}
        >
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-600">
            Ob Sie in Trebur, Astheim oder Geinsheim sitzen: Eine Website sollte zu Ihrem Betrieb passen –
            und in der Region gefunden werden. Wer zusätzlich in{' '}
            <Link
              href="/webdesign/darmstadt"
              className="font-medium text-blue-700 underline-offset-2 hover:underline"
            >
              Darmstadt
            </Link>{' '}
            oder über{' '}
            <Link
              href="/seo-darmstadt"
              className="font-medium text-blue-700 underline-offset-2 hover:underline"
            >
              lokale SEO
            </Link>{' '}
            wachsen will, profitiert von derselben Arbeitsweise.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/45"
            >
              Unverbindlich sprechen
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </FooterEl>
      </div>
    </section>
  )
}
