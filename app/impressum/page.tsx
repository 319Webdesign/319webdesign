'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Impressum
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              {/* Angaben gemäß § 5 TMG */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p>
                      <strong className="text-white">[PLATZHALTER: Firmenname]</strong><br />
                      [PLATZHALTER: Rechtsform - z.B. Einzelunternehmer, GbR, GmbH]
                    </p>
                    <p className="mt-3">
                      <strong className="text-white">[PLATZHALTER: Name des Inhabers/Geschäftsführers]</strong>
                    </p>
                    <p className="mt-3">
                      <strong className="text-white">Berufsbezeichnung:</strong> [PLATZHALTER: z.B. Webdesigner]
                    </p>
                    <p className="mt-3">
                      <strong className="text-white">Anschrift:</strong><br />
                      [PLATZHALTER: Straße und Hausnummer]<br />
                      [PLATZHALTER: Postleitzahl und Ort]<br />
                      [PLATZHALTER: Land]
                    </p>
                    <p className="mt-3">
                      <strong className="text-white">Steuernummer:</strong> [PLATZHALTER: Steuernummer]<br />
                      <strong className="text-white">Umsatzsteuer-ID:</strong> [PLATZHALTER: USt-IdNr. - falls vorhanden]
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Kontakt */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Kontakt
                </h2>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p>
                      <strong className="text-white">E-Mail:</strong>{' '}
                      <a 
                        href="mailto:[PLATZHALTER: E-Mail-Adresse]" 
                        className="text-[#3B82F6] hover:text-blue-400 transition-colors duration-300 underline"
                      >
                        [PLATZHALTER: E-Mail-Adresse]
                      </a>
                    </p>
                    <p className="mt-3">
                      <strong className="text-white">Telefon:</strong>{' '}
                      <a 
                        href="tel:[PLATZHALTER: Telefonnummer]" 
                        className="text-[#3B82F6] hover:text-blue-400 transition-colors duration-300 underline"
                      >
                        [PLATZHALTER: Telefonnummer]
                      </a>
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Haftung für Inhalte */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Haftung für Inhalte
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
              </motion.section>

              {/* Haftung für Links */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Haftung für Links
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p>
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
              </motion.section>

              {/* Urheberrecht */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Urheberrecht
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                  <p>
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </motion.section>

              {/* Online-Streitbeilegung */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Online-Streitbeilegung
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  </p>
                  <p>
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#3B82F6] hover:text-blue-400 transition-colors duration-300 underline"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p>
                    Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

