// Nutcracker Jewelry — Script Manager fixes v18
window.addEventListener('load', function () {

  // 1. Google Fonts
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);

  var isMobile = window.innerWidth <= 768;
  var heroSize = isMobile ? '2.5rem' : '4.5rem';
  var heroSizePx = isMobile ? 40 : 72; // px equivalent for comparison

  // 2. Hero widget — apply and lock with observer
  var applyingHero = false;

  function applyHero(el) {
    if (applyingHero) return;
    applyingHero = true;
    el.style.setProperty('font-size', heroSize, 'important');
    el.style.setProperty('font-family', '"Playfair Display", Georgia, serif', 'important');
    el.style.setProperty('font-weight', '700', 'important');
    el.style.setProperty('line-height', '1.05', 'important');
    el.querySelectorAll('*').forEach(function(child) {
      var cs = window.getComputedStyle(child);
      var currentPx = parseFloat(cs.fontSize);
      // Only override if not already at our target size
      if (Math.abs(currentPx - heroSizePx) > 2) {
        child.style.setProperty('font-size', heroSize, 'important');
      }
      child.style.setProperty('font-family', '"Playfair Display", Georgia, serif', 'important');
      child.style.setProperty('font-weight', '700', 'important');
    });
    // Release flag after a short delay so our own mutations don't re-trigger
    setTimeout(function() { applyingHero = false; }, 100);
  }

  function attachHeroObserver(el) {
    new MutationObserver(function() {
      if (!applyingHero) applyHero(el);
    }).observe(el, {
      attributes: true,
      attributeFilter: ['style'],
      childList: true,
      subtree: true
    });
    applyHero(el);
  }

  function findAndLockHero() {
    document.querySelectorAll('[class*="sd-simple-text-7706d270"]').forEach(function(el) {
      if (!el.dataset.njHeroLocked) {
        el.dataset.njHeroLocked = '1';
        attachHeroObserver(el);
      } else {
        applyHero(el); // re-apply even if already locked
      }
    });
  }

  findAndLockHero();
  [300, 800, 2000, 5000, 10000].forEach(function(t) {
    setTimeout(findAndLockHero, t);
  });

  // Watch for hero widget being added to DOM late
  new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      m.addedNodes.forEach(function(node) {
        if (node.querySelectorAll) {
          node.querySelectorAll('[class*="sd-simple-text-7706d270"]').forEach(function(el) {
            if (!el.dataset.njHeroLocked) {
              el.dataset.njHeroLocked = '1';
              attachHeroObserver(el);
            }
          });
        }
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  // 3. Tagline widget
  function applyTagline() {
    document.querySelectorAll('[class*="sd-simple-text-b2099960"]').forEach(function(el) {
      el.style.setProperty('font-size', '0.75rem', 'important');
      el.style.setProperty('font-family', '"Lora", Georgia, serif', 'important');
      el.style.setProperty('letter-spacing', '0.18em', 'important');
      el.style.setProperty('text-transform', 'uppercase', 'important');
      el.querySelectorAll('*').forEach(function(child) {
        child.style.setProperty('font-size', '0.75rem', 'important');
        child.style.setProperty('font-family', '"Lora", Georgia, serif', 'important');
      });
    });
  }
  applyTagline();
  [500, 1500, 3000].forEach(function(t) { setTimeout(applyTagline, t); });

  // 4. Nav colors
  function fixNavColors() {
    document.querySelectorAll('.navList-item a').forEach(function(a) {
      a.style.setProperty('color', '#9B1528', 'important');
    });
  }
  fixNavColors();
  [500, 1000, 2000].forEach(function(t) { setTimeout(fixNavColors, t); });

  // 5. Darken card images using the existing data-overlay div
  function fixCardImages() {
    // Make wrapper relative so overlay can cover it
    document.querySelectorAll('[data-overlay-wrapper]').forEach(function(el) {
      el.style.setProperty('position', 'relative', 'important');
    });
    // Stretch the overlay div and fill with dark colour
    document.querySelectorAll('[data-overlay]').forEach(function(el) {
      el.style.setProperty('position', 'absolute', 'important');
      el.style.setProperty('top', '0', 'important');
      el.style.setProperty('left', '0', 'important');
      el.style.setProperty('width', '100%', 'important');
      el.style.setProperty('height', '100%', 'important');
      el.style.setProperty('background', 'rgba(0,0,0,0.45)', 'important');
      el.style.setProperty('z-index', '1', 'important');
      el.style.setProperty('pointer-events', 'none', 'important');
    });
  }
  fixCardImages();
  [500, 1500, 3000].forEach(function(t) { setTimeout(fixCardImages, t); });

  // 6. Hide footer Categories
  document.querySelectorAll('.footer-info-heading').forEach(function(h) {
    if (h.textContent.trim() === 'Categories') {
      h.closest('.footer-info-col').style.setProperty('display', 'none', 'important');
    }
  });

});
