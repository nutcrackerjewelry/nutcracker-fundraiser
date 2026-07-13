// Nutcracker Jewelry — Script Manager fixes
window.addEventListener('load', function () {

  // 1. Load Google Fonts (Playfair Display + Lora)
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);

  // 2. Inject Page Builder font sizes as a style tag (not inline styles — no flash)
  var s = document.createElement('style');
  s.id = 'nj-pb';
  s.textContent =
    '[data-sub-layout-container] h1,[data-layout-id] h1{font-family:"Playfair Display",Georgia,serif!important;font-size:3.5rem!important;color:#C9A96E!important;line-height:1.05!important;font-weight:700!important}' +
    '[data-sub-layout-container] h2,[data-layout-id] h2{font-family:"Playfair Display",Georgia,serif!important;font-size:2rem!important;color:#2C2C2C!important;line-height:1.25!important}' +
    '[data-sub-layout-container] h3,[data-layout-id] h3{font-family:"Playfair Display",Georgia,serif!important;font-size:1.6rem!important;color:#2C2C2C!important;line-height:1.3!important}' +
    '[data-sub-layout-container] p,[data-layout-id] p,[data-sub-layout-container] li,[data-layout-id] li{font-size:1.05rem!important;line-height:1.75!important;color:#2C2C2C!important}' +
    '[data-content-region="home_above_announcments"] p,[data-content-region="home_above_announcments"] span{color:#C9A96E!important;font-style:italic!important;letter-spacing:0.12em!important}' +
    '@media(max-width:768px){' +
    '[data-sub-layout-container] h1,[data-layout-id] h1{font-size:2.2rem!important}' +
    '[data-sub-layout-container] h2,[data-layout-id] h2{font-size:1.15rem!important}' +
    '[data-sub-layout-container] h3,[data-layout-id] h3{font-size:1rem!important}' +
    '[data-sub-layout-container] p,[data-layout-id] p{font-size:1rem!important;line-height:1.8!important}' +
    '}';
  document.head.appendChild(s);

  // Keep our style tag at the bottom of head so it always wins
  function repin() {
    var el = document.getElementById('nj-pb');
    if (el && el !== document.head.lastElementChild) { document.head.appendChild(el); }
  }
  new MutationObserver(repin).observe(document.head, { childList: true });
  [300, 700, 1500, 3000].forEach(function (t) { setTimeout(repin, t); });

  // 3. Force sidebar nav link color (BC JS keeps overriding)
  function fixNavColors() {
    document.querySelectorAll('.navList-item a').forEach(function (a) {
      a.style.setProperty('color', '#9B1528', 'important');
    });
  }
  fixNavColors();
  [500, 1000, 2000].forEach(function (t) { setTimeout(fixNavColors, t); });

  // 4. Hide footer Categories column
  document.querySelectorAll('.footer-info-heading').forEach(function (h) {
    if (h.textContent.trim() === 'Categories') {
      h.closest('.footer-info-col').style.setProperty('display', 'none', 'important');
    }
  });

});
