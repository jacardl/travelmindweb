import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import KeywordPage from './pages/KeywordPage';
import SEOKeywords from './components/sections/SEOKeywords';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <FAQ />
              <SEOKeywords />
            </>
          } />
          <Route path="/travel/:slug" element={<KeywordPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;