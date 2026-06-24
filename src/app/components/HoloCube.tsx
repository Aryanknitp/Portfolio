import { motion } from 'motion/react';

interface HoloCubeProps {
  size?: number;
  color?: string;
  speed?: number;
  className?: string;
}

export default function HoloCube({ size = 80, color = '#8b5cf6', speed = 10, className = '' }: HoloCubeProps) {
  const half = size / 2;
  const faces = [
    { transform: `translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div style={{ perspective: `${size * 5}px`, width: size, height: size }} className={className}>
      <motion.div
        style={{ width: size, height: size, transformStyle: 'preserve-3d', position: 'relative' }}
        animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {faces.map((face, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: size,
              height: size,
              border: `1px solid ${color}80`,
              boxShadow: `0 0 8px ${color}40, inset 0 0 8px ${color}10`,
              background: `${color}06`,
              transform: face.transform,
              backdropFilter: 'blur(2px)',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
