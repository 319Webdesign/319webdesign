import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
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

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | 319Webdesign',
    default: 'Webdesign Darmstadt & Pfungstadt',
  },
  description:
    'Webdesign und SEO in Darmstadt & Pfungstadt: Next.js-Websites mit lokaler Suchmaschinenoptimierung, schnell und klar. Aus Pfungstadt – persoenlich vor Ort. Jetzt Erstgespraech.',
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
    title: 'Webdesign Darmstadt & Pfungstadt | 319Webdesign',
    description:
      'Webdesign und SEO in Darmstadt & Pfungstadt: Next.js-Websites mit lokaler Suchmaschinenoptimierung, schnell und klar. Aus Pfungstadt – persoenlich vor Ort. Jetzt Erstgespraech.',
    images: [
      {
        url: '/319Web_Mockup_iphone.png',
        width: 1200,
        height: 630,
        alt:
          '319Webdesign – Webdesign und Suchmaschinenoptimierung in Darmstadt, Pfungstadt und Suedhessen (Next.js)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign Darmstadt & Pfungstadt | 319Webdesign',
    description:
      'Webdesign und SEO in Darmstadt & Pfungstadt: Next.js-Websites mit lokaler Suchmaschinenoptimierung, schnell und klar. Aus Pfungstadt – persoenlich vor Ort. Jetzt Erstgespraech.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <ProfessionalServiceSchema />
        <SiteNavigationSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          src="https://api.pirsch.io/pa.js"
          id="pianjs"
          data-code="vJWT37N3h190aNHNNLe4ZWy9zexmJm6H"
        />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
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

