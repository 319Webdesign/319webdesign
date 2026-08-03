import Link from 'next/link'
import { ArrowRight, Hammer } from 'lucide-react'

const branchen = [
  {
    title: 'Elektriker',
    text: 'Leistungen wie Installation, Smart Home oder Wallbox klar trennen, Notdienst sichtbar machen und mobil sofort erreichbar sein – so entstehen Anfragen statt Absprüngen.',
  },
  {
    title: 'Dachdecker',
    text: 'Sicherheit und Fachkompetenz zeigen: Sanierung, Eindeckung und Referenzen strukturiert präsentieren, damit Hausbesitzer in Trebur und Umgebung Vertrauen fassen.',
  },
  {
    title: 'Gartenbau',
    text: 'Projekte und Pflegeleistungen mit starken Bildern und klaren Angeboten – ideal für saisonale Nachfrage aus Astheim, Geinsheim und dem Kreis Groß-Gerau.',
  },
  {
    title: 'SHK',
    text: 'Sanitär, Heizung und Klima brauchen Vertrauen. Übersichtliche Leistungsseiten, moderne Darstellung und schnelle Kontaktwege unterstützen Beratung und Auftrag.',
  },
  {
    title: 'Maler',
    text: 'Vorher-Nachher-Wirkung, Innen- und Außenleistungen sowie nachvollziehbare Abläufe – damit Privatkunden und Gewerbe Sie als professionellen Partner wahrnehmen.',
  },
  {
    title: 'Bauunternehmen',
    text: 'Gewerke, Referenzen und Team glaubwürdig darstellen. Eine starke Website hilft bei Ausschreibungen, Bauherren und der Sichtbarkeit gegenüber regionalen Wettbewerbern.',
  },
  {
    title: 'Schreiner',
    text: 'Maßarbeit verkauft sich über Qualität und Atmosphäre. Gute Fotos, klare Leistungsbereiche und eine ruhige, hochwertige Optik machen den Unterschied.',
  },
  {
    title: 'Metallbau',
    text: 'Technische Kompetenz und Präzision digital abbilden – von Geländer bis Industrie. Strukturierte Inhalte und lokale SEO bringen passende Anfragen.',
  },
] as const

const benefits = [
  'Neue Kunden über Google und Empfehlungen online abholen',
  'Mitarbeiter und Azubis mit professionellem Auftritt gewinnen',
  'Seriosität und Handwerksqualität sofort sichtbar machen',
  'Lokale Google-Rankings und Maps-Präsenz stärken',
] as const

/**
 * Handwerker-Fokus – nur /webdesign/trebur.
 */
export default function TreburHandwerkerSection() {
  return (
    <section
      className="relative overflow-hidden bg-blue-600 px-6 pb-28 pt-20 md:pb-32 md:pt-28"
      aria-labelledby="trebur-handwerker-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(168deg, rgb(29 78 216) 0%, rgb(37 99 235) 45%, rgb(30 64 175) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 28%, rgba(255, 255, 255, 0.14) 0%, transparent 52%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 95% 85% at 50% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 55%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-100">
              <Hammer className="h-3.5 w-3.5" aria-hidden />
              Handwerk
            </span>
            <h2
              id="trebur-handwerker-heading"
              className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl"
            >
              Webdesign für Handwerker in Trebur
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-blue-50/95">
              Handwerksbetriebe in Trebur konkurrieren nicht nur über Preis und Qualität vor Ort –
              sondern auch über den ersten Eindruck online. Eine moderne Website zeigt Leistungen,
              schafft Vertrauen und macht den Kontakt so einfach wie möglich.
            </p>
            <p className="mb-8 text-base leading-relaxed text-blue-50/90">
              Speziell für Betriebe habe ich den Fokus auf Anfragen, mobile Nutzung und lokale
              Sichtbarkeit gelegt. Mehr Details finden Sie auf der Seite{' '}
              <Link
                href="/webdesign-handwerker"
                className="font-medium text-white underline decoration-blue-200/50 underline-offset-2 hover:decoration-white"
              >
                Webdesign für Handwerker
              </Link>
              .
            </p>
            <ul className="mb-8 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex gap-2.5 text-base text-blue-50/95">
                  <span className="mt-0.5 font-semibold text-emerald-300" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg border border-amber-300/70 bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-md shadow-amber-900/25 transition-all duration-300 hover:bg-amber-500"
            >
              Website für Ihren Betrieb besprechen
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {branchen.map(({ title, text }) => (
              <li
                key={title}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-amber-300/60 hover:bg-white/[0.14]"
              >
                <p className="mb-2 text-lg font-bold text-amber-200">{title}</p>
                <p className="text-sm leading-relaxed text-blue-50/90 md:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] overflow-hidden leading-[0]"
        aria-hidden
      >
        <svg
          className="relative block h-12 w-full md:h-16 lg:h-[4.75rem]"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff" d="M0 36C240 36 360 84 720 84s480-48 720-48v60H0V36z" />
        </svg>
      </div>
    </section>
  )
}
