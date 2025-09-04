// Burger / Drawer
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    burger?.addEventListener('click', () => {
      drawer.style.display = drawer.style.display === 'block' ? 'none' : 'block';
    });
// Dark mode toggle
const darkToggle = document.querySelector('.dark-toggle');
darkToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  darkToggle.textContent = document.body.classList.contains('dark')?"☀️":"🌙";
});

// Carrousel avec transition fluide
const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
let index = 0;
function showSlide(i){
  carousel.style.transform = `translateX(-${i*100}%)`;
}
document.getElementById('next').addEventListener('click', ()=>{
  index = (index+1)%items.length;
  showSlide(index);
});
document.getElementById('prev').addEventListener('click', ()=>{
  index = (index-1+items.length)%items.length;
  showSlide(index);
});

// Slider Avant/Après tactile et souris
document.querySelectorAll('.slider-overlay').forEach(slider=>{
  let isDragging=false;
  slider.addEventListener('mousedown', ()=>{isDragging=true;});
  slider.addEventListener('mouseup', ()=>{isDragging=false;});
  slider.addEventListener('mouseleave', ()=>{isDragging=false;slider.style.width="50%";});
  slider.addEventListener('mousemove', e=>{
    if(!isDragging) return;
    const rect = slider.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    slider.style.width=`${Math.min(Math.max(offsetX,0),rect.width)}px`;
  });
  // tactile mobile
  slider.addEventListener('touchstart', e=>{isDragging=true;});
  slider.addEventListener('touchend', ()=>{isDragging=false;});
  slider.addEventListener('touchmove', e=>{
    if(!isDragging) return;
    const rect = slider.getBoundingClientRect();
    const touch = e.touches[0];
    const offsetX = touch.clientX - rect.left;
    slider.style.width=`${Math.min(Math.max(offsetX,0),rect.width)}px`;
  });
});