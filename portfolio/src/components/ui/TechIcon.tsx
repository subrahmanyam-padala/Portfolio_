import { useState } from 'react';
import type { SkillItem } from '../../data/types';
import { ICONS } from './icons';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

interface Props {
  item: SkillItem;
  size?: number;
}

/** Shows the technology's logo, falling back to a neutral icon if it is missing or fails to load. */
export default function TechIcon({ item, size = 20 }: Props) {
  const [failed, setFailed] = useState(false);

  if (!item.devicon || failed) {
    const Fallback = ICONS[item.fallback ?? 'code'];
    return <Fallback aria-hidden="true" size={size} className="shrink-0 text-slate-400" />;
  }

  return (
    <img
      src={`${DEVICON_BASE}/${item.devicon}/${item.devicon}-original.svg`}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`shrink-0 ${item.mono ? 'opacity-90 brightness-0 invert' : ''}`}
    />
  );
}
