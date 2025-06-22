import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-7xl md:text-7xl font-bold text-transparent bg-clip-text text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,71,255,0.6)] [text-shadow:_0_0_5px_rgb(53_71_255_/_20%)]">
            Let's Connect
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
            <SocialLink 
              href="https://www.instagram.com/luigimoca/profilecard/?igsh=MWM2eWw1NzdvZDQ3dg==" 
              icon={<Instagram size={24} />} 
              label="Instagram"
              bgColor="from-purple-600 to-pink-500"
            />
            <SocialLink 
              href="https://www.linkedin.com/in/luigi-moca-90552276" 
              icon={<Linkedin size={24} />} 
              label="LinkedIn"
              bgColor="from-blue-600 to-cyan-500"
            />
          </div>

          <div className="text-gray-400 text-sm text-center mt-8">
            <p>lmaisolutionist@gmail.com</p>
            <p className="mt-2">© {currentYear} AI Solutionist. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  bgColor: string;
}

function SocialLink({ href, icon, label, bgColor }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center
        px-8 py-4 w-full
        bg-gradient-to-r from-blue-500 to-cyan-500
        rounded-lg
        text-white font-semibold
        transform hover:scale-105 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]
        transition-all duration-300
        backdrop-blur-sm
        group
      `}
      aria-label={label}
    >
      <span className="flex items-center gap-4">
        <span className="transform group-hover:scale-110 transition-transform duration-200">
          {icon}
        </span>
        <span>{label}</span>
      </span>
    </a>
  );
}