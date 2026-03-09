'use client'

import { Shield, HardDrive, Gauge, UserRound } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Wöchentliche Sicherheits-Updates',
    text: 'Wir bringen Ihr System wöchentlich auf den neuesten Stand und schließen Sicherheitslücken. So bleibt die Webpräsenz von Unternehmen aus der Wissenschaftsstadt Darmstadt jederzeit vor Angriffen geschützt – Sie können sich auf Ihr Kerngeschäft konzentrieren.',
  },
  {
    icon: HardDrive,
    title: 'Tägliche Backups',
    text: 'Jede Nacht erfolgt eine vollständige Sicherung Ihrer Website. Sollte am Standort Darmstadt einmal etwas schiefgehen, ist Ihre Seite innerhalb kürzester Zeit auf dem Stand des Vortags wiederhergestellt – ohne Datenverlust für den Darmstädter Mittelstand.',
  },
  {
    icon: Gauge,
    title: 'Performance-Check (99/100 Monitoring)',
    text: 'Wir überwachen die Ladezeit Ihrer Website aktiv. Unser Ziel ist ein PageSpeed von 99/100, damit Nutzer am Luisenplatz oder im Martinsviertel sofortigen Zugriff haben und nicht zur Konkurrenz abspringen. So bleibt Ihr Online-Auftritt messbar stark.',
  },
  {
    icon: UserRound,
    title: 'Persönlicher Support',
    text: 'Kein anonymes Ticketsystem – Sie haben einen direkten Ansprechpartner als lokalen Partner in der Region. Bei Fragen oder Anpassungswünschen ist Ihr Ansprechpartner in Darmstadt sofort erreichbar und kennt Ihr Projekt. Das schätzt der Darmstädter Mittelstand.',
  },
]

export default function SicherheitPerformanceSection() {
  return (
    <section
      className="py-16 md:py-20 px-6 bg-slate-50"
      aria-label="Digitale Sicherheit und Performance in Darmstadt"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10 md:mb-12">
          Digitale Sicherheit & Performance für Ihr Unternehmen in Darmstadt
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-lg mb-2">
                      <span>{item.title}</span>
                    </p>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
