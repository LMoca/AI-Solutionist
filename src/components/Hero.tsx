import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className={`mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img 
            src="https://static.wixstatic.com/media/e4a203_3052eb7efe304a5e97771e473a7c9a1b~mv2.png" 
            alt="LM Logo" 
            className="w-32 h-32 mx-auto mix-blend-screen"
          />
        </div>
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-[#00ffff] drop-shadow-[0_0_10px_rgba(53,7,255,0.8)] [text-shadow:_0_0_20px_rgb(0_255_255_/_60%)]">
            AI Solutionist
          </span>
        </h1>
        <p 
          className={`text-cyan-400 text-xl md:text-1xl mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Developing tailored AI automation solutions for your business
        </p>
      </div>
    </section>
  );
}