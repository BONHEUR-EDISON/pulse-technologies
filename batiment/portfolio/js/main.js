// Menu Burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', () => nav.classList.toggle('active'));

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => document.body.classList.toggle('dark'));

// Portfolio Filter
const chips = document.querySelectorAll('.chip');
const galleryItems = document.querySelectorAll('.gal-item');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    galleryItems.forEach(item => {
      item.style.display = filter==='all'||item.dataset.cat===filter ? 'block':'none';
    });
  });
});

// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();