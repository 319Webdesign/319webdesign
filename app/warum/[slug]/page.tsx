import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap, Search, Smartphone } from 'lucide-react'
import { notFound } from 'next/navigation'
import Breadcrumbs from '../../components/Breadcrumbs'

type WarumSlug = 'umsatzstark' | 'blitzschnell' | 'lokal'

const warumPages: Record<
  WarumSlug,
  {
    title: string
    metaTitle: string
    metaDescription: string
    tagline: string
    intro: string
    problem: { title: string; description: string }
    solution: { title: string; description: string }
    features: string[]
    icon: 'zap' | 'search' | 'smartphone'
    related: { slug: WarumSlug; title: string }[]
  }
> = {
  umsatzstark: {
    title: 'Umsatzstark',
    metaTitle: 'Umsatzstark durch Speed | Schnelle Websites in Südhessen',
    metaDescription:
      'Mit 1,72s Ladezeit sind Sie schneller als 95% Ihrer Konkurrenz. Kunden gewinnen statt warten lassen – Webdesign für Darmstadt, Pfungstadt und Südhessen.',
    tagline: 'Kunden gewinnen statt warten lassen.',
    intro:
      'Jede Sekunde Ladezeit kostet Conversions. Eine schnelle Website überzeugt Besucher und rankt besser bei Google – gerade in Ihrer Region.',
    problem: {
      title: 'Das Problem',
      description:
        'Langsame Websites verlieren Besucher und Kunden. Studien zeigen: Bereits nach 3 Sekunden Ladezeit brechen über die Hälfte der Nutzer ab. Ihre Konkurrenz in Darmstadt und Pfungstadt gewinnt, wenn Ihre Seite hakt.',
    },
    solution: {
      title: 'Meine Lösung',
      description:
        'Ich baue Websites mit durchschnittlich 1,72s Ladezeit (LCP). Damit sind Sie schneller als 95% Ihrer Konkurrenz in der Region. Moderne Technik, schlanker Code und optimierte Bilder – Ihre Seite wird zum Verkaufsmotor.',
    },
    features: [
      'Ladezeit von durchschnittlich 1,72 Sekunden (LCP)',
      'Schneller als 95% der Konkurrenz in der Region',
      'Bessere Google-Rankings durch Core Web Vitals',
      'Weniger Absprünge, mehr Kontaktanfragen',
      'Technologie: Next.js, optimierte Assets, CDN-ready',
    ],
    icon: 'zap',
    related: [
      { slug: 'blitzschnell', title: 'Blitzschnell' },
      { slug: 'lokal', title: 'Lokal' },
    ],
  },
  blitzschnell: {
    title: 'Blitzschnell',
    metaTitle: 'Bei Google gefunden | SEO Pfungstadt & Umgebung',
    metaDescription:
      'Wir bringen Ihr Business in Pfungstadt und Umgebung bei Google ganz nach oben. Gefunden werden, wenn es zählt – lokale SEO für Südhessen.',
    tagline: 'Gefunden werden, wenn es zählt.',
    intro:
      'Sichtbarkeit bei Google entscheidet über Kundenanfragen. Mit lokaler SEO und technischer Optimierung bringen wir Sie in Pfungstadt, Darmstadt und Südhessen nach vorne.',
    problem: {
      title: 'Das Problem',
      description:
        'Ohne gute Platzierung bei Google bleiben Sie unsichtbar. Potenzielle Kunden suchen nach Ihren Leistungen – finden aber zuerst die Konkurrenz. Gerade lokal in Pfungstadt und Umgebung zählt jede Position.',
    },
    solution: {
      title: 'Meine Lösung',
      description:
        'Technische SEO, lokale Optimierung und zielgerichtete Inhalte: So bringen wir Ihr Business in Pfungstadt und Umgebung bei Google ganz nach oben. Sie werden gefunden, wenn Kunden suchen.',
    },
    features: [
      'Lokales SEO für Pfungstadt, Darmstadt und Südhessen',
      'Technische SEO (Core Web Vitals, PageSpeed)',
      'Google Business Profile & lokale Suchergebnisse',
      'Keyword-Optimierung für Ihre Branche',
      'Transparente Auswertung und Anpassung',
    ],
    icon: 'search',
    related: [
      { slug: 'umsatzstark', title: 'Umsatzstark' },
      { slug: 'lokal', title: 'Lokal' },
    ],
  },
  lokal: {
    title: 'Lokal',
    metaTitle: 'Perfekt auf jedem Smartphone | Mobile-First Webdesign',
    metaDescription:
      '80% Ihrer Kunden suchen mobil. Wir sorgen dafür, dass der erste Eindruck sitzt – responsive Webdesign für Unternehmen in Darmstadt, Pfungstadt und Südhessen.',
    tagline: 'Perfekt auf jedem Smartphone.',
    intro:
      'Die meisten Menschen suchen heute mit dem Smartphone. Wenn Ihre Website auf dem Handy nicht überzeugt, verlieren Sie Kunden – oft an die Konkurrenz vor Ort.',
    problem: {
      title: 'Das Problem',
      description:
        'Viele Websites sind am Desktop gedacht und auf dem Smartphone nur mühsam nutzbar. Kleine Schrift, lange Ladezeiten, umständliche Buttons. 80% Ihrer potenziellen Kunden surfen mobil – und brechen ab, wenn es nicht passt.',
    },
    solution: {
      title: 'Meine Lösung',
      description:
        'Mobile-First bedeutet: Die Website wird zuerst fürs Smartphone gebaut. Schnell, übersichtlich, mit dem richtigen ersten Eindruck. So sitzt der Kontakt – in Darmstadt, Pfungstadt und überall in Südhessen.',
    },
    features: [
      'Mobile-First Design für alle Geräte',
      'Touch-optimierte Buttons und Navigation',
      'Schnelle Ladezeiten auch auf mobilen Netzen',
      'Erster Eindruck, der überzeugt und zum Handeln führt',
      'Einheitliches Erlebnis von Smartphone bis Desktop',
    ],
    icon: 'smartphone',
    related: [
      { slug: 'umsatzstark', title: 'Umsatzstark' },
      { slug: 'blitzschnell', title: 'Blitzschnell' },
    ],
  },
}

const iconMap = {
  zap: Zap,
  search: Search,
  smartphone: Smartphone,
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const page = warumPages[params.slug as WarumSlug]
  if (!page) {
    return { title: 'Seite nicht gefunden | 319Webdesign' }
  }
  const canonicalUrl = `https://319webdesign.com/warum/${params.slug}`
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: '319Webdesign',
      locale: 'de_DE',
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(warumPages).map((slug) => ({ slug }))
}

export default function WarumPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as WarumSlug
  const page = warumPages[slug]

  if (!page) notFound()

  const IconComponent = iconMap[page.icon]

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="flex justify-center mb-8">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Warum moderne Website', url: '/#benefits' },
                { name: page.title, url: `/warum/${slug}` },
              ]}
            />
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 leading-tight">
            {page.title}
          </h1>
          <p className="text-xl text-blue-600 mb-4">{page.tagline}</p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{page.intro}</p>
        </div>
      </section>

      {/* Problem / Lösung */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold mb-4 text-red-500">
                {page.problem.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {page.problem.description}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                {page.solution.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {page.solution.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
            Das bekommen Sie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-500/50 transition-colors"
              >
                <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Bereit für Ihre moderne Website?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie wir
            Sie in der Region voranbringen.
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

      {/* Weitere Themen */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            Weitere Themen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.related.map((item) => (
              <Link
                key={item.slug}
                href={`/warum/${item.slug}`}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 mt-1 inline-flex items-center gap-2 group-hover:text-slate-900 transition-colors">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
