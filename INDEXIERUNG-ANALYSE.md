# Analyse: Technische & inhaltliche Unterschiede (Google-Indexierung)

Vergleich **319webdesign** vs. **Heinerfilm** – nur technische und Content-Aspekte, ohne Indexing-API/Skripte.

---

## 1. robots.txt

| Aspekt | 319webdesign | Heinerfilm |
|--------|--------------|------------|
| **Format** | `rules: { userAgent, allow, disallow }` (ein Objekt) | `rules: [ { ... } ]` (Array – Next.js-Standard) |
| **disallow** | Viele Pfade: `/products/`, `/shop/`, `/cart/`, `/category/`, `/page/`, `/search/` usw. | Nur `/api/`, `/admin/` |
| **Sitemap** | ✅ `baseUrl/sitemap.xml` | ✅ feste URL |

**Problem 319webdesign:** Die vielen `disallow`-Einträge stammen offenbar von einem Shop/Template und passen nicht zur Seite. Sie blockieren keine echten Routen, können aber Crawler verwirren oder in Einzelfällen falsch interpretiert werden. Zudem ist das **Format** (einzelnes Objekt statt Array) weniger üblich und könnte in manchen Clients anders verarbeitet werden.

**Empfehlung:** `robots.ts` auf Array-Format umstellen und nur tatsächlich genutzte Bereiche sperren (`/api/` reicht).

---

## 2. Root-Layout: Metadata & Canonical

| Aspekt | 319webdesign | Heinerfilm |
|--------|--------------|------------|
| **Canonical (Root)** | ❌ Kein `alternates.canonical` im Layout | ✅ `alternates: { canonical: BASE_URL }` |
| **googleBot** | Nur `robots: { index, follow }` | Zusätzlich `googleBot: { index: true, follow: true }` |
| **keywords** | ❌ Keine | ✅ `keywords: [...]` im Layout |
| **OpenGraph/Twitter** | Nur in `getSeoMetadata()` pro Seite | Im Layout: `openGraph`, `twitter` mit Titel, Beschreibung, Bild |

**Bedeutung:** Ein expliziter **Canonical** auf Root-Ebene macht die Start-URL eindeutig. **googleBot** explizit zu setzen kann in Randfällen helfen, dass Google die Seite klar als indexierbar einstuft. **keywords** nutzt Google kaum, schadet aber nicht. OpenGraph/Twitter im Layout sorgen für ein klares Fallback für alle Seiten.

**Empfehlung:** Im Root-Layout von 319webdesign ergänzen: `alternates.canonical` (baseUrl), `robots.googleBot`, optional `keywords` und vollständige `openGraph`/`twitter`-Basis.

---

## 3. Strukturierte Daten (JSON-LD)

| 319webdesign | Heinerfilm |
|--------------|------------|
| Organization, ProfessionalService, SiteNavigation (global) + CreativeWork pro Portfolio | LocalBusiness (global, mit Adresse, Geo, Öffnungszeiten, sameAs) |

Beide haben gültige Schemas. 319webdesign hat mehr Typen; Heinerfilm hat **LocalBusiness** mit Standort – das kann für lokale Suche hilfreich sein. Für reine Indexierung ist keins davon ein Ausschlusskriterium.

---

## 4. Sitemap

- **319webdesign:** `dynamic = 'force-static'`, `revalidate = false` → zur Build-Zeit generiert, stabil.
- **Heinerfilm:** Kein `force-static` exportiert → Standard-Verhalten.

Beide liefern eine gültige Sitemap mit `lastmod`, `priority`, `changeFrequency`. Kein technischer Nachteil für 319webdesign.

---

## 5. Middleware & Crawlability

- **319webdesign:** Unbekannte Pfade → **410 Gone**. Bekannte Routen, `/robots.txt`, `/sitemap.xml` werden durchgelassen. Kein noindex.
- **Heinerfilm:** Keine Middleware mit 410.

410 ist für Google in Ordnung („Seite dauerhaft weg“). Wichtig: Alle in der Sitemap genannten URLs müssen von der Middleware erlaubt werden – das ist bei 319webdesign der Fall.

---

## 6. Pro-Seite: Canonical, Titel, Beschreibung

- **319webdesign:** Alle geprüften Seiten nutzen `getSeoMetadata()` oder `generateMetadata` mit **canonical**, **title**, **description**, **openGraph**. Einheitlich und sauber.
- **Heinerfilm:** Layouts/Seiten setzen **canonical** und Metadaten pro Route (z. B. About-Layout, Portfolio generateMetadata).

In beiden Projekten sind Canonical und Metadaten pro Seite gesetzt – kein klarer Nachteil für 319webdesign.

---

## 7. Content / Seitenaufbau

- **319webdesign:** Startseite ist **Server Component**, exportiert `metadata` → vollständiger HTML-Output beim ersten Request.
- **Heinerfilm:** Startseite ist **Client Component** (`'use client'`). Next.js rendert sie trotzdem serverseitig (SSR), der Inhalt ist also im ersten HTML. Theoretisch kein Indexierungsproblem.

Kein technischer Grund, warum 319webdesign deshalb schlechter indexiert würde.

---

## Zusammenfassung: Was 319webdesign anpassen lohnt

1. **robots.ts:** Auf Array-Format umstellen und `disallow` auf `/api/` (und ggf. weitere reale Pfade) reduzieren – keine Template-Pfade mehr.
2. **Root-Layout:**  
   - `alternates.canonical: baseUrl`  
   - `robots.googleBot: { index: true, follow: true }`  
   - Optionale `keywords`  
   - Vollständige `openGraph`- und `twitter`-Basis (Titel, Beschreibung, Bild, URL, siteName).
3. Optional: Wie Heinerfilm ein **LocalBusiness**-Schema mit Adresse/Geo erwägen, wenn lokale Sichtbarkeit (z. B. „Webdesign Pfungstadt“) wichtig ist.

Damit ist 319webdesign technisch und inhaltlich auf Augenhöhe mit Heinerfilm; die Indexierung hängt danach vor allem an Crawl-Budget, Alter der Domain und externen Signalen (Backlinks, Search Console, etc.).
