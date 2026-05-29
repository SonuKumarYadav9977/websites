/* =========================================
   animations.js — Scroll reveal
   ========================================= */

(function () {

  function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // only animate once
        }
      });
    }, {
      threshold: 0.12
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealOnScroll);
  } else {
    revealOnScroll();
  }

})();
