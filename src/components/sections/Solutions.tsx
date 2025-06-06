import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Camera, Route, Users } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  index: number;
  icon: React.ReactNode;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, imageUrl, features, index, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-accent-500/50 transition-all group shadow-xl shadow-accent-900/5`}
    >
      <div className="w-full lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* 移除了这行蒙版代码: <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div> */}
        <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-accent-400">
          {icon}
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-400 transition-colors">{title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-400 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <motion.a 
          href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="mt-auto inline-flex items-center text-accent-400 font-medium hover:text-accent-300 transition-colors group/link"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "City Cultural Identity",
      description: "Create unique city cultural content through AI technology, showcasing historical heritage and modern charm to enhance city brand image and recognition.",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1260&h=750&fit=crop", // 城市地标
      icon: <MapPin className="h-6 w-6" />,
      features: [
        "Deep exploration and content generation of city history and culture",
        "Multi-language city introduction with automatic translation and localization",
        "Intelligent recommendation system for city attractions",
        "AI-optimized visual content processing for city image"
      ]
    },
    {
      title: "Destination Marketing",
      description: "Customize marketing content for tourist attractions, combining real-time data analysis to enhance attraction appeal and visitor conversion rates.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1260&h=750&fit=crop", // 山水风景
      icon: <Camera className="h-6 w-6" />,
      features: [
        "Intelligent extraction and packaging of attraction highlights",
        "Automatic seasonal marketing content updates",
        "Visitor review sentiment analysis and content optimization",
        "One-click multi-platform marketing content distribution"
      ]
    },
    {
      title: "Travel Route Planning",
      description: "Based on big data analysis and AI algorithms, intelligently design personalized travel routes, providing optimal itinerary planning and experience recommendations.",
      imageUrl: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1260&h=750&fit=crop", // 地图规划
      icon: <Route className="h-6 w-6" />,
      features: [
        "Intelligent planning of personalized travel routes",
        "Real-time traffic and weather information integration",
        "Budget optimization and cost control recommendations",
        "Automatic generation of detailed itinerary descriptions"
      ]
    },
    {
      title: "Travel Social Media Operations",
      description: "Provide AI-driven content creation tools for travel bloggers and content creators to enhance content quality and distribution effectiveness.",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1260&h=750&fit=crop", // 相机创作
      icon: <Users className="h-6 w-6" />,
      features: [
        "Intelligent recommendations for travel content creative inspiration",
        "Automatic editing and optimization of multimedia content",
        "Smart analysis of optimal social media posting times",
        "Fan interaction data analysis and strategy recommendations"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tourism Industry Solutions
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Professional AI content creation solutions for different tourism scenarios, empowering digital transformation in the tourism industry
          </p>
        </motion.div>

        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              imageUrl={solution.imageUrl}
              features={solution.features}
              index={index}
              icon={solution.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;