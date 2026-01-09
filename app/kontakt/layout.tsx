import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt – Lass uns dein Projekt starten | 319Webdesign',
  description: 'Kontaktiere deine Webdesign Agentur in Pfungstadt, Darmstadt und Südhessen. Wir helfen dir dabei, online sichtbar zu werden und neue Kunden zu gewinnen.',
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
