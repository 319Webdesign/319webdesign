import type { Metadata } from 'next'
import { seoConfig, getSeoMetadata } from '../../config/seo'

export const metadata: Metadata = getSeoMetadata(seoConfig.portfolio)

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

