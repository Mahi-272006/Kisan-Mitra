import React, { useState, useEffect } from 'react';
import { Mic, Volume2, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface VoiceAssistantProps {
  pageContent?: string;
}

export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ pageContent }) => {
  const { t, speechLang } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  

  const speak = (text: string) => {
  if (!('speechSynthesis' in window)) {
    alert('Voice not supported in this browser');
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = speechLang;
  utterance.rate = 0.9;
  utterance.pitch = 1;

  utterance.onstart = () => setIsSpeaking(true);
  utterance.onend = () => setIsSpeaking(false);
  utterance.onerror = () => setIsSpeaking(false);

  window.speechSynthesis.speak(utterance);
};


  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const readFullPage = () => {
    if (pageContent) {
      speak(pageContent);
    }
  };

  useEffect(() => {
    const handleTap = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.dataset.speak) {
        speak(target.dataset.speak);
      }
    };

    document.addEventListener('click', handleTap);
    return () => {
      document.removeEventListener('click', handleTap);
      stopSpeaking();
    };
  }, [speechLang]);


  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-20 right-4 z-50 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full p-4 shadow-lg active:scale-95 transition-transform"
        aria-label={t('voiceAssistant')}
      >
        {isSpeaking ? (
          <Volume2 className="w-6 h-6 animate-pulse" />
        ) : (
          <Mic className="w-6 h-6" />
        )}
      </button>

      {/* Expanded Panel */}
      {isExpanded && (
        <div className="fixed bottom-36 right-4 z-50 bg-white rounded-2xl shadow-2xl p-4 w-64 border-2 border-green-500">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Mic className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">{t('voiceAssistant')}</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-3">{t('tapToRead')}</p>

          {pageContent && (
            <button
              onClick={readFullPage}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <Volume2 className="w-4 h-4" />
              {t('readPage')}
            </button>
          )}

          {isSpeaking && (
            <button
              onClick={stopSpeaking}
              className="w-full bg-red-500 text-white py-2 rounded-xl font-semibold active:scale-95 transition-transform mt-2"
            >
              Stop
            </button>
          )}

          <div className="mt-3 text-xs text-center text-gray-500">
            {isSpeaking ? t('speaking') : ''}
          </div>
        </div>
      )}
    </>
  );
};
