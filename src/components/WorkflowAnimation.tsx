import { motion } from 'framer-motion';
import { Database, FileText, Users, Globe, Lock, Server, MessageSquare, Workflow } from 'lucide-react';

export default function WorkflowAnimation() {
  const iconSize = 20; // Reduced from 24
  const centerSize = 40; // Reduced from 48
  
  return (
    <div className="w-full h-56 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Central hub */}
        <motion.div
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg width="240" height="240" viewBox="0 0 240 240" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <circle cx="120" cy="120" r="100" className="stroke-cyan-400/20" fill="none" strokeWidth="1" />
            <circle cx="120" cy="120" r="60" className="stroke-cyan-400/30" fill="none" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Center icon */}
        <motion.div
          className="absolute z-10 bg-cyan-400/10 p-3 rounded-full backdrop-blur-sm"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Server size={centerSize} className="text-cyan-400" />
        </motion.div>

        {/* Orbiting icons */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
          const radius = 80; // Reduced from 100
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          const icons = [
            Database,
            FileText,
            Users,
            Globe,
            Lock,
            MessageSquare,
            Workflow,
            Server
          ];
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={angle}
              className="absolute"
              style={{
                left: '46%',
                top: '43%',
                x: x,
                y: y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="bg-cyan-400/10 p-1.5 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.2 }}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <Icon size={iconSize} className="text-cyan-400" />
              </motion.div>

              {/* Connection lines */}
              <motion.div
                className="absolute inset-0 z-[-1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <svg width="100%" height="100%" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <line
                    x1="50%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    className="stroke-cyan-400"
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}