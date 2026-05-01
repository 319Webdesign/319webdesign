import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../config/seo'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ClientTrustBar from './components/ClientTrustBar'

// Code-Splitting: Below-the-fold Sektionen dynamisch laden (weniger initiales JS, besseres LCP)
const MehrwertSection = dynamic(() => import('./components/MehrwertSection'), { ssr: true })
const SolutionFocusCtaSection = dynamic(() => import('./components/SolutionFocusCtaSection'), { ssr: true })
const GoogleReviewsSection = dynamic(() => import('./components/GoogleReviewsSection'), { ssr: true })
const PortfolioSection = dynamic(() => import('./components/PortfolioSection'), { ssr: true })
const FAQSection = dynamic(() => import('./components/FAQSection'), { ssr: true })
const KontaktSection = dynamic(() => import('./components/KontaktSection'), { ssr: true })
const Footer = dynamic(() => import('./components/Footer'), { ssr: true })
const VorteileWebsiteSection = dynamic(() => import('./components/VorteileWebsiteSection'), { ssr: true })
const Warum319EntscheidungSection = dynamic(() => import('./components/Warum319EntscheidungSection'), {
  ssr: true,
})

export const metadata: Metadata = getSeoMetadata(seoConfig.home)

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full min-w-0">
        <HeroSection />
        <ClientTrustBar />
        <VorteileWebsiteSection />
        <Warum319EntscheidungSection />
        <PortfolioSection />
        <GoogleReviewsSection />
        <SolutionFocusCtaSection />
        <MehrwertSection />
        <FAQSection />
        <KontaktSection />
        <Footer />
      </main>
    </>
  )
}
