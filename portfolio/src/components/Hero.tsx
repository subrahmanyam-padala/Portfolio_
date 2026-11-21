import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Download, FolderGit2, Mail, MapPin } from 'lucide-react';
import { CONTACT, EXPERIENCE, PROJECTS, RESUME, SITE, emailHref, hasRealEmail } from '../data/content';
import CodeWindow from './CodeWindow';

export default function Hero() {
  const currentRole = EXPERIENCE[0];
  const topProjects = PROJECTS.slice(0, 2);

  return (
    <section id="home" aria-labelledby="home-title" className="scroll-mt-16 pb-12 pt-28 sm:pb-20 sm:pt-36">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {SITE.openToWork}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin size={14} aria-hidden="true" />
                {SITE.locationShort}
              </span>
            </div>

            <h1 id="home-title" className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="gradient-text">{SITE.shortName}.</span>
            </h1>
            <p className="mt-3 font-mono text-sm text-accent-blue">{SITE.title}</p>
            <p className="mt-6 max-w-xl font-display text-xl leading-snug text-slate-100 sm:text-2xl">
              {SITE.heroHeadline}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">{SITE.heroDescription}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Primary technologies">
              {SITE.heroStack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn-primary">
                Explore My Work
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href={RESUME.href} download={RESUME.downloadName} className="btn-secondary">
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={16} aria-hidden="true" />
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <figure className="mb-5 flex justify-center lg:justify-end">
              <img
                src="/profile.jpg"
                alt="Portrait of Padala Naga Subrahmanyam"
                width={112}
                height={112}
                className="h-28 w-28 rounded-2xl border border-white/15 object-cover shadow-xl shadow-black/30"
              />
            </figure>
            <CodeWindow />
          </motion.div>
        </div>

        {/* Recruiter quick view: role, experience, best projects, contact. */}
        <dl className="mt-14 grid gap-3 sm:grid-cols-3">
          <div className="card flex items-start gap-3 p-4">
            <Briefcase size={18} className="mt-0.5 shrink-0 text-accent-blue" aria-hidden="true" />
            <div>
              <dt className="label-mono">Experience</dt>
              <dd className="mt-1 text-sm text-slate-200">
                <a href="#experience" className="hover:text-white">
                  {currentRole.role}, {currentRole.organization}
                </a>
                <span className="block text-xs text-muted">{currentRole.period}</span>
              </dd>
            </div>
          </div>
          <div className="card flex items-start gap-3 p-4">
            <FolderGit2 size={18} className="mt-0.5 shrink-0 text-accent-blue" aria-hidden="true" />
            <div>
              <dt className="label-mono">Featured projects</dt>
              <dd className="mt-1 space-y-0.5 text-sm text-slate-200">
                {topProjects.map((project) => (
                  <a key={project.id} href={`#project-${project.id}`} className="block hover:text-white">
                    {project.title.split(' – ')[0]}
                  </a>
                ))}
              </dd>
            </div>
          </div>
          <div className="card flex items-start gap-3 p-4">
            <Mail size={18} className="mt-0.5 shrink-0 text-accent-blue" aria-hidden="true" />
            <div>
              <dt className="label-mono">Contact</dt>
              <dd className="mt-1 text-sm text-slate-200">
                <a href={emailHref} className="hover:text-white">
                  {hasRealEmail ? CONTACT.email : 'Send a message'}
                </a>
                <span className="block text-xs text-muted">
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn
                  </a>
                  {' · '}
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    GitHub
                  </a>
                </span>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
}
