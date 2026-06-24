import { motion } from "motion/react";
import { Link } from "react-router";
import {
  MapPin,
  GraduationCap,
  Calendar,
  Code2,
  Heart,
  Lightbulb,
  Target,
  ArrowRight,
} from "lucide-react";
import NoiseSphere from "../components/NoiseSphere";
import DNAHelix from "../components/DNAHelix";
import HoloCube from "../components/HoloCube";

const personalInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    color: "#8b5cf6",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech Computer Science",
    color: "#3b82f6",
  },
  {
    icon: Calendar,
    label: "Experience",
    value: "2+ Years",
    color: "#ec4899",
  },
  {
    icon: Code2,
    label: "Available",
    value: "Open to Opportunities",
    color: "#06b6d4",
  },
];

const interests = [
  { emoji: "🌐", label: "Web Development" },
  { emoji: "🎨", label: "UI/UX Design" },
  { emoji: "☁️", label: "Cloud Technologies" },
  { emoji: "🤖", label: "AI & ML" },
  { emoji: "🔓", label: "Open Source" },
  { emoji: "🎮", label: "Gaming" },
  { emoji: "📖", label: "Reading Tech Blogs" },
  { emoji: "🎵", label: "Music" },
];

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, readable, and efficient code that scales.",
    color: "#8b5cf6",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Always exploring new technologies and creative approaches to problem solving.",
    color: "#3b82f6",
  },
  {
    icon: Heart,
    title: "User-First",
    desc: "Building products that genuinely improve the experience for real users.",
    color: "#ec4899",
  },
  {
    icon: Target,
    title: "Excellence",
    desc: 'Never settling for "good enough" — pushing for the best possible outcome.',
    color: "#06b6d4",
  },
];

function PageHeader({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center pt-28 pb-16 px-4"
    >
      <h1
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        {title}
      </h1>
      <p className="text-gray-400 text-lg max-w-xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <div
          className="w-12 h-1 rounded-full"
          style={{
            background:
              "linear-gradient(90deg,#8b5cf6,#3b82f6)",
          }}
        />
        <div className="w-3 h-1 rounded-full bg-purple-400/40" />
        <div className="w-2 h-1 rounded-full bg-purple-400/20" />
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Grid BG */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.03) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <PageHeader
        title={
          <>
            About{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#8b5cf6,#3b82f6)",
              }}
            >
              Me
            </span>
          </>
        }
        subtitle="A passionate developer with a love for crafting digital experiences."
      />

      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-20 relative z-10">
        {/* Bio + Avatar */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Avatar (stylized sphere) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <div className="relative">
              <NoiseSphere
                size={260}
                color="#8b5cf6"
                interactive={true}
              />
              {/* floating label */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(135deg,#8b5cf6,#3b82f6)",
                  boxShadow: "0 0 20px rgba(139,92,246,0.5)",
                }}
              >
                Aryan Kumar
              </motion.div>
            </div>
            {/* DNA helix decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-50 hidden lg:block">
              <DNAHelix
                width={60}
                height={220}
                color1="#8b5cf6"
                color2="#3b82f6"
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-2xl font-bold text-white mb-5"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Who <span className="text-purple-400">I Am</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I&apos;m{" "}
              <strong className="text-white">
                Aryan Kumar
              </strong>
              , a Full Stack Web Developer from India currently
              pursuing my B.Tech in Computer Science. I&apos;m
              passionate about building web applications that
              are not just functional, but also beautiful and
              intuitive.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              With over 2 years of hands-on experience,
              I&apos;ve worked across the full development stack
              — from crafting pixel-perfect React interfaces to
              designing robust Node.js backends and scalable
              database architectures.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I believe in writing clean, maintainable code and
              always keeping the user&apos;s experience at the
              center of every decision.
            </p>
            <div className="flex gap-3">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,#8b5cf6,#3b82f6)",
                    boxShadow: "0 0 20px rgba(139,92,246,0.4)",
                  }}
                >
                  <ArrowRight className="w-4 h-4" /> View
                  Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Personal Info Cards */}
        <div>
          <h2
            className="text-xl font-bold text-white mb-7 text-center"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Personal{" "}
            <span className="text-purple-800">Info</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personalInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-xl p-5"
                style={{
                  background: "rgba(10,10,32,0.8)",
                  border: `1px solid ${info.color}25`,
                }}
              >
                <info.icon
                  className="w-5 h-5 mb-3"
                  style={{ color: info.color }}
                />
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                  {info.label}
                </p>
                <p className="text-white text-sm font-medium">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2
            className="text-xl font-bold text-white mb-7 text-center"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            My <span className="text-blue-400">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl p-6 group"
                style={{
                  background: "rgba(10,10,32,0.8)",
                  border: `1px solid ${v.color}20`,
                }}
                onMouseEnter={(e) => {
                  (
                    e.currentTarget as HTMLElement
                  ).style.borderColor = v.color + "50";
                }}
                onMouseLeave={(e) => {
                  (
                    e.currentTarget as HTMLElement
                  ).style.borderColor = v.color + "20";
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `${v.color}15` }}
                >
                  <v.icon
                    className="w-5 h-5"
                    style={{ color: v.color }}
                  />
                </div>
                <h3
                  className="font-bold text-white mb-2 text-sm"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h2
            className="text-xl font-bold text-white mb-7 text-center"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Interests{" "}
            <span className="text-pink-400">&amp;</span> Hobbies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-300 cursor-default transition-all duration-200"
                style={{
                  background: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.2)",
                }}
                onMouseEnter={(e) => {
                  (
                    e.currentTarget as HTMLElement
                  ).style.background = "rgba(139,92,246,0.2)";
                }}
                onMouseLeave={(e) => {
                  (
                    e.currentTarget as HTMLElement
                  ).style.background = "rgba(139,92,246,0.08)";
                }}
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,rgba(139,92,246,0.1),rgba(59,130,246,0.1))",
            border: "1px solid rgba(139,92,246,0.25)",
          }}
        >
          <div className="absolute top-4 right-6 opacity-30">
            <HoloCube size={60} color="#8b5cf6" speed={8} />
          </div>
          <h3
            className="text-2xl font-bold text-white mb-3"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Let&apos;s Build Something{" "}
            <span className="text-purple-400">Together</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm">
            Have a project in mind? I&apos;m always open to
            discussing new opportunities and ideas.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
              style={{
                background:
                  "linear-gradient(135deg,#8b5cf6,#3b82f6)",
                boxShadow: "0 0 25px rgba(139,92,246,0.4)",
              }}
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}