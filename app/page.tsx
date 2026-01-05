'use client'

import dynamic from 'next/dynamic'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

// Lazy load components that are not above the fold
// SEO-relevant components keep SSR, animation-heavy components disable SSR
const WarumSection = dynamic(() => import('./components/WarumSection'), {
  ssr: true,
})
const ProzessSection = dynamic(() => import('./components/ProzessSection'), {
  ssr: true,
})
const LeistungenSection = dynamic(() => import('./components/LeistungenSection'), {
  ssr: true,
})
const ProblemLoesungSection = dynamic(() => import('./components/ProblemLoesungSection'), {
  ssr: true,
})
const PortfolioSection = dynamic(() => import('./components/PortfolioSection'), {
  ssr: false, // Animation-heavy, can be client-only
})
const CTASection = dynamic(() => import('./components/CTASection'), {
  ssr: true,
})
const FAQSection = dynamic(() => import('./components/FAQSection'), {
  ssr: true,
})
const KontaktSection = dynamic(() => import('./components/KontaktSection'), {
  ssr: true,
})
const Footer = dynamic(() => import('./components/Footer'), {
  ssr: true,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WarumSection />
      <ProzessSection />
      <LeistungenSection />
      <ProblemLoesungSection />
      <PortfolioSection />
      <CTASection />
      <FAQSection />
      <KontaktSection />
      <Footer />
    </main>
  )
}
