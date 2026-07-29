'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, Plus, Minus } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

type FaqItem = {
  id: number
  question: string
  answer: ReactNode
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'Wie lange dauert es, bis meine Website fertig ist?',
    answer:
      'Schnelligkeit ohne Qualitätsverlust. Zeit ist Geld – besonders für Selbstständige. In der Regel ist Ihre neue Website in 2 bis 4 Wochen komplett startklar. Bei umfangreicheren Projekten erstellen wir Ihnen vorab einen detaillierten Zeitplan. Unser Ziel ist es, Sie so schnell wie möglich online sichtbar zu machen, damit Sie zeitnah neue Kundenanfragen über Ihre Seite generieren können.',
  },
  {
    id: 2,
    question: 'Was kostet eine professionelle Website?',
    answer: (
      <>
        Eine professionelle Website ist kein Kostenfaktor, sondern ein digitaler Mitarbeiter, der 24/7 für Sie verkauft.
        Wir bieten maßgeschneiderte Lösungen für jedes Budget – von der kompakten digitalen Visitenkarte für lokale
        Betriebe bis hin zum umfangreichen Firmenauftritt. Nach einem{' '}
        <Link
          href="/kontakt"
          className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800"
        >
          kostenlosen Erstgespräch zur Kontaktaufnahme
        </Link>{' '}
        erhalten Sie von uns ein transparentes Festpreisangebot ohne versteckte Kosten. So haben Sie von Anfang an volle
        Planungssicherheit.
      </>
    ),
  },
  {
    id: 3,
    question: 'Kann ich meine Website später selbst bearbeiten?',
    answer:
      'Absolut! Wir bauen Ihre Website so auf, dass Sie die volle Kontrolle behalten. Ob Sie Öffnungszeiten ändern, neue Bilder hochladen oder Blogbeiträge verfassen möchten: Dank eines intuitiven Systems können Sie kleine Anpassungen ganz ohne Programmierkenntnisse selbst vornehmen. Natürlich erhalten Sie von uns eine kurze Einweisung, damit Sie sich sofort sicher fühlen.',
  },
  {
    id: 4,
    question: 'Ist meine Website auch für Smartphones optimiert?',
    answer: (
      <>
        Ja, garantiert. Da heutzutage über 60&nbsp;% der Nutzer in der Region Darmstadt mit dem Smartphone nach
        Dienstleistern suchen, nutzen wir konsequentes Mobile-First-Design. Ihre Website passt sich automatisch an jedes
        Endgerät an – ob iPhone, Android-Tablet oder Desktop-PC. Das sorgt nicht nur für begeisterte Besucher, sondern
        ist auch ein entscheidender Faktor für Ihr{' '}
        <Link
          href="/seo-darmstadt"
          className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800"
        >
          Ranking bei Google und lokale SEO
        </Link>
        .
      </>
    ),
  },
  {
    id: 5,
    question: 'Bietet ihr auch Wartung und Support an?',
    answer: (
      <>
        Wir lassen Sie nach dem Launch nicht allein. Technik entwickelt sich ständig weiter – deshalb kümmern wir uns
        auf Wunsch um Sicherheits-Updates, regelmäßige Backups und die technische Performance. So bleibt Ihre Seite
        sicher und blitzschnell, während Sie sich voll und ganz auf Ihr Kerngeschäft in{' '}
        <Link
          href="/webdesign/pfungstadt"
          className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800"
        >
          Pfungstadt und Umgebung
        </Link>{' '}
        konzentrieren können. Wir sind Ihr lokaler Partner, der bei Fragen immer nur einen Anruf entfernt ist.
      </>
    ),
  },
  {
    id: 6,
    question: 'Bringt mir eine neue Website wirklich mehr Kunden?',
    answer: (
      <div className="space-y-3 [&>*]:block">
        <span>Ja – wenn sie richtig aufgebaut ist.</span>
        <span>
          Der Fokus liegt nicht nur auf Design, sondern auf klarer Struktur,{' '}
          <Link
            href="/seo-darmstadt"
            className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800"
          >
            lokalen Suchbegriffen und Suchmaschinenoptimierung
          </Link>{' '}
          sowie einfachen Kontaktwegen.
        </span>
        <span>Ziel ist immer: mehr qualifizierte Anfragen – nicht nur Besucher.</span>
      </div>
    ),
  },
  {
    id: 7,
    question: 'Ich habe schon eine Website – lohnt sich ein Relaunch?',
    answer: (
      <div className="space-y-3 [&>*]:block">
        <span>In vielen Fällen ja.</span>
        <span>Oft liegt das Problem nicht im Angebot, sondern darin, wie es online präsentiert wird.</span>
        <span>
          Ein{' '}
          <Link
            href="/website-relaunch"
            className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800"
          >
            professioneller Website Relaunch
          </Link>{' '}
          kann dafür sorgen, dass aus Besuchern endlich Anfragen werden.
        </span>
      </div>
    ),
  },
]

export default function FAQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <section className="py-12 md:py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Welche Fragen haben Kunden zu{' '}
            <Link
              href="/webdesign/darmstadt"
              className="text-blue-700 underline decoration-blue-200 underline-offset-[4px] hover:text-blue-800 hover:decoration-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
            >
              Webdesign und SEO in Darmstadt
            </Link>
            ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* FAQ Items */}
          <div className="md:col-span-2 space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={faq.id}
                  className="bg-white backdrop-blur-sm rounded-xl border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-white" aria-hidden="true" />
                      ) : (
                        <Plus className="w-5 h-5 text-white" aria-hidden="true" />
                      )}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                        id={`faq-answer-${faq.id}`}
                      >
                        <div
                          className={`px-6 pb-4 text-slate-600 leading-relaxed ${
                            typeof faq.answer === 'string' ? 'whitespace-pre-line' : ''
                          }`}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                    </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* CTA-Karte – sticky beim Scrollen der FAQ-Liste */}
          <div className="h-fit self-start rounded-2xl border border-slate-200 bg-white p-8 shadow-xl backdrop-blur-sm md:sticky md:top-28">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                <HelpCircle className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="mb-6 text-balance text-xl font-bold text-slate-900">
                Noch unsicher, ob sich eine neue Website für Sie lohnt? Unser{' '}
                <Link
                  href="/leistungen"
                  className="text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800"
                >
                  Leistungsüberblick für Webdesign &amp; SEO
                </Link>{' '}
                schafft Transparenz.
              </h3>
              <Link
                href="/kontakt"
                className="inline-flex w-full max-w-sm items-center justify-center rounded-xl border border-amber-300/70 bg-amber-400 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-md shadow-amber-900/25 transition-all hover:border-amber-200 hover:bg-amber-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                Kostenloses Erstgespräch sichern
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
