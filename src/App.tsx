import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import FAQSection from './components/FAQ/FAQSection';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/footer/Footer';
import ParticleCanvas from './components/ParticleBackground/ParticleCanvas';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ParticleCanvas />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <Testimonials />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App