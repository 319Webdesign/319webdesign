import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { PROJECT_SLUGS, CITY_SLUGS } from './config/middlewareSlugs'

// Statische Seiten
const STATIC_PATHS = [
  '/',
  '/leistungen',
  '/leistungen/webdesign-launch',
  '/leistungen/wachstum-seo',
  '/leistungen/strategische-begleitung',
  '/immobilienmakler-webdesign',
  '/portfolio',
  '/kontakt',
  '/impressum',
  '/datenschutz',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect: alte URLs auf neue (301 permanent)
  if (pathname === '/immobilienmakler-webdesign-hessen') {
    return NextResponse.redirect(new URL('/immobilienmakler-webdesign', request.url), 301)
  }
  if (pathname === '/referenzen' || pathname === '/referenzen/') {
    return NextResponse.redirect(new URL('/portfolio', request.url), 301)
  }
  const regionMatch = pathname.match(/^\/region\/([^/]+)$/)
  if (regionMatch && CITY_SLUGS.includes(regionMatch[1])) {
    return NextResponse.redirect(new URL(`/webdesign/${regionMatch[1]}`, request.url), 301)
  }

  // Erlaubt: Statische Seiten
  if (STATIC_PATHS.includes(pathname)) {
    return NextResponse.next()
  }

  // Erlaubt: Portfolio-Einzelseiten (/portfolio/heinerfilm, etc.)
  const portfolioMatch = pathname.match(/^\/portfolio\/([^/]+)$/)
  if (portfolioMatch && PROJECT_SLUGS.includes(portfolioMatch[1])) {
    return NextResponse.next()
  }

  // Erlaubt: Webdesign-Städte (/webdesign/darmstadt, etc.)
  const webdesignMatch = pathname.match(/^\/webdesign\/([^/]+)$/)
  if (webdesignMatch && CITY_SLUGS.includes(webdesignMatch[1])) {
    return NextResponse.next()
  }

  // Erlaubt: API-Routen
  if (pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // Erlaubt: Next.js intern
  if (pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  // Erlaubt: Statische Dateien (Bilder, Favicon, Fonts, etc.)
  const staticExt = /\.(ico|png|jpg|jpeg|gif|webp|svg|css|js|woff|woff2|txt|xml|json)$/i
  if (staticExt.test(pathname)) {
    return NextResponse.next()
  }

  // Erlaubt: robots.txt und sitemap (für Crawler)
  if (pathname === '/robots.txt' || pathname === '/sitemap.xml') {
    return NextResponse.next()
  }

  // Alle anderen Pfade (Spam-URLs) → 410 Gone
  return new NextResponse(null, {
    status: 410,
    statusText: 'Gone',
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
