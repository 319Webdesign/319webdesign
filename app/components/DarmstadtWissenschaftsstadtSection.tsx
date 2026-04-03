import Image from 'next/image'
import { Cpu, MapPinned } from 'lucide-react'

const techLogos = [
  { src: '/tech-logos/nextjs.svg', label: 'Next.js' },
  { src: '/tech-logos/react.svg', label: 'React' },
  { src: '/tech-logos/typescript.svg', label: 'TypeScript' },
] as const

/**
 * Lokaler Einstieg nur für /webdesign/darmstadt – eine H2, zwei Absätze, keine H3/H4.
 */
export default function DarmstadtWissenschaftsstadtSection() {
  return (
    <section
      className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 md:py-20 px-6"
      aria-labelledby="darmstadt-wissenschaftsstadt-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2
              id="darmstadt-wissenschaftsstadt-heading"
              className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
            >
              Webdesign in <strong>Darmstadt</strong>: Die <strong>Wissenschaftsstadt</strong> verdient
              Websites, die performen
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-slate-700">
              <strong>Darmstadt</strong> ist mehr als eine Großstadt in <strong>Südhessen</strong> — es
              ist ein Wirtschafts- und Technologiezentrum mit über 160.000 Einwohnern, internationalen
              Unternehmen wie der ESA und Software AG, einer starken Hochschullandschaft und einer
              lebhaften lokalen Unternehmensszene. Genau dieses Umfeld stellt hohe Ansprüche: Wer hier
              als Unternehmen online auftreten will, braucht eine Website, die nicht nur gut aussieht,
              sondern auch technisch auf dem Niveau der Stadt ist.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              Als Webdesigner mit Sitz in Pfungstadt, direkt vor den Toren <strong>Darmstadt</strong>s,
              kenne ich den lokalen Markt aus nächster Nähe. Ich entwickle Websites für Unternehmen in{' '}
              <strong>Darmstadt</strong> und allen Stadtteilen — von <strong>Bessungen</strong> über{' '}
              <strong>Eberstadt</strong> und <strong>Kranichstein</strong> bis <strong>Arheilgen</strong>{' '}
              und <strong>Wixhausen</strong> — die in Google gefunden werden und Anfragen generieren.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-blue-600/10 via-slate-900/[0.03] to-blue-500/5 p-8 shadow-sm"
            aria-hidden="true"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-500/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 left-1/4 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl" />

            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-3 text-slate-800">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-sm ring-1 ring-slate-200/80">
                  <MapPinned className="h-6 w-6 text-blue-600" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                    Regional und technisch
                  </p>
                  <p className="text-base font-medium text-slate-800">
                    Wissenschaftsstadt und Next.js-Stack
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 rounded-xl border border-slate-200/80 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm">
                {techLogos.map(({ src, label }) => (
                  <div
                    key={src}
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-200/80"
                    title={label}
                  >
                    <Image
                      src={src}
                      alt=""
                      width={28}
                      height={28}
                      className="opacity-90"
                      unoptimized
                    />
                  </div>
                ))}
                <div className="ml-auto flex items-center gap-2 text-slate-600">
                  <Cpu className="h-5 w-5 shrink-0 text-blue-600" aria-hidden />
                  <span className="text-sm font-medium">Performance-first</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
