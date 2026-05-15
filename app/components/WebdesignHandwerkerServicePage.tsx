import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  ChevronDown,
  Hammer,
  MapPin,
  MonitorSmartphone,
  Phone,
  Rocket,
  Search,
  Sparkles,
  X,
  Check,
  Compass,
  MessageSquare,
  Palette,
  Gauge,
} from 'lucide-react'
import Breadcrumbs from './Breadcrumbs'
import { handwerkerWebdesignFaqItems } from '../../config/handwerkerWebdesignFaq'

const trustStrip = [
  'Für Handwerker & lokale Betriebe',
  'Fokus auf Anfragen & Bewerbungen',
  'Persönliche Betreuung aus Pfungstadt',
  'SEO-Grundstruktur inklusive',
] as const

const problemCards = [
  'Veralteter erster Eindruck',
  'Zu wenig Anfragen über die Website',
  'Leistungen nicht klar dargestellt',
  'Keine Bewerberführung',
  'Mobil schlecht nutzbar',
  'Kaum lokale Sichtbarkeit',
] as const

const nutzenCards = [
  {
    title: 'Innerhalb von Sekunden Vertrauen aufbauen',
    text: 'Starke Überschrift, echte Bilder aus dem Betrieb und klare Zusagen – Besucher merken sofort: Hier arbeitet ein seriöses Handwerksteam.',
    icon: BadgeCheck,
  },
  {
    title: 'Leistungen verständlich präsentieren',
    text: 'Ob Elektro, Sanitär oder Gartenbau: Jede Kernleistung bekommt Raum, statt in einem langen Fließtext unterzugehen.',
    icon: Hammer,
  },
  {
    title: 'Besucher klar zur Anfrage führen',
    text: 'Telefon, Formular und WhatsApp dort, wo Entscheidungen fallen – ohne dass Kunden suchen müssen.',
    icon: Phone,
  },
  {
    title: 'Auf dem Smartphone perfekt funktionieren',
    text: 'Große Anteile Ihrer Kundschaft kommt unterwegs von Griesheim bis zur Bergstraße per Handy – die Website ist darauf ausgelegt.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Bewerber besser abholen',
    text: 'Karriere, Ausbildung und Team wirken professionell – wichtig im Wettbewerb um Fachkräfte in Darmstadt und Südhessen.',
    icon: Briefcase,
  },
  {
    title: 'Lokal bei Google besser gefunden werden',
    text: 'Technik, Ladezeit und passende Unterseiten unterstützen Ihre Handwerker-Website SEO – abgestimmt auf lokale Suchanfragen.',
    icon: Search,
  },
] as const

const branchenCards = [
  {
    title: 'Elektriker',
    text: 'Klare Leistungsseiten, starke Vertrauenselemente und einfache Kontaktmöglichkeiten für private und gewerbliche Kunden.',
  },
  {
    title: 'Garten- und Landschaftsbau',
    text: 'Projektbeispiele, Saison-Themen und gut strukturierte Leistungen von der Pflege bis zur Neugestaltung.',
  },
  {
    title: 'Sanitär & Heizung',
    text: 'Vertrauen für sensible Aufträge: Notdienst, Modernisierung und Referenzen ohne überladene Startseite.',
  },
  {
    title: 'Maler & Lackierer',
    text: 'Vorher-Nachher-Stimmung, Farbkonzepte und klare Angebotswege – ideal für private Auftraggeber in der Region.',
  },
  {
    title: 'Dachdecker',
    text: 'Sicherheit und Zertifikate sichtbar, Leistungen wie Dacheindeckung und Sanierung auf eigenen Seiten erklärt.',
  },
  {
    title: 'Schreiner & Tischler',
    text: 'Handwerkliche Qualität sichtbar machen: Möbel, Innenausbau und Maßarbeit mit Bildern, die verkaufen.',
  },
  {
    title: 'Bauunternehmen',
    text: 'Übersicht über Gewerke, Team und Referenzobjekte – damit Bauherren in Weiterstadt und Umgebung schnell Vertrauen fassen.',
  },
  {
    title: 'Fliesenleger',
    text: 'Bad, Boden und Gewerbe sauber getrennt, mit beruhigender Darstellung für anspruchsvolle Flächen.',
  },
] as const

const leistungsBeispiele = [
  {
    branche: 'Elektriker',
    items: ['Elektroinstallation', 'Smart Home', 'Wallbox'],
  },
  {
    branche: 'Gartenbau',
    items: ['Gartengestaltung', 'Pflasterarbeiten', 'Gartenpflege'],
  },
  {
    branche: 'Sanitär',
    items: ['Badsanierung', 'Heizungsmodernisierung', 'Notdienst'],
  },
  {
    branche: 'Maler',
    items: ['Innenanstrich', 'Fassadengestaltung', 'Tapezierarbeiten'],
  },
] as const

const vorherItems = [
  'unklare Startseite',
  'keine klare Kontaktführung',
  'veraltetes Design',
  'schwache mobile Ansicht',
  'Leistungen schwer auffindbar',
] as const

const nachherItems = [
  'klare Botschaft im Hero',
  'moderne Leistungsbereiche',
  'sichtbare Kontaktmöglichkeiten',
  'mobile Nutzerführung',
  'Google-Bewertungen / Referenzen',
  'Bewerberbereich möglich',
] as const

const processSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Kostenloser Website-Check',
    description:
      'Wir schauen gemeinsam auf Ihren aktuellen Auftritt: Was funktioniert, wo gehen Anfragen verloren, was braucht ein Relaunch?',
  },
  {
    step: 2,
    icon: Compass,
    title: 'Strategie & Seitenstruktur',
    description:
      'Welche Leistungen bekommen eigene Seiten? Wie führen wir Kunden und Bewerber? So entsteht ein roter Faden statt bunter Baukasten-Seiten.',
  },
  {
    step: 3,
    icon: Palette,
    title: 'Design & Inhalte',
    description:
      'Modern, ruhig und handwerkstauglich: Farben, Typo und Texte, die zu Ihrem Betrieb passen – mit echten Fotos statt generischer Stockbilder.',
  },
  {
    step: 4,
    icon: Gauge,
    title: 'Umsetzung mit SEO-Grundlage',
    description:
      'Schnelle Ladezeiten, saubere Struktur und lokale Suchbegriffe – damit Ihre Website für Handwerker auch technisch überzeugt.',
  },
  {
    step: 5,
    icon: Rocket,
    title: 'Launch & laufende Betreuung',
    description:
      'Go-Live, Monitoring und optional Wartung – damit Pfungstadt, Darmstadt & Co. Sie zuverlässig online erleben.',
  },
] as const

const preisKacheln = [
  {
    title: 'Basis-Webauftritt',
    ab: '749 €',
    text: 'Ideal für klar strukturierte Einstiegsseiten mit den wichtigsten Infos und starkem mobilen Auftritt.',
  },
  {
    title: 'Wachstum-Webauftritt',
    ab: '1.199 €',
    text: 'Mehr Tiefe: zusätzliche Leistungsseiten, stärkere SEO-Struktur und Raum für Projekte und Vertrauen.',
  },
  {
    title: 'Relaunch + SEO-Struktur',
    ab: '1.499 €',
    text: 'Für Betriebe, die mehrere Gewerke oder Standorte abbilden und im Wettbewerb in Südhessen sichtbar bleiben wollen.',
  },
] as const

const warum319 = [
  'Persönlicher Ansprechpartner statt anonymer Agentur',
  'Regionale Nähe aus Pfungstadt – kurze Wege nach Darmstadt & Umgebung',
  'Verständnis für lokale Betriebe und Handwerksalltag',
  'Fokus auf Anfragen, Bewerbungen und Vertrauen',
  'Moderne Technik mit schneller Ladezeit',
  'SEO-Grundlagen von Anfang mitgedacht',
  'Betreuung nach dem Launch optional buchbar',
] as const

export default function WebdesignHandwerkerServicePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24"
        aria-labelledby="handwerker-hero-h1"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 lg:mb-12">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Webdesign für Handwerker', url: '/webdesign-handwerker' },
              ]}
            />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-800">
                <Hammer className="h-3.5 w-3.5" aria-hidden />
                Webdesign für Handwerksbetriebe · Darmstadt & Südhessen
              </p>
              <h1
                id="handwerker-hero-h1"
                className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
              >
                Webdesign für Handwerker in Darmstadt & Umgebung
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Ich erstelle moderne Websites für Handwerksbetriebe, die nicht nur gut aussehen, sondern Vertrauen
                aufbauen, Leistungen klar erklären und Besucher gezielt zur Anfrage oder Bewerbung führen.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                Ob Sie eine{' '}
                <strong className="font-semibold text-slate-800">Website für Ihren Handwerksbetrieb</strong> neu
                aufsetzen oder einen <strong className="font-semibold text-slate-800">Website Relaunch</strong> planen:
                Als Webdesigner mit Fokus auf{' '}
                <Link
                  href="/webdesign/darmstadt"
                  className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-900"
                >
                  Webdesign in Darmstadt
                </Link>{' '}
                und Umgebung verbinden wir klare Nutzerführung mit solider{' '}
                <Link
                  href="/seo-darmstadt"
                  className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-900"
                >
                  Handwerker-Website-SEO
                </Link>
                – von Pfungstadt bis Griesheim und über der Bergstraße hinweg.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/kontakt"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:shadow-blue-600/45 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:w-auto"
                >
                  Kostenlosen Website-Check anfragen
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-800 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:w-auto"
                >
                  Referenzen ansehen
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {trustStrip.map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-lg border border-slate-200/90 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm md:text-sm"
                  >
                    <Sparkles className="mr-1.5 h-3.5 w-3.5 text-amber-500" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual: Mockup */}
            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-slate-900/25">
                  <div className="flex items-center gap-2 border-b border-slate-700/80 bg-slate-800 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-400/90" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                    <span className="ml-3 truncate text-xs font-medium text-slate-400">ihr-handwerksbetrieb.de</span>
                  </div>
                  <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-slate-100 via-white to-blue-50">
                    <Image
                      src="/webdesign-darmstadt-hero.png"
                      alt="Beispielhafte, moderne Website-Darstellung für einen Handwerksbetrieb"
                      fill
                      className="object-cover object-top opacity-95"
                      sizes="(min-width: 1024px) 480px, 90vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:bottom-6 md:left-6 md:right-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/90">Vorschau</p>
                      <p className="mt-1 text-sm font-bold text-white md:text-base">
                        Handwerk online – klar, schnell, vertrauensvoll
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-500/15 via-transparent to-amber-400/10 blur-2xl" />
              </div>

              <p className="mt-6 text-center text-xs text-slate-500 sm:hidden">
                <span className="font-medium text-slate-700">Mobil-first · Schnelle Ladezeit · Klare CTAs</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section
        className="border-t border-slate-200/80 bg-slate-50 py-16 md:py-24"
        aria-labelledby="handwerker-problem-h2"
        id="problem"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <h2
                id="handwerker-problem-h2"
                className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
              >
                Viele Handwerker-Websites zeigen nicht, wie gut der Betrieb wirklich ist.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                In Darmstadt, Weiterstadt und im gesamten Südhessen gibt es exzellente Handwerksbetriebe – fachlich top,
                zuverlässig, nah am Kunden. Wenn der digitale Auftritt aber wirkt wie aus einem anderen Jahrzehnt, trifft
                das nicht zu dem Eindruck, den Ihre Mannschaft täglich auf der Baustelle hinterlässt.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Besucher finden Leistungen nicht in wenigen Klicks, Kontaktwege hängen versteckt im Footer, und auf dem
                Smartphone wird aus einer guten Bewertung kein Auftrag. Bewerber sehen keinen klaren Karrierepfad – und
                entscheiden sich für den Konkurrenten mit der aufgeräumteren{' '}
                <Link
                  href="/website-relaunch"
                  className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-900"
                >
                  Website fürs Handwerk
                </Link>
                .
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {problemCards.map((title) => (
                <article
                  key={title}
                  className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-blue-500/40 hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <X className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 md:text-lg">{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nutzen */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="handwerker-nutzen-h2" id="nutzen">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2
              id="handwerker-nutzen-h2"
              className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Was eine gute Handwerker-Website leisten sollte
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Eine <strong className="font-semibold text-slate-800">Handwerker-Website erstellen lassen</strong> heißt
              für mich: messbare Klarheit statt Dekoration. Genau darauf ist der folgende Aufbau ausgerichtet.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {nutzenCards.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-slate-50/50 p-8 shadow-sm transition hover:border-blue-500/35 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-md">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Branchen */}
      <section
        className="border-t border-slate-200/80 bg-slate-50 py-16 md:py-24"
        aria-labelledby="handwerker-branchen-h2"
        id="branchen"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 id="handwerker-branchen-h2" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Für welche Handwerksbetriebe ich Websites erstelle
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Spezifische Branchen-Suchanfragen – zum Beispiel nach einer{' '}
              <strong className="font-semibold text-slate-800">Website für Elektriker</strong>,{' '}
              <strong className="font-semibold text-slate-800">Maler</strong> oder{' '}
              <strong className="font-semibold text-slate-800">Sanitärbetrieb</strong> – brauchen passende Inhalte. Hier
              ein Auszug, wie ich das für Sie denke.
            </p>
          </header>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {branchenCards.map(({ title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{text}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-slate-600">
            Fehlt Ihre Branche? Sprechen Sie mich an – viele Gewerke profitieren von derselben klaren Struktur, ob{' '}
            <strong className="font-semibold text-slate-800">Website für Dachdecker</strong>,{' '}
            <strong className="font-semibold text-slate-800">Gartenbau</strong> oder ein anderes Fach.
          </p>
        </div>
      </section>

      {/* Leistungsseiten / SEO */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="handwerker-leistungsseiten-h2" id="leistungsseiten">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <h2
                id="handwerker-leistungsseiten-h2"
                className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
              >
                Warum Handwerker eigene Leistungsseiten brauchen
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Eine Startseite allein reicht selten, wenn Sie für konkrete Arbeiten gefunden werden wollen. Wenn
                Kundinnen und Kunden nach „Wallbox installieren“, „Badsanierung“ oder „Gartenpflege“ suchen, erwartet
                Google – und der Mensch dahinter – Tiefe: eine Seite, die genau diese Leistung erklärt, Vertrauen schafft
                und den nächsten Schritt anbietet.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                So wird aus{' '}
                <strong className="font-semibold text-slate-800">Webdesign für Handwerker</strong> ein Gerüst, das auch
                Ihre{' '}
                <Link
                  href="/seo-darmstadt"
                  className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-900"
                >
                  lokale SEO in Darmstadt und Südhessen
                </Link>{' '}
                stützt – mit sauberen Überschriften, internen Verlinkungen und schnellen mobilen Erlebnissen.
              </p>
              <Link
                href="/kontakt"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 focus-visible:outline focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                SEO-Struktur für meine Website prüfen lassen
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="space-y-4">
              {leistungsBeispiele.map(({ branche, items }) => (
                <div
                  key={branche}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wide text-blue-700">{branche}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vorher / Nachher */}
      <section
        className="border-y border-slate-200/80 bg-gradient-to-b from-slate-50 to-white py-16 md:py-24"
        aria-labelledby="handwerker-vergleich-h2"
        id="vergleich"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 id="handwerker-vergleich-h2" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Vom veralteten Online-Auftritt zur Website, die Vertrauen schafft
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              So unterscheidet sich ein durchdachtes{' '}
              <strong className="font-semibold text-slate-800">Webdesign Handwerk</strong> von einer Seite „die einfach
              da ist“.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-slate-900/5 md:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-red-100/80 blur-2xl" />
              <p className="text-xs font-bold uppercase tracking-wider text-red-600">Vorher</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Typische Schmerzpunkte</h3>
              <ul className="mt-6 space-y-4">
                {vorherItems.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <X className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-8 text-white shadow-xl shadow-blue-900/20 md:p-10">
              <div className="absolute -left-10 bottom-0 h-40 w-40 translate-y-10 rounded-full bg-blue-500/25 blur-2xl" />
              <p className="text-xs font-bold uppercase tracking-wider text-blue-200">Nachher</p>
              <h3 className="mt-2 text-xl font-bold">Mit 319Webdesign</h3>
              <ul className="mt-6 space-y-4">
                {nachherItems.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-100">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="handwerker-ablauf-h2" id="ablauf">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 id="handwerker-ablauf-h2" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              So entsteht Ihre neue Handwerker-Website
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Transparente Schritte – damit Sie jederzeit wissen, was als Nächstes dran ist.
            </p>
          </header>
          <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map(({ step, icon: Icon, title, description }) => (
              <li
                key={step}
                className="relative flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-7 pt-11 shadow-sm transition hover:border-blue-500/40 hover:shadow-md"
              >
                <span className="absolute -top-3 left-6 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1 text-xs font-bold text-white shadow-md">
                  Schritt {step}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm ring-1 ring-slate-200/80">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Preise */}
      <section
        className="border-t border-slate-200/80 bg-slate-50 py-16 md:py-24"
        aria-labelledby="handwerker-preise-h2"
        id="preise"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="handwerker-preise-h2" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Was kostet eine professionelle Website für Handwerker?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Die Kosten hängen davon ab, wie umfangreich Ihre Website werden soll, ob Leistungsseiten, Bewerberbereich
              oder SEO-Struktur benötigt werden. Als Orientierung: Der Basis-Webauftritt beginnt bei{' '}
              <strong className="font-semibold text-slate-900">749 €</strong>, der Wachstum-Webauftritt bei{' '}
              <strong className="font-semibold text-slate-900">1.199 €</strong>, ein Relaunch inkl. SEO-Struktur bei{' '}
              <strong className="font-semibold text-slate-900">1.499 €</strong>. Den passenden Festpreis klären wir nach dem
              kostenlosen Website-Check.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {preisKacheln.map(({ title, ab, text }) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-2xl font-bold text-blue-700">{ab}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/unsere-angebote"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:shadow-blue-600/45 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Passendes Angebot anfragen
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Betreuung */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="handwerker-betreuung-h2" id="betreuung">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 id="handwerker-betreuung-h2" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nach dem Launch bleibt Ihre Website betreut
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Technik, Plugins und Inhalte stehen nicht still. Ich unterstütze Sie nach dem Launch mit kleinen Änderungen,
            technischer Pflege, Backups, Updates und gezielten SEO-Feinarbeiten – damit aus einem guten Start kein
            Stillstand wird. Alle Details zu Paketen und Leistungen finden Sie bei der{' '}
            <Link
              href="/leistungen/strategische-begleitung"
              className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-900"
            >
              strategischen Begleitung und Website-Betreuung
            </Link>
            .
          </p>
          <Link
            href="/leistungen/strategische-begleitung"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Website-Betreuung ansehen
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* Warum 319 */}
      <section
        className="border-t border-slate-200/80 bg-slate-50 py-16 md:py-24"
        aria-labelledby="handwerker-warum-h2"
        id="warum"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="handwerker-warum-h2" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Warum Handwerksbetriebe mit 319Webdesign arbeiten
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                <strong className="font-semibold text-slate-800">Webdesign Südhessen</strong> kann viel heißen – ich
                setze auf direkte Kommunikation, belastbare Technik und Seiten, die Ihren Alltag als Betrieb
                widerspiegeln.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                In der <Link href="/portfolio" className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900">Projektübersicht</Link> sehen Sie, wie diese Praxis bei echten Auftritten aussieht.
              </p>
            </div>
            <ul className="space-y-4">
              {warum319.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="handwerker-faq-h2" id="faq">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 id="handwerker-faq-h2" className="mb-3 text-center text-3xl font-bold text-slate-900">
            Häufige Fragen von Handwerksbetrieben
          </h2>
          <p className="mb-10 text-center text-slate-600">
            Kurz beantwortet – wenn Sie tiefer einsteigen wollen, melden Sie sich für den kostenlosen Website-Check.
          </p>
          <div className="space-y-3">
            {handwerkerWebdesignFaqItems.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 shadow-sm transition-colors hover:border-slate-300 open:border-blue-500/45 open:bg-white open:shadow-md [&[open]_summary_.faq-chevron]:rotate-180"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="pr-2">{faq.question}</span>
                  <ChevronDown
                    className="faq-chevron h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:text-blue-600"
                    aria-hidden
                  />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 text-white md:py-24"
        aria-labelledby="handwerker-abschluss-h2"
      >
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
            <MapPin className="h-7 w-7" aria-hidden />
          </div>
          <h2 id="handwerker-abschluss-h2" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Bereit für eine Website, die Ihren Betrieb besser verkauft?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Lassen Sie uns kurz prüfen, wo Ihre aktuelle Website steht und welche Verbesserungen für mehr Anfragen,
            Vertrauen und Bewerbungen sinnvoll sind.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/35 transition hover:scale-[1.02] hover:shadow-blue-500/50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto"
            >
              Kostenlosen Website-Check anfragen
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <p className="text-sm text-slate-400">
              Oder direkt anrufen:{' '}
              <a
                href="tel:+491773236454"
                className="font-medium text-white underline-offset-2 hover:text-blue-200 hover:underline tabular-nums"
              >
                +49 177 3236 454
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
