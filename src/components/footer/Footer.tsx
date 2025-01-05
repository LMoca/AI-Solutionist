import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { SocialLinks } from './SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-8 pb-8 border-t border-cyan-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <FooterSection title="AI Solutionist">
            <p className="text-cyan-200">
              Luigi Moca
            </p>
            <p className="text-cyan-200">
              mocaluigi@gmail.com
            </p>
            <SocialLinks />
          </FooterSection>

          <FooterSection title="Services">
            <div className="space-y-2">
              <FooterLink href="#services">Website Creation</FooterLink>
              <FooterLink href="#services">Website Chatbots</FooterLink>
              <FooterLink href="#services">Business Automation</FooterLink>
            </div>
          </FooterSection>

          <FooterSection title="Resources">
            <div className="space-y-2">
              <FooterLink href="#faq">FAQ</FooterLink>
            </div>
          </FooterSection>
        </div>

        <div className="pt-8 border-t border-cyan-900/20 text-center">
          <p className="text-cyan-200 text-sm">
            © {currentYear} AI Solutionist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}