import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ExternalLink, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { fadeInUpVariant } from '../utils/animations';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  projectURL?: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Working with Luigi was an outstanding experience. He was easy to work with, incredibly efficient, and executed my website vision perfectly within 48 hours! He kept me involved throughout the process, sharing screenshots and even hosting live chats to show me updates in real time, ensuring everything was exactly how I wanted. Luigi's innovative work will truly enhance my business, creating a better experience for my customers, and making my online brand as strong as it can be. If I ever need more websites or adjustments in the future, Luigi will be my go-to. Thank you, Luigi, for a fantastic job!",
    author: "RJ",
    role: "Founder, RJ's Beginner Crypto Services 101",
    projectURL: "https://reliable-brioche-4dced6.netlify.app/",
    image: "./assets/RJCryptoLogo.jpg"
  },
  {
    content: "My website was outdated and wasn't getting many leads. Luigi completely revamped my website, not only making it visually appealing but highly functional. The biggest game-changer was the AI lead capture agent he integrated within 2 hours. After 4 months, I began seeing an increase in customer inquiries! 25+ client captures! Now, my website with AI integration works for me 24/7, engaging visitors, answering their questions, and turning them into paying clients. Luigi, my business hasn't seen this level of turnover on a website. Thank you!",
    author: "Giuseppe Moca",
    role: "Founder, European & Foreign Motor Works",
    projectURL: "https://www.europeanforeignmotorworks.com/",
    image: "./assets//EFMW Logo.png"
  },
  {
    content: "Luigi created the most beautiful, functional website for my fitness business! My NEW website is officially LIVE and I've poured my heart into this project. Now my clients can learn about my story, browse my 1:1 coaching & fitness services, schedule consultations, subscribe to my Fit Tips newsletter, and download FREE workout guides. Luigi delivered everything I envisioned and more - this is now the go-to hub for everything Fit by Mi. The design is stunning and perfectly represents my brand!",
    author: "Michelle Oliveira",
    role: "Founder, FitByMi",
    projectURL: "https://fitbymi.net/",
    image: "/assets/tempLogoFitByMi.png"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 2;
  const maxIndex = Math.max(0, testimonials.length - testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => Math.min(prev + testimonialsPerPage, maxIndex));
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => Math.max(prev - testimonialsPerPage, 0));
  };

  const getCurrentTestimonials = () => {
    return testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          className="text-center mb-12"
        >
          <h2 className="inline-flex items-center gap-4 text-6xl md:text-6xl font-bold bg-clip-text text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,71,255,0.8)] [text-shadow:_0_0_5px_rgb(53_71_255_/_60%)]">
            <MessageCircle className="w-12 h-12 text-cyan-400" />
            Client Testimonials
          </h2>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
        >
          <div className="max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="relative">
              {/* Main Testimonials Display */}
              <div className="overflow-hidden rounded-2xl">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {getCurrentTestimonials().map((testimonial, index) => (
                    <TestimonialCard key={currentIndex + index} testimonial={testimonial} />
                  ))}
                </motion.div>
              </div>

              {/* Navigation Buttons */}
              {currentIndex > 0 && (
                <button
                  onClick={prevTestimonials}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm rounded-full p-3 text-cyan-400 hover:text-cyan-300 transition-all duration-200 z-10"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {currentIndex < maxIndex && (
                <button
                  onClick={nextTestimonials}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm rounded-full p-3 text-cyan-400 hover:text-cyan-300 transition-all duration-200 z-10"
                  aria-label="Next testimonials"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => {
                const pageIndex = index * testimonialsPerPage;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(pageIndex)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      pageIndex === currentIndex
                        ? 'bg-cyan-400 scale-125'
                        : 'bg-cyan-400/30 hover:bg-cyan-400/50'
                    }`}
                    aria-label={`Go to testimonials ${pageIndex + 1}-${Math.min(pageIndex + testimonialsPerPage, testimonials.length)}`}
                  />
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 max-w-md mx-auto">
              <div className="h-1 bg-cyan-400/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + testimonialsPerPage) / testimonials.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between text-sm text-cyan-400 mt-2">
                <span>{currentIndex + 1}-{Math.min(currentIndex + testimonialsPerPage, testimonials.length)}</span>
                <span>{testimonials.length}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      variants={fadeInUpVariant}
      initial="hidden"
      animate="visible"
      className="group relative bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 min-h-[400px] flex flex-col"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-cyan-400/20" />
          ))}
        </div>
      </div>

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-cyan-400 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header row with logo, name, and details */}
        <div className="flex items-center gap-4 mb-6">
          {testimonial.image && (
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-400/20">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          <div className="flex-grow">
            <h3 className="font-semibold text-xl text-cyan-400">
              {testimonial.author}
            </h3>
            <p className="text-cyan-200 text-base">
              {testimonial.role}
            </p>
            {testimonial.projectURL && (
              <a
                href={testimonial.projectURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200 mt-1"
              >
                View Project <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Quote icon */}
        <div className="absolute top-4 right-4">
          <div className="p-3 bg-cyan-500/10 backdrop-blur-sm rounded-full">
            <Quote className="w-6 h-6 text-cyan-400" />
          </div>
        </div>

        {/* Testimonial content */}
        <div className="flex-grow flex items-center">
          <p className="text-cyan-200 text-base leading-relaxed">
            "{testimonial.content}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}