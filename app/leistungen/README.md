# Leistungsseiten Template

## Verfügbare Seiten

Das Template unterstützt automatisch folgende URLs:

- `/leistungen/webdesign-launch` - Webdesign & Launch
- `/leistungen/wachstum-seo` - Wachstum & SEO
- `/leistungen/strategische-begleitung` - Strategische Begleitung

## Features

### ✅ SEO-Optimierung
- Dynamische `generateMetadata` für individuelle Meta-Tags
- Strukturierte HTML-Hierarchie (H1, H2, H3)
- Optimierte Meta-Descriptions für jede Seite
- OpenGraph-Tags für Social Media

### ✅ Content-Struktur
- **Hero-Section**: Klare H1 mit lokalem SEO-Fokus
- **Problem-Lösung**: Zweispaltige Darstellung von Kundenproblem und Lösung
- **Features**: Grid mit allen Leistungsmerkmalen
- **Performance-Beweis**: Visuelle Darstellung von PageSpeed und LCP (nur bei Webdesign)
- **Prozess**: 4-Schritte-Darstellung der Zusammenarbeit
- **CTA**: Auffälliger Kontakt-Button + WhatsApp
- **Related Services**: Interne Verlinkung zu anderen Leistungen

### ✅ Design
- Dunkles, modernes Design wie auf der Homepage
- Konsistente Farbgebung mit Blau-Akzenten
- Responsive Layout für alle Geräte
- Hover-Effekte und Transitions

### ✅ Performance
- Static Site Generation (SSG) für alle Leistungsseiten
- Optimierte Ladezeiten
- Minimaler JavaScript-Overhead

## Neue Leistung hinzufügen

Um eine neue Leistung hinzuzufügen, bearbeite `app/leistungen/[slug]/page.tsx` und füge einen neuen Eintrag im `leistungen` Objekt hinzu:

```typescript
const leistungen = {
  // ... bestehende Leistungen
  'neue-leistung': {
    title: 'Titel für H1',
    metaTitle: 'SEO Title',
    metaDescription: 'SEO Description',
    subtitle: 'Untertitel',
    problem: { ... },
    solution: { ... },
    features: [ ... ],
    process: [ ... ],
    relatedServices: [ ... ],
  },
}
```

Die Seite wird automatisch unter `/leistungen/neue-leistung` verfügbar sein.

## Performance-Bilder hinzufügen (Optional)

Falls du echte Screenshots verwenden möchtest statt der CSS-Visualisierungen:

1. Speichere deine PageSpeed-Screenshot als `public/pagespeed-score.png`
2. Speichere deinen LCP-Vergleich als `public/lcp-comparison.png`
3. Ersetze die CSS-Visualisierungen in der Performance-Section durch:

```tsx
<Image
  src="/pagespeed-score.png"
  alt="PageSpeed Score 99/100"
  width={800}
  height={450}
  priority
  className="rounded-lg"
/>
```

## WhatsApp-Nummer

Die WhatsApp-Nummer ist bereits konfiguriert: **+49 1773236454** (491773236454 in den Links).

## Anpassungen

- **Farben**: Alle Blau-Töne können über Tailwind-Klassen angepasst werden
- **Texte**: Alle Inhalte sind im `leistungen` Objekt zentral definiert
- **Layout**: Grid-Strukturen können über Tailwind-Klassen angepasst werden
