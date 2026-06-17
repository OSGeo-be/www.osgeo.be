// === i18n INIT (must run before anything else) ===
document.addEventListener('DOMContentLoaded', () => {
  I18N.init();
});

// === BURGER MENU ===
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
  
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

// === FILTER (archive page) ===
const filterBar = document.getElementById('filter-bar');
if (filterBar) {
  const buttons = filterBar.querySelectorAll('[data-filter]');
  const events  = document.querySelectorAll('.archive-event[data-tags]');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('btn-dark', 'active-filter');
        b.classList.add('btn-ghost');
      });
      btn.classList.remove('btn-ghost');
      btn.classList.add('btn-dark', 'active-filter');

      const filter = btn.dataset.filter;
      events.forEach(ev => {
        const tags = ev.dataset.tags || '';
        ev.style.display = (filter === 'all' || tags.split(' ').includes(filter)) ? '' : 'none';
      });

      // Hide empty year groups
      document.querySelectorAll('.year-group').forEach(group => {
        const visible = [...group.querySelectorAll('.archive-event')]
          .some(ev => ev.style.display !== 'none');
        group.style.display = visible ? '' : 'none';
      });
    });
  });
}

// === ENTRANCE ANIMATIONS ===
if ('IntersectionObserver' in window) {
  const animTargets = document.querySelectorAll(
    '.pillar, .event-card, .board-card, .social-link, .ag-row, .archive-event, .stat, .foss4g-year-card'
  );

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  animTargets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = `opacity .4s ease ${Math.min(i * 45, 400)}ms, transform .4s ease ${Math.min(i * 45, 400)}ms`;
    io.observe(el);
  });
}
