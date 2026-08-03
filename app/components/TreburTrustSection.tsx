import Image from 'next/image'
import Link from 'next/link'
import { clientLogos } from '../../config/clientLogos'

const trustHighlights = [
  'Persönlicher Ansprechpartner',
  'DSGVO-konforme Umsetzung',
  'SEO inklusive',
  'Individuelles Design',
  'Schnelle Ladezeiten',
] as const

/**
 * Trust-Bereich für /webdesign/trebur – gleiche Optik wie ClientTrustBar, lokale Texte.
 */
export default function TreburTrustSection() {
  return (
    <section
      className="relative z-10 mt-0 w-full bg-white pb-16 pt-16 md:pb-24 md:pt-24 lg:pb-28 lg:pt-28"
      aria-labelledby="trebur-trust-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2
          id="trebur-trust-heading"
          className="mx-auto mb-4 max-w-4xl text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:mb-5 md:text-4xl"
        >
          Unternehmen aus der Region, die bereits mehr Anfragen über ihre Website gewinnen
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-slate-600 md:mb-14 md:text-lg">
          Websites für Handwerk, Dienstleister und lokale Betriebe – entwickelt für Sichtbarkeit in{' '}
          <Link
            href="/webdesign/trebur"
            className="rounded-sm text-blue-700 underline decoration-blue-200 underline-offset-[3px] transition-colors hover:text-blue-800 hover:decoration-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Trebur
          </Link>
          ,{' '}
          <Link
            href="/webdesign/darmstadt"
            className="rounded-sm text-blue-700 underline decoration-blue-200 underline-offset-[3px] transition-colors hover:text-blue-800 hover:decoration-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Darmstadt
          </Link>{' '}
          und der Rhein-Main-Region.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-10 lg:gap-x-11">
          {clientLogos.map((client) => (
            <li key={client.logoSrc} className="flex shrink-0 items-center justify-center overflow-visible">
              <div className="relative h-12 w-[152px] origin-center transition-transform duration-300 ease-out will-change-transform hover:scale-[1.05] sm:h-14 sm:w-[176px] md:h-16 md:w-[200px]">
                <Image
                  src={client.logoSrc}
                  alt={`Logo: ${client.name}`}
                  fill
                  unoptimized
                  className={`object-contain object-center p-0.5 ${client.logoClass ?? 'opacity-100'}`}
                  sizes="(max-width: 640px) 152px, (max-width: 768px) 176px, 200px"
                />
              </div>
            </li>
          ))}
        </ul>

        <ul
          className="mt-10 flex list-none flex-col flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-sm text-slate-600 sm:flex-row md:mt-12 md:gap-x-6 md:text-[0.9375rem] lg:gap-x-8"
          aria-label="Vertrauenshinweise"
        >
          {trustHighlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden className="font-semibold text-emerald-600">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
