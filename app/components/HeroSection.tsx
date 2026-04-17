'use client'

import { ArrowDown, ArrowRight, Award, MapPin, Zap } from 'lucide-react'
import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className="relative flex items-start justify-center overflow-hidden pt-32 md:pt-28 pb-0">
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
        <div className="grid grid-cols-1 items-start gap-8 min-h-[80vh] lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-12">
          
          {/* Linke Spalte: Text und Buttons */}
          <div className="min-h-0 text-center lg:pr-8 lg:pt-10 lg:text-left xl:pt-14">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-7 leading-tight animate-fade-in-up">
              <span className="text-slate-900">Mehr regionale Sichtbarkeit und passende Aufträge</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-8 animate-fade-in-up animation-delay-100">
              Warten Sie nicht auf Zufalls-Anfragen. Wir sorgen dafür, dass Ihr Betrieb in Darmstadt und Pfungstadt bei Google ganz oben steht, wenn Kunden nach Profis suchen.
            </p>

            <div className="max-w-xl lg:max-w-none mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <a
                  href="/kontakt"
                  className="px-6 py-2.5 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md shadow-blue-500/40 hover:shadow-lg hover:shadow-blue-500/60 transition-all duration-300 inline-flex items-center gap-2 group/btn hover:scale-[1.02] active:scale-[0.98] will-change-transform"
                  aria-label="Jetzt Erstgespräch vereinbaren – zum Kontaktformular"
                >
                  Jetzt Erstgespräch vereinbaren
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                </a>
                <p className="text-center text-sm text-slate-600 lg:text-left">
                  Kurzer Anruf genügt:{' '}
                  <a
                    href="tel:+491773236454"
                    className="font-medium text-slate-800 underline-offset-2 hover:text-blue-600 hover:underline tabular-nums transition-colors"
                  >
                    +49 177 3236 454
                  </a>
                </p>
              </div>

              <div
                className="mt-8 pt-6 border-t border-slate-200"
                role="region"
                aria-label="Vorteile: Sofort startklar, Top-Qualität, regionale Präsenz"
              >
                <div className="grid grid-cols-3 justify-items-start gap-3 sm:gap-6 md:gap-10">
                  <div className="flex w-fit max-w-full flex-col items-center">
                    <div className="mb-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-100" aria-hidden>
                      <Zap className="h-3.5 w-3.5 text-blue-600" strokeWidth={2} />
                    </div>
                    <p className="text-left text-xs font-bold leading-tight text-slate-900 sm:text-sm md:text-base">
                      Sofort startklar
                    </p>
                  </div>
                  <div className="flex w-fit max-w-full flex-col items-center">
                    <div className="mb-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-100" aria-hidden>
                      <Award className="h-3.5 w-3.5 text-blue-600" strokeWidth={2} />
                    </div>
                    <p className="text-left text-xs font-bold leading-tight text-slate-900 sm:text-sm md:text-base">
                      Top-Qualität
                    </p>
                  </div>
                  <div className="flex w-fit max-w-full flex-col items-center">
                    <div className="mb-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-100" aria-hidden>
                      <MapPin className="h-3.5 w-3.5 text-blue-600" strokeWidth={2} />
                    </div>
                    <p className="text-left text-xs font-bold leading-tight text-slate-900 sm:text-sm md:text-base">
                      Regionale Präsenz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Porträtfoto unten bündig mit Sektionsende / Trust-Bar */}
          <div className="relative hidden min-h-0 w-full lg:flex lg:flex-col lg:justify-end lg:self-stretch">
            <div className="relative flex w-full flex-1 min-h-0 items-end justify-end">
              <Image
                src="/maik-removebg.png"
                alt="Webdesign für Immobilienmakler und KMU in Darmstadt und Pfungstadt – Maik Schmidt, 319Webdesign"
                width={600}
                height={709}
                priority={true}
                fetchPriority="high"
                sizes="(max-width: 1024px) 0vw, (max-width: 1280px) 48vw, 600px"
                quality={80}
                className="h-full max-h-full w-auto max-w-full origin-bottom scale-[1.06] object-contain object-bottom"
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

