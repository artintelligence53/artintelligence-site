export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'We analyze your workflows, identify automation opportunities, and show you exactly what\'s possible.',
      duration: '30-45 min'
    },
    {
      number: '02',
      title: 'Implementation & Testing',
      description: 'We build your AI systems and test them with real scenarios from your business.',
      duration: '1-2 weeks'
    },
    {
      number: '03',
      title: 'Go-Live & Onboarding',
      description: 'Quick training session, then your AI systems start working immediately.',
      duration: '1 day'
    },
    {
      number: '04',
      title: 'Payment & Support',
      description: 'Pay via secure Stripe link. Work begins immediately with ongoing support.',
      duration: 'Ongoing'
    }
  ]

  return (
    <section id="process" className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient">Transparent Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From first call to automated operations in weeks, not months
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-px bg-gradient-to-b from-gold-500 to-transparent"></div>
              )}

              <div className="glass-card p-8 hover:bg-white/10 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-2xl font-bold text-black flex-shrink-0 group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <span className="text-gold-400 text-sm font-medium px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
            <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg">
              Average time to full automation: <strong className="text-gold-400">14 days</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
