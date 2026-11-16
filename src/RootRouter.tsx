import { useEffect, useState, lazy, Suspense } from 'react';
import SeriesApp from './App';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const VlsiAnalogIcPage = lazy(() => import('./pages/VlsiAnalogIcPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const LeadershipPublicSpeakingPage = lazy(() => import('./pages/LeadershipPublicSpeakingPage'));
const EntrepreneurshipPage = lazy(() => import('./pages/EntrepreneurshipPage'));

function getPath(): string {
  if (typeof window === 'undefined') return '/';
  const p = window.location.pathname.replace(/\/+$/, '') || '/';
  return p;
}

export default function RootRouter() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (path === '/about') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-ink" />}>
        <AboutPage />
      </Suspense>
    );
  }

  if (path === '/vlsi-analog-ic') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-ink" />}>
        <VlsiAnalogIcPage />
      </Suspense>
    );
  }

  if (path === '/projects') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-ink" />}>
        <ProjectsPage />
      </Suspense>
    );
  }

  if (path === '/leadership-public-speaking') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-ink" />}>
        <LeadershipPublicSpeakingPage />
      </Suspense>
    );
  }

  if (path === '/entrepreneurship') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-ink" />}>
        <EntrepreneurshipPage />
      </Suspense>
    );
  }

  // Default to the cinematic SeriesApp for root '/' or any unmapped routes
  return <SeriesApp />;
}
