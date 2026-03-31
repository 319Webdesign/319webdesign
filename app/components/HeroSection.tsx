'use client'

import { ArrowDown, ArrowRight, Zap } from 'lucide-react'
import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32 md:pt-28">
      {/* Animated Background - Mesh Gradient (Reduziert für Mobile) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Weißer Hintergrund mit dezentem Blau-Akzent */}
        <div className="absolute inset-0 bg-white" />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* 2-Spalten-Grid für Desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start min-h-[80vh]">
          
          {/* Linke Spalte: Text und Buttons */}
          <div className="text-center lg:text-left lg:pr-8">
            <div className="flex justify-center lg:justify-start mb-4 animate-fade-in-up">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-blue-500 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600"
                role="status"
                aria-label="Technologie: Next.js"
              >
                <Zap className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                Next.js Powered
              </span>
            </div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="text-slate-900">Webdesign für Darmstadt & Pfungstadt: Starke Websites mit System-Intelligenz</span>
            </h1>
            <p className="text-base md:text-xl text-slate-700 mb-4 leading-relaxed max-w-xl lg:max-w-none animate-fade-in-up animation-delay-100">
              Vom regionalen KMU bis zum Immobilienmakler mit onOffice-Anbindung: Ich entwickle für Unternehmen in Darmstadt & Pfungstadt maßgeschneiderte High-Performance-Websites, die sich nahtlos in Ihre bestehenden Workflows einfügen.
            </p>

            <div className="mt-10 max-w-xl lg:max-w-none mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
                <a
                  href="/kontakt"
                  className="px-6 py-2.5 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md shadow-blue-500/40 hover:shadow-lg hover:shadow-blue-500/60 transition-all duration-300 inline-flex items-center gap-2 group/btn hover:scale-[1.02] active:scale-[0.98] will-change-transform"
                  aria-label="Zum Kontaktformular springen - Kostenlose Erstberatung"
                >
                  Kostenlose Erstberatung
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                </a>
                <a
                  href="#leistungen"
                  className="px-6 py-2.5 text-sm border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 inline-flex items-center gap-2 group/btn2 hover:scale-[1.02] active:scale-[0.98] will-change-transform"
                  aria-label="Zu den Leistungen scrollen - Unsere Lösungen ansehen"
                >
                  Unsere Lösungen ansehen
                  <ArrowDown className="w-3.5 h-3.5 group-hover/btn2:translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
                </a>
              </div>

              <div
                className="mt-8 pt-6 border-t border-slate-200"
                role="region"
                aria-label="Performance- und Qualitätskennzahlen"
              >
                <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 text-center sm:text-left">
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tabular-nums tracking-tight">
                      {'<'}100ms
                    </p>
                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-500 mt-1 leading-snug">
                      Time to First Byte
                    </p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tabular-nums tracking-tight">
                      100
                    </p>
                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-500 mt-1 leading-snug">
                      Lighthouse Score
                    </p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                      SEO
                    </p>
                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-500 mt-1 leading-snug">
                      By Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Porträtfoto (unten ausrichten, Zeile volle Höhe) */}
          <div className="relative hidden lg:flex lg:flex-col lg:justify-end w-full lg:min-h-[80vh]">
            <div className="relative w-full h-[650px] flex items-end justify-end lg:-translate-y-4">
              <Image
                src="/maik-removebg.png"
                alt="Webdesign für Immobilienmakler und KMU in Darmstadt und Pfungstadt – Maik Schmidt, 319Webdesign"
                width={550}
                height={650}
                priority={true}
                fetchPriority="high"
                sizes="(max-width: 1024px) 0vw, (max-width: 1280px) 45vw, 550px"
                quality={80}
                className="object-contain object-bottom h-full w-auto max-w-none"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-1000">
        <div className="flex flex-col items-center gap-2 text-slate-500 animate-bounce-slow">
          <span className="text-sm">Scroll</span>
          <ArrowDown className="w-5 h-5" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

