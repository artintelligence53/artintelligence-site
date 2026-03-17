export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Arbeitszeit zurückgewinnen.<br />
            <span className="text-gradient">Antwortzeiten verkürzen.</span><br />
            Keine Anfrage verpassen.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            ARTintelligence hilft kleinen und mittelgrossen Unternehmen mit smarter KI,
            Routinearbeit zu automatisieren und täglich Stunden zu sparen.
          </p>

          <a
            href="https://calendly.com/artintelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold px-10 py-5 rounded-xl transition-all text-xl"
          >
            Kostenloses Erstgespräch buchen
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="p-6 border border-white/10 rounded-xl">
              <div className="text-4xl font-bold text-gold-400 mb-2">24/7</div>
              <div className="text-gray-300">Immer verfügbar</div>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <div className="text-4xl font-bold text-gold-400 mb-2">5+</div>
              <div className="text-gray-300">KI-Lösungen</div>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <div className="text-4xl font-bold text-gold-400 mb-2">30 Tage</div>
              <div className="text-gray-300">Geld-zurück-Garantie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Unsere Leistungen</span>
            </h2>
            <p className="text-xl text-gray-300">
              Einzelne Services oder komplettes Automatisierungs-Ökosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="p-8 border border-white/10 rounded-xl hover:border-gold-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">AI Office Assistent</h3>
              <p className="text-gray-300 mb-6">
                Die KI übernimmt Routinearbeit, damit Sie täglich mehrere Stunden Verwaltungszeit zurückgewinnen.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li>✓ Liest und beantwortet E-Mails automatisch</li>
                <li>✓ Plant Termine direkt im Kalender</li>
                <li>✓ Schreibt Angebote und Rechnungen nach Vorlage</li>
                <li>✓ Erinnert an offene Aufgaben</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-8 border border-white/10 rounded-xl hover:border-gold-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Telefon-Assistent 24/7</h3>
              <p className="text-gray-300 mb-6">
                Kein Anruf geht verloren. Nimmt Gespräche professionell entgegen, bucht Termine und qualifiziert Leads.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li>✓ Nimmt alle Telefonanrufe rund um die Uhr entgegen</li>
                <li>✓ Spricht natürlich (Deutsch/Englisch/Französisch)</li>
                <li>✓ Bucht Termine direkt in den Kalender</li>
                <li>✓ Informiert nur bei wichtigen Anrufen</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-8 border border-white/10 rounded-xl hover:border-gold-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">AI Sales Chatbot</h3>
              <p className="text-gray-300 mb-6">
                Begrüsst Besucher, beantwortet Fragen in Sekunden und führt Interessenten zur Anfrage.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li>✓ Beantwortet Fragen sofort</li>
                <li>✓ Empfiehlt passende Produkte oder Dienstleistungen</li>
                <li>✓ Qualifiziert Anfragen strukturiert</li>
                <li>✓ Mehrsprachig möglich</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="p-8 border border-white/10 rounded-xl hover:border-gold-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">AI Data Cleanup & Quality</h3>
              <p className="text-gray-300 mb-6">
                Automatisierte Datenpflege, damit CRM, Marketing und Administration verlässlich laufen.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li>✓ Führt Daten zusammen, standardisiert Formate</li>
                <li>✓ Erkennt und behebt Dubletten</li>
                <li>✓ Stellt Sonderfälle in Review-Liste bereit</li>
                <li>✓ Hält Datenqualität dauerhaft hoch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Bereit, <span className="text-gradient">Zeit zurückzugewinnen?</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-4">
            Buchen Sie jetzt Ihr kostenloses Erstgespräch mit Demo
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Keine Verpflichtung. Kein Verkaufsdruck.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://calendly.com/artintelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold px-10 py-5 rounded-xl transition-all text-xl"
            >
              Termin buchen (Calendly)
            </a>

            <a
              href="mailto:paul@artintelligence.ch"
              className="border border-white/20 hover:border-gold-500/50 text-white font-semibold px-10 py-5 rounded-xl transition-all text-xl"
            >
              Per E-Mail kontaktieren
            </a>
          </div>

          <div className="border border-white/10 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-gray-400 text-sm mb-2">Kontakt</div>
                <a href="mailto:paul@artintelligence.ch" className="text-white hover:text-gold-400 transition-colors font-medium">
                  paul@artintelligence.ch
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Telefon</div>
                <a href="tel:+41762404824" className="text-white hover:text-gold-400 transition-colors font-medium">
                  +41 76 240 48 24
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Standort</div>
                <div className="text-white font-medium">Interlaken, Schweiz</div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400">
                <strong className="text-white">Ihre Partner:</strong> Paul Breitenstein & Max Gureck
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ARTintelligence. Alle Rechte vorbehalten.</p>
          <p className="mt-2">Paul Breitenstein & Max Gureck</p>
        </div>
      </footer>
    </main>
  );
}
