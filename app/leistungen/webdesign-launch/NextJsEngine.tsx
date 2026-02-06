'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Layers, Shield } from 'lucide-react'

export default function NextJsEngine() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Layers,
      title: 'Server-Side Rendering (SSR)',
      subtitle: 'High-End Webentwicklung Darmstadt',
      description: 'Ihre Seite ist sofort da. Keine weißen Bildschirme, kein Warten – perfekt für mobile Nutzer in Darmstadt.',
      codeSnippet: `export async function 
  getServerSideProps() {
  return { props: {} }
}`,
      highlight: false,
    },
    {
      icon: Code2,
      title: 'Image-Optimization',
      subtitle: 'Performance Webdesign Darmstadt',
      description: 'Wir laden Bilder nur in der Größe, die wirklich gebraucht wird. Das spart Datenvolumen und bringt den 99/100 Score.',
      codeSnippet: `<Image
  src="/hero.jpg"
  width={1920}
  height={1080}
  priority
/>`,
      highlight: true,
    },
    {
      icon: Shield,
      title: 'Sicherheit',
      subtitle: 'Sichere Websites Darmstadt',
      description: 'Da kein klassisches Backend angegriffen werden kann, ist Ihre Seite praktisch immun gegen typische Hacker-Angriffe.',
      codeSnippet: `// Statisch generiert
// Kein Backend
// Keine SQL-Injection`,
      highlight: false,
    },
  ]

  return (
    <section 
      ref={ref}
      className="py-20 px-6 bg-slate-900 relative overflow-hidden"
      aria-label="Next.js Technologie Vorteile für Webdesign in Darmstadt"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-400 font-semibold mb-4 text-lg"
          >
            Warum wir anders bauen: Die Next.js Engine
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Technik, die verkauft: Warum{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Next.js
            </span>{' '}
            Ihr unfairer Vorteil in Darmstadt ist.
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto">
            90% der Webseiten in Darmstadt basieren auf alten Systemen wie Standard-WordPress, 
            die oft langsam und unsicher sind. Mit Next.js setzen wir auf moderne Technologie, 
            die Ihnen echte Wettbewerbsvorteile verschafft.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group ${
                  feature.highlight ? 'ring-2 ring-blue-500/20' : ''
                }`}
              >
                {/* Performance Glow for highlighted feature */}
                {feature.highlight && (
                  <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-blue-400" aria-hidden="true" />
                  </div>

                  {/* Title with keyword */}
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-blue-400 mb-4 font-medium">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Code Snippet */}
                  <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700/50 font-mono text-sm overflow-x-auto">
                    <pre className="text-green-400 whitespace-pre">
                      <code>{feature.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-slate-300 text-sm font-medium">
              Produktionsreife Enterprise-Technologie, genutzt von Netflix, Nike und Twitch
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
