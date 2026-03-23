// ─────────────────────────────────────────────
// CASE STUDY PAGE — Renderer
// ─────────────────────────────────────────────

const C = window.SITE_CONTENT;

function getIdx() {
  const p = new URLSearchParams(window.location.search);
  const id = parseInt(p.get('id'), 10);
  return isNaN(id) ? 0 : id;
}

function renderPage() {
  const idx = getIdx();
  const cs  = C.caseStudies[idx];
  if (!cs) { window.location.href = 'index.html'; return; }

  const total = C.caseStudies.length;

  document.title = cs.title + ' — Nishant Ghadge';

  // Nav counter
  document.getElementById('cs-counter').textContent =
    pad(idx + 1) + ' / ' + pad(total);

  // Hero
  document.getElementById('cs-num-label').textContent   = cs.num;
  document.getElementById('cs-main-title').textContent  = cs.title;
  document.getElementById('cs-overview-text').textContent = cs.overview;
  document.getElementById('cs-tags-row').innerHTML =
    cs.tags.map(t => '<span class="cs-tag">' + t + '</span>').join('') +
    (cs.liveUrl
      ? '<a href="' + cs.liveUrl + '" target="_blank" rel="noopener" class="cs-live-link">↗ View Live Site</a>'
      : '');

  // Body
  document.getElementById('cs-content').innerHTML = buildContent(cs);

  // Pagination
  const prev = idx > 0          ? C.caseStudies[idx - 1] : null;
  const next = idx < total - 1  ? C.caseStudies[idx + 1] : null;
  document.getElementById('cs-pagination').innerHTML =
    '<div class="cs-pagination-inner">' +
      (prev
        ? '<a href="case-study.html?id=' + (idx - 1) + '" class="cs-pag-link cs-pag-prev">' +
            '<span class="cs-pag-dir">← Previous</span>' +
            '<span class="cs-pag-title">' + prev.title + '</span>' +
          '</a>'
        : '<div class="cs-pag-link cs-pag-empty"></div>') +
      (next
        ? '<a href="case-study.html?id=' + (idx + 1) + '" class="cs-pag-link cs-pag-next">' +
            '<span class="cs-pag-dir">Next →</span>' +
            '<span class="cs-pag-title">' + next.title + '</span>' +
          '</a>'
        : '<div class="cs-pag-link cs-pag-empty"></div>') +
    '</div>';

  // Scroll reveal
  initReveal();
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function buildContent(cs) {
  var html = '';

  // Problem
  html += section('The Problem',
    '<p class="cs-body-text">' + cs.problem.intro + '</p>' +
    '<ul class="cs-bullets">' +
      cs.problem.bullets.map(function(b) { return '<li>' + b + '</li>'; }).join('') +
    '</ul>'
  );

  // Scale
  if (cs.scale && cs.scale.length) {
    html += section('Scale of the System',
      '<div class="cs-scale-grid">' +
        cs.scale.map(function(s) {
          return '<div class="cs-scale-item">' + s + '</div>';
        }).join('') +
      '</div>'
    );
  }

  // Role
  html += section('My Role',
    '<ul class="cs-role-list">' +
      cs.role.map(function(r) { return '<li>' + r + '</li>'; }).join('') +
    '</ul>'
  );

  // Challenges
  html += section('Key Challenges',
    '<div class="cs-challenges">' +
      cs.challenges.map(function(c, i) {
        return '<div class="cs-challenge">' +
          '<div class="cs-challenge-num">0' + (i + 1) + '</div>' +
          '<div>' +
            '<div class="cs-challenge-title">' + c.title + '</div>' +
            '<div class="cs-challenge-desc">' + c.desc + '</div>' +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>'
  );

  // Approach
  html += section('Design Approach',
    '<div class="cs-approach">' +
      cs.approach.map(function(a, i) {
        return '<div class="cs-approach-step">' +
          '<div class="cs-approach-num">' + (i + 1) + '</div>' +
          '<div>' +
            '<div class="cs-approach-title">' + a.title + '</div>' +
            '<p class="cs-approach-body">' + a.body + '</p>' +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>'
  );

  // Solution
  html += section('Solution',
    '<p class="cs-body-text">' + cs.solution + '</p>' +
    (cs.flow
      ? '<div class="cs-flow">' +
          '<div class="cs-flow-label">Experience Flow</div>' +
          '<div class="cs-flow-steps">' + cs.flow + '</div>' +
        '</div>'
      : '')
  );

  // Impact (dark section)
  html +=
    '<div class="cs-section cs-impact-section cs-reveal">' +
      '<div class="cs-section-inner">' +
        '<div class="cs-section-label">Impact</div>' +
        '<h2 class="cs-section-title">Outcomes</h2>' +
        '<div class="cs-impact-grid">' +
          cs.impact.map(function(group) {
            return '<div class="cs-impact-group">' +
              '<div class="cs-impact-group-title">' + group.title + '</div>' +
              '<ul class="cs-impact-list">' +
                group.items.map(function(item) {
                  return '<li>' + item + '</li>';
                }).join('') +
              '</ul>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>' +
    '</div>';

  // Takeaways
  html += section('Key Takeaways',
    '<div class="cs-takeaways">' +
      cs.takeaways.map(function(t) {
        return '<div class="cs-takeaway">' +
          '<div class="cs-takeaway-title">' + t.title + '</div>' +
          '<div class="cs-takeaway-desc">' + t.desc + '</div>' +
        '</div>';
      }).join('') +
    '</div>'
  );

  return html;
}

function section(label, inner) {
  return '<div class="cs-section cs-reveal">' +
    '<div class="cs-section-inner">' +
      '<div class="cs-section-label">' + label + '</div>' +
      inner +
    '</div>' +
  '</div>';
}

function initReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.cs-reveal').forEach(function(el) {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', renderPage);
