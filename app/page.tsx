import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

// Lazy load components that are not above the fold
// SEO-relevant components keep SSR, animation-heavy components disable SSR
const UeberMichSection = dynamic(() => import('./components/UeberMichSection'), {
  ssr: true,
})
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
      <ProblemLoesungSection />
      <PortfolioSection />
      <CTASection />
      <FAQSection />
      <KontaktSection />
      <Footer />
    </main>
  )
}
