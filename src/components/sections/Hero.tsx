import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  // YouTube视频ID数组
  const youtubeVideos = [
    "7-wqj3Fd6AU", // 示例视频ID 1
    "WZby5BGTjEQ", // 示例视频ID 2
    "tDaDq67xkSA"  // 示例视频ID 3
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-md"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center min-h-[60vh]"
          >
            {/* 优化后的标题 - 调整字体大小和间距 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight text-center">
              <span className="block mb-1">AI-Powered Tourism</span>
              <span className="block bg-gradient-to-r from-accent-400 via-primary-400 to-secondary-400 bg-clip-text text-transparent">Content Platform</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your tourism content with AI. Create engaging, personalized experiences that drive conversions and delight travelers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-full font-medium hover:from-accent-600 hover:to-primary-600 transition-all duration-300 group shadow-lg shadow-accent-500/30 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                beta test
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg text-base"
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
            className="mt-12"
          >
            <p className="text-sm font-medium text-gray-300 mb-6 inline-block px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">Curated Travel Videos</p>
            
            {/* 优化后的视频展示区域 */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 w-full">
              {youtubeVideos.map((videoId, index) => (
                <div 
                  key={index} 
                  className="w-full max-w-sm lg:w-1/3 aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-accent-500/30 hover:scale-105 transition-all duration-300 border border-accent-500/20"
                >
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0&mute=1`}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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