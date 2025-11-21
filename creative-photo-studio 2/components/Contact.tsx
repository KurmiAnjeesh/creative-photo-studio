import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ADDRESS_LINE, MAP_EMBED_URL, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Booking Steps */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-brand-charcoal mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Ready to create magic? Reach out to check availability. We recommend booking weddings 3-6 months in advance.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal">WhatsApp (Primary)</h4>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-gray-600 hover:text-brand-gold transition-colors">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal">Studio Address</h4>
                  <p className="text-gray-600">{ADDRESS_LINE}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal">Opening Hours</h4>
                  <p className="text-gray-600">Mon - Sun: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-serif text-lg font-bold text-brand-charcoal mb-3">Booking Process</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Message us to check date availability.</li>
                <li>Pay a 30% deposit to lock the date.</li>
                <li>Sign the simple digital agreement.</li>
                <li>Receive your timeline and style guide!</li>
              </ul>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-[400px] lg:h-full w-full bg-gray-200 rounded-2xl overflow-hidden shadow-md">
            <iframe 
              src={MAP_EMBED_URL}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
            ></iframe>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 bg-brand-charcoal rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl text-white mb-4">Join our waiting list for seasonal mini-sessions</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">Be the first to know about our Diwali and Christmas special packages.</p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-charcoal"
            />
            <button type="submit" className="bg-brand-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;