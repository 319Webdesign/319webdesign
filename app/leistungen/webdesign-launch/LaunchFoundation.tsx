'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function LaunchFoundation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [typedCode, setTypedCode] = useState('')

  const codeSnippet = `export default async function Page() {
  // Server-Side Rendering
  const data = await fetchData()
  
  return (
    <OptimizedImage
      src="/hero.jpg"
      width={1920}
      height={1080}
      priority
      alt="Webdesign Darmstadt"
    />
  )
}`

  useEffect(() => {
    if (!isInView) {
      setTypedCode('')
      return
    }

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= codeSnippet.length) {
        setTypedCode(codeSnippet.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [isInView])

  const benefits = [
    {
      text: 'Klare Struktur für maximale Conversions in der Region Südhessen.',
    },
    {
      text: 'Next.js Performance: Blitzschnell auf dem Luisenplatz oder im Büro.',
    },
    {
      text: 'SEO-Ready: Technische Architektur für Top-Rankings in Darmstadt.',
    },
    {
      text: 'Sicher & DSGVO-konform durch statische Generierung (SSG).',
    },
  ]

  return (
    <section 
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      aria-label="Launch-Fundament Technologie für Webdesign in Darmstadt"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-600 font-semibold mb-4 text-lg"
            >
              Die Basis Ihres Erfolgs
            </motion.p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Technik, die{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Darmstadt bewegt:
              </span>{' '}
              Ihr Launch-Fundament
            </h2>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Moderne Webentwicklung für Unternehmen, die nicht nur online sein wollen, 
              sondern online wachsen möchten.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CheckCircle2 
                      className="w-6 h-6 text-blue-600 relative z-10" 
                      aria-hidden="true"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
                      }}
                    />
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {benefit.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-2 relative"
          >
            {/* Floating Lighthouse Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-6 -right-6 z-20 bg-gradient-to-br from-green-400 to-green-600 text-white px-6 py-3 rounded-full shadow-2xl border-4 border-white"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="font-bold text-sm whitespace-nowrap">
                  Lighthouse Score: 99/100
                </span>
              </div>
            </motion.div>

            {/* Code Window with Glassmorphism */}
            <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl p-1 shadow-2xl border border-white/60">
              {/* Window Header */}
              <div className="bg-slate-900 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-slate-400 text-sm ml-4 font-mono">
                  page.tsx
                </span>
              </div>

              {/* Code Content */}
              <div className="bg-slate-950 rounded-b-xl p-6 font-mono text-sm overflow-hidden">
                <pre className="text-slate-300 leading-relaxed">
                  <code>
                    {typedCode.split('\n').map((line, i) => (
                      <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
                        {line === '' ? '\u00A0' : (
                          <>
                            <span className="text-slate-600 select-none mr-4">
                              {String(i + 1).padStart(2, ' ')}
                            </span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: line
                                  .replace(/export|default|async|function|const|await|return/g, '<span style="color: #c678dd">$&</span>')
                                  .replace(/Page|fetchData|OptimizedImage/g, '<span style="color: #61afef">$&</span>')
                                  .replace(/src|width|height|priority|alt/g, '<span style="color: #e5c07b">$&</span>')
                                  .replace(/"([^"]*)"/g, '<span style="color: #98c379">"$1"</span>')
                                  .replace(/\/\/.*/g, '<span style="color: #5c6370">$&</span>')
                              }}
                            />
                          </>
                        )}
                      </div>
                    ))}
                    <span className="inline-block w-2 h-5 bg-blue-500 animate-pulse ml-1" />
                  </code>
                </pre>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-slate-400 px-4 py-2 rounded-full text-xs font-mono shadow-lg border border-slate-700 whitespace-nowrap">
                ⚡ Next.js 14 • TypeScript • Server Components
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl -z-10 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
