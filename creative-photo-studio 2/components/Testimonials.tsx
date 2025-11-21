import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <Quote className="w-12 h-12 text-brand-gold mx-auto mb-8 opacity-80" />
        
        <div className="h-[250px] flex flex-col justify-center">
            <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed mb-8 italic transition-opacity duration-500">
            "{TESTIMONIALS[activeIndex].quote}"
            </p>
            
            <div className="flex flex-col items-center">
                <div className="flex space-x-1 text-brand-gold mb-2">
                    {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                </div>
                <h4 className="font-bold text-lg">{TESTIMONIALS[activeIndex].name}</h4>
                <p className="text-gray-400 text-sm uppercase tracking-widest">{TESTIMONIALS[activeIndex].role}</p>
            </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-brand-gold w-6' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;