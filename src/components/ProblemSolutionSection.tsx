import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Zap, TrendingDown, TrendingUp, MessageSquare, Phone, Cog, Share2, Globe, Smartphone, ChevronLeft, ChevronRight, Clock, DollarSign, Users, Target, BarChart3, Shield, PhoneOff, CheckCircle, XCircle, Frown, Smile, Timer, Repeat, AlertCircle, ThumbsDown, ThumbsUp, Battery, BatteryLow, Zap as ZapIcon, TrendingUp as TrendingUpIcon, Search, Eye, Gauge, RefreshCw, Languages, Calendar, Mail, MessageCircle, Activity, BarChart, TrendingDown as TrendingDownIcon, UserX, UserCheck, Lock, Unlock, ShieldCheck, Wifi, WifiOff, Server, ServerOff, Cpu, Cpu as CpuOff, Database, Database as DatabaseOff } from 'lucide-react';
import { fadeInUpVariant } from '../utils/animations';

interface ProblemCategory {
  title: string;
  items: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
}

interface SolutionCategory {
  title: string;
  items: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  problemCategories: ProblemCategory[];
  solutionCategories: SolutionCategory[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'chatbots-phone',
    title: 'AI Chatbots & Phone Callers',
    icon: <MessageSquare className="w-6 h-6" />,
    problemCategories: [
      {
        title: 'Time & Availability',
        items: [
          { icon: <PhoneOff className="w-5 h-5" />, text: 'Missed Calls' },
          { icon: <Timer className="w-5 h-5" />, text: 'Long Waits' },
          { icon: <Clock className="w-5 h-5" />, text: 'No Weekends' }
        ]
      },
      {
        title: 'Costs & Efficiency',
        items: [
          { icon: <DollarSign className="w-5 h-5" />, text: 'Expensive Staff' },
          { icon: <Repeat className="w-5 h-5" />, text: 'Repetitive FAQs' },
          { icon: <UserX className="w-5 h-5" />, text: 'Lost Leads' }
        ]
      },
      {
        title: 'Customer Experience',
        items: [
          { icon: <AlertCircle className="w-5 h-5" />, text: 'Mixed Info' },
          { icon: <Languages className="w-5 h-5" />, text: 'Language Issues' },
          { icon: <Frown className="w-5 h-5" />, text: 'Frustrated Users' }
        ]
      }
    ],
    solutionCategories: [
      {
        title: 'Always Available',
        items: [
          { icon: <Clock className="w-5 h-5" />, text: '24/7 Instant' },
          { icon: <Zap className="w-5 h-5" />, text: 'Zero Wait' },
          { icon: <Target className="w-5 h-5" />, text: 'Never Miss' }
        ]
      },
      {
        title: 'Cost Effective',
        items: [
          { icon: <TrendingDown className="w-5 h-5" />, text: '90% Savings' },
          { icon: <Cpu className="w-5 h-5" />, text: 'Auto FAQs' },
          { icon: <UserCheck className="w-5 h-5" />, text: 'Smart Leads' }
        ]
      },
      {
        title: 'Better Experience',
        items: [
          { icon: <CheckCircle className="w-5 h-5" />, text: 'Accurate Info' },
          { icon: <Languages className="w-5 h-5" />, text: 'Multi-Language' },
          { icon: <Smile className="w-5 h-5" />, text: 'Satisfied Users' }
        ]
      }
    ]
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    icon: <Cog className="w-6 h-6" />,
    problemCategories: [
      {
        title: 'Time Wasters',
        items: [
          { icon: <Timer className="w-5 h-5" />, text: 'Data Entry' },
          { icon: <Repeat className="w-5 h-5" />, text: 'Manual Tasks' },
          { icon: <Clock className="w-5 h-5" />, text: 'Slow Process' }
        ]
      },
      {
        title: 'Quality Issues',
        items: [
          { icon: <XCircle className="w-5 h-5" />, text: 'Human Errors' },
          { icon: <AlertTriangle className="w-5 h-5" />, text: 'Inconsistent' },
          { icon: <Calendar className="w-5 h-5" />, text: 'Missed Deadlines' }
        ]
      },
      {
        title: 'Scaling Problems',
        items: [
          { icon: <DollarSign className="w-5 h-5" />, text: 'High Costs' },
          { icon: <Users className="w-5 h-5" />, text: 'Staff Burnout' },
          { icon: <BarChart className="w-5 h-5" />, text: 'Growth Blocks' }
        ]
      }
    ],
    solutionCategories: [
      {
        title: 'Lightning Fast',
        items: [
          { icon: <Zap className="w-5 h-5" />, text: 'Instant Process' },
          { icon: <Cpu className="w-5 h-5" />, text: 'Auto Workflow' },
          { icon: <Activity className="w-5 h-5" />, text: 'Real-time' }
        ]
      },
      {
        title: 'Perfect Quality',
        items: [
          { icon: <CheckCircle className="w-5 h-5" />, text: '99.9% Accuracy' },
          { icon: <Shield className="w-5 h-5" />, text: 'Standardized' },
          { icon: <Target className="w-5 h-5" />, text: 'Never Late' }
        ]
      },
      {
        title: 'Effortless Growth',
        items: [
          { icon: <TrendingDown className="w-5 h-5" />, text: '80% Savings' },
          { icon: <Smile className="w-5 h-5" />, text: 'Happy Staff' },
          { icon: <TrendingUp className="w-5 h-5" />, text: 'Instant Scale' }
        ]
      }
    ]
  },
  {
    id: 'websites',
    title: 'Website Creation',
    icon: <Globe className="w-6 h-6" />,
    problemCategories: [
      {
        title: 'User Experience',
        items: [
          { icon: <Clock className="w-5 h-5" />, text: 'Outdated Design' },
          { icon: <Smartphone className="w-5 h-5" />, text: 'Poor Mobile' },
          { icon: <Gauge className="w-5 h-5" />, text: 'Slow Loading' }
        ]
      },
      {
        title: 'Marketing Issues',
        items: [
          { icon: <Search className="w-5 h-5" />, text: 'Low Rankings' },
          { icon: <Mail className="w-5 h-5" />, text: 'No Capture' },
          { icon: <TrendingDownIcon className="w-5 h-5" />, text: 'Poor Converts' }
        ]
      },
      {
        title: 'Business Impact',
        items: [
          { icon: <DollarSign className="w-5 h-5" />, text: 'High Costs' },
          { icon: <Eye className="w-5 h-5" />, text: 'Generic Look' },
          { icon: <Target className="w-5 h-5" />, text: 'Lost Sales' }
        ]
      }
    ],
    solutionCategories: [
      {
        title: 'Modern Design',
        items: [
          { icon: <Zap className="w-5 h-5" />, text: 'Clean Visuals' },
          { icon: <Smartphone className="w-5 h-5" />, text: 'Mobile Perfect' },
          { icon: <Activity className="w-5 h-5" />, text: 'Lightning Fast' }
        ]
      },
      {
        title: 'Marketing Power',
        items: [
          { icon: <TrendingUp className="w-5 h-5" />, text: 'Top Rankings' },
          { icon: <Target className="w-5 h-5" />, text: 'Lead Capture' },
          { icon: <BarChart className="w-5 h-5" />, text: 'High Converts' }
        ]
      },
      {
        title: 'Business Growth',
        items: [
          { icon: <TrendingDown className="w-5 h-5" />, text: 'Low Maintain' },
          { icon: <Shield className="w-5 h-5" />, text: 'Unique Brand' },
          { icon: <Users className="w-5 h-5" />, text: 'More Customers' }
        ]
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Automation',
    icon: <Share2 className="w-6 h-6" />,
    problemCategories: [
      {
        title: 'Time Consuming',
        items: [
          { icon: <Clock className="w-5 h-5" />, text: 'Inconsistent Posts' },
          { icon: <Repeat className="w-5 h-5" />, text: 'Manual Content' },
          { icon: <Timer className="w-5 h-5" />, text: 'Delayed Response' }
        ]
      },
      {
        title: 'Poor Performance',
        items: [
          { icon: <MessageCircle className="w-5 h-5" />, text: 'Mixed Voice' },
          { icon: <Eye className="w-5 h-5" />, text: 'Missing Mentions' },
          { icon: <Target className="w-5 h-5" />, text: 'Bad Timing' }
        ]
      },
      {
        title: 'Limited Insights',
        items: [
          { icon: <BarChart className="w-5 h-5" />, text: 'No Analytics' },
          { icon: <AlertTriangle className="w-5 h-5" />, text: 'Account Chaos' },
          { icon: <TrendingDownIcon className="w-5 h-5" />, text: 'Poor Engage' }
        ]
      }
    ],
    solutionCategories: [
      {
        title: 'Automated Excellence',
        items: [
          { icon: <Clock className="w-5 h-5" />, text: 'Perfect Timing' },
          { icon: <Cpu className="w-5 h-5" />, text: 'AI Content' },
          { icon: <Zap className="w-5 h-5" />, text: 'Instant Reply' }
        ]
      },
      {
        title: 'Brand Consistency',
        items: [
          { icon: <Shield className="w-5 h-5" />, text: 'Unified Voice' },
          { icon: <Activity className="w-5 h-5" />, text: 'Real-time Watch' },
          { icon: <Target className="w-5 h-5" />, text: 'Optimized Strategy' }
        ]
      },
      {
        title: 'Smart Analytics',
        items: [
          { icon: <BarChart className="w-5 h-5" />, text: 'Action Insights' },
          { icon: <Database className="w-5 h-5" />, text: 'Central Control' },
          { icon: <TrendingUp className="w-5 h-5" />, text: 'High Engage' }
        ]
      }
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    icon: <Smartphone className="w-6 h-6" />,
    problemCategories: [
      {
        title: 'Customer Reach',
        items: [
          { icon: <UserX className="w-5 h-5" />, text: 'Missing Mobile' },
          { icon: <TrendingDownIcon className="w-5 h-5" />, text: 'Low Engage' },
          { icon: <Users className="w-5 h-5" />, text: 'Poor Retention' }
        ]
      },
      {
        title: 'Competitive Edge',
        items: [
          { icon: <BarChart className="w-5 h-5" />, text: 'Behind Rivals' },
          { icon: <MessageCircle className="w-5 h-5" />, text: 'No Push Notify' },
          { icon: <Database className="w-5 h-5" />, text: 'Limited Data' }
        ]
      },
      {
        title: 'Technical Barriers',
        items: [
          { icon: <WifiOff className="w-5 h-5" />, text: 'No Offline' },
          { icon: <DollarSign className="w-5 h-5" />, text: 'High Dev Cost' },
          { icon: <Clock className="w-5 h-5" />, text: 'Long Timeline' }
        ]
      }
    ],
    solutionCategories: [
      {
        title: 'Mobile Dominance',
        items: [
          { icon: <Smartphone className="w-5 h-5" />, text: 'Reach Mobile' },
          { icon: <TrendingUp className="w-5 h-5" />, text: 'High Engage' },
          { icon: <UserCheck className="w-5 h-5" />, text: 'Keep Users' }
        ]
      },
      {
        title: 'Competitive Advantage',
        items: [
          { icon: <Target className="w-5 h-5" />, text: 'Lead Market' },
          { icon: <MessageCircle className="w-5 h-5" />, text: 'Direct Connect' },
          { icon: <BarChart className="w-5 h-5" />, text: 'Rich Insights' }
        ]
      },
      {
        title: 'Technical Excellence',
        items: [
          { icon: <Wifi className="w-5 h-5" />, text: 'Offline Ready' },
          { icon: <TrendingDown className="w-5 h-5" />, text: 'Cost Effective' },
          { icon: <Zap className="w-5 h-5" />, text: 'Rapid Deploy' }
        ]
      }
    ]
  }
];

export default function ProblemSolutionSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [problemsDropdownOpen, setProblemsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          <h2 className="text-4xl md:text-4xl font-bold mb-4 bg-clip-text text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,71,255,0.8)] [text-shadow:_0_0_5px_rgb(53_71_255_/_60%)]">
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

        {/* Desktop Layout */}
        {!isMobile ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* Problem Column */}
              <div className="relative group">
                <div className="bg-red-900/10 backdrop-blur-sm rounded-lg p-6 lg:p-8 transition-all duration-300 h-full">
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
                    <div className="flex gap-3 mb-6 lg:text-left">
                      <div className="p-3 bg-red-500/20 rounded-full">
                        <AlertTriangle className="w-6 h-6 lg:w-8 lg:h-8 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-red-400 mb-1">Current Challenges</h3>
                        <div className="flex gap-2 text-red-300">
                          <TrendingDown className="w-4 h-4" />
                          <span className="text-sm">Without AI Solutions</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {currentCategory.problemCategories.map((category, categoryIndex) => (
                        <motion.div
                          key={categoryIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 }}
                          className="rounded-lg p-4"
                        >
                          <div className="flex flex-col items-center text-center mb-3">
                            <div className="text-red-400 text-xl mb-2">{category.title === 'Time & Availability' ? <Clock className="w-6 h-6" /> : category.title === 'Costs & Efficiency' ? <DollarSign className="w-6 h-6" /> : category.title === 'Customer Experience' ? <Users className="w-6 h-6" /> : category.title === 'Time Wasters' ? <Timer className="w-6 h-6" /> : category.title === 'Quality Issues' ? <Target className="w-6 h-6" /> : category.title === 'Scaling Problems' ? <BarChart3 className="w-6 h-6" /> : category.title === 'User Experience' ? <Users className="w-6 h-6" /> : category.title === 'Marketing Issues' ? <Target className="w-6 h-6" /> : category.title === 'Business Impact' ? <DollarSign className="w-6 h-6" /> : category.title === 'Time Consuming' ? <Clock className="w-6 h-6" /> : category.title === 'Poor Performance' ? <Target className="w-6 h-6" /> : category.title === 'Limited Insights' ? <BarChart3 className="w-6 h-6" /> : category.title === 'Customer Reach' ? <Users className="w-6 h-6" /> : category.title === 'Competitive Edge' ? <Target className="w-6 h-6" /> : category.title === 'Technical Barriers' ? <Shield className="w-6 h-6" /> : <Clock className="w-6 h-6" />}</div>
                            <h4 className="font-semibold text-red-300 text-lg">{category.title}</h4>
                          </div>
                          <div className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="text-red-200 text-center">
                                <span className="text-base font-medium">{item.text}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Column */}
              <div className="relative group">
                <div className="bg-green-900/10 backdrop-blur-sm rounded-lg p-6 lg:p-8 transition-all duration-300 h-full">
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
                    <div className="flex gap-3 mb-6 lg:text-left">
                      <div className="p-3 bg-green-500/20 rounded-full">
                        <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-green-400 mb-1">With AI Solutions</h3>
                        <div className="flex gap-2 text-green-300">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm">Exponential Growth</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {currentCategory.solutionCategories.map((category, categoryIndex) => (
                        <motion.div
                          key={categoryIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 }}
                          className="rounded-lg p-4"
                        >
                          <div className="flex flex-col items-center text-center mb-3">
                            <div className="text-green-400 text-xl mb-2">{category.title === 'Always Available' ? <Clock className="w-6 h-6" /> : category.title === 'Cost Effective' ? <DollarSign className="w-6 h-6" /> : category.title === 'Better Experience' ? <Users className="w-6 h-6" /> : category.title === 'Lightning Fast' ? <Zap className="w-6 h-6" /> : category.title === 'Perfect Quality' ? <Target className="w-6 h-6" /> : category.title === 'Effortless Growth' ? <BarChart3 className="w-6 h-6" /> : category.title === 'Modern Design' ? <Users className="w-6 h-6" /> : category.title === 'Marketing Power' ? <Target className="w-6 h-6" /> : category.title === 'Business Growth' ? <DollarSign className="w-6 h-6" /> : category.title === 'Automated Excellence' ? <Zap className="w-6 h-6" /> : category.title === 'Brand Consistency' ? <Shield className="w-6 h-6" /> : category.title === 'Smart Analytics' ? <BarChart3 className="w-6 h-6" /> : category.title === 'Mobile Dominance' ? <Smartphone className="w-6 h-6" /> : category.title === 'Competitive Advantage' ? <Target className="w-6 h-6" /> : category.title === 'Technical Excellence' ? <Shield className="w-6 h-6" /> : <CheckCircle className="w-6 h-6" />}</div>
                            <h4 className="font-semibold text-green-300 text-lg">{category.title}</h4>
                          </div>
                          <div className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="text-green-200 text-center">
                                <span className="text-base font-medium">{item.text}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          /* Mobile Layout - Dropdowns */
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Current Challenges Dropdown */}
                <div className="bg-red-900/10 backdrop-blur-sm rounded-lg overflow-hidden">
                  <button
                    onClick={() => setProblemsDropdownOpen(!problemsDropdownOpen)}
                    className="w-full p-4 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-500/20 rounded-full">
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-red-400">Current Challenges</h3>
                        <div className="flex items-center gap-2 text-red-300">
                          <TrendingDown className="w-3 h-3" />
                          <span className="text-xs">Without AI Solutions</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-red-400 transition-transform duration-300 ${
                        problemsDropdownOpen ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {problemsDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 space-y-4">
                          {currentCategory.problemCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-1/3">
                                <div className="flex flex-col items-center text-center">
                                  <div className="text-red-400 mb-1">
                                    {category.title === 'Time & Availability' ? <Clock className="w-5 h-5" /> : 
                                     category.title === 'Costs & Efficiency' ? <DollarSign className="w-5 h-5" /> : 
                                     category.title === 'Customer Experience' ? <Users className="w-5 h-5" /> : 
                                     category.title === 'Time Wasters' ? <Timer className="w-5 h-5" /> : 
                                     category.title === 'Quality Issues' ? <Target className="w-5 h-5" /> : 
                                     category.title === 'Scaling Problems' ? <BarChart3 className="w-5 h-5" /> : 
                                     category.title === 'User Experience' ? <Users className="w-5 h-5" /> : 
                                     category.title === 'Marketing Issues' ? <Target className="w-5 h-5" /> : 
                                     category.title === 'Business Impact' ? <DollarSign className="w-5 h-5" /> : 
                                     category.title === 'Time Consuming' ? <Clock className="w-5 h-5" /> : 
                                     category.title === 'Poor Performance' ? <Target className="w-5 h-5" /> : 
                                     category.title === 'Limited Insights' ? <BarChart3 className="w-5 h-5" /> : 
                                     category.title === 'Customer Reach' ? <Users className="w-5 h-5" /> : 
                                     category.title === 'Competitive Edge' ? <Target className="w-5 h-5" /> : 
                                     category.title === 'Technical Barriers' ? <Shield className="w-5 h-5" /> : 
                                     <Clock className="w-5 h-5" />}
                                  </div>
                                  <h4 className="font-semibold text-red-300 text-sm">{category.title}</h4>
                                </div>
                              </div>
                              <div className="flex-1 space-y-1">
                                {category.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="text-red-200 text-xs">
                                    • {item.text}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {/* AI Solutions Dropdown */}
                <div className="bg-green-900/10 backdrop-blur-sm rounded-lg overflow-hidden mt-4">
                  <button
                    onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                    className="w-full p-4 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-full">
                        <Zap className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-green-400">With AI Solutions</h3>
                        <div className="flex items-center gap-2 text-green-300">
                          <TrendingUp className="w-3 h-3" />
                          <span className="text-xs">Exponential Growth</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-green-400 transition-transform duration-300 ${
                        solutionsDropdownOpen ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {solutionsDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 space-y-4">
                          {currentCategory.solutionCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-1/3">
                                <div className="flex flex-col items-center text-center">
                                  <div className="text-green-400 mb-1">
                                    {category.title === 'Always Available' ? <Clock className="w-5 h-5" /> : 
                                     category.title === 'Cost Effective' ? <DollarSign className="w-5 h-5" /> : 
                                     category.title === 'Better Experience' ? <Users className="w-5 h-5" /> : 
                                     category.title === 'Lightning Fast' ? <Zap className="w-5 h-5" /> : 
                                     category.title === 'Perfect Quality' ? <Target className="w-5 h-5" /> : 
                                     category.title === 'Effortless Growth' ? <BarChart3 className="w-5 h-5" /> : 
                                     category.title === 'Modern Design' ? <Users className="w-5 h-5" /> : 
                                     category.title === 'Marketing Power' ? <Target className="w-5 h-5" /> : 
                                     category.title === 'Business Growth' ? <DollarSign className="w-5 h-5" /> : 
                                     category.title === 'Automated Excellence' ? <Zap className="w-5 h-5" /> : 
                                     category.title === 'Brand Consistency' ? <Shield className="w-5 h-5" /> : 
                                     category.title === 'Smart Analytics' ? <BarChart3 className="w-5 h-5" /> : 
                                     category.title === 'Mobile Dominance' ? <Smartphone className="w-5 h-5" /> : 
                                     category.title === 'Competitive Advantage' ? <Target className="w-5 h-5" /> : 
                                     category.title === 'Technical Excellence' ? <Shield className="w-5 h-5" /> : 
                                     <CheckCircle className="w-5 h-5" />}
                                  </div>
                                  <h4 className="font-semibold text-green-300 text-sm">{category.title}</h4>
                                </div>
                              </div>
                              <div className="flex-1 space-y-1">
                                {category.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="text-green-200 text-xs">
                                    • {item.text}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}