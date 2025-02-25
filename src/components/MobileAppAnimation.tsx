import { motion } from 'framer-motion';
import { Smartphone, AppWindow, Layers, Settings } from 'lucide-react';

export default function MobileAppAnimation() {
  return (
    <div className="w-full h-56 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Phone frame */}
        <motion.div
          className="relative z-20 bg-cyan-400/10 backdrop-blur-sm rounded-3xl w-32 h-56 p-3"
          animate={{ 
            boxShadow: ['0 0 20px #22d3ee', '0 0 40px #22d3ee', '0 0 20px #22d3ee'],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Screen content */}
          <div className="relative h-full w-full bg-cyan-950/30 rounded-2xl overflow-hidden">
            {/* App icons grid */}
            <div className="grid grid-cols-3 gap-2 p-2">
              {[AppWindow, Layers, Settings, Smartphone].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="bg-cyan-400/20 p-1.5 rounded-lg"
                  animate={{
                    y: [0, -3, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                </motion.div>
              ))}
            </div>

            {/* Animated bars */}
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <div className="space-y-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-0.5 bg-cyan-400/30 rounded-full"
                    animate={{
                      width: ['0%', '100%', '0%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <motion.div
            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-cyan-400/50 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Floating elements - contained within phone width */}
        {[45, 135, 225, 315].map((angle, index) => {
          const radius = 60; // Reduced radius to keep elements closer to phone
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={angle}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                x: x,
                y: y
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            >
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}