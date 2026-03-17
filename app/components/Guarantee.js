export default function Guarantee() {
  return (
    <section id="guarantee" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Null Risiko</span> / Geld-zurück-Garantie
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wir sind so überzeugt von unseren Systemen, dass wir eine 30-Tage-Geld-zurück-Garantie bieten
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 glass-card p-10 hover:glow-gold transition-all">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">100% Geld-zurück-Garantie</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Wenn wir innerhalb der ersten 30 Tage nach Go-Live die vereinbarten Basisfunktionen nicht zu Ihrer Zufriedenheit liefern: <strong className="text-gold-400">100% Setup zurück</strong>. Ohne Wenn und Aber.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold mb-1">30-Tage-Fenster</div>
                  <div className="text-sm text-gray-400">Volle Abdeckung ab Go-Live</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold mb-1">100% Rückerstattung</div>
                  <div className="text-sm text-gray-400">Kein Teilbetrag, voller Betrag zurück</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold mb-1">Keine versteckten Bedingungen</div>
                  <div className="text-sm text-gray-400">Einfach, unkompliziert</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Datenschutz garantiert</h3>
            <p className="text-gray-300 mb-6">
              Zugriff nur nach Freigabe. Sichere Verarbeitung/Übertragung. NDA & AVV auf Wunsch.
            </p>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400 pb-3 border-b border-white/10">DSGVO-konform</li>
              <li className="text-sm text-gray-400 pb-3 border-b border-white/10">Schweizer Standards</li>
              <li className="text-sm text-gray-400">Ende-zu-Ende-Verschlüsselung</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block glass-card p-8 max-w-3xl">
            <p className="text-2xl font-semibold mb-2">
              <span className="text-gradient">Pragmatisch in Ihre bestehenden Abläufe</span>
            </p>
            <p className="text-gray-400">
              Keine Disruption, keine Datenmigrations-Alpträume. Wir integrieren in das, was Sie bereits nutzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
