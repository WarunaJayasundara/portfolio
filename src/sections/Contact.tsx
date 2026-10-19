import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Mail, Phone } from 'lucide-react';
import { profile } from '../data/profile';
import { href } from '../lib/router';
import { GithubIcon, LinkedinIcon } from '../components/icons';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard unavailable: the mailto link still works. */
    }
  };

  const channels = [
    { label: 'GitHub', value: `@${profile.githubHandle}`, href: profile.github, Icon: GithubIcon },
    { label: 'LinkedIn', value: 'Waruna Jayasundara', href: profile.linkedin, Icon: LinkedinIcon },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div aria-hidden="true" className="blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_70%_60%,black,transparent)]" />
      <div className="container-x relative">
        <p className="label" data-reveal><span className="text-signal">06</span> — Contact</p>
        <h2 id="contact-title" className="mt-8 max-w-5xl text-[clamp(2.6rem,7.5vw,6.2rem)] leading-[0.92] font-semibold tracking-[-0.05em] text-balance" data-reveal>
          Have a system that needs to be <em className="font-serif font-normal text-signal italic">right?</em>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute" data-reveal>
          I’m looking for software engineering roles where I can keep building careful, well-tested products. The
          fastest way to reach me is email.
        </p>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center" data-reveal>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex min-w-0 items-center gap-3 rounded-[4px] bg-signal px-5 py-4 text-ink transition-[filter] hover:brightness-110"
          >
            <Mail aria-hidden="true" className="size-5 shrink-0" />
            <span className="truncate text-base font-medium sm:text-lg">{profile.email}</span>
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-line-2 px-4 py-4 text-sm transition-colors hover:border-paper"
          >
            {copied ? <Check aria-hidden="true" className="size-4 text-signal" /> : <Copy aria-hidden="true" className="size-4" />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <span className="sr-only" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</span>
        </div>

        <ul className="mt-16 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          {channels.map(({ label, value, href: url, Icon }) => (
            <li key={label} className="border-b border-line lg:border-r lg:last:border-r-0">
              <a href={url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-6 pr-4 transition-colors hover:text-signal lg:px-5 lg:first:pl-0">
                <span className="flex items-center gap-3">
                  <Icon className="size-5 text-mute group-hover:text-signal" />
                  <span>
                    <span className="label block">{label}</span>
                    <span className="mt-1 block">{value}</span>
                  </span>
                </span>
                <ArrowUpRight aria-hidden="true" className="size-4 text-faint" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
          <li className="border-b border-line lg:border-r lg:px-5">
            <a href={profile.phoneHref} className="group flex items-center gap-3 py-6 transition-colors hover:text-signal">
              <Phone aria-hidden="true" className="size-5 text-mute group-hover:text-signal" />
              <span>
                <span className="label block">Phone</span>
                <span className="mt-1 block">{profile.phone}</span>
              </span>
            </a>
          </li>
          <li className="border-b border-line lg:px-5">
            <a href={href(`/${profile.resume}`)} download className="group flex items-center gap-3 py-6 transition-colors hover:text-signal">
              <Download aria-hidden="true" className="size-5 text-mute group-hover:text-signal" />
              <span>
                <span className="label block">Résumé</span>
                <span className="mt-1 block">Download PDF</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
