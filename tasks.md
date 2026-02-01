# Task List: Project Midnight Opulence

## Phase 1: Foundation & Setup

- [ ] **Install Dependencies**
  - `npm install -D tailwindcss postcss autoprefixer`
  - `npx tailwindcss init -p`
  - `npm install framer-motion`
- [ ] **Configure Tailwind**
  - Update `tailwind.config.js`:
    - Add custom colors: `midnight`, `gold`, `surface`.
    - Add fonts: `playfair` (serif), `outfit` (sans).
  - Update `index.css`: Import Tailwind directives, remove old CSS variables.
- [ ] **Asset Prep**
  - [ ] Generate/Collect placeholder images with "Side Lighting" / "Dark Moody" aesthetic (Ayam Bakar, Interior).
  - [ ] Convert images to WebP if needed (or use optimized assets).

## Phase 2: Core Components Development

- [ ] **Typography Setup**
  - Import 'Playfair Display' from Google Fonts.
- [ ] **Component: ConciergeNavbar**
  - sticky, glassmorphism dark effect.
  - golden links.
- [ ] **Component: CinematicHero**
  - Full viewport height.
  - Framer Motion entry animation (fade-in up).
  - Hero Text: "Elevating Local Heritage".
- [ ] **Component: FloatingConcierge**
  - Fixed bottom-right button.
  - Icon: Chat/Bell.
  - Link to WhatsApp.

## Phase 3: Content Sections (The Experience)

- [ ] **Component: SignatureMenu (Grid)**
  - Create `MenuCard` component (Dark card, Gold border on hover).
  - Layout: Asymmetric Grid / Masonry feel if possible.
- [ ] **Component: BrandNarrative (About)**
  - Editorial layout (Image Left, Text Right or vice versa).
  - Focus on typography and generous whitespace.
- [ ] **Component: Footer**
  - Minimalist, centered or split.
  - Copyright & Social links in gold.

## Phase 4: Refinement & Polish

- [ ] **Animations**
  - Add `whileHover` and `whileTap` effects to buttons.
  - Implement scroll-triggered animations for sections (`initial="hidden" whileInView="visible"`).
- [ ] **Responsive Audit**
  - Check padding on mobile vs desktop.
  - Ensure font sizes scale elegantly.
- [ ] **Performance Check**
  - Verify image loading strategy.
  - Check Lighthouse score (LCP).

## Phase 5: Final Review

- [ ] Browser Agent verification walk-through.
- [ ] Final code cleanup.
