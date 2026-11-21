import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> {
  href: string;
  children: ReactNode;
}

/** External links always open in a new tab with safe rel attributes. */
export default function ExternalLink({ href, children, ...rest }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
