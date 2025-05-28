import { motion } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';
import Section from './Section';
import { fadeInUpVariant } from '../utils/animations';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  projectURL?: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Working with Luigi was an outstanding experience. He was easy to work with, incredibly efficient, and executed my website vision perfectly within 48 hours! He kept me involved throughout the process, sharing screenshots and even hosting live chats to show me updates in real time, ensuring everything was exactly how I wanted. Luigi's innovative work will truly enhance my business, creating a better experience for my customers, and making my online brand as strong as it can be. If I ever need more websites or adjustments in the future, Luigi will be my go-to. Thank you, Luigi, for a fantastic job!",
    author: "RJ",
    role: "Founder, RJ's Beginner Crypto Services 101",
    projectURL: "https://reliable-brioche-4dced6.netlify.app/",
    image: "./assets/RJCryptoLogo.jpg"
  },
  {
    content: "My website was outdated and wasn't getting many leads. Luigi completely revamped my website, not only making it visually appealing but highly functional. The biggest game-changer was the AI lead capture agent he integrated within 2 hours. After 4 months, I began seeing an increase in customer inquiries! 25+ client captures! Now, my website with AI integration works for me 24/7, engaging visitors, answering their questions, and turning them into paying clients. Luigi, my business hasn't seen this level of turnover on a website. Thank you!",
    author: "Giuseppe Moca",
    role: "Founder, European & Foreign Motor Works",
    projectURL: "https://www.europeanforeignmotorworks.com/",
    image: "https://static.wixstatic.com/media/559bd5_803711cd15bf4e5dbc5424a859018e6e~mv2.png"
  }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" title="Client Testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative bg-gray-800/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Background grid effect */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-cyan-400/20" />
                  ))}
                </div>
              </div>

              {/* Glow overlay */}
              <div className="absolute inset-0 bg-cyan-400 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Header row with logo, name, and details */}
                <div className="flex items-center gap-4 mb-4">
                  {testimonial.image && (
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg text-cyan-400">
                      {testimonial.author}
                    </h3>
                    <p className="text-cyan-200 text-sm">
                      {testimonial.role}
                    </p>
                    {testimonial.projectURL && (
                      <a
                        href={testimonial.projectURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200"
                      >
                        View Project <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Quote icon */}
                <div className="absolute -top-3 -left-3">
                  <div className="p-2 bg-cyan-500/10 backdrop-blur-sm rounded-full">
                    <Quote className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>

                {/* Testimonial content */}
                <p className="text-cyan-200 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}