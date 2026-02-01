# Implementation Plan: Arsitektur Digital UMKM Premium (Midnight Opulence)

## 1. Project Vision

Mentransformasi website UMKM Kuliner menjadi pengalaman digital setara hotel bintang 5. Fokus pada estetika "tenang", navigasi intuitif ala concierge, dan performa tinggi.

## 2. Technology Stack & Configuration

- **Core**: React (Vite) - _Existing_
- **Styling**:
  - Migrasi dari Vanilla CSS ke **Tailwind CSS**.
  - Config: Custom Colors (Midnight Opulence palette), Custom Fonts (Serif/Sans).
- **Animation**: **Framer Motion** untuk:
  - Page transitions.
  - Scroll reveal (elemen muncul perlahan saat di-scroll).
  - Micro-interactions pada tombol/hover.
- **Assets**: Optimasi gambar ke format WebP (Quality 80-90%).

## 3. Design System: "Midnight Opulence"

- **Color Palette**:
  - Background: `#1a1a2e` (Deep Navy/Black)
  - Surface: `#16213e` (Slightly lighter navy for cards/sections)
  - Primary Accent: `#efc07b` (Muted Gold/Champagne)
  - Text High: `#f8f8f2` (Off-white/Bone)
  - Text Muted: `#8d99ae` (Cool Grey)
- **Typography**:
  - Headings: _Playfair Display_ (Serif, Elegant, High Contrast).
  - Body: _Outfit_ (Sans-serif, Clean, Geometric) - _Existing_.
- **Layout Principles**:
  - **Whitespace**: Margin luas (padding-y: 120px+).
  - **Asymmetry**: Gambar dan teks tidak selalu di tengah, gunakan grid offset untuk dinamika.

## 4. Key Components (Architecture)

### A. Concierge Navigation (Header)

- **Behavior**: Transparent di top, solid blurry glass saat scroll.
- **Items**: Terbatas (Maks 5): "The Experience", "Signature Menu", "Our Story", "Reservations".
- **Logo**: Minimalist, Gold font.

### B. Cinematic Hero

- **Visual**: Full-screen (`h-screen`) background image/video dengan overlay gradient gelap.
- **Content**: Satu kalimat kuat (Headline) + Satu tombol CTA hantu (_ghost button_) dengan border emas tipis.
- **Vibe**: Misterius, mengundang.

### C. Curated Menu Gallery (Product)

- **Style**: Bukan daftar list biasa. Grid kartu dengan foto _side-lighting_ (gelap, dramatis).
- **Interaction**: Hover memunculkan detail harga dan deskripsi dengan animasi _slide-up_ halus.

### D. The Concierge Button (Floating)

- **Position**: Bottom-right, fixed.
- **Design**: Bulat atau Pill-shape, Gold background, shadow halus.
- **Micro-copy**: "Personal Concierge" / "Reserve a Table".

### E. Narrative Section (About)

- **Format**: "Magazine Style". Teks di satu sisi, gambar besar di sisi lain. Fokus pada _craftsmanship_ dan _heritage_.

## 5. Mobile Optimization Strategy

- **LCP Target**: < 2.5s.
- **Visual**: Stacked layout. Font size disesuaikan agar tetap terbaca tapi tidak memenuhi layar.
- **Touch Targets**: Tombol dan menu minimal 44x44px untuk kemudahan jari.

## 6. Migration Steps (High Level)

1.  Install & Config Tailwind + Framer Motion.
2.  Refactor `index.css` (reset base styles).
3.  Rebuild `Navbar` & `Hero` dengan paradigma baru.
4.  Rebuild `Menu` section dengan style grid asimetris.
5.  Implementasi `Footer` & `Concierge Button`.
6.  Final Polish (Animations & Responsive Check).
