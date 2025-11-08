# Noda Ueki and Bonsai Website

A modern, static website for a Japanese landscaping business specializing in Ueki (traditional Japanese garden trees) and Bonsai services.

## Project Overview

This project includes three distinct design concepts, each implemented on a separate git branch:
- `design-zen-harmony` - Deep forest green with warm beige, emphasizing natural harmony
- `design-traditional-elegance` - Muted green with pale gold, emphasizing traditional Japanese aesthetics
- `design-modern-serenity` - Teal with light gray, emphasizing clean modern design

## Tech Stack

- **Astro** - Static site generator
- **HTML/CSS** - Clean, semantic markup
- **Netlify Forms** - Contact form handling
- **Google Fonts** - Noto Serif JP, Noto Sans JP

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The dev server will start at `http://localhost:4321`

Hot module reloading is enabled - changes will reflect immediately.

### Building

```bash
npm run build
```

Output will be in the `dist/` directory. The build is configured for readability:
- HTML is not minified
- CSS is not minified
- Stylesheets are kept in separate files

This means the `dist/` folder can be edited directly if needed (though changes will be lost on rebuild).

## Project Structure

```
/
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
├── content/
│   ├── blog/            # Blog articles (markdown)
│   ├── portfolio/       # Portfolio projects (markdown)
│   ├── testimonials.json
│   └── faq.md
├── public/              # Static assets
├── dist/                # Build output (git ignored)
├── astro.config.mjs     # Astro configuration
├── development-log.md   # Development decisions and notes
├── content-guide.md     # Content strategy and guidelines
└── project-description.md # Original project requirements
```

## Design Concepts

### Zen Harmony (Current Branch)
- **Colors**: Deep forest green (#2B4F3A), warm beige (#D9C8B0), soft red (#B56D6D), off-white (#F6F6F6)
- **Fonts**: Noto Serif JP (headings), Noto Sans JP (body)
- **Style**: Natural, organic, emphasizing harmony with nature

### Traditional Elegance
- **Colors**: Muted green (#4E6E5D), pale gold (#D9C8B0), deep red (#8F3D3D), cream (#F4EEE2)
- **Fonts**: Shippori Mincho (headings), Roboto (body)
- **Style**: Classic Japanese aesthetic with traditional patterns

### Modern Serenity
- **Colors**: Teal (#2E7F7D), light gray (#E0E0E0), ochre (#C77E5E), white (#FFFFFF)
- **Fonts**: Poppins (headings), Open Sans (body)
- **Style**: Clean, minimal, contemporary design

## Features

- ✅ Fully responsive design
- ✅ Semantic HTML5
- ✅ SEO optimized
- ✅ Accessible (WCAG 2.1 AA compliant)
- ✅ Fast loading (optimized images, minimal JavaScript)
- ✅ Contact form with Netlify Forms
- ✅ Blog with markdown support
- ✅ Portfolio gallery with masonry layout
- ✅ Bonsai gallery

## Deployment

### Netlify (Recommended)

1. Connect your git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable Netlify Forms in site settings
5. Deploy!

### Other Static Hosts

The `dist/` folder can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Traditional web hosting

## Content Management

### Adding Blog Posts

Create a new markdown file in `/content/blog/`:

```markdown
---
title: "Your Article Title"
date: 2025-11-08
author: "Author Name"
excerpt: "Brief description"
image: "https://images.unsplash.com/..."
---

Your content here...
```

### Adding Portfolio Items

Create a new markdown file in `/content/portfolio/`:

```markdown
---
title: "Project Name"
date: 2025-11-08
location: "City, State"
services: ["Ueki", "Bonsai"]
image: "https://images.unsplash.com/..."
---

Project description...
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari
- Chrome Android

## Documentation

- `development-log.md` - Development decisions, architecture notes, and change log
- `content-guide.md` - Content strategy, voice/tone guidelines, and SEO keywords
- `project-description.md` - Original project requirements and specifications

## License

Private project for Noda Ueki and Bonsai business.

## Contact

For questions or support, contact the developer.
