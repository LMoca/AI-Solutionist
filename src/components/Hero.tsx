import { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import BookingModal from './BookingModal';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="min-h-screen relative flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img 
              src="/LM Logo.png" 
              alt="LM Logo" 
              className="w-32 h-32 mx-auto mix-blend-screen"
            />
          </div>
          <h1 
            className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,7,255,0.8)] [text-shadow:_0_0_20px_rgb(0_255_255_/_60%)]">
              Focus on Your Business Purpose
            </span>
          </h1>
          <p 
            className={`text-cyan-400 text-xl md:text-1xl mb-12 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We Build Custom AI Systems That Automate Your Business Challenges
          </p>
          
          {/* Action Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto sm:min-w-[200px] justify-center"
            >
              <Calendar size={20} className="group-hover:scale-110 transition-transform duration-200" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}