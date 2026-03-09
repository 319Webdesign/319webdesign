import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../../config/seo'
import ContactPageSchema from '../components/ContactPageSchema'

export const metadata: Metadata = getSeoMetadata(seoConfig.kontakt)

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ContactPageSchema />
      {children}
    </>
  )
}
