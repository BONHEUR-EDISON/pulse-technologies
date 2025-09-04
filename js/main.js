// Toggle drawer mobile
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
burger?.addEventListener('click',()=>{drawer.style.display=drawer.style.display==='block'?'none':'block'});

// Switch light/dark mode
const modeBtn=document.getElementById('modeToggle');
const modeBtnMobile=document.getElementById('modeToggleMobile');
function toggleMode(){
  if(document.body.classList.contains('light')){
    document.body.classList.replace('light','dark');
    modeBtn.textContent='☀️ Light';
    modeBtnMobile.textContent='☀️ Light';
  }else{
    document.body.classList.replace('dark','light');
    modeBtn.textContent='🌙 Dark';
    modeBtnMobile.textContent='🌙 Dark';
  }
}
modeBtn?.addEventListener('click',toggleMode);
modeBtnMobile?.addEventListener('click',toggleMode);

// Hero slider
const slides=document.querySelectorAll('.hero-slide');
let currentSlide=0;
setInterval(()=>{
  slides[currentSlide].classList.remove('active');
  currentSlide=(currentSlide+1)%slides.length;
  slides[currentSlide].classList.add('active');
},5000);

// Cards animation au scroll
const cards=document.querySelectorAll('.card');
function revealCards(){
  const triggerBottom=window.innerHeight*0.85;
  cards.forEach(card=>{
    const cardTop=card.getBoundingClientRect().top;
    if(cardTop<triggerBottom){card.classList.add('visible')}
  });
}
window.addEventListener('scroll',revealCards);
revealCards();

// Year
document.getElementById('year').textContent=new Date().getFullYear();
// Ajoute dans <script>
// Navigation boutons hero
const heroButtons = document.querySelectorAll('.hero-btns button');
function gotoSlide(n){
  slides[currentSlide].classList.remove('active');
  heroButtons[currentSlide].classList.remove('active');
  currentSlide=n;
  slides[currentSlide].classList.add('active');
  heroButtons[currentSlide].classList.add('active');
}

// Animation sections au scroll
const sections=document.querySelectorAll('section');
function revealSections(){
  const triggerBottom = window.innerHeight * 0.9;
  sections.forEach(section=>{
    const top=section.getBoundingClientRect().top;
    if(top<triggerBottom){section.classList.add('visible')}
  });
}
window.addEventListener('scroll',revealSections);
revealSections();
