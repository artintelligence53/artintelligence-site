export default function Services() {
  const services = [
    {
      title: 'AI Office Assistant',
      subtitle: 'Your All-in-One AI Employee',
      description: 'Automatically handles emails, schedules appointments, creates documents, and manages follow-ups 24/7.',
      features: [
        'Reads and responds to emails automatically',
        'Schedules appointments in your calendar',
        'Creates offers and invoices from templates',
        'Never misses a follow-up or reminder',
        'Works via email, WhatsApp, or website chat'
      ],
      roi: 'Save 3-5 hours per day',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'AI Phone Assistant',
      subtitle: '24/7 Call Handling',
      description: 'Never miss another call. Answers professionally in multiple languages, books appointments, and qualifies leads.',
      features: [
        'Answers all calls 24/7 automatically',
        'Speaks naturally (German/English/French)',
        'Books appointments directly',
        'Creates call summaries for your team',
        'Prioritizes urgent calls'
      ],
      roi: 'Capture 100% of inbound leads',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'AI Sales Chatbot',
      subtitle: 'Your 24/7 Website Sales Agent',
      description: 'Converts website visitors into qualified leads by answering questions instantly and guiding them through the sales process.',
      features: [
        'Answers questions instantly',
        'Recommends products/services intelligently',
        'Qualifies and structures lead data',
        'Multilingual support',
        'Optional booking & payment integration'
      ],
      roi: 'Increase conversion by 40%+',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: 'AI Data Cleanup',
      subtitle: 'Automated Data Quality System',
      description: 'Maintains pristine CRM and database quality automatically, eliminating duplicates and ensuring data consistency.',
      features: [
        'Automatically standardizes data formats',
        'Detects and merges duplicates',
        'Reviews exceptions for your approval',
        'Reduces errors in reporting and campaigns',
        'Maintains high data quality continuously'
      ],
      roi: 'Reduce data errors by 90%',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      )
    },
    {
      title: 'AI Dynamic Offers',
      subtitle: 'Real-Time Personalization Engine',
      description: 'Generates personalized offers automatically based on customer data, behavior, and budget parameters.',
      features: [
        'Calculates prices automatically',
        'Adjusts service packages dynamically',
        'Detects budget and suggests options',
        'Creates interactive offer pages',
        'Analyzes acceptance probability'
      ],
      roi: 'Close deals 2x faster',
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
            <span className="text-gradient">AI-Powered Solutions</span><br />
            That Deliver Real ROI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose individual services or implement a complete automation ecosystem
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
