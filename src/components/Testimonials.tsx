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
    image: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/473079271_3932064817071165_4944420438080042017_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=a6CVz0pXjsYQ7kNvgFJLl_B&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=Ax-aeXYpC9fEI7KrHPhYF5j&oh=00_AYD0_xdXbxh3W6rqkgfPzT7xSlPvJMKXsh6WN34llbQgqA&oe=678BE6FD"
  }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" title="Client Testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute -top-4 -left-4 z-10">
                <div className="p-3 bg-cyan-500/10 backdrop-blur-sm rounded-full">
                  <Quote className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                {testimonial.image && (
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-cyan-400/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex-grow">
                  <p className="text-cyan-200 text-lg leading-relaxed mb-6">
                    {testimonial.content}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-semibold text-xl text-cyan-400">
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