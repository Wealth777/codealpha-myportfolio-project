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
    window.location.href = '../projects.html'
})

knowMe.addEventListener('click', ()=>{
    window.location.href = '../about.html'
})