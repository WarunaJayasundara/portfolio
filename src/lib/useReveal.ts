import { useEffect } from 'react';

/**
 * Fades [data-reveal] elements in as they enter the viewport.
 * Content is visible without JS; the `js-motion` class on <html> opts in.
 * Re-runs when `key` changes so newly rendered pages are observed too.
 */
export function useReveal(key: string) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'));
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [key]);
}

/** Tracks which section id is currently in view (the last one whose top has passed 40% of the viewport). */
export function observeSections(ids: string[], onChange: (id: string) => void) {
  let frame = 0;
  const update = () => {
    frame = 0;
    const line = window.innerHeight * 0.4;
    let current = '';
    let best = -Infinity;
    for (const id of ids) {
      const top = document.getElementById(id)?.getBoundingClientRect().top;
      if (top !== undefined && top <= line && top > best) {
        best = top;
        current = id;
      }
    }
    onChange(current);
  };
  const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}
