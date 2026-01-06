import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – Rechtliche Angaben | 319Webdesign',
  description: 'Impressum und rechtliche Angaben von 319Webdesign. Kontaktinformationen und gesetzliche Hinweise gemäß TMG.',
  openGraph: {
    title: 'Impressum – Rechtliche Angaben | 319Webdesign',
    description: 'Impressum und rechtliche Angaben von 319Webdesign. Kontaktinformationen und gesetzliche Hinweise gemäß TMG.',
    url: 'https://319webdesign.com/impressum',
    siteName: '319Webdesign',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

