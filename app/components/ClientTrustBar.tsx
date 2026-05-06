import Image from 'next/image'
import Link from 'next/link'
import { clientLogos } from '../../config/clientLogos'

export default function ClientTrustBar() {
  return (
    <section
      className="relative mt-16 w-full bg-white py-16 md:mt-24 md:py-24 lg:py-28"
      aria-labelledby="client-trust-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <h2
          id="client-trust-heading"
          className="mx-auto mb-4 max-w-4xl text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:mb-5 md:text-4xl"
        >
          Unternehmen aus{' '}
          <Link
            href="/webdesign/darmstadt"
            className="text-blue-700 underline decoration-blue-200 underline-offset-[3px] transition-colors hover:text-blue-800 hover:decoration-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
          >
            Darmstadt
          </Link>
          , die bereits mehr Anfragen über ihre Website gewinnen
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-slate-600 md:mb-14 md:text-lg">
          Websites für Handwerk, Dienstleister und lokale Betriebe – entwickelt für{' '}
          <Link
            href="/seo-darmstadt"
            className="text-blue-700 underline decoration-blue-200 underline-offset-[3px] transition-colors hover:text-blue-800 hover:decoration-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
          >
            lokale Suchmaschinenoptimierung
          </Link>{' '}
          und planbar neue Kundenanfragen.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-10 lg:gap-x-11">
          {clientLogos.map((client) => (
            <li key={client.logoSrc} className="flex shrink-0 items-center justify-center overflow-visible">
              <div className="relative h-12 w-[152px] sm:h-14 sm:w-[176px] md:h-16 md:w-[200px] origin-center transition-transform duration-300 ease-out will-change-transform hover:scale-[1.05]">
                <Image
                  src={client.logoSrc}
                  alt={`Logo: ${client.name}`}
                  fill
                  unoptimized
                  className={`object-contain object-center p-0.5 ${
                    client.logoClass
                      ? client.logoClass
                      : 'opacity-100'
                  }`}
                  sizes="(max-width: 640px) 152px, (max-width: 768px) 176px, 200px"
                />
              </div>
            </li>
          ))}
        </ul>
        <ul
          className="mt-10 flex list-none flex-col flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-sm text-slate-600 sm:flex-row md:mt-12 md:gap-x-10 md:text-[0.9375rem]"
          aria-label="Vertrauenshinweise"
        >
          <li className="flex items-center gap-2">
            <span aria-hidden className="font-semibold text-emerald-600">
              ✓
            </span>
            Projekte aus Darmstadt & Region
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden className="font-semibold text-emerald-600">
              ✓
            </span>
            Fokus auf lokale Unternehmen
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden className="font-semibold text-emerald-600">
              ✓
            </span>
            Persönliche Zusammenarbeit
          </li>
        </ul>
      </div>
    </section>
  )
}
