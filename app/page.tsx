'use client'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WarumSection from './components/WarumSection'
import ProzessSection from './components/ProzessSection'
import LeistungenSection from './components/LeistungenSection'
import ProblemLoesungSection from './components/ProblemLoesungSection'
import PortfolioSection from './components/PortfolioSection'
import CTASection from './components/CTASection'
import FAQSection from './components/FAQSection'
import KontaktSection from './components/KontaktSection'
import Footer from './components/Footer'

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
