import { motion } from 'framer-motion';
import Section from './Section';
import { fadeInUpVariant } from '../utils/animations';
import { useEffect } from 'react';

export default function CTASection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section id="contact" title="Ready to Upgrade Your Business?">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeInUpVariant}
          className="backdrop-blur-sm rounded-lg p-8 md:p-12"
        >
          <p className="text-cyan-200 mb-8 text-lg">
            Schedule a meeting to discuss your business needs in creating a stunning website or implementing AI solutions.
          </p>
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/mocaluigi/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </motion.div>
      </div>
    </Section>
  );
}