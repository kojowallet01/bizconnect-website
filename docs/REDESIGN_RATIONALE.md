# Premium Redesign — Design Rationale

## 1. What Changed and Why

- **Single design language**  
  All sections below the hero now share one “premium light” system: pearl/off-white/silver surfaces, azure/cyan accents, and a subtle violet-blue tint for depth. This replaces mixed ad-hoc colors and reduces visual noise.

- **Surface system**  
  Base (page), raised (cards), and accent (highlights) are defined with CSS custom properties. Cards use multi-layer soft shadows (`--shadow-raised`, `--shadow-elevated`, `--shadow-glow`) instead of single heavy shadows for a calmer, more editorial feel.

- **Typography and spacing**  
  A consistent spacing scale (`--space-section`, `--space-block`, `--space-tight`, `--space-relaxed`) and type scale (`--text-display`, `--text-eyebrow`, `--text-lead`) improve hierarchy and rhythm. Eyebrows and headings are tighter; body line length is controlled for readability.

- **Motion in three layers**  
  - **Background:** Ultra-slow ambient drift (e.g. `section-ambient` 25–30s) so the page feels alive without distraction.  
  - **Component:** Spring-based entrances (stiffness ~100–120, damping ~20–24) for cards and blocks so they feel responsive, not mechanical.  
  - **Interaction:** Hover uses depth (translateY, shadow lift) and short transitions with easing; focus states are explicit for accessibility.

- **Background imagery**  
  SVG orbs/blobs are toned down (opacity ~0.65, slower animations) and composed per section. Reduced-motion users get static fallback (no animation, lower opacity).

- **Signature interactions**  
  - **Services:** Layered glow on hover + subtle image zoom (1.05).  
  - **Work:** Directional lift and elevated shadow; no gradient border to avoid noise.  
  - **Process:** Connector line has a gentle flow animation; steps get scale and border emphasis on hover/focus-within.  
  - **Enquiry:** Form uses `:focus-within` for card elevation; inputs have clear focus rings; submit has hover/active/disabled states.

- **Gradient text removed**  
  Animated gradient on headings was removed in favor of solid `--text-primary` so the UI stays calm and readable. Accent is reserved for eyebrows and links.

## 2. Component Structure

- No new top-level components. Existing sections (Services, Work, Testimonials, Process, Enquiry, Footer) keep the same DOM shape: `section` → `section-bg` → `SectionBgImages` → `container section-inner` → content.
- Design tokens live in `index.css` (`:root`). Section and component styles in `App.css` reference these tokens for colors, spacing, shadows, and motion.

## 3. CSS Motion and Visual Tokens

- **Motion:**  
  `--ease-out-expo`, `--ease-spring-soft`, `--duration-fast/normal/slow` drive transitions. Background keyframes use long durations (22–30s). Framer Motion uses `type: 'spring'` with stiffness/damping for entrances.
- **Surfaces:**  
  `--surface-base`, `--surface-pearl`, `--surface-off`, `--surface-silver`, `--surface-accent`, `--border-hairline`, `--border-subtle`.
- **Shadows:**  
  `--shadow-soft`, `--shadow-raised`, `--shadow-elevated`, `--shadow-glow` (all low-opacity, multi-layer where used).
- **Reduced motion:**  
  `@media (prefers-reduced-motion: reduce)` in `index.css` shortens all animations/transitions; `App.css` turns off background image animations and reduces opacity.

## 4. Section-by-Section Code-Level Summary

| Section      | Changes |
|-------------|---------|
| Light body  | Uses `--surface-base`; mesh drift 30s; tokens for overlays. |
| Services    | Tokens for padding, type, colors; cards use `--shadow-raised` → `--shadow-glow` on hover; focus-visible ring; spring entrance. |
| Work        | Spacing scale; grid max-width 900px, even gap; cards `--shadow-raised` → `--shadow-elevated`; no gradient border; spring entrance. |
| Testimonials| Tokens; solid heading color; accent bar 3px; spring entrance. |
| Process     | Tokens; line animation 6s; dot hover/focus scale and border; spring entrance. |
| Enquiry     | Form `:focus-within` elevates card; input focus ring 3px; submit hover/active/disabled; spring entrance; submit `disabled={submitted}`. |
| Footer      | Tokens; focus-visible on links. |
| Section BGs | Each section has distinct gradient + single `section-ambient` keyframe; bg orbs slower, lower opacity; reduced-motion static. |

## 5. Accessibility and Performance Checklist

- **Contrast:** Text uses `--text-primary`, `--text-secondary`, `--text-tertiary` on light backgrounds; ratios meet WCAG AA where body/UI text is used.
- **Focus:** All interactive elements (cards, links, buttons, inputs) have visible `:focus-visible` (2px outline, offset). Form submit has focus and disabled state.
- **Reduced motion:** Global and section-level animations respect `prefers-reduced-motion: reduce`; background orbs become static.
- **Performance:** Animations use `transform` and `opacity`; no layout thrashing. `will-change` used sparingly on bg orbs.

## 6. Optional Polish (If Time)

- **Scroll progress:** Thin top bar or line that fills on scroll (e.g. `height: 4px`, `transform: scaleX(progress)`).
- **Section transition masks:** Optional subtle clip or fade at section boundaries for scroll-triggered reveals.
- **Cursor glow:** Small following glow for desktop only, disabled when `prefers-reduced-motion`.
