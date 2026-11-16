import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SeriesMark } from './Poster';
import { profile } from '../data/portfolio';
import { EASE } from './fx';

export type NavItem = {
  href: string;
  label: string;
  badge?: string;
};

const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'The Series' },
  { href: '/about', label: 'About' },
  { href: '/vlsi-analog-ic', label: 'Analog IC & VLSI' },
  { href: '/projects', label: 'Projects' },
  { href: '/leadership-public-speaking', label: 'Leadership & Speaking' },
  { href: '/entrepreneurship', label: 'Entrepreneurship' },
];

export function PageHeader({ currentPath }: { currentPath: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <div className="gutter flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <div className="flex items-center gap-6 lg:gap-8">
          <a href="/" className="text-[22px] transition hover:opacity-90" aria-label="Harinivas B Home">
            <SeriesMark />
          </a>
          <nav className="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Site Navigation">
            {NAV_LINKS.map((link) => {
              const active = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-md px-3 py-1.5 text-xs font-semibold tracking-wide transition lg:text-[13px] ${
                    active ? 'text-bone bg-white/10' : 'text-mist hover:text-bone hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="subpage-nav-pill"
                      className="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-crimson"
                      transition={{ duration: 0.3, ease: EASE }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-bone transition hover:border-white/40 hover:bg-white/5 sm:block"
          >
            GitHub ↗
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-bone transition hover:border-white/40 hover:bg-white/5 sm:block"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-crimson px-4 py-1.5 text-xs font-bold tracking-wide text-white transition hover:bg-crimson-2 shadow-[0_0_20px_rgba(229,19,43,0.35)]"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* Mobile nav rail */}
      <div className="gutter flex gap-2 overflow-x-auto border-t border-white/5 py-2.5 md:hidden" tabIndex={0} aria-label="Mobile Navigation">
        {NAV_LINKS.map((link) => {
          const active = currentPath === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition ${
                active ? 'bg-crimson text-white' : 'glass text-mist hover:text-bone'
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}

export function PageFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-2 py-14">
      <div className="gutter mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <div className="mb-2">
              <SeriesMark />
            </div>
            <p className="font-display text-2xl text-bone">Harinivas B</p>
            <p className="text-xs text-mist">
              ECE Student | Aspiring Analog IC / VLSI Engineer | Student Entrepreneur
            </p>
            <p className="mt-1 text-xs text-smoke">
              Sri Eshwar College of Engineering · Coimbatore, Tamil Nadu, India
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-mist">
            <a href="/" className="hover:text-bone">The Series (Home)</a>
            <a href="/about" className="hover:text-bone">About</a>
            <a href="/vlsi-analog-ic" className="hover:text-bone">Analog IC & VLSI</a>
            <a href="/projects" className="hover:text-bone">Projects</a>
            <a href="/leadership-public-speaking" className="hover:text-bone">Leadership</a>
            <a href="/entrepreneurship" className="hover:text-bone">Entrepreneurship</a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-[11px] text-smoke sm:flex-row">
          <p>© {new Date().getFullYear()} Harinivas B. Official Portfolio & Knowledge Base.</p>
          <div className="flex gap-4">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-bone">
              GitHub
            </a>
            <a href="/sitemap.xml" className="hover:text-bone">
              XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SubpageLayout({
  currentPath,
  children,
}: {
  currentPath: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink text-bone font-sans selection:bg-crimson selection:text-white">
      <div className="grain" aria-hidden />
      <PageHeader currentPath={currentPath} />
      <main className="pt-28 md:pt-32 pb-24">
        {children}
      </main>
      <PageFooter />
    </div>
  );
}
