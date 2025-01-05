import { motion } from 'framer-motion';
import { fadeInUpVariant } from '../../utils/animations';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUpVariant}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold text-cyan-400 text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,71,255,0.8)] [text-shadow:_0_0_5px_rgb(53_71_255_/_60%)]">{title}</h3>
      {children}
    </motion.div>
  );
}