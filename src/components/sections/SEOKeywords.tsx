import React from 'react';
import { Link } from 'react-router-dom';

const SEOKeywords: React.FC = () => {
  // 40 highly relevant tourism SEO keywords
  const keywords = [
    { text: 'Luxury Travel', slug: 'luxury-travel' },
    { text: 'Adventure Travel', slug: 'adventure-travel' },
    { text: 'Family Vacation', slug: 'family-vacation' },
    { text: 'Beach Resorts', slug: 'beach-resorts' },
    { text: 'Cultural Tours', slug: 'cultural-tours' },
    { text: 'Bali Vacation', slug: 'bali-vacation' },
    { text: 'Europe Travel', slug: 'europe-travel' },
    { text: 'Japan Tourism', slug: 'japan-tourism' },
    { text: 'Thailand Travel', slug: 'thailand-travel' },
    { text: 'Maldives Vacation', slug: 'maldives-vacation' },
    { text: 'New York Tourism', slug: 'new-york-tourism' },
    { text: 'Paris Travel', slug: 'paris-travel' },
    { text: 'Rome Tourism', slug: 'rome-tourism' },
    { text: 'London Travel', slug: 'london-travel' },
    { text: 'Dubai Vacation', slug: 'dubai-vacation' },
    { text: 'Australia Tourism', slug: 'australia-tourism' },
    { text: 'New Zealand Adventure', slug: 'new-zealand-adventure' },
    { text: 'Canada Travel', slug: 'canada-travel' },
    { text: 'Hawaii Vacation', slug: 'hawaii-vacation' },
    { text: 'Hiking Trips', slug: 'hiking-trips' },
    { text: 'Culinary Tours', slug: 'culinary-tours' },
    { text: 'Wine Tours', slug: 'wine-tours' },
    { text: 'Honeymoon Destinations', slug: 'honeymoon-destinations' },
    { text: 'Ski Resorts', slug: 'ski-resorts' },
    { text: 'Cruise Vacations', slug: 'cruise-vacations' },
    { text: 'Backpacking Trips', slug: 'backpacking-trips' },
    { text: 'Eco Tourism', slug: 'eco-tourism' },
    { text: 'Historical Sites', slug: 'historical-sites' },
    { text: 'National Parks', slug: 'national-parks' },
    { text: 'Island Getaways', slug: 'island-getaways' },
    { text: 'City Breaks', slug: 'city-breaks' },
    { text: 'Spa Retreats', slug: 'spa-retreats' },
    { text: 'Wildlife Safaris', slug: 'wildlife-safaris' },
    { text: 'Photography Tours', slug: 'photography-tours' },
    { text: 'Road Trips', slug: 'road-trips' },
    { text: 'Workation Destinations', slug: 'workation-destinations' },
    { text: 'Sustainable Travel', slug: 'sustainable-travel' },
    { text: 'Luxury Hotels', slug: 'luxury-hotels' },
    { text: 'Unique Accommodations', slug: 'unique-accommodations' },
    { text: 'Travel Planning', slug: 'travel-planning' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Popular Travel Destinations & Experiences</h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {keywords.map((keyword, index) => (
            <Link 
              key={index} 
              to={`/travel/${keyword.slug}`}
              className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 transition-colors"
            >
              {keyword.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOKeywords;