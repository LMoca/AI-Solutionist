import { useState, useEffect } from 'react';
import { Briefcase, ExternalLink, Globe, Smartphone, Phone, MessageSquare, Workflow, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { fadeInUpVariant } from '../utils/animations';
import ServiceModal from './ServiceModal';

const services = [
  {
    id: 'websites',
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    title: "Website Creation",
    description: "Custom-built, responsive websites that capture your brand's essence and drive results",
    features: [
      "Modern, Sleek Design",
      "Mobile Responsive Layout", 
      "SEO Optimized Content",
      "Lightning Fast Loading",
      "Custom Brand Identity",
      "Lead Capture Integration",
      "Social Media Integration",
      "Analytics & Tracking",
      "Security & SSL Certificates",
      "Content Management System",
      "E-commerce Capabilities",
      "Contact Forms & CTAs"
    ],
    projects: portfolioData[0].projects
  },
  {
    id: 'mobile-apps',
    icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
    title: "Mobile App Development",
    description: "Custom mobile applications that deliver exceptional user experiences",
    features: [
      "iOS & Android Compatible",
      "Push Notifications",
      "Offline Functionality", 
      "Real-time Data Sync",
      "User Authentication",
      "Payment Gateway Integration",
      "GPS & Location Services",
      "Camera & Media Access",
      "Social Login Integration",
      "In-app Messaging",
      "Analytics Dashboard",
      "App Store Optimization"
    ],
    projects: portfolioData[4].projects
  },
  {
    id: 'ai-phone',
    icon: <Phone className="w-8 h-8 text-cyan-400" />,
    title: "AI Phone Calls",
    description: "AI phone assistants that streamline customer interactions & provide instant support",
    features: [
      "24/7 Call Handling",
      "Multi-Language Support",
      "Appointment Scheduling",
      "Order Taking & Processing",
      "Customer Support Queries",
      "Lead Qualification",
      "Follow-up Call Automation",
      "Call Recording & Analytics",
      "CRM Integration",
      "Natural Voice Synthesis",
      "Sentiment Analysis",
      "Call Transfer to Humans"
    ],
    projects: portfolioData[2].projects
  },
  {
    id: 'chatbots',
    icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
    title: "AI Chatbot Agents",
    description: "AI-powered chatbots that enhance customer engagement and support",
    features: [
      "24/7 Customer Support",
      "Multi-Language Conversations",
      "Instant FAQ Responses",
      "Lead Capture & Qualification",
      "Appointment Booking",
      "Product Recommendations",
      "Order Status Updates",
      "Ticket Creation & Tracking",
      "Human Handoff",
      "Personality Customization",
      "Website & Social Integration",
      "Performance Analytics"
    ],
    projects: portfolioData[1].projects
  },
  {
    id: 'automation',
    icon: <Workflow className="w-8 h-8 text-cyan-400" />,
    title: "Workflow Automation",
    description: "AI + Automated systems handling business tasks",
    features: [
      "Data Entry Automation",
      "Email Marketing Campaigns",
      "Invoice & Payment Processing",
      "Inventory Management",
      "Customer Onboarding",
      "Report Generation",
      "Social Media Posting",
      "Lead Nurturing Sequences",
      "Task Scheduling",
      "Document Processing",
      "Database Management",
      "Integration with Existing Tools"
    ],
    projects: portfolioData[3].projects
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [projectCarouselIndex, setProjectCarouselIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectedServiceData = services.find(service => service.id === selectedService);
  
  // Handle service selection - show modal on mobile, update state on desktop
  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setProjectCarouselIndex(0);
    
    if (isMobile) {
      setIsModalOpen(true);
    }
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Carousel navigation functions
  const nextProjects = () => {
    if (selectedServiceData?.projects) {
      const maxIndex = Math.max(0, selectedServiceData.projects.length - 2);
      setProjectCarouselIndex(prev => Math.min(prev + 2, maxIndex));
    }
  };

  const prevProjects = () => {
    setProjectCarouselIndex(prev => Math.max(prev - 2, 0));
  };

  const setProjectIndex = (index: number) => {
    setProjectCarouselIndex(index);
  };

  const getCurrentProjects = () => {
    if (!selectedServiceData?.projects) return [];
    return selectedServiceData.projects.slice(projectCarouselIndex, projectCarouselIndex + 2);
  };

  const canGoNext = selectedServiceData?.projects && projectCarouselIndex + 2 < selectedServiceData.projects.length;
  const canGoPrev = projectCarouselIndex > 0;

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          className="text-center mb-12"
        >
          <h2 className="inline-flex items-center gap-4 text-4xl md:text-4xl font-bold bg-clip-text text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,71,255,0.8)] [text-shadow:_0_0_5px_rgb(53_71_255_/_60%)]">
            <Briefcase className="w-12 h-12 text-cyan-400" />
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Service Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleServiceSelect(service.id)}
                className={`w-full text-left p-6 rounded-xl backdrop-blur-sm transition-all duration-300 relative group overflow-hidden ${
                  selectedService === service.id && !isMobile
                    ? 'bg-cyan-500/20 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-gray-800/20 border border-gray-700/50 hover:bg-gray-700/30 hover:border-cyan-400/30'
                }`}
              >
                {/* Background grid effect */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-16 grid-rows-8 h-full">
                    {Array.from({ length: 128 }).map((_, i) => (
                      <div key={i} className="border border-cyan-400/20" />
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-xl blur-xl opacity-10 transition-opacity duration-300 ${
                  selectedService === service.id && !isMobile ? 'bg-cyan-400 opacity-20' : 'bg-cyan-400 group-hover:opacity-15'
                }`} />

                <div className="relative z-10 flex items-center gap-4">
                  {/* Service Icon */}
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-cyan-400/10 rounded-xl">
                    {service.icon}
                  </div>

                  {/* Service Content */}
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      selectedService === service.id && !isMobile ? 'text-cyan-300' : 'text-cyan-400'
                    }`}>
                      {service.title}
                    </h4>
                    <p className="text-cyan-200 text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Mobile indicator */}
                  {isMobile && (
                    <div className="flex-shrink-0 text-cyan-400/60">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right Column - Benefits and Projects (Desktop Only) */}
          {!isMobile && (
            <div className="lg:sticky lg:top-24 h-fit">
              <AnimatePresence mode="wait">
                {selectedService && selectedServiceData ? (
                  <motion.div
                    key={selectedService}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Upper Section - Benefits */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden">
                      {/* Background grid effect */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="grid grid-cols-12 grid-rows-8 h-full">
                          {Array.from({ length: 96 }).map((_, i) => (
                            <div key={i} className="border border-cyan-400/20" />
                          ))}
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-xl opacity-5" />

                      <div className="relative z-10">
                        <h4 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                          Key Benefits
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {selectedServiceData.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-2 py-1"
                            >
                              <span className="text-cyan-200 text-xs">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Lower Section - Projects */}
                    {selectedServiceData.projects && selectedServiceData.projects.length > 0 && (
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden">
                        {/* Background grid effect */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="grid grid-cols-12 grid-rows-8 h-full">
                            {Array.from({ length: 96 }).map((_, i) => (
                              <div key={i} className="border border-cyan-400/20" />
                            ))}
                          </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-xl opacity-5" />

                        <div className="relative z-10">
                          <h4 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                            Client Projects
                          </h4>
                          
                          {/* Carousel Container */}
                          <div className="relative">
                            <div className="overflow-hidden rounded-lg">
                              <motion.div
                                key={projectCarouselIndex}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 gap-4"
                              >
                                {getCurrentProjects().map((project, index) => (
                                  <motion.div
                                    key={`${projectCarouselIndex}-${index}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="hover:bg-gray-800/20 transition-all duration-300 group rounded-lg p-4"
                                  >
                                    <div className="flex items-center gap-4">
                                      {/* Project Logo */}
                                      {project.imageUrl && (
                                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700/50">
                                          <img 
                                            src={project.imageUrl} 
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                          />
                                        </div>
                                      )}
                                      
                                      {/* Project Details */}
                                      <div className="flex-1">
                                        <h5 className="font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors text-base">
                                          {project.title}
                                        </h5>
                                        <p className="text-cyan-200 text-sm mb-3 leading-relaxed">
                                          {project.description}
                                        </p>
                                        {project.links && project.links.length > 0 && (
                                          <div className="flex flex-wrap gap-2">
                                            {project.links.map((link, linkIndex) => (
                                              <a
                                                key={linkIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors bg-cyan-400/10 hover:bg-cyan-400/20 px-3 py-1.5 rounded-md"
                                              >
                                                {link.label}
                                                <ExternalLink size={14} />
                                              </a>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </div>

                            {/* Navigation Arrows */}
                            {selectedServiceData.projects.length > 2 && (
                              <>
                                {canGoPrev && (
                                  <button
                                    onClick={prevProjects}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm rounded-full p-2 text-cyan-400 hover:text-cyan-300 transition-all duration-200 z-10"
                                    aria-label="Previous projects"
                                  >
                                    <ChevronLeft size={20} />
                                  </button>
                                )}

                                {canGoNext && (
                                  <button
                                    onClick={nextProjects}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm rounded-full p-2 text-cyan-400 hover:text-cyan-300 transition-all duration-200 z-10"
                                    aria-label="Next projects"
                                  >
                                    <ChevronRight size={20} />
                                  </button>
                                )}
                              </>
                            )}
                          </div>
                          {/* Project Counter */}
                          {selectedServiceData.projects.length > 2 && (
                            <div className="mt-4 text-center">
                              <div className="text-xs text-cyan-400">
                                Showing {projectCarouselIndex + 1}-{Math.min(projectCarouselIndex + 2, selectedServiceData.projects.length)} of {selectedServiceData.projects.length}
                              </div>
                              
                              {/* Dots Indicator */}
                              <div className="flex justify-center gap-1 mt-2">
                                {Array.from({ length: Math.ceil(selectedServiceData.projects.length / 2) }).map((_, index) => {
                                  const pageIndex = index * 2;
                                  return (
                                    <button
                                      key={index}
                                      onClick={() => setProjectCarouselIndex(pageIndex)}
                                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                        pageIndex === projectCarouselIndex
                                          ? 'bg-cyan-400 scale-125'
                                          : 'bg-cyan-400/30 hover:bg-cyan-400/50'
                                      }`}
                                      aria-label={`Go to projects ${pageIndex + 1}-${Math.min(pageIndex + 2, selectedServiceData.projects.length)}`}
                                    />
                                  );
                                })}
                                </div>
                            </div>
                          )}
                          </div>
                        </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="text-xl font-bold text-cyan-400 mb-2">Select a Service</h4>
                    <p className="text-cyan-200">
                      Choose a service from the left to view its benefits and client projects.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        serviceData={selectedServiceData}
        projectCarouselIndex={projectCarouselIndex}
        onNextProjects={nextProjects}
        onPrevProjects={prevProjects}
        onSetProjectIndex={setProjectIndex}
      />
    </section>
  );
}