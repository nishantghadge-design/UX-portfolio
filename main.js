// ─────────────────────────────────────────────
// MAIN.JS — Rendering + interactions
// ─────────────────────────────────────────────

const C = window.SITE_CONTENT;

// ── RENDER CASE STUDIES ──
function renderCaseStudies() {
  const list = document.getElementById('case-studies-list');
  const count = document.getElementById('cs-count');
  if (!list || !C.caseStudies) return;

  count.textContent = C.caseStudies.length + ' projects';

  list.innerHTML = C.caseStudies.map((cs, i) => `
    <a href="${cs.url}" class="case-study-row reveal" style="transition-delay:${i * 0.1}s">
      <div class="cs-num">${cs.num}</div>
      <div class="cs-body">
        <div class="cs-tags">
          ${cs.tags.map(t => `<span class="cs-tag">${t}</span>`).join('')}
        </div>
        <h3 class="cs-title">${cs.title}</h3>
        <p class="cs-desc">${cs.description}</p>
      </div>
      <div class="cs-image">
        <div class="cs-placeholder">
          ${cs.image
            ? `<img src="${cs.image}" alt="${cs.title}" loading="lazy" />`
            : `<span class="cs-placeholder-label">Visuals coming soon</span>`
          }
        </div>
      </div>
    </a>
  `).join('');
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

// ── CYCLING HERO TEXT ──
function initCyclingText() {
  const el = document.getElementById('heroCycle');
  if (!el) return;

  const traits = [
    'Generalist',
    '0→1 Designer',
    'Design Thinker',
    'Systems Designer',
    'Visual Designer',
    'Visual Communicator',
    'Storyteller',
    'Product Thinker'
  ];

  let index = 0;

  function showNext() {
    // Fade out
    el.classList.remove('visible');

    setTimeout(() => {
      el.textContent = traits[index];
      index = (index + 1) % traits.length;
      // Fade in
      el.classList.add('visible');
    }, 480); // wait for fade-out to finish
  }

  // Show first trait immediately
  el.textContent = traits[index];
  index = 1;
  setTimeout(() => el.classList.add('visible'), 100);

  // Cycle every 2.4s
  setInterval(showNext, 2400);
}

// ── FOOTER YEAR ──
function setYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderCaseStudies();
  renderAbout();
  renderPrinciples();
  renderContact();
  setYear();

  // Hero reveals immediately
  setTimeout(() => {
    document.querySelectorAll('#hero .reveal').forEach(el => el.classList.add('visible'));
    initReveal();
  }, 80);

  initNav();
  initMobileMenu();
  initCyclingText();
});
