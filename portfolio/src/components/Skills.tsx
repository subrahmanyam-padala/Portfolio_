import { SKILLS } from '../data/content';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import TechIcon from './ui/TechIcon';
import { ICONS } from './ui/icons';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title="Tools and technologies I work with"
      description="Grouped by area. No self-rated percentages: the projects and experience below show how these are used."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((category, index) => {
          const CategoryIcon = ICONS[category.icon];
          return (
            <Reveal key={category.title} delay={(index % 3) * 0.05}>
              <section className="card h-full p-5" aria-labelledby={`skills-${index}`}>
                <h3 id={`skills-${index}`} className="flex items-center gap-2.5 text-base font-semibold text-white">
                  <CategoryIcon size={18} className="text-accent-blue" aria-hidden="true" />
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200"
                    >
                      <TechIcon item={item} size={18} />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
