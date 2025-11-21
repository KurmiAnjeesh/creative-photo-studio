import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { ServiceCategory, PortfolioItem } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ServiceCategory | 'All'>('All');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (filter === 'All') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === filter);
  }, [filter]);

  const categories = ['All', ...Object.values(ServiceCategory)];

  const openLightbox = (item: PortfolioItem) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    setLightboxItem(filteredItems[newIndex]);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-bold mb-6">Our Portfolio</h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as ServiceCategory | 'All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-brand-charcoal text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              onClick={() => openLightbox(item)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-80 w-10 h-10" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{item.title}</p>
                <p className="text-brand-gold text-xs uppercase tracking-wider">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-50">
            <X size={32} />
          </button>
          
          <button onClick={() => navigateLightbox('prev')} className="absolute left-4 text-white hover:text-gray-300 p-2 hidden md:block">
            <ChevronLeft size={40} />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center">
            <img 
              src={lightboxItem.src} 
              alt={lightboxItem.title}
              className="max-h-[85vh] w-auto object-contain shadow-2xl border-4 border-white/10"
            />
             {/* Watermark Overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
                <span className="text-white font-serif text-4xl font-bold rotate-[-45deg]">Creative Studio</span>
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-white font-serif text-xl">{lightboxItem.title}</h3>
              <p className="text-gray-400 text-sm">{lightboxItem.category}</p>
            </div>
          </div>

          <button onClick={() => navigateLightbox('next')} className="absolute right-4 text-white hover:text-gray-300 p-2 hidden md:block">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;