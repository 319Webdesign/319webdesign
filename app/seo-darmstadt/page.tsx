import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { getSeoMetadata, seoConfig } from '../../config/seo'
import Breadcrumbs from '../components/Breadcrumbs'
import SeoDarmstadtWarumSection from '../components/SeoDarmstadtWarumSection'
import SeoDarmstadtFeatureCards from '../components/SeoDarmstadtFeatureCards'
import SeoDarmstadtRegionalSection from '../components/SeoDarmstadtRegionalSection'
import SeoDarmstadtFaqTrustSection from '../components/SeoDarmstadtFaqTrustSection'
import SeoDarmstadtClosingCtaSection from '../components/SeoDarmstadtClosingCtaSection'

const Header = dynamic(() => import('../components/Header'), { ssr: true })
const Footer = dynamic(() => import('../components/Footer'), { ssr: true })

export const metadata: Metadata = getSeoMetadata(seoConfig.seoDarmstadt)

const faqItems = [
  {
    question: 'Lohnt sich lokale SEO für Unternehmen in Darmstadt überhaupt?',
    answer:
      'Ja, sobald Kunden in Darmstadt und im Umland über Google nach Ihrer Leistung suchen. Local SEO richtet Maps, Google Business Profil und Ihre Seiten auf genau diese Suchanfragen aus und liefert oft stabileren Zulauf als einmalige Anzeigen — vorausgesetzt, Sie investieren in konsistente Daten, Inhalte und technische Qualität. Unsinnig ist es nur, wenn Ihre Zielgruppe gar nicht über Suche kommt.',
  },
  {
    question: 'Wie schnell kann lokale SEO erste Anfragen bringen?',
    answer:
      'Erste spürbare Effekte gibt es oft nach einigen Wochen, sobald Profil, Keywords und technische Basis stehen. Konkrete Anfragen aus der Region hängen vom Wettbewerb ab: In manchen Nischen zieht es schneller an, in hart umkämpften Themen braucht es länger bis messbar stabil. Klar ist: Lokale SEO ist kein Klick-Feuerwerk, sondern ein strategischer Aufbau — dafür aber mit Potenzial für dauerhafte Sichtbarkeit in Darmstadt und Umgebung.',
  },
  {
    question: 'Warum reicht eine schöne Website ohne SEO heute nicht mehr aus?',
    answer:
      'Gestaltung hilft beim Vertrauen, nicht aber beim Auffinden: Wenn Google Sie für relevante Suchbegriffe nicht ausspielt, erreichen Sie wenig der Menschen, die aktiv nach Anbietern wie Ihnen suchen — in Darmstadt genauso wie bundesweit. Dazu kommen Ladezeit, Struktur und mobile Nutzung: Ohne technische und inhaltliche Ausrichtung bleibt auch die beste Optik unsichtbar oder verliert gegen besser optimierte Konkurrenz.',
  },
  {
    question: 'Für welche Unternehmen lohnt sich SEO in Darmstadt besonders?',
    answer:
      'Lokale SEO lohnt sich vor allem für Unternehmen, die regional gefunden werden möchten und aktiv neue Kundenanfragen generieren wollen. Besonders profitieren Handwerksbetriebe, Immobilienmakler, Dienstleister, Praxen, Kanzleien und lokale Unternehmen in Darmstadt und Südhessen. Wer bei Google sichtbar ist, wird häufiger angefragt — oft noch bevor ein direkter Wettbewerbsvergleich stattfindet.',
  },
  {
    question: 'Kann ich auch mit kleinerem Budget sichtbar werden?',
    answer:
      'Ja. Gerade lokale SEO bietet kleineren Unternehmen die Möglichkeit, gezielt gegen größere Anbieter sichtbar zu werden. Statt deutschlandweit zu konkurrieren, konzentrieren wir uns auf relevante Suchanfragen in Darmstadt und der direkten Umgebung. Oft reichen bereits optimierte Seitenstruktur, lokaler Content und ein starkes Google-Unternehmensprofil für erste Ergebnisse aus.',
  },
  {
    question: 'Macht lokale SEO auch ohne Google Ads Sinn?',
    answer:
      'Definitiv. Der Vorteil von SEO liegt darin, langfristig organische Sichtbarkeit aufzubauen, ohne dauerhaft für Klicks zu bezahlen. Während Google Ads nur laufen, solange Budget investiert wird, kann lokale SEO über Monate oder Jahre kontinuierlich Anfragen generieren. Besonders für lokale Dienstleistungen ist das oft nachhaltiger und vertrauenswürdiger.',
  },
  {
    question: 'Was unterscheidet lokale SEO von normalem SEO?',
    answer:
      'Lokale SEO konzentriert sich auf regionale Suchanfragen wie „Webdesign Darmstadt“ oder „SEO Agentur Darmstadt“. Dabei spielen Standortsignale, Google Business Optimierung, lokale Inhalte und regionale Relevanz eine große Rolle. Ziel ist nicht einfach nur Traffic — sondern Sichtbarkeit bei Menschen aus Ihrer Region, die konkret nach Ihrer Leistung suchen.',
  },
  {
    question: 'Kann ich bestehende Rankings verbessern lassen?',
    answer:
      'Ja. In vielen Fällen ist bereits Potenzial vorhanden, das technisch oder inhaltlich nicht vollständig genutzt wird. Durch Performance-Optimierung, bessere Seitenstruktur, lokale Landingpages und gezielte Keyword-Strategien lassen sich bestehende Rankings oft deutlich verbessern — ohne die komplette Website neu aufzubauen.',
  },
  {
    question: 'Wie wichtig ist Google Business für lokale Sichtbarkeit?',
    answer:
      'Sehr wichtig. Das Google-Unternehmensprofil ist einer der stärksten lokalen Rankingfaktoren. Ein vollständig optimiertes Profil mit passenden Kategorien, Bewertungen, Bildern und regionalen Informationen erhöht die Chance, in Google Maps und lokalen Suchergebnissen sichtbar zu werden. Gerade für Unternehmen in Darmstadt kann das einen direkten Unterschied bei Kundenanfragen machen.',
  },
] as const

function getGoogleMapsReviewsUrl(): string | undefined {
  const id = process.env.GOOGLE_PLACE_ID?.trim()
  if (!id) return undefined
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('319Webdesign')}&query_place_id=${encodeURIComponent(id)}`
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function SeoDarmstadtPage() {
  const googleReviewsUrl = getGoogleMapsReviewsUrl()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 text-slate-900 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <section className="relative overflow-hidden bg-blue-600 py-16 md:py-24 rounded-b-[3rem] md:rounded-b-[5rem]">
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="mb-7 md:mb-6 lg:mb-8">
              <Breadcrumbs
                inverted
                compact
                items={[
                  { name: 'Startseite', url: '/' },
                  { name: 'SEO Darmstadt', url: '/seo-darmstadt' },
                ]}
              />
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
              <div className="min-w-0 max-w-xl lg:max-w-none">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  <span className="block">SEO Darmstadt:</span>
                  <span className="mt-2 block md:mt-3">
                    Mehr Sichtbarkeit bei Google für lokale Unternehmen
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-blue-50/95 md:text-xl">
                  Ich optimiere Websites für Unternehmen in Darmstadt — mit technischer SEO, lokaler Sichtbarkeit und klarer
                  Strategie für echte Kundenanfragen.
                </p>
                <ul className="mt-8 space-y-3 text-base font-medium text-white md:text-lg" aria-label="Was Sie erwarten können">
                  <li className="flex gap-3">
                    <span className="shrink-0 text-emerald-300" aria-hidden>
                      ✓
                    </span>
                    <span>Lokale SEO für Darmstadt</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 text-emerald-300" aria-hidden>
                      ✓
                    </span>
                    <span>Technische Optimierung &amp; Performance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 text-emerald-300" aria-hidden>
                      ✓
                    </span>
                    <span>Persönlicher Ansprechpartner</span>
                  </li>
                </ul>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="/kontakt"
                    className="inline-flex items-center justify-center rounded-lg border border-amber-300/70 bg-amber-400 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-amber-900/25 transition-all hover:scale-[1.02] hover:border-amber-200 hover:bg-amber-500 hover:shadow-xl hover:shadow-amber-900/30 active:scale-[0.98]"
                  >
                    Kostenlose SEO-Analyse sichern
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-1 rounded-lg border border-blue-100/60 bg-white/95 px-6 py-3.5 text-base font-semibold text-slate-800 backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-blue-700"
                  >
                    Referenzen ansehen <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              <div className="relative flex w-full justify-center lg:justify-end">
                <div className="relative w-full max-w-[min(92vw,380px)] sm:max-w-md lg:mx-0 lg:max-w-none lg:w-[min(100%,560px)] xl:w-[min(100%,620px)]">
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 scale-105 rounded-[2rem] bg-slate-950/25 blur-3xl lg:opacity-90"
                    aria-hidden
                  />
                  <div className="overflow-hidden rounded-2xl ring-1 ring-white/25 shadow-[0_28px_56px_rgba(15,23,42,0.45)]">
                    <Image
                      src="/seo-darmstadt-hero.png"
                      alt="SEO für Darmstadt: Dashboard mit Sichtbarkeit, Rankings und Performance sowie lokale Suchergebnisse"
                      width={1024}
                      height={682}
                      className="h-auto w-full object-contain object-center"
                      priority
                      sizes="(max-width: 1024px) 92vw, 560px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SeoDarmstadtWarumSection />

        <SeoDarmstadtFeatureCards />

        <SeoDarmstadtRegionalSection />

        <SeoDarmstadtFaqTrustSection faqItems={faqItems} googleReviewsUrl={googleReviewsUrl} />

        <SeoDarmstadtClosingCtaSection />
      </main>
      <Footer />
    </>
  )
}
