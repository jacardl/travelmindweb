import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Menu, X, Globe, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import AuthModal from '../auth/AuthModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const navItems = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Blog', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' }
  ];

  const handleEarlyAdopterClick = () => {
    if (isAuthenticated) {
      // 如果已登录，跳转到 demo 区域
      document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // 如果未登录，显示登录模态框
      setShowAuthModal(true);
    }
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/90 backdrop-blur-lg border-b border-accent-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <motion.div 
                className="flex items-center cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Globe className="h-8 w-8 text-accent-400" />
                <span className="ml-2 text-xl font-bold text-white">
                  TravelMind AI
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <User className="h-4 w-4" />
                    <span className="text-sm">Welcome, {user?.name}</span>
                  </div>
                  <motion.button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  onClick={handleEarlyAdopterClick}
                  className="bg-primary-500 text-white px-5 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Early Adopter
                </motion.button>
              )}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="md:hidden mt-4 bg-gray-800/95 backdrop-blur-lg rounded-2xl border border-white/10 p-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center space-x-2 text-gray-300 px-4 py-2">
                        <User className="h-4 w-4" />
                        <span className="text-sm">Welcome, {user?.name}</span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        handleEarlyAdopterClick();
                        setIsOpen(false);
                      }}
                      className="bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-600 text-center transition-colors"
                    >
                      Early Adopter
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      
      {/* 认证模态框 */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default Navbar;