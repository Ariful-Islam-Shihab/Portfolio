'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navigation, profile } from '@/data/profile'
import { Button } from '@/components/ui/Button'
import { Menu, X, Sun, Moon } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navigation.map(n => n.href)
      const scrollPos = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(sections[i])
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY
          if (scrollPos >= offsetTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark
    setDarkMode(isDark)
    document.documentElement.classList.toggle('light', !isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('light', !newDarkMode)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-2 font-display font-bold text-xl text-foreground hover:opacity-80 transition-opacity"
            aria-label="Ariful Islam Shihab - Home"
          >
            <span className="font-mono text-primary">AIS</span>
            <span className="hidden sm:block">Ariful Islam Shihab</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors rounded-md',
                  activeSection === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                aria-current={activeSection === item.href ? 'page' : undefined}
              >
                {activeSection === item.href && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-md bg-primary/10 border border-primary/20"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="btn-ghost p-2 rounded-full"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden btn-ghost p-2 rounded-full"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden border-t border-border bg-background"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'w-full px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors',
                      activeSection === item.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  <Button variant="primary" className="flex-1" onClick={() => scrollToSection('#contact')}>
                    Get in Touch
                  </Button>
                  <Button variant="ghost" className="flex-1" onClick={() => window.open(profile.cv, '_blank')}>
                    Download CV
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}