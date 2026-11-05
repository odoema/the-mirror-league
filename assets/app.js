const toggle=document.querySelector(".nav-toggle");
const nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
const contactForm=document.getElementById("contact-form");
contactForm?.addEventListener("submit",async e=>{
  e.preventDefault();
  const form=e.currentTarget;
  const status=document.getElementById("form-status");
  const button=form.querySelector('button[type="submit"]');
  if(!form.reportValidity()) return;
  if(form.elements._honey?.value) return;
  button.disabled=true;
  button.innerHTML='Sending enquiry…';
  status.textContent="Sending your enquiry. Please keep this page open.";
  try{
    const response=await fetch("https://formsubmit.co/ajax/odoema@gmail.com",{
      method:"POST",
      headers:{"Accept":"application/json"},
      body:new FormData(form)
    });
    const result=await response.json();
    if(!response.ok||result.success===false) throw new Error(result.message||"Submission could not be confirmed.");
    status.textContent="Thank you. Your enquiry has been submitted successfully. The Mirror League team will be in touch.";
    form.reset();
  }catch(error){
    status.textContent="We could not confirm delivery. Please try again, or email odoema@gmail.com directly. ("+error.message+")";
  }finally{
    button.disabled=false;
    button.innerHTML='Submit enquiry <b>↗</b>';
  }
});

// Five-slide philosophy carousel. Pauses for user interaction, hidden tabs and reduced-motion preference.
(() => {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.hero-slide')];
  const dots = [...carousel.querySelectorAll('.hero-dot')];
  const current = carousel.querySelector('.hero-current');
  const prev = carousel.querySelector('.hero-prev');
  const next = carousel.querySelector('.hero-next');
  const pause = carousel.querySelector('.hero-pause');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active = 0;
  let timer = null;
  let paused = reducedMotion;

  function show(index) {
    active = (index + slides.length) % slides.length;
    const track = carousel.querySelector('.hero-slides');
    if (track) track.style.transform = `translate3d(-${active * 100}vw, 0, 0)`;
    slides.forEach((slide, i) => {
      const selected = i === active;
      slide.classList.toggle('is-active', selected);
      slide.setAttribute('aria-hidden', String(!selected));
      slide.querySelectorAll('a').forEach(link => link.tabIndex = selected ? 0 : -1);
    });
    dots.forEach((dot, i) => {
      const selected = i === active;
      dot.classList.toggle('is-active', selected);
      if (selected) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    if (current) current.textContent = String(active + 1).padStart(2, '0');
  }
  function stop() { if (timer) window.clearInterval(timer); timer = null; }
  function start() {
    stop();
    if (!paused) timer = window.setInterval(() => show(active + 1), 6500);
    if (pause) {
      pause.textContent = paused ? '▶' : 'Ⅱ';
      pause.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
      pause.setAttribute('aria-pressed', String(paused));
    }
  }
  prev?.addEventListener('click', () => { show(active - 1); start(); });
  next?.addEventListener('click', () => { show(active + 1); start(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); start(); }));
  pause?.addEventListener('click', () => { paused = !paused; start(); });
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', event => { if (!carousel.contains(event.relatedTarget)) start(); });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  show(0);
  start();
})();
