import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProjectList from './ProjectList';
import { PortfolioIcons } from './icons/PortfolioIcons';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface PortfolioItemProps {
  icon: keyof typeof PortfolioIcons;
  title: string;
  description: string;
  projects: Project[];
}

export default function PortfolioItem({ icon, title, description, projects }: PortfolioItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = PortfolioIcons[icon];

  return (
    <div className="bg-gray-800/10 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 transition-transform duration-300">
      <div className="mb-4"><IconComponent /></div>
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
      <p className="text-cyan-200 mb-4">{description}</p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <span>View Projects</span>
        <ChevronDown 
          size={16} 
          className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>
      
      <ProjectList projects={projects} isVisible={isExpanded} />
    </div>
  );
}