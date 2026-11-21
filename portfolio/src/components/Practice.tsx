import { ExternalLink as ExternalLinkIcon, Github, Target, TrendingUp } from 'lucide-react';
import { CONTACT, LEARNING, PROBLEM_SOLVING } from '../data/content';
import ExternalLink from './ui/ExternalLink';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

export default function Practice() {
  return (
    <Section
      id="practice"
      eyebrow="Problem solving & learning"
      title="Practice and continuous learning"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <section className="card h-full p-6" aria-labelledby="problem-solving-title">
            <h3 id="problem-solving-title" className="flex items-center gap-2.5 text-lg font-semibold text-white">
              <Target size={18} className="text-accent-blue" aria-hidden="true" />
              Problem solving
            </h3>
            <p className="mt-4 font-display text-2xl text-white">{PROBLEM_SOLVING.headline}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {PROBLEM_SOLVING.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {CONTACT.leetcode && (
                <ExternalLink href={CONTACT.leetcode} className="btn-secondary">
                  <ExternalLinkIcon size={16} aria-hidden="true" />
                  LeetCode Profile
                </ExternalLink>
              )}
              {PROBLEM_SOLVING.practiceRepoUrl && (
                <ExternalLink href={PROBLEM_SOLVING.practiceRepoUrl} className="btn-secondary">
                  <Github size={16} aria-hidden="true" />
                   DSA Code
                </ExternalLink>
              )}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.06}>
          <section className="card h-full p-6" aria-labelledby="learning-title">
            <h3 id="learning-title" className="flex items-center gap-2.5 text-lg font-semibold text-white">
              <TrendingUp size={18} className="text-accent-blue" aria-hidden="true" />
              Currently learning
            </h3>
            <ul className="mt-5 space-y-3">
              {LEARNING.map((item) => (
                <li
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                >
                  {item.title}
                  {item.note && <span className="mt-0.5 block text-xs text-muted">{item.note}</span>}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </Section>
  );
}
