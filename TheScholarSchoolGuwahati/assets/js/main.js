/* =========================================
   main.js — General utilities
   ========================================= */

(function () {

  // Highlight active nav link based on current page
  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(function (link) {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });

})();
