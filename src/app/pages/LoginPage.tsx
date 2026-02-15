import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { VoiceAssistant } from '../components/VoiceAssistant';
import { Phone, Lock, Sprout } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isSignup, setIsSignup] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [name, setName] = useState('');
  const [village, setVillage] = useState('');

  const handleSendOTP = () => {
    if (mobile.length === 10) {
      setOtpSent(true);
    }
  };

  const handleLogin = () => {
    if (otp.length === 4) {
      navigate('/crop-selection');
    }
  };

  const handleSignup = () => {
    if (name && mobile.length === 10 && village) {
      navigate('/crop-selection');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="bg-green-600 w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
            <Sprout className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-green-800" data-speak={t('appName')}>
            {t('appName')}
          </h1>
        </div>

        {/* Login/Signup Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                !isSignup
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600'
              }`}
              data-speak={t('login')}
            >
              {t('login')}
            </button>
            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                isSignup
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600'
              }`}
              data-speak={t('signup')}
            >
              {t('signup')}
            </button>
          </div>

          {!isSignup ? (
            /* Login Form */
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" data-speak={t('mobileNumber')}>
                  {t('mobileNumber')}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    placeholder={t('enterMobile')}
                    className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                  />
                </div>
              </div>

              {otpSent && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" data-speak={t('enterOTP')}>
                    {t('enterOTP')}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      maxLength={4}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="0000"
                      className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg tracking-widest"
                    />
                  </div>
                </div>
              )}

              {!otpSent ? (
                <button
                  onClick={handleSendOTP}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
                  data-speak={t('sendOTP')}
                >
                  {t('sendOTP')}
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
                  data-speak={t('verify')}
                >
                  {t('verify')}
                </button>
              )}
            </div>
          ) : (
            /* Signup Form */
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" data-speak={t('name')}>
                  {t('name')}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('enterName')}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" data-speak={t('mobileNumber')}>
                  {t('mobileNumber')}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    placeholder={t('enterMobile')}
                    className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" data-speak={t('village')}>
                  {t('village')}
                </label>
                <input
                  type="text"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  placeholder={t('enterVillage')}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                />
              </div>

              <button
                onClick={handleSignup}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
                data-speak={t('register')}
              >
                {t('register')}
              </button>
            </div>
          )}
        </div>
      </div>

      <VoiceAssistant pageContent={`${t('login')} or ${t('signup')} page`} />
    </div>
  );
};
