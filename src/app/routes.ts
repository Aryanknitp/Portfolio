import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';

function HydrateFallback() {
  return null;
}

// React Router's own lazy() integrates with startTransition automatically,
// which prevents the "suspended during synchronous input" error.
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    HydrateFallback,
    children: [
      {
        index: true,
        lazy: () => import('./pages/Landing').then((m) => ({ Component: m.default })),
      },
      {
        path: 'about',
        lazy: () => import('./pages/About').then((m) => ({ Component: m.default })),
      },
      {
        path: 'skills',
        lazy: () => import('./pages/Skills').then((m) => ({ Component: m.default })),
      },
      {
        path: 'projects',
        lazy: () => import('./pages/Projects').then((m) => ({ Component: m.default })),
      },
      {
        path: 'contact',
        lazy: () => import('./pages/Contact').then((m) => ({ Component: m.default })),
      },
    ],
  },
]);
