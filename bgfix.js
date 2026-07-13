// Nutcracker Jewelry — Script Manager fixes
window.addEventListener('load', function () {

  // 1. Load Google Fonts
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);

  var isMobile = window.innerWidth <= 768;

  // Lock a single heading element — dedicated observer fires instantly on any style change
  function lockHeading(el) {
    var tag = el.tagName;
    var size = tag === 'H1' ? (isMobile ? '2.5rem' : '4.5rem') :
               tag === 'H2' ? (isMobile ? '1.4rem' : '2rem') :
                              (isMobile ? '1.1rem' : '1.6rem');
    var applying = false;

    function apply() {
      if (applying) return;
      applying = true;
      el.style.setProperty('font-family', '"Playfair Display",Georgia,serif', 'important');
      el.style.setProperty('font-size', size, 'important');
      el.style.setProperty('line-height', tag === 'H1' ? '1.05' : tag === 'H2' ? '1.25' : '1.3', 'important');
      if (tag === 'H1') el.style.setProperty('font-weight', '700', 'important');
      applying = false;
    }

    apply();
    new MutationObserver(apply).observe(el, { attributes: true, attributeFilter: ['style'] });
  }

  // Lock all headings not inside nav
  function lockAllHeadings() {
    document.querySelectorAll('h1, h2, h3').forEach(function(el) {
      if (!el.closest('nav') && !el.closest('.navPages') && !el.dataset.njLocked) {
        el.dataset.njLocked = '1';
        lockHeading(el);
      }
    });
  }

  lockAllHeadings();

  // Watch for new headings added by BC after page load
  new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      m.addedNodes.forEach(function(node) {
        if (node.querySelectorAll) {
          node.querySelectorAll('h1,h2,h3').forEach(function(el) {
            if (!el.closest('nav') && !el.closest('.navPages') && !el.dataset.njLocked) {
              el.dataset.njLocked = '1';
              lockHeading(el);
            }
          });
        }
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  // Also run at intervals in case anything slips through
  [300, 700, 1500, 3000].forEach(function(t) { setTimeout(lockAllHeadings, t); });

  // 2. Also handle paragraph text sizes in page builder blocks
  function fixParas() {
    document.querySelectorAll('[data-sub-layout-container] p,[data-layout-id] p').forEach(function(el) {
      el.style.setProperty('font-family', '"Lora",Georgia,serif', 'important');
      el.style.setProperty('font-size', isMobile ? '1rem' : '1.05rem', 'important');
      el.style.setProperty('line-height', '1.75', 'important');
    });
  }
  fixParas();
  [500, 1500, 3000].forEach(function(t) { setTimeout(fixParas, t); });

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
