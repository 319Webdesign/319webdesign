import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getSeoMetadata, seoConfig } from '../../config/seo'
import WebdesignHandwerkerServicePage from '../components/WebdesignHandwerkerServicePage'
import HandwerkerWebdesignFaqJsonLd from '../components/HandwerkerWebdesignFaqJsonLd'

const Header = dynamic(() => import('../components/Header'), { ssr: true })
const Footer = dynamic(() => import('../components/Footer'), { ssr: true })

export const metadata: Metadata = getSeoMetadata(seoConfig.webdesignHandwerker)

export default function WebdesignHandwerkerPage() {
  return (
    <>
      <HandwerkerWebdesignFaqJsonLd />
      <Header />
      <main className="min-h-screen bg-white text-slate-900 antialiased">
        <WebdesignHandwerkerServicePage />
      </main>
      <Footer />
    </>
  )
}
