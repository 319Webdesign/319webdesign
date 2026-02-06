import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import './globals.css'
import OrganizationSchema from './components/OrganizationSchema'
import ProfessionalServiceSchema from './components/ProfessionalServiceSchema'
// Schwere/ nicht-SEO-Komponenten erst clientseitig laden → schnelleres SSR, bessere TTFB
const CookieBanner = dynamic(() => import('./components/CookieBanner'), { ssr: false })
const WhatsAppButton = dynamic(() => import('./components/WhatsAppButton'), { ssr: false })
import SiteNavigationSchema from './components/SiteNavigationSchema'
import ReducedMotionProvider from './components/ReducedMotionProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://319webdesign.com'),
  title: '319Webdesign - Digitale Exzellenz für Ihr Business',
  description: 'Professionelle Webdesign-Lösungen für kleine Unternehmen und Selbstständige. Moderne, responsive Websites die verkaufen.',
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
        </ReducedMotionProvider>
      </body>
    </html>
  )
}

