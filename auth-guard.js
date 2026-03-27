(function () {
  var SESSION_KEY = 'ng_portfolio_auth';
  if (sessionStorage.getItem(SESSION_KEY) === '1') return;

  var HASH = '8eb5fe18ecc55871783b342e17b984aafc4fa97cd73b4a92cef1ffb9e29f804d';

  // ── Inject modal styles ──
  var style = document.createElement('style');
  style.textContent = [
    '/* ── Auth Modal ── */',
    '#ng-modal-backdrop {',
    '  position:fixed;inset:0;z-index:9999;',
    '  display:flex;align-items:center;justify-content:center;padding:20px;',
    '  background:rgba(9,9,11,0.72);',
    '  backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);',
    '  animation:ng-fade-in 0.3s ease;',
    '}',
    '@keyframes ng-fade-in{from{opacity:0}to{opacity:1}}',
    '@keyframes ng-slide-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}',
    '#ng-modal {',
    '  background:#ffffff;',
    '  border:1px solid #E4E4E7;',
    '  border-radius:16px;',
    '  padding:40px;',
    '  width:100%;max-width:460px;',
    '  display:flex;flex-direction:column;gap:0;',
    '  box-shadow:0 24px 64px rgba(0,0,0,0.18),0 4px 16px rgba(0,0,0,0.08);',
    '  animation:ng-slide-up 0.35s cubic-bezier(0.34,1.2,0.64,1);',
    '  position:relative;',
    '}',
    '[data-theme="dark"] #ng-modal {',
    '  background:#18181B;border-color:#27272A;',
    '}',
    '#ng-modal-icon {',
    '  width:40px;height:40px;',
    '  background:#FEF3EE;border-radius:10px;',
    '  display:flex;align-items:center;justify-content:center;',
    '  margin-bottom:20px;flex-shrink:0;',
    '}',
    '[data-theme="dark"] #ng-modal-icon { background:rgba(194,65,12,0.12); }',
    '#ng-modal-icon svg { width:20px;height:20px;color:#C2410C; }',
    '[data-theme="dark"] #ng-modal-icon svg { color:#FB923C; }',
    '#ng-modal-title {',
    '  font-size:1.375rem;font-weight:700;letter-spacing:-0.03em;line-height:1.25;',
    '  color:#09090B;margin-bottom:10px;',
    '}',
    '[data-theme="dark"] #ng-modal-title { color:#FAFAFA; }',
    '#ng-modal-body {',
    '  font-size:0.9rem;line-height:1.75;color:#52525B;margin-bottom:28px;',
    '}',
    '[data-theme="dark"] #ng-modal-body { color:#A1A1AA; }',
    '#ng-modal-body strong { color:#09090B;font-weight:600; }',
    '[data-theme="dark"] #ng-modal-body strong { color:#FAFAFA; }',
    '#ng-modal-label {',
    '  font-size:0.6875rem;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;',
    '  color:#A1A1AA;margin-bottom:8px;display:block;',
    '}',
    '#ng-modal-input {',
    '  width:100%;padding:11px 14px;',
    '  border:1px solid #E4E4E7;border-radius:8px;',
    '  font-family:inherit;font-size:0.9375rem;',
    '  color:#09090B;background:#F4F4F5;',
    '  outline:none;transition:border-color 0.2s,box-shadow 0.2s,background 0.2s;',
    '  margin-bottom:12px;',
    '}',
    '[data-theme="dark"] #ng-modal-input {',
    '  background:#09090B;border-color:#27272A;color:#FAFAFA;',
    '}',
    '#ng-modal-input:focus {',
    '  border-color:#C2410C;box-shadow:0 0 0 3px rgba(194,65,12,0.12);background:#fff;',
    '}',
    '[data-theme="dark"] #ng-modal-input:focus {',
    '  border-color:#FB923C;box-shadow:0 0 0 3px rgba(251,146,60,0.15);background:#18181B;',
    '}',
    '#ng-modal-input::placeholder { color:#A1A1AA; }',
    '#ng-modal-error {',
    '  font-size:0.8rem;color:#EF4444;min-height:1rem;margin-bottom:8px;',
    '  letter-spacing:0.01em;',
    '}',
    '#ng-modal-btn {',
    '  width:100%;padding:11px 20px;',
    '  background:#C2410C;border:none;border-radius:8px;',
    '  font-family:inherit;font-size:0.875rem;font-weight:600;',
    '  color:#fff;cursor:pointer;',
    '  transition:transform 0.15s ease,box-shadow 0.2s ease,opacity 0.2s;',
    '  letter-spacing:0.01em;',
    '}',
    '[data-theme="dark"] #ng-modal-btn { background:#FB923C;color:#1c0800; }',
    '#ng-modal-btn:hover:not(:disabled) {',
    '  transform:translateY(-1px);',
    '  box-shadow:0 0 20px 4px rgba(194,65,12,0.25),0 4px 12px rgba(0,0,0,0.1);',
    '}',
    '[data-theme="dark"] #ng-modal-btn:hover:not(:disabled) {',
    '  box-shadow:0 0 20px 4px rgba(251,146,60,0.3),0 4px 12px rgba(0,0,0,0.15);',
    '}',
    '#ng-modal-btn:disabled { opacity:0.4;cursor:not-allowed;transform:none; }',
    '#ng-modal-divider {',
    '  border:none;border-top:1px solid #E4E4E7;margin:28px 0 20px;',
    '}',
    '[data-theme="dark"] #ng-modal-divider { border-color:#27272A; }',
    '#ng-modal-footer {',
    '  font-size:0.8125rem;color:#A1A1AA;line-height:1.6;text-align:center;',
    '}',
    '#ng-modal-footer a {',
    '  color:#C2410C;text-decoration:none;font-weight:500;',
    '  border-bottom:1px solid rgba(194,65,12,0.3);',
    '  transition:border-color 0.2s,color 0.2s,opacity 0.2s;',
    '}',
    '[data-theme="dark"] #ng-modal-footer a { color:#FB923C;border-color:rgba(251,146,60,0.35); }',
    '#ng-modal-footer a:hover { opacity:0.75; }',
    '@media(max-width:500px){',
    '  #ng-modal{padding:28px 24px;}',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // ── Inject modal HTML ──
  var backdrop = document.createElement('div');
  backdrop.id = 'ng-modal-backdrop';
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.setAttribute('aria-labelledby', 'ng-modal-title');
  backdrop.innerHTML = [
    '<div id="ng-modal">',

      '<div id="ng-modal-icon">',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
          '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>',
          '<path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
        '</svg>',
      '</div>',

      '<h2 id="ng-modal-title">Thank you for your interest.</h2>',

      '<p id="ng-modal-body">',
        'This case study includes details shared with a <strong>select audience</strong> — not intended for public view. ',
        'You should have received a password with the link — please enter it below.',
      '</p>',

      '<label id="ng-modal-label" for="ng-pw-input">Password</label>',
      '<input id="ng-modal-input" type="password" placeholder="Enter your password" autocomplete="current-password" />',
      '<div id="ng-modal-error"></div>',
      '<button id="ng-modal-btn">Continue →</button>',

      '<hr id="ng-modal-divider">',

      '<p id="ng-modal-footer">',
        'Don\'t have a password? Reach out at ',
        '<a href="mailto:nishantghadge@gmail.com">nishantghadge@gmail.com</a>',
        ' — I\'d be happy to share more.',
      '</p>',

    '</div>'
  ].join('');

  // ── Mount after DOM ready ──
  function mount() {
    document.body.appendChild(backdrop);
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      var input = document.getElementById('ng-modal-input');
      if (input) input.focus();
    }, 100);

    // Sync with existing theme
    var theme = document.documentElement.getAttribute('data-theme');
    if (theme) backdrop.setAttribute('data-theme', theme);

    // Watch for theme changes
    var observer = new MutationObserver(function () {
      backdrop.setAttribute('data-theme',
        document.documentElement.getAttribute('data-theme') || 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // Auth logic
    function hexFromBuffer(buf) {
      return Array.from(new Uint8Array(buf))
        .map(function (b) { return b.toString(16).padStart(2, '0'); })
        .join('');
    }

    async function attempt() {
      var pw  = document.getElementById('ng-modal-input').value;
      var btn = document.getElementById('ng-modal-btn');
      var err = document.getElementById('ng-modal-error');
      if (!pw) return;

      btn.disabled = true;
      btn.textContent = 'Verifying…';
      err.textContent = '';

      try {
        var enc     = new TextEncoder().encode(pw);
        var hashBuf = await crypto.subtle.digest('SHA-256', enc);
        var hex     = hexFromBuffer(hashBuf);

        if (hex === HASH) {
          sessionStorage.setItem(SESSION_KEY, '1');
          backdrop.style.animation = 'ng-fade-in 0.2s ease reverse forwards';
          setTimeout(function () {
            backdrop.remove();
            document.body.style.overflow = '';
            observer.disconnect();
          }, 200);
        } else {
          err.textContent = 'Incorrect password — please try again.';
          btn.disabled = false;
          btn.textContent = 'Continue →';
          document.getElementById('ng-modal-input').select();
        }
      } catch (e) {
        err.textContent = 'Something went wrong. Please try again.';
        btn.disabled = false;
        btn.textContent = 'Continue →';
      }
    }

    document.getElementById('ng-modal-btn').addEventListener('click', attempt);
    document.getElementById('ng-modal-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') attempt();
    });
  }

  if (document.body) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
})();
