'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, HelpCircle, Plus, Minus } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

const faqData = [
  {
    id: 1,
    question: 'Wie lange dauert es, bis meine Website fertig ist?',
    answer: 'Schnelligkeit ohne Qualitätsverlust. Zeit ist Geld – besonders für Selbstständige. In der Regel ist Ihre neue Website in 2 bis 4 Wochen komplett startklar. Bei umfangreicheren Projekten erstellen wir Ihnen vorab einen detaillierten Zeitplan. Unser Ziel in Südhessen ist es, Sie so schnell wie möglich online sichtbar zu machen, damit Sie zeitnah neue Kundenanfragen über Ihre Seite generieren können.',
  },
  {
    id: 2,
    question: 'Was kostet eine professionelle Website?',
    answer: 'Eine professionelle Website ist kein Kostenfaktor, sondern ein digitaler Mitarbeiter, der 24/7 für Sie verkauft. Wir bieten maßgeschneiderte Lösungen für jedes Budget – von der kompakten digitalen Visitenkarte für lokale Betriebe bis hin zum umfangreichen Firmenauftritt. Nach einem kostenlosen Erstgespräch erhalten Sie von uns ein transparentes Festpreisangebot ohne versteckte Kosten. So haben Sie von Anfang an volle Planungssicherheit.',
  },
  {
    id: 3,
    question: 'Kann ich meine Website später selbst bearbeiten?',
    answer: 'Absolut! Wir bauen Ihre Website so auf, dass Sie die volle Kontrolle behalten. Ob Sie Öffnungszeiten ändern, neue Bilder hochladen oder Blogbeiträge verfassen möchten: Dank eines intuitiven Systems können Sie kleine Anpassungen ganz ohne Programmierkenntnisse selbst vornehmen. Natürlich erhalten Sie von uns eine kurze Einweisung, damit Sie sich sofort sicher fühlen.',
  },
  {
    id: 4,
    question: 'Ist meine Website auch für Smartphones optimiert?',
    answer: 'Ja, garantiert. Da heutzutage über 60 % der Nutzer in der Region Darmstadt mit dem Smartphone nach Dienstleistern suchen, nutzen wir konsequentes Mobile-First-Design. Ihre Website passt sich automatisch an jedes Endgerät an – ob iPhone, Android-Tablet oder Desktop-PC. Das sorgt nicht nur für begeisterte Besucher, sondern ist auch ein entscheidender Faktor für Ihr Ranking bei Google.',
  },
  {
    id: 5,
    question: 'Bietet ihr auch Wartung und Support an?',
    answer: 'Wir lassen Sie nach dem Launch nicht allein. Technik entwickelt sich ständig weiter – deshalb kümmern wir uns auf Wunsch um Sicherheits-Updates, regelmäßige Backups und die technische Performance. So bleibt Ihre Seite sicher und blitzschnell, während Sie sich voll und ganz auf Ihr Kerngeschäft in Pfungstadt und Umgebung konzentrieren können. Wir sind Ihr lokaler Partner, der bei Fragen immer nur einen Anruf entfernt ist.',
  },
]

export default function FAQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Häufig gestellte <span className="text-blue-600">Fragen</span>
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
                        <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                    </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Contact Card */}
          <div
            className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-xl h-fit"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <HelpCircle className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Deine Frage war nicht dabei?
              </h3>
              <p className="text-slate-600 mb-6">
                Dann schreib uns einfach – wir helfen dir gerne weiter.
              </p>
              <a
                href="mailto:kontakt@319webdesign.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group/email"
              >
                <Mail className="w-5 h-5 group-hover/email:translate-x-1 transition-transform" aria-hidden="true" />
                <span className="break-all">kontakt@319webdesign.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

