import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { NAV_LINKS, RESUME, SITE } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_IDS = NAV_LINKS.map((link) => link.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = (id: string) =>
    `rounded-md px-3 py-2 text-sm transition-colors ${
      active === id ? 'text-white' : 'text-muted hover:text-white'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-base font-semibold text-white"
          aria-label={`${SITE.name} - back to top`}
        >
          Naga<span className="gradient-text">.dev</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={linkClass(link.id)}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={RESUME.href}
            download={RESUME.downloadName}
            className="hidden items-center gap-2 rounded-lg border border-white/15 px-3.5 py-2 text-sm text-white transition-colors hover:bg-white/[0.08] sm:inline-flex"
          >
            <Download size={15} aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-white/10 bg-ink-950 md:hidden"
        >
          <ul className="container-x flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-base ${
                    active === link.id ? 'text-white' : 'text-muted'
                  }`}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={RESUME.href}
                download={RESUME.downloadName}
                onClick={() => setOpen(false)}
                className="btn-secondary w-full"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
