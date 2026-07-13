// Nutcracker Jewelry — Script Manager fixes v13
window.addEventListener('load', function () {

  // 1. Load Google Fonts
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);

  var isMobile = window.innerWidth <= 768;
  var heroSize = isMobile ? '2.5rem' : '4.5rem';

  // 2. Inject a <style> block at the END of <body>
  //    Coming after BC's widget <style> tags means we win on document order
  //    when specificity is equal — and our selectors are more specific too.
  function injectOverrideStyle() {
    var old = document.getElementById('nj-override');
    if (old) old.parentNode.removeChild(old);
    var s = document.createElement('style');
    s.id = 'nj-override';
    s.textContent =
      // NUTCRACKER JEWELRY hero
      'div[class*="sd-simple-text-7706d270"],' +
      'div[class*="sd-simple-text-7706d270"] div,' +
      'div[class*="sd-simple-text-7706d270"] p,' +
      'div[class*="sd-simple-text-7706d270"] span {' +
        'font-size: ' + heroSize + ' !important;' +
        'font-family: "Playfair Display", Georgia, serif !important;' +
        'font-weight: 700 !important;' +
        'line-height: 1.05 !important;' +
      '}' +
      // Tagline
      'div[class*="sd-simple-text-b2099960"],' +
      'div[class*="sd-simple-text-b2099960"] div,' +
      'div[class*="sd-simple-text-b2099960"] p,' +
      'div[class*="sd-simple-text-b2099960"] span {' +
        'font-size: 0.75rem !important;' +
        'font-family: "Lora", Georgia, serif !important;' +
        'letter-spacing: 0.18em !important;' +
        'text-transform: uppercase !important;' +
        'line-height: 1.6 !important;' +
      '}';
    document.body.appendChild(s);
  }

  injectOverrideStyle();
  // Re-inject at intervals in case BC re-renders widgets
  [500, 1500, 3000, 6000].forEach(function(t) { setTimeout(injectOverrideStyle, t); });

  // Watch for new widgets added to DOM and re-inject our style after
  new MutationObserver(function(mutations) {
    var added = mutations.some(function(m) { return m.addedNodes.length > 0; });
    if (added) injectOverrideStyle();
  }).observe(document.body, { childList: true, subtree: true });

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
