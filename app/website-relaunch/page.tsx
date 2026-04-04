import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { X } from 'lucide-react'
import { seoConfig, getSeoMetadata } from '../../config/seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import RelaunchProzessSection from '../components/RelaunchProzessSection'
import RelaunchDarmstadtExzellenzSection from '../components/RelaunchDarmstadtExzellenzSection'
import WebsiteRelaunchFaqJsonLd from '../components/WebsiteRelaunchFaqJsonLd'
import WebsiteRelaunchFaqSection from '../components/WebsiteRelaunchFaqSection'
import WebsiteRelaunchClosingCtaSection from '../components/WebsiteRelaunchClosingCtaSection'

const PortfolioSectionRedesign = dynamic(() => import('../components/PortfolioSectionRedesign'), { ssr: true })

export const metadata: Metadata = getSeoMetadata(seoConfig.websiteRelaunch)

const painPointItems: { text: React.ReactNode }[] = [
  {
    text: (
      <>
        Ihre Website lädt auf dem <strong>Smartphone</strong> viel zu langsam.
      </>
    ),
  },
  {
    text: <>Das Design wirkt, als wäre es vor 10 Jahren stehen geblieben.</>,
  },
  {
    text: (
      <>
        Bei <strong>Google</strong> finden Sie sich in <strong>Darmstadt</strong> nicht auf Seite 1.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Kein HTTPS</strong> — Der Browser warnt Besucher mit „Nicht sicher“.
      </>
    ),
  },
  {
    text: <>Kein Kontaktformular, das zuverlässig Anfragen zustellt.</>,
  },
  {
    text: <>Sie schämen sich fast, die URL an Kunden weiterzugeben.</>,
  },
]

export default function WebsiteRelaunchPage() {
  return (
    <>
      <WebsiteRelaunchFaqJsonLd />
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <section className="relative min-h-[52vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" aria-hidden />
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
            <div className="flex justify-center mb-8">
              <Breadcrumbs
                items={[
                  { name: 'Startseite', url: '/' },
                  { name: 'Relaunch', url: '/website-relaunch' },
                ]}
              />
            </div>
            <h1 className="mb-6 text-slate-900 leading-tight">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold">
                Website Relaunch Darmstadt –
              </span>
              <span className="mt-2 block text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
                Ihre alte Website kostet Sie täglich Kunden
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Als Webdesigner in Darmstadt modernisiere ich veraltete Websites in funktionierende digitale Werkzeuge – mit
              Next.js und lokalem SEO.
            </p>
          </div>
        </section>

        <section
          className="py-20 md:py-28 px-6 border-t border-red-100/80 bg-gradient-to-b from-rose-50/50 to-white"
          aria-labelledby="website-checkliste-heading"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="website-checkliste-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-5 leading-tight"
            >
              Erkennt sich Ihr Unternehmen hier wieder?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
              5–6 konkrete Warnsignale, dass Ihre aktuelle Website potenzielle Kunden in{' '}
              <strong className="font-semibold text-slate-800">Darmstadt</strong> eher abschreckt als gewinnt:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0" role="list">
              {painPointItems.map((item, index) => (
                <li
                  key={index}
                  className="group flex gap-4 rounded-xl border border-red-100 bg-white p-5 md:p-6 shadow-sm transition-all duration-200 hover:border-red-200/90 hover:shadow-md hover:bg-rose-50/30 min-h-[4.5rem] items-start"
                >
                  <span
                    className="flex-shrink-0 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-red-200/90 bg-red-50 text-red-600 shadow-sm"
                    aria-hidden
                  >
                    <X className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.5} />
                  </span>
                  <p className="text-base md:text-lg text-slate-800 leading-relaxed pt-0.5">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <RelaunchProzessSection />

        <PortfolioSectionRedesign />

        <RelaunchDarmstadtExzellenzSection />

        <WebsiteRelaunchFaqSection />

        <WebsiteRelaunchClosingCtaSection />
      </main>
      <Footer />
    </>
  )
}
