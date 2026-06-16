---
name: Journalist Voyage
colors:
  surface: '#f4fafd'
  surface-dim: '#d4dbdd'
  surface-bright: '#f4fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f7'
  surface-container: '#e8eff1'
  surface-container-high: '#e2e9ec'
  surface-container-highest: '#dde4e6'
  on-surface: '#161d1f'
  on-surface-variant: '#43474e'
  inverse-surface: '#2b3234'
  inverse-on-surface: '#ebf2f4'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#5e5f5c'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0dc'
  on-secondary-container: '#626360'
  tertiary: '#22211b'
  on-tertiary: '#ffffff'
  tertiary-container: '#373630'
  on-tertiary-container: '#a19f97'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#e3e2df'
  secondary-fixed-dim: '#c7c7c3'
  on-secondary-fixed: '#1b1c1a'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#e6e2d9'
  tertiary-fixed-dim: '#cac6be'
  on-tertiary-fixed: '#1c1c16'
  on-tertiary-fixed-variant: '#484740'
  background: '#f4fafd'
  on-background: '#161d1f'
  surface-variant: '#dde4e6'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-page: 2rem
  gutter-grid: 1.5rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2.5rem
---

## Brand & Style

This design system is built for the modern archivist—someone who views travel as a collection of moments rather than just a checklist of destinations. The brand personality is intellectual, quiet, and enduring, drawing inspiration from high-quality stationery and vintage travel documents.

The style is a refined mix of **Minimalism** and **Tactile** design. It prioritizes generous whitespace and a "paper-first" philosophy. The UI should feel like a digital Moleskine: structured and functional, but with an underlying warmth that encourages long-form writing and reflection. It avoids flashy animations in favor of deliberate, subtle transitions that mimic the turning of a page or the marking of a map.

## Colors

The palette is anchored by "Passport Blue," a deep, authoritative primary color used for key actions and navigational markers. The background uses "Warm Parchment" (#FDFCF8) instead of a pure white to reduce eye strain and evoke the feel of archival paper. 

- **Primary (Passport Blue):** Used for primary buttons, active states, and brand iconography.
- **Secondary (Parchment):** The foundation for all page surfaces.
- **Tertiary (Stone):** Used for subtle borders, dividers, and secondary surfaces like sidebars or card backgrounds.
- **Neutral (Charcoal):** The primary color for all long-form text and headlines to ensure high legibility and a classic "ink-on-paper" contrast.

## Typography

The typography strategy pairs the authoritative, literary feel of **Libre Caslon Text** for narrative elements with the high-functionality of **Inter** for descriptions and interface copy. To reinforce the "logbook" aesthetic, **JetBrains Mono** is used for metadata, timestamps, and coordinates, evoking the look of a printed travel itinerary or typewriter-set data.

- **Headlines:** Use Libre Caslon Text for entry titles and section headers. 
- **Body:** Use Inter for journal entries and descriptions. It provides a clean, modern contrast to the serif headings.
- **Metadata:** Use JetBrains Mono for technical details like "GMT+2", "ISO 400", or "Latitude/Longitude" to provide a distinct visual layer for data.

## Layout & Spacing

This design system utilizes a **Fixed Grid** on desktop (max-width 1120px) to maintain the feeling of a physical book page, while transitioning to a fluid layout on mobile devices. 

- **Desktop:** 12-column grid with a generous 40px gutter. Content is often centered with wide margins to create a focused, editorial reading experience.
- **Mobile:** 4-column grid with 16px margins. 
- **Vertical Rhythm:** Spacing is strictly modular, based on an 8px baseline. Use `stack-lg` (40px) between major diary entries and `stack-md` (16px) between text and supporting images.

## Elevation & Depth

Elevation is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. In keeping with the paper aesthetic, depth should feel like stacked sheets of cardstock.

- **Surface Tiers:** The base layer is Parchment. Secondary containers (cards, sidebars) use the Stone color or a subtle 1px border (#E5E1D8).
- **Shadows:** Avoid soft, ambient shadows. If depth is required for a floating element (like a mobile action button), use a sharp, 2px offset shadow in Passport Blue at 10% opacity to mimic a heavy paper crease.
- **Maps:** Maps should be treated as "inset" elements, using a subtle inner shadow to look like they are tipped into the journal.

## Shapes

The shape language is conservative and disciplined. A **Soft (0.25rem)** roundedness is applied to standard components like buttons and input fields to prevent the UI from feeling too sharp or aggressive. Larger components like image cards use **rounded-lg (0.5rem)** to mimic the slightly rounded corners of vintage photographs or pocket notebooks.

## Components

### Buttons & Inputs
- **Primary Action:** Solid Passport Blue with white text. High-contrast and utilitarian.
- **Secondary Action:** Ghost style with a 1px Stone border and Charcoal text.
- **Input Fields:** Bottom-border only for a "lined paper" look, or fully enclosed with a light Stone background.

### Cards & Notes
- **Entry Cards:** Minimal containers with a thin Stone border. Titles in Libre Caslon Text, summary text in Inter.
- **Diary Blocks:** These use a vertical "margin line" (2px Passport Blue stroke on the left) to signify a long-form personal note.
- **Image Grids:** Use an asymmetrical "scrapbook" layout where possible, with variable aspect ratios (3:2 and 1:1) and subtle 1px inner borders to frame photography.

### Specialized Elements
- **Maps:** Use a custom-styled monochromatic map theme that matches the Stone and Passport Blue palette.
- **Stamps/Chips:** Metadata tags (e.g., #Europe, #Summer24) should use the JetBrains Mono label style, enclosed in a small pill with a light Stone background, mimicking a postmark or luggage tag.
- **Travel Timeline:** A thin vertical line connecting entries, using a small open circle icon for each "stop" on the journey.