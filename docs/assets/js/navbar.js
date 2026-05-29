/* =========================================
   navbar.js — Mobile hamburger toggle
   ========================================= */

(function () {

  const hamburger = document.getElementById('hamburger');
  const navbar    = document.getElementById('navbar');
  const navLinks  = document.getElementById('nav-links');

  if (!hamburger || !navbar) return;

  hamburger.addEventListener('click', function () {
    navbar.classList.toggle('nav-open');
    hamburger.textContent = navbar.classList.contains('nav-open') ? '✕' : '☰';
  });

  // Close menu when any nav link is clicked
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navbar.classList.remove('nav-open');
        hamburger.textContent = '☰';
      });
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      navbar.classList.remove('nav-open');
      hamburger.textContent = '☰';
    }
  });

})();
