import { motion } from 'framer-motion';

export default function NewChatbotIcon() {
  return (
    <div className="w-full h-72 md:h-72 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-md flex items-center justify-center gap-5">
          {/* Bot face container */}
          <motion.div
            className="relative z-20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-20" />
              {/* Antenna */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-6 bg-cyan-400/50 rounded-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400/50 rounded-full" />
            </div>
              <motion.div
                className="relative w-28 h-28 rounded-full bg-cyan-400/10 backdrop-blur-sm flex items-center justify-center"
                animate={{ boxShadow: ['0 0 20px #22d3ee', '0 0 40px #22d3ee', '0 0 20px #22d3ee'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                
                <div className="flex flex-col items-center gap-4">
                  {/* Eyes */}
                  <div className="flex gap-4">
                    <motion.div
                      className="w-4 h-4 bg-cyan-400 rounded-full"
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-4 h-4 bg-cyan-400 rounded-full"
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  {/* Smile */}
                  <motion.div
                    className="w-12 h-2 bg-cyan-400 rounded-full"
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Chat dots container */}
          <motion.div
            className="relative bg-cyan-400/10 backdrop-blur-sm rounded-xl px-3 py-4"
            animate={{ boxShadow: ['0 0 20px #22d3ee', '0 0 40px #22d3ee', '0 0 20px #22d3ee'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-5 h-5 bg-cyan-400 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}