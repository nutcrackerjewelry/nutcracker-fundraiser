// Nutcracker Jewelry — Script Manager fixes
// Only handles things CSS alone cannot do

window.addEventListener('load', function () {

  // 1. Load Google Fonts (Playfair Display + Lora)
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);

  // 2. Force sidebar nav link color (BigCommerce JS keeps overriding this)
  function fixNavColors() {
    document.querySelectorAll('.navList-item a').forEach(function (a) {
      a.style.setProperty('color', '#9B1528', 'important');
    });
  }
  fixNavColors();
  [500, 1000, 2000].forEach(function (t) { setTimeout(fixNavColors, t); });

  // 3. Hide footer Categories column
  document.querySelectorAll('.footer-info-heading').forEach(function (h) {
    if (h.textContent.trim() === 'Categories') {
      h.closest('.footer-info-col').style.setProperty('display', 'none', 'important');
    }
  });

});
