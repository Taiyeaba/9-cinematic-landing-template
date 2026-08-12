/**
 * AURORA VIDEO LAZY LOADER ENGINE
 * ================================
 * Progressive lazy loading for fullscreen section video backgrounds.
 * Uses IntersectionObserver to load/play videos when sections approach viewport.
 */

function initVideoLoader() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lazyVideos = document.querySelectorAll('video[data-video-src]');

  if (isReducedMotion) {
    console.log('[AURORA] Reduced motion enabled. Video autoplay disabled.');
    lazyVideos.forEach(v => {
      v.style.display = 'none';
    });
    return;
  }

  // Load Hero Video Immediately
  const heroVideo = document.querySelector('#hero video[data-video-src]');
  if (heroVideo) {
    loadAndPlayVideo(heroVideo);
  }

  if (!('IntersectionObserver' in window)) {
    lazyVideos.forEach(v => loadAndPlayVideo(v));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (video === heroVideo) return;

      if (entry.isIntersecting) {
        loadAndPlayVideo(video);
      } else {
        video.pause();
      }
    });
  }, {
    rootMargin: '300px 0px 300px 0px',
    threshold: 0.05
  });

  lazyVideos.forEach(v => {
    if (v !== heroVideo) observer.observe(v);
  });
}

function loadAndPlayVideo(video) {
  const src = video.getAttribute('data-video-src');
  if (src && video.src !== src) {
    video.src = src;
    video.load();
  }

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay prevented or fallback poster renders
    });
  }
}
