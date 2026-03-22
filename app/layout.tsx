import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import './globals.css'
import { baseUrl } from '../config/seo'
import OrganizationSchema from './components/OrganizationSchema'
import ProfessionalServiceSchema from './components/ProfessionalServiceSchema'
// Schwere/ nicht-SEO-Komponenten erst clientseitig laden → schnelleres SSR, bessere TTFB
const CookieBanner = dynamic(() => import('./components/CookieBanner'), { ssr: false })
const WhatsAppButton = dynamic(() => import('./components/WhatsAppButton'), { ssr: false })
import SiteNavigationSchema from './components/SiteNavigationSchema'
import ReducedMotionProvider from './components/ReducedMotionProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | 319Webdesign',
    default: 'Webdesign & SEO in Darmstadt und Pfungstadt – 319Webdesign',
  },
  description: 'Professionelles Webdesign und SEO für Unternehmen in der Region Darmstadt und Pfungstadt. Schnelle Websites, lokale Sichtbarkeit und Immobilien-Automation für Makler.',
  keywords: ['Webdesign', 'SEO', 'Darmstadt', 'Pfungstadt', 'Website', 'Suchmaschinenoptimierung', 'Immobilienmakler', 'KMU'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: baseUrl,
    siteName: '319Webdesign',
    title: 'Webdesign & SEO in Darmstadt und Pfungstadt – 319Webdesign',
    description: 'Professionelles Webdesign und SEO für Unternehmen in der Region Darmstadt und Pfungstadt. Schnelle Websites, lokale Sichtbarkeit und Immobilien-Automation für Makler.',
    images: [
      {
        url: '/319Web_Mockup_iphone.png',
        width: 1200,
        height: 630,
        alt: '319Webdesign',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign & SEO in Darmstadt und Pfungstadt – 319Webdesign',
    description: 'Professionelles Webdesign und SEO für Unternehmen in der Region Darmstadt und Pfungstadt.',
  },
  icons: {
    icon: '/browser-logo.png',
    shortcut: '/browser-logo.png',
    apple: '/browser-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <ProfessionalServiceSchema />
        <SiteNavigationSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`antialiased ${inter.className}`} suppressHydrationWarning>
        <ReducedMotionProvider>
          {children}
          <CookieBanner />
          <WhatsAppButton />
          <SpeedInsights />
          <Analytics />
        </ReducedMotionProvider>
      </body>
    </html>
  )
}

