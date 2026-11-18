(function () {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  items.forEach(function (el) { io.observe(el); });
  var links = document.querySelectorAll('.rail__nav a');
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle('is-on', a.getAttribute('href') === '#' + e.target.id); });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  ['story', 'works', 'record'].forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
})();
