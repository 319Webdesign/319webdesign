import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../config/seo'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

// Code-Splitting: Below-the-fold Sektionen dynamisch laden (weniger initiales JS, besseres LCP)
const UeberMichSection = dynamic(() => import('./components/UeberMichSection'), { ssr: true })
const WarumSection = dynamic(() => import('./components/WarumSection'), { ssr: true })
const ProzessSection = dynamic(() => import('./components/ProzessSection'), { ssr: true })
const InvestmentSection = dynamic(() => import('./components/InvestmentSection'), { ssr: true })
const LeistungenSection = dynamic(() => import('./components/LeistungenSection'), { ssr: true })
const GoogleReviewsSection = dynamic(() => import('./components/GoogleReviewsSection'), { ssr: true })
const PortfolioSection = dynamic(() => import('./components/PortfolioSection'), { ssr: true })
const CTASection = dynamic(() => import('./components/CTASection'), { ssr: true })
const FAQSection = dynamic(() => import('./components/FAQSection'), { ssr: true })
const KontaktSection = dynamic(() => import('./components/KontaktSection'), { ssr: true })
const Footer = dynamic(() => import('./components/Footer'), { ssr: true })

export const metadata: Metadata = getSeoMetadata(seoConfig.home)

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Header />
      <HeroSection />
      <WarumSection />
      <LeistungenSection />
      <UeberMichSection />
      <ProzessSection />
      <InvestmentSection />
      <GoogleReviewsSection />
      <PortfolioSection />
      <CTASection />
      <FAQSection />
      <KontaktSection />
      <Footer />
    </main>
  )
}
