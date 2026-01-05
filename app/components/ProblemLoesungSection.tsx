'use client'

import { motion } from 'framer-motion'
import { XCircle, CheckCircle2 } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

const problemLoesungData = [
  {
    problem: 'Veraltetes Design',
    problemDesc: 'Ihre Website schreckt Kunden ab und wirkt unprofessionell – das kostet Sie täglich neue Aufträge.',
    solution: 'Modernste Layouts',
    solutionDesc: 'Wir schaffen Designs, die Vertrauen erzeugen und Ihre Qualität widerspiegeln – so gewinnen Sie mehr Kunden.',
    icon: XCircle,
  },
  {
    problem: 'Keine Anfragen',
    problemDesc: 'Ihre Website ist nur eine tote Visitenkarte – Besucher werden nicht zu Kunden und Sie verlieren Umsatz.',
    solution: 'Conversion-Optimierung',
    solutionDesc: 'Wir verwandeln Besucher in Kunden durch klare Handlungsaufforderungen und strategische Platzierung.',
    icon: XCircle,
  },
  {
    problem: 'Technische Sorgen',
    problemDesc: 'Angst vor Wartung, Fehlern und Zeitverlust raubt Ihnen die Energie für Ihr eigentliches Business.',
    solution: 'Full-Service-Betreuung',
    solutionDesc: 'Wir übernehmen alles technisch – Sie haben den Kopf frei für Ihr Business und gewinnen wertvolle Zeit.',
    icon: XCircle,
  },
]

export default function ProblemLoesungSection() {
  return (
    <section id="leistungen" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Von Problem zu Lösung
          </h2>
        </motion.div>

        <div className="space-y-12">
          {problemLoesungData.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="bg-red-950/20 border border-red-900/50 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <item.icon className="w-6 h-6 text-red-400" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-red-400">Problem</h3>
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.problem}</h4>
                <p className="text-slate-400">{item.problemDesc}</p>
              </div>

              <div className="bg-green-950/20 border border-green-900/50 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-green-400">Lösung</h3>
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.solution}</h4>
                <p className="text-slate-400">{item.solutionDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

