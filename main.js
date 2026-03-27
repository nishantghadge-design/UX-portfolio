// ─────────────────────────────────────────────
// MAIN.JS — Rendering + interactions
// ─────────────────────────────────────────────

let C = {};

function loadContent() {
  C = window.SITE_CONTENT || {};
  initAll();
}

function initAll() {
  renderCaseStudies();
  renderAbout();
  renderPrinciples();
  renderContact();
  setYear();

  setTimeout(() => {
    document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));
    initReveal();
  }, 80);

  initNav();
  initMobileMenu();
  initThemeToggle();
}

// ── THEME TOGGLE ──
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('portfolio-theme');
  if (saved) html.setAttribute('data-theme', saved);

  themeToggle?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });
}

// ── TILE BACKGROUND CLASSES ──
const TILE_BG_CLASSES = [
  'tile-bg-0',
  'tile-bg-1',
  'tile-bg-2',
  'tile-bg-3',
  'tile-bg-4',
  'tile-bg-5',
  'tile-bg-6',
  'tile-bg-7'
];

// ── RENDER CASE STUDIES (MOSAIC) ──
let activeFilter = 'Featured';

function renderCaseStudies() {
  const list      = document.getElementById('case-studies-list');
  const filterBar = document.getElementById('cs-filter-bar');
  const countEl   = document.getElementById('cs-count');
  if (!list || !C.caseStudies) return;

  // Fixed ordered tag list
  const allTags = ['All', 'Featured', 'Finance', 'Retail', 'Enterprise', 'Passion Project', 'Physical', 'AI First'];

  // Render filter pills
  if (filterBar) {
    filterBar.innerHTML = allTags.map(tag => `
      <button class="cs-filter-pill${tag === activeFilter ? ' active' : ''}" data-filter="${tag}">${tag}</button>
    `).join('');
    filterBar.querySelectorAll('.cs-filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        filterBar.querySelectorAll('.cs-filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilter();
      });
    });
  }

  applyFilter();

  function applyFilter() {
    const filtered = activeFilter === 'All'
      ? C.caseStudies
      : C.caseStudies.filter(cs => cs.tags.includes(activeFilter));

    if (countEl) countEl.textContent = filtered.length;

    list.innerHTML = filtered.map((cs, i) => {
      const bgClass = TILE_BG_CLASSES[i % TILE_BG_CLASSES.length];
      const hasGlow = i === 0;
      return `<a href="${cs.url}" class="tile tile-pos-${i} ${bgClass}">
        <div class="tile-bg"></div>
        <div class="tile-scrim"></div>
        ${hasGlow ? '<div class="tile-glow"></div>' : ''}
        <div class="tile-content">
          <span class="tile-num">${cs.num}</span>
          <div class="tile-tags">
            ${cs.tags.map(t => `<span class="tile-tag">${t}</span>`).join('')}
          </div>
          <div class="tile-title">${cs.title}</div>
          <div class="tile-desc">${cs.description}</div>
          <div class="tile-arrow">↗</div>
        </div>
      </a>`;
    }).join('');

    // Fade in
    list.style.opacity = '0';
    requestAnimationFrame(() => {
      list.style.transition = 'opacity 0.25s ease';
      list.style.opacity    = '1';
    });
  }
}

// ── RENDER ABOUT ──
function renderAbout() {
  const body  = document.getElementById('about-body');
  const roles = document.getElementById('about-roles');
  const edu   = document.getElementById('about-edu');
  if (!body || !C.about) return;

  body.innerHTML = C.about.paragraphs.map(p => `<p>${p}</p>`).join('');

  roles.innerHTML = C.about.roles.map(r => `
    <div class="role-item">
      <div>
        <div class="role-company">${r.company}</div>
        <div class="role-title">${r.title}</div>
      </div>
      <div class="role-duration">${r.duration}</div>
    </div>
  `).join('');

  edu.innerHTML = `
    <div class="edu-label">Education</div>
    ${C.about.education.map(e => `
      <div class="edu-item">
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-school">${e.school}</div>
      </div>
    `).join('')}
  `;
}

// ── RENDER PRINCIPLES ──
function renderPrinciples() {
  const grid = document.getElementById('principles-grid');
  if (!grid || !C.principles) return;

  grid.innerHTML = C.principles.map((p, i) => `
    <div class="principle-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="principle-num">0${i+1}</div>
      <div class="principle-title">${p.title}</div>
      <div class="principle-desc">${p.description}</div>
    </div>
  `).join('');
}

// ── RENDER CONTACT ──
function renderContact() {
  const links = document.getElementById('contact-links');
  if (!links || !C.contact) return;

  links.innerHTML = `
    <div class="contact-link-item">
      <div class="contact-link-label">Email</div>
      <a href="mailto:${C.contact.email}" class="contact-link-val">${C.contact.email}</a>
    </div>
    <div class="contact-link-item">
      <div class="contact-link-label">Location</div>
      <span class="contact-link-val">${C.contact.location}</span>
    </div>
    <div class="contact-link-item">
      <div class="contact-link-label">Currently</div>
      <span class="contact-link-val">${C.contact.status}</span>
    </div>
  `;
}

// ── SCROLL REVEAL ──
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── NAV SCROLL SHRINK + ACTIVE ──
function initNav() {
  const nav = document.getElementById('nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);

    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

// ── MOBILE MENU ──
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu   = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── FOOTER YEAR ──
function setYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  loadContent();
});
