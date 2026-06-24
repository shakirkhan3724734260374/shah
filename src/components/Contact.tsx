import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Plus, 
  Minus,
  CheckCircle,
  HelpCircle,
  PhoneCall
} from 'lucide-react';

interface ContactProps {
  addToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

export const Contact: React.FC<ContactProps> = ({ addToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // FAQs state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is Shah G Guest House fully safe and secure for family stays?',
      a: 'Absolutely. We operate a strictly family-friendly guest house. Unverified or unaccompanied couples are strictly screened. Original government CNIC/ID registration is mandatory for all check-ins. Gated secure parking with 24/7 CCTV surveillance ensures complete security.'
    },
    {
      q: 'Where exactly is Shah G Guest House located in Islamabad?',
      a: 'We are situated in the premium D Markaz of Gulberg Residencia, Islamabad. It is one of the most serene, clean, and modern secure residential zones in the capital city, providing immediate proximity to top eateries, utility markets, and major highways.'
    },
    {
      q: 'Do you provide 24/7 check-in and support services?',
      a: 'Yes! We have an on-premises hospitality team operating 24 hours a day, 7 days a week. You can check-in at any hour of the day or night, and request warm water, tea, kitchen access, or cleaning services dynamically.'
    },
    {
      q: 'What is your billing structure and payment procedures?',
      a: 'We offer flexible non-A/C short stay rates starting from 3,000 PKR, with A/C double suites at 5,000 PKR to 7,000 PKR. Payments are accepted via direct bank transfers, Easypaisa, JazzCash, or Cash on Arrival. All direct inquiries on WhatsApp qualify for transparent custom pricing.'
    }
  ];

  const handleValidation = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Please provide your name';
    if (!phone.trim()) newErrors.phone = 'Contact number is required';
    if (!message.trim()) newErrors.message = 'Please type your inquiry message';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) {
      addToast('Please fill out all the required contact fields.', 'error');
      return;
    }

    // Since it is client only, let's open an email client or compose a quick WhatsApp message
    const emailSubject = `Contact Inquiry from ${name.trim()}`;
    const emailBody = `Name: ${name.trim()}\nPhone: ${phone.trim()}\nEmail: ${email.trim() || 'N/A'}\nMessage:\n${message.trim()}`;
    const mailtoUrl = `mailto:moonshah5250392@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    addToast('Thank you! Redirecting to compose your email inquiry...', 'success');
    
    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  const handleWhatsAppQuickChat = () => {
    const rawMsg = `Hi Shah G Guest House, I would like to make a general inquiry about room availabilities.`;
    window.open(`https://wa.me/923175250392?text=${encodeURIComponent(rawMsg)}`, '_blank');
  };

  return (
    <div className="bg-[#F7F7F7] text-[#0B1B3A] py-16 md:py-24" id="contact-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">Get In Touch</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mt-1 mb-4 text-[#0B1B3A]">Contact Booking Desk</h1>
          <p className="text-slate-600 font-light text-sm md:text-base">
            Have questions about room availability, group stay rates, or amenities? Connect directly with our front desk manager moonshah5250392@gmail.com or submit an inquiry.
          </p>
        </div>

        {/* Dual layout contact details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* 1. Details column */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0B1B3A] text-white rounded-3xl p-6 md:p-10 border border-white/5 shadow-xl">
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#D4AF37] mb-8 border-b border-white/10 pb-4">
                Office Information
              </h2>

              {/* Touch points list */}
              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 border border-[#D4AF37]/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-xs md:text-sm uppercase tracking-wider">Property Address</h4>
                    <p className="text-slate-300 text-sm font-light mt-1">
                      D Markaz, Gulberg Residencia, Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                {/* Call */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 border border-[#D4AF37]/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-xs md:text-sm uppercase tracking-wider">Phone / WhatsApp</h4>
                    <a href="tel:03175250392" className="text-[#D4AF37] text-sm md:text-base font-semibold block mt-1 hover:underline">
                      0317 5250392
                    </a>
                    <span className="text-slate-400 text-xxs font-light block mt-0.5">*International Dialing: +92 317 5250392</span>
                  </div>
                </div>

                {/* Mail */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 border border-[#D4AF37]/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-xs md:text-sm uppercase tracking-wider">Official Email</h4>
                    <a href="mailto:moonshah5250392@gmail.com" className="text-slate-300 text-sm hover:text-[#D4AF37] transition-colors mt-1 block">
                      moonshah5250392@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Instant Action Row */}
            <div className="pt-8 border-t border-white/10 mt-10 grid grid-cols-2 gap-3">
              <a 
                href="tel:03175250392"
                className="bg-white/5 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] py-3.5 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                id="contact-call-now"
              >
                <PhoneCall className="w-4 h-4" /> Call Desk
              </a>
              <button
                onClick={handleWhatsAppQuickChat}
                className="bg-[#D4AF37] hover:bg-[#bfa032] text-[#0B1B3A] py-3.5 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md"
                id="contact-whatsapp-chat"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </button>
            </div>
          </div>

          {/* 2. Inquiry form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#0B1B3A] mb-8 border-b border-slate-100 pb-4">
                Leave An Inquiry Message
              </h2>

              <form onSubmit={handleInquirySubmit} className="space-y-5">
                
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Zahid Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full bg-slate-50 border ${errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#D4AF37]'} text-slate-800 py-3.5 px-4 rounded-xl text-sm focus:outline-none transition-all`}
                    id="contact-form-name"
                  />
                  {errors.name && <p className="text-[10px] text-rose-500 font-semibold mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="e.g. 03175250392"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full bg-slate-50 border ${errors.phone ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#D4AF37]'} text-slate-800 py-3.5 px-4 rounded-xl text-sm focus:outline-none transition-all`}
                      id="contact-form-phone"
                    />
                    {errors.phone && <p className="text-[10px] text-rose-500 font-semibold mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g. guest@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                      id="contact-form-email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">Detailed Message *</label>
                  <textarea
                    placeholder="Specify stay requirements, dates inquiries, group check-in terms..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full bg-slate-50 border ${errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#D4AF37]'} text-slate-800 py-3.5 px-4 rounded-xl text-sm focus:outline-none transition-all`}
                    id="contact-form-message"
                  />
                  {errors.message && <p className="text-[10px] text-rose-500 font-semibold mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B1B3A] hover:bg-[#D4AF37] hover:text-[#0B1B3A] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  id="contact-form-submit"
                >
                  <Send className="w-4 h-4" /> Send Email Inquiry
                </button>

              </form>
            </div>
          </div>

        </div>

        {/* 3. Real interactive Google Maps Iframe wrapper */}
        <section className="bg-white rounded-3xl border border-slate-100 p-4 shadow-sm mb-20" id="google-maps-section">
          <div className="border-b border-slate-100 pb-4 mb-4">
            <h3 className="text-lg font-serif font-bold text-[#0B1B3A] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D4AF37]" /> Live Route Location Mapping
            </h3>
            <p className="text-slate-500 text-xxs mt-0.5">D Markaz, Gulberg Residencia, Islamabad, Pakistan.</p>
          </div>
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
            {/* Real embedded maps centered on Gulberg Residencia Islamabad */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13306.914300329035!2d73.16782335195313!3d33.6256952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb3cbf1f600f%3A0xea85fb0bc72ef0d2!2sGulberg%20Residencia%20Islamabad!5e0!3m2!1sen!2s!4v1719230501234!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shah G Guest House Map"
              id="contact-map-iframe"
            ></iframe>
          </div>
        </section>

        {/* 4. Help / FAQs section */}
        <section className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10" id="faqs-accordion-section">
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto text-[#D4AF37] mb-3">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#0B1B3A]">Frequent Guest Queries</h2>
            <p className="text-xs text-slate-500 mt-1">Get fast solutions to common check-in, safety, and tariff queries.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="border-b border-slate-100 pb-4 last:border-none last:pb-0"
                  id={`faq-item-${index}`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left py-3 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif font-bold text-slate-800 text-sm md:text-base pr-4">
                      {faq.q}
                    </span>
                    <span className="text-[#D4AF37] flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2 font-light">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};
