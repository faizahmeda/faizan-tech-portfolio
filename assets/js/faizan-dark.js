// assets/js/faizan-dark.js - minimal interactions
document.addEventListener('DOMContentLoaded', function(){
  // simple smooth scroll for artifact links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
});
