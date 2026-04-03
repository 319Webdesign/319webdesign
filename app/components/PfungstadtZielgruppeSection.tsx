const rows = [
  { label: 'Handwerksbetriebe', text: 'Handwerksbetriebe' },
  { label: 'Immobilienmakler', text: 'Immobilienmakler & Verwalter' },
  { label: 'Dienstleister', text: 'Dienstleister & Freiberufler' },
  { label: 'Gastronomie', text: 'Gastronomie & lokale Einzelhändler' },
  { label: 'Praxen', text: 'Ärzte, Therapeuten & Praxen' },
] as const

/**
 * Lokale Zielgruppen – nur /webdesign/pfungstadt (ersetzt die Standard-Region-Sektion).
 */
export default function PfungstadtZielgruppeSection() {
  return (
    <section
      className="bg-white px-6 py-20"
      aria-labelledby="pfungstadt-zielgruppe-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="pfungstadt-zielgruppe-heading"
          className="mb-6 text-center text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
        >
          Für wen ist Webdesign in Pfungstadt besonders relevant?
        </h2>
        <p className="mb-10 text-left text-lg leading-relaxed text-slate-700 md:text-xl">
          Ich arbeite vor allem mit Unternehmen zusammen, die in <strong>Pfungstadt</strong> und der
          näheren Umgebung – <strong>Darmstadt</strong>, <strong>Griesheim</strong>,{' '}
          <strong>Eberstadt</strong>, <strong>Weiterstadt</strong>,{' '}
          <strong>Seeheim-Jugenheim</strong> – tätig sind und ihren lokalen Kundenstamm digital
          erschließen wollen:
        </p>

        <ul className="mb-10 space-y-4 text-left">
          {rows.map(({ label, text }) => (
            <li
              key={label}
              className="flex flex-col gap-0.5 rounded-xl border border-slate-200 bg-slate-50/80 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <span className="shrink-0 font-bold text-blue-600 sm:min-w-[11rem]">{label}:</span>
              <span className="text-slate-700">{text}</span>
            </li>
          ))}
        </ul>

        <p className="text-left text-lg leading-relaxed text-slate-700 md:text-xl">
          Jede Branche hat andere Anforderungen – und jede Website, die ich entwickle, wird
          individuell auf diese Anforderungen zugeschnitten. Kein Template, kein Baukasten.
        </p>
      </div>
    </section>
  )
}
