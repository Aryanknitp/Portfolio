import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: string;
}

interface ProjectCard3DProps {
  project: Project;
  index: number;
}

export default function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      <motion.div
        animate={{ rotateY: isHovered ? 5 : 0, rotateX: isHovered ? 5 : 0, scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-xl opacity-50" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xl font-bold">{project.icon}</span>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4 text-purple-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 flex items-center justify-center transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
              </motion.button>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {isHovered && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], y: -50 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-500"
              />
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], y: -50 }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                className="absolute top-8 right-8 w-2 h-2 rounded-full bg-blue-500"
              />
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
