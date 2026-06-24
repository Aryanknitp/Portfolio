import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface ComplexSphere3DProps {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

export default function ComplexSphere3D({
  size = 380,
  primaryColor = '#8b5cf6',
  secondaryColor = '#3b82f6',
  accentColor = '#ec4899',
}: ComplexSphere3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = size;
    canvas.height = size;

    const cx = size / 2;
    const cy = size / 2;
    const sphereR = size * 0.26;
    const ringR = size * 0.38;
    let rotY = 0;
    let rotX = 0.3;
    let time = 0;
    let animId: number;

    // Project a 3D point to 2D using rotation matrices
    const project = (x: number, y: number, z: number) => {
      // Mouse-influenced tilt
      const mx = mouseRef.current.x * 0.3;
      const my = mouseRef.current.y * 0.3;
      const ry = rotY + mx;
      const rx = rotX + my;

      const x1 = x * Math.cos(ry) + z * Math.sin(ry);
      const z1 = -x * Math.sin(ry) + z * Math.cos(ry);
      const y2 = y * Math.cos(rx) - z1 * Math.sin(rx);
      const z2 = y * Math.sin(rx) + z1 * Math.cos(rx);
      return { sx: cx + x1, sy: cy + y2, z: z2 };
    };

    // Draw an orbital ring tilted by tiltX, tiltY
    const drawRing = (radius: number, tiltX: number, tiltY: number, color: string, alpha: number, dotSpeed: number) => {
      ctx.beginPath();
      for (let i = 0; i <= 120; i++) {
        const angle = (i / 120) * Math.PI * 2;
        const x0 = Math.cos(angle) * radius;
        const y0 = 0;
        const z0 = Math.sin(angle) * radius;
        // Apply ring tilt
        const xt = x0;
        const yt = y0 * Math.cos(tiltX) - z0 * Math.sin(tiltX);
        const zt = y0 * Math.sin(tiltX) + z0 * Math.cos(tiltX);
        const xt2 = xt * Math.cos(tiltY) + zt * Math.sin(tiltY);
        const zt2 = -xt * Math.sin(tiltY) + zt * Math.cos(tiltY);
        const p = project(xt2, yt, zt2);
        if (i === 0) ctx.moveTo(p.sx, p.sy);
        else ctx.lineTo(p.sx, p.sy);
      }
      ctx.strokeStyle = color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = color;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Satellite dot on ring
      const satAngle = time * dotSpeed;
      const sx0 = Math.cos(satAngle) * radius;
      const sz0 = Math.sin(satAngle) * radius;
      const syt = 0;
      const syt2 = syt * Math.cos(tiltX) - sz0 * Math.sin(tiltX);
      const szt = syt * Math.sin(tiltX) + sz0 * Math.cos(tiltX);
      const sxt2 = sx0 * Math.cos(tiltY) + szt * Math.sin(tiltY);
      const szt2 = -sx0 * Math.sin(tiltY) + szt * Math.cos(tiltY);
      const sp = project(sxt2, syt2, szt2);

      ctx.beginPath();
      ctx.arc(sp.sx, sp.sy, 5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.shadowBlur = 20;
      ctx.shadowColor = color;
      ctx.fill();

      // Trail dots
      for (let t = 1; t <= 6; t++) {
        const ta = satAngle - t * 0.15;
        const tx0 = Math.cos(ta) * radius;
        const tz0 = Math.sin(ta) * radius;
        const tyt2 = 0 * Math.cos(tiltX) - tz0 * Math.sin(tiltX);
        const tzt = 0 * Math.sin(tiltX) + tz0 * Math.cos(tiltX);
        const txt2 = tx0 * Math.cos(tiltY) + tzt * Math.sin(tiltY);
        const tzt2 = -tx0 * Math.sin(tiltY) + tzt * Math.cos(tiltY);
        const tp = project(txt2, tyt2, tzt2);
        ctx.beginPath();
        ctx.arc(tp.sx, tp.sy, 5 * (1 - t / 7), 0, Math.PI * 2);
        ctx.globalAlpha = (1 - t / 7) * 0.5;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      ctx.shadowBlur = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      // ---- Sphere wireframe ----
      const lats = 10;
      const lons = 16;
      for (let lat = 1; lat < lats; lat++) {
        const theta = (lat / lats) * Math.PI;
        ctx.beginPath();
        for (let lon = 0; lon <= lons; lon++) {
          const phi = (lon / lons) * Math.PI * 2;
          const x = Math.sin(theta) * Math.cos(phi) * sphereR;
          const y = Math.cos(theta) * sphereR;
          const z = Math.sin(theta) * Math.sin(phi) * sphereR;
          const p = project(x, y, z);
          if (lon === 0) ctx.moveTo(p.sx, p.sy);
          else ctx.lineTo(p.sx, p.sy);
        }
        const alpha = 0.15 + 0.1 * Math.sin(lat + time);
        ctx.strokeStyle = primaryColor + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
      for (let lon = 0; lon < lons; lon++) {
        const phi = (lon / lons) * Math.PI * 2;
        ctx.beginPath();
        for (let lat = 0; lat <= lats; lat++) {
          const theta = (lat / lats) * Math.PI;
          const x = Math.sin(theta) * Math.cos(phi) * sphereR;
          const y = Math.cos(theta) * sphereR;
          const z = Math.sin(theta) * Math.sin(phi) * sphereR;
          const p = project(x, y, z);
          if (lat === 0) ctx.moveTo(p.sx, p.sy);
          else ctx.lineTo(p.sx, p.sy);
        }
        const alpha = 0.15 + 0.1 * Math.cos(lon + time * 0.7);
        ctx.strokeStyle = secondaryColor + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // ---- 3 orbital rings ----
      drawRing(ringR * 0.85, 0.5, 0.2, primaryColor, 0.7, 1.0);
      drawRing(ringR * 0.95, -0.7, 0.9, secondaryColor, 0.6, 0.65);
      drawRing(ringR * 1.0, 1.1, -0.4, accentColor, 0.55, 1.4);

      // ---- Central glow ----
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, sphereR * 1.4);
      glow.addColorStop(0, primaryColor + 'aa');
      glow.addColorStop(0.35, primaryColor + '30');
      glow.addColorStop(1, primaryColor + '00');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, size, size);

      // ---- Inner core pulse ----
      const pulse = (Math.sin(time * 2) + 1) / 2;
      const coreR = sphereR * (0.35 + pulse * 0.08);
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR);
      core.addColorStop(0, '#ffffff90');
      core.addColorStop(0.3, primaryColor + 'cc');
      core.addColorStop(1, primaryColor + '00');
      ctx.fillStyle = core;
      ctx.fillRect(0, 0, size, size);

      rotY += 0.004;
      time += 0.018;
      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / size - 0.5) * 0.6,
        y: ((e.clientY - rect.top) / size - 0.5) * 0.6,
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size, primaryColor, secondaryColor, accentColor]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{ width: size, height: size, filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.4))' }}
    >
      <canvas ref={canvasRef} style={{ width: size, height: size }} />
    </motion.div>
  );
}
