import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { galleryData } from '../data';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'interior' | 'bathrooms' | 'exterior'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentLightBoxIndex, setCurrentLightBoxIndex] = useState<number>(-1);

  // Filter items
  const filteredGallery = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  const openLightBox = (item: GalleryItem) => {
    setSelectedItem(item);
    const idx = galleryData.findIndex(g => g.id === item.id);
    setCurrentLightBoxIndex(idx);
  };

  const closeLightBox = () => {
    setSelectedItem(null);
    setCurrentLightBoxIndex(-1);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentLightBoxIndex + 1) % galleryData.length;
    setCurrentLightBoxIndex(nextIdx);
    setSelectedItem(galleryData[nextIdx]);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentLightBoxIndex - 1 + galleryData.length) % galleryData.length;
    setCurrentLightBoxIndex(prevIdx);
    setSelectedItem(galleryData[prevIdx]);
  };

  return (
    <div className="bg-[#F7F7F7] text-[#0B1B3A] py-16 md:py-24" id="gallery-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Gallery Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">Virtual Tour</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mt-1 mb-4 text-[#0B1B3A]">Virtual Photo Gallery</h1>
          <p className="text-slate-600 font-light text-sm md:text-base">
            Explore authentic images of our premium guest suites, modern bathrooms, shared guest lounge, fully fitted kitchen, and modern arched building exterior at Gulberg Residencia, Islamabad.
          </p>

          {/* Gallery Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8">
            {[
              { id: 'all', label: 'All Images' },
              { id: 'rooms', label: 'Suites & Bedrooms' },
              { id: 'interior', label: 'Guest Lounge & Kitchen' },
              { id: 'bathrooms', label: 'Luxury Bathrooms' },
              { id: 'exterior', label: 'Building Exterior' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-[#0B1B3A] text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-[#0B1B3A] border border-slate-200 shadow-sm'
                }`}
                id={`gallery-filter-${filter.id}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry-like Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                onClick={() => openLightBox(item)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 cursor-pointer group relative h-72"
                id={`gallery-item-${item.id}`}
              >
                {/* Image */}
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Elegant overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A]/90 via-[#0B1B3A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                {/* Lightbox Trigger Icon overlay */}
                <div className="absolute top-4 right-4 bg-white/95 text-[#0B1B3A] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Description details absolute at bottom on hover */}
                <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white flex flex-col gap-1 z-10">
                  <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest">{item.category} Category</span>
                  <h3 className="font-serif font-bold text-sm leading-tight text-white">{item.title}</h3>
                </div>

                {/* Static indicator for touch screens */}
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[9px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md flex items-center gap-1 group-hover:opacity-0 transition-opacity">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" /> {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox zoom popups */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightBox}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
              id="gallery-lightbox-overlay"
            >
              <button
                onClick={closeLightBox}
                className="absolute top-6 right-6 text-white hover:text-[#D4AF37] p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all z-50"
                aria-label="Close Lightbox"
                id="lightbox-close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Slider Left Arrow */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 md:left-8 text-white hover:text-[#D4AF37] p-3 bg-white/5 rounded-full hover:bg-white/15 transition-all z-50 border border-white/15"
                aria-label="Previous image"
                id="lightbox-prev"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Slider Right Arrow */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 md:right-8 text-white hover:text-[#D4AF37] p-3 bg-white/5 rounded-full hover:bg-white/15 transition-all z-50 border border-white/15"
                aria-label="Next image"
                id="lightbox-next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Content Container */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full flex flex-col bg-[#0B1B3A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
                id="gallery-lightbox-card"
              >
                {/* Scaled Zoom Image */}
                <div className="relative h-[60vh] md:h-[70vh] bg-black">
                  <img 
                    src={selectedItem.url} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Footer text panel of light box */}
                <div className="bg-[#0B1B3A] text-white p-5 border-t border-white/10 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                  <div>
                    <span className="text-[#D4AF37] text-xxs font-bold uppercase tracking-wider">{selectedItem.category} Class Segment</span>
                    <h3 className="font-serif font-bold text-lg md:text-xl text-white mt-0.5">{selectedItem.title}</h3>
                  </div>
                  <div className="flex-shrink-0 text-slate-400 text-xs font-mono">
                    Image {currentLightBoxIndex + 1} of {galleryData.length}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
