/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Rooms } from './components/Rooms';
import { Booking } from './components/Booking';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { ToastContainer, ToastType } from './components/Toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  Sparkles,
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedRoomId, setSelectedRoomId] = useState<string>('executive-double');
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleBookNow = () => {
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreRooms = () => {
    setActiveTab('rooms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRoomAndBook = (roomId: string) => {
    setSelectedRoomId(roomId);
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    addToast('Room selected! Form pricing updated.', 'info');
  };

  // Ensure scroll restoration on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#0B1B3A] font-sans antialiased flex flex-col justify-between selection:bg-[#D4AF37]/30 selection:text-[#0B1B3A]">
      
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      {/* Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onBookNowClick={handleBookNow} 
      />

      {/* Main View Controller with transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {activeTab === 'home' && (
              <Home 
                onExploreClick={handleExploreRooms} 
                onBookNowClick={handleBookNow} 
              />
            )}
            
            {activeTab === 'rooms' && (
              <Rooms 
                onSelectRoomAndBook={handleSelectRoomAndBook} 
              />
            )}
            
            {activeTab === 'booking' && (
              <Booking 
                initialRoomId={selectedRoomId} 
                addToast={addToast} 
              />
            )}
            
            {activeTab === 'gallery' && (
              <Gallery />
            )}
            
            {activeTab === 'contact' && (
              <Contact addToast={addToast} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Luxury Footer */}
      <footer className="bg-[#0B1B3A] text-white pt-16 pb-24 md:pb-12 border-t-2 border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#D4AF37] shadow-xl bg-[#0B1B3A] flex items-center justify-center flex-shrink-0">
                <img 
                  src="/src/assets/images/shahg_logo_1782314782333.jpg" 
                  alt="Shah G Logo" 
                  className="w-full h-full object-cover scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-serif font-bold tracking-tight text-white">
                  SHAH G <span className="text-[#D4AF37]">GUEST HOUSE</span>
                </span>
                <span className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-[0.25em] mt-1 leading-none font-display">
                  Luxury Stays in Islamabad
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed max-w-sm">
              An elegant fully furnished guest house of 11 premium rooms, located at the heart of D Markaz, Gulberg Residencia, Islamabad. We prioritize a safe, highly hygienic, and secure environment exclusively optimized for families and executive business travels.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                ✓ family friendly
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                ★ 24/7 service
              </span>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#D4AF37] uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {['home', 'rooms', 'booking', 'gallery', 'contact'].map((tab) => (
                <li key={tab}>
                  <button 
                    onClick={() => { setActiveTab(tab); window.scrollTo(0, 0); }}
                    className="hover:text-white transition-colors uppercase tracking-wider font-medium text-left"
                    id={`footer-nav-${tab}`}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#D4AF37] uppercase tracking-wider">Direct Contact Details</h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-light">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4.5 h-4.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>D Markaz, Gulberg Residencia, Islamabad, Pakistan.</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4.5 h-4.5 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:03175250392" className="hover:text-white font-medium text-slate-300">0317 5250392</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4.5 h-4.5 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:moonshah5250392@gmail.com" className="hover:text-white text-slate-300">moonshah5250392@gmail.com</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Clock className="w-4.5 h-4.5 text-[#D4AF37] flex-shrink-0" />
                <span>24/7 Support Desk — Check-In Anytime</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-t border-slate-800 mt-12 pt-6 text-center text-[11px] text-slate-500 font-light flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Shah G Guest House (Islamabad). All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-slate-600">D Markaz Gulberg Residencia</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-600">Luxury Stay Portal</span>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA (visible only on mobile and when activeTab is not booking) */}
      {activeTab !== 'booking' && (
        <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-[#D4AF37]/20 p-3 z-30 md:hidden flex justify-between items-center gap-3 shadow-2xl">
          <div className="flex flex-col items-start pl-2">
            <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Start staying at</span>
            <span className="text-sm font-bold text-[#0B1B3A]">3,000 <span className="text-xxs font-normal text-slate-500">PKR</span></span>
          </div>
          
          <div className="flex gap-2 flex-grow justify-end max-w-xs">
            {/* Click-to-call mobile shortcut */}
            <a 
              href="tel:03175250392"
              className="p-3 bg-slate-100 hover:bg-slate-200 text-[#0B1B3A] rounded-xl flex items-center justify-center transition-colors border border-slate-200"
              aria-label="Call property desk"
              id="sticky-mobile-call"
            >
              <PhoneCall className="w-4.5 h-4.5" />
            </a>
            
            {/* Booking page trigger */}
            <button
              onClick={handleBookNow}
              className="flex-grow bg-[#D4AF37] hover:bg-[#bfa032] text-[#0B1B3A] font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
              id="sticky-mobile-book-now"
            >
              <Sparkles className="w-4 h-4" /> Book Stay Now
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
