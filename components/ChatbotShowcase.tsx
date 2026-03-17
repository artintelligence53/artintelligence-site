'use client';

import { useLanguage } from './LanguageContext';

export default function ChatbotShowcase() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6" id="chatbot">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t.chatbot.title}</span>
          </h2>
          <p className="text-xl text-gray-300">{t.chatbot.subtitle}</p>
        </div>

        <div className="glass rounded-2xl p-8 glow-effect">
          <div className="space-y-4">
            {t.chatbot.messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`max-w-[80%] px-6 py-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-black'
                      : 'bg-white/10 text-white border border-white/20'
                  }`}
                >
                  <p className="text-sm md:text-base">{message.text}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 pt-4">
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
