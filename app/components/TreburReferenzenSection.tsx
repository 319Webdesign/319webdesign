import Link from 'next/link'
import PortfolioSection from './PortfolioSection'

/**
 * Referenzen für /webdesign/trebur – nutzt die bestehende Portfolio-Komponente.
 */
export default function TreburReferenzenSection() {
  return (
    <div>
      <section className="bg-white px-6 py-10 md:py-12" aria-label="Regionale Betreuung">
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-700 md:text-xl">
          Ich betreue Kunden in der gesamten Rhein-Main-Region – von Trebur über Groß-Gerau und
          Rüsselsheim bis{' '}
          <Link
            href="/webdesign/darmstadt"
            className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800"
          >
            Darmstadt
          </Link>
          . Ausgewählte Projekte sehen Sie im{' '}
          <Link
            href="/portfolio"
            className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800"
          >
            Portfolio
          </Link>
          .
        </p>
      </section>
      <PortfolioSection variant="light" />
    </div>
  )
}
