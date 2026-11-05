const toggle=document.querySelector(".nav-toggle");
const nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("contact-form")?.addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  const subject=encodeURIComponent(`The Mirror League — ${f.get("interest")}`);
  const body=encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\nInterest: ${f.get("interest")}\n\n${f.get("message")}`);
  document.getElementById("form-status").textContent="Opening your email application to send this enquiry to odoema@gmail.com.";
  window.location.href=`mailto:odoema@gmail.com?subject=${subject}&body=${body}`;
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
