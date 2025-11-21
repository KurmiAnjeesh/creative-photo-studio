import React from 'react';
import { SERVICES } from '../constants';
import { Camera, Heart, Calendar, Baby } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Camera: <Camera className="h-8 w-8" />,
  Heart: <Heart className="h-8 w-8" />,
  Calendar: <Calendar className="h-8 w-8" />,
  Baby: <Baby className="h-8 w-8" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-bold mb-4">Our Photography Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Professional photography services tailored to capture your most important life events.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-brand-offwhite p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-brand-gold/20">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-charcoal mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[60px]">
                {service.description}
              </p>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Starting from</span>
                <a href="#pricing" className="text-brand-gold font-bold hover:underline">{service.priceAnchor}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;