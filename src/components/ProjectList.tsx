import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ProjectListProps {
  projects: Project[];
  isVisible: boolean;
}

export default function ProjectList({ projects, isVisible }: ProjectListProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 space-y-4 overflow-hidden"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/25 rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-cyan-100 font-medium">{project.title}</h4>
                  <p className="text-cyan-200 text-sm">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center gap-1 mt-2"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}