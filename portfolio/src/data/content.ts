/**
 * ALL EDITABLE PORTFOLIO CONTENT LIVES IN THIS FILE.
 * Components only render what is defined here, so you never need to touch the UI to update details.
 *
 * Rule of thumb: if a field is an empty string / empty array, the related UI element is hidden
 * (or shows a neutral "to be added" note) instead of showing a fake or broken value.
 */
import type {
  Certification,
  EducationItem,
  ExperienceItem,
  LearningItem,
  Project,
  SkillCategory,
} from './types';

/* ---------------------------------------------------------------- Identity */

export const SITE = {
  name: 'Padala Naga Subrahmanyam',
  shortName: 'Naga Subrahmanyam',
  title: 'Software Engineer | Java Full Stack Developer',
  location: 'Rajahmundry, Andhra Pradesh, India',
  locationShort: 'Rajahmundry, India',
  openToWork: 'Open to Work · Entry-Level Opportunities',
  heroHeadline:
    'Building reliable applications with Java, Spring Boot and modern web technologies.',
  heroDescription:
    "I'm a recent MCA graduate and aspiring Software Engineer passionate about backend development, full-stack engineering, and solving real-world problems through technology.",
  heroStack: ['Java', 'Spring Boot', 'React', 'Python', 'SQL'],
};

/* ----------------------------------------------------------------- Contact */

export const CONTACT = {
  email: 'padala.naga.subrahmanyam@gmail.com',
  github: 'https://github.com/subrahmanyam-padala',
  linkedin: 'https://linkedin.com/in/naga-subrahmanyam-padala',
  /** TODO: add your LeetCode profile URL, e.g. https://leetcode.com/u/your-username/ (hidden while empty). */
  leetcode: '',
  /** Set VITE_CONTACT_FORM_ENDPOINT in .env (see README). Empty = form is not connected. */
  formEndpoint: (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined) ?? '',
  contactHeadline: "Let's Build Something Great Together.",
  contactDescription:
    "I'm actively looking for entry-level Software Engineer and Java Full Stack Developer opportunities. I'm excited to contribute, learn from experienced engineers and build impactful software.",
};

export const hasRealEmail = CONTACT.email.includes('@');
/** Where "Email" buttons point. Falls back to the contact form until a real email is set. */
export const emailHref = hasRealEmail ? `mailto:${CONTACT.email}` : '#contact';

/** Put your resume PDF in /public with exactly this file name (see README). */
export const RESUME = {
  href: '/Naga_Subrahmanyam_Padala_Resume.pdf',
  downloadName: 'Naga_Subrahmanyam_Padala_Resume.pdf',
};

/* ------------------------------------------------------------------- About */

export const ABOUT = {
  paragraphs: [
    "I'm a recent MCA graduate with a Computer Science background and a strong foundation in Java, Python, SQL, object-oriented programming and data structures.",
    'During my Java Full Stack internship with Infosys Springboard I worked on backend development with Spring Boot: building and integrating REST APIs, connecting the application to a database and working with authentication. I also build full-stack projects of my own and practise problem-solving regularly on LeetCode.',
    "I enjoy learning new technologies and I'm looking to keep growing as an engineer by building reliable, scalable applications as part of a team.",
  ],
  facts: [
    { label: 'Role', value: 'Software Engineer (Fresher)' },
    { label: 'Focus', value: 'Backend & full-stack development' },
    { label: 'Education', value: 'MCA, JNTU-GV (2024–2026)' },
    { label: 'Location', value: 'Rajahmundry, India' },
    { label: 'Status', value: 'Open to entry-level roles' },
  ],
};

/* ------------------------------------------------------------------ Skills */

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'code',
    items: [
      { name: 'Java', devicon: 'java' },
      { name: 'Python', devicon: 'python' },
      { name: 'C', devicon: 'c' },
      { name: 'JavaScript', devicon: 'javascript' },
      { name: 'SQL', fallback: 'database' },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'server',
    items: [
      { name: 'Spring Boot', devicon: 'spring' },
      { name: 'Spring Security', devicon: 'spring' },
      { name: 'Hibernate', devicon: 'hibernate' },
      { name: 'JPA', fallback: 'database' },
      { name: 'Node.js', devicon: 'nodejs' },
      { name: 'Express.js', devicon: 'express', mono: true },
      { name: 'REST API Development', fallback: 'webhook' },
      { name: 'JWT Authentication', fallback: 'key' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: 'layout',
    items: [
      { name: 'React.js', devicon: 'react' },
      { name: 'HTML5', devicon: 'html5' },
      { name: 'CSS3', devicon: 'css3' },
      { name: 'Bootstrap', devicon: 'bootstrap' },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    items: [
      { name: 'MySQL', devicon: 'mysql' },
      { name: 'MongoDB', devicon: 'mongodb' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: 'wrench',
    items: [
      { name: 'Git', devicon: 'git' },
      { name: 'GitHub', devicon: 'github', mono: true },
      { name: 'Postman', devicon: 'postman' },
      { name: 'IntelliJ IDEA', devicon: 'intellij' },
      { name: 'VS Code', devicon: 'vscode' },
      { name: 'Maven', devicon: 'maven' },
      { name: 'AWS', devicon: 'amazonwebservices', mono: true },
    ],
  },
  {
    title: 'Core Concepts',
    icon: 'library',
    items: [
      { name: 'Object-Oriented Programming', fallback: 'boxes' },
      { name: 'Data Structures and Algorithms', fallback: 'binary' },
      { name: 'DBMS', fallback: 'database' },
      { name: 'Operating Systems', fallback: 'cpu' },
      { name: 'Computer Networks', fallback: 'network' },
      { name: 'SDLC', fallback: 'workflow' },
      { name: 'Agile Methodology', fallback: 'refresh' },
    ],
  },
];

/* -------------------------------------------------------------- Experience */

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'infosys-springboard',
    role: 'Java Full Stack Intern',
    organization: 'Infosys Springboard',
    period: 'January 2026 – April 2026',
    type: 'Internship',
    highlights: [
      'Worked on a collaborative full-stack development project.',
      'Contributed to backend development using Java and Spring Boot.',
      'Developed and integrated REST APIs.',
      'Worked with database integration and application logic.',
      'Gained practical experience with authentication, API integration, debugging and collaborative development.',
      'Contributed to the ParkEase Smart Parking System.',
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Authentication', 'MySQL'],
    relatedProjectId: 'parkease',
  },
  {
    id: 'skilldzire',
    role: 'Java Full Stack Intern',
    organization: 'SkillDzire',
    period: 'May 2025 – June 2025',
    type: 'Internship',
    // TODO: add your real responsibilities here (one string per bullet). Do not add anything you did not do.
    highlights: [],
    technologies: [],
  },
];

/* ---------------------------------------------------------------- Projects */

export const PROJECTS: Project[] = [
  {
    id: 'parkease',
    title: 'ParkEase – Smart Parking Management System',
    category: 'Internship project · Team project (Infosys Springboard)',
    tagline:
      'A full-stack smart parking platform for parking slot discovery, booking, ticket management and administration.',
    problem:
      'Drivers need an easy way to find and book a parking slot, while administrators need a clear view of bookings and occupancy.',
    purpose:
      'ParkEase brings slot discovery, booking, ticket management and administration into one role-based web application.',
    architecture: [
      { label: 'Client', detail: 'React.js + Bootstrap' },
      { label: 'REST API', detail: 'Java, Spring Boot, Spring Security (JWT, role-based access)' },
      { label: 'Persistence', detail: 'Hibernate ORM' },
      { label: 'Database', detail: 'MySQL' },
    ],
    features: [
      'User registration and authentication.',
      'Role-based access control for users and administrators.',
      'Parking slot discovery and booking.',
      'Booking ticket generation and active booking tracking.',
      'Admin dashboard and parking occupancy management.',
      'Database integration and REST API development.',
    ],
    contribution:
      'Focused on backend development, database integration, REST API design and debugging booking-related API issues.',
    challenges: ['Debugging booking-related API issues.', 'Integrating the REST API layer with the database.'],
    technologies: [
      'React.js',
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'MySQL',
      'Hibernate',
      'REST APIs',
      'Bootstrap',
    ],
    // NOTE: this URL could not be opened without signing in while the site was being built.
    // If the repo is private or lives under a team/organisation account, update or remove this link.
    githubUrl: 'https://github.com/subrahmanyam-padala/ParkEase_Infosys_SpringBoard_Team_B',
    liveUrl: '', // TODO: add the live demo URL if one exists.
    screenshot: '', // TODO: e.g. '/screenshots/parkease.png' (file goes in /public/screenshots).
    screenshotAlt: 'ParkEase application screenshot',
  },
  {
    id: 'interview-simulation',
    title: 'AI-Driven Real-Time Interview Simulation',
    category: 'Personal project',
    tagline:
      'An AI-powered interview preparation platform to practise technical interviews, evaluate answers and improve interview readiness.',
    problem:
      'Technical interview practice is hard to do realistically: candidates need varied questions, coding rounds, live peers and structured feedback in one place.',
    purpose:
      'The platform combines AI mock interviews, coding battles and peer-to-peer interview rooms so candidates can practise and receive feedback.',
    architecture: [
      { label: 'Client', detail: 'React, Monaco Editor, WebRTC' },
      { label: 'API + real-time', detail: 'Node.js, Express.js, Socket.IO, JWT' },
      { label: 'AI', detail: 'Gemini API' },
      { label: 'Database', detail: 'MongoDB' },
    ],
    features: [
      'AI-generated interview questions.',
      'Automated answer evaluation and feedback.',
      'Coding assessment using Monaco Editor.',
      'Real-time peer-to-peer interview functionality.',
      'Coding battle and interview matching.',
      'AI career coach and learning roadmaps.',
    ],
    // TODO: describe exactly what you built in this project (hidden while empty).
    contribution: '',
    challenges: [
      'Real-time synchronisation of rooms and matches with Socket.IO.',
      'Peer-to-peer audio and video with WebRTC.',
    ],
    technologies: ['MERN Stack', 'Gemini API', 'JavaScript', 'Socket.IO', 'WebRTC', 'JWT', 'Monaco Editor'],
    githubUrl: 'https://github.com/subrahmanyam-padala/Interview_Simulation',
    liveUrl: '', // TODO: add the live demo URL if one exists.
    screenshot: '',
    screenshotAlt: 'AI interview simulation application screenshot',
  },
  {
    id: 'prestock-ai',
    title: 'PreStock AI',
    category: 'Hackathon project · Stocklana Solana Hackathon 2026',
    tagline:
      'AI-powered research and portfolio analysis for tokenised pre-IPO stocks on Solana, built on the PreStocks API.',
    problem:
      'Public PreStocks data is a table of numbers, so newcomers cannot easily tell what a token represents or what information is missing.',
    purpose:
      'PreStock AI turns live PreStocks data into a market explorer, structured AI research reports and a simulated portfolio tool, with every value labelled by its origin.',
    architecture: [
      { label: 'Client', detail: 'React, Vite, TypeScript, Tailwind CSS, Solana Wallet Adapter' },
      { label: 'API', detail: 'Express + TypeScript with Zod validation, caching and rate limiting' },
      { label: 'Integrations', detail: 'PreStocks API · Gemini API · Solana JSON-RPC' },
    ],
    features: [
      'Markets explorer with search, filter and sort.',
      'Asset detail pages with a computed token-vs-mark spread.',
      'AI research reports that list missing data instead of inventing it.',
      'Simulated portfolio analysis and a locally persisted watchlist.',
      'Read-only Solana wallet balances (Phantom and Solflare).',
    ],
    // TODO: describe exactly what you built in this project (hidden while empty).
    contribution: '',
    challenges: [],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Express.js', 'Zod', 'Gemini API', 'Solana', 'Recharts'],
    githubUrl: 'https://github.com/subrahmanyam-padala/prestock-ai',
    // The repo lists two Vercel URLs (README: prestock-ai.vercel.app, About: prestock-ai-w1g1-olive.vercel.app).
    // Confirm which one is live, then paste it here.
    liveUrl: '',
    screenshot: '',
    screenshotAlt: 'PreStock AI application screenshot',
  },
];

/* --------------------------------------------------------------- Education */

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'JNTU-GV College of Engineering, Vizianagaram',
    period: '2024 – 2026',
    score: 'CGPA: 8   ',
    details: [], // TODO (optional): relevant coursework, academic projects, achievements.
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Government Degree College (Autonomous), Rajahmundry',
    period: 'Graduated 2024',
    score: 'CGPA: 9.8',
    details: [],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Java Foundation Certification',
    issuer: 'Infosys Springboard',
    year: '2026',
    certificateUrl: '', // TODO: link to certificate image/PDF (hidden while empty).
    verifyUrl: '', // TODO: credential verification link (hidden while empty).
  },
  {
    name: 'IBM AI Fundamentals',
    issuer: 'IBM',
    year: '2025',
    certificateUrl: '',
    verifyUrl: '',
  },
];

/* --------------------------------------------------- Problem solving & learning */

export const PROBLEM_SOLVING = {
  headline: '200+ LeetCode problems solved',
  points: [
    'Java problem-solving practice',
    'Data Structures and Algorithms',
    'Logical thinking and debugging',
  ],
  /** Public repo listed on the GitHub profile. Remove this line if you prefer not to link it. */
  practiceRepoUrl: 'https://leetcode.com/u/padala123/',
};

/** Edit this list as your learning journey changes. */
export const LEARNING: LearningItem[] = [
  { title: 'Advanced Java' },
  { title: 'Spring Boot and Spring Security' },
  { title: 'REST API design' },
  { title: 'Database optimization' },
  { title: 'Backend system design fundamentals' },
  { title: 'Data Structures and Algorithms' },
];

/* -------------------------------------------------------------- Navigation */

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;
