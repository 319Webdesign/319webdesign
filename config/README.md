# Stadt-Landingpages Konfiguration

## Übersicht

Dieses System erstellt automatisch SEO-optimierte Landingpages für Städte in Südhessen.

## Verfügbare Stadt-Seiten

- `/webdesign-darmstadt` - Webdesign Darmstadt
- `/webdesign-pfungstadt` - Webdesign Pfungstadt
- `/webdesign-griesheim` - Webdesign Griesheim
- `/webdesign-weiterstadt` - Webdesign Weiterstadt

## Neue Stadt hinzufügen

1. Öffne `config/cities.ts`
2. Füge einen neuen Eintrag zum `cities` Objekt hinzu:

```typescript
'stadtname': {
  slug: 'stadtname',
  name: 'Stadtname',
  region: 'Südhessen',
  description: 'Beschreibung der Stadt...',
  keywords: [
    'Webdesign Stadtname',
    'Website erstellen Stadtname',
    'SEO Stadtname',
  ],
  population: '50.000',
  nearbyPlaces: ['Ort1', 'Ort2', 'Ort3'],
}
```

3. Die Seite wird automatisch unter `/webdesign-stadtname` verfügbar sein
4. Aktualisiere die Sitemap (`public/sitemap.xml`)
5. Füge die Stadt zum Footer (`app/components/Footer.tsx`) hinzu

## SEO-Features

### ✅ Automatisch generiert:
- **Title**: "Webdesign [Stadt] | High-Performance Websites | 319Webdesign"
- **Description**: Lokalisierte Meta-Description mit Stadt und Region
- **Keywords**: Stadt-spezifische Keywords
- **H1**: "Webdesign [Stadt] - High-Performance Websites für Ihre Region"
- **OpenGraph-Tags**: Für Social Media optimiert

### ✅ Content-Struktur:
- **Hero mit Standort-Info**: Stadt, Region, Einwohnerzahl
- **Performance-Beweise**: PageSpeed 99/100 und LCP-Vergleich
- **Features**: 6 Hauptmerkmale
- **Benefits**: Lokale Vorteile
- **Regionale Beschreibung**: Stadt-spezifischer Text
- **Umliegende Orte**: Verlinkung zu nahegelegenen Städten
- **CTA**: Kontakt-Buttons mit WhatsApp

## Interne Verlinkung

### Footer
Alle Stadt-Seiten sind im Footer unter "Regionen" verlinkt für:
- Bessere Crawlbarkeit durch Google
- Interne Link-Struktur
- User-Navigation

### Stadt-Seiten untereinander
Jede Stadt-Seite zeigt "Auch in Ihrer Nähe" mit umliegenden Orten.

## Performance

- **Static Site Generation (SSG)**: Alle Seiten werden beim Build generiert
- **Optimierte Ladezeiten**: < 1s LCP
- **PageSpeed Score**: 99/100 Target
- **Mobile-First**: Responsive Design

## Best Practices

1. **Einzigartiger Content**: Jede Stadt hat individuelle Beschreibungen
2. **Lokale Keywords**: Stadt + "Webdesign", "Website", "SEO"
3. **Strukturierte Daten**: H1, H2, H3 Hierarchie
4. **Call-to-Actions**: Multiple CTAs für Conversions
5. **Interne Links**: Footer + umliegende Orte
