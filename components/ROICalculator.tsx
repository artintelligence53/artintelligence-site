'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import Button from './Button';

export default function ROICalculator() {
  const { t } = useLanguage();
  const [inputs, setInputs] = useState({
    emails: 30,
    timePerEmail: 5,
    calls: 20,
    missedLeads: 5,
    hourlyCost: 80,
  });

  const [showResults, setShowResults] = useState(false);

  const calculate = () => {
    setShowResults(true);
  };

  const emailTimePerMonth = (inputs.emails * inputs.timePerEmail * 20) / 60;
  const callTimePerMonth = (inputs.calls * 10 * 4) / 60;
  const totalHoursSaved = emailTimePerMonth + callTimePerMonth + inputs.missedLeads * 2;
  const costSaved = totalHoursSaved * inputs.hourlyCost;
  const revenuePotential = inputs.missedLeads * 4 * 500;

  return (
    <section className="py-24 px-6 section-glow" id="roi">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t.roi.title}</span>
          </h2>
          <p className="text-xl text-gray-300">{t.roi.subtitle}</p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 glow-effect">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t.roi.inputs.emails}</label>
              <input
                type="number"
                value={inputs.emails}
                onChange={(e) => setInputs({ ...inputs, emails: parseInt(e.target.value) || 0 })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">{t.roi.inputs.timePerEmail}</label>
              <input
                type="number"
                value={inputs.timePerEmail}
                onChange={(e) => setInputs({ ...inputs, timePerEmail: parseInt(e.target.value) || 0 })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">{t.roi.inputs.calls}</label>
              <input
                type="number"
                value={inputs.calls}
                onChange={(e) => setInputs({ ...inputs, calls: parseInt(e.target.value) || 0 })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">{t.roi.inputs.missedLeads}</label>
              <input
                type="number"
                value={inputs.missedLeads}
                onChange={(e) => setInputs({ ...inputs, missedLeads: parseInt(e.target.value) || 0 })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">{t.roi.inputs.hourlyCost}</label>
              <input
                type="number"
                value={inputs.hourlyCost}
                onChange={(e) => setInputs({ ...inputs, hourlyCost: parseInt(e.target.value) || 0 })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold py-4 rounded-xl transition-all mb-8"
          >
            {t.roi.calculate}
          </button>

          {showResults && (
            <div className="border-t border-white/10 pt-8 space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-gradient mb-6">{t.roi.results.title}</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gold-400 mb-2">{totalHoursSaved.toFixed(0)}</div>
                  <div className="text-gray-300">{t.roi.results.hourlySaved}</div>
                </div>

                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gold-400 mb-2">CHF {costSaved.toFixed(0)}</div>
                  <div className="text-gray-300">{t.roi.results.costSaved}</div>
                </div>

                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gold-400 mb-2">CHF {revenuePotential.toFixed(0)}</div>
                  <div className="text-gray-300">{t.roi.results.revenuePotential}</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button href="https://calendly.com/artintelligence/ai-call">
                  {t.roi.results.cta}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
