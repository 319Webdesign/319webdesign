import Image from 'next/image'
import Link from 'next/link'
import { Speaker } from 'lucide-react'

/**
 * Social Proof / Referenz da-sound – nur /webdesign/pfungstadt, eine H2, keine weiteren Überschriften.
 */
export default function PfungstadtDaSoundReferenzSection() {
  return (
    <section
      className="border-y border-blue-100/80 bg-gradient-to-b from-blue-50/50 via-white to-slate-50/40 py-16 md:py-20 px-6"
      aria-labelledby="pfungstadt-dasound-referenz-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg shadow-slate-200/50">
          <div className="border-b border-blue-100/70 bg-gradient-to-r from-blue-50/90 to-white px-6 py-4 md:px-10">
            <h2
              id="pfungstadt-dasound-referenz-heading"
              className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl"
            >
              Referenz aus Pfungstadt: da-sound
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 p-6 md:gap-12 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div className="space-y-4">
              <Link
                href="/portfolio/da-sound"
                className="group relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-md hover:ring-blue-200/60"
              >
                <Image
                  src="/dasound-header.png"
                  alt="Website von da-sound – Veranstaltungstechnik und Equipment-Vermietung, Pfungstadt"
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <span className="sr-only">Zur Portfolio-Fallstudie da-sound</span>
              </Link>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600"
                  aria-hidden
                >
                  <Speaker className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span>Veranstaltungstechnik &amp; Miet-Katalog – Next.js</span>
              </div>
            </div>

            <div className="space-y-6 text-slate-700">
              <p className="text-lg leading-relaxed">
                Ein gutes Beispiel für lokales Webdesign mit Wirkung ist <strong>da-sound</strong> aus{' '}
                <strong>Pfungstadt</strong> – ein Anbieter für Veranstaltungstechnik und
                Equipment-Vermietung in der Region. Die neue Website verbindet einen übersichtlichen
                Miet-Katalog mit sauberer URL-Struktur und maximaler Ladegeschwindigkeit.
              </p>
              <p className="rounded-xl border border-blue-200/80 bg-blue-50/60 px-5 py-4 text-base font-medium leading-relaxed text-slate-800 md:text-lg">
                Das Ergebnis: bessere Sichtbarkeit bei <strong>lokalen Suchanfragen</strong>, weniger
                Anfragen per Telefon für Standardfragen – und mehr qualifizierte Kundenanfragen über die
                Website.
              </p>
              <p className="text-lg leading-relaxed">
                Was bei <strong>da-sound</strong> funktioniert, funktioniert auch für Ihren Betrieb: ob
                Handwerk, Dienstleistung oder Immobilien.
              </p>
              <p>
                <Link
                  href="/portfolio/da-sound"
                  className="inline-flex items-center gap-1 font-semibold text-blue-600 underline-offset-4 hover:text-blue-700 hover:underline"
                >
                  Fallstudie da-sound ansehen
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
