import Image from 'next/image'

/**
 * Lokaler Einstieg nur für /webdesign/darmstadt – eine H2, zwei Absätze, keine H3/H4.
 */
export default function DarmstadtWissenschaftsstadtSection() {
  return (
    <section
      className="bg-gradient-to-b from-slate-50 to-white px-6 py-16 md:py-20"
      aria-labelledby="darmstadt-wissenschaftsstadt-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2
              id="darmstadt-wissenschaftsstadt-heading"
              className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
            >
              Unternehmen in <strong>Darmstadt</strong> brauchen Websites, die sichtbar machen
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

          <figure className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
            <Image
              src="/darmstadt-wissenschaftsstadt-visual.png"
              alt="Illustration Webdesign Darmstadt: Laptop mit Website-Mockup vor dem Luisenplatz, Karten zu lokaler SEO, Performance, Mobile und Sicherheit, Google-Sichtbarkeit, Karte Darmstadt & Umgebung sowie Kundenstimme."
              width={1024}
              height={682}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 92vw, 560px"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
