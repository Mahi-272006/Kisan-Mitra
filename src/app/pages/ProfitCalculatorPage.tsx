import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { VoiceAssistant } from '../components/VoiceAssistant';
import { BottomNav } from '../components/BottomNav';
import { Calculator, TrendingUp, ArrowLeft, Award } from 'lucide-react';

const mandis = [
  { name: 'Ludhiana Mandi', price: 2050, distance: 12 },
  { name: 'Amritsar Mandi', price: 2000, distance: 45 },
  { name: 'Jalandhar Mandi', price: 1950, distance: 25 },
];

export const ProfitCalculatorPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [quantity, setQuantity] = useState('');
  const [transport, setTransport] = useState('');
  const [labor, setLabor] = useState('');
  const [other, setOther] = useState('');
  const [calculated, setCalculated] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleCalculate = () => {
    const qty = parseFloat(quantity) || 0;
    const transportCost = parseFloat(transport) || 0;
    const laborCost = parseFloat(labor) || 0;
    const otherCost = parseFloat(other) || 0;

    const totalExpenses = transportCost + laborCost + otherCost;

    const mandiResults = mandis.map(mandi => {
      const revenue = qty * mandi.price;
      const netEarning = revenue - totalExpenses;
      return {
        ...mandi,
        revenue,
        netEarning
      };
    });

    mandiResults.sort((a, b) => b.netEarning - a.netEarning);

    setResults({
      totalExpenses,
      mandis: mandiResults
    });
    setCalculated(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 shadow-lg">
        <div className="max-w-lg mx-auto">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 mb-3 text-green-100 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8" />
            <h1 className="text-2xl font-bold" data-speak={t('profitCalculator')}>
              {t('profitCalculator')}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 mt-6 space-y-4">
        {!calculated ? (
          /* Input Form */
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="space-y-4">
              {/* Quantity */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2" data-speak={t('quantity')}>
                  {t('quantity')}
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder={t('enterQuantity')}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                />
              </div>

              {/* Transport Cost */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2" data-speak={t('transport')}>
                  {t('transport')}
                </label>
                <input
                  type="number"
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)}
                  placeholder={t('enterTransport')}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                />
              </div>

              {/* Labor Cost */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2" data-speak={t('labor')}>
                  {t('labor')}
                </label>
                <input
                  type="number"
                  value={labor}
                  onChange={(e) => setLabor(e.target.value)}
                  placeholder={t('enterLabor')}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                />
              </div>

              {/* Other Expenses */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2" data-speak={t('otherExpenses')}>
                  {t('otherExpenses')}
                </label>
                <input
                  type="number"
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                  placeholder={t('enterOther')}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                />
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
                data-speak={t('calculate')}
              >
                <Calculator className="w-5 h-5" />
                {t('calculate')}
              </button>
            </div>
          </div>
        ) : (
          /* Results */
          <>
            {/* Best Mandi */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-6 h-6" />
                <h2 className="text-lg font-bold" data-speak={t('bestMandiProfit')}>
                  {t('bestMandiProfit')}
                </h2>
              </div>
              <h3 className="text-2xl font-bold mb-2" data-speak={results.mandis[0].name}>
                {results.mandis[0].name}
              </h3>
              <div className="text-4xl font-bold" data-speak={`Net Earning: ₹${results.mandis[0].netEarning.toFixed(0)}`}>
                ₹{results.mandis[0].netEarning.toFixed(0)}
              </div>
              <div className="text-green-100 mt-1">{t('netEarning')}</div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">{t('totalExpenses')}</span>
                  <span className="font-bold text-red-600 text-lg">
                    -₹{results.totalExpenses.toFixed(0)}
                  </span>
                </div>
              </div>
            </div>

            {/* All Mandis Comparison */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">All Mandis</h3>
              <div className="space-y-3">
                {results.mandis.map((mandi: any, index: number) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl ${
                      index === 0 
                        ? 'bg-gradient-to-r from-green-50 to-yellow-50 border-2 border-green-500' 
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-800" data-speak={mandi.name}>
                        {mandi.name}
                      </h4>
                      {index === 0 && (
                        <Award className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-gray-500">{t('totalRevenue')}</div>
                        <div className="font-bold text-blue-600">₹{mandi.revenue.toFixed(0)}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">{t('netEarning')}</div>
                        <div className={`font-bold text-lg ${
                          mandi.netEarning > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          ₹{mandi.netEarning.toFixed(0)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recalculate Button */}
            <button
              onClick={() => setCalculated(false)}
              className="w-full bg-gray-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
            >
              Recalculate
            </button>
          </>
        )}
      </div>

      <BottomNav />
      <VoiceAssistant pageContent={t('profitCalculator')} />
    </div>
  );
};
