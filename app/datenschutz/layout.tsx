import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz – DSGVO-konform | 319Webdesign',
  description: 'Datenschutzerklärung von 319Webdesign. Informationen zur Datenverarbeitung gemäß DSGVO und Ihren Rechten als Nutzer.',
  openGraph: {
    title: 'Datenschutz – DSGVO-konform | 319Webdesign',
    description: 'Datenschutzerklärung von 319Webdesign. Informationen zur Datenverarbeitung gemäß DSGVO und Ihren Rechten als Nutzer.',
    url: 'https://319webdesign.com/datenschutz',
    siteName: '319Webdesign',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

