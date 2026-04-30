'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className="relative z-10 flex items-start justify-center overflow-visible bg-blue-600 pb-0 pt-36 md:pt-32">
      {/* Animated Background - Mesh Gradient (Reduziert für Mobile) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blauer Hintergrund mit leichtem Highlight */}
        <div className="absolute inset-0 bg-blue-600" />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.18) 0%, transparent 55%)',
          }}
        />
      </div>

      {/* 2-Spalten-Grid für Desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid min-h-[56vh] grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-12">
          
          {/* Linke Spalte: Text und Buttons */}
          <div className="min-h-0 text-center lg:pr-8 lg:pt-4 lg:text-left xl:pt-8">
            <h1 className="mb-6 text-4xl font-bold leading-tight animate-fade-in-up md:mb-7 md:text-4xl lg:text-5xl">
              <span className="text-white">Mehr regionale Sichtbarkeit und passende Aufträge</span>
            </h1>

            <div className="mb-6 flex justify-center animate-fade-in-up animation-delay-100 lg:hidden">
              <div className="group relative w-full max-w-[440px]">
                <div className="pointer-events-none absolute inset-0 animate-pulse-glow rounded-full bg-white/10 blur-3xl" aria-hidden />
                <div className="animate-float transition-transform duration-500 group-hover:scale-[1.03]">
                  <Image
                    src="/hero-refernzen.png"
                    alt="Referenz-Websites auf Laptop-, Tablet- und Smartphone-Ansicht"
                    width={600}
                    height={450}
                    priority={true}
                    fetchPriority="high"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 0vw"
                    quality={80}
                    className="mx-auto h-auto w-full max-w-[92%] object-contain drop-shadow-[0_16px_28px_rgba(15,23,42,0.35)]"
                  />
                </div>
              </div>
            </div>

            <p className="mb-8 mx-auto hidden max-w-xl text-lg leading-relaxed text-blue-50/95 animate-fade-in-up animation-delay-100 sm:block md:text-xl lg:mx-0 lg:max-w-none">
              Warten Sie nicht auf Zufalls-Anfragen. Wir sorgen dafür, dass Ihr Betrieb in Darmstadt und Pfungstadt bei Google ganz oben steht, wenn Kunden nach Profis suchen.
            </p>
            <p className="mb-7 mx-auto max-w-[22rem] text-base leading-relaxed text-blue-50/95 animate-fade-in-up animation-delay-100 sm:hidden">
              Websites, Onlineshops und Systeme, die professionell aussehen und messbar mehr Anfragen bringen.
            </p>

            <div className="max-w-xl lg:max-w-none mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <div className="flex w-full flex-col items-center gap-3 sm:flex-row lg:w-auto lg:items-start">
                  <a
                    href="/kontakt"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-amber-300/70 bg-amber-400 px-7 py-3 text-base font-semibold text-slate-950 shadow-md shadow-amber-900/25 transition-all duration-300 group/btn hover:scale-[1.02] hover:bg-amber-500 hover:border-amber-200 active:scale-[0.98] will-change-transform sm:w-auto"
                    aria-label="Kostenlosen Angebot anfragen – zum Kontaktformular"
                  >
                    Kostenlosen Angebot anfragen
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/35 bg-transparent px-7 py-3 text-base font-semibold text-white/95 transition-all duration-300 hover:scale-[1.02] hover:bg-white/12 hover:text-white active:scale-[0.98] sm:w-auto"
                    aria-label="Kunden-Websites ansehen – zum Portfolio"
                  >
                    Kunden-Websites ansehen
                  </a>
                </div>
                <p className="text-center text-sm text-blue-100 lg:text-left">
                  Kurzer Anruf genügt:{' '}
                  <a
                    href="tel:+491773236454"
                    className="font-medium text-white underline-offset-2 hover:text-blue-100 hover:underline tabular-nums transition-colors"
                  >
                    +49 177 3236 454
                  </a>
                </p>
              </div>

            </div>
          </div>

          {/* Rechte Spalte: Porträtfoto unten bündig mit Sektionsende / Trust-Bar */}
          <div className="relative hidden min-h-0 w-full lg:flex lg:flex-col lg:justify-center lg:self-stretch">
            <div className="group relative flex w-full flex-1 min-h-0 items-center justify-center">
              <div className="pointer-events-none absolute inset-0 animate-pulse-glow rounded-full bg-white/10 blur-3xl" aria-hidden />
              <div className="animate-float transition-transform duration-500 group-hover:scale-[1.05]">
                <Image
                  src="/hero-refernzen.png"
                  alt="Referenz-Websites auf Laptop-, Tablet- und Smartphone-Ansicht"
                  width={600}
                  height={450}
                  priority={true}
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 0vw, (max-width: 1280px) 46vw, 600px"
                  quality={80}
                  className="h-auto max-h-[78%] w-auto max-w-[90%] object-contain drop-shadow-[0_20px_40px_rgba(15,23,42,0.35)]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Untere Bogen-Abrundung: fließender Übergang zur nächsten Sektion */}
      <div
        className="pointer-events-none absolute -bottom-14 left-1/2 h-14 w-[145%] -translate-x-1/2 bg-blue-600 md:-bottom-20 md:h-20 rounded-b-[100%]"
        aria-hidden
      />
    </section>
  )
}

