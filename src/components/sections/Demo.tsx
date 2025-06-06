import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, Zap, Star } from 'lucide-react';
import { FaApple } from 'react-icons/fa';

const Demo: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    window.open('https://github.com/jacardl/travelmind2.0/releases/download/travelmind/Travelmind.ai-1.0.0-alpha.11-arm64.dmg', '_blank');
  };

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Native Performance",
      description: "Optimized for macOS, providing a smooth user experience"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Notarized by Apple, ensuring application security"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Offline Usage",
      description: "Supports offline mode, create content anytime, anywhere"
    }
  ];

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
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-2xl mb-6">
                  <FaApple className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">TravelMind AI</h3>
                <p className="text-gray-300 mb-6">Version 1.0.0 • For macOS 12.0 or higher</p>
                
                <motion.button
                  onClick={handleDownload}
                  disabled={downloading}
                  className={`inline-flex items-center px-8 py-4 ${downloading ? 'bg-gray-600' : 'bg-primary-600 hover:bg-primary-700'} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: downloading ? 1 : 1.05 }}
                  whileTap={{ scale: downloading ? 1 : 0.95 }}
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
                      Download macOS for Free
                    </>
                  )}
                </motion.button>
                
                <p className="text-sm text-gray-400 mt-4">
                  File size: approx. 85 MB • Supports Intel and Apple Silicon
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600/20 text-primary-400 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-gray-800 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <FaApple className="h-5 w-5 mr-2 text-primary-400" />
              System Requirements
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p className="mb-2"><strong>Operating System:</strong> macOS 12.0 (Monterey) or higher</p>
                <p className="mb-2"><strong>Processor:</strong> Intel Core i5 or Apple M1 and higher</p>
              </div>
              <div>
                <p className="mb-2"><strong>Memory:</strong> 8 GB RAM (16 GB recommended)</p>
                <p className="mb-2"><strong>Storage:</strong> At least 200 MB available space</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-gray-400 text-sm">
              By downloading, you agree to our 
              <a href="/terms" className="text-primary-400 hover:text-primary-300 underline mx-1">Terms of Service</a> 
              and 
              <a href="/privacy" className="text-primary-400 hover:text-primary-300 underline mx-1">Privacy Policy</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;