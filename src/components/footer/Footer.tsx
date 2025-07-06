import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { SocialLinks } from './SocialLinks';
import { Phone, User, Mail, Trash2, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-8 pb-8 border-t border-cyan-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 mb-8 max-w-4xl mx-auto">
          <FooterSection title="AI Solutionist">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-cyan-400" />
                <p className="text-cyan-200">Luigi Moca</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <p className="text-cyan-200">(317) 712-0452</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <p className="text-cyan-200">lmaisolutionist@gmail.com</p>
              </div>
            </div>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </FooterSection>

          <FooterSection title="Services">
            <div className="space-y-2">
              <FooterLink href="#services">Website Creation</FooterLink>
              <FooterLink href="#services">Mobile Applications</FooterLink>
              <FooterLink href="#services">Workflow Automation</FooterLink>
              <FooterLink href="#services">AI Chatbot Agents</FooterLink>
              <FooterLink href="#services">AI Phone Calls</FooterLink>
            </div>
          </FooterSection>
        </div>

        <div className="pt-8 border-t border-cyan-900/20 text-center space-y-4">
          <p className="text-cyan-200 text-sm">
            © {currentYear} AI Solutionist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}