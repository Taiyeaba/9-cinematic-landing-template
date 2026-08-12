# AURORA — Cinematic MarTech & AI Landing Page

AURORA is a production-grade, dark cinematic landing page built with **Vanilla JavaScript (ES6+)**, **CSS3**, **GSAP 3**, **GSAP ScrollTrigger**, **Lenis Smooth Scroll**, and **HTML5 Canvas**.

---

## 🔗 Project Links

- 🌐 **Live Demo**: [https://willowy-treacle-07958c.netlify.app/](https://willowy-treacle-07958c.netlify.app/)
- 🐙 **GitHub Repo**: [https://github.com/Taiyeaba/9-cinematic-landing-template.git](https://github.com/Taiyeaba/9-cinematic-landing-template.git)

---

## ✨ Features

- 🎬 **Cinematic Dark Design**: Dark minimal B2B MarTech UI (`#050505`) with gold accents (`#C9A96E`) and glassmorphism.
- ⚙️ **Centralized Config (`js/config.js`)**: All text, navigation, colors, stats, and media assets managed in a single configuration file.
- 📜 **60 FPS Lenis Smooth Scroll**: Inertial smooth scroll engine synced with GSAP ScrollTrigger ticker.
- 📌 **GSAP ScrollTrigger Pinning**: Desktop section pinning (`innerWidth > 992px`) for smooth section transitions.
- 🔢 **Animated Live Stats**: Scroll-triggered counting engine for metrics (`240%`, `3.8x`, `92%`, `24/7`).
- 🌌 **Interactive Canvas Particles**: Mouse-reactive golden stardust particles with proximity web connections.
- ⚡ **Lazy Video Loader**: `IntersectionObserver` defers background videos to save bandwidth and speed up load time.
- 🎨 **Procedural Shader Fallback**: 60 FPS ambient canvas gradient loop running while videos load.
- ♿ **Accessibility Support**: Full `@media (prefers-reduced-motion: reduce)` support.
- 📱 **Fully Responsive**: Mobile-first responsive layout with a slide-out glass navigation drawer.

---

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla CSS3, JavaScript (ES6+)
- **Libraries (CDN)**: GSAP 3, GSAP ScrollTrigger, Lenis 1.1.9, tsParticles
- **Fonts**: *Syne* (Headings), *Inter* (Body)

---

## 📁 Directory Structure

```text
3d/
├── index.html                  # Main HTML page & layout
├── README.md                   # Project documentation
├── css/
│   ├── style.css              # Design system & dark palette styles
│   └── responsive.css         # Media queries & breakpoint rules
├── js/
│   ├── config.js              # ⚙️ Central site configuration & data
│   ├── main.js                # App controller, DOM hydration & Lenis scroll
│   ├── animations.js          # GSAP ScrollTrigger timelines & reveals
│   ├── video-loader.js        # Video lazy loading engine
│   └── particles.js           # Interactive Hero particle canvas
└── assets/
    ├── images/                # Poster image fallbacks
    ├── videos/                # Background MP4 video loops
    └── logo/
        └── aurora-logo.svg    # Brand SVG logo
```

---

## ⚡ Quick Start

No build tools or `npm install` required.

Run locally using any static server:
```bash
# Using Node.js
npx serve .

# Using Python
python -m http.server 8000
```
Or open `index.html` directly in your browser.

---


## 🌐 Deployment

Deploy the project folder to any static hosting service:
- **Vercel**: Drag & drop folder into Vercel Dashboard
- **Netlify**: Drag & drop folder into Netlify Drop
- **GitHub Pages**: Push repository and enable Pages in repository settings

---

## 📄 License

MIT License.
