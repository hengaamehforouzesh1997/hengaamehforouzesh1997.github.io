(function(){
  document.querySelectorAll('img.thumb[data-from]').forEach(function(t){
    var src=document.querySelector(t.getAttribute('data-from')); if(src){ t.src=src.src; }
  });
  var aboutParts=[].slice.call(document.querySelectorAll('.view-about'));
  var projParts=[].slice.call(document.querySelectorAll('.view-projects'));
  var details=[].slice.call(document.querySelectorAll('article.detail'));
  var tabs=[].slice.call(document.querySelectorAll('.tabs a'));
  function show(list, on){ list.forEach(function(el){ el.hidden=!on; }); }
  function route(){
    var id=location.hash.replace('#','') || 'about';
    if(id==='projects-list') id='projects';
    var target=details.find(function(d){return d.id===id;});
    var tab = target ? 'projects' : (id==='projects' ? 'projects' : 'about');
    show(aboutParts, tab==='about' && !target);
    show(projParts, tab==='projects' && !target);
    details.forEach(function(d){ d.hidden = d!==target; });
    tabs.forEach(function(a){ if(a.dataset.tab===tab){ a.setAttribute('aria-current','page'); } else { a.removeAttribute('aria-current'); } });
    var nav=document.querySelector('.tabs');
    if(location.hash){ window.scrollTo(0, nav.offsetTop); }
  }
  window.addEventListener('hashchange', route);
  route();
})();
