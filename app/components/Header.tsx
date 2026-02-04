'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const router = useRouter()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

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

  const leistungenItems = [
    { href: '/leistungen/webdesign', label: 'Webdesign', icon: '⚡' },
    { href: '/leistungen/seo', label: 'SEO-Optimierung', icon: '🔍' },
    { href: '/leistungen/wartung', label: 'Website-Wartung', icon: '⚙️' },
  ]

  const navLinks = [
    { href: '#prozess', label: 'Prozess' },
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

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? 'backdrop-blur-md bg-slate-950/98 shadow-lg shadow-black/20'
          : isScrolled
          ? 'backdrop-blur-md bg-slate-950/95 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-[10px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group/logo"
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
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              animate={{
                scale: isScrolled ? 0.818 : 1,
              }}
              className="relative"
            >
              <Image
                src="/319.png"
                alt="319Webdesign Logo – Webdesign und SEO für Darmstadt, Pfungstadt und Südhessen"
                width={110}
                height={110}
                sizes="(max-width: 768px) 70px, 110px"
                className="object-contain w-[70px] h-[70px] md:w-[110px] md:h-[110px]"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
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
                    <Link href={link.href}>
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                        className="text-slate-200 hover:text-cyan-400 transition-colors duration-300 relative group/nav cursor-pointer flex items-center gap-1"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLeistungenOpen ? 'rotate-180' : ''}`} />
                        <motion.span
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover/nav:w-full transition-all duration-300"
                        />
                      </motion.div>
                    </Link>

                    {/* Dropdown Menu */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: isLeistungenOpen ? 1 : 0,
                        y: isLeistungenOpen ? 0 : -10,
                        pointerEvents: isLeistungenOpen ? 'auto' : 'none',
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full pt-2 left-0 min-w-[240px]"
                    >
                      <div className="bg-slate-900/98 backdrop-blur-md rounded-lg shadow-xl border border-slate-700/50 overflow-hidden">
                      {leistungenItems.map((item, idx) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200 border-b border-slate-800/50 last:border-b-0"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.label}</span>
                          </div>
                        </Link>
                      ))}
                      </div>
                    </motion.div>
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
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    className="text-slate-200 hover:text-cyan-400 transition-colors duration-300 relative group/nav cursor-pointer"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover/nav:w-full transition-all duration-300"
                    />
                  </motion.a>
                )
              }

              // Normale Links
              return (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    className="text-slate-200 hover:text-cyan-400 transition-colors duration-300 relative group/nav cursor-pointer"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover/nav:w-full transition-all duration-300"
                    />
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-200 hover:text-cyan-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-md mt-2 rounded-b-lg"
          style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
        >
          <div className="pt-4 pb-2 space-y-2">
            {navLinks.map((link, index) => {
              // Leistungen mit Submenü
              if (link.hasDropdown) {
                return (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handleMobileLinkClick}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: isMobileMenuOpen ? 1 : 0,
                          x: isMobileMenuOpen ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="block text-slate-200 hover:text-cyan-400 transition-colors duration-300 py-2 cursor-pointer font-medium"
                      >
                        {link.label}
                      </motion.div>
                    </Link>
                    {/* Submenu Items */}
                    <div className="ml-4 space-y-1 mt-1">
                      {leistungenItems.map((item, idx) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleMobileLinkClick}
                        >
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: isMobileMenuOpen ? 1 : 0,
                              x: isMobileMenuOpen ? 0 : -20,
                            }}
                            transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.05) }}
                            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 py-2 text-sm"
                          >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </motion.div>
                        </Link>
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
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isMobileMenuOpen ? 1 : 0,
                      x: isMobileMenuOpen ? 0 : -20,
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="block text-slate-200 hover:text-cyan-400 transition-colors duration-300 py-2 border-b border-slate-800/50 cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                )
              }

              // Normale Links
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isMobileMenuOpen ? 1 : 0,
                      x: isMobileMenuOpen ? 0 : -20,
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="block text-slate-200 hover:text-cyan-400 transition-colors duration-300 py-2 border-b border-slate-800/50 cursor-pointer"
                  >
                    {link.label}
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

