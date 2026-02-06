'use client'

import { Instagram, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        {/* Prominent CTA Section */}
        <div className="mb-12 pb-12 border-b border-[rgba(255,255,255,0.05)]">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bereit für dein Projekt?
            </h3>
            <p className="text-slate-400 mb-6">
              Lass uns gemeinsam eine Website erstellen, die dein Business voranbringt.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Kostenloses Erstgespräch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main Footer Content - 5 Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 lg:gap-8 mb-12">
          {/* Spalte 1: Brand */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/319.png"
                alt="319Webdesign Logo – Webdesign Darmstadt, Pfungstadt und Südhessen"
                width={110}
                height={110}
                sizes="(max-width: 768px) 70px, 110px"
                className="object-contain w-[70px] h-[70px] md:w-[110px] md:h-[110px]"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Design, das überzeugt. Technik, die performt.
            </p>
          </div>

          {/* Spalte 2: Navigation - Hauptseiten + Sitelinks für Leistungen */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-white font-semibold text-base mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Startseite
                </a>
              </li>
              <li>
                <a 
                  href="/leistungen" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Leistungen
                </a>
              </li>
              <li className="pl-3 border-l border-slate-700 space-y-2 mt-2">
                <a href="/leistungen/webdesign-launch" className="block text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Webdesign & Launch</a>
                <a href="/leistungen/wachstum-seo" className="block text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Wachstum & SEO</a>
                <a href="/leistungen/strategische-begleitung" className="block text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Strategische Begleitung</a>
              </li>
              <li>
                <a 
                  href="/portfolio" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="/kontakt" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm font-semibold"
                >
                  → Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Regionen */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-white font-semibold text-base mb-4">Regionen</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/webdesign/darmstadt" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Darmstadt
                </a>
              </li>
              <li>
                <a 
                  href="/webdesign/pfungstadt" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Pfungstadt
                </a>
              </li>
              <li>
                <a 
                  href="/webdesign/griesheim" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Griesheim
                </a>
              </li>
              <li>
                <a 
                  href="/webdesign/weiterstadt" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Weiterstadt
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Kontakt */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-white font-semibold text-base mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a 
                href="mailto:kontakt@319webdesign.com" 
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                kontakt@319webdesign.com
              </a>
              <p className="text-slate-500 text-sm">
                Verfügbar für neue Projekte
              </p>
            </div>
          </div>

          {/* Spalte 5: Social Media */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-white font-semibold text-base mb-4">Social Media</h4>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://instagram.com/319webdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/491773236454"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.tiktok.com/@319webdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg"
                aria-label="TikTok"
              >
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)]">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-xs text-slate-500 text-center">
            <p>
              &copy; {new Date().getFullYear()} 319Webdesign. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a 
                href="/impressum" 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Impressum
              </a>
              <a 
                href="/datenschutz" 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

