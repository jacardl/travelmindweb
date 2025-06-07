import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface DemoProps {
  onShowAuthModal?: () => void;
}

const Demo: React.FC<DemoProps> = ({ onShowAuthModal }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { isAuthenticated } = useAuth();

  const handleDownload = () => {
    if (isAuthenticated) {
      // 已登录，直接下载
      window.open('https://github.com/jacardl/travelmind2.0/releases/download/0.0.2/Travelmind.ai-beta.0.0.2-arm64.dmg', '_blank');
    } else {
      // 未登录，显示登录模态框
      if (onShowAuthModal) {
        onShowAuthModal();
      }
    }
  };

  return (
    <section id="demo" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Download TravelMind AI for macOS
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Experience the powerful AI travel content creation tool on your Mac
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 md:p-12 text-center relative">
              {/* 添加装饰性背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-lg">
                    <img 
                      src="/assets/images/icon.png" 
                      alt="TravelMind AI Logo" 
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">TravelMind AI</h3>
                  <p className="text-gray-400 mb-8 text-lg">Version 1.0.0 • For macOS 12.0 or higher</p>
                  
                  <motion.button
                    onClick={handleDownload}
                    disabled={downloading}
                    className={`inline-flex items-center px-10 py-5 ${downloading ? 'bg-gray-600' : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800'} text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-primary-500/20`}
                    whileHover={{ scale: downloading ? 1 : 1.05, y: -2 }}
                    whileTap={{ scale: downloading ? 1 : 0.98 }}
                  >
                    {downloading ? (
                      <>
                        <span className="mr-2">下载中 {progress}%</span>
                        <div className="w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary-400" 
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5 mr-3" />
                        {isAuthenticated ? 'Download macOS for Free' : 'Login to Download'}
                      </>
                    )}
                  </motion.button>
                  
                  <p className="text-sm text-gray-400 mt-4">
                    {isAuthenticated 
                      ? 'File size: approx. 85 MB • Supports Intel and Apple Silicon'
                      : 'Please login to download the application'
                    }
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;