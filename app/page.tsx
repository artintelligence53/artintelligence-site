'use client';

import { useLanguage } from '@/components/LanguageContext';
import Navigation from '@/components/Navigation';
import Button from '@/components/Button';
import ROICalculator from '@/components/ROICalculator';
import ChatbotShowcase from '@/components/ChatbotShowcase';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20 section-glow" id="home">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              {t.hero.title}
              <br />
              <span className="text-gradient">{t.hero.titleHighlight}</span>
              <br />
              {t.hero.titleEnd}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>

            <Button href="https://calendly.com/artintelligence/ai-call" className="!px-12 !py-6 !text-xl">
              {t.hero.cta}
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-20">
              <div className="glass p-6 rounded-xl glow-hover">
                <div className="text-4xl font-bold text-gold-400 mb-2">24/7</div>
                <div className="text-gray-300">{t.hero.stats.availability}</div>
              </div>
              <div className="glass p-6 rounded-xl glow-hover">
                <div className="text-4xl font-bold text-gold-400 mb-2">5+</div>
                <div className="text-gray-300">{t.hero.stats.solutions}</div>
              </div>
              <div className="glass p-6 rounded-xl glow-hover">
                <div className="text-4xl font-bold text-gold-400 mb-2">30</div>
                <div className="text-gray-300">{t.hero.stats.guarantee}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-6 bg-deepBlue-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              {t.problem.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {t.problem.items.map((item, index) => (
                <div key={index} className="glass p-6 rounded-xl flex items-start gap-4">
                  <div className="text-red-400 text-2xl">✗</div>
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 px-6 section-glow" id="solutions">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">{t.solution.title}</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.solution.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.solution.benefits.map((benefit, index) => (
                <div key={index} className="glass p-8 rounded-xl glow-hover text-center">
                  <h3 className="text-2xl font-bold text-gold-400 mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">{t.services.title}</span>
              </h2>
              <p className="text-xl text-gray-300">{t.services.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {t.services.items.map((service, index) => (
                <div key={index} className="glass p-8 rounded-xl glow-hover">
                  <h3 className="text-2xl font-bold mb-4 text-gold-400">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-gray-400 flex items-start gap-3">
                        <span className="text-gold-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chatbot Showcase */}
        <ChatbotShowcase />

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Process Section */}
        <section className="py-24 px-6 bg-deepBlue-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-gradient">{t.process.title}</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.process.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-black">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-gradient">{t.trust.title}</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.trust.items.map((item, index) => (
                <div key={index} className="glass p-6 rounded-xl glow-hover">
                  <h3 className="text-lg font-bold mb-2 text-gold-400">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-6 section-glow" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t.contact.title.split('?')[0]}
              <span className="text-gradient">?</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-4">{t.contact.subtitle}</p>
            <p className="text-lg text-gray-400 mb-12">{t.contact.noCommitment}</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button href="https://calendly.com/artintelligence/ai-call" className="!px-10 !py-5 !text-xl">
                {t.contact.bookCall}
              </Button>

              <Button variant="secondary" href="mailto:max@artintelligence.ch" className="!px-10 !py-5 !text-xl">
                {t.contact.email}
              </Button>
            </div>

            <div className="glass p-8 rounded-xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-gray-400 text-sm mb-2">{t.contact.info.contact}</div>
                  <a
                    href="mailto:max@artintelligence.ch"
                    className="text-white hover:text-gold-400 transition-colors font-medium"
                  >
                    max@artintelligence.ch
                  </a>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-2">{t.contact.info.phone}</div>
                  <a
                    href="tel:+41762404824"
                    className="text-white hover:text-gold-400 transition-colors font-medium"
                  >
                    +41 76 240 48 24
                  </a>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-2">{t.contact.info.location}</div>
                  <div className="text-white font-medium">{t.contact.location}</div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400">
                  <strong className="text-white">{t.contact.info.partners}:</strong> {t.contact.partners}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} ARTintelligence. {t.footer.rights}
            </p>
            <p className="mt-2">{t.contact.partners}</p>
          </div>
        </footer>
      </main>
    </>
  );
}
