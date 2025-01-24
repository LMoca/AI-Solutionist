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
    image: "https://github.com/LMoca/AI-Solutionist/blob/main/Assets/RJCircleLogo.png?raw=true"
  },
  {
    content: "The website Luigi made for me looks beautiful! He's made a high-quality site that fits exactly what I wanted my site to look like! He also went above & implemented an AI system in place for me to help automate my workflow when I'm not around! That's efficiency right there! Thank you, Luigi!",
    author: "Stan Hill",
    role: "Founder, Hill Family Insurance"
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
              className="group relative bg-gray-800/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition-all duration-300"
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
              
              <div className="absolute -top-4 -left-4 z-10">
                <div className="p-3 bg-cyan-500/10 backdrop-blur-sm rounded-full">
                  <Quote className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                {testimonial.image && (
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-cyan-400/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex-grow">
                  <p className="text-cyan-200 text-sm leading-relaxed mb-4">
                    {testimonial.content}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-semibold text-lg text-cyan-400">
                        {testimonial.author}
                      </p>
                      <p className="text-cyan-200 text-sm mt-1">
                        {testimonial.role}
                      </p>
                      {testimonial.projectURL && (
                        <a
                          href={testimonial.projectURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mt-2 transition-colors duration-200"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}