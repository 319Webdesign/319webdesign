'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  // Scroll to hash on page load if hash exists in URL
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const headerOffset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [pathname])

  const navLinks = [
    { href: '#prozess', label: 'Prozess' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false)
    
    // Wenn es ein Hash-Link ist
    if (href.startsWith('#')) {
      e.preventDefault()
      
      // Wenn wir nicht auf der Hauptseite sind, navigieren wir dorthin
      if (pathname !== '/') {
        router.push(`/${href}`)
        // Scrollen nachdem die Seite geladen wurde
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            const headerOffset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 300)
      } else {
        // Wenn wir bereits auf der Hauptseite sind, normal scrollen
        const element = document.querySelector(href)
        if (element) {
          const headerOffset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
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
            onClick={handleMobileLinkClick}
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
                alt="319Webdesign Logo"
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
            {navLinks.map((link, index) => (
              link.href.startsWith('#') ? (
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
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                >
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
            ))}
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
          <div className="pt-4 pb-2 space-y-4">
            {navLinks.map((link, index) => (
              link.href.startsWith('#') ? (
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
              ) : (
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
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

