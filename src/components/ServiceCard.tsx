import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProjectList from './ProjectList';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  projects?: Array<{
    title: string;
    description: string;
    imageUrl?: string;
    link: string;
  }>;
}

export default function ServiceCard({ icon, title, description, features, projects }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <motion.div 
      layout
      className="group relative bg-gray-800/10 rounded-lg backdrop-blur-sm p-5 hover:scale-105 transition-all duration-300 overflow-hidden"
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
      <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />

      {/* Content */}
      <motion.div layout className="relative z-10">
        <div className="mb-4 h-56">{icon}</div>
        <h3 className="text-lg font-bold mb-2 text-cyan-400">{title}</h3>
        <p className="text-cyan-100 text-sm mb-3">{description}</p>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
        >
          <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
          <ChevronDown 
            size={16} 
            className={`transform transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4"
            >
              <ul className="space-y-2 mb-4">
                {features.map((feature, index) => (
                  <li key={index} className="text-cyan-200 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {projects && projects.length > 0 && (
                <div className="mt-4">
                  <button 
                    onClick={() => setShowProjects(!showProjects)}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    <span>View Projects</span>
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform duration-300 ${
                        showProjects ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {showProjects && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4"
                      >
                        <ProjectList projects={projects} isVisible={true} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}