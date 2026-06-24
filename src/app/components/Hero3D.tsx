import { motion } from 'motion/react';
import NoiseSphere from './NoiseSphere';
import FloatingOrb from './FloatingOrb';

export default function Hero3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central noise sphere */}
      <div className="relative z-10">
        <NoiseSphere size={280} color="#8b5cf6" interactive={true} />
      </div>

      {/* Orbiting orbs */}
      <motion.div
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ width: 340, height: 340 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FloatingOrb color="#3b82f6" size={60} />
        </div>
      </motion.div>

      <motion.div
        className="absolute"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ width: 420, height: 420 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FloatingOrb color="#ec4899" size={45} />
        </div>
      </motion.div>

      <motion.div
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        style={{ width: 500, height: 500 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FloatingOrb color="#06b6d4" size={35} />
        </div>
      </motion.div>

      {/* Decorative rings */}
      {[200, 280, 360].map((r, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-purple-500/20"
          style={{ width: r, height: r }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.02, 1] }}
          transition={{ rotate: { duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }, scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
        />
      ))}
    </div>
  );
}
