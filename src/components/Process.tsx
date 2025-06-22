import { motion } from 'framer-motion';
import { Search, Wrench, RefreshCw, Workflow } from 'lucide-react';
import { fadeInUpVariant } from '../utils/animations';

const processSteps = [
  {
    icon: <Search className="w-12 h-12 text-cyan-400" />,
    title: "Assess",
    description: "We thoroughly discuss & analyze your business operations & workflow",
    points: [
      "Business Process Analysis",
      "Pain Point Identification",
      "Opportunity Assessment",
      "ROI Projection"
    ]
  },
  {
    icon: <Wrench className="w-12 h-12 text-cyan-400" />,
    title: "Implementation",
    description: "We develop & deploy customized AI solutions tailored to your objectives.",
    points: [
      "Solution Development",
      "Existing Systems Integration",
      "Staff Training + Onboarding",
      "Performance testing",
      "Deployment & monitoring"
    ]
  },
  {
    icon: <RefreshCw className="w-12 h-12 text-cyan-400" />,
    title: "Maintain + Upgrade",
    description: "We provide ongoing support & continuous improvements",
    points: [
      "24/7 System Monitoring",
      "Performance Optimization",
      "Feature Enhancements",
      "Scaling Support"
    ]
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          className="text-center mb-12"
        >
          <h2 className="inline-flex items-center gap-4 text-6xl md:text-6xl font-bold bg-clip-text text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,71,255,0.8)] [text-shadow:_0_0_5px_rgb(53_71_255_/_60%)]">
            <Workflow className="w-12 h-12 text-cyan-400" />
            Our Process
          </h2>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative group"
                >              
                  <div className="bg-gray-800/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
                    {/* Background grid effect */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-8 grid-rows-8 h-full">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div key={i} className="border border-cyan-400/20" />
                        ))}
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="mb-4">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-3">{step.title}</h3>
                      <p className="text-cyan-200 mb-6">{step.description}</p>
                      
                      <ul className="space-y-2">
                        {step.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-center text-cyan-200">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}