import { motion } from 'motion/react';
import SkillOrbit from '../components/SkillOrbit';
import HoloCube from '../components/HoloCube';
import FloatingOrb from '../components/FloatingOrb';

const skillCategories = [
  {
    category: 'Frontend',
    color: '#8b5cf6',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90, icon: '⚛' },
      { name: 'TypeScript', level: 80, icon: 'TS' },
      { name: 'JavaScript', level: 92, icon: 'JS' },
      { name: 'Tailwind CSS', level: 88, icon: '🌊' },
    ],
  },
  {
    category: 'Backend',
    color: '#3b82f6',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 82, icon: '🟢' },
      { name: 'Express.js', level: 80, icon: '⚡' },
      { name: 'REST APIs', level: 85, icon: '🔗' },
    ],
  },
  {
    category: 'Database',
    color: '#ec4899',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 78, icon: '🍃' },
      { name: 'MySQL', level: 72, icon: '🐬' },
      { name: 'Firebase', level: 75, icon: '🔥' },
    ],
  },
  {
    category: 'Tools',
    color: '#06b6d4',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 88, icon: '🔧' },
      { name: 'GitHub', level: 88, icon: '🐙' },
      { name: 'Postman', level: 80, icon: '📮' },
      { name: 'Figma', level: 70, icon: '🎨' },
    ],
  },
];

function SkillBar({ name, level, color, icon }: { name: string; level: number; color: string; icon: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm text-gray-300 font-medium">
          <span className="text-base">{icon}</span> {name}
        </span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg,${color},${color}80)`, boxShadow: `0 0 8px ${color}60` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-28 pb-16 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Skills <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,#3b82f6,#8b5cf6)' }}>&amp; Technologies</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">My technical toolkit for building modern full-stack applications.</p>
        <div className="mt-6 flex justify-center gap-2">
          <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)' }} />
          <div className="w-3 h-1 rounded-full bg-blue-400/40" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-20 relative z-10">
        {/* Orbit visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <SkillOrbit />
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(139,92,246,0.3),transparent)' }} />
          <span className="text-gray-500 text-sm px-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>PROFICIENCY</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(139,92,246,0.3),transparent)' }} />
        </div>

        {/* Skill bars by category */}
        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{ background: 'rgba(10,10,32,0.8)', border: `1px solid ${cat.color}20` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif', color: cat.color }}>{cat.category}</h3>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={cat.color} />
              ))}
              {/* Decorative cube */}
              <div className="absolute top-3 right-3 opacity-20">
                <HoloCube size={30} color={cat.color} speed={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack overview */}
        <div>
          <h2 className="text-xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Full <span className="text-purple-400">Tech Stack</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((cat) => cat.skills.map((s) => ({ ...s, catColor: cat.color }))).map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm cursor-default"
                style={{ background: `${skill.catColor}10`, border: `1px solid ${skill.catColor}25`, color: '#d1d5db' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = skill.catColor + '25';
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${skill.catColor}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = skill.catColor + '10';
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                <span>{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
                <span className="text-xs opacity-60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating orb decoration */}
        <div className="flex justify-center gap-8 opacity-40 pointer-events-none">
          <FloatingOrb color="#8b5cf6" size={80} />
          <FloatingOrb color="#3b82f6" size={60} />
          <FloatingOrb color="#ec4899" size={70} />
        </div>
      </div>
    </div>
  );
}
