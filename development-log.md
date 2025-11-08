# Development Log

## Project Setup - Nov 8, 2025

### Initial Decisions

**Framework Choice: Astro**
- Chosen over pure HTML/CSS for productivity during development
- Chosen over Nuxt.js for better performance (zero JS by default)
- Build output configured for readability (non-minified HTML/CSS)
- Final `dist/` can be handed off as vanilla HTML if needed

**Build Configuration**
- `inlineStylesheets: 'never'` - keeps CSS in separate files
- `format: 'file'` - creates clean URLs (/about.html vs /about/index.html)
- `minify: false` - keeps HTML/CSS readable for potential manual editing
- Located in: `astro.config.mjs`

**Branch Strategy**
- `main` - base project setup
- `design-zen-harmony` - First design concept (current)
- `design-traditional-elegance` - To be created
- `design-modern-serenity` - To be created

Each branch will be a complete, production-ready implementation of that design.

### Contact Form Decision

**Chosen: Netlify Forms**
- No JavaScript required
- Free tier suitable for small business
- Works with static sites
- Alternative considered: Email/phone only (lower conversion rate per research)

**Form Fields**
- Name (required)
- Email (required)
- Phone (optional)
- Service Interest (dropdown - Ueki, Bonsai, Consultation, Other)
- Message (textarea)

### Japanese Content Strategy

**SEO-Focused Placement**
- Site title: "Noda Ueki and Bonsai | 野田植木"
- Key service terms: "Ueki (植木)" and "Bonsai (盆栽)"
- Meta descriptions and alt text
- Not overused - strategic placement only

**Rationale**
- Targets local Japanese-speaking community
- Shows authenticity and expertise
- Google recognizes multilingual content
- Avoids overwhelming English-primary visitors

### Stock Photography Sources

**Using External URLs** (from Unsplash/Pexels)
- Faster development iteration
- Client can replace with real photos easily
- No unnecessary image bloat in repo during development
- All images selected for relevance: Japanese gardens, Ueki, Bonsai

### Content Structure

```
/content/
  /blog/ - Individual markdown files per article
  /portfolio/ - Individual markdown files per project
  /testimonials.json - All testimonials in one file
  services.md - Service descriptions
  faq.md - FAQ content
```

**Rationale**: Easier to manage than putting everything in content-guide.md

---

## Design Implementation - Zen Harmony

**Color Palette**
- Primary: Deep forest green (#2B4F3A)
- Secondary: Warm beige (#D9C8B0)
- Accent: Soft red (#B56D6D)
- Background: Off-white (#F6F6F6)

**Typography**
- Headings: Noto Serif JP (Google Fonts)
- Body: Noto Sans JP (Google Fonts)
- Font sizes: H1 48px, H2 36px, H3 24px, Body 18px

**Design Elements**
- Full-width hero images
- Bamboo texture background (subtle)
- Minimalistic line-based icons
- Masonry-style layout for portfolio/gallery
- Responsive breakpoints: 768px (tablet), 1024px (desktop)

---

## Next Steps

- [ ] Implement remaining two design concepts
- [ ] Performance testing across all three designs
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cross-browser testing

