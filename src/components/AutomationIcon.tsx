import { motion } from 'framer-motion';

export default function AutomationIcon() {
  return (
    <div className="flex items-center justify-center w-full h-72 md:h-72">
      <div className="relative w-48 h-full">
        {/* Main rotating cog */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="35" className="fill-[#00B2FF]" />
            <circle cx="50" cy="50" r="15" className="bg-gray-800/10" />
            {/* Cog teeth */}
            {Array.from({ length: 8 }).map((_, i) => (
              <rect
                key={i}
                x="46"
                y="0"
                width="16"
                height="20"
                className="fill-[#00B2FF]"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
          </svg>
        </motion.div>

        {/* Connection points and paths */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          {/* Connection paths */}
          {[45, 135, 225, 270, 315].map((angle, i) => (
            <g key={i}>
              <motion.path
                d={`M 100 100 L ${100 + Math.cos(angle * Math.PI / 180) * 120} ${100 + Math.sin(angle * Math.PI / 180) * 120}`}
                className="stroke-cyan-400"
                strokeWidth="5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1
                }}
              />
              {/* Endpoint circles */}
              <circle
                cx={100 + Math.cos(angle * Math.PI / 180) * 120}
                cy={100 + Math.sin(angle * Math.PI / 180) * 120}
                r="10"
                className="fill-cyan-400"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}