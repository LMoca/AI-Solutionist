import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import { fadeInUpVariant } from '../utils/animations';

export default function CTASection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Section id="contact" title="Stop Wasting Time. Let's Automate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-xl md:text-2xl">
            Schedule a meeting to solve your business challenges together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form - Left Side */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          {/* Calendar - Right Side */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Schedule a Consultation</h3>
            <p className="text-cyan-200 mb-6">
              Book a free 30-minute consultation to discuss your AI automation needs.
            </p>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/mocaluigi/30min"
              style={{ width: '100%', height: '650px' }}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}