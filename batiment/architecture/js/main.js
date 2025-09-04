 const darkToggle = document.querySelector('.dark-toggle');
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      darkToggle.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
    });