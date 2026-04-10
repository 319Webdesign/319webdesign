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
    default: 'Webdesigner Darmstadt & Pfungstadt – Next.js',
  },
  description:
    'Webdesigner aus Pfungstadt für Darmstadt & Südhessen. Next.js-Websites für KMU, Handwerker & Makler. Persönlich vor Ort. Jetzt Erstgespräch.',
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
    icon: [{ url: '/319-favicon.png', type: 'image/png', sizes: '96x96' }],
    shortcut: '/319-favicon.png',
    apple: '/319-favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: baseUrl,
    siteName: '319Webdesign',
    title: 'Webdesigner Darmstadt & Pfungstadt – Next.js | 319Webdesign',
    description:
      'Webdesigner aus Pfungstadt für Darmstadt & Südhessen. Next.js-Websites für KMU, Handwerker & Makler. Persönlich vor Ort. Jetzt Erstgespräch.',
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
    title: 'Webdesigner Darmstadt & Pfungstadt – Next.js | 319Webdesign',
    description:
      'Webdesigner aus Pfungstadt für Darmstadt & Südhessen. Next.js-Websites für KMU, Handwerker & Makler. Persönlich vor Ort. Jetzt Erstgespräch.',
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
        <script
          defer
          src="https://www.319webdesign.de/pa.js"
          id="pianjs"
          data-code="fEQGR8BRgUl6cO0y1QD9XcQARtYFp1Ki"
          data-hit-endpoint="https://www.319webdesign.de/hit"
          data-event-endpoint="https://www.319webdesign.de/event"
          data-session-endpoint="https://www.319webdesign.de/session"
        />
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

