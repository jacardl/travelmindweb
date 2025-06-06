import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Globe, Zap, Layers, Shield, Clock, Palette } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-accent-500/50 transition-all group shadow-xl shadow-accent-900/5"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4 text-accent-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent-400 transition-colors">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Content Creation",
      description: "Generate high-quality tourism content tailored to specific destinations, activities, and audiences."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Content Performance Analytics",
      description: "Track engagement, conversion rates, and ROI across all your tourism content."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Distribution Network",
      description: "Instantly publish and distribute content to thousands of tourism platforms worldwide."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Adaptation",
      description: "Automatically adjust content based on market trends, seasonal changes, and booking patterns."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Multi-format Support",
      description: "Create and manage content across text, images, videos, and interactive experiences."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Assurance",
      description: "Ensure all content meets regulatory requirements across different regions and markets."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Automated Scheduling",
      description: "Plan and schedule content distribution based on optimal timing for different markets."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Brand Consistency",
      description: "Maintain consistent brand voice and style across all tourism content and channels."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for Tourism Content
          </h2>
          <p className="text-xl text-gray-400">
            Our AI-driven platform offers everything you need to revolutionize your tourism content strategy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;