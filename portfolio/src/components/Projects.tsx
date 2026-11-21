import { ArrowDown, ExternalLink as ExternalLinkIcon, Github } from 'lucide-react';
import type { ReactNode } from 'react';
import { PROJECTS } from '../data/content';
import type { Project } from '../data/types';
import ExternalLink from './ui/ExternalLink';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="label-mono">{label}</h4>
      <div className="mt-2 text-sm leading-relaxed text-slate-300">{children}</div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={`project-${project.id}`}
      aria-labelledby={`project-${project.id}-title`}
      className="card scroll-mt-20 overflow-hidden"
    >
      <div className="grid lg:grid-cols-5">
        <div className="space-y-6 p-6 sm:p-8 lg:col-span-3">
          <header>
            <p className="font-mono text-xs text-muted">{project.category}</p>
            <h3 id={`project-${project.id}-title`} className="mt-2 text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-300">{project.tagline}</p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2">
            <Block label="Problem">{project.problem}</Block>
            <Block label="Purpose">{project.purpose}</Block>
          </div>

          <Block label="Implemented features">
            <ul className="space-y-1.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                  {feature}
                </li>
              ))}
            </ul>
          </Block>

          {project.contribution && (
            <div className="rounded-lg border border-accent-blue/25 bg-accent-blue/[0.06] p-4">
              <Block label="My contribution">{project.contribution}</Block>
            </div>
          )}

          {project.challenges.length > 0 && (
            <Block label="Engineering focus">
              <ul className="space-y-1.5">
                {project.challenges.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                    {item}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          <div className="flex flex-wrap gap-3 pt-1">
            <ExternalLink
              href={project.githubUrl}
              className="btn-secondary"
              aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
            >
              <Github size={16} aria-hidden="true" />
              View Code
            </ExternalLink>
            {project.liveUrl && (
              <ExternalLink
                href={project.liveUrl}
                className="btn-primary"
                aria-label={`${project.title} live demo (opens in a new tab)`}
              >
                <ExternalLinkIcon size={16} aria-hidden="true" />
                Live Demo
              </ExternalLink>
            )}
          </div>
        </div>

        <aside
          aria-label={`${project.title} architecture and stack`}
          className="space-y-6 border-t border-white/10 bg-ink-850/60 p-6 sm:p-8 lg:col-span-2 lg:border-l lg:border-t-0"
        >
          {project.screenshot && (
            <img
              src={project.screenshot}
              alt={project.screenshotAlt}
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full rounded-lg border border-white/10 object-cover object-top"
            />
          )}

          <div>
            <h4 className="label-mono">Architecture</h4>
            <ol className="mt-3">
              {project.architecture.map((layer, index) => (
                <li key={layer.label}>
                  <div className="rounded-lg border border-white/10 bg-ink-900 px-4 py-3">
                    <p className="font-mono text-xs text-accent-blue">{layer.label}</p>
                    <p className="mt-1 text-sm text-slate-200">{layer.detail}</p>
                  </div>
                  {index < project.architecture.length - 1 && (
                    <ArrowDown size={14} className="mx-auto my-1.5 text-slate-500" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="label-mono">Tech stack</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="What I've built"
      description="Each project lists the problem it addresses, how it is built and what is implemented. Internship, personal and hackathon work are labelled separately."
    >
      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
