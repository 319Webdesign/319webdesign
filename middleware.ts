import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAllProjectSlugs } from './config/projects'
import { getAllCitySlugs } from './config/cities'

// Statische Seiten
const STATIC_PATHS = [
  '/',
  '/leistungen',
  '/leistungen/webdesign-launch',
  '/leistungen/wachstum-seo',
  '/leistungen/strategische-begleitung',
  '/portfolio',
  '/kontakt',
  '/impressum',
  '/datenschutz',
]

const WARUM_SLUGS = ['umsatzstark', 'blitzschnell', 'lokal']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Erlaubt: Statische Seiten
  if (STATIC_PATHS.includes(pathname)) {
    return NextResponse.next()
  }

  // Erlaubt: Portfolio-Einzelseiten (/portfolio/heinerfilm, etc.)
  const portfolioMatch = pathname.match(/^\/portfolio\/([^/]+)$/)
  if (portfolioMatch && getAllProjectSlugs().includes(portfolioMatch[1])) {
    return NextResponse.next()
  }

  // Erlaubt: Warum-Unterseiten (/warum/umsatzstark, etc.)
  const warumMatch = pathname.match(/^\/warum\/([^/]+)$/)
  if (warumMatch && WARUM_SLUGS.includes(warumMatch[1])) {
    return NextResponse.next()
  }

  // Erlaubt: Webdesign-Städte (/webdesign/darmstadt, etc.)
  const webdesignMatch = pathname.match(/^\/webdesign\/([^/]+)$/)
  if (webdesignMatch && getAllCitySlugs().includes(webdesignMatch[1])) {
    return NextResponse.next()
  }

  // Erlaubt: Region-Städte (/region/darmstadt, etc.)
  const regionMatch = pathname.match(/^\/region\/([^/]+)$/)
  if (regionMatch && getAllCitySlugs().includes(regionMatch[1])) {
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
