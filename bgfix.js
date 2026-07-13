window.addEventListener('load',function(){
  var s=document.createElement('style');
  s.textContent='html,body{background-color:#F0E8D8!important} .home-layout-section .price,.home-layout-section .card-text--price,.featuredProducts .price,.newProducts .price,.popularProducts .price,.productCarousel .price{display:none!important} .header-logo,.header-logo a,.header-logo span,.header-logo__link,.header-logo-text{color:#C9A96E!important} .mobileMenu-toggleIcon{background-color:#F0E8D8!important} .mobileMenu-toggleIcon::before,.mobileMenu-toggleIcon::after{background-color:#F0E8D8!important} .mobileMenu-toggle{color:#F0E8D8!important} .menu-mainlinks{display:none!important} [data-content-region="home_above_announcments"],[data-content-region="home_above_header"]{background-color:#1E1A1D!important} .panel-header{background-color:#1E1A1D!important;color:#C9A96E!important} .panel-header *{color:#C9A96E!important} .panel-body{background-color:#F0E8D8!important;color:#1E1A1D!important} .panel-body input{background-color:#fff!important;color:#1E1A1D!important;border-color:#C9A96E!important} .card-img-container{height:320px!important;overflow:hidden!important} .card-image{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center center!important} body,p,span,li,a,td,th,label,input,select,textarea{font-family:Lora,Georgia,serif!important} .sidebarBlock-heading{color:#C9A96E!important} .card-title,.card-title a{font-size:18px!important} @media(max-width:768px){.page-sidebar{display:none!important} .page-content{width:100%!important} .card-img-container{height:220px!important}} .navPages-container a,.navPages-container li,.navmenu-reg a,.navmenu-reg li{color:#F0E8D8!important} .mega-menu1 a,.mega-menu1 li,.mega-menu1 span{color:#F0E8D8!important}';
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
  // Upsize small accent text and apply Great Vibes to gold accent paragraphs
  document.querySelectorAll('[data-sub-layout-container] p').forEach(function(p){
    var cs=window.getComputedStyle(p);
    if(parseFloat(cs.fontSize)<=14){
      p.style.setProperty('font-size','18px','important');
      p.style.setProperty('line-height','1.8','important');
    }
  });
});
