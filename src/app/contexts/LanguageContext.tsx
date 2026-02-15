import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'pa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Welcome Page
    appName: "Kisan Mitra",
    chooseLanguage: "Choose Your Language",
    english: "English",
    hindi: "हिंदी",
    punjabi: "ਪੰਜਾਬੀ",
    continue: "Continue",
    
    // Login/Signup
    login: "Login",
    signup: "Sign Up",
    mobileNumber: "Mobile Number",
    enterMobile: "Enter your mobile number",
    enterOTP: "Enter OTP",
    sendOTP: "Send OTP",
    verify: "Verify",
    name: "Name",
    enterName: "Enter your name",
    village: "Village / District",
    enterVillage: "Enter village or district",
    preferredLanguage: "Preferred Language",
    register: "Register",
    alreadyAccount: "Already have an account?",
    noAccount: "Don't have an account?",
    
    // Crop Selection
    selectCrop: "Select Your Crop",
    searchCrop: "Search crop...",
    wheat: "Wheat",
    rice: "Rice",
    maize: "Maize",
    potato: "Potato",
    onion: "Onion",
    tomato: "Tomato",
    cotton: "Cotton",
    sugarcane: "Sugarcane",
    
    // Dashboard
    dashboard: "Dashboard",
    realTimePrices: "Real-Time Prices",
    pricePrediction: "7-Day Price Prediction",
    bestMandi: "Best Mandi (Profit)",
    alerts: "Alerts & Notifications",
    checkProfit: "Check My Profit",
    perQuintal: "per quintal",
    km: "km",
    updated: "Updated",
    minutesAgo: "minutes ago",
    high: "High",
    medium: "Medium",
    low: "Low",
    
    // Price Prediction
    sellToday: "Sell Today",
    waitDays: "Wait 3-4 Days",
    bestDate: "Best Selling Date",
    priceIncrease: "Price may increase",
    priceDecrease: "Price may decrease",
    
    // Mandi Comparison
    mandi: "Mandi",
    price: "Price",
    distance: "Distance",
    transportCost: "Transport",
    netProfit: "Net Profit",
    recommended: "Recommended",
    
    // Alerts
    priceAlert: "Price Alert",
    priceIncreased: "Price increased by ₹50!",
    bestDay: "Best day to sell is tomorrow",
    demandSurge: "High demand in nearby mandi",
    
    // Profit Calculator
    profitCalculator: "Profit Calculator",
    quantity: "Crop Quantity (Quintal)",
    enterQuantity: "Enter quantity",
    transport: "Transport Cost (₹)",
    enterTransport: "Enter transport cost",
    labor: "Labor Cost (₹)",
    enterLabor: "Enter labor cost",
    otherExpenses: "Other Expenses (₹)",
    enterOther: "Enter other expenses",
    calculate: "Calculate Profit",
    totalRevenue: "Total Revenue",
    totalExpenses: "Total Expenses",
    netEarning: "Net Earning",
    bestMandiProfit: "Best Mandi for Maximum Profit",
    
    // Bottom Nav
    home: "Home",
    prices: "Prices",
    profile: "Profile",
    
    // Voice
    voiceAssistant: "Voice Assistant",
    tapToRead: "Tap any text to read",
    readPage: "Read Full Page",
    listening: "Listening...",
    speaking: "Speaking...",
    
    // Profile
    myProfile: "My Profile",
    editProfile: "Edit Profile",
    logout: "Logout",
    language: "Language",
    notifications: "Notifications",
    settings: "Settings",
  },
  hi: {
    // Welcome Page
    appName: "किसान मित्र",
    chooseLanguage: "अपनी भाषा चुनें",
    english: "English",
    hindi: "हिंदी",
    punjabi: "ਪੰਜਾਬੀ",
    continue: "जारी रखें",
    
    // Login/Signup
    login: "लॉगिन",
    signup: "साइन अप",
    mobileNumber: "मोबाइल नंबर",
    enterMobile: "अपना मोबाइल नंबर दर्ज करें",
    enterOTP: "OTP दर्ज करें",
    sendOTP: "OTP भेजें",
    verify: "सत्यापित करें",
    name: "नाम",
    enterName: "अपना नाम दर्ज करें",
    village: "गाँव / जिला",
    enterVillage: "गाँव या जिला दर्ज करें",
    preferredLanguage: "पसंदीदा भाषा",
    register: "रजिस्टर करें",
    alreadyAccount: "पहले से खाता है?",
    noAccount: "खाता नहीं है?",
    
    // Crop Selection
    selectCrop: "अपनी फसल चुनें",
    searchCrop: "फसल खोजें...",
    wheat: "गेहूं",
    rice: "चावल",
    maize: "मक्का",
    potato: "आलू",
    onion: "प्याज",
    tomato: "टमाटर",
    cotton: "कपास",
    sugarcane: "गन्ना",
    
    // Dashboard
    dashboard: "डैशबोर्ड",
    realTimePrices: "वर्तमान भाव",
    pricePrediction: "7-दिन भाव अनुमान",
    bestMandi: "सर्वोत्तम मंडी (लाभ)",
    alerts: "अलर्ट और सूचनाएं",
    checkProfit: "मेरा लाभ देखें",
    perQuintal: "प्रति क्विंटल",
    km: "किमी",
    updated: "अपडेट",
    minutesAgo: "मिनट पहले",
    high: "उच्च",
    medium: "मध्यम",
    low: "निम्न",
    
    // Price Prediction
    sellToday: "आज बेचें",
    waitDays: "3-4 दिन प्रतीक्षा करें",
    bestDate: "सर्वोत्तम बिक्री तिथि",
    priceIncrease: "भाव बढ़ सकता है",
    priceDecrease: "भाव घट सकता है",
    
    // Mandi Comparison
    mandi: "मंडी",
    price: "भाव",
    distance: "दूरी",
    transportCost: "परिवहन",
    netProfit: "शुद्ध लाभ",
    recommended: "अनुशंसित",
    
    // Alerts
    priceAlert: "भाव अलर्ट",
    priceIncreased: "भाव ₹50 बढ़ गया!",
    bestDay: "कल बेचने का सबसे अच्छा दिन है",
    demandSurge: "नजदीकी मंडी में उच्च मांग",
    
    // Profit Calculator
    profitCalculator: "लाभ कैलकुलेटर",
    quantity: "फसल मात्रा (क्विंटल)",
    enterQuantity: "मात्रा दर्ज करें",
    transport: "परिवहन लागत (₹)",
    enterTransport: "परिवहन लागत दर्ज करें",
    labor: "मजदूरी लागत (₹)",
    enterLabor: "मजदूरी लागत दर्ज करें",
    otherExpenses: "अन्य खर्चे (₹)",
    enterOther: "अन्य खर्चे दर्ज करें",
    calculate: "लाभ गणना करें",
    totalRevenue: "कुल आय",
    totalExpenses: "कुल खर्च",
    netEarning: "शुद्ध कमाई",
    bestMandiProfit: "अधिकतम लाभ के लिए सर्वोत्तम मंडी",
    
    // Bottom Nav
    home: "होम",
    prices: "भाव",
    profile: "प्रोफाइल",
    
    // Voice
    voiceAssistant: "आवाज सहायक",
    tapToRead: "पढ़ने के लिए टैप करें",
    readPage: "पूरा पेज पढ़ें",
    listening: "सुन रहा हूं...",
    speaking: "बोल रहा हूं...",
    
    // Profile
    myProfile: "मेरी प्रोफाइल",
    editProfile: "प्रोफाइल संपादित करें",
    logout: "लॉगआउट",
    language: "भाषा",
    notifications: "सूचनाएं",
    settings: "सेटिंग्स",
  },
  pa: {
    // Welcome Page
    appName: "ਕਿਸਾਨ ਮਿੱਤਰ",
    chooseLanguage: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
    english: "English",
    hindi: "हिंदी",
    punjabi: "ਪੰਜਾਬੀ",
    continue: "ਜਾਰੀ ਰੱਖੋ",
    
    // Login/Signup
    login: "ਲਾਗਿਨ",
    signup: "ਸਾਈਨ ਅੱਪ",
    mobileNumber: "ਮੋਬਾਈਲ ਨੰਬਰ",
    enterMobile: "ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ",
    enterOTP: "OTP ਦਰਜ ਕਰੋ",
    sendOTP: "OTP ਭੇਜੋ",
    verify: "ਪੁਸ਼ਟੀ ਕਰੋ",
    name: "ਨਾਮ",
    enterName: "ਆਪਣਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    village: "ਪਿੰਡ / ਜਿਲ੍ਹਾ",
    enterVillage: "ਪਿੰਡ ਜਾਂ ਜਿਲ੍ਹਾ ਦਰਜ ਕਰੋ",
    preferredLanguage: "ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ",
    register: "ਰਜਿਸਟਰ ਕਰੋ",
    alreadyAccount: "ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਹੈ?",
    noAccount: "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
    
    // Crop Selection
    selectCrop: "ਆਪਣੀ ਫਸਲ ਚੁਣੋ",
    searchCrop: "ਫਸਲ ਖੋਜੋ...",
    wheat: "ਕਣਕ",
    rice: "ਚਾਵਲ",
    maize: "ਮੱਕੀ",
    potato: "ਆਲੂ",
    onion: "ਪਿਆਜ਼",
    tomato: "ਟਮਾਟਰ",
    cotton: "ਕਪਾਹ",
    sugarcane: "ਗੰਨਾ",
    
    // Dashboard
    dashboard: "ਡੈਸ਼ਬੋਰਡ",
    realTimePrices: "ਮੌਜੂਦਾ ਭਾਅ",
    pricePrediction: "7-ਦਿਨ ਭਾਅ ਅਨੁਮਾਨ",
    bestMandi: "ਸਰਵੋਤਮ ਮੰਡੀ (ਲਾਭ)",
    alerts: "ਅਲਰਟ ਅਤੇ ਸੂਚਨਾਵਾਂ",
    checkProfit: "ਮੇਰਾ ਲਾਭ ਦੇਖੋ",
    perQuintal: "ਪ੍ਰਤੀ ਕੁਇੰਟਲ",
    km: "ਕਿਲੋਮੀਟਰ",
    updated: "ਅੱਪਡੇਟ",
    minutesAgo: "ਮਿੰਟ ਪਹਿਲਾਂ",
    high: "ਉੱਚ",
    medium: "ਮੱਧਮ",
    low: "ਘੱਟ",
    
    // Price Prediction
    sellToday: "ਅੱਜ ਵੇਚੋ",
    waitDays: "3-4 ਦਿਨ ਉਡੀਕ ਕਰੋ",
    bestDate: "ਸਰਵੋਤਮ ਵਿਕਰੀ ਮਿਤੀ",
    priceIncrease: "ਭਾਅ ਵੱਧ ਸਕਦਾ ਹੈ",
    priceDecrease: "ਭਾਅ ਘੱਟ ਸਕਦਾ ਹੈ",
    
    // Mandi Comparison
    mandi: "ਮੰਡੀ",
    price: "ਭਾਅ",
    distance: "ਦੂਰੀ",
    transportCost: "ਆਵਾਜਾਈ",
    netProfit: "ਸ਼ੁੱਧ ਲਾਭ",
    recommended: "ਸਿਫਾਰਿਸ਼",
    
    // Alerts
    priceAlert: "ਭਾਅ ਅਲਰਟ",
    priceIncreased: "ਭਾਅ ₹50 ਵੱਧ ਗਿਆ!",
    bestDay: "ਕੱਲ੍ਹ ਵੇਚਣ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਦਿਨ ਹੈ",
    demandSurge: "ਨੇੜਲੀ ਮੰਡੀ ਵਿੱਚ ਉੱਚ ਮੰਗ",
    
    // Profit Calculator
    profitCalculator: "ਲਾਭ ਕੈਲਕੁਲੇਟਰ",
    quantity: "ਫਸਲ ਮਾਤਰਾ (ਕੁਇੰਟਲ)",
    enterQuantity: "ਮਾਤਰਾ ਦਰਜ ਕਰੋ",
    transport: "ਆਵਾਜਾਈ ਲਾਗਤ (₹)",
    enterTransport: "ਆਵਾਜਾਈ ਲਾਗਤ ਦਰਜ ਕਰੋ",
    labor: "ਮਜ਼ਦੂਰੀ ਲਾਗਤ (₹)",
    enterLabor: "ਮਜ਼ਦੂਰੀ ਲਾਗਤ ਦਰਜ ਕਰੋ",
    otherExpenses: "ਹੋਰ ਖਰਚੇ (₹)",
    enterOther: "ਹੋਰ ਖਰਚੇ ਦਰਜ ਕਰੋ",
    calculate: "ਲਾਭ ਗਣਨਾ ਕਰੋ",
    totalRevenue: "ਕੁੱਲ ਆਮਦਨ",
    totalExpenses: "ਕੁੱਲ ਖਰਚ",
    netEarning: "ਸ਼ੁੱਧ ਕਮਾਈ",
    bestMandiProfit: "ਵੱਧ ਤੋਂ ਵੱਧ ਲਾਭ ਲਈ ਸਰਵੋਤਮ ਮੰਡੀ",
    
    // Bottom Nav
    home: "ਹੋਮ",
    prices: "ਭਾਅ",
    profile: "ਪ੍ਰੋਫਾਈਲ",
    
    // Voice
    voiceAssistant: "ਆਵਾਜ਼ ਸਹਾਇਕ",
    tapToRead: "ਪੜ੍ਹਨ ਲਈ ਟੈਪ ਕਰੋ",
    readPage: "ਪੂਰਾ ਪੰਨਾ ਪੜ੍ਹੋ",
    listening: "ਸੁਣ ਰਿਹਾ ਹਾਂ...",
    speaking: "ਬੋਲ ਰਿਹਾ ਹਾਂ...",
    
    // Profile
    myProfile: "ਮੇਰਾ ਪ੍ਰੋਫਾਈਲ",
    editProfile: "ਪ੍ਰੋਫਾਈਲ ਸੰਪਾਦਿਤ ਕਰੋ",
    logout: "ਲਾਗਆਉਟ",
    language: "ਭਾਸ਼ਾ",
    notifications: "ਸੂਚਨਾਵਾਂ",
    settings: "ਸੈਟਿੰਗਜ਼",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
