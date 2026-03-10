# Server-Speed-Analyse: Reaktionszeit 20 ms → 400 ms

## Kurzfassung

**Wahrscheinlichste Ursache:** Kein blockierender API-Abruf oder schweres Bild beim ersten Seitenaufbau. Die Verzögerung kommt eher von:

1. **Serverless Cold Start** (Vercel/Node) – erste Anfrage nach Inaktivität
2. **Hohe SSR-Last** – viele Sektionen werden beim ersten Request serverseitig gerendert
3. **Middleware** – läuft bei jeder Anfrage und lädt die vollen Config-Module

---

## 1. API-Abrufe

| Route / Verwendung | Wann aufgerufen | Blockiert TTFB? |
|--------------------|-----------------|------------------|
| `GET /api/google-reviews` | Nur im Client in `GoogleReviewsSection` (useEffect) | **Nein** – wird nach dem ersten Paint geladen |
| `POST /api/contact` | Nur beim Absenden des Kontaktformulars | **Nein** |

**Fazit:** Kein API-Call blockiert die erste HTML-Antwort. Die 400 ms liegen nicht an diesen Abrufen.

---

## 2. Bilder

- **Next.js `Image`** wird überall genutzt (Hero, Portfolio, Header, etc.) mit `priority` nur im Hero.
- Bilder werden über `/_next/image` ausgeliefert; der Server wartet beim SSR **nicht** auf den Bildabruf.
- `next.config.mjs`: AVIF/WebP, sinnvolle `deviceSizes` – Konfiguration ist in Ordnung.

**Fazit:** Schwere Bilder können LCP beeinflussen, aber typischerweise **nicht** die Reaktionszeit (TTFB) des HTML. Ursache für 20→400 ms liegt sehr wahrscheinlich nicht an den Bildern.

---

## 3. Middleware (bei jeder Anfrage)

- `middleware.ts` importiert **bei jeder Anfrage**:
  - `getAllProjectSlugs()` aus `config/projects.ts` (große Datei mit allen Portfolio-Texten)
  - `getAllCitySlugs()` aus `config/cities.ts`
- Dadurch wird das gesamte `projects.ts`-Modul geladen und ausgeführt, nur um eine Liste von Slugs zu bekommen.

**Empfehlung:** Slug-Listen für die Middleware in eine schlanke Datei auslagern (nur Arrays), sodass die Middleware nicht die komplette Projekt-Config lädt. Siehe Abschnitt „Maßnahmen“.

---

## 4. SSR-Umfang (Hauptverdacht für hohe Reaktionszeit)

Die Startseite (`app/page.tsx`) ist eine **Server Component** und rendert viele Sektionen mit `dynamic(..., { ssr: true })`:

- Header, HeroSection, WarumSection, LeistungenSection, MaklerProblemLoesungSection, UeberMichSection, ProzessSection, MehrwertSection, InvestmentSection, **GoogleReviewsSection (ssr: false)**, PortfolioSection, CTASection, FAQSection, KontaktSection, Footer

Bis auf GoogleReviewsSection werden **alle** dieser Client Components beim ersten Request serverseitig vorgerendert. Jede Sektion bringt u. a.:

- `framer-motion`
- `lucide-react`
- eigene Logik und Markup

**Fazit:** Die Reaktionszeit (TTFB) steigt, weil der Server viel HTML und zugehörige Rendering-Arbeit erzeugt. Das erklärt gut einen Sprung von ~20 ms auf ~400 ms, besonders in Verbindung mit Cold Start.

---

## 5. Cold Start (Serverless)

Bei Vercel (oder anderem Serverless) kann die **erste Anfrage** nach einer Ruhephase (z. B. 1–5 Minuten) 200–500 ms oder mehr brauchen, weil:

- die Laufzeit (Node) startet,
- Abhängigkeiten geladen werden,
- die App „aufwärmt“.

Folge-Anfragen sind dann wieder schnell (~20–50 ms). Wenn du 400 ms nur **gelegentlich** (z. B. beim ersten Aufruf) siehst, ist Cold Start die plausibelste Erklärung.

---

## Empfohlene Maßnahmen

### Sofort prüfen

1. **Cold Start:** Mehrere Anfragen hintereinander (z. B. 5×) senden. Wenn nur die erste langsam ist → Cold Start.
2. **Wo die Zeit verbraucht wird:** In `middleware.ts` und ggf. in einem Layout kurz Timings loggen (z. B. `Date.now()` vor/nach Middleware und vor/nach Render), um Middleware vs. Render zu trennen.

### Mittelfristig (TTFB verbessern)

3. **SSR reduzieren:** Weitere Sektionen unterhalb des Folds mit `ssr: false` laden (z. B. ProzessSection, MehrwertSection, InvestmentSection, FAQSection, KontaktSection). Erste Sicht (Header, Hero, evtl. Warum + Leistungen) bleibt per SSR, Rest erscheint nach Hydration. TTFB sinkt, etwas weniger Content im ersten HTML (SEO für diese Bereiche etwas schwächer, meist akzeptabel).
4. **Middleware verschlanken:** Slug-Listen für Middleware in eine kleine Datei auslagern und nur diese in der Middleware importieren (siehe nächster Abschnitt).

### Bilder (für LCP, nicht primär für TTFB)

5. Hero-Bild und andere große Bilder: Auflösung/Qualität prüfen, ggf. `quality` oder `sizes` anpassen; Bilder in `/public` komprimieren (AVIF/WebP wo möglich).

---

## Umgesetzt: Middleware verschlankt

- **`config/middlewareSlugs.ts`** enthält nur die Slug-Arrays (`PROJECT_SLUGS`, `CITY_SLUGS`) ohne Import von `projects.ts`/`cities.ts`.
- **`middleware.ts`** importiert nur noch `middlewareSlugs.ts`. Das schwere `projects.ts` wird bei jeder Anfrage nicht mehr geladen.
- **Wichtig:** Bei neuen Portfolio-Projekten oder neuen Städten die Arrays in `config/middlewareSlugs.ts` anpassen.
