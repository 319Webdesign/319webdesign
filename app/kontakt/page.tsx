'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight, Instagram, MessageCircle, ChevronDown } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
    <main className="min-h-screen overflow-x-hidden w-full">
      <Header />
      
      {/* Hero Section mit animiertem Hintergrund */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background - Mesh Gradient (wie auf Startseite) */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-zinc-900" />
          
          {/* Animated Mesh Gradients */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30, 41, 59, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(15, 23, 42, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.10) 0%, transparent 50%), radial-gradient(circle at 20% 60%, rgba(30, 41, 59, 0.10) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30, 41, 59, 0.12) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Additional subtle gradient layer */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05), transparent 70%)',
            }}
          />
        </div>

        <motion.div
          {...fadeInUp}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Lass uns dein Projekt starten.
            </span>
          </h1>
        </motion.div>
      </section>

      {/* Lokaler Bezug */}
      <section className="py-8 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-slate-400">
              Deine Webdesign Agentur für <span className="text-blue-400 font-semibold">Pfungstadt</span>,{' '}
              <span className="text-blue-400 font-semibold">Darmstadt</span> und{' '}
              <span className="text-blue-400 font-semibold">Südhessen</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kontakt-Bereich */}
      <section className="py-16 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontaktformular - Links */}
            <motion.div
              {...fadeInUp}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
            >
              <h2 className="text-3xl font-bold mb-6">Kontaktformular</h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Vor- und Nachname in einer Zeile auf Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-slate-300">
                      Vorname <span className="text-red-400" aria-label="Pflichtfeld">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-100 placeholder:text-slate-500"
                      placeholder="Max"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-slate-300">
                      Nachname <span className="text-red-400" aria-label="Pflichtfeld">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-100 placeholder:text-slate-500"
                      placeholder="Mustermann"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-slate-300">
                    Name des Unternehmens
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-100 placeholder:text-slate-500"
                    placeholder="Musterfirma GmbH (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                    E-Mail-Adresse <span className="text-red-400" aria-label="Pflichtfeld">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-100 placeholder:text-slate-500"
                    placeholder="ihre@email.de"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-slate-300">
                    Wie kann ich Ihnen helfen? <span className="text-red-400" aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-10 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-100 appearance-none cursor-pointer"
                      aria-required="true"
                    >
                      <option value="" disabled className="bg-slate-900">Bitte wählen Sie eine Option</option>
                      <option value="neue-website" className="bg-slate-900">Neue Website erstellen</option>
                      <option value="website-optimieren" className="bg-slate-900">Bestehende Website optimieren</option>
                      <option value="seo" className="bg-slate-900">SEO & Sichtbarkeit</option>
                      <option value="sonstiges" className="bg-slate-900">Sonstiges</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" aria-hidden="true" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                    Beschreiben Sie kurz Ihr Vorhaben <span className="text-red-400" aria-label="Pflichtfeld">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-slate-100 placeholder:text-slate-500"
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
                    className="mt-1 w-4 h-4 bg-slate-900 border-slate-700 rounded focus:ring-2 focus:ring-blue-500 text-blue-600 cursor-pointer"
                    aria-required="true"
                  />
                  <label htmlFor="privacyAccepted" className="text-sm text-slate-400 cursor-pointer">
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
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h2 className="text-3xl font-bold mb-6">Direkter Kontakt</h2>
                
                {/* E-Mail */}
                <motion.a
                  href="mailto:kontakt@319webdesign.com"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/30 transition-all duration-300 mb-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-300 transition-colors">
                      E-Mail
                    </h3>
                    <p className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      kontakt@319webdesign.com
                    </p>
                  </div>
                </motion.a>

                {/* Telefon */}
                <motion.a
                  href="tel:+491773236454"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-300 transition-colors">
                      Telefon
                    </h3>
                    <p className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      +49 177 3236454
                    </p>
                    <p className="text-sm text-slate-400 mt-1">Mo-Fr: 9:00 - 18:00 Uhr</p>
                  </div>
                </motion.a>
              </div>

              {/* Social Media */}
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h2 className="text-3xl font-bold mb-6">Social Media</h2>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="https://instagram.com/319webdesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
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
                    className="w-14 h-14 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
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
                    className="w-14 h-14 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
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

      <Footer />
    </main>
  )
}
