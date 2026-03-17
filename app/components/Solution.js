export default function Solution() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm font-medium mb-6 backdrop-blur-sm">
            Die Lösung
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ein <span className="text-gradient">integriertes KI-System</span><br />
            das alles übernimmt
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Schluss mit Tool-Chaos. Erhalten Sie ein komplettes KI-gestütztes System, das nahtlos zusammenarbeitet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8 text-center hover:glow-gold transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Automatisieren</h3>
            <p className="text-gray-400">
              KI übernimmt E-Mails, Anrufe, Dateneingabe und Terminplanung automatisch
            </p>
          </div>

          <div className="glass-card p-8 text-center hover:glow-gold transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Erfassen</h3>
            <p className="text-gray-400">
              Verpassen Sie nie wieder einen Lead dank intelligenten 24/7-Response-Systemen
            </p>
          </div>

          <div className="glass-card p-8 text-center hover:glow-gold transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Skalieren</h3>
            <p className="text-gray-400">
              Wachsen Sie ohne zusätzliches Verwaltungspersonal einzustellen
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg">
              Funktioniert mit Ihren bestehenden Systemen - keine Disruption erforderlich
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
