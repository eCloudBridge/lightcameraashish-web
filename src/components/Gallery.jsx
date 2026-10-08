import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info } from 'lucide-react';

const categories = ["All", "Street", "Portraits", "Cinematic Stills"];

const portfolioData = [
  { id: 1, src: '/images/portfolio_street.jpg', category: 'Street', title: 'Neon Reflections', exif: '35mm | f/1.4 | 1/125s | ISO 800' },
  { id: 2, src: '/images/portfolio_portrait.jpg', category: 'Portraits', title: 'Shadow Play', exif: '85mm | f/1.8 | 1/200s | ISO 400' },
  { id: 3, src: '/images/portfolio_cinematic.jpg', category: 'Cinematic Stills', title: 'Golden Hour Flare', exif: '50mm | f/2.8 | 1/500s | ISO 100' },
  { id: 4, src: '/images/hero_bg.jpg', category: 'Cinematic Stills', title: 'Moody Amber', exif: '35mm | f/1.4 | 1/60s | ISO 1600' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredData = activeFilter === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Selected Works</h2>
          <p className="text-white/50 max-w-md text-sm leading-relaxed">
            A curated collection of my favorite frames. Still finding my style, but drawn to shadows, neon, and cinematic composition.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs transition-all duration-300 ${
                activeFilter === cat 
                  ? 'bg-white text-black font-medium' 
                  : 'glass-card text-white/70 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-md aspect-[4/5] md:aspect-square"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                <p className="text-amber-500 text-xs tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[101]"
            >
              <X size={32} strokeWidth={1} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center"
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-auto h-auto max-w-full max-h-[75vh] object-contain shadow-2xl"
              />
              
              <div className="w-full mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/80 glass-card px-6 py-4 rounded-xl">
                <div>
                  <h4 className="font-serif text-xl">{selectedImage.title}</h4>
                  <span className="text-xs text-white/40 uppercase tracking-wider">{selectedImage.category}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-900/20 px-4 py-2 rounded-lg">
                  <Info size={14} />
                  {selectedImage.exif}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
