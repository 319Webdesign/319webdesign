/**
 * Google Indexing API – URLs aus Sitemap zum Crawlen/Indexieren einreichen
 *
 * Voraussetzungen:
 * 1. Service Account (service-account.json) im Projektroot
 * 2. In der Google Search Console die Property www.319webdesign.com hinzufügen und
 *    die E-Mail des Service Accounts als Nutzer mit Berechtigung "Eigentümer" oder "Vollzugriff" einladen
 * 3. Indexing API im GCP-Projekt aktivieren
 *
 * Ausführung: npm run index-urls
 * Oder: node google-index-fast.js
 */

const path = require('path')
const fs = require('fs')
const { google } = require('googleapis')

const SITEMAP_URL = 'https://www.319webdesign.com/sitemap.xml'
const KEY_FILE = path.join(__dirname, 'service-account.json')
const DELAY_MS = 1000

function checkKeyFile() {
  if (!fs.existsSync(KEY_FILE)) {
    console.error('Fehler: service-account.json nicht gefunden unter', KEY_FILE)
    process.exit(1)
  }
}

async function fetchSitemapUrls() {
  console.log('Lade Sitemap:', SITEMAP_URL)
  const res = await fetch(SITEMAP_URL)
  if (!res.ok) {
    throw new Error(`Sitemap konnte nicht geladen werden: ${res.status} ${res.statusText}`)
  }
  const xml = await res.text()
  const urls = []
  const locRe = /<loc>([^<]+)<\/loc>/g
  let m
  while ((m = locRe.exec(xml)) !== null) {
    urls.push(m[1].trim())
  }
  return urls
}

async function submitUrlsToIndexingApi(urls) {
  checkKeyFile()
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  })
  const authClient = await auth.getClient()
  const indexing = google.indexing({ version: 'v3', auth: authClient })

  const results = { success: [], failed: [] }

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i]
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url,
          type: 'URL_UPDATED',
        },
      })
      results.success.push(url)
      console.log(`[${i + 1}/${urls.length}] OK: ${url}`)
    } catch (err) {
      results.failed.push({ url, error: err.message })
      console.error(`[${i + 1}/${urls.length}] Fehler: ${url}`, err.message)
    }
    if (i < urls.length - 1) {
      await new Promise((r) => setTimeout(r, DELAY_MS))
    }
  }

  return results
}

async function main() {
  console.log('--- Google Indexing API – URL-Einreichung (319webdesign) ---\n')

  let urls
  try {
    urls = await fetchSitemapUrls()
  } catch (e) {
    console.error('Sitemap fehlgeschlagen:', e.message)
    process.exit(1)
  }

  if (urls.length === 0) {
    console.error('Keine URLs in der Sitemap gefunden.')
    process.exit(1)
  }

  console.log(`Gefunden: ${urls.length} URLs\n`)

  const results = await submitUrlsToIndexingApi(urls)

  console.log('\n--- Zusammenfassung ---')
  console.log('Erfolgreich:', results.success.length)
  console.log('Fehlgeschlagen:', results.failed.length)
  if (results.failed.length > 0) {
    console.log('\nFehlgeschlagene URLs:')
    results.failed.forEach(({ url, error }) => console.log('  ', url, '–', error))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
