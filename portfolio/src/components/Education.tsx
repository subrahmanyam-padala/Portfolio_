import { Award, ExternalLink as ExternalLinkIcon, FileText, GraduationCap } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION } from '../data/content';
import ExternalLink from './ui/ExternalLink';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & certifications"
      title="Academic background"
    >
      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
        {EDUCATION.map((item) => (
          <li key={item.degree} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-accent-violet bg-ink-950 sm:-left-[39px]"
            />
            <Reveal>
              <article className="card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-3">
                    <GraduationCap size={20} className="mt-1 shrink-0 text-accent-violet" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                      <p className="mt-1 text-sm text-slate-300">{item.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                    <span className="font-mono text-xs text-muted">{item.period}</span>
                    <span className="chip">{item.score}</span>
                  </div>
                </div>
                {item.details.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <h3 className="mb-5 mt-14 text-xl font-semibold text-white">Certifications</h3>
      <ul className="grid gap-5 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.name}>
            <Reveal className="h-full">
              <article className="card flex h-full flex-col p-6">
                <Award size={20} className="text-accent-blue" aria-hidden="true" />
                <h4 className="mt-4 text-base font-semibold text-white">{cert.name}</h4>
                <p className="mt-1 text-sm text-slate-300">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-muted">Completed {cert.year}</p>
                {(cert.certificateUrl || cert.verifyUrl) && (
                  <div className="mt-5 flex flex-wrap gap-3 text-sm">
                    {cert.certificateUrl && (
                      <ExternalLink
                        href={cert.certificateUrl}
                        className="inline-flex items-center gap-1.5 text-accent-blue hover:text-white"
                      >
                        <FileText size={14} aria-hidden="true" />
                        View certificate
                      </ExternalLink>
                    )}
                    {cert.verifyUrl && (
                      <ExternalLink
                        href={cert.verifyUrl}
                        className="inline-flex items-center gap-1.5 text-accent-blue hover:text-white"
                      >
                        <ExternalLinkIcon size={14} aria-hidden="true" />
                        Verify credential
                      </ExternalLink>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
