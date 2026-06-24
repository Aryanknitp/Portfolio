import { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

// Thin progress bar shown at the top while a lazy route chunk is downloading
function NavProgress() {
  const { state } = useNavigation();
  if (state !== 'loading') return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-[999] h-[3px] overflow-hidden">
      <div
        className="h-full"
        style={{
          background: 'linear-gradient(90deg,#8b5cf6,#3b82f6,#ec4899)',
          animation: 'nav-progress 1.2s ease-in-out infinite',
          transformOrigin: 'left',
        }}
      />
      <style>{`
        @keyframes nav-progress {
          0%   { transform: scaleX(0.05); opacity:1; }
          70%  { transform: scaleX(0.85); opacity:1; }
          100% { transform: scaleX(1);    opacity:0; }
        }
      `}</style>
    </div>
  );
}

export default function Layout() {
  return (
    <div
      className="relative min-h-screen text-white overflow-x-hidden"
      style={{ background: '#050510', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Gradient progress bar during route transitions */}
      <NavProgress />

      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        {/*
          Suspense here catches lazy() canvas components inside pages.
          The route-level lazy loading is handled by React Router + startTransition,
          so no page-level spinner is needed — the NavProgress bar covers it.
        */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
