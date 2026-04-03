import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Einzugsgebiet Darmstadt & Umgebung – nur /webdesign/darmstadt. Eine H2, kein H3.
 */
export default function DarmstadtEinzugsgebietSection() {
  return (
    <section
      className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white py-20 md:py-24 px-6"
      aria-labelledby="darmstadt-einzugsgebiet-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="darmstadt-einzugsgebiet-heading"
          className="mb-8 text-center text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
        >
          <strong>Darmstadt</strong> und Umgebung: Ein Einzugsgebiet mit Potenzial
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-slate-700 md:text-xl md:leading-relaxed">
          Mit Sitz in <strong>Pfungstadt</strong> bin ich zentral in der Region positioniert und betreue
          Unternehmen in ganz <strong>Darmstadt</strong> sowie den umliegenden Gemeinden:{' '}
          <strong>Griesheim</strong>, <strong>Weiterstadt</strong>, <strong>Eberstadt</strong>,{' '}
          <strong>Seeheim-Jugenheim</strong>, <strong>Mühltal</strong> und <strong>Reinheim</strong>. Die
          kurzen Wege ermöglichen persönliche Beratung vor Ort — ein Vorteil, den größere Agenturen aus
          Frankfurt oder anderen Städten schlicht nicht bieten können.
        </p>

        <div className="mx-auto max-w-3xl rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-10 text-center shadow-sm ring-1 ring-slate-900/[0.03] md:p-12">
          <p className="mb-8 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
            Starten Sie mit einem unverbindlichen Erstgespräch. Ich analysiere Ihre aktuelle
            Online-Situation, zeige konkrete Verbesserungspotenziale auf — und wir klären gemeinsam, welche
            Lösung zu Ihrem Unternehmen und Budget passt.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/50"
          >
            Jetzt Erstgespräch anfragen
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
