# Seva — Premium Developer Portfolio

Built with Vue 3 + Vue Router + Vite + Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── components/
│   ├── Navbar.vue          # Sticky navbar with blur + dark mode toggle
│   ├── ProjectCard.vue     # Reusable project card with hover animation
│   └── Footer.vue
├── pages/
│   ├── Home.vue            # Hero, stats, featured projects, stack
│   ├── About.vue           # Split layout with philosophy
│   ├── Projects.vue        # Filterable grid (Fullstack/Frontend/Backend)
│   ├── ProjectDetail.vue   # Full project story page
│   └── Contact.vue         # Form + social links
├── router/index.js         # Vue Router with lazy loading
├── data/projects.js        # All project data (edit this!)
└── styles/main.css         # Tailwind + global styles
```

## Customization

1. Edit `src/data/projects.js` to update your projects
2. Replace placeholder links in `Contact.vue` with your real GitHub/LinkedIn/email
3. Update name and info in `About.vue` and `Navbar.vue`
4. Add real project images to `src/assets/` and reference in `projects.js`

## Design System

- **Fonts**: Syne (display/headings) + DM Sans (body)
- **Theme**: Light/dark with system preference detection
- **Animations**: Page transitions, hover micro-interactions, filter transitions
- **Layout**: max-width 1100px, 8rem horizontal padding
