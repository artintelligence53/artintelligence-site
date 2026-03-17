'use client'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-20">
        <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gold-400 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in">
          Interlaken • Switzerland
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
          Stop Losing Time on <br />
          <span className="text-gradient">Manual Work.</span><br />
          Let AI Handle It.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          ARTintelligence implements AI systems that automate your operations,
          capture every lead, and save <span className="text-gold-400 font-semibold">hours every day</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/50 text-lg"
          >
            Book a Free Consultation
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-card hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 text-lg"
          >
            See How It Works
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass-card p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl font-bold text-gold-400 mb-2">24/7</div>
            <div className="text-gray-300">Always Available</div>
          </div>
          <div className="glass-card p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl font-bold text-gold-400 mb-2">5+</div>
            <div className="text-gray-300">AI Solutions</div>
          </div>
          <div className="glass-card p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl font-bold text-gold-400 mb-2">30 Days</div>
            <div className="text-gray-300">Money-Back Guarantee</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
