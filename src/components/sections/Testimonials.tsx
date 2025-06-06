import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Global Destinations Inc.",
      quote: "TravelMind AI has transformed how we create content for our destinations. We've seen a 45% increase in engagement and a 30% boost in bookings since implementing the platform.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CEO",
      company: "Adventure Tours Co.",
      quote: "The ability to generate localized content for multiple markets automatically has saved us countless hours and significantly improved our conversion rates across different regions.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Chen",
      position: "Digital Strategy Lead",
      company: "Luxury Resorts Group",
      quote: "The AI-generated content perfectly captures the essence of our luxury properties. The platform's ability to maintain our brand voice while optimizing for conversions is impressive.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Tourism Bureau Director",
      company: "Barcelona City Tourism Office",
      quote: "TravelMind AI has revolutionized our city's digital presence. We can now create authentic, culturally nuanced content that resonates with visitors from around the world. Our tourism engagement metrics have increased by 60% year-over-year.",
      image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      id: 5,
      name: "Sophia Martinez",
      position: "Travel Influencer",
      company: "@wanderlust_sophia (2.4M followers)",
      quote: "As someone who creates travel content daily, TravelMind AI has been a game-changer. It helps me craft authentic stories about destinations while maintaining my unique voice. My engagement rate has grown by 35% and I've secured three major brand partnerships thanks to the quality of content.",
      image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Operations Director",
      company: "Grand Canyon National Park Visitor Center",
      quote: "TravelMind AI has transformed how we communicate with our 6 million annual visitors. We now deliver personalized content based on visitor interests, season, and even weather conditions. The platform has helped us increase visitor satisfaction scores by 28% and boost gift shop sales by 15%.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Discover how TravelMind AI is helping tourism businesses transform their content strategy
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].position}</p>
                  <p className="text-sm font-medium text-primary-600">{testimonials[activeIndex].company}</p>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <blockquote className="text-gray-700 text-lg italic relative">
                  <span className="absolute -top-2 -left-2 text-5xl text-primary-200">"</span>
                  <p className="relative z-10 pt-4">{testimonials[activeIndex].quote}</p>
                  <span className="absolute -bottom-6 -right-2 text-5xl text-primary-200">"</span>
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;