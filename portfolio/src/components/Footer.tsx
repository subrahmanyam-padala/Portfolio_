import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { CONTACT, SITE } from '../data/content';
import ExternalLink from './ui/ExternalLink';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-x flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-white">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted">{SITE.title}</p>
          <p className="mt-3 text-xs text-slate-500">
            © {year} {SITE.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ExternalLink
            href={CONTACT.github}
            aria-label="GitHub profile (opens in a new tab)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <Github size={18} aria-hidden="true" />
          </ExternalLink>
          <ExternalLink
            href={CONTACT.linkedin}
            aria-label="LinkedIn profile (opens in a new tab)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <Linkedin size={18} aria-hidden="true" />
          </ExternalLink>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowUp size={16} aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
