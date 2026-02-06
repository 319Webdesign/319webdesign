'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, ArrowRight, ChevronDown, MessageCircle } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function KontaktSection() {
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
    <section id="kontakt" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Lassen Sie uns <span className="text-blue-600">sprechen</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Bereit für Ihre neue Website? Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kontaktformular */}
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-6">Projekt anfragen</h3>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Vor- und Nachname in einer Zeile auf Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-slate-700">
                    Vorname <span className="text-red-400" aria-label="Pflichtfeld">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-500"
                    placeholder="Max"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-slate-700">
                    Nachname <span className="text-red-400" aria-label="Pflichtfeld">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-500"
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
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-500"
                  placeholder="Musterfirma GmbH (optional)"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                  E-Mail-Adresse <span className="text-red-400" aria-label="Pflichtfeld">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-500"
                  placeholder="ihre@email.de"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-slate-700">
                  Wie kann ich Ihnen helfen? <span className="text-red-400" aria-label="Pflichtfeld">*</span>
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
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                  Beschreiben Sie kurz Ihr Vorhaben <span className="text-red-400" aria-label="Pflichtfeld">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-slate-900 placeholder:text-slate-500"
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
                  Ich habe die <a href="/datenschutz" className="text-blue-300 hover:text-blue-200 underline" target="_blank" rel="noopener noreferrer">Datenschutzhinweise</a> gelesen und akzeptiere diese. <span className="text-red-400" aria-label="Pflichtfeld">*</span>
                </label>
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm" role="alert">
                  {error}
                </div>
              )}
              {formSubmitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm" role="alert">
                  Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                </div>
              )}
              <motion.button
                type="submit"
                disabled={isLoading || formSubmitted}
                whileHover={!isLoading && !formSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isLoading && !formSubmitted ? { scale: 0.98 } : {}}
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
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 inline-flex items-center justify-center gap-2 group/submit disabled:opacity-50 disabled:cursor-not-allowed"
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
          </div>

          {/* Kontaktdaten */}
          <div className="space-y-6">
            {/* Telefon Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-8 rounded-xl border-2 border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Telefon</h3>
                  <a 
                    href="tel:+491773236454" 
                    className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-semibold"
                    aria-label="Rufen Sie uns an unter +49 177 3236454"
                  >
                    +49 177 3236454
                  </a>
                  <p className="text-slate-600 text-sm mt-1">Mo-Fr: 9:00 - 18:00 Uhr</p>
                </div>
              </div>
            </motion.div>

            {/* E-Mail Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-8 rounded-xl border-2 border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">E-Mail</h3>
                  <a 
                    href="mailto:kontakt@319webdesign.com" 
                    className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-semibold break-all"
                    aria-label="Schreiben Sie uns eine E-Mail an kontakt@319webdesign.com"
                  >
                    kontakt@319webdesign.com
                  </a>
                  <p className="text-slate-600 text-sm mt-1">Wir antworten innerhalb von 24h</p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-8 rounded-xl border-2 border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">WhatsApp</h3>
                  <a 
                    href="https://wa.me/491773236454" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-semibold"
                    aria-label="Kontaktieren Sie uns per WhatsApp"
                  >
                    +49 177 3236454
                  </a>
                  <p className="text-slate-600 text-sm mt-1">24/7 erreichbar</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

