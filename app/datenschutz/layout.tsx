import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../../config/seo'

export const metadata: Metadata = getSeoMetadata(seoConfig.datenschutz)

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

