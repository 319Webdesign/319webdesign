'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import UeberMichSection from '../components/UeberMichSection'
import ProzessSection from '../components/ProzessSection'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

export default function UberMichPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden w-full bg-white">
        <section className="relative pt-20 pb-5 md:pt-24 md:pb-6 px-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-white" />
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30, 41, 59, 0.06) 0%, transparent 50%)',
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Über Mich', url: '/uber-mich' },
              ]}
            />
            <motion.div {...fadeInUp}>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">319Webdesign</p>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                Über Mich – Next.js Webdesigner aus Pfungstadt für Darmstadt & Südhessen
              </h1>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
                Wer ich bin, wofür ich stehe – und warum ich KMU und Immobilienmakler in Darmstadt, Pfungstadt und
                Südhessen beim Webdesign, der System-Integration und beim lokalen SEO begleite.
              </p>
            </motion.div>
          </div>
        </section>

        <UeberMichSection />

        <ProzessSection />
      </main>
      <Footer />
    </>
  )
}
