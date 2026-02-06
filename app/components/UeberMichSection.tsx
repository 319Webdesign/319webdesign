'use client'

import { motion } from 'framer-motion'
import { useReduceMotion } from './ReducedMotionProvider'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function UeberMichSection() {
  const reduceMotion = useReduceMotion()
  const WrapEl = reduceMotion ? 'div' : motion.div
  const wrapProps = reduceMotion ? { className: 'relative' } : { ...fadeInUp, className: 'relative' }
  const textWrapProps = reduceMotion ? { className: 'space-y-6' } : { ...fadeInUp, transition: { delay: 0.2 }, className: 'space-y-6' }
  const btnWrapProps = reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 } }
  const BtnEl = reduceMotion ? 'div' : motion.div
  const btnProps = reduceMotion ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, animate: { boxShadow: ['0 10px 25px -5px rgba(59, 130, 246, 0.5)', '0 15px 35px -5px rgba(59, 130, 246, 0.6)', '0 10px 25px -5px rgba(59, 130, 246, 0.5)' ] }, transition: { boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' } } }

  return (
    <section className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bild links */}
          <WrapEl {...wrapProps}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-blue-500/20">
              <Image
                src="/maik.webp"
                alt="Maik Schmidt – Webdesign Darmstadt und Pfungstadt, Ihr Partner für digitales Wachstum in Südhessen"
                width={600}
                height={800}
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              {/* Dekorativer Glow-Effekt */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Zusätzlicher Glow für extra Effekt */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/5 blur-2xl -z-10 scale-105" />
          </WrapEl>

          {/* Text rechts */}
          <WrapEl {...textWrapProps}>
            {/* Große Haupt-Headline */}
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-slate-900">
              Strategische <span className="text-blue-600">Partnerschaft</span> für digitales Wachstum in Hessen
            </h2>

            {/* Prägnanter Text */}
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Ich bin nicht nur Ihr Webdesigner – ich bin Ihr Partner für nachhaltigen digitalen Erfolg. Von meinem Standort in Pfungstadt aus begleite ich Unternehmen in ganz Hessen dabei, ihre Website von einer digitalen Visitenkarte in eine echte Verkaufsmaschine zu verwandeln. Mein Fokus liegt dabei nicht auf kurzfristigen Projekten, sondern auf einer langfristigen Zusammenarbeit, um Ihren Webauftritt kontinuierlich zu optimieren und Ihre Geschäftsziele messbar zu erreichen.
              </p>
              
              <p>
                Mit High-End-Technologien wie Next.js erreiche ich Performance-Scores von 99/100, die Ihre Konkurrenz technisch im Rückspiegel lassen. Ob in Darmstadt, Frankfurt oder Kassel: Ich unterstütze den hessischen Mittelstand dabei, online nicht nur sichtbar zu sein, sondern durch Geschwindigkeit und Strategie dauerhaft neue Kunden zu gewinnen.
              </p>
            </div>

            {/* Call-to-Action Button */}
            <BtnEl {...btnWrapProps}>
              <Link href="#prozess">
                <BtnEl {...btnProps} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 group/btn cursor-pointer" aria-label="Mehr über die Arbeitsweise erfahren">
                  Mehr über meine Arbeitsweise
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </BtnEl>
              </Link>
            </BtnEl>
          </WrapEl>
        </div>
      </div>
    </section>
  )
}
