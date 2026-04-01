/**
 * Google Indexing API – URLs aus Sitemap zum Crawlen/Indexieren einreichen
 *
 * „Neue Property“ in der Search Console:
 * - Property verifizieren (Domain oder URL-Präfix).
 * - Dieselbe service-account.json (GCP) nutzen; Indexing API im Projekt aktiviert lassen.
 * - In der NEUEN Property unter „Einstellungen → Nutzer und Berechtigungen“ die
 *   Service-Account-E-Mail als Nutzer mit „Vollzugriff“ oder „Eigentümer“ einladen.
 * - Sitemap-URL muss zu URLs unter dieser Property passen (siehe INDEXING_SITEMAP_URL).
 *
 * Voraussetzungen:
 * 1. Service-Account-JSON von Google Cloud: als service-account.json im Projektroot ODER
 *    Pfad per INDEXING_KEY_FILE (absolut oder relativ zum aktuellen Arbeitsverzeichnis).
 *    Nicht ins Git committen (.gitignore).
 * 2. Service Account in jeder Search-Console-Property eingeladen, für die du URLs einreichst
 * 3. Indexing API im GCP-Projekt aktivieren
 *
 * Sitemap (Standard: www.319webdesign.de):
 *   INDEXING_SITEMAP_URL=https://deine-domain.de/sitemap.xml npm run index-urls
 * Windows PowerShell:
 *   $env:INDEXING_SITEMAP_URL="https://deine-domain.de/sitemap.xml"; npm run index-urls
 *
 * Ausführung: npm run index-urls
 * Oder: node google-index-fast.js
 */

const path = require('path')
const fs = require('fs')
const { google } = require('googleapis')

const DEFAULT_SITEMAP_URL = 'https://www.319webdesign.de/sitemap.xml'
const SITEMAP_URL =
  process.env.INDEXING_SITEMAP_URL?.trim() || DEFAULT_SITEMAP_URL
const DELAY_MS = 1000

function resolveKeyFilePath() {
  const fromEnv = process.env.INDEXING_KEY_FILE?.trim()
  if (fromEnv) {
    return path.isAbsolute(fromEnv) ? fromEnv : path.resolve(process.cwd(), fromEnv)
  }
  return path.join(__dirname, 'service-account.json')
}

function assertKeyFile(keyFile) {
  if (!fs.existsSync(keyFile)) {
    throw new Error(
      `Service-Account-JSON fehlt: ${keyFile}\n` +
        '  → Von GCP: APIs & Dienstleistungen → Anmeldedaten → Servicekonto → Schlüssel JSON erstellen/herunterladen.\n' +
        '  → Datei ins Projekt legen als service-account.json oder INDEXING_KEY_FILE=/pfad/zur/datei.json setzen.'
    )
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

async function submitUrlsToIndexingApi(urls, keyFile) {
  const auth = new google.auth.GoogleAuth({
    keyFile: keyFile,
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
  console.log('--- Google Indexing API – URL-Einreichung (319webdesign) ---')
  const keyFile = resolveKeyFilePath()
  assertKeyFile(keyFile)
  console.log('Sitemap:', SITEMAP_URL)
  console.log('Schlüssel:', keyFile, '\n')

  const urls = await fetchSitemapUrls()

  if (urls.length === 0) {
    throw new Error('Keine URLs in der Sitemap gefunden.')
  }

  console.log(`Gefunden: ${urls.length} URLs\n`)

  const results = await submitUrlsToIndexingApi(urls, keyFile)

  console.log('\n--- Zusammenfassung ---')
  console.log('Erfolgreich:', results.success.length)
  console.log('Fehlgeschlagen:', results.failed.length)
  if (results.failed.length > 0) {
    console.log('\nFehlgeschlagene URLs:')
    results.failed.forEach(({ url, error }) => console.log('  ', url, '–', error))
  }
}

main().catch((err) => {
  console.error(err.message || err)
  process.exitCode = 1
})
