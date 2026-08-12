# AURORA — Master Cinematic Demo Website (AI + Marketing Technology)

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GSAP 3](https://img.shields.io/badge/Animation-GSAP%203-green.svg)](https://greensock.com/gsap/)
[![Lenis Scroll](https://img.shields.io/badge/Smooth%20Scroll-Lenis-black.svg)](https://lenis.darkroom.engineering/)
[![CSS3](https://img.shields.io/badge/Styling-Vanilla%20CSS3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

**AURORA** is a production-grade, ultra-luxurious, dark cinematic B2B Marketing Technology (MarTech) & AI landing page built with **Vanilla JavaScript (ES6+)**, **GSAP 3**, **GSAP ScrollTrigger**, **Lenis Smooth Scroll**, and custom **HTML5 Canvas** engines.

---

## 🔗 Project Links

- 🌐 **Live Demo Link**: [https://aurora-tech.vercel.app](https://aurora-tech.vercel.app) *(Replace with your deployed live URL)*
- 🐙 **GitHub Repository**: [https://github.com/your-username/aurora-cinematic](https://github.com/your-username/aurora-cinematic) *(Replace with your GitHub repository URL)*

---

## 📋 Table of Contents

- [🔗 Project Links](#-project-links)
- [🛠️ Technologies & Libraries Used](#️-technologies--libraries-used)
- [✨ Features](#-features)
- [📁 Project Directory Structure](#-project-directory-structure)
- [🛠️ Architecture & Module Breakdown](#️-architecture--module-breakdown)
- [⚡ Quick Start & Local Preview](#-quick-start--local-preview)
- [⚙️ How To Customize / White-Label (5-Minute Handover)](#️-how-to-customize--white-label-5-minute-handover)
- [🚀 Performance & Accessibility Highlights](#-performance--accessibility-highlights)
- [🌐 Deployment Guide](#-deployment-guide)
- [📄 License](#-license)

---

## 🛠️ Technologies & Libraries Used

1. **HTML5**: Semantic layout, SEO Meta tags, Open Graph tags, and ARIA Accessibility attributes.
2. **CSS3 (Vanilla CSS)**: CSS Variable design system, Glassmorphism UI, Grid & Flexbox, fluid typography (`clamp()`), and custom keyframe animations.
3. **Vanilla JavaScript (ES6+)**: Dynamic DOM manipulation, modular event handlers, and data binding without heavy framework overhead.
4. **GSAP 3 & ScrollTrigger**: Staggered line-by-line text reveals, desktop section pinning (`innerWidth > 992px`), and object tweening.
5. **Lenis Smooth Scroll**: 60 FPS inertial smooth scrolling engine synchronized with `gsap.ticker`.
6. **HTML5 Canvas API**: Custom procedural gradient motion shaders & object-oriented mouse-reactive particle engine (`HeroParticleLayer`).
7. **IntersectionObserver API**: Progressive background video lazy-loader engine to minimize bandwidth usage.
8. **tsParticles**: Lightweight particle bundle integration.
9. **Google Fonts**: *Syne* (Headings) & *Inter* (Body text).

---

## ✨ Features

- 🎬 **Cinematic Dark Luxury Aesthetic**: High-end B2B MarTech UI (`#050505`) with gold accents (`#C9A96E`) and glassmorphic panels.
- ⚙️ **Centralized Configuration (`js/config.js`)**: 5-minute white-labeling capability — all text copy, statistics, colors, navigation links, and asset paths are managed from a single file.
- 🌌 **Interactive Hero Particles**: Cursor-reactive golden stardust particles with vector repulsion physics and golden proximity web lines.
- 📜 **Silky 60 FPS Smooth Scroll**: Lenis smooth scroll engine synced with GSAP ScrollTrigger and internal `#hash` anchor link navigation.
- 📌 **GSAP ScrollTrigger Section Pinning**: Desktop section pinning (`innerWidth > 992px`) for high-impact section transitions and staggered reveals.
- 🔢 **Animated Live Counter Metrics**: Scroll-triggered counting engine supporting custom numerical targets, prefixes (`+`), suffixes (`%`, `x`, `/7`), and decimal precisions.
- ⚡ **Progressive Video Lazy Loader**: Uses `IntersectionObserver` with a `300px` root margin to load section videos dynamically when scrolled into view.
- 🎨 **Procedural Canvas Background Motion**: 60 FPS continuous ambient canvas gradients running behind media containers while videos load or as fallbacks.
- ♿ **Reduced Motion Accessibility**: Full `@media (prefers-reduced-motion: reduce)` support — automatically disables videos, pinning, and particles for accessibility.
- 📱 **Fully Responsive Breakpoint Grid**: Mobile-first adaptive layout system optimized across 1440px+, 1280px, 1024px, 768px, and 480px viewport sizes with a slide-out navigation drawer.

---

## 📁 Project Directory Structure

```text
3d/
│
├── index.html                  # Semantic HTML5 template, SEO meta, OG tags, ARIA attributes
├── README.md                   # Complete developer & handover documentation
│
├── css/
│   ├── style.css              # Master CSS design system, dark palette tokens, glassmorphism
│   └── responsive.css         # Breakpoint rules (1440px, 1280px, 1024px, 768px, 480px)
│
├── js/
│   ├── config.js              # ⚙️ CENTRAL CONFIG (Copy, navigation, statistics, colors & media)
│   ├── main.js                # App controller, DOM hydration, Lenis scroll engine & nav handlers
│   ├── animations.js          # GSAP 3 & ScrollTrigger timeline engine & reveals
│   ├── video-loader.js        # IntersectionObserver video lazy loading & fallback engine
│   └── particles.js           # Mouse-reactive canvas stardust particles for Hero section
│
└── assets/
    ├── images/                # High-res poster image fallbacks (hero.jpg, section-1.jpg - 5.jpg)
    ├── videos/                # Fullscreen background video loops (hero.mp4, section-1.mp4 - 5.mp4)
    └── logo/
        └── aurora-logo.svg    # Brand vector SVG logo mark
```

---

## 🛠️ Architecture & Module Breakdown

### 1. `index.html` — Page Structure
- **Navbar & Navigation**: Fixed glassmorphism header containing brand logo mark, dynamically populated desktop navigation links, strategy CTA button, and hamburger toggle.
- **Hero Section (`#hero`)**: Dual-layer media container with procedural canvas shader, static poster image, lazy video element, particle canvas, dual CTA buttons, and scroll indicator.
- **Content Sections**:
  - Section 02 (`#technology`): Digital Transformation showcase with staggered text reveals and desktop pinning.
  - Section 03 (`#automation`): Smart Automation section featuring floating parallax tag pills (`WORKFLOW`, `CONNECTED`, `OPTIMIZED`).
  - Section 04 (`#data`): Data & Intelligence section with directional reveal animations.
  - Section 05 (`#results`): Proven Impact section hosting 4 live metric counter cards (`240%`, `3.8x`, `92%`, `24/7`).
  - Section 06 (`#solutions`): Enterprise Solution Cards grid (`Strategy & Growth`, `Workflow Engine`, `Decision Engine`).
  - Section 07 (`#contact`): Strategic Growth partnership glass card with an embedded quick email inquiry form, trust pills, and direct email/phone/location links.
- **Footer**: Luxury footer with brand metadata, site map links, capability lists, social links, system operational status badge, and back-to-top scroll trigger.

### 2. `js/config.js` — Central Data Store
Serves as the single source of truth for the entire website. Exports the global `siteConfig` object containing:
- `companyName`, `tagline`, `phone`, `email`, `location`, `copyright`
- `colors`: Primary, secondary, surface, accent, glass, and border values.
- `navigation`: Array of menu links and target `#hash` anchors.
- `hero` & `sections`: Copy strings, CTA targets, floating labels, card objects, poster image paths, and MP4 video paths.
- `statistics`: Array of metrics configured with `value`, `prefix`, `suffix`, `label`, `desc`, and `decimals`.

### 3. `js/main.js` — Application Controller
- `populateDOM()`: Hydrates all HTML elements dynamically from `siteConfig`.
- `initSmoothScroll()`: Instantiates Lenis smooth scrolling with logarithmic easing function `t => Math.min(1, 1.001 - Math.pow(2, -10 * t))` and syncs it with `gsap.ticker`.
- `initProceduralBackgrounds()`: Runs continuous radial gradient canvas animations behind media containers.
- `setupNavbarHandlers()`: Manages navbar background glass styling on scroll and mobile drawer toggling with ARIA attribute synchronization.

### 4. `js/animations.js` — Animation Engine
- `setupHeroTimeline()`: Executes entrance GSAP timeline for header, eyebrow, line-by-line headline reveal (`rotationX: -10`), description, CTA buttons, and scroll indicator.
- `setupSection2Pinning()`, `setupSection3Automation()`, `setupSection4Data()`: Handles section pinning via `ScrollTrigger.create({ pin: true })` on viewports wider than 992px.
- `setupSection5Counters()`: Animates numbers from `0` to target values using GSAP object tweening on `onEnter` scroll trigger.

### 5. `js/video-loader.js` — Video Lazy-Loading Engine
- Automatically loads and plays `#hero video` immediately on page load.
- Uses `IntersectionObserver` with a `300px` root margin to observe offscreen section videos, dynamically applying `src` from `data-video-src` and triggering `video.play()` only when approaching the viewport.

### 6. `js/particles.js` — Interactive Canvas Engine
- `HeroParticleLayer`: Spawns 70 particles on desktop (30 on mobile). Computes mouse distance vector `sqrt(dx^2 + dy^2)`; draws glowing connecting lines (`rgba(229, 200, 143, alpha)`) and pushes particles away when cursor enters `140px` radius.

---

## ⚡ Quick Start & Local Preview

Because AURORA is built with Vanilla JavaScript and native CSS, **no build process, compilation, or `npm install` is required**.

### Method 1: Local HTTP Server (Recommended)
Using Node.js `npx`:
```bash
npx serve .
```
Or using Python:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

### Method 2: VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

### Method 3: Direct Browser Launch
Double-click `index.html` to open it directly in any modern web browser.

---

## ⚙️ How To Customize / White-Label (5-Minute Handover)

Updating the website for a new client or brand requires modifying only one file: [`js/config.js`](file:///c:/Users/UAE%20LAPTOP%20BAZAR/Desktop/3d/js/config.js).

### 1. Brand Information & Text Copy
Open `js/config.js` and edit the core parameters:

```javascript
const siteConfig = {
  companyName: "YOUR_BRAND_NAME",
  tagline: "YOUR BRAND TAGLINE",
  phone: "+1 (555) 000-0000",
  phoneRaw: "+15550000000",
  email: "contact@yourbrand.com",
  location: "New York, USA",
  copyright: "© 2026 YourBrand Inc. All rights reserved.",
  
  hero: {
    eyebrow: "YOUR EYEBROW TEXT",
    h1Line1: "First Line Headline",
    h1Line2: "Second Line Highlight",
    description: "Your custom brand introduction paragraph..."
  }
  // ...
};
```

### 2. Replacing Media Assets (Videos, Images, Logo)

1. **Brand Logo**:
   - Save your client's SVG logo to [`assets/logo/aurora-logo.svg`](file:///c:/Users/UAE%20LAPTOP%20BAZAR/Desktop/3d/assets/logo/aurora-logo.svg) or update the SVG inline in `index.html`.

2. **Videos**:
   - Place desktop MP4 videos inside `assets/videos/`: `hero.mp4`, `section-1.mp4`, `section-2.mp4`, `section-3.mp4`, `section-4.mp4`, `section-5.mp4`.

3. **Poster Fallback Images**:
   - Place 16:9 JPG poster images inside `assets/images/` (`hero.jpg`, `section-1.jpg`, etc.) for instant display before videos load or on mobile devices.

### 3. Customizing Colors & Theme Tokens

Modify the color tokens in `js/config.js` or directly in [`css/style.css`](file:///c:/Users/UAE%20LAPTOP%20BAZAR/Desktop/3d/css/style.css):

```css
:root {
  --bg-primary: #050505;       /* Main background color */
  --bg-secondary: #0A0A0A;     /* Panel background color */
  --accent: #C9A96E;           /* Luxury gold primary accent */
  --accent-light: #E5C88F;     /* Highlight accent color */
  --text-primary: #F5F5F5;     /* High contrast body text */
}
```

---

## 🚀 Performance & Accessibility Highlights

- 🏎️ **Optimized Asset Loading**: `IntersectionObserver` defers video initialization, ensuring sub-3-second initial page render on mobile networks.
- 🎯 **Hardware Accelerated Animations**: GSAP tweens utilize GPU-accelerated CSS properties (`transform: translate3d`, `opacity`).
- ♿ **Full Motion Accessibility**: Respects `@media (prefers-reduced-motion: reduce)`. Automatically disables video playback, section pinning, and particle generation while keeping content fully visible and legible.
- 📱 **Fluid Typography**: Dynamic clamp-based sizing ensures smooth scale transitions across mobile, tablet, and ultra-wide 4K displays.

---

## 🌐 Deployment Guide

This project can be deployed instantly to any static Web Hosting provider:

### Vercel
1. Drag and drop the root `3d/` project folder into the [Vercel Dashboard](https://vercel.com/new).
2. Click **Deploy**. Zero configuration required.

### Netlify
1. Drag and drop the `3d/` folder into [Netlify Drop](https://app.netlify.com/drop).
2. Site goes live immediately.

### GitHub Pages
1. Push the repository to GitHub.
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` (or `master`) and `/root`.
4. Click **Save**.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
