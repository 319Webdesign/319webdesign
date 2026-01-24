import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt – Lass uns dein Projekt starten | 319Webdesign',
  description: 'Kontaktiere deine Webdesign Agentur in Pfungstadt, Darmstadt und Südhessen. Wir helfen dir dabei, online sichtbar zu werden und neue Kunden zu gewinnen.',
  openGraph: {
    title: 'Kontakt – Lass uns dein Projekt starten | 319Webdesign',
    description: 'Kontaktiere deine Webdesign Agentur in Pfungstadt, Darmstadt und Südhessen. Kostenloses Erstgespräch und transparente Beratung.',
    url: 'https://319webdesign.com/kontakt',
    siteName: '319Webdesign',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
