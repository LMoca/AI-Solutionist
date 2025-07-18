import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const websites = [
  "/assets/aiSolutionistCurrentWebsite.png",
  "/assets/fitByMiWebsite.png",
  "/assets/mateoInsuranceWebsite.png"
];

export default function WebsiteScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion || !scrollRef.current) return;

    const scrollElement = scrollRef.current;
    const cloneItems = () => {
      const items = scrollElement.querySelectorAll('.website-preview');
      items.forEach(item => {
        const clone = item.cloneNode(true) as HTMLElement;
        scrollElement.appendChild(clone);
      });
    };

    cloneItems();
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-72 rounded-lg overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          animate={{ boxShadow: ['0 0 20px #22d3ee', '0 0 40px #22d3ee', '0 0 20px #22d3ee'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={websites[0]} 
            alt="Website Preview" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-cyan-400/10 backdrop-blur-sm" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full h-72 overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex gap-4 py-4 relative z-10 animate-scroll"
        style={{
          width: 'fit-content',
        }}
      >
        {websites.map((url, index) => (
          <motion.div
            key={index}
            className="website-preview flex-none w-72 h-56 rounded-lg overflow-hidden relative group"
            whileHover={{ scale: 1.05 }}
            animate={{ boxShadow: ['0 0 20px #22d3ee', '0 0 40px #22d3ee', '0 0 20px #22d3ee'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={url}
              alt={`Website Preview ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <motion.div 
              className="absolute inset-0 bg-cyan-400/10 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}