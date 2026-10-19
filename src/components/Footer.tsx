import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';
import { Wordmark } from './Nav';

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Wordmark className="size-9" />
          <div>
            <p className="text-sm font-medium">{profile.name}</p>
            <p className="text-sm text-faint">Designed and built by hand with React, TypeScript and Tailwind CSS.</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-faint">
          <span>© {new Date().getFullYear()}</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-paper">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper">LinkedIn</a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
            className="inline-flex items-center gap-1.5 hover:text-paper"
          >
            Top <ArrowUp aria-hidden="true" className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
