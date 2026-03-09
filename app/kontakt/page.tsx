'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight, Instagram, MessageCircle, ChevronDown, ListOrdered, Clock, CheckCircle2 } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    service: '',
    message: '',
    privacyAccepted: false
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (!formData.privacyAccepted) {
      setError('Bitte akzeptieren Sie die Datenschutzhinweise.')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Senden der Nachricht')
      }

      setFormSubmitted(true)
      setFormData({ 
        firstName: '', 
        lastName: '',
        company: '',
        email: '', 
        service: '',
        message: '', 
        privacyAccepted: false 
      })
      setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, privacyAccepted: e.target.checked }))
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden w-full pt-24">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

        <motion.div
          {...fadeInUp}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <div className="flex justify-center mb-8">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Kontakt', url: '/kontakt' },
              ]}
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Lass uns dein Projekt starten.
            </span>
          </h1>
        </motion.div>
      </section>

      {/* Lokaler Bezug */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-slate-600">
              Deine Webdesign Agentur für <span className="text-blue-600 font-semibold">Pfungstadt</span>,{' '}
              <span className="text-blue-600 font-semibold">Darmstadt</span> und{' '}
              <span className="text-blue-600 font-semibold">der Region</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kontakt-Bereich */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontaktformular - Links */}
            <motion.div
              {...fadeInUp}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <p className="text-3xl font-bold mb-6 text-slate-900"><strong>Kontaktformular</strong></p>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Vor- und Nachname in einer Zeile auf Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-slate-700">
                      Vorname <span className="text-red-500" aria-label="Pflichtfeld">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="Max"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-slate-700">
                      Nachname <span className="text-red-500" aria-label="Pflichtfeld">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="Mustermann"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-slate-700">
                    Name des Unternehmens
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="Musterfirma GmbH (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                    E-Mail-Adresse <span className="text-red-500" aria-label="Pflichtfeld">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="ihre@email.de"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-slate-700">
                    Wie kann ich Ihnen helfen? <span className="text-red-500" aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-10 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 appearance-none cursor-pointer"
                      aria-required="true"
                    >
                      <option value="" disabled className="bg-white">Bitte wählen Sie eine Option</option>
                      <option value="neue-website" className="bg-white">Neue Website erstellen</option>
                      <option value="website-optimieren" className="bg-white">Bestehende Website optimieren</option>
                      <option value="seo" className="bg-white">SEO & Sichtbarkeit</option>
                      <option value="sonstiges" className="bg-white">Sonstiges</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" aria-hidden="true" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                    Beschreiben Sie kurz Ihr Vorhaben <span className="text-red-500" aria-label="Pflichtfeld">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-slate-900 placeholder:text-slate-400"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    aria-required="true"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1 w-4 h-4 bg-white border-slate-300 rounded focus:ring-2 focus:ring-blue-500 text-blue-600 cursor-pointer"
                    aria-required="true"
                  />
                  <label htmlFor="privacyAccepted" className="text-sm text-slate-600 cursor-pointer">
                    Ich habe die <a href="/datenschutz" className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">Datenschutzhinweise</a> gelesen und akzeptiere diese. <span className="text-red-500" aria-label="Pflichtfeld">*</span>
                  </label>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm" role="alert">
                    {error}
                  </div>
                )}
                {formSubmitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm" role="alert">
                    Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading || formSubmitted}
                  whileHover={!isLoading && !formSubmitted ? { scale: 1.05 } : {}}
                  whileTap={!isLoading && !formSubmitted ? { scale: 0.95 } : {}}
                  animate={!isLoading && !formSubmitted ? {
                    boxShadow: [
                      '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
                      '0 15px 35px -5px rgba(59, 130, 246, 0.6)',
                      '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
                    ],
                  } : {}}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 inline-flex items-center justify-center gap-2 group/submit disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Wird gesendet...
                    </>
                  ) : formSubmitted ? (
                    'Nachricht gesendet!'
                  ) : (
                    <>
                      Absenden
                      <ArrowRight className="w-4 h-4 group-hover/submit:translate-x-1 transition-transform" aria-hidden="true" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Kontaktdaten und Social Media - Rechts */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Kontaktdaten */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Direkter Kontakt</h2>
                
                {/* E-Mail */}
                <motion.a
                  href="mailto:kontakt@319webdesign.com"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-100 transition-all duration-300 mb-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      <strong>E-Mail</strong>
                    </p>
                    <p className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      kontakt@319webdesign.com
                    </p>
                  </div>
                </motion.a>

                {/* Telefon */}
                <motion.a
                  href="tel:+491773236454"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-100 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      <strong>Telefon</strong>
                    </p>
                    <p className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      +49 177 3236454
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Mo-Fr: 9:00 - 18:00 Uhr</p>
                  </div>
                </motion.a>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-3xl font-bold mb-6 text-slate-900"><strong>Social Media</strong></p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="https://instagram.com/319webdesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-500 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" aria-hidden="true" />
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/491773236454"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-500 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6" aria-hidden="true" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.tiktok.com/@319webdesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-500 transition-all duration-300"
                    aria-label="TikTok"
                  >
                    <svg 
                      className="w-6 h-6" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ-Sektion – Unique Content & Vertrauen für lokale Kunden */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Häufige Fragen
            </h2>
            <p className="text-slate-600">
              Kurze Antworten für mehr Klarheit – speziell für Kleinunternehmen und Selbstständige in Darmstadt und Umgebung.
            </p>
          </motion.div>

          <div className="space-y-3">
            {[
              {
                question: 'Bieten Sie Webdesign für Kunden in Darmstadt und Umgebung an?',
                answer: 'Ja, ich betreue Kleinunternehmen und Selbstständige in Darmstadt und der Region (z. B. Pfungstadt, Griesheim, Weiterstadt) – komplett digital oder nach Absprache auch vor Ort.',
              },
              {
                question: 'Wie läuft die Zusammenarbeit ab?',
                answer: 'Nach Ihrer Anfrage melde ich mich innerhalb von 24 Stunden für ein kurzes Erstgespräch. Danach entwickeln wir eine gemeinsame Strategie für Ihren Webauftritt, gefolgt von der Umsetzung und dem Launch.',
              },
              {
                question: 'Unterstützen Sie mich auch langfristig bei meiner Webpräsenz?',
                answer: 'Absolut. Mein Ziel ist eine langfristige Begleitung. Ich helfe Ihnen nicht nur beim Launch, sondern sorge auch danach dafür, dass Ihre Seite technisch aktuell bleibt und bei Google gefunden wird.',
              },
              {
                question: 'Was kostet eine neue Website für ein Kleinunternehmen?',
                answer: 'Da jedes Projekt individuell ist, erstelle ich nach unserem Erstgespräch ein maßgeschneidertes Angebot, das genau auf die Bedürfnisse Ihres Business zugeschnitten ist.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:border-slate-300 transition-colors [&[open]]:border-blue-500/50 [&[open]]:ring-2 [&[open]]:ring-blue-500/20">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-left font-semibold text-slate-900 text-base md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-xl [&::-webkit-details-marker]:hidden">
                    <span className="pr-2">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-200 [details[open]_&]:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-600 leading-relaxed pl-0">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertrauensbildende Elemente (E-E-A-T) */}
      <section className="py-16 px-6 bg-white border-t border-slate-200" aria-labelledby="eeat-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 id="eeat-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Strategisches Webdesign mit Fokus auf Resultate
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Von der ersten Idee in Pfungstadt bis zum erfolgreichen Launch begleite ich Kleinunternehmen mit fundierter SEO-Expertise und individueller Beratung.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Ablaufplan */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <ListOrdered className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Ablaufplan</h3>
              </div>
              <p className="text-slate-600 mb-4">Nach Ihrer Kontaktaufnahme passiert Folgendes:</p>
              <ul className="space-y-3" role="list">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700"><strong>Erstgespräch</strong> – Wir besprechen Ihr Vorhaben und Ihre Ziele in einem unverbindlichen Kennenlerngespräch.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700"><strong>Strategie</strong> – Konzept und Vorschlag: Wir legen gemeinsam den Weg und die nächsten Schritte fest.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700"><strong>Angebot</strong> – Sie erhalten ein transparentes, auf Sie zugeschnittenes Angebot – ohne versteckte Kosten.</span>
                </li>
              </ul>
            </motion.div>

            {/* Verfügbarkeit */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Verfügbarkeit</h3>
              </div>
              <p className="text-slate-600 mb-4">So schnell sind wir für Sie da:</p>
              <ul className="space-y-3" role="list">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700"><strong>Rückmeldung innerhalb von 24 Stunden</strong> – Auf Anfragen per Formular oder E-Mail antworten wir werktags in der Regel am selben oder nächsten Tag.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700"><strong>Telefonisch erreichbar</strong> – Mo–Fr 9:00–18:00 Uhr für ein direktes Gespräch.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700"><strong>WhatsApp</strong> – Auch außerhalb der Bürozeiten für kurze Nachrichten erreichbar.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
