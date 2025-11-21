import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to book a shoot!`;

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax-like feel via fixed attachment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale&blur=2")',
          backgroundAttachment: 'fixed' 
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-bold mb-6 tracking-tight">
            Beautiful photos. <br className="hidden sm:block" />
            <span className="text-brand-gold">Memorable moments.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-200 mb-10 font-light"
        >
          We capture weddings, baby shoots, pre-wedding and portrait sessions with a modern studio look. Affordable packages, fast delivery, and album design included.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-gold hover:bg-yellow-600 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Book a shoot <ExternalLink size={18} />
          </a>
          <a 
            href="#portfolio"
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-charcoal rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2"
          >
            View portfolio <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;