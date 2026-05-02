---
name: Pristine Dental System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#45464d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#141d21'
  on-tertiary-container: '#7c858b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#dbe4ea'
  tertiary-fixed-dim: '#bfc8ce'
  on-tertiary-fixed: '#141d21'
  on-tertiary-fixed-variant: '#3f484d'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Manrope
    fontSize: 80px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-x: 64px
  section-gap: 160px
---

## Brand & Style

The brand personality is clinical yet comforting, prioritizing clarity and surgical precision through a **Swiss Design** lens. The design system targets a high-end demographic that values efficiency, hygiene, and modern technology. 

The style is rooted in **Minimalism** with subtle **Glassmorphism** used strictly for functional depth (navigation and overlays). It utilizes a rigid grid structure, excessive whitespace, and asymmetrical layouts to create an "airy" feel that reduces patient anxiety. Visual noise is eliminated to emphasize professional expertise and cleanliness.

## Colors

The palette is anchored in a high-contrast relationship between **Navy (#0F172A)** and **White (#FFFFFF)** to establish authority. **Slate (#334155)** is used for secondary text and borders to soften the clinical edge. **Ice Blue (#F0F9FF)** serves as the primary background wash for content sections to differentiate from the pure white "paper" of the main layout. The **Accent Light Blue (#7DD3FC)** is reserved for micro-interactions, active states, and focus indicators, evoking a sense of modern medical technology and sterilized water.

## Typography

This design system uses a dual-font strategy to balance character with utility. **Manrope** is selected for headlines due to its refined, geometric architecture which feels bespoke and high-end. **Inter** is used for all functional and body text to ensure maximum readability and a systematic, clinical feel.

Hierarchy is enforced through "oversized" display type and generous leading (line height), ensuring that information is never crowded. Small, all-caps labels are used to categorize content sections, following traditional Swiss editorial layouts.

## Layout & Spacing

The layout follows a **Fixed Grid** model on a 12-column system. To achieve the "Swiss" aesthetic, the design system utilizes intentional "dead zones"—areas of the grid left entirely empty to guide the eye toward key messaging.

Vertical rhythm is expansive; sections are separated by a minimum of 160px to allow the content to breathe. Horizontal margins are generous (64px+) to prevent the interface from feeling "boxed in." Elements should snap to the grid, but imagery may occasionally bleed off-edge to create a sense of scale.

## Elevation & Depth

Hierarchy is achieved primarily through **Tonal Layers** and **Soft Blurs** rather than traditional drop shadows. 

- **Surface Tiers:** Use pure White (#FFFFFF) for the highest elevation (active cards, modals) and Ice Blue (#F0F9FF) for the base canvas.
- **Glassmorphism:** Navigation bars and sticky headers must use a 20px backdrop blur with a 70% white opacity. 
- **Soft Shadows:** If a shadow is required for a floating action, it must be an "ambient" shadow: very large blur (40px+), low opacity (4%), tinted with Navy to avoid a "dirty" gray look.
- **Outlines:** Use 1px Slate-200 borders for structural definition on input fields and secondary containers.

## Shapes

The shape language is disciplined. A **Soft (0.25rem)** corner radius is applied to most UI components to suggest approachability without losing the professional, "architectural" edge of the design. Larger containers, such as hero images or primary cards, may use **rounded-lg (0.5rem)** to subtly draw attention, but circles and pill shapes should be avoided except for status indicators to maintain the minimalist rigor.

## Components

### Buttons
- **Primary:** Solid Navy (#0F172A) with white text. 0.25rem radius. No shadow. On hover, background shifts to Slate (#334155).
- **Secondary:** Transparent background with a 1px Slate border. On hover, a subtle Ice Blue fill fades in.

### Input Fields
Minimalist underline style or fully enclosed with a 1px light slate border. Focus states use the Ice Blue accent color for a 2px outer glow (0 blur).

### Cards
Cards should be flat with a 1px border or a subtle tonal shift. Use generous internal padding (40px+) to maintain the airy feel. Content within cards should be left-aligned.

### Animations & Transitions
- **Scroll Entrances:** Elements should slide up (20px) and fade in simultaneously using a "Power3.out" easing.
- **Transitions:** Use soft blur transitions (0px to 4px) for page overlays or menu reveals to simulate a lens focusing.
- **Hover:** All interactive elements must have a 300ms transition on background and border-color properties.

### Specialized Components
- **Treatment Timeline:** A vertical, thin Navy line with small circular nodes for procedural steps.
- **Doctor Profile:** High-resolution portraiture with plenty of whitespace, using "Manrope" for the name in a large, thin weight.