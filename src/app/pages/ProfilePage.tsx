import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { VoiceAssistant } from '../components/VoiceAssistant';
import { BottomNav } from '../components/BottomNav';
import { 
  User, 
  Phone, 
  MapPin, 
  Globe, 
  Bell, 
  Settings, 
  LogOut,
  ChevronRight 
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  const handleLogout = () => {
    navigate('/');
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-b-3xl shadow-lg mb-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <User className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-1" data-speak="Rajesh Kumar">
            Rajesh Kumar
          </h1>
          <p className="text-green-100">+91 98765 43210</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 space-y-4">
        {/* Profile Info */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-4" data-speak={t('myProfile')}>
            {t('myProfile')}
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <Phone className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <div className="text-sm text-gray-500">{t('mobileNumber')}</div>
                <div className="font-semibold text-gray-800">+91 98765 43210</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <MapPin className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <div className="text-sm text-gray-500">{t('village')}</div>
                <div className="font-semibold text-gray-800">Ludhiana, Punjab</div>
              </div>
            </div>
          </div>
        </div>

        {/* Language Settings */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-4" data-speak={t('language')}>
            {t('language')}
          </h2>
          
          <div className="space-y-2">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                language === 'en'
                  ? 'bg-gradient-to-r from-green-50 to-yellow-50 border-2 border-green-500'
                  : 'bg-gray-50 border-2 border-transparent'
              }`}
              data-speak="English"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇬🇧</span>
                <span className="font-semibold text-gray-800">English</span>
              </div>
              {language === 'en' && (
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </button>

            <button
              onClick={() => handleLanguageChange('hi')}
              className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                language === 'hi'
                  ? 'bg-gradient-to-r from-green-50 to-yellow-50 border-2 border-green-500'
                  : 'bg-gray-50 border-2 border-transparent'
              }`}
              data-speak="Hindi"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇮🇳</span>
                <span className="font-semibold text-gray-800">हिंदी (Hindi)</span>
              </div>
              {language === 'hi' && (
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </button>

            <button
              onClick={() => handleLanguageChange('pa')}
              className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                language === 'pa'
                  ? 'bg-gradient-to-r from-green-50 to-yellow-50 border-2 border-green-500'
                  : 'bg-gray-50 border-2 border-transparent'
              }`}
              data-speak="Punjabi"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇮🇳</span>
                <span className="font-semibold text-gray-800">ਪੰਜਾਬੀ (Punjabi)</span>
              </div>
              {language === 'pa' && (
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-4" data-speak={t('settings')}>
            {t('settings')}
          </h2>
          
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-800" data-speak={t('notifications')}>
                  {t('notifications')}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-800" data-speak={t('settings')}>
                  {t('settings')}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-3"
          data-speak={t('logout')}
        >
          <LogOut className="w-5 h-5" />
          {t('logout')}
        </button>
      </div>

      <BottomNav />
      <VoiceAssistant pageContent={`${t('myProfile')}. ${t('language')}, ${t('settings')}`} />
    </div>
  );
};
