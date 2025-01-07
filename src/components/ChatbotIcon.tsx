import { motion } from 'framer-motion';

export default function ChatbotIcon() {
  return (
    <div className="flex items-center justify-center w-full h-72 md:h-72 rounded-lg">
      <div className="flex items-center gap-6">
        <div className="relative w-40 h-40 rounded-full bg-[#00B2FF] flex items-center justify-center">
          <div className="w-32 h-32">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 8C16 8 16 8 16 8C16 8 24 8 24 8C24 8 24 24 24 24C24 24 8 24 8 24C8 24 8 8 8 8C8 8 16 8 16 8Z"
                fill="white"
              />
              <circle cx="12" cy="16" r="2" fill="#00B2FF"/>
              <circle cx="20" cy="16" r="2" fill="#00B2FF"/>
              <path
                d="M16 4L16 8M8 8L8 24L24 24L24 8L8 8ZM16 20L16 24M8 12L6 12M8 16L6 16M8 20L6 20M24 12L26 12M24 16L26 16M24 20L26 20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        
        <div className="relative bg-gray-800/50 rounded-3xl p-4 min-w-[100px]">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-cyan-400 rounded-full"
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
        </div>
      </div>
    </div>
  );
}