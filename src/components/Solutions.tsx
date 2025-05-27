import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, imageUrl, features }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="w-full lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-70"></div>
      </div>
      <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="mt-auto inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Destination Marketing",
      description: "Enhance how destinations are presented with AI-optimized content that drives visitor engagement.",
      imageUrl: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "AI-generated destination descriptions optimized for conversion",
        "Automated content localization for global markets",
        "Seasonal content updates based on travel trends",
        "Visual content enhancement with AI image processing"
      ]
    },
    {
      title: "Tour Operators",
      description: "Streamline tour package content creation and distribution across multiple channels.",
      imageUrl: "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Automated tour package descriptions and itineraries",
        "Dynamic pricing information integration",
        "Multi-channel content distribution",
        "Customer review integration and sentiment analysis"
      ]
    },
    {
      title: "Hospitality Brands",
      description: "Create compelling property descriptions and amenity content that increases bookings.",
      imageUrl: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Property descriptions with emotional appeal",
        "Amenity highlights based on customer preferences",
        "Local attraction content integration",
        "Seasonal promotion content generation"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored Solutions for Tourism Sectors
          </h2>
          <p className="text-lg text-gray-600">
            Our platform adapts to the specific needs of different tourism industry segments
          </p>
        </div>

        <div className="space-y-10">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              imageUrl={solution.imageUrl}
              features={solution.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;