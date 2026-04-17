import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../config/seo'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ClientTrustBar from './components/ClientTrustBar'

// Code-Splitting: Below-the-fold Sektionen dynamisch laden (weniger initiales JS, besseres LCP)
const Warum319WebdesignSection = dynamic(() => import('./components/Warum319WebdesignSection'), { ssr: true })
const MehrwertSection = dynamic(() => import('./components/MehrwertSection'), { ssr: true })
const InvestmentSection = dynamic(() => import('./components/InvestmentSection'), { ssr: true })
const LeistungenSection = dynamic(() => import('./components/LeistungenSection'), { ssr: true })
const SolutionFocusCtaSection = dynamic(() => import('./components/SolutionFocusCtaSection'), { ssr: true })
const MaklerProblemLoesungSection = dynamic(() => import('./components/MaklerProblemLoesungSection'), { ssr: true })
const GoogleReviewsSection = dynamic(() => import('./components/GoogleReviewsSection'), { ssr: true })
const PortfolioSection = dynamic(() => import('./components/PortfolioSection'), { ssr: true })
const CTASection = dynamic(() => import('./components/CTASection'), { ssr: true })
const FAQSection = dynamic(() => import('./components/FAQSection'), { ssr: true })
const KontaktSection = dynamic(() => import('./components/KontaktSection'), { ssr: true })
const Footer = dynamic(() => import('./components/Footer'), { ssr: true })

export const metadata: Metadata = getSeoMetadata(seoConfig.home)

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden w-full">
        <HeroSection />
        <ClientTrustBar />
        <Warum319WebdesignSection />
        <PortfolioSection />
        <GoogleReviewsSection />
        <LeistungenSection />
        <SolutionFocusCtaSection />
        <MaklerProblemLoesungSection />
        <MehrwertSection />
        <InvestmentSection />
        <CTASection />
        <FAQSection />
        <KontaktSection />
        <Footer />
      </main>
    </>
  )
}
