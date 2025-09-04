document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  const themeToggle = document.getElementById('theme-toggle');

  // Menu burger animé
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
  });

  // Theme toggle (Light/Dark)
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.body.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      document.body.setAttribute('data-theme', 'light');
      themeToggle.textContent = '🌙';
    }
  });

  // Accessibility: toggle theme with keyboard on themeToggle
  themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      themeToggle.click();
    }
  });

  // Carousel buttons
  const carousel = document.querySelector('.carousel');
  const btnLeft = document.getElementById('carousel-left');
  const btnRight = document.getElementById('carousel-right');

  btnLeft.addEventListener('click', () => {
    carousel.scrollBy({
      left: -320,
      behavior: 'smooth',
    });
  });

  btnRight.addEventListener('click', () => {
    carousel.scrollBy({
      left: 320,
      behavior: 'smooth',
    });
  });

  // Optionnel : année dynamique dans footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
