# CSS Architecture Rules

## Component-Specific CSS

**Always keep component-specific CSS within the component file** using `<style>` tags in Astro components.

### What Belongs in global.css

Only use `src/styles/global.css` for:
- CSS variables and design tokens
- Reset and base styles
- Truly global typography
- Reusable button styles (`.btn`, `.btn-primary`, etc.)
- Form element styles
- Truly universal utility classes (e.g., `.visually-hidden`, `.container`, `.section`)

### What Does NOT Belong in global.css

- ❌ Component-specific classes (e.g., `.card`, `.hero`, `.testimonial-grid`)
- ❌ Page-specific styles
- ❌ One-off utility classes that aren't used across multiple pages
- ❌ Layout-specific styles that only apply to one component

### Benefits of This Approach

1. **Encapsulation**: Component styles live with the component code
2. **Easier maintenance**: When deleting a component, its styles go with it
3. **Clearer dependencies**: No need to hunt through global.css to find what's used
4. **Better code splitting**: Astro can optimize CSS delivery per-page
5. **Prevents CSS bloat**: Unused styles don't accumulate in global.css

### Example: Good Component Structure

```astro
---
// Component logic
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<div class="card">
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .card {
    background-color: var(--color-white);
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform var(--transition-speed), box-shadow var(--transition-speed);
  }
  
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .card h3 {
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
  }
</style>
```

## Before Committing Changes

- ✅ Remove unused CSS classes from global.css
- ✅ Verify class usage with grep/search before deleting
- ✅ Run linter and fix any errors
- ✅ Test responsive behavior
- ✅ Check that component-specific styles are not in global.css

## Naming Conventions

- Use semantic, descriptive class names
- Prefer kebab-case for CSS classes (e.g., `.hero-section`, not `.heroSection`)
- Use BEM methodology for complex components when appropriate
- Avoid overly generic names that might conflict (e.g., `.item`, `.box`)

