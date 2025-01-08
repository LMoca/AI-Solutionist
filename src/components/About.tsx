import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="What We're About">
      <div className="flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-cyan-400 text-xl md:text-2xl mb-36">
            Fortify your digital presence while reclaiming your valuable time through automation
          </p>
        </div>
      </div>
    </Section>
  );
}