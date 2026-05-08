import Image from 'next/image'
import Link from 'next/link'
import {
  Building2,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  Lightbulb,
  MapPin,
  MessageCircle,
  Search,
  Sparkles,
  Users,
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'

const trustPoints = ['Persönlicher Ansprechpartner', 'Next.js, SEO & Performance', 'Fokus auf lokale Unternehmen']

const values = [
  {
    icon: MessageCircle,
    title: 'Klarheit statt Fachchinesisch',
    text: 'Sie wissen jederzeit, was gemacht wird, warum es wichtig ist und welchen Nutzen es für Ihr Unternehmen hat.',
  },
  {
    icon: Gauge,
    title: 'Performance statt Baukasten',
    text: 'Ich setze auf moderne Technik, schnelle Ladezeiten und saubere Strukturen statt auf austauschbare Standard-Vorlagen.',
  },
  {
    icon: Users,
    title: 'Persönlich statt anonym',
    text: 'Sie sprechen direkt mit mir - ohne wechselnde Ansprechpartner, unnötige Umwege oder Agentur-Massenabfertigung.',
  },
]

const workflowSteps = [
  {
    icon: Search,
    number: '01',
    title: 'Verstehen',
    text: 'Wir klären Ziele, Zielgruppe, aktuelle Website-Situation und Ihre wichtigsten Anforderungen.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategie',
    text: 'Ich entwickle eine klare Struktur für Design, Inhalte, SEO und Nutzerführung.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Umsetzung',
    text: 'Ihre Website wird modern, schnell und suchmaschinenfreundlich umgesetzt.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Optimierung',
    text: 'Nach dem Launch optimiere ich Performance, Sichtbarkeit und Kontaktpunkte weiter.',
  },
]

const regions = [
  { label: 'Pfungstadt', href: '/webdesign/pfungstadt' },
  { label: 'Darmstadt', href: '/webdesign/darmstadt' },
  { label: 'Griesheim', href: '/webdesign/griesheim' },
  { label: 'Weiterstadt', href: '/webdesign/weiterstadt' },
  { label: 'Südhessen', href: '/webdesign/suedhessen' },
  { label: 'Rhein-Main', href: '/webdesign/rhein-main' },
]

const expertiseBlocks = [
  {
    icon: Building2,
    title: 'Webdesign & Nutzerführung',
    text: 'Klare Websites, die Besucher verstehen und zur Anfrage führen.',
  },
  {
    icon: Code2,
    title: 'Next.js & Performance',
    text: 'Schnelle, moderne Websites mit sauberer technischer Grundlage.',
  },
  {
    icon: Globe2,
    title: 'Lokale SEO',
    text: 'Struktur, Inhalte und Technik für bessere Sichtbarkeit in Darmstadt und der Region.',
  },
]

const techBadges = ['Next.js', 'React', 'Local SEO', 'PageSpeed', 'DSGVO', 'Core Web Vitals']

const projectCards = [
  {
    name: 'Heinerfilm',
    benefit: 'Moderner Auftritt mit klarer Positionierung und professionellem Erstkontakt.',
    href: '/portfolio',
  },
  {
    name: 'da-sound',
    benefit: 'Schnelle Website mit besserer Nutzerführung für mehr qualifizierte Anfragen.',
    href: '/portfolio',
  },
  {
    name: 'HE immologis',
    benefit: 'Vertrauensstarker Webauftritt für Immobilien-Dienstleistungen in der Region.',
    href: '/portfolio',
  },
  {
    name: 'Tierhotel Rhein-Main',
    benefit: 'Lokale Sichtbarkeit und klare Conversion für planbare Kontaktanfragen.',
    href: '/portfolio',
  },
]

export default function UberMichPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden bg-white pt-24 text-slate-900 antialiased">
        <section className="relative overflow-hidden pb-12 pt-8 md:pb-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" />
            <div className="absolute -right-24 top-14 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-7">
              <Breadcrumbs
                items={[
                  { name: 'Startseite', url: '/' },
                  { name: 'Über Mich', url: '/uber-mich' },
                ]}
              />
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <div className="max-w-2xl">
                <p className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                  Persönliches Webdesign aus Pfungstadt
                </p>
                <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-5xl">
                  Ich bin Maik - Webdesigner aus Pfungstadt für Unternehmen in Darmstadt & Südhessen
                </h1>
                <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                  Mit 319Webdesign helfe ich lokalen Unternehmen, professioneller aufzutreten, besser gefunden zu
                  werden und über ihre Website mehr Anfragen zu gewinnen.
                </p>

                <ul className="mt-7 space-y-3 text-sm font-medium text-slate-700 md:text-base">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/kontakt"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-[0_16px_32px_-20px_rgba(37,99,235,0.95)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
                  >
                    Kostenloses Erstgespräch sichern
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-base font-semibold text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50 sm:w-auto"
                  >
                    Projekte ansehen
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-sky-300/10 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-blue-100/90 bg-white/80 p-4 shadow-[0_30px_90px_-42px_rgba(30,64,175,0.6)] backdrop-blur-sm">
                  <div className="overflow-hidden rounded-[1.5rem] border border-blue-100 bg-slate-100">
                    <Image
                      src="/maik.webp"
                      alt="Maik Schmidt, Webdesigner aus Pfungstadt für Webdesign Darmstadt und Südhessen"
                      width={900}
                      height={1180}
                      className="h-auto w-full object-cover"
                      priority
                      sizes="(max-width: 1024px) 90vw, 520px"
                    />
                  </div>
                  <div className="pointer-events-none absolute left-5 top-6 rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                    Webdesigner aus Pfungstadt
                  </div>
                  <div className="pointer-events-none absolute right-5 top-20 rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                    Seit 2023
                  </div>
                  <div className="pointer-events-none absolute bottom-24 left-6 rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                    Next.js & lokale SEO
                  </div>
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    Persönliche Betreuung statt Agentur-Massenabfertigung.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-start gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Warum ich 319Webdesign gegründet habe
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                Viele lokale Unternehmen leisten hervorragende Arbeit - aber ihre Website zeigt das nicht. Genau hier
                setzt 319Webdesign an: moderne Websites, klare Inhalte und lokale Sichtbarkeit, ohne komplizierte
                Agenturprozesse oder unnötiges Fachchinesisch.
              </p>
            </div>
            <aside className="rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 shadow-[0_22px_70px_-44px_rgba(59,130,246,0.8)]">
              <p className="text-4xl leading-none text-blue-300" aria-hidden="true">
                "
              </p>
              <p className="mt-3 text-lg font-semibold leading-relaxed text-slate-800">
                Mein Ziel: Websites bauen, die nicht nur gut aussehen, sondern Vertrauen schaffen, gefunden werden und
                echte Anfragen bringen.
              </p>
            </aside>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Wofür 319Webdesign steht
            </h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="group rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-[0_16px_52px_-36px_rgba(30,64,175,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_60px_-34px_rgba(37,99,235,0.45)]"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-slate-600">{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              So arbeite ich mit Ihnen zusammen
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 md:text-lg">
              Klare Schritte, transparente Kommunikation und eine Website, die zu Ihrem Unternehmen passt.
            </p>

            <div className="relative mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div className="pointer-events-none absolute left-10 right-10 top-11 hidden border-t border-dashed border-blue-200 lg:block" />
              {workflowSteps.map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-[0_14px_45px_-32px_rgba(15,23,42,0.55)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex rounded-xl bg-gradient-to-br from-amber-300 to-amber-400 p-3 text-slate-900">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold text-blue-600">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Aus Pfungstadt. Für Darmstadt, Südhessen und lokale Unternehmen.
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-600 md:text-lg">
              Ich arbeite bewusst regional, weil direkte Kommunikation, kurze Wege und Verständnis für den lokalen
              Markt einen echten Unterschied machen. Besonders Unternehmen aus Pfungstadt, Darmstadt, Griesheim,
              Weiterstadt und Südhessen profitieren von persönlicher Betreuung und lokaler SEO-Strategie.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {regions.map((region) => (
                <Link
                  key={region.label}
                  href={region.href}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {region.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Technik, Design und SEO aus einer Hand
            </h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {expertiseBlocks.map((block) => (
                <article
                  key={block.title}
                  className="rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-[0_16px_52px_-36px_rgba(30,64,175,0.55)]"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                    <block.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{block.title}</h3>
                  <p className="mt-3 text-slate-600">{block.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Unternehmen, die bereits mit 319Webdesign gearbeitet haben
            </h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {projectCards.map((project) => (
                <article
                  key={project.name}
                  className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_-34px_rgba(15,23,42,0.45)]"
                >
                  <div className="mb-4 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                    {project.name}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{project.benefit}</p>
                  <Link
                    href={project.href}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Projekt ansehen <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 pt-12 md:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700 p-7 text-white shadow-[0_35px_90px_-44px_rgba(30,64,175,0.9)] md:p-12">
              <div className="pointer-events-none absolute -left-12 top-8 h-36 w-36 rounded-full bg-blue-300/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-4 h-32 w-32 rounded-full bg-amber-300/20 blur-3xl" />

              <div className="relative max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Lassen Sie uns herausfinden, was Ihre Website besser machen kann.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-blue-100 md:text-lg">
                  In einem kostenlosen Erstgespräch schauen wir gemeinsam, wo Ihr Unternehmen aktuell steht und welche
                  Lösung sinnvoll ist.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-[0_18px_35px_-20px_rgba(251,191,36,0.8)] transition-colors hover:bg-amber-300 sm:w-auto"
                >
                  Erstgespräch vereinbaren
                </Link>
                <p className="mt-4 text-sm font-medium text-blue-100">Persönlich · transparent · unverbindlich</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
