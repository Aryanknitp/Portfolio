import { motion } from 'motion/react';

interface Skill {
  name: string;
  color: string;
  icon: string;
}

const skillGroups: { category: string; color: string; skills: Skill[] }[] = [
  {
    category: 'Frontend',
    color: '#8b5cf6',
    skills: [
      { name: 'React', color: '#61dafb', icon: '⚛' },
      { name: 'TypeScript', color: '#3178c6', icon: 'TS' },
      { name: 'JavaScript', color: '#f7df1e', icon: 'JS' },
      { name: 'Tailwind', color: '#38bdf8', icon: '🌊' },
    ],
  },
  {
    category: 'Backend',
    color: '#3b82f6',
    skills: [
      { name: 'Node.js', color: '#68a063', icon: '🟢' },
      { name: 'Express.js', color: '#ffffff', icon: '⚡' },
    ],
  },
  {
    category: 'Database',
    color: '#ec4899',
    skills: [
      { name: 'MongoDB', color: '#47a248', icon: '🍃' },
      { name: 'MySQL', color: '#00758f', icon: '🐬' },
      { name: 'Firebase', color: '#ffca28', icon: '🔥' },
    ],
  },
  {
    category: 'Tools',
    color: '#06b6d4',
    skills: [
      { name: 'Git', color: '#f05032', icon: '🔧' },
      { name: 'GitHub', color: '#ffffff', icon: '🐙' },
      { name: 'Postman', color: '#ff6c37', icon: '📮' },
      { name: 'Figma', color: '#a259ff', icon: '🎨' },
    ],
  },
];

export default function SkillOrbit() {
  const allSkills = skillGroups.flatMap(g => g.skills.map(s => ({ ...s, category: g.category, catColor: g.color })));
  const total = allSkills.length;

  return (
    <div className="relative w-full flex flex-col items-center gap-12">
      {/* Orbital visualization */}
      <div className="relative" style={{ width: 400, height: 400 }}>
        {/* Center hub */}
        <motion.div
          className="absolute inset-0 m-auto w-20 h-20 rounded-full flex items-center justify-center z-20"
          style={{ background: 'radial-gradient(circle, #8b5cf6, #3b82f6)', boxShadow: '0 0 40px #8b5cf680' }}
          animate={{ scale: [1, 1.1, 1], rotate: 360 }}
          transition={{ scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 10, repeat: Infinity, ease: 'linear' } }}
        >
          <span className="text-white text-2xl">{'</>'}</span>
        </motion.div>

        {/* Orbit rings */}
        {[120, 170].map((r, ri) => (
          <div
            key={ri}
            className="absolute rounded-full border border-purple-500/20"
            style={{ width: r * 2, height: r * 2, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        ))}

        {/* Orbiting skill nodes */}
        {allSkills.map((skill, i) => {
          const angle = (i / total) * 360;
          const radius = i % 2 === 0 ? 120 : 170;
          const duration = 12 + (i % 4) * 3;

          return (
            <motion.div
              key={skill.name}
              className="absolute"
              style={{ width: '100%', height: '100%', top: 0, left: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration, repeat: Infinity, ease: 'linear', delay: -(angle / 360) * duration }}
            >
              <motion.div
                className="absolute flex flex-col items-center gap-1 cursor-pointer"
                style={{
                  top: `calc(50% - ${radius}px - 20px)`,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration, repeat: Infinity, ease: 'linear', delay: -(angle / 360) * duration }}
                whileHover={{ scale: 1.3 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm backdrop-blur-sm"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', background: `${skill.catColor}30`, boxShadow: `0 0 15px ${skill.catColor}60` }}
                >
                  {skill.icon}
                </div>
                <span className="text-xs text-gray-300 whitespace-nowrap">{skill.name}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Category legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            className="backdrop-blur-sm rounded-xl p-4"
            style={{ background: 'rgba(17,17,40,0.7)', border: '1px solid rgba(255,255,255,0.07)' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = group.color + '60';
              el.style.boxShadow = `0 0 16px ${group.color}18`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.07)';
              el.style.boxShadow = '';
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full" style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
              <span className="text-white font-semibold text-sm">{group.category}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {group.skills.map(skill => (
                <span key={skill.name} className="text-xs text-gray-400 bg-white/5 rounded px-2 py-0.5">{skill.name}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
