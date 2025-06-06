import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Network, Container } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-accent-500/50 transition-all group shadow-xl shadow-accent-900/5 h-full"
    >
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-6 text-accent-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-400 transition-colors">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-gray-400">
            <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Creative Intent Recognition",
      description: "Leveraging deep learning technology to intelligently identify user creative needs and intentions, providing precise content creation suggestions and directional guidance.",
      features: [
        "Multi-modal intent understanding (text, image, voice)",
        "User behavior pattern analysis",
        "Automatic creative goal matching",
        "Personalized recommendation engine"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Global Trending Content Insights",
      description: "Real-time monitoring of global tourism hotspot trends, analyzing social media data and search behaviors to provide data-driven insights for content creation.",
      features: [
        "Real-time trending topic monitoring",
        "Social media sentiment analysis",
        "Search keyword trend analysis",
        "Competitor content performance tracking"
      ]
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Tourism Industry Knowledge Graph",
      description: "Building comprehensive tourism industry knowledge graphs, integrating multi-dimensional information including attractions, culture, history, and cuisine to provide rich knowledge support for content creation.",
      features: [
        "Multi-dimensional knowledge entity extraction",
        "Semantic relationship network construction",
        "Knowledge reasoning and completion",
        "Dynamic knowledge update mechanism"
      ]
    },
    {
      icon: <Container className="h-8 w-8" />,
      title: "Content Creation Cloud Container",
      description: "Providing elastic and scalable cloud-based creative environments, supporting multiple content format generation to ensure efficient and stable creative experiences.",
      features: [
        "Elastic computing resource scheduling",
        "Multi-format content generation (text, images, videos)",
        "Version control and collaboration",
        "API interfaces and third-party integrations"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Features
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            AI-powered tourism content creation platform providing comprehensive intelligent creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;