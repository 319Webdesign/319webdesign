import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../../../config/seo'
import Link from 'next/link'
import { ArrowRight, Palette, Smartphone, Search, TrendingUp } from 'lucide-react'
import Breadcrumbs from '../../components/Breadcrumbs'
import PerformanceComparison from './PerformanceComparison'
import NextJsEngine from './NextJsEngine'
import LaunchFoundation from './LaunchFoundation'

export const metadata: Metadata = getSeoMetadata(seoConfig.launch)

export default function WebdesignLaunchPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="flex justify-center mb-8">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Leistungen', url: '/leistungen' },
                { name: 'Webdesign & Launch', url: '/leistungen/webdesign-launch' },
              ]}
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Kein <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Standard-Webdesign</span>. Ein Raketenstart für Ihr Business in Darmstadt.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Von der ersten Idee bis zum erfolgreichen Launch
          </p>
        </div>
      </section>

      {/* Launch Foundation Section */}
      <LaunchFoundation />

      {/* Performance Comparison Section */}
      <PerformanceComparison />

      {/* Inkludierte Leistungen Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              Inkludierte Leistungen im{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Launch-Paket
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Alles was Sie für einen erfolgreichen Start benötigen – komplett aus einer Hand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Design */}
            <div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors mx-auto">
                <Palette className="w-7 h-7 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Individuelles UI/UX Design
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Keine 08/15 Templates. Wir entwickeln ein Design, das Ihre Marke in Darmstadt einzigartig macht.
              </p>
            </div>

            {/* Card 2: Mobile */}
            <div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors mx-auto">
                <Smartphone className="w-7 h-7 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Mobile First Optimierung
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Perfekte Darstellung auf allen Endgeräten – für Kunden, die Sie von unterwegs in Darmstadt oder Frankfurt finden.
              </p>
            </div>

            {/* Card 3: SEO */}
            <div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors mx-auto">
                <Search className="w-7 h-7 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                SEO-Grundkonfiguration
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Wir legen den technischen Grundstein, damit Ihre Seite von Anfang an von Google in Darmstadt verstanden wird.
              </p>
            </div>

            {/* Card 4: Conversion */}
            <div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors mx-auto">
                <TrendingUp className="w-7 h-7 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Verkaufspsychologische Struktur
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Wir platzieren Kontaktmöglichkeiten so, dass aus Besuchern echte Anfragen für Ihr Business werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next.js Engine Section */}
      <NextJsEngine />

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-3xl rounded-full" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Glassmorphism Container */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200 p-8 md:p-12 lg:p-16 shadow-2xl">
            {/* Content */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                Bereit für Ihren{' '}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  digitalen Erfolg
                </span>{' '}
                in Darmstadt?
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Lassen Sie uns gemeinsam ein technisches Fundament bauen, das Ihre Konkurrenz in Darmstadt und Umgebung hinter sich lässt.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/kontakt"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 group"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 hover:bg-slate-50 transition-all duration-300"
              >
                Portfolio ansehen
              </Link>
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-slate-700 font-medium">
                  100% Performance-Fokus
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-slate-700 font-medium">
                  Persönlich in Südhessen
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <p className="text-slate-700 font-medium">
                  Next.js & React Expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            Weitere Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/leistungen/wachstum-seo"
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                Wachstum & SEO
              </h3>
              <p className="text-slate-600 group-hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </p>
            </Link>
            <Link
              href="/leistungen/strategische-begleitung"
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                Strategische Begleitung
              </h3>
              <p className="text-slate-600 group-hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/491773236454"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp kontaktieren"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </main>
  )
}
