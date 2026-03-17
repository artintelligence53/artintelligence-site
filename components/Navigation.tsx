'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Language } from '@/lib/translations';
import Button from './Button';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-gradient">ART</span>intelligence
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white/80 hover:text-white transition-colors">
            {t.nav.home}
          </a>
          <a href="#services" className="text-white/80 hover:text-white transition-colors">
            {t.nav.services}
          </a>
          <a href="#solutions" className="text-white/80 hover:text-white transition-colors">
            {t.nav.solutions}
          </a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">
            {t.nav.contact}
          </a>

          <div className="flex items-center gap-2 ml-4">
            {(['de', 'en', 'fr'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 rounded-lg transition-all ${
                  language === lang
                    ? 'bg-gold-500 text-black font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <Button href="https://calendly.com/artintelligence/ai-call" className="!px-6 !py-3 !text-base">
            {t.nav.bookCall}
          </Button>
        </div>
      </div>
    </nav>
  );
}
