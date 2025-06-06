import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;