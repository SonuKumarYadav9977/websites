/* =========================================
   pages/home.js — Home page scripts
   ========================================= */

(function () {

  // Animate stat numbers counting up
  function animateCounters() {
    const stats = document.querySelectorAll('.stat h2');

    stats.forEach(function (el) {
      const target = parseInt(el.textContent.replace(/\D/g, ''));
      const suffix = el.textContent.replace(/[0-9]/g, '');
      let current = 0;
      const step = Math.ceil(target / 60);

      const timer = setInterval(function () {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current + suffix;
      }, 20);
    });
  }

  // Trigger counter when stats bar enters viewport
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.unobserve(statsBar);
      }
    }, { threshold: 0.3 });
    observer.observe(statsBar);
  }

})();
