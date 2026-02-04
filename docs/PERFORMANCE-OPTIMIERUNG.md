# Performance Optimierung

## Server, Komprimierung & TTFB (Seobility Server-Score)

- **next.config.js:** `compress: true` – GZip bei `next start` aktiv.
- **Vercel:** Keine Middleware nötig; Brotli/GZip erfolgt automatisch am Edge. Keine extra Konfiguration, die die Komprimierung stören könnte.
- **Eigener Node-Server:** `npm run start:compressed` startet `server.js` mit dem Paket `compression` (GZip für alle Antworten inkl. statische Assets und API).
- **X-Powered-By:** In next.config auf `poweredByHeader: false` gesetzt → weniger Header-Größe, bessere TTFB.
- **Cache-Control:** `/_next/static/*` mit `max-age=31536000, immutable`; HTML/API mit `s-maxage=60, stale-while-revalidate=300`.
- **Schwere Komponenten:** CookieBanner und WhatsAppButton werden per `dynamic(..., { ssr: false })` geladen → weniger Blockierung beim initialen Server-Rendering.

---

## Mobile Performance – Hero Section

## 🎯 Ziel: LCP von 3,9s auf unter 2,5s senken

## ✅ Implementierte Maßnahmen

### 1. LCP-Bild Optimierung (Porträt)

**Datei:** `app/components/HeroSection.tsx`

**Änderungen:**
```tsx
<Image
  src="/maik-removebg.png"
  alt="Maik Schmidt - Webdesign Experte aus Pfungstadt"
  width={550}
  height={650}
  priority              // ✅ Lädt das Bild mit höchster Priorität
  sizes="(max-width: 1024px) 0vw, 550px"  // ✅ Mobile: 0vw (nicht laden)
  quality={85}          // ✅ Reduziert von 90 auf 85 (kaum sichtbar)
  className="object-contain object-bottom h-full w-auto max-w-none"
/>
```

**Vorteile:**
- ✅ `priority={true}`: Bild wird im `<head>` als preload geladen
- ✅ `sizes="(max-width: 1024px) 0vw, 550px"`: Mobile Geräte laden das Bild nicht (0vw)
- ✅ `quality={85}`: 15% kleinere Dateigröße bei gleichbleibender Qualität
- ✅ Next.js konvertiert automatisch zu WebP/AVIF

**Erwartete Einsparung:** ~200-300ms auf Desktop, ~1-2s auf Mobile

---

### 2. Mobile Layout Optimierung

**Problem:** Das Porträt-Bild wurde auf Mobile nicht angezeigt, aber trotzdem geladen.

**Lösung:**
```tsx
<div className="relative hidden lg:flex justify-end items-end h-full">
  {/* Bild wird nur auf Desktop gerendert */}
</div>
```

**Kombiniert mit:**
```tsx
sizes="(max-width: 1024px) 0vw, 550px"
```

**Ergebnis:**
- ✅ Mobile: Bild wird weder gerendert noch geladen
- ✅ Desktop: Bild lädt mit Priorität
- ✅ Keine unnötigen Requests auf Mobile

**Erwartete Einsparung:** ~1-1.5s auf Mobile (LCP ist jetzt Text, nicht Bild)

---

### 3. Animationen für Mobile reduziert

**Problem:** Framer Motion Animationen blockieren das Rendering auf schwächeren Geräten.

**Vorher:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

**Nachher:**
```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
```

**Änderungen:**
- ✅ `y: 30` → `y: 20`: Kürzere Distanz
- ✅ `duration: 0.8` → `duration: 0.6`: 25% schneller
- ✅ `ease: 'easeOut'`: Optimierte Easing-Funktion
- ✅ Delays reduziert: `0.4s` → `0.2s`

**Buttons ohne Motion-Wrapper:**
```tsx
// Vorher: <motion.a whileHover={{ scale: 1.05 }} animate={{ boxShadow: [...] }}>
// Nachher: <a className="hover:scale-105 active:scale-95">
```

**Vorteile:**
- ✅ Keine JS-Animationen für Buttons (CSS ist schneller)
- ✅ Weniger Re-Renders
- ✅ Bessere Performance auf Low-End Devices

**Erwartete Einsparung:** ~100-200ms FCP/LCP

---

### 4. Background Gradients optimiert

**Problem:** Animierte Mesh-Gradients verursachen ständige Repaints auf Mobile.

**Lösung:**
```tsx
{/* Animated Mesh Gradients - Nur auf Desktop */}
<motion.div className="absolute inset-0 hidden md:block" animate={{ ... }} />

{/* Statischer Gradient für Mobile (Performance) */}
<div 
  className="absolute inset-0 md:hidden"
  style={{ background: 'radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)' }}
/>
```

**Vorteile:**
- ✅ Mobile: Statischer Gradient (keine Animation)
- ✅ Desktop: Volle Animation bleibt erhalten
- ✅ Keine unnötigen Repaints auf Mobile

**Erwartete Einsparung:** ~50-100ms auf Mobile

---

### 5. Font Display Optimierung

**Datei:** `app/layout.tsx`

**Status:** ✅ Bereits optimal konfiguriert

```tsx
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',  // ✅ Text wird sofort mit Fallback-Font angezeigt
  variable: '--font-inter',
})
```

**Zusätzlich:**
```tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
</head>
```

**Vorteile:**
- ✅ `display: 'swap'`: Text sofort sichtbar (FCP verbessert)
- ✅ `preconnect`: DNS-Lookup wird vorher durchgeführt
- ✅ Keine FOIT (Flash of Invisible Text)

**Erwartete Einsparung:** ~100-200ms FCP

---

### 6. Image Format Optimierung

**Next.js Image Component** konvertiert automatisch:
- PNG → WebP (60-70% kleiner)
- PNG → AVIF (70-80% kleiner, wenn Browser unterstützt)

**Konfiguration in `next.config.mjs`:**
```js
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
```

**Erwartete Dateigröße:**
- Original PNG: ~150-200KB
- WebP: ~50-80KB (60% Einsparung)
- AVIF: ~30-50KB (75% Einsparung)

---

## 📊 Erwartete Performance-Verbesserungen

### Mobile (3G/4G)

| Metrik | Vorher | Nachher | Verbesserung |
|--------|--------|---------|--------------|
| **LCP** | 3.9s | **1.8-2.2s** | ✅ -1.7-2.1s |
| **FCP** | 1.5s | **1.0-1.2s** | ✅ -0.3-0.5s |
| **TBT** | ~200ms | **~100ms** | ✅ -100ms |
| **CLS** | 0.05 | **0.02** | ✅ -0.03 |

### Desktop

| Metrik | Vorher | Nachher | Verbesserung |
|--------|--------|---------|--------------|
| **LCP** | ~2.0s | **1.2-1.5s** | ✅ -0.5-0.8s |
| **FCP** | ~1.0s | **0.7-0.9s** | ✅ -0.1-0.3s |

---

## 🧪 Testing

### Lokales Testing

1. **Dev-Server starten:**
   ```bash
   npm run dev
   ```

2. **Chrome DevTools:**
   - `F12` → Performance Tab
   - CPU: 4x slowdown (simuliert Mobile)
   - Network: Fast 3G
   - Lighthouse: Mobile Audit

### Production Testing

1. **Build erstellen:**
   ```bash
   npm run build
   npm start
   ```

2. **PageSpeed Insights:**
   - https://pagespeed.web.dev/
   - URL eingeben
   - Mobile + Desktop testen

3. **WebPageTest:**
   - https://www.webpagetest.org/
   - Location: Frankfurt, Germany
   - Device: Moto G4 (Mobile)

---

## 🎯 Core Web Vitals Ziele

| Metrik | Ziel | Status |
|--------|------|--------|
| **LCP** | < 2.5s | ✅ Erwartet: 1.8-2.2s |
| **FID** | < 100ms | ✅ Bereits optimal |
| **CLS** | < 0.1 | ✅ Bereits optimal |

---

## 🔄 Weitere Optimierungsmöglichkeiten

### Wenn LCP immer noch > 2.5s:

1. **Bild weiter komprimieren:**
   ```bash
   # Mit ImageOptim oder Squoosh
   # Ziel: < 30KB für WebP
   ```

2. **Above-the-Fold CSS inlinen:**
   ```tsx
   // In layout.tsx
   <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
   ```

3. **Preload kritische Assets:**
   ```tsx
   <link rel="preload" as="image" href="/maik-removebg.png" />
   ```

4. **Service Worker für Caching:**
   ```js
   // public/sw.js
   self.addEventListener('fetch', (event) => {
     event.respondWith(caches.match(event.request))
   })
   ```

---

## 📝 Checkliste

- [x] Bild mit `priority` und optimierten `sizes`
- [x] Mobile Layout ohne Bild-Rendering
- [x] Animationen reduziert und optimiert
- [x] Background-Gradients nur auf Desktop animiert
- [x] Font-Display auf `swap`
- [x] Preconnect für Google Fonts
- [x] Image Quality auf 85 reduziert
- [ ] Production Build testen
- [ ] PageSpeed Insights Score prüfen
- [ ] WebPageTest Filmstrip analysieren

---

## 🚀 Deployment

Nach dem Deployment:

1. **Google Search Console:** "URL-Prüfung" → Core Web Vitals prüfen
2. **PageSpeed Insights:** Neuen Score dokumentieren
3. **Real User Monitoring:** CrUX-Daten nach 28 Tagen prüfen

---

**Erstellt:** 2026-01-24  
**Ziel:** LCP < 2.5s auf Mobile  
**Erwartetes Ergebnis:** LCP ~1.8-2.2s ✅
