// Nutcracker Jewelry — Script Manager fixes
window.addEventListener('load', function () {

  // 1. Load Google Fonts
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);

  var isMobile = window.innerWidth <= 768;

  // 2. Force styles directly on Page Builder elements (beats BC inline style overrides)
  function forceContentStyles() {
    // Target all headings on page (not inside nav)
    document.querySelectorAll('h1').forEach(function(el) {
      if (el.closest('nav') || el.closest('.navPages')) return;
      el.style.setProperty('font-family', '"Playfair Display",Georgia,serif', 'important');
      el.style.setProperty('font-size', isMobile ? '2.5rem' : '4.5rem', 'important');
      el.style.setProperty('line-height', '1.05', 'important');
      el.style.setProperty('font-weight', '700', 'important');
    });
    document.querySelectorAll('h2').forEach(function(el) {
      if (el.closest('nav') || el.closest('.navPages')) return;
      el.style.setProperty('font-family', '"Playfair Display",Georgia,serif', 'important');
      el.style.setProperty('font-size', isMobile ? '1.4rem' : '2rem', 'important');
      el.style.setProperty('line-height', '1.25', 'important');
    });
    document.querySelectorAll('h3').forEach(function(el) {
      if (el.closest('nav') || el.closest('.navPages')) return;
      el.style.setProperty('font-family', '"Playfair Display",Georgia,serif', 'important');
      el.style.setProperty('font-size', isMobile ? '1.1rem' : '1.6rem', 'important');
      el.style.setProperty('line-height', '1.3', 'important');
    });
    // Page builder paragraphs
    document.querySelectorAll('[data-sub-layout-container] p,[data-layout-id] p,[data-sub-layout-container] li,[data-layout-id] li').forEach(function(el) {
      el.style.setProperty('font-family', '"Lora",Georgia,serif', 'important');
      el.style.setProperty('font-size', isMobile ? '1rem' : '1.05rem', 'important');
      el.style.setProperty('line-height', '1.75', 'important');
    });
  }

  // Run immediately
  forceContentStyles();

  // Watch the entire page for inline style changes and immediately re-apply ours
  var applying = false;
  new MutationObserver(function() {
    if (applying) return;
    applying = true;
    forceContentStyles();
    setTimeout(function() { applying = false; }, 100);
  }).observe(document.body, {
    attributes: true,
    attributeFilter: ['style'],
    subtree: true
  });

  // Also run at intervals to catch anything the observer misses
  [300, 600, 1000, 1500, 2500, 4000].forEach(function(t) {
    setTimeout(forceContentStyles, t);
  });

  // 3. Force sidebar nav link color
  function fixNavColors() {
    document.querySelectorAll('.navList-item a').forEach(function(a) {
      a.style.setProperty('color', '#9B1528', 'important');
    });
  }
  fixNavColors();
  [500, 1000, 2000].forEach(function(t) { setTimeout(fixNavColors, t); });

  // 4. Hide footer Categories column
  document.querySelectorAll('.footer-info-heading').forEach(function(h) {
    if (h.textContent.trim() === 'Categories') {
      h.closest('.footer-info-col').style.setProperty('display', 'none', 'important');
    }
  });

});
