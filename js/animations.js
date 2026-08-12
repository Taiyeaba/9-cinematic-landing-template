/**
 * AURORA ANIMATION ENGINE (GSAP + ScrollTrigger)
 * ==============================================
 * Apple-Style Pacing: Line-by-line staggered reveals, 
 * GSAP ScrollTrigger section pinning, animated counter metrics, and Lenis smooth integration.
 */

function initAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('[AURORA] GSAP or ScrollTrigger missing.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) {
    gsap.set('[data-animate], .reveal-line, .reveal-item, .card-stagger', { opacity: 1, y: 0, scale: 1 });
    return;
  }

  setupHeroTimeline();
  setupSection2Pinning();
  setupSection3Automation();
  setupSection4Data();
  setupSection5Counters();
  setupSection6Solutions();
  setupSection7Contact();
}

/**
 * HERO ENTRANCE ANIMATION TIMELINE
 */
function setupHeroTimeline() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

  tl.fromTo('.navbar', 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1.0 }
    )
    .fromTo('#hero-eyebrow', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0 }, 
      '-=0.5'
    )
    .fromTo('.hero-headline .reveal-line', 
      { opacity: 0, y: 60, rotationX: -10 }, 
      { opacity: 1, y: 0, rotationX: 0, stagger: 0.18 }, 
      '-=0.8'
    )
    .fromTo('#hero-description', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0 }, 
      '-=0.6'
    )
    .fromTo('.hero-actions .btn', 
      { opacity: 0, y: 25 }, 
      { opacity: 1, y: 0, stagger: 0.15 }, 
      '-=0.4'
    )
    .fromTo('#hero-bottom-label', 
      { opacity: 0, y: 15 }, 
      { opacity: 1, y: 0 }, 
      '-=0.2'
    )
    .fromTo('.hero-scroll-indicator',
      { opacity: 0, y: 15 },
      { opacity: 0.8, y: 0 },
      '-=0.2'
    );
}

/**
 * SECTION 02 — DIGITAL TRANSFORMATION (GSAP SCROLLTRIGGER PINNING & LINE-BY-LINE REVEALS)
 */
function setupSection2Pinning() {
  const s2 = document.querySelector('#technology');
  if (!s2) return;

  // Staggered reveal of copy lines
  gsap.fromTo(s2.querySelectorAll('.s2-reveal'), 
    { opacity: 0, y: 55 }, 
    {
      opacity: 1,
      y: 0,
      stagger: 0.18,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: s2,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // GSAP Section Pinning (indicated in client brief)
  if (window.innerWidth > 992) {
    ScrollTrigger.create({
      trigger: s2,
      start: 'top top',
      end: '+=45%',
      pin: true,
      pinSpacing: false,
      anticipatePin: 1
    });
  }
}

/**
 * SECTION 03 — SMART AUTOMATION (GSAP PINNING & PARALLAX FLOATING LABELS)
 */
function setupSection3Automation() {
  const s3 = document.querySelector('#automation');
  if (!s3) return;

  const floatingBox = s3.querySelector('.floating-labels-box');
  if (floatingBox) {
    gsap.fromTo(floatingBox, 
      { y: 40, opacity: 0 }, 
      {
        y: -15,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: s3,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  }

  gsap.fromTo(s3.querySelectorAll('.s3-reveal'), 
    { opacity: 0, y: 45 }, 
    {
      opacity: 1,
      y: 0,
      stagger: 0.18,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: s3,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  if (window.innerWidth > 992) {
    ScrollTrigger.create({
      trigger: s3,
      start: 'top top',
      end: '+=45%',
      pin: true,
      pinSpacing: false,
      anticipatePin: 1
    });
  }
}

/**
 * SECTION 04 — DATA & INTELLIGENCE (GSAP PINNING & REVEAL)
 */
function setupSection4Data() {
  const s4 = document.querySelector('#data');
  if (!s4) return;

  gsap.fromTo(s4.querySelectorAll('.s4-reveal'), 
    { opacity: 0, x: -35 }, 
    {
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: s4,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  if (window.innerWidth > 992) {
    ScrollTrigger.create({
      trigger: s4,
      start: 'top top',
      end: '+=45%',
      pin: true,
      pinSpacing: false,
      anticipatePin: 1
    });
  }
}

/**
 * SECTION 05 — RESULTS / STATISTICS (STAGGERED ENTRANCE + ANIMATED COUNTER)
 */
function setupSection5Counters() {
  const s5 = document.querySelector('#results');
  if (!s5) return;

  const statCards = s5.querySelectorAll('.stat-card');
  const statItems = s5.querySelectorAll('.stat-number');

  // GSAP Staggered Entrance Animation for Stat Cards
  gsap.fromTo(statCards, 
    { opacity: 0, y: 65, scale: 0.92, rotationX: -10 }, 
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: s5,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Animated Counter Logic
  ScrollTrigger.create({
    trigger: s5,
    start: 'top 70%',
    onEnter: () => {
      statItems.forEach(item => {
        const targetVal = parseFloat(item.getAttribute('data-target') || '0');
        const prefix = item.getAttribute('data-prefix') || '';
        const suffix = item.getAttribute('data-suffix') || '';
        const decimals = parseInt(item.getAttribute('data-decimals') || '0', 10);

        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetVal,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: () => {
            let formatted = obj.val.toFixed(decimals);
            item.textContent = `${prefix}${formatted}${suffix}`;
          }
        });
      });
    }
  });
}

/**
 * SECTION 06 — SOLUTIONS (CARD STAGGER REVEAL)
 */
function setupSection6Solutions() {
  const s6 = document.querySelector('#solutions');
  if (!s6) return;

  gsap.fromTo(s6.querySelectorAll('.solution-card'), 
    { opacity: 0, y: 50, scale: 0.96 }, 
    {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15,
      duration: 1.0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: s6,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  );
}

/**
 * SECTION 07 — FINAL CTA (SMOOTH ENTRANCE)
 */
function setupSection7Contact() {
  const s7 = document.querySelector('#contact');
  if (!s7) return;

  gsap.fromTo(s7.querySelectorAll('.section-content > *'), 
    { opacity: 0, y: 35 }, 
    {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: s7,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
}
