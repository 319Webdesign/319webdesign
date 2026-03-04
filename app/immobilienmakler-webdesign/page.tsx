import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../../config/seo'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, Zap, Database, Users } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import Image from 'next/image'
import MaklerServiceSchema from '../components/MaklerServiceSchema'

const Header = dynamic(() => import('../components/Header'), { ssr: true })
const Footer = dynamic(() => import('../components/Footer'), { ssr: true })

export const metadata: Metadata = getSeoMetadata(seoConfig.immobilienmakler)

const maklerVorteile = [
  {
    icon: Database,
    title: 'Schnittstellen',
    text: 'Anbindung an onOffice, FlowFact & OpenImmo – Objekte automatisch synchronisiert, keine manuelle Pflege.',
  },
  {
    icon: Users,
    title: 'Eigentümer-Akquise',
    text: 'Klar strukturierte Anfrageformulare und Landingpages, die Vertrauen schaffen und mehr Mandatsanfragen generieren.',
  },
  {
    icon: Zap,
    title: 'Speed',
    text: 'Next.js-basierte Websites mit maximaler Performance – schnellere Ladezeiten, bessere Rankings, höhere Conversion.',
  },
]

const softwareLogos = [
  { name: 'onOffice', slug: 'onoffice' },
  { name: 'FlowFact', slug: 'flowfact' },
  { name: 'OpenImmo', slug: 'openimmo' },
]

export default function ImmobilienmaklerWebdesignPage() {
  return (
    <>
      <MaklerServiceSchema />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section – elegant, viel Weißraum */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#fafafa]" aria-hidden />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Immobilienmakler Webdesign', url: '/immobilienmakler-webdesign' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-8">
              Webdesign für Immobilienmakler in Hessen
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Webdesign für Immobilienmakler in Hessen: Automatisierte Objekt-Schnittstellen (onOffice, FlowFact), mehr Eigentümer-Anfragen und maximale Performance durch High-End Webdesign.
            </p>
          </div>
        </section>

        {/* Mehrwert-Sektion – Split-Layout */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Links: Text + Makler-Vorteile */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-6">
                  Ihr Expertenteam für Immobilien-Automation
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                  Wir verbinden Ihre Makler-Software nahtlos mit einer hochperformanten Website – weniger Arbeit, mehr Mandate.
                </p>
                <ul className="space-y-8">
                  {maklerVorteile.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.title} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{item.text}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Rechts: Laptop-Mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[560px]">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-slate-300/40 ring-1 ring-slate-200/80">
                    <Image
                      src="/expertenteam-laptop.png"
                      alt="Webdesign für Immobilienmakler in Darmstadt Hessen – Objekt-Schnittstelle onOffice Laptop"
                      width={560}
                      height={360}
                      quality={90}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                  {/* Dekorative Akzente */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-900/5 rounded-2xl -z-10" aria-hidden />
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-slate-900/3 rounded-3xl -z-10" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unterstützte Softwares */}
        <section className="py-20 md:py-28 px-6 bg-[#fafafa]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-500 uppercase tracking-widest text-center mb-12">
              Unterstützte Softwares
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {softwareLogos.map((item) => (
                <div
                  key={item.slug}
                  className="group flex items-center justify-center px-8 py-5 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-300 min-w-[160px]"
                >
                  <span
                    className="text-lg md:text-xl font-semibold text-slate-400 group-hover:text-slate-700 transition-colors duration-300"
                    aria-label={item.name}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-8 max-w-2xl mx-auto">
              Anbindung an Ihre bestehende Makler-Software – Objekte werden automatisch synchronisiert und sind stets aktuell.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
              Bereit für Ihre Makler-Website?
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Vereinbaren Sie ein unverbindliches Erstgespräch – wir zeigen Ihnen, wie Sie mit einer performanten Website mehr Mandate generieren.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-300 group"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
