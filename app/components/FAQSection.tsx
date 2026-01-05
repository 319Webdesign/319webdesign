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
    answer: 'Die Dauer hängt vom Umfang und den gewünschten Funktionen ab. Eine einfache Website benötigt in der Regel 2-4 Wochen, während größere Projekte entsprechend mehr Zeit in Anspruch nehmen. Wir besprechen den Zeitplan transparent mit Ihnen und halten Sie über den Fortschritt auf dem Laufenden.',
  },
  {
    id: 2,
    question: 'Was kostet eine professionelle Website?',
    answer: 'Die Kosten variieren je nach Umfang und Anforderungen. Eine einfache Website für kleine Unternehmen beginnt bereits ab einem fairen Preis. Für ein individuelles Angebot kontaktieren Sie uns gerne für ein unverbindliches Beratungsgespräch.',
  },
  {
    id: 3,
    question: 'Kann ich meine Website später selbst bearbeiten?',
    answer: 'Ja, wir setzen auf moderne Content-Management-Systeme, die benutzerfreundlich sind. Nach dem Launch zeigen wir Ihnen gerne, wie Sie Inhalte selbstständig aktualisieren können. Optional bieten wir auch Schulungen an.',
  },
  {
    id: 4,
    question: 'Ist meine Website auch für Smartphones optimiert?',
    answer: 'Absolut! Alle unsere Websites sind vollständig responsive und werden nach dem Mobile-First-Prinzip entwickelt. Ihre Website sieht und funktioniert auf allen Geräten – von Smartphones über Tablets bis hin zu Desktop-Computern – perfekt.',
  },
  {
    id: 5,
    question: 'Bietet ihr auch Wartung und Support an?',
    answer: 'Ja, wir bieten flexible Wartungs- und Support-Pakete an. Von regelmäßigen Updates über Sicherheitspatches bis hin zu technischem Support – wir sind auch nach dem Launch für Sie da.',
  },
]

export default function FAQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Häufig gestellte Fragen
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
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-800/30 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
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
                        <div className="px-6 pb-4 text-slate-400 leading-relaxed">
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
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-xl h-fit"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <HelpCircle className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Deine Frage war nicht dabei?
              </h3>
              <p className="text-slate-400 mb-6">
                Dann schreib uns einfach – wir helfen dir gerne weiter.
              </p>
              <a
                href="mailto:kontakt@319webdesign.com"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-medium transition-colors group/email"
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

