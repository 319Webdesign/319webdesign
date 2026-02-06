import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../../config/seo'

export const metadata: Metadata = getSeoMetadata(seoConfig.impressum)

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

