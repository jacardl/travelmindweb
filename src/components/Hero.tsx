import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-accent-400/30">
              <Sparkles className="w-4 h-4 text-accent-400 mr-2" />
              <span className="text-sm text-white/90">Revolutionizing Tourism Content</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered Tourism
              <span className="bg-gradient-to-r from-accent-400 via-primary-400 to-secondary-400 bg-clip-text text-transparent"> Content Platform</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Transform your tourism content with AI. Create engaging, personalized experiences that drive conversions and delight travelers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-full font-medium hover:from-accent-600 hover:to-primary-600 transition-colors group shadow-lg shadow-accent-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#features"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <p className="text-sm text-gray-400 mb-4">Trusted by leading tourism companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 opacity-50 hover:opacity-100 transition-opacity">
                  <img
                    src={`https://images.pexels.com/photos/11309513/pexels-photo-11309513.jpeg?auto=compress&cs=tinysrgb&w=100`}
                    alt={`Partner ${i}`}
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;