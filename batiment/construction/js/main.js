 // Burger / Drawer
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    burger?.addEventListener('click', () => {
      drawer.style.display = drawer.style.display === 'block' ? 'none' : 'block';
    });

    // Thème clair/sombre avec persistance
    const themeTargets = ['theme-toggle','theme-toggle-drawer'];
    function applyTheme(t){document.body.setAttribute('data-theme', t);themeTargets.forEach(id=>{const el=document.getElementById(id); if(!el) return; el.textContent = t==='light' ? '🌙' : '☀️';});}
    const saved = localStorage.getItem('theme') || 'light';
    applyTheme(saved);
    function toggleTheme(){const cur=document.body.getAttribute('data-theme');const next= cur==='light' ? 'dark' : 'light'; localStorage.setItem('theme', next); applyTheme(next);}
    themeTargets.forEach(id=>document.getElementById(id)?.addEventListener('click', toggleTheme));

    // Hero slider simple
    const heroSlides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.hero .dot');
    let heroIndex = 0;
    function showHero(i){heroSlides.forEach((s,idx)=>s.classList.toggle('active', idx===i)); dots.forEach((d,idx)=>d.classList.toggle('active', idx===i));}
    dots.forEach((d,idx)=>d.addEventListener('click',()=>{heroIndex=idx;showHero(heroIndex);}));
    setInterval(()=>{heroIndex=(heroIndex+1)%heroSlides.length;showHero(heroIndex);}, 6000);

    // Reveal on scroll
    const reveals=document.querySelectorAll('.reveal');
    const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible'); io.unobserve(e.target);}})},{threshold:.22});
    reveals.forEach(el=>io.observe(el));

    // Carrousel Réalisations
    const track=document.querySelector('.carousel-track');
    const items=document.querySelectorAll('.carousel-item');
    const prev=document.querySelector('.carousel .prev');
    const next=document.querySelector('.carousel .next');
    let idx=0; function update(){track.style.transform=`translateX(-${idx*100}%)`;}
    prev?.addEventListener('click',()=>{idx=(idx-1+items.length)%items.length;update();});
    next?.addEventListener('click',()=>{idx=(idx+1)%items.length;update();});

    // Filtres mini‑portfolio
    const chips=document.querySelectorAll('.chip');
    const gal=document.querySelectorAll('.gal-item');
    chips.forEach(ch=>ch.addEventListener('click',()=>{
      chips.forEach(x=>x.classList.remove('active')); ch.classList.add('active');
      const cat=ch.dataset.filter; gal.forEach(item=>{
        const show = cat==='all' || item.dataset.cat===cat; item.style.display = show ? 'block' : 'none';
      });
    }));

    // FAQ
    document.querySelectorAll('.acc-btn').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('active')));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Back to top
    const toTop=document.getElementById('toTop');
    window.addEventListener('scroll',()=>{toTop.style.display = window.scrollY>500 ? 'flex':'none';});
    toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));