import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { VoiceAssistant } from '../components/VoiceAssistant';
import { Sprout } from 'lucide-react';

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t, setLanguage, language } = useLanguage();


  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setTimeout(() => navigate('/login'), 300);
  };

  const pageVoiceContent = {
  en: "Welcome to Kisan Mitra. Choose your language to continue.",
  hi: "किसान मित्र में आपका स्वागत है। आगे बढ़ने के लिए अपनी भाषा चुनें।",
  pa: "ਕਿਸਾਨ ਮਿੱਤਰ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ। ਅੱਗੇ ਵਧਣ ਲਈ ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ।",
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* App Logo and Name */}
        <div className="text-center mb-8">
          <div className="bg-green-600 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Sprout className="w-12 h-12 text-white" />
          </div>
          <h1
  className="text-4xl font-bold text-green-800 mb-2"
  data-speak={t('appName')}
>
  {t('appName')}
</h1>

<p
  className="text-gray-600"
  data-speak={t('appName')}
>
  {t('appName')}
</p>

        </div>

        {/* Farmer Illustration */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="text-6xl text-center mb-4">🧑‍🌾</div>
          <h2
  className="text-2xl font-bold text-center text-gray-800 mb-6"
  data-speak={t('chooseLanguage')}
>
  {t('chooseLanguage')}
</h2>


          {/* Language Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => handleLanguageSelect('en')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-3"
              data-speak={t('english')}

            >
              <span className="text-2xl">🇬🇧</span>
              <span>English</span>
            </button>

            <button
              onClick={() => handleLanguageSelect('hi')}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-3"
              data-speak={t('hindi')}

            >
              <span className="text-2xl">🇮🇳</span>
              <span>हिंदी (Hindi)</span>
            </button>

            <button
              onClick={() => handleLanguageSelect('pa')}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-3"
              data-speak={t('punjabi')}

            >
              <span className="text-2xl">🇮🇳</span>
              <span>ਪੰਜਾਬੀ (Punjabi)</span>
            </button>
          </div>
        </div>

        <p
  className="text-center text-sm text-gray-500"
  data-speak={t('tapToRead')}
>
  {t('tapToRead')}
</p>

      </div>
      

<VoiceAssistant pageContent={pageVoiceContent[language]} />
    </div>
  );
};
