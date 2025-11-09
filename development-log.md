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

## Major Refactor - Nov 8, 2025 (Evening)

**User Feedback: Simplify Everything**

The initial implementation was too busy, too much text, too sales-y. User wanted:
- Business card aesthetic, not Wikipedia
- Artistic integrity over sales copy
- Handcrafted feel, not cookie-cutter
- One thing at a time, not cluttered columns
- Simple and lovely

**Changes Made:**

1. **Typography**
   - Removed serif font entirely, using Noto Sans JP for everything
   - Reduced all font sizes significantly (H1: 48px → 32px, Body: 18px → 15px)
   - Lighter font weights (600 → 500/400)

2. **Navigation**
   - Simplified to 5 items: Home, About, Services, Portfolio, Contact
   - Removed dropdown menus (Company, Resources)

3. **Home Page**
   - Removed hero section entirely
   - Simple intro with founder vision
   - Services: Brief one-sentence descriptions with learn more links (not cards)
   - Featured Project: Single project (manually selected)
   - Featured Testimonial: Single testimonial (not 3)
   - Removed "Our Philosophy" section

4. **About Page**
   - Consolidated into single section
   - Three paragraphs: Intro, Approach, Design Philosophy
   - Added founder photo placeholder (will be circle image)

5. **Contact Page**
   - Removed FAQ preview
   - Service area: one sentence ("We service the South Bay LA area")

6. **Services Page**
   - Removed 2-column layouts
   - Top-to-bottom, simple structure
   - Removed maintenance "plans" (don't dictate business operations)
   - Removed 5-step design process (too prescriptive)
   - Just: Ueki, Bonsai, Design, Maintenance with general descriptions

7. **Portfolio Page**
   - Full-width rows (no masonry, no 3-column)
   - Removed tags from cards
   - Removed "View Project Details" buttons
   - Removed CTA sections

8. **Gallery Page**
   - Full-width rows
   - Removed tags from cards
   - Added glossary section for Bonsai styles

9. **Testimonials Page**
   - Full-width rows (no 3-column grid)
   - Simple, clean presentation

10. **Blog Page**
    - Removed "Browse by Category" section
    - Removed "Read Article →" links (redundant)

11. **Footer**
    - 2 columns instead of 4
    - Simplified content
    - Removed tagline fluff

12. **Buttons & CTAs**
    - Made buttons smaller (10px padding vs 14px)
    - Lighter borders (1px vs 2px)
    - Removed green "accent" buttons
    - Removed CTAs throughout site

13. **Location**
    - Changed from Portland, OR to South Bay LA throughout

**Design Philosophy Shift**
- Original plan had 3 design concepts, but "Modern Simplicity" is what was actually wanted
- Focus on minimalism, clarity, one thing at a time
- Let content breathe, don't overwhelm

## Next Steps

- [ ] Review with client (friend)
- [ ] Get actual photos to replace stock images
- [ ] Get actual founder photo for About page
- [ ] Potentially flesh out 2-3 blog articles
- [ ] Decide if other design concepts still needed (probably not)

