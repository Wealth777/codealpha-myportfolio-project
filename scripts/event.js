const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

function initRSVP() {
  const form = document.getElementById('rsvpForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();


    const name = form.fullName.value.trim();
    const email = form.emailAddr.value.trim();
    const message = form.messageBody.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in the required fields.', true);
      return;
    }


    form.reset();
    showToast('Message sent successfully ✅', false);
  });

}

const home = document.getElementById('backHome')

home.addEventListener('click', ()=>{
    window.location.href = '../index.html'
})


function showToast(msg, isError = false) {
  Toastify({
    text: msg,
    duration: 3000,
    gravity: "top",
    position: "right",
    close: true,
    stopOnFocus: true,
    style: {
      background: isError ? "linear-gradient(90deg,#ef4444,#b91c1c)" : "linear-gradient(90deg,#0f172a,#0ea5e9)",
      color: "#fff",
      boxShadow: "0 8px 30px rgba(2,6,23,0.6)"
    }
  }).showToast();
}


document.addEventListener('DOMContentLoaded', function () {


  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
