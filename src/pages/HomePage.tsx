import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import Services from '../components/Services';
import Process from '../components/Process';
import FAQSection from '../components/FAQ/FAQSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/footer/Footer';
import ParticleCanvas from '../components/ParticleBackground/ParticleCanvas';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ParticleCanvas />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProblemSolutionSection />
          <Services />
          <Process />
          <Testimonials />
          <CTASection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}