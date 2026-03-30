import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../../config/seo'

export const metadata: Metadata = getSeoMetadata(seoConfig.ueberMich)

export default function UberMichLayout({ children }: { children: React.ReactNode }) {
  return children
}
