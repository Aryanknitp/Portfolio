import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import HoloCube from "../components/HoloCube";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  icon: string;
  color: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "AI Pdf Summarizer",
    description:
      "This AI tool instantly summarizes any PDF, provides related links, and remembers past conversations to deliver a personalized experience for every user.",
    tech: ["Next.js", "Python", "MongoDB", "Express.js", "Prisma"],
    category: "Full Stack",
    icon: "📓",
    color: "#8b5cf6",
    features: ["User Auth", "File Upload", "Search", "Real-time"],
  },
  {
    title: "Chronicle Map Project",
    description:
      "Interactive mapping application with real-time data visualization and location-based services. Includes custom markers, route planning, and geospatial analytics for deep location insights.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
    category: "Frontend",
    icon: "🗺️",
    color: "#3b82f6",
    features: ["Interactive Map", "Real-time Data", "Analytics", "Geospatial"],
  },
  {
    title: "Face Mask Detection",
    description:
      "Completely Based on the Machine Learning Concept and Uses Concept of ml to recognize",
    tech: ["Python", "Jupyter Notebook", "Pandas", "TensorFlow"],
    category: "Backend",
    icon: "😷",
    color: "#ec4899",
    features: [
      "Detect Face using Opencv",
      "Make a Circle around the face",
      "Detecting Moving Object",
      "High Accuracy",
    ],
  },
  {
    title: "Full Stack Authentication System",
    description:
      "Production-ready authentication system with JWT tokens, bcrypt password encryption, email OTP verification, and role-based access control. Built to integrate into any modern web application.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    category: "Backend",
    icon: "🔐",
    color: "#06b6d4",
    features: ["JWT Auth", "Encryption", "Email OTP", "RBAC"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => setExpanded(!expanded)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{
        background: "rgba(10,10,32,0.85)",
        border: `1px solid ${project.color}30`,
        boxShadow: `0 4px 24px ${project.color}08`,
        transition: "border-color 0.35s, box-shadow 0.35s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = project.color + "70";
        el.style.boxShadow = `0 0 40px ${project.color}28, 0 8px 32px ${project.color}15`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = project.color + "30";
        el.style.boxShadow = `0 4px 24px ${project.color}08`;
      }}
    >
      {/* Top glowing bar */}
      <div
        className="h-[3px] w-full"
        style={{
          background: `linear-gradient(90deg, ${project.color}, ${project.color}40, transparent)`,
        }}
      />

      {/* Animated background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${project.color}12 0%, transparent 70%)`,
        }}
      />

      <div className="p-7">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.12 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{
              background: `${project.color}18`,
              border: `1px solid ${project.color}35`,
            }}
          >
            {project.icon}
          </motion.div>

          <div className="flex gap-2.5 pt-1">
            <motion.button
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Category badge */}
        <span
          className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
          style={{
            background: `${project.color}18`,
            color: project.color,
            border: `1px solid ${project.color}35`,
          }}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3
          className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: "1rem",
            backgroundImage: `linear-gradient(90deg, #fff, ${project.color})`,
          }}
        >
          {project.title}
        </h3>

        {/* Description — expands on click */}
        <motion.p
          className="text-gray-400 text-sm leading-relaxed mb-5 overflow-hidden"
          animate={{ maxHeight: expanded ? 200 : 56 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{ maxHeight: 56 }}
        >
          {project.description}
        </motion.p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.features.map((f) => (
            <span
              key={f}
              className="text-xs px-2.5 py-0.5 rounded-md text-gray-400"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-4"
          style={{
            background: `linear-gradient(90deg,${project.color}30,transparent)`,
          }}
        />

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08 }}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{
                  background: `${project.color}14`,
                  color: project.color,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <motion.span
            animate={{ x: expanded ? 4 : 0 }}
            className="text-xs flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ color: project.color }}
          >
            {expanded ? "Collapse" : "Expand"}{" "}
            <ArrowUpRight className="w-3 h-3" />
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(236,72,153,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(236,72,153,0.03) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-28 pb-16 px-4 relative z-10"
      >
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-pink-300 mb-4 uppercase tracking-widest"
          style={{
            background: "rgba(236,72,153,0.1)",
            border: "1px solid rgba(236,72,153,0.3)",
          }}
        >
          My Work
        </span>
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          Featured{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg,#ec4899,#8b5cf6)",
            }}
          >
            Projects
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Real-world applications built with passion and modern technologies.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <div
            className="w-12 h-1 rounded-full"
            style={{ background: "linear-gradient(90deg,#ec4899,#8b5cf6)" }}
          />
          <div className="w-3 h-1 rounded-full bg-pink-400/40" />
          <div className="w-2 h-1 rounded-full bg-pink-400/20" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 pb-24 relative z-10">
        {/* Project grid — 2 columns, all cards same style */}
        <div className="grid sm:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Decoration row */}
        <div className="flex justify-center gap-8 mt-16 opacity-25 pointer-events-none">
          <HoloCube size={48} color="#8b5cf6" speed={10} />
          <HoloCube size={36} color="#ec4899" speed={7} />
          <HoloCube size={52} color="#3b82f6" speed={13} />
        </div>
      </div>
    </div>
  );
}
