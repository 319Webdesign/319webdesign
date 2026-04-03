import Image from 'next/image'

/**
 * Vertrauens-Sektion nur für /webdesign/pfungstadt – lokale Verwurzelung, eine H2, kein H3/H4.
 */
export default function PfungstadtRegionalTrustSection() {
  return (
    <section
      className="border-b border-slate-100 bg-white py-16 md:py-20 px-6"
      aria-labelledby="pfungstadt-regional-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2
              id="pfungstadt-regional-heading"
              className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
            >
              Webdesign in Pfungstadt: Regional verwurzelt, digital stark
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-slate-700">
              Pfungstadt ist eine lebhafte Stadt mit rund 25.000 Einwohnern im Herzen{' '}
              <strong>Südhessens</strong> – direkt südlich von <strong>Darmstadt</strong>, gut
              vernetzt in der gesamten Rhein-Main-Region. Genau diese Lage macht Pfungstadt für{' '}
              <strong>lokale Unternehmen</strong>{' '}
              interessant: Die Kaufkraft ist hoch, die Konkurrenz überschaubar – und wer online
              sichtbar ist, hat einen klaren Vorteil gegenüber dem regionalen Wettbewerb.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              Als Webdesigner mit Sitz in Pfungstadt kenne ich diesen Markt aus eigener Erfahrung.
              Ich weiß, welche Branchen in der Region aktiv nach digitalen Lösungen suchen, wie
              lokale Kunden Entscheidungen treffen und worauf es bei einer Website ankommt, die nicht
              nur gut aussieht – sondern auch gefunden wird.
            </p>
          </div>

          <figure className="flex justify-center lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
              <Image
                src="/pfungstadt-marktplatz.png"
                alt="Historische Kirche und Fachwerkhäuser in Pfungstadt, Südhessen – regionale Verwurzelung von 319Webdesign"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33rem"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
