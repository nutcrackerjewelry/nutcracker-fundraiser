window.addEventListener('load',function(){
  var s=document.createElement('style');
  s.textContent='html,body{background-color:#F0E8D8!important} .home-layout-section .price,.home-layout-section .card-text--price,.featuredProducts .price,.newProducts .price,.popularProducts .price,.productCarousel .price{display:none!important} .header-logo,.header-logo a,.header-logo span,.header-logo__link,.header-logo-text{color:#C9A96E!important} .mobileMenu-toggleIcon{background-color:#F0E8D8!important} .mobileMenu-toggleIcon::before,.mobileMenu-toggleIcon::after{background-color:#F0E8D8!important} .mobileMenu-toggle{color:#F0E8D8!important} .menu-mainlinks{display:none!important} [data-content-region="home_above_announcments"],[data-content-region="home_above_header"]{background-color:#1E1A1D!important} .panel-header{background-color:#1E1A1D!important;color:#C9A96E!important} .panel-header *{color:#C9A96E!important} .panel-body{background-color:#F0E8D8!important;color:#1E1A1D!important} .panel-body input{background-color:#fff!important;color:#1E1A1D!important;border-color:#C9A96E!important} .card-img-container{height:320px!important;overflow:hidden!important} .card-image{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center center!important} body,p,span,li,a,td,th,label,input,select,textarea{font-family:Lora,Georgia,serif!important} .sidebarBlock-heading{color:#C9A96E!important} .card-title,.card-title a{font-size:18px!important} @media(max-width:768px){.page-sidebar{display:none!important} .page-content{width:100%!important} .card-img-container{height:220px!important} [data-sub-layout-container]{width:100%!important;min-width:0!important;padding:12px 16px!important} [data-layout-id]{flex-wrap:wrap!important} body,p,span,li{font-size:16px!important;line-height:1.8!important}} .navPages-container a,.navPages-container li,.navmenu-reg a,.navmenu-reg li{color:#F0E8D8!important} .mega-menu1 a,.mega-menu1 li,.mega-menu1 span{color:#F0E8D8!important}';
  document.head.appendChild(s);
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
  // Upsize small text in page builder sections on all screen sizes
  var isMobile=window.innerWidth<=768;
  document.querySelectorAll('[data-sub-layout-container] p,[data-sub-layout-container] span,[data-sub-layout-container] li,[data-layout-id] p,[data-layout-id] span').forEach(function(el){
    var cs=window.getComputedStyle(el);
    var size=parseFloat(cs.fontSize);
    var targetSize=isMobile?'16px':'22px';
    if(size<=22){
      el.style.setProperty('font-size',targetSize,'important');
      el.style.setProperty('line-height','1.8','important');
    }
  });
});
