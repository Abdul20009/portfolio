```markdown
# Hamzat Abdulrahman — Portfolio

Personal portfolio website for Hamzat Abdulrahman, a Flutter & Web Developer based in Lagos, Nigeria. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS custom properties
- **Fonts:** Syne (display) + DM Sans (body) via Google Fonts
- **Deployment:** Vercel (recommended)

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # CSS variables, animations, responsive helpers
│   ├── layout.tsx        # Root layout, metadata, font imports
│   └── page.tsx          # Page composition
├── components/
│   ├── Navbar.tsx        # Fixed nav with mobile hamburger menu
│   ├── Hero.tsx          # Landing section with stats row
│   ├── Skills.tsx        # Tech stack grid
│   ├── Projects.tsx      # Featured projects grid
│   ├── Services.tsx      # Services offered grid
│   ├── Contact.tsx       # Social links + availability card
│   └── Footer.tsx        # Footer with social links
└── public/               # Static assets
```

## Getting Started

**Install dependencies:**

```bash
npm install
```

**Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Build for production:**

```bash
npm run build
npm start
```

## Responsive Design

The site is fully responsive across all screen sizes:

- **Mobile (< 768px):** Single-column layouts, hamburger nav menu, scaled typography
- **Tablet (768px – 1024px):** Two-column grids where appropriate
- **Desktop (> 1024px):** Full multi-column layouts, desktop nav

Responsive behaviour is achieved through CSS `clamp()` for fluid typography and spacing, `repeat(auto-fill, minmax(...))` CSS Grid for adaptive card grids, and a media-query-controlled hamburger menu for mobile navigation.

## Customisation

All personal content is co-located with the component that renders it — no separate data files. To update:

| What | Where |
|---|---|
| Name, title, bio | `components/Hero.tsx` |
| Skills list | `components/Skills.tsx` |
| Projects | `components/Projects.tsx` |
| Services | `components/Services.tsx` |
| Social links & email | `components/Contact.tsx` and `components/Footer.tsx` |
| Site metadata & SEO | `app/layout.tsx` |
| Colors & fonts | `app/globals.css` (CSS variables under `:root`) |

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your repository to GitHub
2. Import the repo on vercel.com
3. Vercel auto-detects Next.js — click **Deploy**

No environment variables are required.

## License

This project is personal and not open-sourced for reuse. All content, copy, and design belong to Hamzat Abdulrahman.
```