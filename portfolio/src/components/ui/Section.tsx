import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

/** Consistent section wrapper: spacing, heading hierarchy and a single subtle reveal. */
export default function Section({ id, eyebrow, title, description, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 py-16 sm:py-24">
      <div className="container-x">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="label-mono">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 leading-relaxed text-muted">{description}</p>}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
