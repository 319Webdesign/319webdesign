'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'

type CookieConsent = 'accepted' | 'necessary' | null

const COOKIE_CONSENT_KEY = 'cookie-consent'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Vermeide Hydration-Fehler: Prüfe erst im Client
    setIsMounted(true)
    
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as CookieConsent
      if (!consent) {
        // Kurze Verzögerung für bessere UX
        const timer = setTimeout(() => {
          setShowBanner(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleAccept = (type: 'accepted' | 'necessary') => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_CONSENT_KEY, type)
      setShowBanner(false)
      
      // Hier können Sie Ihre Cookie-Logik implementieren
      if (type === 'accepted') {
        // Alle Cookies aktivieren (z.B. Analytics, Marketing)
        // Beispiel: window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
      } else {
        // Nur notwendige Cookies
        // Beispiel: window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
      }
    }
  }

  // Zeige nichts während SSR/Initial Render
  if (!isMounted) {
    return null
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className="fixed bottom-6 right-6 z-50 max-w-md"
        >
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => handleAccept('necessary')}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Cookie-Banner schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Cookie className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Cookie-Einstellungen
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. 
                  Einige sind notwendig, andere helfen uns, die Website zu verbessern.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={() => handleAccept('accepted')}
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/20"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={() => handleAccept('necessary')}
                className="flex-1 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white font-medium rounded-lg transition-colors duration-200 border border-slate-700/50"
              >
                Nur notwendige
              </button>
            </div>

            {/* Link zu Datenschutz */}
            <p className="text-xs text-slate-400 mt-4 text-center">
              Weitere Informationen finden Sie in unserer{' '}
              <a
                href="/datenschutz"
                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
              >
                Datenschutzerklärung
              </a>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

