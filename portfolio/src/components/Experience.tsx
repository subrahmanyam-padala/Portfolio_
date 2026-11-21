import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { EXPERIENCE } from '../data/content';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Internship experience"
      description="Practical full-stack work on collaborative projects."
    >
      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
        {EXPERIENCE.map((item) => (
          <li key={item.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-accent-blue bg-ink-950 sm:-left-[39px]"
            />
            <Reveal>
              <article className="card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-accent-blue">{item.organization}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                      <CalendarDays size={13} aria-hidden="true" />
                      {item.period}
                    </span>
                    <span className="chip">{item.type}</span>
                  </div>
                </div>

                {item.highlights.length > 0 ? (
                  <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-300">
                    {item.highlights.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 text-sm italic text-muted">Responsibilities to be added.</p>
                )}

                {item.technologies.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                    {item.technologies.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                {item.relatedProjectId && (
                  <a
                    href={`#project-${item.relatedProjectId}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm text-accent-blue hover:text-white"
                  >
                    See the related project
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
