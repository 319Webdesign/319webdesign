import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../../../config/seo'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react'
import Breadcrumbs from '../../components/Breadcrumbs'

export const metadata: Metadata = getSeoMetadata(seoConfig.wartung)

const sorglosFeatures = [
  'Wöchentliche Sicherheits-Updates',
  'Tägliche Backups',
  'Performance-Check (99/100 Monitoring)',
  'Persönlicher Support in Südhessen',
]

export default function StrategischeBegleitungPage() {
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
                { name: 'Strategische Begleitung', url: '/leistungen/strategische-begleitung' },
              ]}
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Sicherheit & Wachstum:
            </span>{' '}
            Ihre Seite in besten Händen.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Damit Ihr Business in Darmstadt und Pfungstadt dauerhaft performt, kümmere ich mich um die Technik im Hintergrund.
          </p>
        </div>
      </section>

      {/* Sorglos-Features */}
      <section className="py-20 px-6 bg-white" aria-label="Sorglos-Features der strategischen Begleitung">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900">
            Damit Sie sich auf Ihr Business konzentrieren können
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Technik und Sicherheit übernehme ich – Sie behalten die Kontrolle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorglosFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative flex-shrink-0 mt-0.5">
                  <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CheckCircle2
                    className="w-6 h-6 text-blue-600 relative z-10"
                    aria-hidden="true"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))',
                    }}
                  />
                </div>
                <p className="text-lg font-medium text-slate-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive: Warum Wartung? */}
      <section className="py-20 px-6 bg-slate-50" aria-label="Warum professionelle Website-Wartung">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Warum Wartung?
            </h2>
          </div>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Eine Seite, die <strong>einfach nur online ist</strong>, verliert mit der Zeit an Geschwindigkeit,
              wird anfällig für Angriffe und sackt in den Google-Rankings ab. Updates fehlen, Backups gibt es
              nicht – und wenn etwas passiert, steht plötzlich alles still.
            </p>
            <p>
              Eine Seite, die <strong>aktiv gepflegt wird</strong>, bleibt schnell, sicher und suchmaschinenfreundlich.
              Regelmäßige Wartung hält Ihr Google-Ranking in Darmstadt stabil, schützt vor Ausfällen und
              sorgt dafür, dass Ihre Kunden jederzeit eine zuverlässige Erfahrung haben – ohne dass Sie
              sich um Technik kümmern müssen.
            </p>
            <p className="text-slate-600">
              Mit professioneller Wartung investieren Sie in langfristigen Erfolg, nicht nur in eine
              einmalige Website.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-3xl rounded-full" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200 p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                Bereit für Ihre{' '}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  langfristige Betreuung
                </span>{' '}
                in Darmstadt?
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Lassen Sie uns in einem unverbindlichen Gespräch klären, wie Ihre Website sicher und performant bleibt.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/kontakt"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 group"
              >
                Jetzt Beratungsgespräch für Ihre langfristige Betreuung vereinbaren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
              <Link
                href="/leistungen"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 hover:bg-slate-50 transition-all duration-300"
              >
                Alle Leistungen
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <p className="text-slate-700 font-medium">Sicherheits-Updates</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <p className="text-slate-700 font-medium">Performance 99/100</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <p className="text-slate-700 font-medium">Persönlich in Südhessen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
