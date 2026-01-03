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

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Datenschutzerklärung
            </h1>
            
            <div className="space-y-8">
              {/* Einleitung */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  1. Datenschutz auf einen Blick
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    Allgemeine Hinweise
                  </h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>
              </motion.section>

              {/* Verantwortliche Stelle */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  2. Verantwortliche Stelle
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p>
                      <strong className="text-white"></strong>
                    </p>
                    <p className="mt-3">
                      <strong className="text-white"></strong>
                    </p>
                    <p className="mt-3">
                      <strong className="text-white">Anschrift:</strong><br />
                    </p>
                    <p className="mt-3">
                      <strong className="text-white">Kontakt:</strong><br />
                      E-Mail:{' '}
                      <a 
                        href="mailto:" 
                        className="text-[#3B82F6] hover:text-blue-400 transition-colors duration-300 underline"
                      >
                      </a>
                      <br />
                      Telefon:{' '}
                      <a 
                        href="tel:" 
                        className="text-[#3B82F6] hover:text-blue-400 transition-colors duration-300 underline"
                      >
                      </a>
                    </p>
                    <p className="mt-3">
                      <strong className="text-white">Steuernummer:</strong><br />
                      <strong className="text-white">Umsatzsteuer-ID:</strong>
                    </p>
                  </div>
                  <p>
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                  </p>
                </div>
              </motion.section>

              {/* Datenerfassung */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  3. Datenerfassung auf dieser Website
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    Cookies
                  </h3>
                  <p>
                    Diese Website nutzt Cookies. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Einige Cookies sind für den Betrieb der Website erforderlich (notwendige Cookies), während andere uns helfen, die Nutzung der Website zu analysieren und zu verbessern (Analytics-Cookies).
                  </p>
                  <p>
                    Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Banner anpassen oder Ihre Browser-Einstellungen ändern, um Cookies zu blockieren. Bitte beachten Sie, dass die Funktionalität der Website dadurch eingeschränkt sein kann.
                  </p>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    Server-Log-Dateien
                  </h3>
                  <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p>
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>
              </motion.section>

              {/* Kontaktformular */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  4. Kontaktformular
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                  </p>
                  <p>
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>
              </motion.section>

              {/* Ihre Rechte */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  5. Ihre Rechte
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Sie haben jederzeit das Recht:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
                    <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                    <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO)</li>
                    <li>Einschränkung der Datenverarbeitung zu verlangen, soweit wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns zu erheben (Art. 21 DSGVO)</li>
                    <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)</li>
                  </ul>
                  <p>
                    Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                  </p>
                  <p>
                    Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.
                  </p>
                </div>
              </motion.section>

              {/* Stand */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  6. Stand dieser Datenschutzerklärung
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                  </p>
                  <p>
                    <strong className="text-white">Stand:</strong> [PLATZHALTER: Datum - z.B. Januar 2024]
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

