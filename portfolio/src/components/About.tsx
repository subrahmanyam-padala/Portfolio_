import { ABOUT } from '../data/content';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A fresher with hands-on engineering practice">
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-5 leading-relaxed text-slate-300 lg:col-span-3">
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-2">
          <dl className="card divide-y divide-white/10 px-5">
            {ABOUT.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="label-mono">{fact.label}</dt>
                <dd className="text-right text-sm text-slate-200">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
