import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface NoiseSphereProps {
  size?: number;
  color?: string;
  interactive?: boolean;
}

export default function NoiseSphere({ size = 300, color = '#3b82f6', interactive = true }: NoiseSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = size;
    canvas.height = size;

    let animationId: number;
    let time = 0;

    const noise = (x: number, y: number, z: number) =>
      (Math.sin(Math.floor(x) * 12.9898 + Math.floor(y) * 78.233 + Math.floor(z) * 45.164) * 43758.5453) % 1;

    const drawSphere = () => {
      ctx.clearRect(0, 0, size, size);
      const centerX = size / 2;
      const centerY = size / 2;
      const baseRadius = size / 2.5;
      const latitudes = 15;
      const longitudes = 20;

      for (let lat = 0; lat < latitudes; lat++) {
        ctx.beginPath();
        const latAngle = (lat / latitudes) * Math.PI;
        for (let lon = 0; lon <= longitudes; lon++) {
          const lonAngle = (lon / longitudes) * Math.PI * 2;
          const noiseValue = noise(
            Math.cos(lonAngle) * Math.sin(latAngle) + time,
            Math.sin(lonAngle) * Math.sin(latAngle) + time,
            Math.cos(latAngle) + time
          );
          const radius = baseRadius + noiseValue * 20;
          const x = centerX + radius * Math.sin(latAngle) * Math.cos(lonAngle);
          const y = centerY + radius * Math.sin(latAngle) * Math.sin(lonAngle);
          if (lon === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const alpha = 0.3 + Math.sin(latAngle + time) * 0.2;
        ctx.strokeStyle = color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      for (let lon = 0; lon < longitudes; lon++) {
        ctx.beginPath();
        const lonAngle = (lon / longitudes) * Math.PI * 2;
        for (let lat = 0; lat <= latitudes; lat++) {
          const latAngle = (lat / latitudes) * Math.PI;
          const noiseValue = noise(
            Math.cos(lonAngle) * Math.sin(latAngle) + time,
            Math.sin(lonAngle) * Math.sin(latAngle) + time,
            Math.cos(latAngle) + time
          );
          const radius = baseRadius + noiseValue * 20;
          const x = centerX + radius * Math.sin(latAngle) * Math.cos(lonAngle + time * 0.1);
          const y = centerY + radius * Math.sin(latAngle) * Math.sin(lonAngle + time * 0.1);
          if (lat === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const alpha = 0.3 + Math.cos(lonAngle + time) * 0.2;
        ctx.strokeStyle = color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseRadius);
      gradient.addColorStop(0, color + '40');
      gradient.addColorStop(0.5, color + '10');
      gradient.addColorStop(1, color + '00');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);

      time += 0.02;
      animationId = requestAnimationFrame(drawSphere);
    };

    drawSphere();
    return () => cancelAnimationFrame(animationId);
  }, [size, color]);

  useEffect(() => {
    if (!interactive || !containerRef.current) return;
    const el = containerRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mousePos.current = {
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      };
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  return (
    <motion.div
      ref={containerRef}
      className="relative cursor-pointer"
      style={{ width: size, height: size, perspective: '1000px' }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={interactive ? {} : { rotateY: 360 }}
        transition={interactive ? { type: 'spring', stiffness: 100, damping: 20 } : { duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <canvas ref={canvasRef} className="w-full h-full" style={{ filter: 'blur(0.5px)' }} />
        <div
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: `0 0 60px ${color}60, 0 0 100px ${color}30`, animation: 'pulse 3s ease-in-out infinite' }}
        />
      </motion.div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ background: color, boxShadow: `0 0 10px ${color}`, left: '50%', top: '50%' }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 4) * size * 0.6, 0],
            y: [0, Math.sin(i * Math.PI / 4) * size * 0.6, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
        />
      ))}
    </motion.div>
  );
}
