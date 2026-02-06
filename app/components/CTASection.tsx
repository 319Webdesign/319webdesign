'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Device Mockup */}
          <div className="relative flex justify-center items-center">
            <div className="relative animate-float">
              <div className="relative max-w-sm aspect-[9/16]">
                <Image
                  src="/319Web_Mockup_iphone.png"
                  alt="Webdesign Darmstadt und Pfungstadt – Responsive iPhone-Mockup, 319Webdesign"
                  width={384}
                  height={682}
                  sizes="(max-width: 768px) 300px, 384px"
                  quality={75}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl -z-10 animate-pulse-glow" />
              </div>
            </div>
          </div>

          {/* Right: Text & CTA */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Bereit für den{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  digitalen Vorsprung?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                Verlieren Sie keine Kunden mehr an die Konkurrenz. Lassen Sie uns gemeinsam Ihre Website modernisieren und Ihre Angebote überzeugend präsentieren.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="/kontakt"
                className="group relative inline-block hover:scale-105 active:scale-95 transition-transform duration-300 will-change-transform"
                aria-label="Zum Kontaktformular springen - Kostenloses Erstgespräch vereinbaren"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative px-8 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-md shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2">
                  Kostenloses Erstgespräch vereinbaren
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </div>
              </a>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-600 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                  <span>100% unverbindlich</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                  <span>Antwort innerhalb von 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

