import Image from 'next/image'
import { clientLogos } from '../../config/clientLogos'

export default function ClientTrustBar() {
  return (
    <section
      className="relative w-full bg-slate-100 border-y border-slate-200 py-8 md:py-10"
      aria-labelledby="client-trust-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <p
          id="client-trust-heading"
          className="text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500 mb-6 md:mb-8"
        >
          Vertrauen durch Zusammenarbeit
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-10 lg:gap-x-12">
          {clientLogos.map((client) => (
            <li key={client.logoSrc} className="flex shrink-0 items-center justify-center overflow-visible">
              <div className="relative h-12 w-[148px] sm:h-14 sm:w-[168px] origin-center transition-transform duration-300 ease-out will-change-transform hover:scale-[1.05]">
                <Image
                  src={client.logoSrc}
                  alt={`Logo: ${client.name}`}
                  fill
                  unoptimized
                  className={`object-contain object-center p-1 ${
                    client.logoClass
                      ? client.logoClass
                      : 'opacity-100'
                  }`}
                  sizes="(max-width: 640px) 148px, 168px"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
