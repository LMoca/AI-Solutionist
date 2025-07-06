import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import FAQItem from './FAQItem';
import { staggerChildrenVariant, fadeInUpVariant } from '../../utils/animations';

const faqs = [
  {
    question: "What AI solutions do you offer?",
    answer: "We provide custom website creation, custom mobile applications, AI chatbots, AI phone services, automated customer service solutions, and intelligent process automation tailored to your business needs."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation time varies based on complexity, typically ranging from days to 2 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide comprehensive support and maintenance packages to ensure our solutions continue to perform optimally."
  },
  {
    question: "Can AI solutions integrate with my existing systems?",
    answer: "Absolutely! Our solutions are designed to seamlessly integrate with your existing infrastructure and can be customized to meet your specific requirements."
  },
  {
    question: "How much does it cost to implement?",
    answer: "The cost of implementation depends on several factors including the complexity of your project scope, the number of systems that need integration, the level of customization required, and the specific AI features you want."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including e-commerce, healthcare, finance, real estate, education, and more. Our solutions are adaptable to any business context."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          className="text-center mb-12"
        >
          <h2 className="inline-flex items-center gap-4 text-4xl md:text-4xl font-bold bg-clip-text text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,71,255,0.8)] [text-shadow:_0_0_5px_rgb(53_71_255_/_60%)]">
            <HelpCircle className="w-12 h-12 text-cyan-400" />
            FAQ
          </h2>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildrenVariant}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}