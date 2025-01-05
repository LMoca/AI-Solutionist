import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, tags, github, demo }: Project) {
  return (
    <div className="group relative bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-cyan-400">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a href={github} className="text-gray-300 hover:text-white">
              <Github size={20} />
            </a>
          )}
          {demo && (
            <a href={demo} className="text-gray-300 hover:text-white">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}