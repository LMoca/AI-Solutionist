import { Instagram, Linkedin, Mail, Calendar } from 'lucide-react';

const socialLinks = [
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luigi-moca-90552276",
  },
  {
    icon: <Instagram size={24} />,
    label: "Instagram",
    href: "https://www.instagram.com/lmai.solutionist/",
  },
  {
    icon: <Calendar size={24} />,
    label: "Schedule a Call",
    href: "https://calendly.com/mocaluigi/30min",
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-200 hover:text-cyan-400 transition-colors duration-200"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}