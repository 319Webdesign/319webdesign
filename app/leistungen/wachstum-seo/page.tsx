import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../../../config/seo'
import Breadcrumbs from '../../components/Breadcrumbs'
import SeoDeepDive from './SeoDeepDive'
import LocalVisibility from './LocalVisibility'
import MonitoringGrowth from './MonitoringGrowth'

export const metadata: Metadata = getSeoMetadata(seoConfig.seo)

export default function WachstumSeoPage() {
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
                { name: 'Wachstum & SEO', url: '/leistungen/wachstum-seo' },
              ]}
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Wachstum & SEO
            </span>{' '}
            – Mehr Sichtbarkeit, mehr Kunden
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Ihre Website auf Wachstumskurs bringen
          </p>
        </div>
      </section>

      {/* SEO Deep Dive Section */}
      <SeoDeepDive />

      {/* Lokale Sichtbarkeit Section */}
      <LocalVisibility />

      {/* Messbarer Erfolg: Monitoring & Wachstum */}
      <MonitoringGrowth />
    </main>
  )
}
