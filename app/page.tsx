import type { Metadata } from 'next'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import UeberMichSection from './components/UeberMichSection'
import WarumSection from './components/WarumSection'
import ProzessSection from './components/ProzessSection'
import LeistungenSection from './components/LeistungenSection'
import GoogleReviewsSection from './components/GoogleReviewsSection'
import ProblemLoesungSection from './components/ProblemLoesungSection'
import PortfolioSection from './components/PortfolioSection'
import CTASection from './components/CTASection'
import FAQSection from './components/FAQSection'
import KontaktSection from './components/KontaktSection'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Webdesign & SEO – Conversion-Optimierung | 319Webdesign',
  description: 'Professionelles Webdesign mit SEO-Optimierung für kleine Unternehmen. Moderne Websites die verkaufen und mehr Kunden gewinnen.',
  openGraph: {
    title: 'Webdesign & SEO – Conversion-Optimierung | 319Webdesign',
    description: 'Professionelles Webdesign mit SEO-Optimierung für kleine Unternehmen. Moderne Websites die verkaufen und mehr Kunden gewinnen.',
    url: 'https://319webdesign.com',
    siteName: '319Webdesign',
    images: [
      {
        url: '/319Web_Mockup_iphone.png',
        width: 1200,
        height: 630,
        alt: '319Webdesign - Professionelles Webdesign und SEO',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign & SEO – Conversion-Optimierung | 319Webdesign',
    description: 'Professionelles Webdesign mit SEO-Optimierung für kleine Unternehmen.',
    images: ['/319Web_Mockup_iphone.png'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Header />
      <HeroSection />
      <UeberMichSection />
      <WarumSection />
      <ProzessSection />
      <LeistungenSection />
      <GoogleReviewsSection />
      <ProblemLoesungSection />
      <PortfolioSection />
      <CTASection />
      <FAQSection />
      <KontaktSection />
      <Footer />
    </main>
  )
}
