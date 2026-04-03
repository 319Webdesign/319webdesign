import Image from 'next/image'
import { Clapperboard, Flower2 } from 'lucide-react'

/**
 * Lokale Referenzen Heinerfilm & 1klang – nur /webdesign/darmstadt.
 * Eine H2, Projektnamen ohne H-Tags.
 */
export default function DarmstadtReferenzenSection() {
  return (
    <section
      className="border-t border-slate-200 bg-white py-20 md:py-24 px-6"
      aria-labelledby="darmstadt-referenzen-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="darmstadt-referenzen-heading"
          className="mb-5 text-center text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
        >
          Referenzen aus <strong>Darmstadt</strong>: <strong>Heinerfilm</strong> &amp;{' '}
          <strong>1klang Massage</strong>
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-slate-700 md:text-xl">
          Zwei Beispiele aus <strong>Darmstadt</strong> zeigen, was lokales Webdesign mit Wirkung
          bedeutet:
        </p>

        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:gap-10">
          <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/50 shadow-sm ring-1 ring-slate-900/[0.02]">
            <div className="relative aspect-[16/10] w-full shrink-0 bg-slate-900/5">
              <Image
                src="/heinerfilm_header.jpeg"
                alt="Website-Referenz Heinerfilm – Videoproduktion und Medienagentur in Darmstadt"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"
                aria-hidden
              />
              <span
                className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-blue-600 shadow-md ring-1 ring-slate-200/80"
                aria-hidden
              >
                <Clapperboard className="h-5 w-5" strokeWidth={2} />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <p className="mb-4 text-lg font-bold leading-snug text-slate-900">
                <span className="text-blue-600">Heinerfilm</span>
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                <strong>Heinerfilm</strong> ist eine Medienagentur aus <strong>Darmstadt</strong>, die auf
                hochwertige Videoproduktion spezialisiert ist. Die neue Website verbindet ein modernes,
                mediengerechtes Design mit einer technisch optimierten Video-Pipeline und starker
                regionaler Sichtbarkeit. Das Ergebnis: Die Seite lädt trotz umfangreichem Videomaterial
                blitzschnell und rankt für relevante <strong>lokale Suchanfragen</strong> in{' '}
                <strong>Darmstadt</strong>.
              </p>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/50 shadow-sm ring-1 ring-slate-900/[0.02]">
            <div className="relative aspect-[16/10] w-full shrink-0 bg-slate-900/5">
              <Image
                src="/1klang-massage-preview.png"
                alt="Website-Referenz 1klang Massage – Wellness und Entspannung in Darmstadt"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent"
                aria-hidden
              />
              <span
                className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-amber-600 shadow-md ring-1 ring-slate-200/80"
                aria-hidden
              >
                <Flower2 className="h-5 w-5" strokeWidth={2} />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <p className="mb-4 text-lg font-bold leading-snug text-slate-900">
                <span className="text-blue-600">1klang Massage</span>
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                <strong>1klang Massage</strong> aus <strong>Darmstadt</strong> steht für ein anderes
                Anforderungsprofil: Hier stehen Vertrauen, Ruhe und persönliche Ansprache im Vordergrund.
                Die Website transportiert diese Atmosphäre digital — mit einem Design, das Seriosität und
                Wärme verbindet, einer klaren Buchungsführung und lokaler SEO-Optimierung für den
                Darmstädter Markt.
              </p>
            </div>
          </article>
        </div>

        <p className="mx-auto max-w-3xl border-t border-slate-200 pt-12 text-center text-lg leading-relaxed text-slate-700 md:text-xl">
          Beide Projekte zeigen: Webdesign ist keine Einheitslösung. Es geht darum, die Identität und die
          Ziele eines Unternehmens digital zu übersetzen — und dabei nicht auf Performance und
          Auffindbarkeit zu verzichten.
        </p>
      </div>
    </section>
  )
}
