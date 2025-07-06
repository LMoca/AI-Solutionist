import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { MobileMenu } from './navigation/MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img src="/LM Logo.png" alt="LM Logo" className="h-8 w-8" />
            <div className="bg-clip-text font-bold text-xl text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,71,255,0.8)] [text-shadow:_0_0_5px_rgb(53_71_255_/_60%)]">
              AI SOLUTIONIST
            </div>
          </div>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-auto justify-center">
            <div className="space-x-8">
              <DesktopNavLink href="#home">Home</DesktopNavLink>
              <DesktopNavLink href="#services">Services</DesktopNavLink>
              <DesktopNavLink href="#process">Process</DesktopNavLink>
              <DesktopNavLink href="#testimonials">Testimonials</DesktopNavLink>
              <DesktopNavLink href="#contact">Contact</DesktopNavLink>
              <DesktopNavLink href="#faq">FAQ</DesktopNavLink>
            </div>
          </div>

          {/* Mobile menu button - Right */}
          <div className="md:hidden flex flex-1 justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}

function DesktopNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-cyan-400 hover:text-cyan-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
}