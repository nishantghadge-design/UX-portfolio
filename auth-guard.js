(function () {
  var SESSION_KEY = 'ng_portfolio_auth';
  if (sessionStorage.getItem(SESSION_KEY) !== '1') {
    var dest = 'gate.html?next=' + encodeURIComponent(window.location.pathname.split('/').pop() + window.location.search);
    window.location.replace(dest);
  }
})();
