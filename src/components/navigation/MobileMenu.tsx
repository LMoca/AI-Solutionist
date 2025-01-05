import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../../utils/scrollUtils';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden bg-black/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
          >
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}