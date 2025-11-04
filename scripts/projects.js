const projects = [
  {
    id: 1,
    title: "School Portal",
    description: "Collection of reusable React components and Tailwind-based utilities for quick prototyping.",
    demo: "#",
    date: "Aug 02, 2025",
    status: "Pending",
    image: "../assect/Screenshot 2025-11-04 133718.png"
  },
  {
    id: 2,
    title: "Mini Calculator",
    description: `Project From Code
    A simple web-based calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication,  division and other scientific calculation. The interface is clean, responsive, and easy to use for quick calculations.",
    demo: "https://wealth777.github.io/codealpha-calculator-project/",
    date: "Oct 15, 2025`,
    status: "completed",
    image: "../assect/Screenshot 2025-11-04 135325.png"
  },
  {
    id: 3,
    title: "GreatMind AI",
    description: "...",
    demo: "https://greatmindai-d812f.web.app/",
    date: "Sep 20, 2025",
    status: "completed",
    image: "../assect/Screenshot 2025-11-04 135002.png"
  },
    {
    id: 4,
    title: "PixHaven — Image Gallery",
    description: "A responsive image gallery using Pixabay API, with category filters, modal viewer and offline handling.",
    demo: "https://your-demo-link.com/pixhaven",
    date: "Oct 15, 2025",
    status: "In Progress",
    image: "/assets/projects/pixhaven.jpg"
  },
  {
    id: 5,
    title: "Fellowship Web Page",
    description: "Landing site for fellowship events with carousel, event cards and signup integration.",
    demo: "https://your-demo-link.com/fellowship",
    date: "Sep 20, 2025",
    status: "In Progress",
    image: "/assets/projects/fellowship.jpg"
  },
  {
    id: 6,
    title: "Portfolio (This Site)",
    description: `Welcome to my portfolio — a space where ideas meet execution.
Here, you’ll find a collection of my completed and ongoing projects, each built with passion, precision, and purpose.
From crafting smooth user experiences to building responsive, modern interfaces, I focus on creating meaningful digital products.
Every project reflects growth, creativity, and the desire to solve real problems through code.
Take a look around — my work speaks for itself.`,
    demo: "/",
    date: "Oct 29, 2025",
    status: "completed",
    image: "../assect/Screenshot 2025-11-04 130734.png"
  },
  {
    id: 7,
    title: "Gallery App",
    description: `PixHaven is a modern image gallery web app that lets users search, view, and download beautiful high-quality photos from the Pixabay API.
It features a clean, responsive design, dark mode.`,
    demo: "https://wealth777.github.io/codealpha-gallary-project/",
    date: "Oct 29, 2025",
    status: "completed",
    image: "../assect/Screenshot 2025-11-04 132032.png"
  },
  {
    id: 8,
    title: "Football Lineup",
    description: "A simple football lineup page that lets users create coaches and players for both home and away teams. Players are shown on a pitch image according to their positions. Users can save and manage team data, including players and coaches, for future use.",
    demo: "https://wealth777.github.io/Football_Lineup/",
    date: "Oct 29, 2025",
    status: "completed",
    image: "../assect/Screenshot 2025-11-04 103034.png"
  },
  {
    id: 9,
    title: "Phone App",
    description: "A mobile-style web app built with HTML, CSS, and JavaScript that includes a mini game, touch app, calculator, weather app, and settings app. It simulates a smartphone interface where each feature works independently within a smooth and interactive layout.",
    demo: "https://wealth777.github.io/Phone-Project_New/",
    date: "August 5, 2025",
    status: "completed",
    image: "data:image/jpeg;base64,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"
  },
];


const $ = sel => document.querySelector(sel);
const projectsRow = document.getElementById('projectsRow');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');

function renderProjects(list) {
  projectsRow.innerHTML = '';

  if (!list.length) {
    projectsRow.innerHTML = `
      <div class="col-12">
        <div class="project-card glass-card p-4 text-center">
          <h4 class="mb-2">No projects found</h4>
        </div>
      </div>`;
    return;
  }

  list.forEach(proj => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-6 card-reveal'; 
    col.innerHTML = `
      <article class="project-card">
        <img class="project-thumb" src="${escapeHtml(proj.image)}" alt="${escapeHtml(proj.title)} screenshot">
        <div class="project-body">
          <div class="project-meta">
            <div class="project-date"><i class="fa-regular fa-calendar"></i> <span>${escapeHtml(proj.date)}</span></div>
            <div style="margin-left:auto;">
              <span class="status-badge ${proj.status === 'completed' ? 'status-completed' : 'status-progress'}">
                ${proj.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
            </div>
          </div>

          <h3 class="project-title">${escapeHtml(proj.title)}</h3>
          <p class="project-desc">${escapeHtml(proj.description)}</p>

          <div class="project-footer">
            <div class="d-flex align-items-center gap-2">
              <a class="view-demo" href="${escapeHtml(proj.demo)}" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> View Demo
              </a>
            </div>
            <div class="text-muted small">${escapeHtml(proj.date)}</div>
          </div>
        </div>
      </article>
    `;
    projectsRow.appendChild(col);
  });

  initRevealObserver();
}

function escapeHtml(str){
  if (!str && str !== 0) return '';
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}

function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;

  const filtered = projects.filter(p => {
    if (status !== 'all' && p.status !== status) return false;

    if (!q) return true;
    const hay = `${p.title} ${p.description} ${p.status}`.toLowerCase();
    return hay.includes(q);
  });

  renderProjects(filtered);
}


function debounce(fn, delay=250){
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(()=> fn.apply(this,args), delay);
  };
}


let revealObserver;
function initRevealObserver(){
  if (revealObserver) revealObserver.disconnect();

  const items = document.querySelectorAll('.card-reveal');
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in-view');
        revealObserver.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(i => revealObserver.observe(i));
}



document.addEventListener('DOMContentLoaded', () => {
  renderProjects(projects);

  
  searchInput.addEventListener('input', debounce(applyFilters, 200));
  statusFilter.addEventListener('change', applyFilters);

  
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') applyFilters();
  });
});
