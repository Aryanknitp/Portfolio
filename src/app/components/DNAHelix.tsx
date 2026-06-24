import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface DNAHelixProps {
  width?: number;
  height?: number;
  color1?: string;
  color2?: string;
}

export default function DNAHelix({ width = 120, height = 320, color1 = '#8b5cf6', color2 = '#3b82f6' }: DNAHelixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = width;
    canvas.height = height;

    let animId: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const amplitude = width * 0.35;
      const period = 60;
      const rungs = Math.floor(height / (period / 2));

      // Draw two strands
      for (let strand = 0; strand < 2; strand++) {
        const offset = strand * Math.PI;
        ctx.beginPath();
        for (let y = 0; y <= height; y += 2) {
          const x = cx + Math.sin((y / period) * Math.PI * 2 + time + offset) * amplitude;
          if (y === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = strand === 0 ? color1 : color2;
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = strand === 0 ? color1 : color2;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Draw rungs (base pairs)
      for (let i = 0; i <= rungs; i++) {
        const y = (i / rungs) * height;
        const x1 = cx + Math.sin((y / period) * Math.PI * 2 + time) * amplitude;
        const x2 = cx + Math.sin((y / period) * Math.PI * 2 + time + Math.PI) * amplitude;

        const grad = ctx.createLinearGradient(x1, y, x2, y);
        grad.addColorStop(0, color1 + 'cc');
        grad.addColorStop(0.5, '#ffffff40');
        grad.addColorStop(1, color2 + 'cc');

        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Dots at strand intersections
        [[x1, color1], [x2, color2]].forEach(([x, c]) => {
          ctx.beginPath();
          ctx.arc(x as number, y, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = c as string;
          ctx.shadowBlur = 12;
          ctx.shadowColor = c as string;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      time += 0.025;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [width, height, color1, color2]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{ width, height }}
    >
      <canvas ref={canvasRef} style={{ width, height }} />
    </motion.div>
  );
}
