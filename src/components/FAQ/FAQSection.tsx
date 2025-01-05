import { motion } from 'framer-motion';
import Section from '../Section';
import FAQItem from './FAQItem';
import { staggerChildrenVariant } from '../../utils/animations';

const faqs = [
  {
    question: "What AI solutions do you offer?",
    answer: "We provide custom AI chatbots, automated customer service solutions, AI-powered analytics, and intelligent process automation tailored to your business needs."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation time varies based on complexity, typically ranging from days to 2 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide comprehensive support and maintenance packages to ensure your AI solutions continue to perform optimally."
  },
  {
    question: "Can AI solutions integrate with my existing systems?",
    answer: "Absolutely! Our solutions are designed to seamlessly integrate with your existing infrastructure and can be customized to meet your specific requirements."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including e-commerce, healthcare, finance, education, and more. Our solutions are adaptable to any business context."
  }
];

export default function FAQSection() {
  return (
    <Section id="faq" title="FAQ">
      <motion.div 
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
    </Section>
  );
}