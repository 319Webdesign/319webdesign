'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

import { leistungenDropdownPanelWidth, leistungenMenuGroups } from './headerLeistungenMenu'

const SCROLL_THRESHOLD = 50

/** Voller Blau-Hero unter dem Header: Logo & Navigation oben weiß, bis gescrollt oder Mobilmenü offen. */
const HERO_OVERLAY_PATHS = new Set(['/', '/unser-angebot', '/seo-darmstadt'])

/** motion(Link) vermeidet <a><motion.div>-Hydration-Mismatches (Server vs Client). */
const MotionLink = motion(Link)

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  // Native Scroll statt useScroll: Framer kann beim Hydratisieren eine andere Scroll-Position sehen
  // als der Server (0) → className/animate-Mismatch. Erst nach Mount mit echter Position synchronisieren.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Nach Client-Navigation Scroll der neuen Seite übernehmen (sonst bleibt z. B. isScrolled von der Vor-Seite)
  useEffect(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
  }, [pathname])

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Cleanup timeout beim Unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
      }
    }
  }, [closeTimeout])

  // Scroll to hash on page load if hash exists in URL
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash
      const scrollToElement = (attempts = 0) => {
        if (attempts > 10) return // Maximal 10 Versuche
        
        const element = document.querySelector(hash)
        if (element) {
          const headerOffset = 120
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          })
        } else {
          // Wenn Element noch nicht gefunden, erneut versuchen
          setTimeout(() => scrollToElement(attempts + 1), 100)
        }
      }
      setTimeout(() => scrollToElement(), 200)
    }
  }, [pathname])

  const navLinks = [
    { href: '/unser-angebot', label: 'Unser Angebot' },
    { href: '/uber-mich', label: 'Über Mich' },
    { href: '/leistungen', label: 'Leistungen', hasDropdown: true },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false)
    
    // Wenn es ein Hash-Link ist
    if (href.startsWith('#')) {
      e.preventDefault()
      
      // Wenn wir nicht auf der Hauptseite sind, navigieren wir dorthin
      if (pathname !== '/') {
        router.push(`/${href}`)
        // Scrollen nachdem die Seite geladen wurde - mit mehreren Versuchen
        const scrollToElement = (attempts = 0) => {
          if (attempts > 10) return // Maximal 10 Versuche
          
          const element = document.querySelector(href)
          if (element) {
            const headerOffset = 120
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth'
            })
          } else {
            // Wenn Element noch nicht gefunden, erneut versuchen
            setTimeout(() => scrollToElement(attempts + 1), 100)
          }
        }
        setTimeout(() => scrollToElement(), 200)
      } else {
        // Wenn wir bereits auf der Hauptseite sind, normal scrollen
        const element = document.querySelector(href)
        if (element) {
          const headerOffset = 120
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          })
        }
      }
    }
  }

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const isTransparentHeroNav =
    HERO_OVERLAY_PATHS.has(pathname) && !isScrolled && !isMobileMenuOpen
  const desktopNavTextClass = isTransparentHeroNav
    ? 'text-white hover:text-blue-100'
    : 'text-slate-700 hover:text-blue-600'
  const logoTextClass = isTransparentHeroNav ? 'text-white' : 'text-slate-900'
  const mobileMenuButtonClass = isTransparentHeroNav
    ? 'text-white hover:text-blue-100'
    : 'text-slate-700 hover:text-blue-600'
  const navCtaClass = isTransparentHeroNav
    ? 'inline-flex items-center justify-center shrink-0 rounded-lg border border-amber-300/70 bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-amber-900/25 transition-all duration-300 hover:scale-[1.02] hover:bg-amber-500 hover:border-amber-200 active:scale-[0.98]'
    : 'inline-flex items-center justify-center shrink-0 rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-md shadow-blue-500/35 hover:shadow-lg hover:shadow-blue-500/55 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300'
  const navCtaMobileClass = isTransparentHeroNav
    ? 'inline-flex items-center justify-center shrink-0 rounded-lg border border-amber-300/70 bg-amber-400 px-3 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-amber-900/25 transition-all duration-300 active:scale-[0.98] hover:bg-amber-500 hover:border-amber-200'
    : 'inline-flex items-center justify-center shrink-0 rounded-lg px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-md shadow-blue-500/35 active:scale-[0.98] transition-transform'

  return (
    <motion.header
      initial={false}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? 'backdrop-blur-xl bg-white/90 shadow-lg shadow-slate-200/80'
          : isScrolled
          ? 'backdrop-blur-xl bg-white/85 shadow-lg shadow-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 pt-5 pb-3 md:pt-6 md:pb-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <MotionLink
            href="/"
            className="relative flex items-center group/logo"
            onClick={(e) => {
              handleMobileLinkClick()
              // Wenn wir nicht auf der Startseite sind, scrollen wir nach dem Navigieren nach oben
              if (pathname !== '/') {
                // Navigation passiert automatisch durch den Link
                // Nach der Navigation scrollen wir nach oben
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }, 100)
              } else {
                // Wenn wir bereits auf der Startseite sind, scrollen wir nach oben
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            animate={{
              scale: isScrolled ? 0.818 : 1,
            }}
          >
            <span className={`block font-bold text-2xl md:text-3xl tracking-tight ${logoTextClass}`}>
              319Webdesign
            </span>
          </MotionLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              // Leistungen mit Dropdown
              if (link.hasDropdown) {
                const handleMouseEnter = () => {
                  if (closeTimeout) {
                    clearTimeout(closeTimeout)
                    setCloseTimeout(null)
                  }
                  setIsLeistungenOpen(true)
                }

                const handleMouseLeave = () => {
                  const timeout = setTimeout(() => {
                    setIsLeistungenOpen(false)
                  }, 150) // 150ms Verzögerung vor dem Schließen
                  setCloseTimeout(timeout)
                }

                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MotionLink
                      href={link.href}
                      initial={false}
                      animate={{ opacity: 1, y: 0 }}
                      className={`${desktopNavTextClass} transition-colors duration-300 relative group/nav cursor-pointer flex items-center gap-1`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLeistungenOpen ? 'rotate-180' : ''}`} />
                      <span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover/nav:w-full transition-all duration-300"
                        aria-hidden
                      />
                    </MotionLink>

                    {/* Unsichtbare Brücke – gleiche Breite wie Dropdown für zuverlässigen Hover */}
                    <div
                      className={`absolute top-full left-1/2 z-[55] h-40 -translate-x-1/2 ${
                        isLeistungenOpen ? 'pointer-events-auto' : 'pointer-events-none'
                      }`}
                      style={{ width: leistungenDropdownPanelWidth }}
                      aria-hidden
                    />

                    {/* Dropdown – 3 Spalten: Überschrift + Unterlinks */}
                    <div
                      className={`absolute top-full left-1/2 z-[60] -translate-x-1/2 pt-2 transition-opacity duration-200 ${
                        isLeistungenOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                      }`}
                      style={{ width: leistungenDropdownPanelWidth }}
                    >
                      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xl">
                        <div className="grid grid-cols-3 gap-8">
                          {leistungenMenuGroups.map((group) => (
                            <div key={group.title}>
                              <p className="border-b border-slate-200 pb-2 text-sm font-semibold tracking-tight text-slate-900">
                                {group.title}
                              </p>
                              <ul className="mt-3 space-y-0.5">
                                {group.links.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      className="block rounded-md px-2 py-2 text-sm text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              // Hash Links
              if (link.href.startsWith('#')) {
                return (
                  <motion.a
                    key={link.href}
                    href={pathname === '/' ? link.href : `/${link.href}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${desktopNavTextClass} transition-colors duration-300 relative group/nav cursor-pointer`}
                  >
                    {link.label}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover/nav:w-full transition-all duration-300"
                      aria-hidden
                    />
                  </motion.a>
                )
              }

              // Normale Links
              return (
                <MotionLink
                  key={link.href}
                  href={link.href}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${desktopNavTextClass} transition-colors duration-300 relative group/nav cursor-pointer`}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover/nav:w-full transition-all duration-300"
                    aria-hidden
                  />
                </MotionLink>
              )
            })}
            <Link
              href="/unser-angebot"
              className={navCtaClass}
              aria-label="Kostenloses Angebot sichern – zur Seite Unser Angebot"
            >
              Kostenloses Angebot sichern
            </Link>
          </div>

          {/* Mobile: CTA + Menü */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${mobileMenuButtonClass} transition-colors p-2`}
              aria-label="Menü öffnen oder schließen"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md mt-2 rounded-b-lg border border-slate-200 shadow-lg"
          style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
        >
          <div className="pt-4 pb-2 space-y-2">
            <Link
              href="/unser-angebot"
              onClick={handleMobileLinkClick}
              className={`${navCtaMobileClass} mb-3 w-full`}
              aria-label="Kostenloses Angebot sichern – zur Seite Unser Angebot"
            >
              Kostenloses Angebot sichern
            </Link>
            {navLinks.map((link, index) => {
              // Leistungen mit Submenü
              if (link.hasDropdown) {
                return (
                  <div key={link.href}>
                    <MotionLink
                      href={link.href}
                      onClick={handleMobileLinkClick}
                      initial={false}
                      animate={{
                        opacity: isMobileMenuOpen ? 1 : 0,
                        x: isMobileMenuOpen ? 0 : -20,
                      }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="block text-slate-700 hover:text-blue-600 transition-colors duration-300 py-2 cursor-pointer font-medium"
                    >
                      {link.label}
                    </MotionLink>
                    <div className="ml-2 mr-1 mt-2 space-y-4">
                      {leistungenMenuGroups.map((group, groupIndex) => (
                        <div key={group.title}>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {group.title}
                          </p>
                          <div className="mt-1.5 space-y-0.5">
                            {group.links.map((item, linkIndex) => {
                              const subIndex = groupIndex * 10 + linkIndex
                              const staggerDelay = index * 0.1 + subIndex * 0.04
                              return (
                                <MotionLink
                                  key={item.href}
                                  href={item.href}
                                  onClick={handleMobileLinkClick}
                                  initial={false}
                                  animate={{
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                    x: isMobileMenuOpen ? 0 : -20,
                                  }}
                                  transition={{ duration: 0.3, delay: staggerDelay }}
                                  className="block rounded-md py-2 pl-1 text-sm text-slate-600 transition-colors duration-300 hover:text-blue-600"
                                >
                                  {item.label}
                                </MotionLink>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-b border-slate-800/50 mt-2" />
                  </div>
                )
              }

              // Hash Links
              if (link.href.startsWith('#')) {
                return (
                  <motion.a
                    key={link.href}
                    href={pathname === '/' ? link.href : `/${link.href}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={false}
                    animate={{
                      opacity: isMobileMenuOpen ? 1 : 0,
                      x: isMobileMenuOpen ? 0 : -20,
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="block text-slate-700 hover:text-blue-600 transition-colors duration-300 py-2 border-b border-slate-200 cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                )
              }

              // Normale Links
              return (
                <MotionLink
                  key={link.href}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                  initial={false}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="block text-slate-700 hover:text-blue-600 transition-colors duration-300 py-2 border-b border-slate-200 cursor-pointer"
                >
                  {link.label}
                </MotionLink>
              )
            })}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

