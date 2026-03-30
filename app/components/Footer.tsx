'use client'

import { Instagram, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const menuLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/uber-mich', label: 'Über Mich' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/kontakt', label: 'Kontakt' },
]

const leistungenLinks = [
  { href: '/leistungen/webdesign-launch', label: 'Webdesign & Launch' },
  { href: '/leistungen/wachstum-seo', label: 'Wachstum & SEO' },
  { href: '/leistungen/strategische-begleitung', label: 'Strategische Begleitung' },
  { href: '/immobilienmakler-webdesign', label: 'Immobilienmakler Webdesign' },
]

const linkClass =
  'text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm'

const leistungenBandLinkClass =
  'block rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-center sm:text-left text-slate-300 text-sm font-medium hover:text-blue-400 hover:border-blue-500/25 hover:bg-white/[0.04] transition-colors duration-300'

export default function Footer() {
  return (
    <>
      <section
        aria-labelledby="footer-leistungen-heading"
        className="bg-[#0a0a0c] border-t border-[rgba(255,255,255,0.06)]"
      >
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
          <h2
            id="footer-leistungen-heading"
            className="text-white font-semibold text-lg md:text-xl mb-6 text-center"
          >
            Leistungen
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {leistungenLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={leistungenBandLinkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-[#030303] border-t border-[rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 md:gap-10 xl:gap-8 mb-12">
          {/* Spalte 1: Brand */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/319.png"
                alt="319Webdesign Logo – Webdesign für KMU und Immobilienmakler in Pfungstadt und Darmstadt"
                width={110}
                height={110}
                sizes="(max-width: 768px) 70px, 110px"
                className="object-contain w-[70px] h-[70px] md:w-[110px] md:h-[110px]"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Design, das überzeugt. Technik, die performt.
            </p>
            {/* E-E-A-T: Vertrauenssignale für KI/Crawler */}
            <p className="text-slate-500 text-xs mt-2" role="contentinfo">
              Gründungsjahr: <time dateTime="2023">2023</time>. Standort: Pfungstadt, Region Darmstadt.
            </p>
          </div>

          {/* Menü (wie Hauptnavigation) */}
          <div className="space-y-4 text-center md:text-left">
            <p className="text-white font-semibold text-base mb-4">
              <strong>Menü</strong>
            </p>
            <ul className="space-y-3">
              {menuLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Regionen */}
          <div className="space-y-4 text-center md:text-left">
            <p className="text-white font-semibold text-base mb-4"><strong>Regionen</strong></p>
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
            <p className="text-white font-semibold text-base mb-4"><strong>Kontakt</strong></p>
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
            <p className="text-white font-semibold text-base mb-4"><strong>Social Media</strong></p>
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
              &copy;{' '}
              <span suppressHydrationWarning>{new Date().getFullYear()}</span>{' '}
              319Webdesign. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a 
                href="/sitemap.xml" 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Sitemap
              </a>
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
    </>
  )
}

