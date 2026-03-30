import Image from 'next/image'

const techItems = [
  { name: 'React', src: '/tech-logos/react.svg' },
  { name: 'Next.js', src: '/tech-logos/nextjs.svg' },
  { name: 'Tailwind CSS', src: '/tech-logos/tailwindcss.svg' },
  { name: 'Vercel', src: '/tech-logos/vercel.svg' },
  { name: 'TypeScript', src: '/tech-logos/typescript.svg' },
] as const

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative w-full bg-white py-14 md:py-20"
      aria-labelledby="tech-stack-heading"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">Technologie</p>
          <h2
            id="tech-stack-heading"
            className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Modern Tech Stack
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
            Wir setzen auf bewährte, zukunftssichere Technologien für maximale Performance und Skalierbarkeit.
          </p>
        </header>

        <ul className="flex flex-wrap items-start justify-center gap-x-10 gap-y-10 sm:gap-x-12 md:gap-x-14">
          {techItems.map(({ name, src }) => (
            <li key={src} className="flex w-[88px] flex-col items-center sm:w-[100px]">
              <Image
                src={src}
                alt=""
                width={56}
                height={56}
                unoptimized
                className="mb-3 h-14 w-14 object-contain object-center"
              />
              <span className="text-center text-xs font-medium text-slate-500 sm:text-sm">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
