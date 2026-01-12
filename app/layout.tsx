import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieBanner from './components/CookieBanner'
import WhatsAppButton from './components/WhatsAppButton'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
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
    <html lang="de" className={inter.variable}>
      <body className={`antialiased ${inter.className}`}>
        {children}
        <CookieBanner />
        <WhatsAppButton />
        <SpeedInsights />
      </body>
    </html>
  )
}

