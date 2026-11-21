# Naga Subrahmanyam Padala – Portfolio

Recruiter-focused developer portfolio built with **React 18, TypeScript, Tailwind CSS, Framer Motion and Lucide icons** (Vite).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to /dist
npm run preview    # serve the production build locally
```

Requires Node.js 18+ (20 recommended).

## Where to edit things

**All content is in one file: `src/data/content.ts`.** Components only render what is defined there.

| I want to…                         | Edit in `content.ts`                                              |
| ---------------------------------- | ----------------------------------------------------------------- |
| Add my real email                  | `CONTACT.email` (replace `EMAIL_PLACEHOLDER`)                     |
| Add my LeetCode profile            | `CONTACT.leetcode` (button appears automatically)                 |
| Add SkillDzire responsibilities    | `EXPERIENCE[1].highlights` (one string per bullet)                |
| Add project screenshots            | `PROJECTS[n].screenshot` → e.g. `/screenshots/parkease.png`       |
| Add live demo links                | `PROJECTS[n].liveUrl` (button appears automatically)              |
| Describe my contribution           | `PROJECTS[n].contribution` (block appears when non-empty)         |
| Add certificate / verify links     | `CERTIFICATIONS[n].certificateUrl` / `.verifyUrl`                 |
| Update what I'm learning           | `LEARNING`                                                        |
| Add academic details               | `EDUCATION[n].details`                                            |

Rule: an **empty** field hides the related button or block. Nothing shows a fake value or a dead link.

Screenshots go in `public/screenshots/` (create the folder). Use 16:9 images around 1280×720, compressed (WebP/JPEG).

## Resume

The button downloads `public/Naga_Subrahmanyam_Padala_Resume.pdf`. A basic resume built only from the details in this portfolio is included so the button works immediately. **Replace it with your own resume**, keeping the same file name (or change `RESUME` in `content.ts`).

## Contact form

A static site cannot send email by itself, so the form is honest about what is configured:

1. **Form service configured** (recommended): create a free endpoint (e.g. [Formspree](https://formspree.io)), copy its URL and set it as `VITE_CONTACT_FORM_ENDPOINT`:
   - Locally: copy `.env.example` to `.env` and fill it in.
   - Netlify: *Site configuration → Environment variables*.
   - Vercel: *Project → Settings → Environment Variables*.
   Then redeploy. Messages are POSTed as JSON; success and error states are shown.
2. **No endpoint, real email set:** submitting opens the visitor's email app with the message pre-filled, and says so.
3. **Neither configured:** the form says it is not connected and nothing is sent.

## Deploy

**Netlify** – push to GitHub → *Add new site → Import from Git*. Settings are read from `netlify.toml` (build `npm run build`, publish `dist`).

**Vercel** – push to GitHub → *Add New → Project*. Settings are read from `vercel.json` (Vite preset).

Then update the site URL in `index.html` (canonical, `og:url`, JSON-LD) and `public/robots.txt` / `public/sitemap.xml` if your final URL differs from `https://padalanagasubrahmanyam-portfolio.netlify.app/`.

## Project structure

```
src/
  data/        content.ts (all editable content), types.ts
  components/  Navbar, Hero, About, Skills, Experience, Projects, Practice, Education, Contact, Footer
    ui/        Section, Reveal, ExternalLink, TechIcon, icons
  hooks/       useActiveSection
public/        favicon, resume PDF, robots.txt, sitemap.xml
```

## Notes

- Technology logos load from the Devicon CDN; if one fails to load, a neutral icon is shown.
- Animations are subtle and automatically disabled for visitors who prefer reduced motion.
- All external links open in a new tab with `rel="noopener noreferrer"`.
