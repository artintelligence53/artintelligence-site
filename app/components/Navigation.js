'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-gold-500">ART</span>
          <span className="text-white">intelligence</span>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${mobileOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-full left-0 right-0 lg:top-0 bg-black lg:bg-transparent border-b lg:border-b-0 border-white/10 lg:border-0 gap-2 lg:gap-8 p-6 lg:p-0 items-stretch lg:items-center`}>
          <button onClick={() => scrollTo('services')} className="text-gray-300 hover:text-gold-400 transition-colors text-left lg:text-center py-2 lg:py-0">
            Leistungen
          </button>
          <button onClick={() => scrollTo('process')} className="text-gray-300 hover:text-gold-400 transition-colors text-left lg:text-center py-2 lg:py-0">
            Ablauf
          </button>
          <button onClick={() => scrollTo('guarantee')} className="text-gray-300 hover:text-gold-400 transition-colors text-left lg:text-center py-2 lg:py-0">
            Garantie
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-semibold px-6 py-2 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-gold-500/50"
          >
            Termin buchen
          </button>
        </div>
      </div>
    </nav>
  )
}
