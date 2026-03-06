import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../../config/seo'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, Zap, Database, Users, Gauge, Check } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import Image from 'next/image'
import MaklerServiceSchema from '../components/MaklerServiceSchema'

const Header = dynamic(() => import('../components/Header'), { ssr: true })
const Footer = dynamic(() => import('../components/Footer'), { ssr: true })
const ProzessSection = dynamic(() => import('../components/ProzessSection'), { ssr: true })

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
              Webdesign für{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Immobilienmakler
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Automatisierte Objekt-Schnittstellen, mehr Eigentümer-Anfragen und maximale Performance durch High-End Webdesign.
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
                  Ihr{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Experte
                  </span>{' '}
                  für Immobilien-Automation
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                  Wir verbinden Ihre Makler-Software nahtlos mit einer hochperformanten Website – weniger Arbeit, mehr Mandate.
                </p>
                <ul className="space-y-8">
                  {maklerVorteile.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.title} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center">
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 mb-2"><strong>{item.title}</strong></p>
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
                      alt="Webdesign für Immobilienmakler in Darmstadt – Objekt-Schnittstelle onOffice Laptop"
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

        {/* Prozess – immobilienmacherspezifische Texte */}
        <ProzessSection citySlug="immobilienmakler" />

        {/* Unterstützte Softwares */}
        <section className="py-20 md:py-28 px-6 bg-[#fafafa]">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-slate-500 uppercase tracking-widest text-center mb-12">
              <strong>Unterstützte Softwares</strong>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {softwareLogos.map((item) => (
                <div
                  key={item.slug}
                  className="group flex items-center justify-center px-8 py-5 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-300 min-w-[160px]"
                >
                  <span
                    className="text-lg md:text-xl font-semibold text-slate-400 group-hover:text-blue-600 transition-colors duration-300"
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

        {/* Portfolio-Sektion – Immobilienmakler Referenzen */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-6 text-center">
              Digitale Maßarbeit für{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Immobilienmakler
              </span>
              :<br />
              Projekte, die Eigentümer überzeugen.
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
              Ein kleiner Einblick in meine Arbeit. Ich entwickle für meine Kunden nicht nur Webseiten, sondern digitale Verkaufsmaschinen mit direkter Software-Anbindung.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Premium-Immobilien Darmstadt',
                  kernleistung: 'Automatisierter Objekt-Import & Lead-Generierung',
                  badge: 'onOffice API',
                  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
                  details: [
                    { icon: Database, label: 'Schnittstelle: onOffice' },
                    { icon: Zap, label: 'Framework: Next.js' },
                    { icon: Gauge, label: 'Ladezeit: < 0.5s' },
                  ],
                },
                {
                  title: 'Immo-Partner Darmstadt',
                  kernleistung: 'FlowFact-Integration & Mandatsakquise',
                  badge: 'Custom SEO',
                  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
                  details: [
                    { icon: Database, label: 'Schnittstelle: FlowFact' },
                    { icon: Zap, label: 'Framework: Next.js' },
                    { icon: Gauge, label: 'Ladezeit: < 0.5s' },
                  ],
                },
                {
                  title: 'Objektportal Rhein-Main',
                  kernleistung: 'OpenImmo-Anbindung & Eigentümer-Portal',
                  badge: 'OpenImmo API',
                  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
                  details: [
                    { icon: Database, label: 'Schnittstelle: OpenImmo' },
                    { icon: Zap, label: 'Framework: Next.js' },
                    { icon: Gauge, label: 'Ladezeit: < 0.5s' },
                  ],
                },
              ].map((project) => (
                <article
                  key={project.title}
                  className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={`Referenz Webdesign für Immobilienmakler - ${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover-Overlay mit technischen Details */}
                    <div className="absolute inset-0 bg-slate-900/80 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ul className="space-y-2 text-sm text-white">
                        {project.details.map((d) => {
                          const Icon = d.icon
                          return (
                            <li key={d.label} className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden />
                              <span>{d.label}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3">
                      {project.badge}
                    </span>
                    <p className="text-lg font-bold text-slate-900 mb-2"><strong>{project.title}</strong></p>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.kernleistung}</p>
                    <p className="text-slate-400 text-xs mt-4 italic">Hier könnte bald Ihr Projekt stehen.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section – persönlich & konversionsstark */}
        <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 lg:gap-16 items-center">
              {/* Links: Profilbild – Kreis, 30% Spalte, links ausgerichtet */}
              <div className="flex justify-center md:justify-start order-2 md:order-1">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] ring-4 ring-white">
                  <Image
                    src="/maik-removebg.png"
                    alt="Maik Schmidt – Ihr Partner für Webdesign und Immobilien-Automation in Pfungstadt"
                    width={224}
                    height={224}
                    quality={90}
                    sizes="(max-width: 768px) 192px, 224px"
                    className="w-full h-full object-cover object-top bg-white/80"
                  />
                </div>
              </div>

              {/* Rechts: Text & CTA */}
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-6">
                  Lass uns dein Business gemeinsam auf das nächste Level heben.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Kein anonymes Call-Center, keine wechselnden Ansprechpartner. Ich begleite dich persönlich von der ersten Idee bis zur fertigen High-End-Website. Ich kümmere mich darum, dass die Technik läuft, damit du dich auf dein Kerngeschäft konzentrieren kannst.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    '100% persönliche Betreuung',
                    'Experten-Know-how in Next.js & API-Schnittstellen',
                    'Fokus auf echte Ergebnisse & Anfragen',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        <Check className="w-4 h-4" strokeWidth={2.5} aria-hidden />
                      </span>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 group"
                  >
                    Jetzt kostenloses Erstgespräch vereinbaren
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                  <p className="text-slate-500 text-sm mt-3">
                    Antwort meist innerhalb von 24 Stunden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
