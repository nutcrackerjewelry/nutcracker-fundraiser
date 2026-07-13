// Nutcracker Jewelry — Script Manager fixes
window.addEventListener('load', function () {

  // 1. Load Google Fonts
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);

  var isMobile = window.innerWidth <= 768;

  // Only set property if value differs — prevents triggering our own observer
  function set(el, prop, val) {
    if (el.style.getPropertyValue(prop) !== val || el.style.getPropertyPriority(prop) !== 'important') {
      el.style.setProperty(prop, val, 'important');
    }
  }

  function forceContentStyles() {
    document.querySelectorAll('h1').forEach(function(el) {
      if (el.closest('nav') || el.closest('.navPages')) return;
      set(el, 'font-family', '"Playfair Display",Georgia,serif');
      set(el, 'font-size', isMobile ? '2.5rem' : '4.5rem');
      set(el, 'line-height', '1.05');
      set(el, 'font-weight', '700');
    });
    document.querySelectorAll('h2').forEach(function(el) {
      if (el.closest('nav') || el.closest('.navPages')) return;
      set(el, 'font-family', '"Playfair Display",Georgia,serif');
      set(el, 'font-size', isMobile ? '1.4rem' : '2rem');
      set(el, 'line-height', '1.25');
    });
    document.querySelectorAll('h3').forEach(function(el) {
      if (el.closest('nav') || el.closest('.navPages')) return;
      set(el, 'font-family', '"Playfair Display",Georgia,serif');
      set(el, 'font-size', isMobile ? '1.1rem' : '1.6rem');
      set(el, 'line-height', '1.3');
    });
    document.querySelectorAll('[data-sub-layout-container] p,[data-layout-id] p,[data-sub-layout-container] li,[data-layout-id] li').forEach(function(el) {
      set(el, 'font-family', '"Lora",Georgia,serif');
      set(el, 'font-size', isMobile ? '1rem' : '1.05rem');
      set(el, 'line-height', '1.75');
    });
  }

  forceContentStyles();

  // Watch for style and DOM changes — only re-applies when values actually differ
  new MutationObserver(forceContentStyles).observe(document.body, {
    attributes: true,
    attributeFilter: ['style'],
    childList: true,
    subtree: true
  });

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
