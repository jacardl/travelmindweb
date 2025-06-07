import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import KeywordPage from './pages/KeywordPage';
import SEOKeywords from './components/sections/SEOKeywords';
import AuthModal from './components/auth/AuthModal';
import { useAnalytics } from './hooks/useAnalytics';
import './styles/index.css';

const AppContent: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { setUserProperties } = useAnalytics();

  useEffect(() => {
    // 设置初始用户属性
    setUserProperties({
      app_version: '1.0.0',
      user_type: 'visitor'
    });
  }, [setUserProperties]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home onShowAuthModal={() => setShowAuthModal(true)} />
            <FAQ />
            <SEOKeywords />
          </>
        } />
        <Route path="/travel/:slug" element={<KeywordPage />} />
      </Routes>
      <Footer />
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;