import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
             <div className="inline-block h-1 w-12 bg-brand-gold mb-6"></div>
             <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">Capturing the essence of Ahmedabad</h2>
             <p className="text-gray-600 mb-4 text-lg leading-relaxed">
               Creative Photo Studio began as a small passion project in Ghodasar and has grown into one of Ahmedabad's most trusted photography names.
             </p>
             <p className="text-gray-600 mb-4 leading-relaxed">
               Our mission is simple: to freeze time. Whether it's the tearful joy of a wedding bidaai or the quiet slumber of a newborn, we believe every moment deserves to be preserved with artistic integrity and technical excellence.
             </p>
             <p className="text-gray-600 mb-6 leading-relaxed">
               We pride ourselves on our "Warm Film" aesthetic—delivering photos that feel nostalgic yet modern. Plus, with our guaranteed fast delivery and in-house album design, your memories are in your hands sooner.
             </p>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Photographer at work" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl hidden md:block">
              <p className="font-serif text-4xl font-bold text-brand-gold">10+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="font-serif text-3xl text-center font-bold text-brand-charcoal mb-12">Meet The Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-brand-gold/50"
                />
                <h4 className="font-bold text-lg text-brand-charcoal">{member.name}</h4>
                <p className="text-brand-gold text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm italic">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;