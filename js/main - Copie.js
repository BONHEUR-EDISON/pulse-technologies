
    // Toggle drawer mobile
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    burger?.addEventListener('click', () => {
      const opened = drawer.style.display === 'block';
      drawer.style.display = opened ? 'none' : 'block';
    });
    // FAQ
    document.querySelectorAll('.acc-btn').forEach(btn => {
      btn.addEventListener('click', () => btn.parentElement.classList.toggle('active'));
    });
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Slider de ton site déjà existant : menu burger, FAQ, année, etc.

// Toggle sombre / clair
const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

  