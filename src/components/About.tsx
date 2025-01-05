import Section from './Section';
import PortfolioItem from './PortfolioItem';
import { portfolioItems } from '../data/portfolioData';

export default function About() {
  return (
    <Section id="about" title="What We're About">
      <div className="flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-cyan-400 text-lg">
            Establish your business & brands in the digital presence, connecting & expanding your audience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}