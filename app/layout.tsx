import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import './globals.css'
import { baseUrl, seoKeywordsBase } from '../config/seo'
import OrganizationSchema from './components/OrganizationSchema'
import ProfessionalServiceSchema from './components/ProfessionalServiceSchema'
// Client-Komponenten mit SSR laden, damit Server-HTML und erste Client-Paint übereinstimmen (keine Hydration-Mismatches durch ssr: false).
const CookieBanner = dynamic(() => import('./components/CookieBanner'), { ssr: true })
const WhatsAppButton = dynamic(() => import('./components/WhatsAppButton'), { ssr: true })
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
    default: 'Webdesign & System-Integration in Südhessen',
  },
  description:
    'Behalten Sie Ihr System, ich upgrade das Design. Webdesign Darmstadt & Pfungstadt: Next.js, onOffice-Anbindung, lokales SEO für KMU & Makler in Südhessen.',
  keywords: [...seoKeywordsBase],
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
  icons: {
    icon: [{ url: '/319-favicon.png', type: 'image/png' }],
    shortcut: '/319-favicon.png',
    apple: '/319-favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: baseUrl,
    siteName: '319Webdesign',
    title: 'Webdesign & System-Integration Darmstadt & Pfungstadt | 319Webdesign',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Next.js Webdesign, onOffice & Buchungstools, lokales SEO für KMU und Immobilienmakler in Südhessen.',
    images: [
      {
        url: '/319Web_Mockup_iphone.png',
        width: 1200,
        height: 630,
        alt:
          '319Webdesign – High-Performance Next.js Webdesign und System-Integration für Darmstadt, Pfungstadt und Südhessen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign & System-Integration Darmstadt & Pfungstadt | 319Webdesign',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Next.js, onOffice-Anbindung, lokales SEO – Darmstadt, Pfungstadt, Südhessen.',
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
        </ReducedMotionProvider>
      </body>
    </html>
  )
}

