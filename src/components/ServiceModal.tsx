import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ServiceData {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  projects: Project[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceData: ServiceData | null;
  projectCarouselIndex: number;
  onNextProjects: () => void;
  onPrevProjects: () => void;
  onSetProjectIndex: (index: number) => void;
}

export default function ServiceModal({ 
  isOpen, 
  onClose, 
  serviceData, 
  projectCarouselIndex,
  onNextProjects,
  onPrevProjects,
  onSetProjectIndex
}: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!serviceData) return null;

  const getCurrentProjects = () => {
    if (!serviceData.projects) return [];
    return serviceData.projects.slice(projectCarouselIndex, projectCarouselIndex + 2);
  };

  const canGoNext = serviceData.projects && projectCarouselIndex + 2 < serviceData.projects.length;
  const canGoPrev = projectCarouselIndex > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 500 }}
            className="w-full max-h-[85vh] bg-gray-900/95 backdrop-blur-sm rounded-t-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-400/20 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-cyan-400/10 rounded-lg">
                  {serviceData.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400">{serviceData.title}</h3>
                  <p className="text-cyan-200 text-xs">{serviceData.description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-80px)]">
              <div className="p-4 space-y-6">
                {/* Benefits Section */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 relative overflow-hidden">
                  {/* Background grid effect */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-8 grid-rows-6 h-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="border border-cyan-400/20" />
                      ))}
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-xl opacity-5" />

                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      Key Benefits
                    </h4>
                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                      {serviceData.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-1.5 py-0.5 w-[calc(50%-4px)]"
                        >
                          <div className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0 mt-1.5"></div>
                          <span className="text-cyan-200 text-xs leading-tight">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Projects Section */}
                {serviceData.projects && serviceData.projects.length > 0 && (
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 relative overflow-hidden">
                    {/* Background grid effect */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="grid grid-cols-8 grid-rows-6 h-full">
                        {Array.from({ length: 48 }).map((_, i) => (
                          <div key={i} className="border border-cyan-400/20" />
                        ))}
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-xl opacity-5" />

                    <div className="relative z-10">
                      <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        Client Projects
                      </h4>
                      
                      {/* Projects Display */}
                      <div className="space-y-4">
                        {getCurrentProjects().map((project, index) => (
                          <motion.div
                            key={`${projectCarouselIndex}-${index}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/20 rounded-lg p-4 hover:bg-gray-800/30 transition-all duration-300"
                          >
                            <div className="flex items-center gap-4">
                              {/* Project Logo */}
                              {project.imageUrl && (
                                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700/50">
                                  <img 
                                    src={project.imageUrl} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                              
                              {/* Project Details */}
                              <div className="flex-1">
                                <h5 className="font-bold text-cyan-300 mb-2 text-base">
                                  {project.title}
                                </h5>
                                <p className="text-cyan-200 text-sm mb-3 leading-relaxed">
                                  {project.description}
                                </p>
                                {project.link && (
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors bg-cyan-400/10 hover:bg-cyan-400/20 px-3 py-1.5 rounded-md"
                                  >
                                    View Project
                                    <ExternalLink size={14} />
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Navigation for Projects */}
                      {serviceData.projects.length > 2 && (
                        <div className="mt-6">
                          <div className="flex items-center justify-between mb-4">
                            <button
                              onClick={onPrevProjects}
                              disabled={!canGoPrev}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                canGoPrev
                                  ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                                  : 'bg-gray-700/20 text-gray-500 cursor-not-allowed'
                              }`}
                            >
                              <ChevronLeft size={16} />
                              Previous
                            </button>
                            
                            <div className="text-xs text-cyan-400">
                              {projectCarouselIndex + 1}-{Math.min(projectCarouselIndex + 2, serviceData.projects.length)} of {serviceData.projects.length}
                            </div>
                            
                            <button
                              onClick={onNextProjects}
                              disabled={!canGoNext}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                canGoNext
                                  ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                                  : 'bg-gray-700/20 text-gray-500 cursor-not-allowed'
                              }`}
                            >
                              Next
                              <ChevronRight size={16} />
                            </button>
                          </div>
                          
                          {/* Dots Indicator */}
                          <div className="flex justify-center gap-1">
                            {Array.from({ length: Math.ceil(serviceData.projects.length / 2) }).map((_, index) => {
                              const pageIndex = index * 2;
                              return (
                                <button
                                  key={index}
                                  onClick={() => onSetProjectIndex(pageIndex)}
                                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    pageIndex === projectCarouselIndex
                                      ? 'bg-cyan-400 scale-125'
                                      : 'bg-cyan-400/30 hover:bg-cyan-400/50'
                                  }`}
                                />
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Safe area for mobile gestures */}
                <div className="h-4"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}