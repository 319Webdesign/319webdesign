'use client'

import { motion } from 'framer-motion'
import { Zap, Search, Eye, Code, Palette, Smartphone, Globe, BarChart3, Lock, ArrowRight, Gauge, TrendingUp, Zap as ZapIcon, Gauge as GaugeIcon, Accessibility } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

// Benchmark Scores
const benchmarks = [
  { label: 'Leistung', value: 99, gradient: { from: 'rgb(59, 130, 246)', to: 'rgb(37, 99, 235)' }, textGradient: 'from-blue-400 to-blue-600' },
  { label: 'Barrierefreiheit', value: 92, gradient: { from: 'rgb(34, 211, 238)', to: 'rgb(6, 182, 212)' }, textGradient: 'from-cyan-400 to-cyan-600' },
  { label: 'Best Practices', value: 100, gradient: { from: 'rgb(34, 197, 94)', to: 'rgb(22, 163, 74)' }, textGradient: 'from-green-400 to-green-600' },
  { label: 'SEO', value: 100, gradient: { from: 'rgb(168, 85, 247)', to: 'rgb(147, 51, 234)' }, textGradient: 'from-purple-400 to-purple-600' },
]

// Circular Progress Component
function CircularProgress({ value, label, gradient, textGradient }: { value: number; label: string; gradient: { from: string; to: string }; textGradient: string }) {
  const circumference = 2 * Math.PI * 45 // radius = 45
  const offset = circumference - (value / 100) * circumference
  const gradientId = `gradient-${label.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div className="relative w-32 h-32 group">
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
        }}
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <svg className="transform -rotate-90 w-32 h-32" viewBox="0 0 100 100" aria-label={`${label}: ${value} Prozent`}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradient.from} />
            <stop offset="100%" stopColor={gradient.to} />
          </linearGradient>
        </defs>
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-slate-800"
        />
        {/* Progress Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke={`url(#${gradientId})`}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </svg>
      
      {/* Value Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className={`text-2xl font-bold bg-gradient-to-r ${textGradient} bg-clip-text text-transparent`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {value}
        </motion.span>
        <span className="text-xs text-slate-400 mt-1 text-center px-2">{label}</span>
      </div>
    </div>
  )
}

// Hauptleistungen - Fokus auf PageSpeed, SEO und Barrierefreiheit
const hauptleistungen = [
  {
    icon: Zap,
    title: 'PageSpeed Optimierung',
    description: 'Blitzschnelle Ladezeiten durch professionelle Performance-Optimierung. LCP unter 2,5 Sekunden garantiert.',
    details: [
      'Largest Contentful Paint (LCP) Optimierung',
      'Code-Splitting & Lazy Loading',
      'Bildoptimierung & WebP-Format',
      'CDN-Integration für globale Geschwindigkeit',
      'Caching-Strategien & Service Worker',
      'Minifizierung von CSS, JavaScript & HTML',
    ],
    color: 'blue',
  },
  {
    icon: Search,
    title: 'SEO Optimierung',
    description: 'Maximale Sichtbarkeit in Suchmaschinen durch technische und inhaltliche SEO-Strategien.',
    details: [
      'On-Page SEO & Meta-Optimierung',
      'Strukturierte Daten (Schema.org)',
      'XML-Sitemap & Robots.txt',
      'Lokale SEO für regionale Unternehmen',
      'Keyword-Recherche & Content-Strategie',
      'Technische SEO-Audits & Monitoring',
    ],
    color: 'purple',
  },
  {
    icon: Accessibility,
    title: 'Barrierefreiheit (WCAG 2.1)',
    description: 'Zugängliche Websites für alle Nutzer. WCAG 2.1 AA-konform mit Score von 92+ in Lighthouse.',
    details: [
      'Kontrastoptimierung (4.5:1 Minimum)',
      'Semantisches HTML & ARIA-Labels',
      'Tastatur-Navigation & Focus-Management',
      'Alt-Texte für alle Bilder',
      'Screenreader-Optimierung',
      'Mobile Accessibility & Touch-Targets',
    ],
    color: 'cyan',
  },
]

// Weitere Leistungen
const weitereLeistungen = [
  {
    icon: Code,
    title: 'Webentwicklung',
    description: 'Professionelle Umsetzung mit Next.js, React und modernsten Technologien.',
    details: [
      'Next.js & React Entwicklung',
      'TypeScript für Type-Safety',
      'API-Integration',
      'E-Commerce Lösungen',
    ],
  },
  {
    icon: Palette,
    title: 'Webdesign',
    description: 'Individuelle Designs, die Ihre Zielgruppe überzeugen. Optimiert für alle Endgeräte.',
    details: [
      'Responsive Design für alle Geräte',
      'Moderne UI/UX-Gestaltung',
      'Branding & Corporate Identity',
      'Wireframes & Prototyping',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Ihre Website ist auf allen Geräten perfekt optimiert und bietet eine herausragende Nutzererfahrung.',
    details: [
      'Responsive Breakpoints',
      'Touch-optimierte Bedienung',
      'Mobile Performance',
      'Progressive Web App (PWA)',
    ],
  },
  {
    icon: Globe,
    title: 'Content Management',
    description: 'Einfache Verwaltung Ihrer Inhalte mit benutzerfreundlichen CMS-Lösungen.',
    details: [
      'Headless CMS Setup',
      'Content-Strategie',
      'Redaktionsschulungen',
      'Automatische Updates',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Tracking',
    description: 'Datengetriebene Entscheidungen mit umfassenden Analysen und Reports.',
    details: [
      'Google Analytics 4 Setup',
      'Conversion-Tracking',
      'Performance-Monitoring',
      'Monatliche Reports',
    ],
  },
  {
    icon: Lock,
    title: 'Sicherheit',
    description: 'Schutz Ihrer Website und Daten mit modernsten Sicherheitsstandards.',
    details: [
      'SSL-Zertifikate',
      'Firewall & DDoS-Schutz',
      'Regelmäßige Sicherheitsaudits',
      'DSGVO-Konformität',
    ],
  },
]

export default function LeistungenPage() {
  const router = useRouter()

  const handleKontaktClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push('/#kontakt')
    // Scrollen nachdem die Seite geladen wurde
    setTimeout(() => {
      const element = document.querySelector('#kontakt')
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 300)
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section - High-Performance Web-Architektur */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background - Mesh Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-zinc-900" />
          
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30, 41, 59, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(15, 23, 42, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.10) 0%, transparent 50%), radial-gradient(circle at 20% 60%, rgba(30, 41, 59, 0.10) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30, 41, 59, 0.12) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05), transparent 70%)',
            }}
          />
        </div>

        <motion.div
          {...fadeInUp}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-balance"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              High-Performance
            </span>
            {' '}Web-Architektur
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 text-balance"
          >
            Optimiert für PageSpeed, SEO und Barrierefreiheit. Websites, die nicht nur aussehen, sondern auch performen und für alle zugänglich sind.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="/#kontakt"
              onClick={handleKontaktClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
                  '0 15px 35px -5px rgba(59, 130, 246, 0.6)',
                  '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 inline-flex items-center gap-2 group/btn"
              aria-label="Zum Kontaktformular springen - Projekt starten"
            >
              Projekt starten
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Benchmark Visualization Section */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unsere Performance-Benchmarks
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Messbare Ergebnisse in PageSpeed, SEO und Barrierefreiheit – Ihre Website von der Konkurrenz abheben.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {benchmarks.map((benchmark, index) => (
              <motion.div
                key={benchmark.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <CircularProgress
                  value={benchmark.value}
                  label={benchmark.label}
                  gradient={benchmark.gradient}
                  textGradient={benchmark.textGradient}
                />
              </motion.div>
            ))}
          </div>

          {/* Vercel Integration Info */}
          <motion.div
            {...fadeInUp}
            className="bg-slate-900/50 rounded-2xl border border-slate-800/50 p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <ZapIcon className="w-6 h-6 text-blue-500" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white">Gehostet auf Vercel</h3>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">
              Diese Website nutzt Vercels Edge-Netzwerk für optimale Performance weltweit. 
              Echtzeit-Monitoring und automatische Optimierungen sorgen für eine erstklassige User Experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speed Comparison Section */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Geschwindigkeit im Vergleich
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Unsere PageSpeed-Optimierungen im direkten Vergleich mit dem Branchendurchschnitt.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Performance */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/30 p-8 backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Gauge className="w-8 h-8 text-blue-400" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-white">Unsere Performance</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">Largest Contentful Paint (LCP)</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        1,72s
                      </span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                      />
                    </div>
                    <p className="text-sm text-green-400 mt-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" aria-hidden="true" />
                      Exzellent - Unter 2,5s
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Industry Average */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-8 h-8 text-slate-400" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-white">Branchendurchschnitt</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300">Largest Contentful Paint (LCP)</span>
                    <span className="text-2xl font-bold text-slate-400">
                      4,2s
                    </span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full w-[60%]" />
                  </div>
                  <p className="text-sm text-yellow-400 mt-2">
                    Durchschnittlich - Über 2,5s
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-12 text-center"
          >
            <p className="text-lg text-slate-400">
              <span className="text-blue-400 font-semibold">59% schneller</span> als der Branchendurchschnitt
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hauptleistungen Section - PageSpeed, SEO, Barrierefreiheit */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unsere Kernkompetenzen
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Spezialisiert auf PageSpeed-Optimierung, SEO und Barrierefreiheit – die drei Säulen einer erfolgreichen Website.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {hauptleistungen.map((item, index) => {
              const IconComponent = item.icon
              const colorClasses = {
                blue: 'bg-blue-500/10 group-hover:bg-blue-500/20 text-blue-500',
                purple: 'bg-purple-500/10 group-hover:bg-purple-500/20 text-purple-500',
                cyan: 'bg-cyan-500/10 group-hover:bg-cyan-500/20 text-cyan-500',
              }
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)]" />
                  </div>

                  <div className="relative z-10">
                    <div className={`flex items-center justify-center w-16 h-16 ${colorClasses[item.color as keyof typeof colorClasses]} rounded-xl mb-6 transition-colors duration-300 mx-auto md:mx-0`}>
                      <IconComponent className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white text-center md:text-left">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6 text-center md:text-left">{item.description}</p>
                    
                    <ul className="space-y-2 text-center md:text-left">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm text-slate-300 justify-center md:justify-start">
                          <span className={`${colorClasses[item.color as keyof typeof colorClasses].split(' ')[2]} mt-1`}>•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Weitere Leistungen Grid */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Weitere Leistungen
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Von der Entwicklung bis zur Wartung – alles aus einer Hand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weitereLeistungen.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-xl mb-6 group-hover:bg-blue-500/20 transition-colors duration-300 mx-auto md:mx-0">
                    <IconComponent className="w-8 h-8 text-blue-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center md:text-left">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 text-center md:text-left">{item.description}</p>
                  
                  <ul className="space-y-2 text-center md:text-left">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-slate-300 justify-center md:justify-start">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Bereit für High-Performance?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Optimieren Sie Ihre Website für PageSpeed, SEO und Barrierefreiheit. Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/#kontakt"
                onClick={handleKontaktClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
                    '0 15px 35px -5px rgba(59, 130, 246, 0.4)',
                    '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="group relative inline-block"
                aria-label="Zum Kontaktformular springen - Kostenloses Erstgespräch vereinbaren"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative px-8 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-md shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2">
                  Kostenloses Erstgespräch vereinbaren
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </motion.a>
              <Link
                href="/portfolio"
                className="px-8 py-4 border border-slate-600 text-slate-200 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
              >
                Portfolio ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
