# Preferred Tech Stack & Implementation Rules (Vanguard Standard)

## Core Stack (Web App)
- **Framework:** React 19+ (Concurrent Mode optimized)
- **Build Tool:** Vite 7+
- **Styling:** Tailwind CSS 4+ (Mainly for utility logic)
- **Visuals:** Framer Motion 12+ (Mandatory for high-fidelity Vanguard easing)
- **Typography:** Space Grotesk (Headings), Inter (Body)

## Implementation Guidelines (The Vanguard Law)

### Visual Hierarchy & Spacing
- **Section Padding:** Mandatory `var(--section-pad)` (15rem) for world-class whitespace.
- **Section Labels:** 10px, 0.4em letter-spacing, uppercase, `--blue`.
- **H1:** Massive scale (9rem max), line-height 0.82, uppercase, tracking -0.06em.

### Vanguard Motion Strategy
- **Easing:** Strictly use `var(--vanguard-ease)` (0.8, 0, 0.1, 1) for deliberate, expensive transitions.
- **Mask Reveals:** High-impact headings MUST use overflow-masked reveal animations.
- **Glow Cursors:** Desktop experiences MUST utilize atmospheric radial glow cursors (600px range).

### Materiality: Glass 2.0
- **Refraction:** `backdrop-filter: blur(40px) saturate(180%) contrast(110%);`
- **Surface:** `rgba(255, 255, 255, 0.02)` background with `1px solid rgba(255, 255, 255, 0.03)`.
- **Noise:** Global 1.5% noise overlay mandatory for clinical texture.

### Performance & Engineering
- **Blueprint Geometry:** Complex sections should utilize SVG blueprint patterns or grid systems to suggest technical rigour.
- **GPU Acceleration:** All motion MUST be on `transform` and `opacity` properties.

## Forbidden Patterns
- **No standard kerning:** Large titles must be tightly squeezed.
- **No bright gradients:** Use the "Aurora Mesh" system (linear interpolation between deep blues/blacks).
- **No generic buttons:** All CTAs must have magnetic intent or tactical SVG indicators.
- **No Small Text:** Essential body content must be 1.125rem+ for premium legibility.
