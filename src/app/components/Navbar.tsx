import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition-colors duration-200 group ${
      isActive ? 'text-purple-400' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5, 5, 16, 0.85)' : 'rgba(5, 5, 16, 0.4)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid transparent',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', fontFamily: 'Orbitron, sans-serif', boxShadow: '0 0 20px rgba(139,92,246,0.5)' }}
          >
            AK
          </div>
          <span
            className="hidden sm:block font-semibold text-white group-hover:text-purple-300 transition-colors"
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.9rem', letterSpacing: '0.05em' }}
          >
            Aryan<span className="text-purple-400"> Kumar</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === '/'} className={linkClass}>
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
            </NavLink>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', boxShadow: '0 0 15px rgba(139,92,246,0.4)' }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Contact Me
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-500/60 transition-all"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(5, 5, 16, 0.97)', borderBottom: '1px solid rgba(139,92,246,0.2)' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? 'text-purple-400 bg-purple-500/10 border border-purple-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }}
              >
                <Code2 className="w-4 h-4" /> Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
