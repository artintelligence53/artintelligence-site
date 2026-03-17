export default function Contact() {
  const calendlyUrl = 'https://calendly.com/artintelligence'

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Bereit, <span className="text-gradient">Zeit zurückzugewinnen?</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-4">
            Buchen Sie jetzt Ihr kostenloses Erstgespräch mit Demo
          </p>
          <p className="text-lg text-gray-400">
            Keine Verpflichtung. Kein Verkaufsdruck. Nur ein echtes Gespräch über Ihr Unternehmen.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold px-10 py-5 rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/50 text-xl flex items-center gap-3 animate-glow"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Termin buchen (Calendly)
          </a>

          <a
            href="mailto:paul@artintelligence.ch?subject=Anfrage%20Erstgespräch"
            className="glass-card hover:bg-white/10 text-white font-semibold px-10 py-5 rounded-xl transition-all hover:scale-105 text-xl flex items-center gap-3"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Per E-Mail kontaktieren
          </a>
        </div>

        <div className="glass-card p-8 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-gray-400 text-sm mb-2">Contact</div>
              <a href="mailto:paul@artintelligence.ch" className="text-white hover:text-gold-400 transition-colors font-medium">
                paul@artintelligence.ch
              </a>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-2">Phone</div>
              <a href="tel:+41762404824" className="text-white hover:text-gold-400 transition-colors font-medium">
                +41 76 240 48 24
              </a>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-2">Location</div>
              <div className="text-white font-medium">Interlaken, Switzerland</div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400">
              <strong className="text-white">Your Partners:</strong> Paul Breitenstein & Max Gureck
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
