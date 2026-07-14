// Nutcracker Jewelry — Script Manager fixes v14
window.addEventListener('load', function () {

  // 1. Google Fonts
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);

  var isMobile = window.innerWidth <= 768;
  var heroSize = isMobile ? '2.5rem' : '4.5rem';

  // 2. Hero widget — stamp on the element AND every descendant
  function applyHero() {
    document.querySelectorAll('[class*="sd-simple-text-7706d270"]').forEach(function(el) {
      el.style.setProperty('font-size', heroSize, 'important');
      el.style.setProperty('font-family', '"Playfair Display", Georgia, serif', 'important');
      el.style.setProperty('font-weight', '700', 'important');
      el.style.setProperty('line-height', '1.05', 'important');
      el.querySelectorAll('*').forEach(function(child) {
        child.style.setProperty('font-size', heroSize, 'important');
        child.style.setProperty('font-family', '"Playfair Display", Georgia, serif', 'important');
        child.style.setProperty('font-weight', '700', 'important');
        child.style.setProperty('line-height', '1.05', 'important');
      });
    });
  }

  // 3. requestAnimationFrame loop — runs at 60fps for 10 seconds
  //    BC's JS cannot override us faster than every frame
  var startTime = Date.now();
  function rafLoop() {
    applyHero();
    if (Date.now() - startTime < 10000) {
      requestAnimationFrame(rafLoop);
    }
  }
  requestAnimationFrame(rafLoop);

  // 4. Tagline widget
  function applyTagline() {
    document.querySelectorAll('[class*="sd-simple-text-b2099960"]').forEach(function(el) {
      el.style.setProperty('font-size', '0.75rem', 'important');
      el.style.setProperty('font-family', '"Lora", Georgia, serif', 'important');
      el.style.setProperty('letter-spacing', '0.18em', 'important');
      el.style.setProperty('text-transform', 'uppercase', 'important');
      el.style.setProperty('line-height', '1.6', 'important');
      el.querySelectorAll('*').forEach(function(child) {
        child.style.setProperty('font-size', '0.75rem', 'important');
        child.style.setProperty('font-family', '"Lora", Georgia, serif', 'important');
        child.style.setProperty('letter-spacing', '0.18em', 'important');
        child.style.setProperty('text-transform', 'uppercase', 'important');
        child.style.setProperty('line-height', '1.6', 'important');
      });
    });
  }
  applyTagline();
  [500, 1500, 3000].forEach(function(t) { setTimeout(applyTagline, t); });

  // 5. Nav link colors
  function fixNavColors() {
    document.querySelectorAll('.navList-item a').forEach(function(a) {
      a.style.setProperty('color', '#9B1528', 'important');
    });
  }
  fixNavColors();
  [500, 1000, 2000].forEach(function(t) { setTimeout(fixNavColors, t); });

  // 6. Hide footer Categories column
  document.querySelectorAll('.footer-info-heading').forEach(function(h) {
    if (h.textContent.trim() === 'Categories') {
      h.closest('.footer-info-col').style.setProperty('display', 'none', 'important');
    }
  });

});
