import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { VoiceAssistant } from '../components/VoiceAssistant';
import { BottomNav } from '../components/BottomNav';
import { 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  Bell, 
  Calculator,
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const priceData = [
  { day: 'Mon', price: 1850 },
  { day: 'Tue', price: 1870 },
  { day: 'Wed', price: 1920 },
  { day: 'Thu', price: 1900 },
  { day: 'Fri', price: 1950 },
  { day: 'Sat', price: 2000 },
  { day: 'Sun', price: 2050 },
];

const mandis = [
  { name: 'Ludhiana Mandi', price: 2050, distance: 12, transport: 300, profit: 1750, recommended: true },
  { name: 'Amritsar Mandi', price: 2000, distance: 45, transport: 800, profit: 1200, recommended: false },
  { name: 'Jalandhar Mandi', price: 1950, distance: 25, transport: 500, profit: 1450, recommended: false },
];

const alerts = [
  { id: 1, type: 'price', message: 'priceIncreased', icon: TrendingUp, color: 'green' },
  { id: 2, type: 'timing', message: 'bestDay', icon: Clock, color: 'yellow' },
  { id: 3, type: 'demand', message: 'demandSurge', icon: AlertCircle, color: 'blue' },
];

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const crop = searchParams.get('crop') || 'wheat';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-b-3xl shadow-lg mb-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold mb-1" data-speak={t('dashboard')}>
            {t('dashboard')}
          </h1>
          <p className="text-green-100 text-lg" data-speak={t(crop)}>
            {t(crop)}
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 space-y-4">
        {/* Real-Time Prices */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-800" data-speak={t('realTimePrices')}>
              {t('realTimePrices')}
            </h2>
          </div>

          <div className="space-y-3">
            {mandis.map((mandi, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl border-2 ${
                  index === 0 ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800" data-speak={mandi.name}>
                      {mandi.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span data-speak={`${mandi.distance} ${t('km')}`}>
                        {mandi.distance} {t('km')}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600" data-speak={`₹${mandi.price} ${t('perQuintal')}`}>
                      ₹{mandi.price}
                    </div>
                    <div className="text-xs text-gray-500">{t('perQuintal')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span data-speak={`${t('updated')} 15 ${t('minutesAgo')}`}>
                    {t('updated')} 15 {t('minutesAgo')}
                  </span>
                </div>
                {index === 0 && (
                  <div className="mt-2 flex items-center gap-1">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {t('high')}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 7-Day Price Prediction */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-800" data-speak={t('pricePrediction')}>
              {t('pricePrediction')}
            </h2>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="day" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #22c55e',
                  borderRadius: '12px' 
                }}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#22c55e" 
                strokeWidth={3}
                dot={{ fill: '#22c55e', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-800" data-speak={t('priceIncrease')}>
                {t('priceIncrease')}
              </span>
            </div>
            <p className="text-gray-700 font-semibold" data-speak={t('waitDays')}>
              💡 {t('waitDays')}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {t('bestDate')}: <span className="font-bold">18 Feb 2026</span>
            </p>
          </div>
        </div>

        {/* Best Mandi by Profit */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-800" data-speak={t('bestMandi')}>
              {t('bestMandi')}
            </h2>
          </div>

          <div className="space-y-3">
            {mandis.map((mandi, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl ${
                  mandi.recommended 
                    ? 'bg-gradient-to-r from-yellow-50 to-green-50 border-2 border-green-500' 
                    : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800" data-speak={mandi.name}>
                    {mandi.name}
                  </h3>
                  {mandi.recommended && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {t('recommended')}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-500">{t('price')}</div>
                    <div className="font-bold text-gray-800">₹{mandi.price}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">{t('transportCost')}</div>
                    <div className="font-bold text-red-600">-₹{mandi.transport}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">{t('netProfit')}</div>
                    <div className="font-bold text-green-600">₹{mandi.profit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-bold text-gray-800" data-speak={t('alerts')}>
              {t('alerts')}
            </h2>
          </div>

          <div className="space-y-2">
            {alerts.map((alert) => {
              const Icon = alert.icon;
              return (
                <div 
                  key={alert.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                >
                  <div className={`p-2 rounded-full bg-${alert.color}-100`}>
                    <Icon className={`w-5 h-5 text-${alert.color}-600`} />
                  </div>
                  <p className="flex-1 font-semibold text-gray-700" data-speak={t(alert.message)}>
                    {t(alert.message)}
                  </p>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Profit Calculator Button */}
        <button
          onClick={() => navigate('/profit-calculator')}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 px-6 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-3"
          data-speak={t('checkProfit')}
        >
          <Calculator className="w-6 h-6" />
          {t('checkProfit')}
        </button>
      </div>

      <BottomNav />
      <VoiceAssistant pageContent={`${t('dashboard')} for ${t(crop)}. ${t('realTimePrices')}, ${t('pricePrediction')}, ${t('bestMandi')}, ${t('alerts')}`} />
    </div>
  );
};
