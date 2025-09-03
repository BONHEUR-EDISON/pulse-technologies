document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const drawer = document.getElementById('drawer');
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Toggle drawer mobile
  burger?.addEventListener('click', () => {
    const isOpen = drawer.style.display === 'block' || drawer.style.display === 'flex';
    drawer.style.display = isOpen ? 'none' : 'flex';
  });

  // Fermer drawer au clic sur lien
  drawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.style.display = 'none';
    });
  });

  // Accordion FAQ
  document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('active');
    });
  });

  // Initialisation thème (localStorage ou préférence système)
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️';
  } else {
    root.removeAttribute('data-theme');
    toggleBtn.textContent = '🌙';
  }

  // Toggle thème clair/sombre au clic
  toggleBtn.addEventListener('click', () => {
    if (root.getAttribute('data-theme') === 'dark') {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      toggleBtn.textContent = '🌙';
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = '☀️';
    }
  });
});
