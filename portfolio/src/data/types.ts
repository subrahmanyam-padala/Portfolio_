export type IconKey =
  | 'code'
  | 'server'
  | 'layout'
  | 'database'
  | 'wrench'
  | 'library'
  | 'webhook'
  | 'key'
  | 'boxes'
  | 'binary'
  | 'cpu'
  | 'network'
  | 'workflow'
  | 'refresh';

export interface SkillItem {
  name: string;
  /** Devicon slug (https://devicon.dev). Omit to use the fallback icon. */
  devicon?: string;
  /** Set true for dark single-colour logos so they stay visible on the dark theme. */
  mono?: boolean;
  fallback?: IconKey;
}

export interface SkillCategory {
  title: string;
  icon: IconKey;
  items: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  /** Leave empty to show a "to be added" note instead of inventing responsibilities. */
  highlights: string[];
  technologies: string[];
  relatedProjectId?: string;
}

export interface ArchitectureLayer {
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  /** Be explicit: internship, personal, hackathon or academic work. */
  category: string;
  tagline: string;
  problem: string;
  purpose: string;
  architecture: ArchitectureLayer[];
  features: string[];
  /** Your individual contribution. Leave empty to hide the block until you fill it in. */
  contribution: string;
  /** Engineering focus areas. Leave empty to hide the block. */
  challenges: string[];
  technologies: string[];
  githubUrl: string;
  /** Live demo URL. Leave empty to hide the "Live Demo" button. */
  liveUrl: string;
  /** Screenshot path, e.g. "/screenshots/parkease.png" (put the file in /public). Leave empty to hide. */
  screenshot: string;
  screenshotAlt: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  /** Optional extra lines (coursework, achievements). Leave empty to hide. */
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  /** Link to a certificate image or PDF. Leave empty to hide the button. */
  certificateUrl: string;
  /** Credential verification link. Leave empty to hide the button. */
  verifyUrl: string;
}

export interface LearningItem {
  title: string;
  note?: string;
}
