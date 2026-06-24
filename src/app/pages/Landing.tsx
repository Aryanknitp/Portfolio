import { useRef, useState, useTransition } from 'react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { Rocket, Mail, Github, Linkedin, ArrowDown, Code2, Layers, Cpu, Users, Play } from 'lucide-react';
import TypewriterEffect from '../components/TypewriterEffect';
import GlowingButton from '../components/GlowingButton';
import SocialMarquee from '../components/SocialMarquee';
import ComplexSphere3D from '../components/ComplexSphere3D';
import HoloCube from '../components/HoloCube';
import FloatingOrb from '../components/FloatingOrb';
// @ts-ignore
import introVideo from '../../imports/video1.mp4';

const stats = [
  { value: '15+', label: 'Projects Built',   icon: Rocket, color: '#8b5cf6' },
  { value: '10+', label: 'Skills Mastered',  icon: Cpu,    color: '#3b82f6' },
  { value: '2+',  label: 'Years Experience', icon: Code2,  color: '#ec4899' },
  { value: '5+',  label: 'Happy Clients',    icon: Users,  color: '#06b6d4' },
];

const pageLinks = [
  { title: 'About Me',  desc: 'My background, education, and what drives me.',        path: '/about',    icon: '👤', color: '#8b5cf6' },
  { title: 'Skills',    desc: 'Explore my full-stack technology stack.',              path: '/skills',   icon: '⚡', color: '#3b82f6' },
  { title: 'Projects',  desc: 'Featured projects built with modern technologies.',    path: '/projects', icon: '🚀', color: '#ec4899' },
  { title: 'Contact',   desc: "Have a project in mind? Let's build something great.", path: '/contact',  icon: '💬', color: '#06b6d4' },
];

export default function Landing() {
  const { scrollY } = useScroll();
  const heroOpacity    = useTransform(scrollY, [0, 700], [1, 0]);
  const heroY          = useTransform(scrollY, [0, 500], [0, -60]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [, startTransition] = useTransition();

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = 0.85;
    videoRef.current.play();
    startTransition(() => setPlaying(true));
  };

  return (
    <div>
      {/* ══════════════════════════════════════════════════════════
          HERO  —  text | video panel | 3D objects  (side by side)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>

        {/* ── Static dark background with grid ── */}
        <div className="absolute inset-0" style={{ background: '#050510', zIndex: 0 }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.05) 1px,transparent 1px)',
          backgroundSize: '64px 64px', zIndex: 1,
        }} />
        {/* Radial purple bloom — left-center */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 15% 55%,rgba(139,92,246,0.13) 0%,transparent 70%)', zIndex: 1 }} />
        {/* Blue bloom — center */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 50% at 52% 50%,rgba(59,130,246,0.08) 0%,transparent 70%)', zIndex: 1 }} />
        {/* Pink bloom — right */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 50% at 88% 50%,rgba(236,72,153,0.08) 0%,transparent 70%)', zIndex: 1 }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '200px', background: 'linear-gradient(to top,#050510,transparent)', zIndex: 1 }} />

        {/* ══ 3-column hero grid ══ */}
        <motion.div
          className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center"
          style={{ minHeight: '100vh', zIndex: 10, opacity: heroOpacity, y: heroY }}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_420px_380px] gap-8 xl:gap-12 items-center py-24 pt-28">

            {/* ── Col 1: Text content ── */}
            <div className="flex flex-col justify-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-5">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-purple-200"
                  style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)', backdropFilter: 'blur(12px)' }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available for New Projects
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }} className="mb-4 leading-none" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                <span className="block text-xs tracking-[0.28em] uppercase text-gray-400 mb-2">Hi, I&apos;m</span>
                <span className="block font-black text-white" style={{ fontSize: 'clamp(2.4rem,5vw,4.2rem)', textShadow: '0 0 40px rgba(139,92,246,0.55)' }}>
                  Aryan
                </span>
                <span className="block font-black" style={{
                  fontSize: 'clamp(2.4rem,5vw,4.2rem)',
                  backgroundImage: 'linear-gradient(90deg,#8b5cf6,#ec4899,#3b82f6)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 18px rgba(139,92,246,0.45))',
                }}>
                  Kumar
                </span>
              </motion.h1>

              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.26 }} className="text-base text-gray-200 mb-3 font-mono">
                <span className="text-purple-400">&gt;&nbsp;</span>
                <TypewriterEffect text="Full Stack Web Developer" delay={65} />
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.36 }} className="text-gray-400 text-sm leading-relaxed mb-7 max-w-sm">
                I craft modern, scalable web applications with clean code and stunning user experiences. Passionate about building things that matter.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.46 }} className="flex flex-wrap gap-3 mb-7">
                <Link to="/projects"><GlowingButton variant="primary"><span className="flex items-center gap-2"><Rocket className="w-4 h-4" /> View Projects</span></GlowingButton></Link>
                <Link to="/contact"><GlowingButton variant="secondary"><span className="flex items-center gap-2"><Mail className="w-4 h-4" /> Contact Me</span></GlowingButton></Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-3">
                {[
                  { icon: Github,   href: 'https://github.com',           color: '#e2e8f0', label: 'GitHub'   },
                  { icon: Linkedin, href: 'https://linkedin.com',         color: '#0a66c2', label: 'LinkedIn' },
                  { icon: Mail,     href: 'mailto:aryan.kumar@email.com', color: '#8b5cf6', label: 'Email'    },
                ].map(({ icon: Icon, href, color, label }, i) => (
                  <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer" title={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(139,92,246,0.3)', color: '#9ca3af', backdropFilter: 'blur(10px)' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = color; el.style.background = color + '20'; el.style.borderColor = color + '65'; el.style.boxShadow = `0 0 16px ${color}50`; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = '#9ca3af'; el.style.background = 'rgba(255,255,255,0.07)'; el.style.borderColor = 'rgba(139,92,246,0.3)'; el.style.boxShadow = ''; }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* ── Col 2: Video panel — fully visible, glowing frame ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="flex flex-col items-center"
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Live Intro</span>
              </div>

              {/* Glowing video frame */}
              <motion.div
                animate={{ boxShadow: ['0 0 30px rgba(139,92,246,0.35)', '0 0 55px rgba(139,92,246,0.6)', '0 0 30px rgba(139,92,246,0.35)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(139,92,246,0.5)' }}
              >
                {/* Fake browser chrome bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ background: 'rgba(5,5,16,0.95)', borderBottom: '1px solid rgba(139,92,246,0.2)' }}>
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-gray-500 font-mono truncate">aryan-kumar/intro.mp4</span>
                </div>

                {/* The video itself */}
                <video
                  ref={videoRef}
                  src={introVideo}
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full block"
                  style={{ aspectRatio: '16/10', objectFit: 'cover', objectPosition: 'center', background: '#0a0a20', willChange: 'transform' }}
                />

                {/* Play button overlay — hidden once playing */}
                {!playing && (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(5,5,16,0.55)', backdropFilter: 'blur(2px)' }}>
                    <motion.button
                      onClick={handlePlay}
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.94 }}
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 64, height: 64,
                        background: 'linear-gradient(135deg,#8b5cf6,#3b82f6)',
                        boxShadow: '0 0 32px rgba(139,92,246,0.7)',
                      }}
                      aria-label="Play intro video"
                    >
                      <Play className="w-7 h-7 text-white fill-white" style={{ marginLeft: 3 }} />
                    </motion.button>
                  </div>
                )}

                {/* Corner glow dots */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.8s' }} />
              </motion.div>

              {/* Caption */}
              <p className="mt-3 text-xs text-gray-500 text-center" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {playing ? '🔊 Playing with sound' : '▶ Click to play intro'}
              </p>
            </motion.div>

            {/* ── Col 3: 3D objects (lazy-loaded so they never block first paint) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
              className="relative flex items-center justify-center"
              style={{ height: '420px' }}
            >
              {/* Central sphere */}
              <ComplexSphere3D size={320} primaryColor="#8b5cf6" secondaryColor="#3b82f6" accentColor="#ec4899" />

              {/* Floating cubes */}
              <motion.div className="absolute top-2 right-0 opacity-65"
                animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                <HoloCube size={46} color="#8b5cf6" speed={8} />
              </motion.div>
              <motion.div className="absolute bottom-4 left-0 opacity-50"
                animate={{ y: [0, 10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <HoloCube size={34} color="#3b82f6" speed={12} />
              </motion.div>
              <motion.div className="absolute top-1/3 -right-4 opacity-40"
                animate={{ y: [0, -8, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                <HoloCube size={26} color="#ec4899" speed={7} />
              </motion.div>

              {/* Floating orbs */}
              <motion.div className="absolute -top-4 left-8 opacity-35"
                animate={{ y: [0, -14, 0], rotate: [0, 180, 360] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                <FloatingOrb color="#06b6d4" size={44} />
              </motion.div>
              <motion.div className="absolute bottom-0 right-8 opacity-30"
                animate={{ y: [0, 12, 0], rotate: [360, 180, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>
                <FloatingOrb color="#ec4899" size={36} />
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          style={{ zIndex: 10 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs tracking-[0.22em] uppercase text-gray-500">Scroll</span>
          <ArrowDown className="w-4 h-4 text-purple-400" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          SCROLLING SOCIAL STRIP
      ══════════════════════════════════════════════════ */}
      <SocialMarquee />

      {/* ══════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="rounded-2xl p-6 text-center cursor-default"
              style={{ background: 'rgba(10,10,32,0.85)', border: `1px solid ${stat.color}30`, backdropFilter: 'blur(10px)' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = `0 0 28px ${stat.color}30`; el.style.borderColor = stat.color + '60'; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = ''; el.style.borderColor = stat.color + '30'; }}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-3" style={{ color: stat.color }} />
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Orbitron, sans-serif', color: stat.color }}>{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          EXPLORE PORTFOLIO
      ══════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Explore <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,#8b5cf6,#ec4899)' }}>My Portfolio</span>
            </h2>
            <p className="text-gray-400">Dive into different sections of my work and story.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pageLinks.map((page, i) => (
              <motion.div key={page.path} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group">
                <Link to={page.path}>
                  <div
                    className="h-full rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
                    style={{ background: 'rgba(10,10,32,0.85)', border: `1px solid ${page.color}22`, backdropFilter: 'blur(10px)' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = page.color + '60'; el.style.boxShadow = `0 0 30px ${page.color}20`; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = page.color + '22'; el.style.boxShadow = ''; }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: `${page.color}15`, border: `1px solid ${page.color}30` }}>{page.icon}</div>
                    <div>
                      <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.88rem' }}>{page.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <span className="mt-auto text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200" style={{ color: page.color }}>
                      Explore <Layers className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
