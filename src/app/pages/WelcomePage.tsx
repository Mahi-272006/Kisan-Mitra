import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { VoiceAssistant } from '../components/VoiceAssistant';
import { Sprout } from 'lucide-react';

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t, setLanguage } = useLanguage();

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setTimeout(() => navigate('/login'), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* App Logo and Name */}
        <div className="text-center mb-8">
          <div className="bg-green-600 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Sprout className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-green-800 mb-2" data-speak="Kisan Mitra">
            किसान मित्र
          </h1>
          <p className="text-gray-600" data-speak="Farmer's Friend">
            Farmer's Friend
          </p>
        </div>

        {/* Farmer Illustration */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="text-6xl text-center mb-4">🧑‍🌾</div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6" data-speak="Choose Your Language">
            Choose Your Language
          </h2>
          <p className="text-center text-gray-600 mb-2">अपनी भाषा चुनें</p>
          <p className="text-center text-gray-600 mb-6">ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ</p>

          {/* Language Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => handleLanguageSelect('en')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-3"
              data-speak="English"
            >
              <span className="text-2xl">🇬🇧</span>
              <span>English</span>
            </button>

            <button
              onClick={() => handleLanguageSelect('hi')}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-3"
              data-speak="Hindi"
            >
              <span className="text-2xl">🇮🇳</span>
              <span>हिंदी (Hindi)</span>
            </button>

            <button
              onClick={() => handleLanguageSelect('pa')}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-3"
              data-speak="Punjabi"
            >
              <span className="text-2xl">🇮🇳</span>
              <span>ਪੰਜਾਬੀ (Punjabi)</span>
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500">
          Tap the microphone button for voice assistance
        </p>
      </div>

      <VoiceAssistant pageContent="Welcome to Kisan Mitra. Choose your language. English, Hindi, or Punjabi." />
    </div>
  );
};
