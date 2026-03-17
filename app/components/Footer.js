export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-gold-500">ART</span>
              <span className="text-white">intelligence</span>
            </div>
            <p className="text-gray-400 mb-4">
              KI-Automatisierung für kleine und mittelgrosse Unternehmen. Zeit sparen, Leads erfassen, Umsatz steigern.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AI Office Assistent</li>
              <li>Telefon-Assistent</li>
              <li>AI Sales Chatbot</li>
              <li>AI Data Cleanup</li>
              <li>AI Angebots-Individualisierung</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:paul@artintelligence.ch" className="hover:text-gold-400 transition-colors">
                  paul@artintelligence.ch
                </a>
              </li>
              <li>
                <a href="tel:+41762404824" className="hover:text-gold-400 transition-colors">
                  +41 76 240 48 24
                </a>
              </li>
              <li>Interlaken, Schweiz</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ARTintelligence. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-500 text-sm">
            Paul Breitenstein & Max Gureck
          </p>
        </div>
      </div>
    </footer>
  )
}
