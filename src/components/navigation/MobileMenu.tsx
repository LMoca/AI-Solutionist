import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const sectionId = href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative h-full inset-0 z-40 md:hidden"
          style={{top: '32px'}}
        >
          {/* Full screen overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute h-full inset-0 bg-black/95 backdrop-blur-md"
          />
          
          {/* Centered content */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="relative h-full flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8">
              <NavLink href="#home" onClick={handleNavClick}>Home</NavLink>
              <NavLink href="#services" onClick={handleNavClick}>Services</NavLink>
              <NavLink href="#process" onClick={handleNavClick}>Process</NavLink>
              <NavLink href="#testimonials" onClick={handleNavClick}>Testimonials</NavLink>
              <NavLink href="#contact" onClick={handleNavClick}>Contact</NavLink>
              <NavLink href="#faq" onClick={handleNavClick}>FAQ</NavLink>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}