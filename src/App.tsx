import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import KeywordPage from './pages/KeywordPage';
import SEOKeywords from './components/sections/SEOKeywords';
import AuthModal from './components/auth/AuthModal';
import './styles/index.css';

const App: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
          <Navbar onShowAuthModal={() => setShowAuthModal(true)} />
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
      </Router>
    </AuthProvider>
  );
};

export default App;