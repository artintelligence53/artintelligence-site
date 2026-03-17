export default function Services() {
  const services = [
    {
      title: 'AI Office Assistent',
      subtitle: 'Intelligenter All-in-One-Mitarbeiter',
      description: 'Die KI übernimmt Routinearbeit, damit Sie täglich mehrere Stunden Verwaltungszeit zurückgewinnen.',
      features: [
        'Liest und beantwortet E-Mails automatisch nach Ihren Vorlagen',
        'Plant Termine direkt im Kalender inkl. Bestätigungen',
        'Schreibt Angebote und Rechnungen nach Vorlage zur Freigabe',
        'Erinnert an offene Aufgaben und Follow-ups',
        'Arbeitet optional über WhatsApp oder Website-Chat'
      ],
      roi: 'Mehrere Stunden täglich zurückgewinnen',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Telefon-Assistent',
      subtitle: 'Vollautomatischer Anrufempfang 24/7',
      description: 'Kein Anruf geht verloren. Nimmt Gespräche professionell entgegen, bucht Termine und qualifiziert Leads.',
      features: [
        'Nimmt alle Telefonanrufe rund um die Uhr entgegen',
        'Spricht natürlich (Deutsch/Englisch/Französisch)',
        'Bucht Termine direkt in den Kalender',
        'Erstellt automatisch Zusammenfassung fürs Team',
        'Informiert Sie nur bei wichtigen Anrufen'
      ],
      roi: 'Kein verpasster Lead mehr',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'AI Sales Chatbot',
      subtitle: 'Ihr 24/7-Verkäufer auf der Website',
      description: 'Begrüsst Besucher, beantwortet Fragen in Sekunden und führt Interessenten zur Anfrage.',
      features: [
        'Beantwortet Fragen sofort (Leistungen, Ablauf, Verfügbarkeit)',
        'Empfiehlt passende Produkte oder Dienstleistungen',
        'Qualifiziert Anfragen und sammelt wichtigste Infos',
        'Mehrsprachig möglich',
        'Optional: Buchungen oder Zahlungen integrierbar'
      ],
      roi: 'Strukturierte Leads statt Chat-Chaos',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: 'AI Data Cleanup & Quality',
      subtitle: 'Dauerhaft saubere Daten',
      description: 'Automatisierte Datenpflege, damit CRM, Marketing und Administration verlässlich laufen.',
      features: [
        'Führt Daten zusammen, standardisiert Formate',
        'Erkennt Dubletten und führt Datensätze zusammen',
        'Stellt Sonderfälle in Review-Liste bereit',
        'Reduziert Doppelarbeit und Folgefehler',
        'Hält Datenqualität dauerhaft hoch'
      ],
      roi: 'Saubere, konsistente Datenbasis',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      )
    },
    {
      title: 'AI Angebots-Individualisierung',
      subtitle: 'Dynamische Preis- & Leistungslogik',
      description: 'Erstellt automatisch individuelle Angebote basierend auf Kundendaten, Verhalten oder Budget.',
      features: [
        'Berechnet Preise automatisch anhand Parameter',
        'Passt Leistungsumfang dynamisch an',
        'Erkennt Budgetrahmen und schlägt Varianten vor',
        'Generiert interaktive Angebotsseiten statt PDF',
        'Analysiert Annahmewahrscheinlichkeit'
      ],
      roi: 'Massgeschneiderte Angebote ohne manuelle Kalkulation',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Unsere Leistungen</span><br />
            Ganz einfach erklärt
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Einzelne Services oder komplettes Automatisierungs-Ökosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:bg-white/10 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                  <p className="text-gold-400 font-medium">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10">
                <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-gold-400 font-semibold">{service.roi}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
