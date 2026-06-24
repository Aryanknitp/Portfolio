import {type ReactNode } from 'react';
import { motion } from 'motion/react';

interface GlowingButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function GlowingButton({ children, variant = 'primary', onClick, className = '' }: GlowingButtonProps) {
  const variants = {
    primary: {
      bg: 'bg-gradient-to-r from-purple-600 to-blue-600',
      glow: 'shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80',
      text: 'text-white',
    },
    secondary: {
      bg: 'bg-transparent border-2 border-purple-500',
      glow: 'shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60',
      text: 'text-purple-400',
    },
  };

  const variantStyles = variants[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${variantStyles.bg} ${variantStyles.glow} ${variantStyles.text} px-8 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
