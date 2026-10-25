// VAT netto<->brutto dla stawek 23/8/5/0.
(function () {
  'use strict';
  function fmt(n) {
    return (Math.round(n * 100) / 100).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  function render() {
    var kw = +document.getElementById('kw').value || 0;
    var st = +document.getElementById('st').value || 0;
    var dir = document.getElementById('dir').value;
    var netto, brutto;
    if (dir === 'nb') { netto = kw; brutto = kw * (1 + st / 100); }
    else { brutto = kw; netto = kw / (1 + st / 100); }
    var vat = brutto - netto;
    document.getElementById('out').textContent =
      dir === 'nb' ? fmt(brutto) + ' zł brutto' : fmt(netto) + ' zł netto';
    document.getElementById('detail').textContent =
      'VAT ' + st + '%: ' + fmt(vat) + ' zł. Netto: ' + fmt(netto) + ' zł · brutto: ' + fmt(brutto) + ' zł.';
  }
  ['kw', 'st', 'dir'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', render);
  });
  render();
})();
