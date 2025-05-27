import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  billing: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      description: "Perfect for small tourism businesses getting started with AI content",
      price: annual ? "$99" : "$129",
      billing: annual ? "per month, billed annually" : "per month, billed monthly",
      features: [
        "AI-generated content for up to 5 destinations",
        "Basic analytics dashboard",
        "Standard content templates",
        "Email support",
        "Content distribution to 3 channels"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Ideal for growing tourism businesses with multiple content needs",
      price: annual ? "$249" : "$299",
      billing: annual ? "per month, billed annually" : "per month, billed monthly",
      features: [
        "AI-generated content for up to 20 destinations",
        "Advanced analytics and reporting",
        "Custom content templates",
        "Priority support",
        "Content distribution to 10 channels",
        "Multi-language content generation",
        "API access"
      ],
      cta: "Start Free Trial",
      recommended: true
    },
    {
      name: "Enterprise",
      description: "For large tourism organizations with complex content ecosystems",
      price: "Custom",
      billing: "Contact us for pricing",
      features: [
        "Unlimited AI-generated content",
        "Enterprise-grade analytics",
        "Fully customizable templates",
        "Dedicated account manager",
        "Unlimited content distribution",
        "Advanced integrations",
        "Custom AI model training",
        "SLA guarantees"
      ],
      cta: "Contact Sales"
    }
  ];
  
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that fits your tourism content needs
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${annual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual Billing
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle billing period</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  annual ? 'translate-x-1' : 'translate-x-6'
                }`}
              />
            </button>
            <span className={`ml-3 ${!annual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly Billing
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-6 ${
                plan.recommended 
                  ? 'bg-white border-2 border-primary-500 shadow-xl' 
                  : 'bg-white border border-gray-200 shadow-md'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Recommended
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">{plan.billing}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={`#${plan.name.toLowerCase()}`}
                className={`block w-full py-3 px-4 rounded-lg text-center font-medium ${
                  plan.recommended
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-white border border-primary-600 text-primary-700 hover:bg-primary-50'
                } transition-colors`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom solution? <a href="#contact" className="text-primary-600 font-medium hover:text-primary-700">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;