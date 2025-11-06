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


document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  // Apply saved theme
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    themeToggle.textContent = '🌞';
  } else {
    themeToggle.textContent = '🌙';
  }

  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');

    const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
    themeToggle.textContent = currentTheme === 'light' ? '🌞' : '🌙';

    localStorage.setItem('theme', currentTheme);
  });
});
