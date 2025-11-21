import React, { useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { PRICING_TIERS, WHATSAPP_NUMBER } from '../constants';

const Pricing: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  const getWhatsAppLink = (packageName: string) => {
    const msg = `Hi, I want to book the ${packageName} package for a shoot. Please share availability and final price.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="pricing" className="py-20 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mb-8">Choose the package that fits your needs. No hidden fees.</p>
          
          {/* Comparison Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!showDetails ? 'text-brand-charcoal' : 'text-gray-400'}`}>Overview</span>
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-brand-gold transition-colors focus:outline-none"
              role="switch"
              aria-checked={showDetails}
              aria-label="Toggle pricing details"
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showDetails ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-medium ${showDetails ? 'text-brand-charcoal' : 'text-gray-400'}`}>Detailed Specs</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                tier.highlight 
                  ? 'border-2 border-brand-gold shadow-xl scale-105 md:-mt-4 z-10' 
                  : 'border border-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-brand-charcoal">{tier.price}</span>
              </div>
              <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{tier.description}</p>

              {!showDetails ? (
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-4 mb-8 bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium text-brand-charcoal">{tier.details.hours}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Photos</span>
                    <span className="font-medium text-brand-charcoal">{tier.details.photos}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Album</span>
                    <span className={`font-medium ${tier.details.album ? 'text-green-600' : 'text-red-400'}`}>
                      {tier.details.album ? 'Included' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Delivery</span>
                    <span className="font-medium text-brand-charcoal">{tier.details.delivery}</span>
                  </div>
                </div>
              )}

              <a 
                href={getWhatsAppLink(tier.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-colors ${
                  tier.highlight 
                    ? 'bg-brand-gold text-white hover:bg-yellow-600' 
                    : 'bg-brand-charcoal text-white hover:bg-gray-900'
                }`}
              >
                <MessageCircle size={18} /> Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Custom packages available for events and commercial shoots. <br/>
            <a href="#contact" className="text-brand-gold font-medium underline">Message us</a> for a quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;