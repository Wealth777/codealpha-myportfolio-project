const phrases = ["Website Developer ", "Frontend Developer ", "Creative Designer "];
const typingElement = document.getElementById("typing");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 120;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex--);
        delay = 80; 
    } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex++);
        delay = 120;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        delay = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 500;
    }

    setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

function eraseText() {
    const text = typingElement.textContent;
    let charIndex = text.length - 1;

    const eraseInterval = setInterval(() => {
        if (charIndex >= 0) {
            typingElement.textContent = text.substring(0, charIndex);
            charIndex--;
        } else {
            clearInterval(eraseInterval);
            i = (i + 1) % phrases.length;
            setTimeout(() => typeText(), 500);
        }
    }, 50);
}

const veiwWorks = document.getElementById("viewwork")
const knowMe = document.getElementById("knowme")

veiwWorks.addEventListener('click', ()=>{
    window.location.href = './projects.html'
})

knowMe.addEventListener('click', ()=>{
    window.location.href = './about.html'
})

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
