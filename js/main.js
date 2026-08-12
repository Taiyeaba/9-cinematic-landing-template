/**
 * AURORA — MAIN APPLICATION CONTROLLER
 * =====================================
 * Integrates siteConfig data binding, Lenis smooth scroll, hero particles,
 * procedural canvas motion, video lazy loader, and mobile drawer menu.
 */

let lenisInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Populate DOM from siteConfig
  populateDOM();

  // 2. Initialize Hero Interactive Particles
  initHeroParticles('hero-particle-canvas');

  // 3. Initialize Procedural Background Motion Loops
  initProceduralBackgrounds();

  // 4. Initialize Video Lazy Loading
  initVideoLoader();

  // 5. Initialize GSAP & ScrollTrigger Animations
  initAnimations();

  // 6. Initialize Lenis Smooth Scroll
  initSmoothScroll();

  // 7. Setup Navbar & Mobile Menu Handlers
  setupNavbarHandlers();
});

/**
 * Populate HTML Elements from siteConfig
 */
function populateDOM() {
  if (typeof siteConfig === 'undefined') return;

  const c = siteConfig;

  // Title & Meta
  document.title = `${c.companyName} — ${c.tagline}`;

  // Navbar
  setText('.brand-name-text', c.companyName);

  const navLinksContainer = document.getElementById('nav-menu-links');
  const mobileNavLinksContainer = document.getElementById('mobile-nav-menu-links');

  if (c.navigation) {
    const navHTML = c.navigation
      .map(link => `<li><a href="${link.target}" class="nav-link">${link.label}</a></li>`)
      .join('');
    if (navLinksContainer) navLinksContainer.innerHTML = navHTML;
    if (mobileNavLinksContainer) {
      mobileNavLinksContainer.innerHTML = c.navigation
        .map((link, idx) => `
          <li>
            <a href="${link.target}" class="mobile-nav-link">
              <span class="mobile-nav-num">0${idx + 1}</span>
              <span class="mobile-nav-label">${link.label}</span>
              <span class="mobile-nav-arrow">→</span>
            </a>
          </li>
        `).join('');
    }
  }

  const navCTA = document.getElementById('nav-cta-btn');
  const mobileNavCTA = document.getElementById('mobile-nav-cta-btn');
  if (c.phone) {
    if (navCTA) {
      navCTA.href = `tel:${c.phoneRaw || c.phone.replace(/[^0-9+]/g, '')}`;
      navCTA.textContent = "Book a Strategy Call";
    }
    if (mobileNavCTA) {
      mobileNavCTA.href = `tel:${c.phoneRaw || c.phone.replace(/[^0-9+]/g, '')}`;
      mobileNavCTA.textContent = "Book a Strategy Call";
    }
  }

  // Hero Section
  setText('#hero-eyebrow', c.hero.eyebrow);
  setText('#hero-h1-line-1', c.hero.h1Line1);
  setText('#hero-h1-line-2', c.hero.h1Line2);
  setText('#hero-description', c.hero.description);
  setText('#hero-bottom-label', c.hero.bottomLabel);
  setButton('#hero-primary-cta', c.hero.primaryCTA, c.hero.primaryCTATarget);
  setButton('#hero-secondary-cta', c.hero.secondaryCTA, c.hero.secondaryCTATarget);
  setMedia('#hero-video', '#hero-poster', c.hero.video, c.hero.poster);

  // Section 02 — Technology (Digital Transformation)
  const sec2 = c.sections.technology;
  if (sec2) {
    setText('#technology-eyebrow', sec2.eyebrow);
    setText('#technology-h2-line-1', sec2.h2Line1);
    setText('#technology-h2-line-2', sec2.h2Line2);
    setText('#technology-description', sec2.description);
    setButton('#technology-cta', sec2.cta, sec2.ctaTarget);
    setMedia('#technology-video', '#technology-poster', sec2.video, sec2.poster);
  }

  // Section 03 — Automation (Smart Automation)
  const sec3 = c.sections.automation;
  if (sec3) {
    setText('#automation-eyebrow', sec3.eyebrow);
    setText('#automation-h2-line-1', sec3.h2Line1);
    setText('#automation-h2-line-2', sec3.h2Line2);
    setText('#automation-description', sec3.description);
    setButton('#automation-cta', sec3.cta, sec3.ctaTarget);
    setMedia('#automation-video', '#automation-poster', sec3.video, sec3.poster);

    if (sec3.floatingLabels) {
      const floatingBox = document.getElementById('s3-floating-labels');
      if (floatingBox) {
        floatingBox.innerHTML = sec3.floatingLabels
          .map(lbl => `<div class="tag-pill">${lbl}</div>`)
          .join('');
      }
    }
  }

  // Section 04 — Data (Data & Intelligence)
  const sec4 = c.sections.data;
  if (sec4) {
    setText('#data-eyebrow', sec4.eyebrow);
    setText('#data-h2-line-1', sec4.h2Line1);
    setText('#data-h2-line-2', sec4.h2Line2);
    setText('#data-description', sec4.description);
    setButton('#data-cta', sec4.cta, sec4.ctaTarget);
    setMedia('#data-video', '#data-poster', sec4.video, sec4.poster);
  }

  // Section 05 — Results (Proven Impact / Statistics)
  const sec5 = c.sections.results;
  if (sec5) {
    setText('#results-eyebrow', sec5.eyebrow);
    setHTML('#results-h2', sec5.h2);
    setMedia('#results-video', '#results-poster', sec5.video, sec5.poster);

    const statsGrid = document.getElementById('s5-stats-grid');
    if (statsGrid && c.statistics) {
      statsGrid.innerHTML = c.statistics.map(s => `
        <div class="stat-card">
          <div class="stat-badge"><span class="stat-beacon"></span> LIVE METRIC</div>
          <div class="stat-num-row">
            <span class="stat-number" data-target="${s.value}" data-prefix="${s.prefix || ''}" data-suffix="${s.suffix}" data-decimals="${s.decimals || 0}">0</span>
          </div>
          <div class="stat-label">${s.label}</div>
          <p class="stat-subtext">${s.desc || ''}</p>
        </div>
      `).join('');
    }
  }

  // Section 06 — Solutions (Our Solutions)
  const sec6 = c.sections.solutions;
  if (sec6) {
    setText('#solutions-eyebrow', sec6.eyebrow);
    setHTML('#solutions-h2', sec6.h2);
    setText('#solutions-description', sec6.description);
    setMedia('#solutions-video', '#solutions-poster', sec6.video, sec6.poster);

    const cardsGrid = document.getElementById('s6-cards-grid');
    if (cardsGrid && sec6.cards) {
      cardsGrid.innerHTML = sec6.cards.map(card => `
        <div class="solution-card">
          <div class="card-header-row">
            <div class="card-icon-box">${card.icon || '❖'}</div>
            <span class="card-tag-pill">${card.tag || 'CAPABILITY'}</span>
          </div>
          <h3 class="card-title">${card.title}</h3>
          <p class="card-desc">${card.description}</p>
          <div class="card-action-link">
            <span>Explore Solution</span>
            <span class="card-arrow-icon">↗</span>
          </div>
        </div>
      `).join('');
    }
  }

  // Section 07 — Final CTA & Contact
  const contact = c.contact;
  if (contact) {
    setText('#contact-h2', contact.h2);
    setText('#contact-description', contact.description);
    setButton('#contact-cta', contact.cta, `mailto:${contact.email}`);
    setText('#contact-email', contact.email);
    setText('#contact-phone', contact.phone);
    setText('#contact-location', contact.location);

    const emailLink = document.getElementById('contact-email-link');
    if (emailLink) emailLink.href = `mailto:${contact.email}`;

    const phoneLink = document.getElementById('contact-phone-link');
    if (phoneLink) phoneLink.href = `tel:${contact.phoneRaw || contact.phone.replace(/[^0-9+]/g, '')}`;

    const contactPoster = document.getElementById('contact-poster');
    if (contactPoster && contact.poster) contactPoster.src = contact.poster;
  }

  // Footer
  setText('.footer-brand-name', c.companyName);
  setText('.footer-tagline', c.tagline);
  setText('.footer-copyright', c.copyright);
}

function setText(selector, text) {
  const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (el && text !== undefined) el.textContent = text;
}

function setHTML(selector, html) {
  const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (el && html !== undefined) el.innerHTML = html;
}

function setButton(selector, text, href) {
  const btn = document.querySelector(selector);
  if (!btn) return;
  btn.href = href || '#';
  btn.textContent = text;
}

function setMedia(videoSelector, posterSelector, videoSrc, posterSrc) {
  const video = document.querySelector(videoSelector);
  const poster = document.querySelector(posterSelector);

  if (poster && posterSrc) poster.src = posterSrc;
  if (video && videoSrc) video.setAttribute('data-video-src', videoSrc);
}

/**
 * Initialize Lenis Smooth Scroll with 60FPS Inertial Engine
 */
function initSmoothScroll() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion || typeof Lenis === 'undefined') return;

  lenisInstance = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.05,
    touchMultiplier: 1.8,
    infinite: false
  });

  if (typeof ScrollTrigger !== 'undefined') {
    lenisInstance.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // Intercept all internal anchor link clicks for 100% Silky Smooth Lenis Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          lenisInstance.scrollTo(targetEl, {
            offset: 0,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }
      }
    });
  });
}

/**
 * 60FPS Procedural Canvas Motion Generator
 */
function initProceduralBackgrounds() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) return;

  const bgCanvases = document.querySelectorAll('.procedural-bg');

  bgCanvases.forEach((canvas, idx) => {
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    function render(t) {
      const sec = t * 0.0008;
      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createRadialGradient(
        width * (0.5 + Math.sin(sec + idx) * 0.2),
        height * (0.4 + Math.cos(sec * 0.7) * 0.2),
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.75
      );

      grad.addColorStop(0, 'rgba(201, 169, 110, 0.2)');
      grad.addColorStop(0.4, 'rgba(10, 10, 10, 0.4)');
      grad.addColorStop(1, 'rgba(5, 5, 5, 0.96)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  });
}

/**
 * Navbar Event Handlers & Mobile Menu Drawer Toggle
 */
function setupNavbarHandlers() {
  const navbar = document.getElementById('main-navbar');
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  if (toggleBtn && mobileDrawer) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      mobileDrawer.classList.toggle('active');
    });

    const closeBtn = document.getElementById('mobile-drawer-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    }

    mobileDrawer.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        mobileDrawer.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        
        const targetId = link.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            if (lenisInstance) {
              lenisInstance.scrollTo(targetEl, {
                offset: 0,
                duration: 1.4,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
              });
            } else {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      }
    });
  }
}
