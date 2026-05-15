import type { Metadata } from 'next'
import Image from 'next/image'
import { seoConfig, getSeoMetadata } from '../../../config/seo'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Gauge,
  FileEdit,
  Activity,
  Sparkles,
  Users,
  MapPin,
  Phone,
  ArrowDownRight,
} from 'lucide-react'
import Breadcrumbs from '../../components/Breadcrumbs'
import BetreuungFaqJsonLd from '../../components/BetreuungFaqJsonLd'
import { betreuungFaqItems } from '../../../config/betreuungFaq'

export const metadata: Metadata = getSeoMetadata(seoConfig.wartung)

const nutzenCards = [
  {
    title: 'Sicherer Betrieb',
    text: 'Updates, Backups und Checks reduzieren Ausfälle und Risiken – Ihre Website bleibt für Kunden erreichbar.',
    icon: Shield,
  },
  {
    title: 'Aktuelle Inhalte',
    text: 'Öffnungszeiten, Teamfotos oder Leistungen bleiben ohne Stress aktuell – Besucher sehen immer den richtigen Stand.',
    icon: FileEdit,
  },
  {
    title: 'Schnelle Hilfe bei kleinen Änderungen',
    text: 'Statt selbst im System zu klicken, melden Sie sich kurz – ich übernehme Text-, Bild- und Feinkorrekturen für Sie.',
    icon: Sparkles,
  },
  {
    title: 'Professioneller Eindruck nach außen',
    text: 'Eine gepflegte Website signalisiert Zuverlässigkeit – besonders wichtig für lokale Betriebe und Dienstleister.',
    icon: Users,
  },
] as const

const leistungsItems = [
  {
    title: 'Technische Pflege & Kontrolle',
    text: 'Regelmäßige Prüfung, ob Ihre Website sauber funktioniert und ohne Auffälligkeiten läuft.',
    icon: Activity,
  },
  {
    title: 'Sicherheitschecks & Updates',
    text: 'Besonders wichtig bei WordPress: Bekannte Sicherheitslücken werden geschlossen, bevor sie zum Problem werden.',
    icon: Shield,
  },
  {
    title: 'Backups & Wiederherstellung',
    text: 'Sicherungen nach System – damit Ihre Website im Ernstfall schnell wiederhergestellt werden kann.',
    icon: CheckCircle2,
  },
  {
    title: 'Kleine Text- und Bildänderungen',
    text: 'Telefonnummern, Öffnungszeiten, Bilder oder Leistungsbereiche unkompliziert anpassen lassen.',
    icon: FileEdit,
  },
  {
    title: 'Performance & Ladezeiten im Blick',
    text: 'Regelmäßige Kontrolle, damit Ihre Website schnell und nutzerfreundlich bleibt.',
    icon: Gauge,
  },
  {
    title: 'Persönlicher Ansprechpartner',
    text: 'Kein anonymes Ticketsystem – Sie haben einen direkten Kontakt zu 319Webdesign.',
    icon: Phone,
  },
] as const

const zielgruppen = [
  'Lokale Unternehmen ohne eigenen Web-Ansprechpartner',
  'Handwerksbetriebe mit wenig Zeit für Technik',
  'Dienstleister, die auf Vertrauen und Erreichbarkeit setzen',
  'Unternehmen mit einer WordPress-Website',
  'Betriebe mit regelmäßigen kleinen Änderungswünschen',
  'Unternehmen, die ihre Website langfristig professionell halten möchten',
] as const

const ablaufSteps = [
  {
    step: '1',
    title: 'Kurze Website-Prüfung',
    text: 'Ich schaue mir Ihre bestehende Website technisch und inhaltlich an.',
  },
  {
    step: '2',
    title: 'Passendes Betreuungspaket wählen',
    text: 'Je nach Bedarf empfehle ich Basis oder Wachstum.',
  },
  {
    step: '3',
    title: 'Einrichtung & Übergabe',
    text: 'Zugänge, Backups, technische Grundlage und der Kommunikationsweg werden eingerichtet.',
  },
  {
    step: '4',
    title: 'Laufende Betreuung',
    text: 'Kleine Änderungen, Pflege und Optimierungen werden monatlich begleitet.',
  },
] as const

export default function WebsiteBetreuungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <BetreuungFaqJsonLd />

      {/* 1 Hero */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/80"
        aria-labelledby="betreuung-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-12 md:pb-24 md:pt-16">
          <div className="mb-8 flex justify-center lg:justify-start">
            <Breadcrumbs
              items={[
                { name: 'Startseite', url: '/' },
                { name: 'Leistungen', url: '/leistungen' },
                { name: 'Website-Betreuung', url: '/leistungen/strategische-begleitung' },
              ]}
            />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,min(100%,580px))] lg:gap-14 xl:gap-16">
            <div className="min-w-0 text-center lg:text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
                Website-Betreuung Darmstadt – Wartung, Pflege & kleine Änderungen
              </p>
              <h1
                id="betreuung-hero-heading"
                className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-[3.25rem]"
              >
                Website-Betreuung in Darmstadt &amp; Umgebung
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0 lg:text-xl">
                Damit Ihre Website auch nach dem Launch sicher, aktuell und professionell bleibt – ohne dass Sie
                sich selbst um Technik, Backups oder kleine Änderungen kümmern müssen.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:shadow-blue-500/40"
                >
                  Betreuung anfragen
                  <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
                </Link>
                <Link
                  href="#pakete"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-700"
                >
                  Pakete ansehen
                  <ArrowDownRight className="h-5 w-5 shrink-0" aria-hidden />
                </Link>
              </div>

              <ul className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-700 lg:mx-0 lg:justify-start">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                  ab 79&nbsp;€/Monat
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                  persönliche Betreuung
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                  kleine Änderungen inklusive
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                  Sicherheit &amp; Pflege
                </li>
              </ul>
            </div>

            {/* Hero-Visual: Website-Wartungs-Dashboard */}
            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              <div className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full bg-blue-500/15 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -bottom-8 -left-4 h-32 w-32 rounded-full bg-slate-400/10 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xl shadow-slate-300/40 ring-1 ring-slate-900/5">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/website-betreuung-hero.png"
                    alt="Laptop mit deutschsprachigem Dashboard zur Website-Betreuung: Übersicht mit aktuellen Updates, Sicherheit ohne Beanstandungen, Backup vom heutigen Tag, guter Performance und persönlichem Support; daneben Bereiche für Sicherheit, Wartung, Backups, Optimierung und Support."
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) min(100vw, 36rem), 580px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 Problem */}
      <section className="border-t border-slate-100 bg-white px-6 py-16 md:py-24" aria-labelledby="problem-heading">
        <div className="mx-auto max-w-3xl text-center md:text-left lg:max-w-4xl">
          <h2 id="problem-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Eine Website ist nach dem Launch nicht einfach fertig.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Viele Unternehmenswebsites werden nach der Veröffentlichung kaum noch gepflegt. Inhalte veralten,
              technische Fehler bleiben liegen, Sicherheitsupdates rutschen unter den Tisch und kleine
              Änderungswünsche sammeln sich an. Genau hier setzt{' '}
              <strong className="font-semibold text-slate-800">laufende Website-Betreuung</strong> an – damit aus
              einem gelungenen Launch keine stille Baustelle wird.
            </p>
            <p className="text-base text-slate-500 md:text-lg">
              Für Betriebe in <strong className="font-medium text-slate-700">Darmstadt</strong>,{' '}
              <strong className="font-medium text-slate-700">Pfungstadt</strong>,{' '}
              <strong className="font-medium text-slate-700">Griesheim</strong>,{' '}
              <strong className="font-medium text-slate-700">Weiterstadt</strong> und entlang der{' '}
              <strong className="font-medium text-slate-700">Bergstraße</strong> ist das oft der Alltag: viel zu tun –
              wenig Zeit für die Website. Mit einer klaren Betreuung entscheiden Sie sich für Ruhe im Technik-Thema.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Nutzen */}
      <section className="border-t border-slate-100 bg-slate-50 px-6 py-16 md:py-24" aria-labelledby="nutzen-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="nutzen-heading" className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Was regelmäßige Website-Betreuung für Ihr Unternehmen bedeutet
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Verständlich erklärt – ohne Technik-Bingo. Ideal für{' '}
            <strong className="font-medium text-slate-800">Website-Support für Unternehmen</strong>, die lieber
            Kunden bedienen als Plugins pflegen.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nutzenCards.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon className="h-5 w-5 text-blue-600" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Leistungen */}
      <section className="border-t border-slate-100 bg-white px-6 py-16 md:py-24" aria-labelledby="leistungen-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="leistungen-heading" className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Was ich für Ihre Website übernehme
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Von der <strong className="font-medium text-slate-800">Website-Pflege</strong> bis zu kleinen Anpassungen –
            strukturiert und nachvollziehbar.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leistungsItems.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-blue-300 hover:bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition group-hover:ring-blue-200">
                    <Icon className="h-5 w-5 text-blue-600" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Pakete */}
      <section
        id="pakete"
        className="scroll-mt-28 border-t border-slate-100 bg-gradient-to-b from-slate-50 to-white px-6 py-16 md:py-24"
        aria-labelledby="pakete-heading"
      >
        <div className="mx-auto max-w-5xl">
          <h2 id="pakete-heading" className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Website-Betreuung passend zu Ihrem Bedarf
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Transparente Pakete für <strong className="font-medium text-slate-800">Website-Änderungen monatlich</strong>{' '}
            gebündelt – wie ein schlanker Wartungsvertrag mit Persönlichkeit.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* Basis */}
            <article className="relative flex flex-col rounded-3xl border-2 border-blue-500 bg-white p-8 shadow-xl shadow-blue-500/10 md:p-10">
              <span className="absolute -top-3 left-8 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                Beliebter Einstieg
              </span>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Website-Betreuung Basis</h3>
                <p className="mt-3 text-slate-600">
                  Für Unternehmen, die ihre Website zuverlässig gepflegt, sicher und aktuell halten möchten.
                </p>
              </div>
              <p className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                79&nbsp;€{' '}
                <span className="text-lg font-semibold text-slate-500">
                  / Monat <span className="sr-only">Website Betreuung Darmstadt Basis Paket</span>
                </span>
              </p>
              <ul className="flex-1 space-y-3 text-slate-700">
                {[
                  'Technische Prüfung',
                  'Sicherheitschecks',
                  'Backups / Wiederherstellung je nach System',
                  'Kleine Text- und Bildänderungen',
                  'Bis zu 2 Stunden kleinere Arbeiten pro Monat',
                  'Persönliche Betreuung',
                  'Kurze Rückmeldung bei Auffälligkeiten',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm md:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Basis-Betreuung anfragen
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </article>

            {/* Wachstum */}
            <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Website-Betreuung Wachstum</h3>
                <p className="mt-3 text-slate-600">
                  Für Unternehmen, die ihre Website nicht nur pflegen, sondern regelmäßig verbessern möchten.
                </p>
              </div>
              <p className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                120&nbsp;€ <span className="text-lg font-semibold text-slate-500">/ Monat</span>
              </p>
              <ul className="flex-1 space-y-3 text-slate-700">
                {[
                  'Alles aus Basis',
                  'Kleine SEO-Optimierungen',
                  'Monatlicher Sichtbarkeits-/Strukturcheck',
                  'Optimierung von CTAs und Inhalten',
                  'Kleinere neue Abschnitte nach Bedarf',
                  'Bis zu 3 Stunden monatliche Arbeiten',
                  'Empfehlungen für bessere Anfragen',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm md:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-slate-900 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Wachstums-Betreuung anfragen
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 6 Zielgruppen */}
      <section className="border-t border-slate-100 bg-white px-6 py-16 md:py-24" aria-labelledby="zielgruppen-heading">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="zielgruppen-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Für wen lohnt sich eine laufende Website-Betreuung?
            </h2>
            <p className="flex items-center gap-2 text-sm font-medium text-slate-500 md:max-w-xs md:text-right">
              <MapPin className="h-4 w-4 shrink-0 text-blue-600" aria-hidden />
              Südhessen &amp; Rhein-Main – persönlich vor Ort erreichbar
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {zielgruppen.map((line) => (
              <li
                key={line}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-800"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-slate-600 md:text-left">
            Ob Handwerk oder Dienstleistung: Wenn Ihre Website{' '}
            <strong className="font-medium text-slate-800">in Darmstadt &amp; Umgebung</strong> Kunden überzeugen
            soll, zahlt sich Pflege aus – statt Krisen nach Jahren ohne Update.
          </p>
        </div>
      </section>

      {/* 7 Ablauf */}
      <section className="border-t border-slate-100 bg-slate-50 px-6 py-16 md:py-24" aria-labelledby="ablauf-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="ablauf-heading" className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            So einfach startet die Betreuung
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ablaufSteps.map(({ step, title, text }) => (
              <li key={step} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {step}
                </span>
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8 Warum 319 */}
      <section className="border-t border-slate-100 bg-white px-6 py-16 md:py-24" aria-labelledby="warum-heading">
        <div className="mx-auto max-w-4xl">
          <h2 id="warum-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Direkte Betreuung statt anonymer Agentur-Support
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            319Webdesign ist ein <strong className="font-medium text-slate-800">persönlicher Ansprechpartner aus Pfungstadt</strong>{' '}
            für Unternehmen aus Darmstadt und Umgebung. Kurze Wege, direkte Kommunikation und jemand, der Ihre Website
            und die Ziele Ihres Betriebs kennt – das unterscheidet echte{' '}
            <strong className="font-medium text-slate-800">Webdesign-Betreuung</strong> von austauschbarem
            First-Level-Support.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Persönlicher Ansprechpartner statt Ticketschlange',
              'Regionale Nähe in Südhessen',
              'Moderne technische Umsetzung',
              'Fokus auf schnelle, saubere Websites',
              'Verständnis für lokale Unternehmen',
              'Nicht nur Technik: Nutzerführung und Anfragen im Blick',
            ].map((item) => (
              <li key={item} className="flex gap-2 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9 SEO / Local */}
      <section className="border-t border-slate-100 bg-gradient-to-b from-blue-50/60 to-white px-6 py-16 md:py-24" aria-labelledby="seo-local-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="seo-local-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Website-Betreuung mit Blick auf Sichtbarkeit
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Website-Betreuung ist mehr als Klicken auf „Update“. Kleine Verbesserungen an Struktur, Ladezeit,
              Meta-Daten, interner Verlinkung und Inhalten können langfristig helfen,{' '}
              <strong className="font-medium text-slate-800">lokal besser gefunden</strong> zu werden – ohne gleich ein
              riesiges SEO-Projekt zu starten.
            </p>
            <p>
              Für <strong className="font-medium text-slate-800">Website Betreuung Darmstadt</strong> und{' '}
              <strong className="font-medium text-slate-800">Website Pflege</strong> mit Substanz kombiniere ich
              technische Zuverlässigkeit mit denken in{' '}
              <strong className="font-medium text-slate-800">SEO-Grundlagen</strong>. Das Wachstums-Paket ergänzt das
              gezielt. Vertiefend zu Keyword-Strategie und Local SEO finden Sie Infos auf der Seite{' '}
              <Link href="/seo-darmstadt" className="font-semibold text-blue-600 underline-offset-2 hover:underline">
                SEO Darmstadt
              </Link>
              .
            </p>
            <p className="text-base text-slate-500">
              Für Unternehmen in <strong className="font-medium text-slate-700">Darmstadt und Umgebung</strong> ist das
              ein pragmatischer Weg: Website sicher und aktuell halten – und dabei die Basis für{' '}
              <strong className="font-medium text-slate-700">lokale Sichtbarkeit</strong> nicht aus den Augen verlieren.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link
              href="/webdesign/darmstadt"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
            >
              Webdesign Darmstadt
            </Link>
            <Link
              href="/leistungen/webdesign-launch"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
            >
              Webdesign &amp; Launch
            </Link>
            <Link
              href="/website-relaunch"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
            >
              Website-Relaunch
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      {/* 10 FAQ */}
      <section
        id="faq-betreuung"
        className="scroll-mt-28 border-t border-slate-200 bg-slate-50 px-6 py-16 md:py-24"
        aria-labelledby="faq-betreuung-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2 id="faq-betreuung-heading" className="mb-10 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Häufige Fragen zur Website-Betreuung
          </h2>
          <div className="space-y-3">
            {betreuungFaqItems.map((item) => (
              <details
                key={item.question}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm open:shadow-md"
              >
                <summary className="cursor-pointer list-none px-5 py-4 text-left transition-colors hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-base font-bold text-slate-900 md:text-lg">{item.question}</span>
                    <span
                      className="mt-0.5 shrink-0 text-blue-600 transition-transform group-open:rotate-180"
                      aria-hidden
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                  <p className="text-base leading-relaxed text-slate-700">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11 Abschluss-CTA */}
      <section className="border-t border-slate-200 bg-white px-6 py-20 md:py-28" aria-labelledby="closing-heading">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 px-8 py-14 text-center shadow-2xl md:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_50%)]" />
          <div className="relative">
            <h2 id="closing-heading" className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ihre Website soll sicher, aktuell und professionell bleiben?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-blue-100">
              Dann lassen Sie uns kurz prüfen, welche Betreuung für Ihre Website sinnvoll ist.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-10 py-4 font-semibold text-slate-900 shadow-lg transition hover:bg-blue-50"
            >
              Website-Betreuung anfragen
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <p className="mt-6 text-sm text-blue-200/90">
              Für Unternehmen aus Darmstadt, Pfungstadt und Umgebung.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
