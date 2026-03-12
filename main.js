/* ══════════════════════════════════════
   COOL NÍJAR SERVICIOS — main.js
   ══════════════════════════════════════ */

/* ── Scroll reveal ── */
const revEls = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revEls.forEach(el => revObs.observe(el));

/* ── Filtro de productos ── */
function filter(cat, btn) {
  document.querySelectorAll('.ftab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
  document.querySelectorAll('#pgrid .product-card').forEach(c => {
    c.style.display = (cat === 'all' || c.dataset.cat === cat) ? 'flex' : 'none';
  });
}

/* ── Menú móvil ── */
function toggleMenu() {
  const m   = document.getElementById('mobile-menu');
  const btn = document.getElementById('menu-btn');
  const isOpen = m.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('open');
    const btn = document.getElementById('menu-btn');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ── Header hide/show en scroll ── */
let lastScroll = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  const cur = window.scrollY;
  header.style.transform = (cur > lastScroll && cur > 120)
    ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = cur;
}, { passive: true });
