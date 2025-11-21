import React from 'react';
import { Camera, Instagram, Facebook } from 'lucide-react';
import { ADDRESS_LINE, WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-serif text-xl font-bold">
            <Camera className="h-6 w-6 text-brand-gold" />
            <span>Creative Studio</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 mb-2">{ADDRESS_LINE}</p>
            <div className="flex justify-center md:justify-end gap-4">
                <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Instagram"><Instagram size={20}/></a>
                <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Facebook"><Facebook size={20}/></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Creative Photo Studio. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-200 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          className="block w-full bg-[#25D366] text-white text-center py-3 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
        >
           WhatsApp Bookings
        </a>
      </div>
    </footer>
  );
};

export default Footer;