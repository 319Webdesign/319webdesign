/**
 * Business-Anforderungen & Lösungsstrategie – nur /webdesign/darmstadt.
 * Eine H2, Card-Titel ohne H-Tags (fett gesetzt).
 */
export default function DarmstadtBusinessRequirementsSection() {
  return (
    <section
      className="border-b border-slate-100 bg-slate-50 py-16 md:py-24 px-6"
      aria-labelledby="darmstadt-business-requirements-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="darmstadt-business-requirements-heading"
          className="mb-6 max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
        >
          Was lokale Unternehmen in <strong>Darmstadt</strong> wirklich brauchen
        </h2>

        <p className="mb-14 max-w-3xl text-lg leading-relaxed text-slate-700 md:text-xl md:leading-relaxed">
          Der Wettbewerb in <strong>Darmstadt</strong> ist intensiver als in den umliegenden Gemeinden. Das
          bedeutet: Eine durchschnittliche Website reicht nicht aus, um in den Suchergebnissen vorne zu
          stehen. Es braucht eine klare Strategie — technische Exzellenz, lokale Relevanz und Content, der
          echten Mehrwert bietet.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          <article className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm ring-1 ring-slate-900/[0.02]">
            <p className="mb-4 text-lg font-bold leading-snug text-slate-900">
              <span className="text-blue-600">Technische Performance</span>
            </p>
            <p className="flex-1 text-base leading-relaxed text-slate-700">
              <strong>Next.js</strong>-Websites mit <strong>PageSpeed 99/100</strong> laden nachweislich
              schneller als der Branchendurchschnitt — das verbessert nicht nur die Nutzererfahrung, sondern
              ist heute ein direkter <strong>Google-Rankingfaktor</strong>.
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm ring-1 ring-slate-900/[0.02]">
            <p className="mb-4 text-lg font-bold leading-snug text-slate-900">
              <span className="text-blue-600">Lokale Sichtbarkeit</span>
            </p>
            <p className="flex-1 text-base leading-relaxed text-slate-700">
              Jede Website wird von Anfang an für lokale Suchanfragen in <strong>Darmstadt</strong> und der
              Region optimiert — mit strukturierten Daten, lokalem Content und der richtigen
              Keyword-Strategie.
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm ring-1 ring-slate-900/[0.02]">
            <p className="mb-4 text-lg font-bold leading-snug text-slate-900">
              <span className="text-blue-600">Conversion-Fokus</span>
            </p>
            <p className="flex-1 text-base leading-relaxed text-slate-700">
              Eine Website, die nicht zu Anfragen führt, erfüllt ihren Zweck nicht. Ich entwickle klare
              Nutzerführung, überzeugende Inhalte und messbare Kontaktpunkte.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
