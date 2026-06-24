import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Instagram, Mail, Code2, Globe, Coffee, Cpu, Layers } from 'lucide-react';

const items = [
  { icon: Github,    label: 'GitHub',     color: '#e2e8f0', href: 'https://github.com' },
  { icon: Linkedin,  label: 'LinkedIn',   color: '#0a66c2', href: 'https://linkedin.com' },
  { icon: Twitter,   label: 'Twitter',    color: '#1da1f2', href: 'https://twitter.com' },
  { icon: Instagram, label: 'Instagram',  color: '#e1306c', href: 'https://instagram.com' },
  { icon: Mail,      label: 'Email',      color: '#8b5cf6', href: 'mailto:aryan.kumar@email.com' },
  { icon: Code2,     label: 'Open Source',color: '#10b981', href: '#' },
  { icon: Globe,     label: 'Portfolio',  color: '#06b6d4', href: '/' },
  { icon: Coffee,    label: 'Buy a Coffee',color: '#f59e0b', href: '#' },
  { icon: Cpu,       label: 'Dev.to',     color: '#3b82f6', href: '#' },
  { icon: Layers,    label: 'Dribbble',   color: '#ec4899', href: '#' },
];

// Duplicate for seamless loop
const doubled = [...items, ...items];

export default function SocialMarquee() {
  return (
    <div className="relative overflow-hidden py-6" style={{ borderTop: '1px solid rgba(139,92,246,0.12)', borderBottom: '1px solid rgba(139,92,246,0.12)' }}>
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg,#050510,transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(-90deg,#050510,transparent)' }} />

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full whitespace-nowrap group transition-all duration-300 flex-shrink-0"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid rgba(255,255,255,0.08)`,
              color: '#9ca3af',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = item.color + '18';
              el.style.borderColor = item.color + '60';
              el.style.color = item.color;
              el.style.boxShadow = `0 0 16px ${item.color}30`;
              el.style.transform = 'scale(1.06) translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(255,255,255,0.04)';
              el.style.borderColor = 'rgba(255,255,255,0.08)';
              el.style.color = '#9ca3af';
              el.style.boxShadow = '';
              el.style.transform = '';
            }}
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
