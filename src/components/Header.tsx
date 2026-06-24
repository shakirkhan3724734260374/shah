import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onBookNowClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onBookNowClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'booking', label: 'Booking' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-40 relative">
      {/* Premium Top Bar */}
      <div className="bg-[#0B1B3A] text-white py-2 px-4 text-xs font-light border-b border-white/5 tracking-wider hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> D Markaz, Gulberg Residencia, Islamabad
            </span>
            <span className="h-3 w-[1px] bg-white/20"></span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Verified Family Environment
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:03175250392" className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> 0317 5250392
            </a>
            <span className="h-3 w-[1px] bg-white/20"></span>
            <a href="mailto:moonshah5250392@gmail.com" className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" /> moonshah5250392@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="bg-[#0B1B3A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 sticky top-0 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleTabChange('home')}
            className="flex items-center gap-3.5 focus:outline-none group text-left"
            id="brand-logo"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10 bg-[#0B1B3A] flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <img 
                src="/src/assets/images/shahg_logo_1782314782333.jpg" 
                alt="Shah G Guest House Logo" 
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
                  SHAH G
                </span>
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full self-end mb-1.5 animate-pulse"></span>
              </div>
              <span className="text-[9px] font-semibold text-[#D4AF37] uppercase tracking-[0.25em] leading-none font-display">
                Luxury Guest House
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium tracking-wide">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleTabChange(item.id)}
                    className={`relative py-2 px-1 transition-colors duration-300 ${
                      activeTab === item.id 
                        ? 'text-[#D4AF37]' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                    id={`nav-tab-${item.id}`}
                  >
                    {item.label}
                    {activeTab === item.id && (
                      <motion.div 
                        layoutId="activeTabUnderline" 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" 
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={onBookNowClick}
              className="bg-[#D4AF37] hover:bg-[#bfa032] text-[#0B1B3A] font-semibold text-xs py-2.5 px-5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/10 uppercase tracking-wider"
              id="header-cta-book-now"
            >
              Book Stay
            </button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onBookNowClick}
              className="bg-[#D4AF37] text-[#0B1B3A] font-bold text-xxs py-1.5 px-3 rounded-md uppercase tracking-wider shadow-sm"
              id="header-cta-mobile-book"
            >
              Book Now
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#D4AF37] transition-colors p-1"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B1B3A] border-b border-[#D4AF37]/20 absolute top-[100%] left-0 w-full z-50 overflow-hidden shadow-2xl"
            id="mobile-navigation-dropdown"
          >
            <div className="px-5 py-6 space-y-5">
              <ul className="space-y-3.5">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleTabChange(item.id)}
                      className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        activeTab === item.id 
                          ? 'text-[#0B1B3A] bg-[#D4AF37] font-semibold' 
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      id={`mobile-tab-${item.id}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex flex-col gap-2.5 text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" /> D Markaz, Gulberg Residencia, Islamabad
                  </span>
                  <a href="tel:03175250392" className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-4 h-4 text-[#D4AF37]" /> 0317 5250392
                  </a>
                  <a href="mailto:moonshah5250392@gmail.com" className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-4 h-4 text-[#D4AF37]" /> moonshah5250392@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
