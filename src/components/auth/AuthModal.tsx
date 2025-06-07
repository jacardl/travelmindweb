import React, { useState } from 'react';
import { X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GoogleLogin from './GoogleLogin';
import { useAuth } from '../../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultTab = 'login' }) => {
  const { login } = useAuth();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 max-w-sm w-full mx-4 shadow-xl border border-gray-100"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - Apple style */}
            <div className="flex justify-end mb-6">
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>

            {/* Logo area - Minimal design */}
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-4">
                <Globe className="h-8 w-8 text-gray-800" />
                <span className="ml-2 text-xl font-semibold text-gray-900 tracking-tight">
                  TravelMind AI
                </span>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                Welcome Back
              </p>
            </div>

            {/* Google login button - Highlighted */}
            <div className="mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <GoogleLogin
                  onSuccess={() => onClose()}
                  onError={(error) => console.error('Google login failed:', error)}
                />
              </motion.div>
            </div>

            {/* Privacy policy - Apple style */}
            <div className="text-center">
              <p className="text-xs text-gray-400 leading-relaxed">
                By continuing, you agree to our{' '}
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;