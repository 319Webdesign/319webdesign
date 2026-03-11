/**
 * Google Indexing API – URLs als URL_UPDATED einreichen
 * Nutzt service-account.json im Projektroot.
 * Voraussetzung: Indexing API in der GCP Console aktiviert, Service-Account in Search Console als Nutzer hinzugefügt.
 */

const { google } = require('googleapis')
const path = require('path')

const KEY_FILE = path.join(__dirname, 'service-account.json')

// Liste der URLs, die bei Google als aktualisiert gemeldet werden sollen (aus Crawl-Daten „Von“)
const URLS = [
  'https://www.319webdesign.com/',
  'https://www.319webdesign.com/leistungen',
  'https://www.319webdesign.com/leistungen/webdesign-launch',
  'https://www.319webdesign.com/leistungen/wachstum-seo',
  'https://www.319webdesign.com/leistungen/strategische-begleitung',
  'https://www.319webdesign.com/immobilienmakler-webdesign',
  'https://www.319webdesign.com/portfolio',
  'https://www.319webdesign.com/portfolio/heinerfilm',
  'https://www.319webdesign.com/portfolio/da-sound',
  'https://www.319webdesign.com/portfolio/arena-sportsbar',
  'https://www.319webdesign.com/webdesign/darmstadt',
  'https://www.319webdesign.com/webdesign/pfungstadt',
  'https://www.319webdesign.com/webdesign/griesheim',
  'https://www.319webdesign.com/webdesign/weiterstadt',
  'https://www.319webdesign.com/kontakt',
  'https://www.319webdesign.com/impressum',
  'https://www.319webdesign.com/datenschutz',
]

const SCOPE = 'https://www.googleapis.com/auth/indexing'

async function main() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: [SCOPE],
  })

  const authClient = await auth.getClient()
  const indexing = google.indexing({ version: 'v3', auth: authClient })

  for (let i = 0; i < URLS.length; i++) {
    const url = URLS[i]
    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url,
          type: 'URL_UPDATED',
        },
      })
      console.log(`[${i + 1}/${URLS.length}] OK: ${url}`, res.data?.urlNotificationMetadata ?? '')
    } catch (err) {
      console.error(`[${i + 1}/${URLS.length}] Fehler für ${url}:`, err.message || err)
      if (err.response?.data) console.error('Details:', err.response.data)
    }
    // Kurze Pause zwischen Requests (Rate-Limits der Indexing API)
    if (i < URLS.length - 1) await new Promise((r) => setTimeout(r, 1000))
  }

  console.log('Fertig.')
}

main().catch((err) => {
  console.error('Skript fehlgeschlagen:', err)
  process.exit(1)
})
