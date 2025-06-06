import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Solutions from '../components/sections/Solutions';
import Demo from '../components/sections/Demo';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

interface KeywordTitles {
  [key: string]: string;
}

const KeywordPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // 添加 useEffect 钩子，在组件挂载时自动滚动到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Customized titles for each keyword
  const keywordTitles: KeywordTitles = {
    'luxury-travel': 'TravelMind AI: Luxury Travel Content Generation Expert',
    'adventure-travel': 'TravelMind AI: Adventure Travel Content Creation Platform',
    'family-vacation': 'TravelMind AI: Family Vacation Content Generator',
    'beach-resorts': 'TravelMind AI: Beach Resort Content Smart Assistant',
    'cultural-tours': 'TravelMind AI: Cultural Tour Content Creation Tool',
    'bali-vacation': 'TravelMind AI: Bali Vacation Content Generation Solution',
    'europe-travel': 'TravelMind AI: Europe Travel Content Creation Platform',
    'japan-tourism': 'TravelMind AI: Japan Tourism Content Generator',
    'thailand-travel': 'TravelMind AI: Thailand Travel Content Assistant',
    'maldives-vacation': 'TravelMind AI: Maldives Vacation Content Creator',
    'new-york-tourism': 'TravelMind AI: New York Tourism Content Generation Tool',
    'paris-travel': 'TravelMind AI: Paris Travel Content Creation Solution',
    'rome-tourism': 'TravelMind AI: Rome Tourism Content Generator',
    'london-travel': 'TravelMind AI: London Travel Content Assistant',
    'dubai-vacation': 'TravelMind AI: Dubai Vacation Content Creation Platform',
    'australia-tourism': 'TravelMind AI: Australia Tourism Content Generator',
    'new-zealand-adventure': 'TravelMind AI: New Zealand Adventure Content Creator',
    'canada-travel': 'TravelMind AI: Canada Travel Content Generation Tool',
    'hawaii-vacation': 'TravelMind AI: Hawaii Vacation Content Assistant',
    'hiking-trips': 'TravelMind AI: Hiking Trips Content Creation Solution',
    'culinary-tours': 'TravelMind AI: Culinary Tours Content Generator',
    'wine-tours': 'TravelMind AI: Wine Tours Content Creation Platform',
    'honeymoon-destinations': 'TravelMind AI: Honeymoon Destinations Content Assistant',
    'ski-resorts': 'TravelMind AI: Ski Resorts Content Generation Tool',
    'cruise-vacations': 'TravelMind AI: Cruise Vacations Content Creator',
    'backpacking-trips': 'TravelMind AI: Backpacking Trips Content Solution',
    'eco-tourism': 'TravelMind AI: Eco Tourism Content Generation Platform',
    'historical-sites': 'TravelMind AI: Historical Sites Content Assistant',
    'national-parks': 'TravelMind AI: National Parks Content Creation Tool',
    'island-getaways': 'TravelMind AI: Island Getaways Content Generator',
    'city-breaks': 'TravelMind AI: City Breaks Content Creation Solution',
    'spa-retreats': 'TravelMind AI: Spa Retreats Content Assistant',
    'wildlife-safaris': 'TravelMind AI: Wildlife Safaris Content Platform',
    'photography-tours': 'TravelMind AI: Photography Tours Content Generator',
    'road-trips': 'TravelMind AI: Road Trips Content Creation Tool',
    'workation-destinations': 'TravelMind AI: Workation Destinations Content Assistant',
    'sustainable-travel': 'TravelMind AI: Sustainable Travel Content Solution',
    'luxury-hotels': 'TravelMind AI: Luxury Hotels Content Generation Platform',
    'unique-accommodations': 'TravelMind AI: Unique Accommodations Content Creator',
    'travel-planning': 'TravelMind AI: Travel Planning Content Assistant'
  };
  
  // Default title
  const defaultTitle = 'TravelMind AI: Intelligent Tourism Content Generation Platform';
  
  // Get the current keyword title, or use default if not found
  const pageTitle = slug && keywordTitles[slug] ? keywordTitles[slug] : defaultTitle;
  
  return (
    <>
      {/* Custom Hero component with keyword-related title */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Easily create professional, engaging travel content using AI technology to enhance your tourism marketing
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#demo"
                className="px-8 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
              >
                Try For Free
              </a>
              <a
                href="#features"
                className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reuse existing components */}
      <Features />
      <Solutions />
      <Demo />
      <Testimonials />
      <Contact />
    </>
  );
};

export default KeywordPage;