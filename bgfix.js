window.addEventListener('load',function(){
  // Load Google Fonts: Playfair Display (headings) + Lora (body)
  var f=document.createElement('link');
  f.rel='stylesheet';
  f.href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';
  document.head.appendChild(f);
  var s=document.createElement('style');
  s.id='nj-fix';
  s.textContent='html,body{background-color:#F0E8D8!important} .home-layout-section .price,.home-layout-section .card-text--price,.featuredProducts .price,.newProducts .price,.popularProducts .price,.productCarousel .price{display:none!important} .header-logo,.header-logo a,.header-logo span,.header-logo__link,.header-logo-text{color:#C9A96E!important} .mobileMenu-toggleIcon{background-color:#F0E8D8!important} .mobileMenu-toggleIcon::before,.mobileMenu-toggleIcon::after{background-color:#F0E8D8!important} .mobileMenu-toggle{color:#F0E8D8!important} .menu-mainlinks{display:none!important} [data-content-region="home_above_announcments"],[data-content-region="home_above_header"]{background-color:#1E1A1D!important} .panel-header{background-color:#1E1A1D!important;color:#C9A96E!important} .panel-header *{color:#C9A96E!important} .panel-body{background-color:#F0E8D8!important;color:#1E1A1D!important} .panel-body input{background-color:#fff!important;color:#1E1A1D!important;border-color:#C9A96E!important} .card-img-container{height:320px!important;overflow:hidden!important} .card-image{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center center!important} body,p,span,li,a,td,th,label,input,select,textarea{font-family:"Lora",Georgia,serif!important} h1,h2,h3,h4,h5,h6,.section-title,[data-sub-layout-container] h1,[data-sub-layout-container] h2,[data-sub-layout-container] h3,[data-layout-id] h1,[data-layout-id] h2,[data-layout-id] h3{font-family:"Playfair Display",Georgia,serif!important} [data-sub-layout-container] h1,[data-layout-id] h1{font-size:clamp(2.8rem,5vw,4.5rem)!important;line-height:1.05!important;color:#C9A96E!important;font-weight:700!important;letter-spacing:0.02em!important} [data-sub-layout-container] h2,[data-layout-id] h2{font-size:2rem!important;line-height:1.25!important;color:#2C2C2C!important} [data-sub-layout-container] h3,[data-layout-id] h3{font-size:1.6rem!important;line-height:1.3!important;color:#2C2C2C!important} [data-sub-layout-container] p,[data-sub-layout-container] li,[data-layout-id] p,[data-layout-id] li{font-size:1.05rem!important;line-height:1.75!important;color:#2C2C2C!important} [data-content-region="home_above_announcments"] p,[data-content-region="home_above_announcments"] span,[data-content-region="home_above_announcments"] a{color:#C9A96E!important;font-family:"Playfair Display",Georgia,serif!important;font-style:italic!important;letter-spacing:0.12em!important} .sidebarBlock-heading{color:#C9A96E!important} .card-title,.card-title a{font-size:18px!important} @media(max-width:768px){.page-sidebar{display:none!important} .page-content{width:100%!important} .card-img-container{height:220px!important} [data-sub-layout-container]{width:100%!important;min-width:0!important;padding:12px 16px!important} [data-layout-id]{flex-wrap:wrap!important} [data-sub-layout-container] p,[data-sub-layout-container] li,[data-layout-id] p,[data-layout-id] li{font-size:1rem!important;line-height:1.8!important} [data-sub-layout-container] h1,[data-layout-id] h1{font-size:2.2rem!important} [data-sub-layout-container] h2,[data-layout-id] h2{font-size:1.15rem!important} [data-sub-layout-container] h3,[data-layout-id] h3{font-size:1rem!important}} .navPages-container a,.navPages-container li,.navmenu-reg a,.navmenu-reg li{color:#F0E8D8!important} .mega-menu1 a,.mega-menu1 li,.mega-menu1 span{color:#F0E8D8!important}';
  document.head.appendChild(s);
  // Keep our styles at the bottom of <head> so they always win
  function repin(){var el=document.getElementById('nj-fix');if(el&&el!==document.head.lastElementChild){document.head.appendChild(el);}}
  new MutationObserver(repin).observe(document.head,{childList:true});
  setTimeout(repin,300);setTimeout(repin,700);setTimeout(repin,1500);setTimeout(repin,3000);
  // Force sidebar nav link color — reapply after theme CSS overrides
  function fixNavListColors(){
    document.querySelectorAll('.navList-item a').forEach(function(a){
      a.style.setProperty('color','#9B1528','important');
    });
  }
  fixNavListColors();
  setTimeout(fixNavListColors,500);
  setTimeout(fixNavListColors,1000);
  setTimeout(fixNavListColors,2000);
  // Hide footer Categories column
  document.querySelectorAll('.footer-info-heading').forEach(function(h){
    if(h.textContent.trim()==='Categories'){h.closest('.footer-info-col').style.setProperty('display','none','important');}
  });
});
