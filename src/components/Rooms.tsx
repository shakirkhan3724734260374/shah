import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Wifi, 
  Wind, 
  DoorOpen, 
  CheckSquare, 
  Flame, 
  Tv, 
  Maximize2, 
  UtensilsCrossed, 
  Bookmark,
  Building,
  AlertCircle
} from 'lucide-react';
import { Room } from '../types';
import { roomsData } from '../data';

interface RoomsProps {
  onSelectRoomAndBook: (roomId: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onSelectRoomAndBook }) => {

  const getCategoryBadge = (category: string) => {
    switch(category) {
      case 'suite':
        return 'bg-amber-500 text-white font-semibold';
      case 'family':
        return 'bg-blue-600 text-white font-semibold';
      case 'executive':
      default:
        return 'bg-[#0B1B3A] text-white font-semibold';
    }
  };

  const getAvailabilityBadge = (available: number, total: number) => {
    if (available === 0) {
      return (
        <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-700 border border-rose-100 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
          ● Fully Booked
        </span>
      );
    }
    if (available <= 1) {
      return (
        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase animate-pulse">
          ● Limited Availability
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
        ● {available} of {total} Available
      </span>
    );
  };

  return (
    <div className="bg-[#F7F7F7] text-[#0B1B3A] py-16 md:py-24" id="rooms-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Title & Intro */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">Luxury Accommodations</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mt-1 mb-4 text-[#0B1B3A]">Our Premium Furnished Rooms</h1>
          <p className="text-slate-600 font-light text-sm md:text-base">
            Shah G Guest House features 11 executive-level furnished stays inside the secure Gulberg Residencia, Islamabad. Fully vetted for secure, family-friendly, and highly cozy private residency.
          </p>

          {/* Real-time Counter Overview */}
          <div className="mt-8 inline-flex items-center gap-6 bg-white shadow-sm border border-slate-100 px-6 py-3 rounded-2xl text-xs">
            <div className="flex items-center gap-2 text-slate-500">
              <Building className="w-4 h-4 text-[#D4AF37]" />
              <span>Total Available Inventory: <b>11 Rooms</b></span>
            </div>
            <span className="h-4 w-[1px] bg-slate-200"></span>
            <div className="flex items-center gap-2 text-emerald-600 font-semibold">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span>Currently Inquiring Active Stays</span>
            </div>
          </div>
        </div>

        {/* Room Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {roomsData.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-all group"
              id={`room-card-${room.id}`}
            >
              {/* Card Header Image Slider Area */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.images[0]} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Upper Left category badge */}
                <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm ${getCategoryBadge(room.category)}`}>
                  {room.category} Class
                </span>

                {/* Upper Right Availability counters */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-1 rounded-full shadow-md">
                  {getAvailabilityBadge(room.availableRooms, room.totalRooms)}
                </div>

                {/* Capacity indicators at the bottom of image */}
                <div className="absolute bottom-4 left-4 bg-[#0B1B3A]/85 backdrop-blur-sm text-white px-3 py-1 rounded-xl text-xxs font-semibold flex items-center gap-1.5 shadow-md">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Max Limit: {room.capacity}</span>
                </div>
              </div>

              {/* Card Body content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0B1B3A] group-hover:text-[#D4AF37] transition-colors leading-tight">
                      {room.name}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Highlights pricing per room inside card */}
                  <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2.5">Stay Rate Structure</span>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                      {room.priceShortStay && (
                        <div className="flex justify-between items-center border-r border-slate-200 pr-3">
                          <span className="text-slate-500 font-medium">Short Stay (3h)</span>
                          <span className="font-bold text-[#0B1B3A]">{room.priceShortStay.toLocaleString()} PKR</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 font-medium">Night Stay</span>
                        <span className="font-bold text-[#0B1B3A]">{room.priceNight.toLocaleString()} PKR</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-slate-100 pt-2.5 col-span-2">
                        <span className="text-slate-500 font-medium">24 Hours Stay</span>
                        <span className="font-bold text-[#D4AF37]">{room.price24Hours.toLocaleString()} PKR</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Features Icons List */}
                  <div className="mb-6">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">Room Highlights</span>
                    <div className="flex flex-wrap gap-2">
                      {room.features.slice(0, 4).map((feat, idx) => (
                        <span key={idx} className="bg-slate-100 text-[#0B1B3A] text-xxs font-medium px-2.5 py-1.5 rounded-lg flex items-center gap-1">
                          <CheckSquare className="w-3 h-3 text-[#D4AF37]" />
                          {feat}
                        </span>
                      ))}
                      {room.features.length > 4 && (
                        <span className="bg-amber-50 text-amber-800 text-xxs font-bold px-2.5 py-1.5 rounded-lg">
                          +{room.features.length - 4} More Stays Perks
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Book CTAs */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onSelectRoomAndBook(room.id)}
                    className="flex-grow bg-[#0B1B3A] hover:bg-[#D4AF37] hover:text-[#0B1B3A] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    id={`rooms-cta-order-whatsapp-${room.id}`}
                  >
                    <Bookmark className="w-4 h-4" /> Book This Room
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Detailed Pricing Panel */}
        <section className="bg-white border border-slate-100 shadow-sm rounded-3xl p-6 md:p-10 mb-20" id="pricing-matrix-panel">
          <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0B1B3A]">Transparent Stay Rates Matrix</h2>
              <p className="text-xs text-slate-500 mt-0.5">Custom climate options and stay blocks calculated transparently.</p>
            </div>
            <div className="bg-amber-50 text-amber-800 rounded-xl p-3 border border-amber-100 text-xxs flex items-center gap-2 max-w-sm">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>AC option costs +1,000 PKR extra for Double & Family Quad rooms, but comes <b>fully included</b> in the Luxury Suite package.</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-4 font-bold">Room Category</th>
                  <th className="py-4 font-bold">Short Stay (3h)</th>
                  <th className="py-4 font-bold">Night Stay</th>
                  <th className="py-4 font-bold">24 Hours Stay</th>
                  <th className="py-4 font-bold text-center">A/C Climate</th>
                  <th className="py-4 font-bold text-right">Family Friendly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-light">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4.5 font-bold text-slate-800">Executive Double Room</td>
                  <td className="py-4.5 font-semibold text-slate-800">3,000 PKR</td>
                  <td className="py-4.5 font-semibold text-slate-800">4,000 PKR</td>
                  <td className="py-4.5 font-semibold text-[#D4AF37]">5,000 PKR</td>
                  <td className="py-4.5 text-center">
                    <span className="bg-amber-50 text-amber-800 text-xxs font-medium px-2 py-0.5 rounded-md border border-amber-100">Option (+1,000 PKR)</span>
                  </td>
                  <td className="py-4.5 text-right text-emerald-600 font-semibold">Yes (Verified)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4.5 font-bold text-slate-800">Luxury Suite Room</td>
                  <td className="py-4.5 text-slate-400">—</td>
                  <td className="py-4.5 font-semibold text-slate-800">5,000 PKR</td>
                  <td className="py-4.5 font-semibold text-[#D4AF37]">7,000 PKR</td>
                  <td className="py-4.5 text-center">
                    <span className="bg-emerald-50 text-emerald-800 text-xxs font-semibold px-2 py-0.5 rounded-md border border-emerald-100">Free (Included)</span>
                  </td>
                  <td className="py-4.5 text-right text-emerald-600 font-semibold">Yes (Verified)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4.5 font-bold text-slate-800">Family Quad Room</td>
                  <td className="py-4.5 text-slate-400">—</td>
                  <td className="py-4.5 font-semibold text-slate-800">7,000 PKR</td>
                  <td className="py-4.5 font-semibold text-[#D4AF37]">9,000 PKR</td>
                  <td className="py-4.5 text-center">
                    <span className="bg-amber-50 text-amber-800 text-xxs font-medium px-2 py-0.5 rounded-md border border-amber-100">Option (+1,000 PKR)</span>
                  </td>
                  <td className="py-4.5 text-right text-emerald-600 font-semibold">Yes (Verified)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Choose Accommodations Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
              <DoorOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm md:text-base">Family Friendly Security</h4>
              <p className="text-xxs text-slate-500 font-light mt-1">We maintain zero-tolerance rules for unsolicited behaviors to guarantee peace of mind for kids & women stays.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm md:text-base">Kitchen & Utility Access</h4>
              <p className="text-xxs text-slate-500 font-light mt-1">Unlike standard commercial hotels, we offer full-fledged guest kitchen usage for preparing warm baby foods or quick teas.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm md:text-base">Fiber Optic Connectivity</h4>
              <p className="text-xxs text-slate-500 font-light mt-1">Equipped with reliable high-speed Wi-Fi router coverage to keep your remote workspaces or movie streaming responsive.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
