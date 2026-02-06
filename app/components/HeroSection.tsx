'use client'

import { ArrowDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Linke Spalte: Text und Buttons */}
          <div className="text-center lg:text-left lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Webdesign Pfungstadt
              </span>
              <br className="hidden lg:block" />
              <span className="text-slate-900">Websites, die verkaufen.</span>
            </h1>
          
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl lg:max-w-none animate-fade-in-up animation-delay-100">
            Vergessen Sie langsame Websites, die niemand findet. Wir bieten kleinen Unternehmen und Selbstständigen in Hessen High-Performance Webdesign, das bei Google ganz oben steht und Ihre Zielgruppe durch Geschwindigkeit und Design zu zahlenden Kunden macht.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-2 animate-fade-in-up animation-delay-200">
              <a
                href="/kontakt"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 inline-flex items-center gap-2 group/btn hover:scale-105 active:scale-95 will-change-transform"
                aria-label="Zum Kontaktformular springen - Projekt starten"
              >
                Projekt starten
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </a>
              <a
                href="#benefits"
                className="px-8 py-4 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 inline-flex items-center gap-2 group/btn2 hover:scale-105 active:scale-95 will-change-transform"
                aria-label="Zu den Vorteilen scrollen - Mehr erfahren"
              >
                Mehr erfahren
                <ArrowDown className="w-4 h-4 group-hover/btn2:translate-y-1 transition-transform duration-300" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Rechte Spalte: Porträtfoto */}
          <div className="relative hidden lg:flex justify-end items-end h-full">
            <div className="relative w-full h-[650px] flex items-end justify-end">
              <Image
                src="/maik-removebg.png"
                alt="Webdesign Darmstadt und Pfungstadt – Maik Schmidt, Webdesign-Experte 319Webdesign"
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

