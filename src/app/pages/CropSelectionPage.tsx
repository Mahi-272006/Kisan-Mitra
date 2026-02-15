import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { VoiceAssistant } from '../components/VoiceAssistant';
import { Search, Wheat, Sprout } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const crops = [
  { 
    id: 'wheat', 
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1626349351768-94a510988af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGNyb3AlMjBmaWVsZHxlbnwxfHx8fDE3NzExNDk3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'rice', 
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1655903724829-37b3cd3d4ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGFkZHklMjBmaWVsZHxlbnwxfHx8fDE3NzEwNzUwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'maize', 
    icon: '🌽',
    image: 'https://images.unsplash.com/photo-1760752639356-1bfc55d5c0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwbWFpemUlMjBjcm9wfGVufDF8fHx8MTc3MTE0OTc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'potato', 
    icon: '🥔',
    image: 'https://images.unsplash.com/photo-1609161307645-3ad8d7cafb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBoYXJ2ZXN0fGVufDF8fHx8MTc3MTA3OTAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'onion', 
    icon: '🧅',
    image: 'https://images.unsplash.com/photo-1612679300857-0b7600449e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmlvbiUyMHZlZ2V0YWJsZXxlbnwxfHx8fDE3NzExNDk3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'tomato', 
    icon: '🍅',
    image: 'https://images.unsplash.com/photo-1621332606136-7e66f02dade1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjByZWQlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzcxMTQ5NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'cotton', 
    icon: '☁️',
    image: 'https://images.unsplash.com/photo-1761069183787-0272d2739ae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBjcm9wJTIwd2hpdGV8ZW58MXx8fHwxNzcxMTQ5NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'sugarcane', 
    icon: '🎋',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400'
  },
];

export const CropSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const handleCropSelect = (cropId: string) => {
    navigate(`/dashboard?crop=${cropId}`);
  };

  const filteredCrops = crops.filter(crop => 
    t(crop.id).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Sprout className="w-8 h-8" />
            <h1 className="text-2xl font-bold" data-speak={t('selectCrop')}>
              {t('selectCrop')}
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchCrop')}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
      </div>

      {/* Crop Grid */}
      <div className="max-w-lg mx-auto px-4 mt-6">
        <div className="grid grid-cols-2 gap-4">
          {filteredCrops.map((crop) => (
            <button
              key={crop.id}
              onClick={() => handleCropSelect(crop.id)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden active:scale-95 transition-transform"
              data-speak={t(crop.id)}
            >
              <div className="relative h-32 bg-gradient-to-br from-green-100 to-yellow-100">
                <ImageWithFallback
                  src={crop.image}
                  alt={t(crop.id)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-4xl mb-1">{crop.icon}</div>
                </div>
              </div>
              <div className="p-3">
                <p className="font-bold text-gray-800 text-lg">{t(crop.id)}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <VoiceAssistant pageContent={`${t('selectCrop')}. Available crops: ${crops.map(c => t(c.id)).join(', ')}`} />
    </div>
  );
};
