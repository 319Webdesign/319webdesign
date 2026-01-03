import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  )
}

