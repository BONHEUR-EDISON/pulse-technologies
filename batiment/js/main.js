
  // année dans le footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // toggle dark/light
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    const theme = document.body.getAttribute('data-theme');
    document.body.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
    toggle.textContent = theme === 'light' ? '☀️' : '🌙';
  });

  // menu mobile responsive
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // fermer menu après clic sur un lien (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
