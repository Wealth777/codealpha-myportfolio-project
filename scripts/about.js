const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

document.addEventListener('DOMContentLoaded', () => {
    
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const val = parseInt(bar.getAttribute('data-value') || 0, 10);
    
    const delay = 120;
    setTimeout(() => {
      bar.style.width = val + '%';
    }, delay * Array.prototype.indexOf.call(bars, bar));
  });

  setTimeout(() => {
    $$('.fade-in').forEach(el => el.classList.add('show'));
  }, 120);

});
