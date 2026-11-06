import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode } from 'react';
import Lenis from 'lenis';
import { useReducedMotionPref } from './useMedia';

type ScrollApi = {
  scrollTo: (target: string | HTMLElement | number, opts?: { offset?: number; immediate?: boolean; duration?: number }) => void;
  lock: () => void;
  unlock: () => void;
  lenis: Lenis | null;
};

const ScrollCtx = createContext<ScrollApi | null>(null);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotionPref();
  const lenisRef = useRef<Lenis | null>(null);
  const locks = useRef(0);

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false, // Maintain native smooth touch scrolling on mobile to avoid scroll trapping
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  const scrollTo = useCallback<ScrollApi['scrollTo']>((target, opts = {}) => {
    const isTop = target === 0 || target === '#top';
    const offset = opts.offset ?? (isTop ? 0 : -72);

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset,
        immediate: opts.immediate,
        duration: opts.duration ?? (opts.immediate ? 0 : 1.2),
      });
    } else {
      const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
      if (el === null && typeof target === 'string') return;
      const top =
        typeof target === 'number'
          ? target
          : typeof el === 'number'
            ? el
            : (el?.getBoundingClientRect().top ?? 0) + window.scrollY + offset;
      window.scrollTo({ top: Math.max(0, top), behavior: opts.immediate ? 'auto' : 'smooth' });
    }
  }, []);

  const lock = useCallback(() => {
    locks.current += 1;
    if (locks.current === 1) {
      lenisRef.current?.stop();
      document.documentElement.style.overflow = 'hidden';
    }
  }, []);

  const unlock = useCallback(() => {
    locks.current = Math.max(0, locks.current - 1);
    if (locks.current === 0) {
      lenisRef.current?.start();
      document.documentElement.style.overflow = '';
    }
  }, []);

  return <ScrollCtx.Provider value={{ scrollTo, lock, unlock, lenis: lenisRef.current }}>{children}</ScrollCtx.Provider>;
}

export function useSmoothScroll() {
  const ctx = useContext(ScrollCtx);
  if (!ctx) throw new Error('useSmoothScroll must be used inside SmoothScrollProvider');
  return ctx;
}

/** Locks page scroll while `active` is true (used by overlays). */
export function useScrollLock(active: boolean) {
  const { lock, unlock } = useSmoothScroll();
  useEffect(() => {
    if (!active) return;
    lock();
    return unlock;
  }, [active, lock, unlock]);
}
