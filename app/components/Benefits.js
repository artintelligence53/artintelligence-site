export default function Benefits() {
  const benefits = [
    {
      title: 'Zeit zurückgewinnen',
      description: 'Gewinnen Sie täglich mehrere Stunden zurück. Fokus auf Strategie statt Administration.',
      metric: '40%',
      metricLabel: 'Zeit gespart',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Blitzschnelle Antworten',
      description: 'Antworten Sie Kunden in Sekunden, nicht Stunden. Schlagen Sie Konkurrenten, die warten lassen.',
      metric: '95%',
      metricLabel: 'Schnellere Antwort',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Umsatz steigern',
      description: 'Erfassen Sie jeden Lead, schliessen Sie Deals schneller und bedienen Sie mehr Kunden.',
      metric: '+30%',
      metricLabel: 'Umsatzwachstum',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Null manuelle Arbeit',
      description: 'Eliminieren Sie repetitive Aufgaben komplett. Ihr Team macht nur noch, was Menschen brauchen.',
      metric: '90%',
      metricLabel: 'Aufgaben automatisiert',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformieren Sie Ihre <span className="text-gradient">Geschäftsabläufe</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Echte Resultate von Unternehmen, die manuelle Arbeit gestoppt haben
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:glow-gold transition-all text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-gold-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>

              <div className="text-5xl font-bold text-gradient mb-2">
                {benefit.metric}
              </div>
              <div className="text-sm text-gray-400 mb-6 uppercase tracking-wider">
                {benefit.metricLabel}
              </div>

              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block glass-card p-8 max-w-2xl">
            <p className="text-2xl font-semibold mb-4">
              <span className="text-gradient">Ihre Investition zahlt sich aus</span> in Wochen, nicht Monaten
            </p>
            <p className="text-gray-400">
              Die meisten Kunden sparen mehr durch wegfallende manuelle Arbeit als sie für Automatisierung ausgeben - innerhalb von 30 Tagen
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
