import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function PhoneAnimation() {
  return (
    <div className="w-full h-72 md:h-72 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Robot Body */}
        <motion.div
          className="relative z-20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-cyan-400 rounded-2xl blur-xl opacity-20" />
            
            {/* Head */}
            <motion.div
              className="relative rounded-2xl w-28 h-16 bg-cyan-400/10 backdrop-blur-sm"
              animate={{ boxShadow: ['0 0 20px #22d3ee', '0 0 40px #22d3ee', '0 0 20px #22d3ee'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Antenna */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-6 bg-cyan-400/50 rounded-full">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400/50 rounded-full" />
              </div>
              
              {/* Eyes Container */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6">
                {/* Left Eye */}
                <motion.div
                  className="w-4 h-4 rounded-full bg-cyan-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Right Eye */}
                <motion.div
                  className="w-4 h-4 rounded-full bg-cyan-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Phone Icon Bubble */}
        <motion.div
          className="relative bg-cyan-400/10 backdrop-blur-sm rounded-full p-4 ml-6 border-none"
          animate={{ boxShadow: ['0 0 20px #22d3ee', '0 0 40px #22d3ee', '0 0 20px #22d3ee'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Phone className="w-8 h-8 text-cyan-400 transform -scale-x-100" />
        </motion.div>
      </div>
    </div>
  );
}