(function() {
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);
  var s = document.createElement('style');
  s.innerHTML =
    ':root{--nj-red:#9B1528;--nj-red-dark:#7a1020;--nj-gold:#C9A96E;--nj-gold-dark:#a8874e;--nj-parchment:#F0E8D8;--nj-dark:#1E1A1D}' +
    'h1,h2,h3,h4,h5,h6,.page-heading,.card-title,.card-title a,.heroCarousel-title,.productView-title,.modal-header-title,.blog-post-title,.blog-post-title a,.sidebarBlock-heading,.footer-info-heading,.section-title{font-family:"Playfair Display",Georgia,serif!important;color:var(--nj-dark)}' +
    'body,p,.card-text,.productView-description,.productView-info-value,.breadcrumbs,.form-label,.form-input,.account-body,.blog-post-body,.footer-info-list,.footer-copyright{font-family:"Lora",Georgia,serif!important;color:var(--nj-dark)}' +
    '.button--primary,button[data-button-type="add-cart"],.heroCarousel-action.button--primary,.form-action .button--primary,.cart-actions .button--primary{background-color:var(--nj-red)!important;border-color:var(--nj-red)!important;color:#fff!important;font-family:"Lora",Georgia,serif!important}' +
    '.button--primary:hover,button[data-button-type="add-cart"]:hover,.heroCarousel-action.button--primary:hover{background-color:var(--nj-red-dark)!important;border-color:var(--nj-red-dark)!important}' +
    '.button:not(.button--primary){border-color:var(--nj-gold)!important;color:var(--nj-dark)!important;font-family:"Lora",Georgia,serif!important}' +
    '.button:not(.button--primary):hover{background-color:var(--nj-parchment)!important;border-color:var(--nj-gold-dark)!important}' +
    'a:not(.navPages-action):not(.navUser-action):not(.header-logo){color:var(--nj-red)}' +
    'a:not(.navPages-action):not(.navUser-action):not(.header-logo):hover{color:var(--nj-red-dark)}' +
    '.featuredProducts,.newProducts,.popularProducts,.home-layout-section,.page-section--shaded{background-color:var(--nj-parchment)!important}' +
    '.card-figcaption-button{background-color:var(--nj-red)!important;border-color:var(--nj-red)!important;color:#fff!important;font-family:"Lora",Georgia,serif!important}' +
    '.card-figcaption-button:hover{background-color:var(--nj-red-dark)!important}' +
    '.card-title a:hover{color:var(--nj-red)!important}' +
    '.price--discounted,.price--sale{color:var(--nj-red)!important}' +
    '.footer{background-color:var(--nj-dark)!important;color:#d4cec9!important}' +
    '.footer-info-heading{color:var(--nj-gold)!important;font-family:"Playfair Display",Georgia,serif!important}' +
    '.footer-info-list a,.footer-copyright{color:#d4cec9!important;font-family:"Lora",Georgia,serif!important}' +
    '.footer-info-list a:hover{color:var(--nj-gold)!important}' +
    '.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--nj-gold)!important;box-shadow:0 0 0 3px rgba(201,169,110,0.15)!important;outline:none}' +
    '.pagination-item--current .pagination-link{background-color:var(--nj-red)!important;border-color:var(--nj-red)!important;color:#fff!important}' +
    '.pagination-link:hover{background-color:var(--nj-parchment)!important;border-color:var(--nj-gold)!important}';
  document.head.appendChild(s);
})();
