// Nutcracker Jewelry — Script Manager fixes
window.addEventListener('load', function () {

  // 1. Load Google Fonts
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);

  var isMobile = window.innerWidth <= 768;

  // Widget style rules — add IDs here as you find them
  var widgets = {
    '7706d270': { size: isMobile ? '2.5rem' : '4.5rem', font: 'Playfair Display', weight: '700', lh: '1.05' }, // NUTCRACKER JEWELRY
    'b2099960': { size: '0.75rem', font: 'Lora', lh: '1.6', spacing: '0.18em', transform: 'uppercase' }        // tagline
  };

  function getRule(el) {
    var cls = el.className || '';
    var keys = Object.keys(widgets);
    for (var i = 0; i < keys.length; i++) {
      if (cls.indexOf(keys[i]) !== -1) return widgets[keys[i]];
    }
    // Default: body text
    return { size: isMobile ? '1rem' : '1.05rem', font: 'Lora', lh: '1.75' };
  }

  function applyToWidget(el) {
    var rule = getRule(el);
    el.style.setProperty('font-family', '"' + rule.font + '",Georgia,serif', 'important');
    el.style.setProperty('font-size', rule.size, 'important');
    el.style.setProperty('line-height', rule.lh, 'important');
    if (rule.weight) el.style.setProperty('font-weight', rule.weight, 'important');
    if (rule.spacing) el.style.setProperty('letter-spacing', rule.spacing, 'important');
    if (rule.transform) el.style.setProperty('text-transform', rule.transform, 'important');
    // Also force size on all inner elements
    el.querySelectorAll('div, p, span').forEach(function(child) {
      child.style.setProperty('font-size', rule.size, 'important');
      child.style.setProperty('font-family', '"' + rule.font + '",Georgia,serif', 'important');
      if (rule.weight) child.style.setProperty('font-weight', rule.weight, 'important');
      if (rule.lh) child.style.setProperty('line-height', rule.lh, 'important');
    });
  }

  function lockWidget(el) {
    if (el.dataset.njLocked) return;
    el.dataset.njLocked = '1';
    applyToWidget(el);
    new MutationObserver(function() {
      applyToWidget(el);
    }).observe(el, { attributes: true, attributeFilter: ['style'], childList: true, subtree: true });
  }

  function lockAllWidgets() {
    document.querySelectorAll('[class*="sd-simple-text"]').forEach(lockWidget);
  }

  lockAllWidgets();

  // Watch for new widgets injected by BC after load
  new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      m.addedNodes.forEach(function(node) {
        if (node.querySelectorAll) {
          node.querySelectorAll('[class*="sd-simple-text"]').forEach(lockWidget);
          if ((node.className || '').indexOf('sd-simple-text') !== -1) lockWidget(node);
        }
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  [300, 700, 1500, 3000].forEach(function(t) { setTimeout(lockAllWidgets, t); });

  // 2. Force sidebar nav link color
  function fixNavColors() {
    document.querySelectorAll('.navList-item a').forEach(function(a) {
      a.style.setProperty('color', '#9B1528', 'important');
    });
  }
  fixNavColors();
  [500, 1000, 2000].forEach(function(t) { setTimeout(fixNavColors, t); });

  // 3. Hide footer Categories column
  document.querySelectorAll('.footer-info-heading').forEach(function(h) {
    if (h.textContent.trim() === 'Categories') {
      h.closest('.footer-info-col').style.setProperty('display', 'none', 'important');
    }
  });

});
