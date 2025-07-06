import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  Zap, 
  TrendingDown, 
  TrendingUp, 
  MessageSquare, 
  Phone,
  Cog,
  Share2,
  Globe,
  Smartphone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { fadeInUpVariant } from '../utils/animations';

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  problems: string[];
  solutions: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'chatbots-phone',
    title: 'AI Chatbots & Phone Callers',
    icon: <MessageSquare className="w-6 h-6" />,
    problems: [
      "Missed customer calls during off-hours",
      "Long wait times frustrating customers",
      "Staff overwhelmed with repetitive inquiries",
      "Inconsistent information provided to customers",
      "High cost of hiring additional phone staff",
      "Language barriers with diverse customers",
      "No follow-up on missed opportunities",
      "Poor lead qualification and routing"
    ],
    solutions: [
      "24/7 AI phone assistants never miss a call",
      "Instant responses with zero wait times",
      "AI handles FAQs, freeing staff for complex tasks",
      "Consistent, accurate information every time",
      "Fraction of the cost of human staff",
      "Multi-language support for global reach",
      "Automated follow-ups and appointment scheduling",
      "Smart lead scoring and priority routing"
    ]
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    icon: <Cog className="w-6 h-6" />,
    problems: [
      "Hours spent on manual data entry daily",
      "Human errors in repetitive processes",
      "Delayed task completion and bottlenecks",
      "Inconsistent process execution",
      "High operational costs for routine tasks",
      "Staff burnout from monotonous work",
      "Difficulty scaling operations efficiently",
      "Lost productivity from context switching"
    ],
    solutions: [
      "Automated data processing in seconds",
      "Error-free execution with 99.9% accuracy",
      "Real-time task completion without delays",
      "Standardized processes every single time",
      "Dramatically reduced operational expenses",
      "Staff focused on high-value creative work",
      "Instant scaling without hiring overhead",
      "Seamless workflow integration and efficiency"
    ]
  },
  {
    id: 'websites',
    title: 'Website Creation',
    icon: <Globe className="w-6 h-6" />,
    problems: [
      "Outdated websites driving customers away",
      "Poor mobile experience losing mobile traffic",
      "Slow loading times increasing bounce rates",
      "Lack of SEO optimization reducing visibility",
      "No lead capture mechanisms in place",
      "Expensive ongoing maintenance costs",
      "Generic templates lacking brand identity",
      "Poor user experience reducing conversions"
    ],
    solutions: [
      "Modern, attractive designs that convert visitors",
      "Fully responsive design optimized for all devices",
      "Lightning-fast loading for better user experience",
      "Built-in SEO optimization for higher rankings",
      "Integrated lead capture and conversion tools",
      "Low-maintenance, self-updating systems",
      "Custom designs reflecting unique brand identity",
      "Optimized user journeys maximizing conversions"
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Automation',
    icon: <Share2 className="w-6 h-6" />,
    problems: [
      "Inconsistent posting schedules",
      "Time-consuming content creation and scheduling",
      "Poor engagement due to delayed responses",
      "Difficulty maintaining brand voice across platforms",
      "Manual monitoring of mentions and comments",
      "Ineffective hashtag and timing strategies",
      "Limited analytics and performance tracking",
      "Overwhelming management of multiple accounts"
    ],
    solutions: [
      "Automated posting with perfect timing",
      "AI-generated content matching your brand",
      "Instant responses maintaining engagement",
      "Consistent brand voice across all platforms",
      "Real-time monitoring and sentiment analysis",
      "Optimized hashtags and peak-time posting",
      "Advanced analytics with actionable insights",
      "Centralized management of all social accounts"
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    icon: <Smartphone className="w-6 h-6" />,
    problems: [
      "No mobile presence missing mobile-first customers",
      "Competitors gaining advantage with apps",
      "Limited customer engagement opportunities",
      "No push notification capabilities",
      "Difficult customer data collection",
      "Poor customer retention rates",
      "Limited offline functionality for users",
      "Complex development costs and timelines"
    ],
    solutions: [
      "Professional mobile apps reaching mobile users",
      "Competitive advantage with cutting-edge features",
      "Enhanced engagement through app interactions",
      "Direct customer communication via push notifications",
      "Rich customer insights and behavior analytics",
      "Improved retention through app convenience",
      "Offline capabilities for uninterrupted service",
      "Cost-effective development with rapid deployment"
    ]
  }
];

export default function ProblemSolutionSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  
  const nextCategory = () => {
    setSelectedCategory((prev) => (prev + 1) % serviceCategories.length);
  };

  const prevCategory = () => {
    setSelectedCategory((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length);
  };

  const currentCategory = serviceCategories[selectedCategory];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,71,255,0.8)] [text-shadow:_0_0_5px_rgb(53_71_255_/_60%)]">
            Business Owner or Business Operator?
          </h2>
          <p className="pt-4 text-cyan-400 text-xl">
            What's eating your time and profits, and how AI automation fixes them
          </p>
        </motion.div>

        {/* Service Category Buttons Row */}
        <div className="mb-12">
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gray-800/20 backdrop-blur-sm w-48 justify-center ${
                    selectedCategory === index
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105 border border-cyan-400/50'
                      : 'text-cyan-300 hover:text-cyan-100 hover:bg-gray-700/30 border border-transparent'
                  }`}
                >
                  <span className="text-[#67e8f9]">{category.icon}</span>
                  <span className="text-sm">{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation with Arrows */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between">
              <button
                onClick={prevCategory}
                className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full text-cyan-400 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex items-center gap-3 bg-gray-800/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="text-[#67e8f9]">{currentCategory.icon}</span>
                <span className="text-cyan-300 font-medium text-center">
                  {currentCategory.title}
                </span>
              </div>
              
              <button
                onClick={nextCategory}
                className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full text-cyan-400 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Mobile Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {serviceCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    selectedCategory === index
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-cyan-400/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Columns with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-4 lg:gap-8"
          >
              {/* Problem Column - Middle */}
              <div className="relative group">
                <div className="bg-red-900/10 backdrop-blur-sm rounded-lg p-4 lg:p-8 transition-all duration-300 h-full">
                  {/* Background grid effect */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-8 grid-rows-8 h-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-red-400/20" />
                      ))}
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-red-400 rounded-lg blur-xl opacity-5 group-hover:opacity-10 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3 mb-4 lg:mb-6 text-center lg:text-left">
                      <div className="p-2 lg:p-3 bg-red-500/20 rounded-full w-fit mx-auto lg:mx-0">
                        <AlertTriangle className="w-6 h-6 lg:w-8 lg:h-8 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-2xl font-bold text-red-400 mb-1">Current Challenges</h3>
                        <div className="flex items-center gap-1 lg:gap-2 text-red-300">
                          <TrendingDown className="w-3 h-3 lg:w-4 lg:h-4" />
                          <span className="text-xs lg:text-sm">Without AI Solutions</span>
                        </div>
                      </div>
                    </div>
                  
                    <ul className="space-y-2 lg:space-y-3">
                      {currentCategory.problems.map((problem, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start text-red-200"
                        >
                          <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-red-400 rounded-full mr-2 lg:mr-3 mt-1.5 lg:mt-2 flex-shrink-0" />
                          <span className="text-xs lg:text-sm leading-relaxed">{problem}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solution Column - Right */}
              <div className="relative group">
                <div className="bg-green-900/10 backdrop-blur-sm rounded-lg p-4 lg:p-8 transition-all duration-300 h-full">
                  {/* Background grid effect */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-8 grid-rows-8 h-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-green-400/20" />
                      ))}
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-green-400 rounded-lg blur-xl opacity-5 group-hover:opacity-10 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3 mb-4 lg:mb-6 text-center lg:text-left">
                      <div className="p-2 lg:p-3 bg-green-500/20 rounded-full w-fit mx-auto lg:mx-0">
                        <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-2xl font-bold text-green-400 mb-1">With AI Solutions</h3>
                        <div className="flex items-center gap-1 lg:gap-2 text-green-300">
                          <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4" />
                          <span className="text-xs lg:text-sm">Exponential Growth</span>
                        </div>
                      </div>
                    </div>
                  
                    <ul className="space-y-2 lg:space-y-3">
                      {currentCategory.solutions.map((solution, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start text-green-200"
                        >
                          <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full mr-2 lg:mr-3 mt-1.5 lg:mt-2 flex-shrink-0" />
                          <span className="text-xs lg:text-sm leading-relaxed">{solution}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}