import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface FloatingOrbProps {
  color?: string;
  size?: number;
  mouseFollow?: boolean;
}

export default function FloatingOrb({ color = '#8b5cf6', size = 200, mouseFollow = false }: FloatingOrbProps) {
  const orbRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = size;
    canvas.height = size;

    let animationId: number;
    let rotation = 0;

    const drawNoiseSphere = () => {
      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;
      const radius = size / 2 - 10;

      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2 + rotation;
        const noiseRadius = radius + Math.sin(rotation + i) * 10;

        ctx.beginPath();
        for (let j = 0; j <= 100; j++) {
          const a = (j / 100) * Math.PI * 2;
          const r = noiseRadius + Math.sin(a * 8 + rotation * 2) * 5;
          const x = centerX + Math.cos(a) * r * Math.cos(angle);
          const y = centerY + Math.sin(a) * r * Math.cos(angle);
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.1 + (i / 20) * 0.3;
        ctx.stroke();
      }

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, color + '80');
      gradient.addColorStop(0.5, color + '20');
      gradient.addColorStop(1, color + '00');
      ctx.globalAlpha = 1;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);

      rotation += 0.01;
      animationId = requestAnimationFrame(drawNoiseSphere);
    };

    drawNoiseSphere();
    return () => cancelAnimationFrame(animationId);
  }, [color, size]);

  useEffect(() => {
    if (!mouseFollow || !orbRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const rect = orbRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / 30;
      const deltaY = (e.clientY - centerY) / 30;
      orbRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.1)`;
    };

    const handleMouseLeave = () => {
      if (orbRef.current) orbRef.current.style.transform = 'translate(0px, 0px) scale(1)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseFollow]);

  return (
    <motion.div
      ref={orbRef}
      className="relative"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2, rotate: 180 }}
      transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.3 }, rotate: { duration: 2 } }}
      style={{ width: size, height: size, transition: 'transform 0.3s ease-out' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" style={{ filter: 'blur(1px)' }} />
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{ boxShadow: `0 0 40px ${color}80, inset 0 0 40px ${color}40`, border: `1px solid ${color}40` }}
      />
      <motion.div
        className="absolute inset-[20%] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, filter: 'blur(10px)' }}
      />
    </motion.div>
  );
}
