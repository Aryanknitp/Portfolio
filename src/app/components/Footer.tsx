import { Link } from "react-router";
import { motion } from "motion/react";
import SocialMarquee from "./SocialMarquee";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  ArrowUpRight,
  Code2,
  Heart,
  ExternalLink,
  Rocket,
  User,
  Cpu,
  FolderOpen,
  MessageSquare,
} from "lucide-react";
const quickLinks = [
  { label: "Home", path: "/", icon: Rocket },
  { label: "About Me", path: "/about", icon: User },
  { label: "Skills", path: "/skills", icon: Cpu },
  { label: "Projects", path: "/projects", icon: FolderOpen },
  { label: "Contact", path: "/contact", icon: MessageSquare },
];

const techStack = [
  { name: "React", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Node.js", color: "#68a063" },
  { name: "Express.js", color: "#e2e8f0" },
  { name: "MongoDB", color: "#47a248" },
  { name: "MySQL", color: "#00758f" },
  { name: "Firebase", color: "#ffca28" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Git", color: "#f05032" },
  { name: "Figma", color: "#a259ff" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
    color: "#e2e8f0",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "#0a66c2",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
    color: "#1da1f2",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
    color: "#e1306c",
  },
  {
    icon: Mail,
    href: "mailto:aryankrbjunitp.com",
    label: "Email",
    color: "#8b5cf6",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10"
      style={{
        background: "rgba(3,3,12,0.98)",
        borderTop: "1px solid rgba(139,92,246,0.18)",
      }}
    >
      {/* ── CTA banner ── */}
      <div
        className="relative overflow-hidden py-16 px-4"
        style={{
          background:
            "linear-gradient(135deg,rgba(139,92,246,0.13) 0%,rgba(59,130,246,0.10) 50%,rgba(236,72,153,0.08) 100%)",
          borderBottom: "1px solid rgba(139,92,246,0.14)",
        }}
      >
        {/* decorative orbs */}
        <div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(139,92,246,0.15),transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(59,130,246,0.12),transparent 70%)",
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400 mb-3"
          >
            Open to Opportunities
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Ready to Build Something{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#8b5cf6,#ec4899,#3b82f6)",
              }}
            >
              Extraordinary?
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-8 max-w-md mx-auto"
          >
            Let&apos;s turn your ideas into stunning, high-performance web
            experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg,#8b5cf6,#3b82f6)",
                boxShadow: "0 0 24px rgba(139,92,246,0.45)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 40px rgba(139,92,246,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 24px rgba(139,92,246,0.45)";
              }}
            >
              Start a Project{" "}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="mailto:aryankrbjunitp@gmail.com"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "transparent",
                border: "1px solid rgba(139,92,246,0.45)",
                color: "#c4b5fd",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(139,92,246,0.15)";
                el.style.borderColor = "rgba(139,92,246,0.8)";
                el.style.boxShadow = "0 0 20px rgba(139,92,246,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.borderColor = "rgba(139,92,246,0.45)";
                el.style.boxShadow = "";
              }}
            >
              <Mail className="w-4 h-4" /> Send an Email
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Scrolling social marquee ── */}
      <SocialMarquee />

      {/* ── Main 4-col grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1 — Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm text-white"
              style={{
                background: "linear-gradient(135deg,#8b5cf6,#3b82f6)",
                boxShadow: "0 0 22px rgba(139,92,246,0.5)",
                fontFamily: "Orbitron, sans-serif",
              }}
            >
              AK
            </div>
            <div>
              <p
                className="font-bold text-white leading-none"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                Aryan <span className="text-purple-400">Kumar</span>
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Full Stack Developer
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Crafting modern, scalable, and visually stunning digital products —
            from pixel-perfect UIs to bulletproof backends.
          </p>

          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.3)",
              color: "#34d399",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </div>

          {/* Social icons */}
          <div className="flex gap-2.5 flex-wrap">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-250"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "#6b7280",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = s.color + "1a";
                  el.style.borderColor = s.color + "70";
                  el.style.color = s.color;
                  el.style.boxShadow = `0 0 14px ${s.color}40`;
                  el.style.transform = "translateY(-3px) scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.05)";
                  el.style.borderColor = "rgba(255,255,255,0.09)";
                  el.style.color = "#6b7280";
                  el.style.boxShadow = "";
                  el.style.transform = "";
                }}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <h4
            className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6 flex items-center gap-2"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <span
              className="w-4 h-px"
              style={{
                background: "linear-gradient(90deg,#8b5cf6,transparent)",
              }}
            />
            Quick Links
          </h4>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 transition-all duration-250"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(139,92,246,0.1)";
                    el.style.color = "#c4b5fd";
                    el.style.paddingLeft = "16px";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "";
                    el.style.color = "";
                    el.style.paddingLeft = "12px";
                  }}
                >
                  <link.icon
                    className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 flex-shrink-0"
                    style={{ color: "#8b5cf6" }}
                  />
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-60 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Tech Stack */}
        <div>
          <h4
            className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6 flex items-center gap-2"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <span
              className="w-4 h-px"
              style={{
                background: "linear-gradient(90deg,#3b82f6,transparent)",
              }}
            />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-2.5 py-1 text-xs rounded-md font-medium cursor-default transition-all duration-250"
                style={{
                  background: tech.color + "12",
                  border: `1px solid ${tech.color}25`,
                  color: tech.color + "cc",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = tech.color + "28";
                  el.style.borderColor = tech.color + "60";
                  el.style.color = tech.color;
                  el.style.boxShadow = `0 0 12px ${tech.color}30`;
                  el.style.transform = "scale(1.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = tech.color + "12";
                  el.style.borderColor = tech.color + "25";
                  el.style.color = tech.color + "cc";
                  el.style.boxShadow = "";
                  el.style.transform = "";
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h4
            className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6 flex items-center gap-2"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <span
              className="w-4 h-px"
              style={{
                background: "linear-gradient(90deg,#ec4899,transparent)",
              }}
            />
            Contact
          </h4>

          <ul className="space-y-4 mb-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "aryankrbjunitp@gmail.com",
                href: "mailto:aryankrbjunitp@email.com",
                color: "#8b5cf6",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "  India",
                href: null,
                color: "#3b82f6",
              },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: item.color + "14" }}
                >
                  <item.icon
                    className="w-3.5 h-3.5"
                    style={{ color: item.color }}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-0.5 uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-gray-300 transition-colors duration-200"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          item.color;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "";
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-300">{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Contact Me CTA button */}
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg,rgba(139,92,246,0.25),rgba(59,130,246,0.25))",
              border: "1px solid rgba(139,92,246,0.35)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "linear-gradient(135deg,#8b5cf6,#3b82f6)";
              el.style.borderColor = "transparent";
              el.style.boxShadow = "0 0 24px rgba(139,92,246,0.5)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background =
                "linear-gradient(135deg,rgba(139,92,246,0.25),rgba(59,130,246,0.25))";
              el.style.borderColor = "rgba(139,92,246,0.35)";
              el.style.boxShadow = "";
              el.style.transform = "";
            }}
          >
            <MessageSquare className="w-4 h-4" /> Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(139,92,246,0.1)" }}
      >
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-400">Aryan Kumar</span>. All rights
          reserved.
        </p>

        {/* Inline nav links */}
        <div className="flex items-center gap-1 flex-wrap justify-center">
          {quickLinks.map((link, i) => (
            <span key={link.path} className="flex items-center">
              <Link
                to={link.path}
                className="text-xs text-gray-600 px-2 py-1 rounded transition-all duration-200"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#c4b5fd";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "";
                }}
              >
                {link.label}
              </Link>
              {i < quickLinks.length - 1 && (
                <span className="text-gray-700 text-xs">·</span>
              )}
            </span>
          ))}
        </div>

        <p className="text-gray-700 text-xs flex items-center gap-1.5">
          Built with <Code2 className="w-3 h-3 text-blue-500" /> &amp;{" "}
          <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
        </p>
      </div>
    </footer>
  );
}
