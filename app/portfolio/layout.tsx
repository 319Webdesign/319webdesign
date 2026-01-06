import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webdesign Portfolio – Erfolgreiche Projekte | 319Webdesign',
  description: 'Ausgewählte Webdesign-Projekte: Wo Design auf Performance trifft. Erfolgreiche Case Studies für Handwerksbetriebe und Dienstleister.',
  openGraph: {
    title: 'Webdesign Portfolio – Erfolgreiche Projekte | 319Webdesign',
    description: 'Ausgewählte Webdesign-Projekte: Wo Design auf Performance trifft. Erfolgreiche Case Studies für Handwerksbetriebe und Dienstleister.',
    url: 'https://319webdesign.com/portfolio',
    siteName: '319Webdesign',
    images: [
      {
        url: '/319Web_Mockup_iphone.png',
        width: 1200,
        height: 630,
        alt: '319Webdesign Portfolio - Erfolgreiche Webdesign Projekte',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign Portfolio – Erfolgreiche Projekte | 319Webdesign',
    description: 'Ausgewählte Webdesign-Projekte: Wo Design auf Performance trifft.',
    images: ['/319Web_Mockup_iphone.png'],
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

