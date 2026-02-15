import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { WelcomePage } from './pages/WelcomePage';
import { LoginPage } from './pages/LoginPage';
import { CropSelectionPage } from './pages/CropSelectionPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProfitCalculatorPage } from './pages/ProfitCalculatorPage';
import { ProfilePage } from './pages/ProfilePage';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="w-full min-h-screen">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/crop-selection" element={<CropSelectionPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profit-calculator" element={<ProfitCalculatorPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}
