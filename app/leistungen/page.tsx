import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, Search, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leistungen | Webdesign, SEO & Wartung in Südhessen',
  description:
    'Professionelles Webdesign, SEO-Optimierung und Website-Wartung für Unternehmen in Darmstadt, Pfungstadt und Südhessen.',
  openGraph: {
    title: 'Leistungen | Webdesign, SEO & Wartung in Südhessen',
    description:
      'Professionelles Webdesign, SEO-Optimierung und Website-Wartung für Unternehmen in Darmstadt, Pfungstadt und Südhessen.',
    url: 'https://319webdesign.com/leistungen',
    siteName: '319Webdesign',
    locale: 'de_DE',
    type: 'website',
  },
}

const leistungen = [
  {
    slug: 'webdesign',
    icon: Zap,
    title: 'Webdesign',
    subtitle: 'High-Performance Websites, die verkaufen',
    description:
      'Moderne, blitzschnelle Websites mit PageSpeed-Scores von 99/100. Perfekt für Kleinunternehmen in Südhessen.',
    features: [
      'PageSpeed 99/100',
      'Mobile-First Design',
      'SEO-optimiert',
      'Conversion-optimiert',
    ],
    color: 'blue',
  },
  {
    slug: 'seo',
    icon: Search,
    title: 'SEO-Optimierung',
    subtitle: 'Mehr Sichtbarkeit bei Google',
    description:
      'Technische und inhaltliche SEO-Optimierung mit lokalem Fokus auf Darmstadt, Pfungstadt und Südhessen.',
    features: [
      'Technisches SEO',
      'Keyword-Strategie',
      'Lokales SEO',
      'Monatliche Reports',
    ],
    color: 'green',
  },
  {
    slug: 'wartung',
    icon: Settings,
    title: 'Website-Wartung',
    subtitle: 'Immer aktuell und sicher',
    description:
      'Professionelle Wartung und Support für Ihre Website. Updates, Backups, Security – damit Sie sich aufs Geschäft konzentrieren können.',
    features: [
      'Regelmäßige Updates',
      'Tägliche Backups',
      'Security-Monitoring',
      'Schneller Support',
    ],
    color: 'purple',
  },
]

const colorClasses = {
  blue: {
    gradient: 'from-blue-500/10 to-blue-600/5',
    border: 'border-blue-500/30 hover:border-blue-500/50',
    text: 'text-blue-400',
    bg: 'bg-blue-500',
  },
  green: {
    gradient: 'from-green-500/10 to-green-600/5',
    border: 'border-green-500/30 hover:border-green-500/50',
    text: 'text-green-400',
    bg: 'bg-green-500',
  },
  purple: {
    gradient: 'from-purple-500/10 to-purple-600/5',
    border: 'border-purple-500/30 hover:border-purple-500/50',
    text: 'text-purple-400',
    bg: 'bg-purple-500',
  },
}

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-zinc-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Leistungen für Ihr{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              digitales Wachstum
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            Webdesign, SEO und Wartung – alles aus einer Hand in Südhessen
          </p>
        </div>
      </section>

      {/* Leistungen Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leistungen.map((leistung) => {
              const Icon = leistung.icon
              const colors = colorClasses[leistung.color as keyof typeof colorClasses]

              return (
                <Link
                  key={leistung.slug}
                  href={`/leistungen/${leistung.slug}`}
                  className={`group bg-gradient-to-br ${colors.gradient} rounded-2xl p-8 border ${colors.border} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h2 className={`text-2xl font-bold mb-2 ${colors.text}`}>
                    {leistung.title}
                  </h2>
                  <p className="text-lg text-slate-300 mb-4">
                    {leistung.subtitle}
                  </p>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {leistung.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {leistung.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className={`inline-flex items-center gap-2 ${colors.text} font-semibold group-hover:gap-3 transition-all`}>
                    Mehr erfahren
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Nicht sicher, welche Leistung Sie brauchen?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie ich
            Ihnen helfen kann.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
          >
            Kostenlose Erstberatung vereinbaren
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/491773236454"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp kontaktieren"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </main>
  )
}
