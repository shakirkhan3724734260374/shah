import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wifi, 
  Wind, 
  Tv, 
  ShieldCheck, 
  Clock, 
  Flame, 
  Car, 
  UtensilsCrossed, 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  BedDouble, 
  Award,
  Users
} from 'lucide-react';
import { Review } from '../types';
import { reviewsData, amenitiesList } from '../data';

interface HomeProps {
  onExploreClick: () => void;
  onBookNowClick: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
    tagline: 'LUXURY ACCOMMODATION IN ISLAMABAD',
    title: 'Experience Comfort & Prestige At Shah G Guest House',
    subtitle: 'Nestled in the pristine D Markaz of Gulberg Residencia, offering fully furnished luxury rooms with unparalleled privacy and 24/7 hospitality.'
  },
  {
    image: 'https://images.unsplash.com/photo-1611891404724-497bd63d79f5?auto=format&fit=crop&w=1600&q=80',
    tagline: 'PREMIUM EXECUTIVE STAY',
    title: 'Sophisticated Rooms For Discerning Guests',
    subtitle: 'Enjoy pristine marbled floors, luxurious bedding, customized cooling setups, and high-speed fiber internet for both work and deep relaxation.'
  },
  {
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80',
    tagline: 'FAMILY FRIENDLY SANCTUARY',
    title: 'Safe, Peaceful & Convenient For Your Loved Ones',
    subtitle: 'Offering family quad suites with dual double bed configurations, complete kitchen utilities access, secure CCTV parking, and child-friendly spaces.'
  }
];

export const Home: React.FC<HomeProps> = ({ onExploreClick, onBookNowClick }) => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [activeReviewFilter, setActiveReviewFilter] = useState<'all' | 'family' | 'executive' | 'cleanliness'>('all');
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Filter reviews
  const filteredReviews = activeReviewFilter === 'all' 
    ? reviewsData 
    : reviewsData.filter(rev => rev.category === activeReviewFilter);

  // Auto-play reviews slider when active filter is selected
  useEffect(() => {
    setCurrentReviewIndex(0);
  }, [activeReviewFilter]);

  useEffect(() => {
    if (filteredReviews.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [filteredReviews.length]);

  const amenitiesIcons: { [key: string]: React.ReactNode } = {
    wifi: <Wifi className="w-6 h-6 text-[#D4AF37]" />,
    ac: <Wind className="w-6 h-6 text-[#D4AF37]" />,
    bath: <Flame className="w-6 h-6 text-[#D4AF37]" />, // Hot water
    parking: <Car className="w-6 h-6 text-[#D4AF37]" />,
    service: <Clock className="w-6 h-6 text-[#D4AF37]" />,
    tv: <Tv className="w-6 h-6 text-[#D4AF37]" />,
    kitchen: <UtensilsCrossed className="w-6 h-6 text-[#D4AF37]" />,
    location: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
  };

  return (
    <div className="bg-[#F7F7F7] text-[#0B1B3A] overflow-hidden" id="home-view">
      
      {/* 1. Hero Luxury Slider */}
      <section className="relative h-[80vh] md:h-[85vh] flex items-center bg-[#0B1B3A] overflow-hidden">
        {/* Background slider with AnimatePresence */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.45, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_SLIDES[currentHeroSlide].image})` }}
            />
          </AnimatePresence>
          {/* Elegant gold mesh pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3A]/95 via-[#0B1B3A]/80 to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full z-20 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-xl bg-[#0B1B3A] flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/src/assets/images/shahg_logo_1782314782333.jpg" 
                    alt="Shah G Logo" 
                    className="w-full h-full object-cover scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-3.5 py-1 rounded-full text-[#D4AF37] text-xs font-semibold uppercase tracking-widest w-fit">
                    <Award className="w-3.5 h-3.5" />
                    {HERO_SLIDES[currentHeroSlide].tagline}
                  </div>
                  <span className="text-[10px] text-slate-300 font-mono uppercase tracking-[0.2em] leading-none">D Markaz, Gulberg Residencia</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-5 font-bold">
                {HERO_SLIDES[currentHeroSlide].title.split('Shah G Guest House').map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && (
                      <span className="text-[#D4AF37] block sm:inline">Shah G Guest House</span>
                    )}
                  </React.Fragment>
                ))}
              </h1>
              <p className="text-slate-300 text-sm md:text-lg mb-8 leading-relaxed max-w-2xl font-light">
                {HERO_SLIDES[currentHeroSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={onBookNowClick}
                  className="bg-[#D4AF37] hover:bg-[#bfa032] text-[#0B1B3A] text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-[#D4AF37]/20 transform hover:-translate-y-0.5"
                  id="hero-cta-book"
                >
                  Book Your Room Now
                </button>
                <button
                  onClick={onExploreClick}
                  className="border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] bg-white/5 hover:bg-white/10 text-sm font-semibold py-4 px-8 rounded-xl transition-all backdrop-blur-sm"
                  id="hero-cta-explore"
                >
                  Explore Room Categories
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Sliders Manual Controls */}
        <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-3">
          <button
            onClick={prevHeroSlide}
            className="p-3 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0B1B3A] rounded-full border border-white/10 hover:border-[#D4AF37] transition-all"
            aria-label="Previous slide"
            id="hero-control-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextHeroSlide}
            className="p-3 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0B1B3A] rounded-full border border-white/10 hover:border-[#D4AF37] transition-all"
            aria-label="Next slide"
            id="hero-control-next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-6 sm:left-12 z-20 flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentHeroSlide === index ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              id={`hero-indicator-${index}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Direct Value Propositions (Trust badging) */}
      <section className="bg-white py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center p-3 border-r border-slate-100 last:border-none">
              <span className="text-3xl font-bold text-[#0B1B3A] font-serif">11</span>
              <span className="text-xs text-slate-500 font-medium uppercase mt-1 tracking-wider">Fully Furnished Rooms</span>
            </div>
            <div className="flex flex-col items-center p-3 border-r border-slate-100 last:border-none">
              <span className="text-3xl font-bold text-[#D4AF37] font-serif">100%</span>
              <span className="text-xs text-slate-500 font-medium uppercase mt-1 tracking-wider">Family Safe Stays</span>
            </div>
            <div className="flex flex-col items-center p-3 border-r border-slate-100 last:border-none">
              <span className="text-3xl font-bold text-[#0B1B3A] font-serif">24/7</span>
              <span className="text-xs text-slate-500 font-medium uppercase mt-1 tracking-wider">Check-in Support</span>
            </div>
            <div className="flex flex-col items-center p-3">
              <span className="text-3xl font-bold text-[#D4AF37] font-serif">Gulberg</span>
              <span className="text-xs text-slate-500 font-medium uppercase mt-1 tracking-wider">Prime Islamabad Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Highlights Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">Flexible Budgeting</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1B3A] mt-1 mb-4">Transparent Local Pricing</h2>
          <p className="text-slate-600 font-light text-sm md:text-base">
            No hidden taxes or fees. Premium stay configurations custom-tailored to suit short visits, single-night breaks, or full 24-hour stays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Plan 1: Short Stay */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col"
            id="pricing-card-short"
          >
            <span className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-2">Flexible Stay</span>
            <h3 className="text-xl font-bold font-serif mb-3">Short Stay (3 hrs)</h3>
            <div className="flex items-baseline gap-1.5 mb-5 border-b border-slate-100 pb-4">
              <span className="text-3xl font-bold text-[#0B1B3A]">3,000</span>
              <span className="text-slate-500 text-sm font-medium">PKR</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 mb-6 flex-grow">
              <li className="flex items-center gap-2">✓ Ideal for quick rest or refresh</li>
              <li className="flex items-center gap-2">✓ Non-AC Base Rate</li>
              <li className="flex items-center gap-2">✓ Attached modern washroom</li>
              <li className="flex items-center gap-2">✓ High-speed WiFi included</li>
            </ul>
            <button 
              onClick={onBookNowClick}
              className="w-full py-3 px-4 bg-[#0B1B3A] text-white hover:bg-[#D4AF37] hover:text-[#0B1B3A] font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Book Short Stay
            </button>
          </motion.div>

          {/* Plan 2: Night Stay */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col"
            id="pricing-card-night"
          >
            <span className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-2">Standard Stay</span>
            <h3 className="text-xl font-bold font-serif mb-3">Night Stay</h3>
            <div className="flex items-baseline gap-1.5 mb-5 border-b border-slate-100 pb-4">
              <span className="text-3xl font-bold text-[#0B1B3A]">4,000</span>
              <span className="text-slate-500 text-sm font-medium">PKR</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 mb-6 flex-grow">
              <li className="flex items-center gap-2">✓ Check-in afternoon to next morning</li>
              <li className="flex items-center gap-2">✓ Executive Double bed space</li>
              <li className="flex items-center gap-2">✓ Safe gated parking & secure room</li>
              <li className="flex items-center gap-2">✓ Smart LED TV entertainment</li>
            </ul>
            <button 
              onClick={onBookNowClick}
              className="w-full py-3 px-4 bg-[#0B1B3A] text-white hover:bg-[#D4AF37] hover:text-[#0B1B3A] font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Book Night Stay
            </button>
          </motion.div>

          {/* Plan 3: 24 Hours Stay */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-md border-2 border-[#D4AF37] relative flex flex-col"
            id="pricing-card-24h"
          >
            <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-[#D4AF37] text-[#0B1B3A] px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider mb-2">Complete Day Stay</span>
            <h3 className="text-xl font-bold font-serif mb-3">24 Hours Stay</h3>
            <div className="flex items-baseline gap-1.5 mb-5 border-b border-slate-100 pb-4">
              <span className="text-3xl font-bold text-[#0B1B3A]">5,000</span>
              <span className="text-slate-500 text-sm font-medium">PKR</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 mb-6 flex-grow">
              <li className="flex items-center gap-2">✓ Full 24-hour occupancy block</li>
              <li className="flex items-center gap-2">✓ Unlimited High-Speed Fiber WiFi</li>
              <li className="flex items-center gap-2">✓ Dedicated room service & cleaning</li>
              <li className="flex items-center gap-2">✓ 24/7 water and electricity standby</li>
            </ul>
            <button 
              onClick={onBookNowClick}
              className="w-full py-3 px-4 bg-[#D4AF37] text-[#0B1B3A] hover:bg-[#0B1B3A] hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Book 24 Hours Stay
            </button>
          </motion.div>

          {/* Plan 4: Optional Air Conditioning */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[#0B1B3A] to-[#152e61] text-white rounded-2xl p-6 shadow-sm border border-white/5 flex flex-col"
            id="pricing-card-ac-addon"
          >
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-wider mb-2">Climate Add-On</span>
            <h3 className="text-xl font-bold font-serif mb-3 text-white">Optional AC Extra</h3>
            <div className="flex items-baseline gap-1.5 mb-5 border-b border-white/10 pb-4">
              <span className="text-3xl font-bold text-[#D4AF37]">+1,000</span>
              <span className="text-slate-300 text-sm font-medium">PKR</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-300 mb-6 flex-grow">
              <li className="flex items-center gap-2">✓ Premium cooling on demand</li>
              <li className="flex items-center gap-2">✓ Included by default in Luxury Suite</li>
              <li className="flex items-center gap-2">✓ Premium split AC unit in room</li>
              <li className="flex items-center gap-2">✓ Clean filters and instant cooling</li>
            </ul>
            <div className="text-xxs text-slate-400 font-light mt-auto">
              *Applies as an option per room per day of stay.
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Guest house Amenities */}
      <section className="bg-[#0B1B3A] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">First-Class Living</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-1 mb-4">Premium Stays Amenities</h2>
            <p className="text-slate-300 font-light text-sm md:text-base">
              At Shah G Guest House, we bridge luxury and affordability. Enjoy pristine facilities managed by a passionate service team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenitiesList.map((amenity) => (
              <motion.div 
                key={amenity.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                id={`amenity-item-${amenity.id}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4 border border-[#D4AF37]/20">
                  {amenitiesIcons[amenity.id] || <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />}
                </div>
                <h3 className="text-lg font-bold font-serif text-white mb-2">{amenity.label}</h3>
                <p className="text-slate-300 text-xs font-light leading-relaxed">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Reasons Grid (Why Choose Us) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">Uncompromised Standards</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1B3A] mt-1 mb-6">Why Choose Shah G Guest House?</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0B1B3A] text-[#D4AF37] flex items-center justify-center font-bold text-sm">✓</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">11 Fully Furnished Luxury Rooms</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">Meticulously cleaned, sanitized, and decorated rooms with premium furniture.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0B1B3A] text-[#D4AF37] flex items-center justify-center font-bold text-sm">✓</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">Strict Family Friendly Environment</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">We maintain strict privacy policies and rules to ensure a completely safe stay for kids and ladies.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0B1B3A] text-[#D4AF37] flex items-center justify-center font-bold text-sm">✓</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">Kitchen & Parking Access</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">Feel at home with full cooking facilities in our kitchen and CCTV gated secure parking space.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0B1B3A] text-[#D4AF37] flex items-center justify-center font-bold text-sm">✓</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">Prime Location in Gulberg Residencia</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">Located at the premium D Markaz, providing fast reach to top eateries and central sectors of Islamabad.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={onBookNowClick}
                className="bg-[#0B1B3A] text-white hover:bg-[#D4AF37] hover:text-[#0B1B3A] px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Inquire & Book Now
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Split visuals overlay */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80" 
                alt="Building Facade" 
                className="rounded-2xl h-60 w-full object-cover shadow-md"
              />
              <img 
                src="/src/assets/images/luxury_bedroom_suite_1782314354924.jpg" 
                alt="Bedroom Interior" 
                className="rounded-2xl h-60 w-full object-cover shadow-md mt-6"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Absolute badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-[#0B1B3A] p-6 rounded-2xl shadow-xl text-center border-4 border-white">
              <Users className="w-8 h-8 mx-auto mb-2 text-[#0B1B3A]" />
              <div className="text-2xl font-serif font-bold">100%</div>
              <div className="text-xxs font-semibold uppercase tracking-wider">Family Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dynamic Testimonial Slider */}
      <section className="bg-white py-16 md:py-24 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">Guest Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1B3A] mt-1 mb-4">What Our Verified Guests Say</h2>
            
            {/* Filter tags for testimonials */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                { id: 'all', label: 'All Reviews' },
                { id: 'family', label: 'Family Stays' },
                { id: 'executive', label: 'Executive Stays' },
                { id: 'cleanliness', label: 'Cleanliness Verified' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveReviewFilter(filter.id as any)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeReviewFilter === filter.id 
                      ? 'bg-[#0B1B3A] text-white shadow-sm' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  id={`review-filter-${filter.id}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial slider body */}
          <div className="max-w-3xl mx-auto relative min-h-[300px] flex items-center justify-center px-4" id="reviews-carousel">
            <AnimatePresence mode="wait">
              {filteredReviews.length > 0 ? (
                <motion.div
                  key={filteredReviews[currentReviewIndex].id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm relative text-center w-full"
                >
                  <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute top-6 left-6" />
                  
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(filteredReviews[currentReviewIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed mb-6 italic">
                    "{filteredReviews[currentReviewIndex].text}"
                  </p>

                  <div className="flex items-center justify-center gap-2">
                    <span className="font-bold text-[#0B1B3A] text-sm md:text-base">
                      {filteredReviews[currentReviewIndex].name}
                    </span>
                    {filteredReviews[currentReviewIndex].verified && (
                      <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                        ✓ Verified Stay
                      </span>
                    )}
                  </div>

                  <div className="text-slate-400 text-xs mt-1 font-light">
                    Stayed in {filteredReviews[currentReviewIndex].stayDate}
                  </div>
                </motion.div>
              ) : (
                <div className="text-center text-slate-500 text-sm">No reviews found matching this filter.</div>
              )}
            </AnimatePresence>

            {/* Testimonials Controls */}
            {filteredReviews.length > 1 && (
              <div className="absolute inset-x-0 -bottom-12 flex justify-center items-center gap-4">
                <button
                  onClick={() => setCurrentReviewIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length)}
                  className="p-2 bg-slate-100 hover:bg-[#D4AF37] text-slate-600 hover:text-[#0B1B3A] rounded-full transition-colors"
                  aria-label="Previous review"
                  id="review-control-prev"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  {currentReviewIndex + 1} / {filteredReviews.length}
                </span>
                <button
                  onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % filteredReviews.length)}
                  className="p-2 bg-slate-100 hover:bg-[#D4AF37] text-slate-600 hover:text-[#0B1B3A] rounded-full transition-colors"
                  aria-label="Next review"
                  id="review-control-next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 7. Footer Newsletter Booking Reminder banner */}
      <section className="bg-gradient-to-r from-[#0B1B3A] to-[#152e61] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">Ready to Experience Shah G Hospitality?</h3>
          <p className="text-slate-300 font-light text-sm md:text-base max-w-xl mx-auto mb-6">
            Secure your booking directly over WhatsApp for instant availability and seamless personalized customer support.
          </p>
          <button
            onClick={onBookNowClick}
            className="bg-[#D4AF37] hover:bg-[#bfa032] text-[#0B1B3A] font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-[#D4AF37]/10"
          >
            Go To Booking Desk
          </button>
        </div>
      </section>

    </div>
  );
};
