# Preferred Tech Stack & Implementation Rules

## Core Stack (Website)
- **Markup:** Semantic HTML5
- **Styling:** Vanilla CSS with custom properties (CSS variables from design-tokens.json)
- **Scripting:** Vanilla JavaScript (ES6+) — no jQuery
- **Fonts:** Google Fonts — Syne (headings), Inter (body)
- **Icons:** Inline SVG or Lucide icons via CDN

## Core Stack (Web App)
- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS (mandatory — no plain CSS or styled-components)
- **Components:** shadcn/ui as primitive base
- **Icons:** Lucide React

## Implementation Guidelines

### CSS Architecture (Vanilla projects)
- Define all tokens as `--var` CSS custom properties on `:root`
- Use `clamp()` for all fluid typography sizes
- Use CSS Grid + Flexbox for layout
- Glassmorphism: `background: rgba(255,255,255,0.04); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.08);`
- Animations: prefer `transform` and `opacity` for GPU-accelerated transitions

### Scroll Animations
- Use `IntersectionObserver` with `threshold: 0.15` for reveal animations
- Initial state: `opacity: 0; transform: translateY(32px)`
- Revealed state: `opacity: 1; transform: translateY(0); transition: 600ms ease`
- Add `will-change: transform, opacity` on animated elements

### Forms
- Labels always above inputs
- Real-time validation on `blur` event
- Visual feedback: green border on valid, red on invalid
- Submit button shows loading state while processing

### Performance
- Lazy-load images using `loading="lazy"`
- Use `preconnect` for Google Fonts
- Minimize JavaScript — prefer CSS animations where possible

## Forbidden Patterns
- No jQuery
- No Bootstrap
- No inline styles (use CSS custom properties instead)
- No `!important` unless overriding third-party styles
- No pixel-fixed font sizes — always use `rem` or `clamp()`
