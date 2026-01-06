import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webdesign Leistungen – PageSpeed & SEO | 319Webdesign',
  description: 'High-Performance Webdesign mit PageSpeed-Optimierung, SEO und Barrierefreiheit. Websites die performen und für alle zugänglich sind.',
  openGraph: {
    title: 'Webdesign Leistungen – PageSpeed & SEO | 319Webdesign',
    description: 'High-Performance Webdesign mit PageSpeed-Optimierung, SEO und Barrierefreiheit. Websites die performen und für alle zugänglich sind.',
    url: 'https://319webdesign.com/leistungen',
    siteName: '319Webdesign',
    images: [
      {
        url: '/319Web_Mockup_iphone.png',
        width: 1200,
        height: 630,
        alt: '319Webdesign Leistungen - PageSpeed, SEO und Barrierefreiheit',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign Leistungen – PageSpeed & SEO | 319Webdesign',
    description: 'High-Performance Webdesign mit PageSpeed-Optimierung, SEO und Barrierefreiheit.',
    images: ['/319Web_Mockup_iphone.png'],
  },
}

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

