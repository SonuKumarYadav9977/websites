/* =========================================
   darkmode.js — Dark Mode Toggle & Persistence
   ========================================= */

(function () {

  const STORAGE_KEY = 'gw-theme';
  const toggleBtn   = document.getElementById('darkmode-toggle');
  const body        = document.body;

  /* ---------- Apply theme ---------- */
  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add('dark');
      if (toggleBtn) toggleBtn.textContent = '☀️';
      toggleBtn && toggleBtn.setAttribute('title', 'Switch to Light Mode');
    } else {
      body.classList.remove('dark');
      if (toggleBtn) toggleBtn.textContent = '🌙';
      toggleBtn && toggleBtn.setAttribute('title', 'Switch to Dark Mode');
    }
  }

  /* ---------- Load saved preference ---------- */
  function loadTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      applyTheme(saved === 'dark');
    } else {
      // Respect OS-level preference if no saved choice
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark);
    }
  }

  /* ---------- Toggle ---------- */
  function toggleTheme() {
    const isDark = body.classList.contains('dark');
    applyTheme(!isDark);
    localStorage.setItem(STORAGE_KEY, !isDark ? 'dark' : 'light');
  }

  /* ---------- Listen for OS theme changes ---------- */
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      // Only follow OS change if user hasn't set a manual preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches);
      }
    });

  /* ---------- Init ---------- */
  loadTheme();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }

  /* ---------- Expose globally (optional use from other scripts) ---------- */
  window.DarkMode = {
    enable:  () => { applyTheme(true);  localStorage.setItem(STORAGE_KEY, 'dark');  },
    disable: () => { applyTheme(false); localStorage.setItem(STORAGE_KEY, 'light'); },
    toggle:  toggleTheme,
    isDark:  () => body.classList.contains('dark'),
    reset:   () => { localStorage.removeItem(STORAGE_KEY); loadTheme(); }
  };

})();
