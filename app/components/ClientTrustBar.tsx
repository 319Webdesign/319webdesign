import Image from 'next/image'
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
          className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl mb-10 md:mb-14 max-w-3xl mx-auto"
        >
          Vertrauen durch Zusammenarbeit
        </h2>
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
      </div>
    </section>
  )
}
