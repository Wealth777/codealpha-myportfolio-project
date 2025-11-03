const projects = [
  {
    id: 1,
    title: "PixHaven — Image Gallery",
    description: "A responsive image gallery using Pixabay API, with category filters, modal viewer and offline handling.",
    demo: "https://your-demo-link.com/pixhaven",
    date: "Oct 15, 2025",
    status: "completed",
    image: "/assets/projects/pixhaven.jpg"
  },
  {
    id: 2,
    title: "Fellowship Web Page",
    description: "Landing site for fellowship events with carousel, event cards and signup integration.",
    demo: "https://your-demo-link.com/fellowship",
    date: "Sep 20, 2025",
    status: "completed",
    image: "/assets/projects/fellowship.jpg"
  },
  {
    id: 3,
    title: "Portfolio (This Site)",
    description: "Personal portfolio showcasing projects, contact form, and a modern UI with animations.",
    demo: "https://your-demo-link.com/portfolio",
    date: "Oct 29, 2025",
    status: "in-progress",
    image: "/assets/projects/portfolio.jpg"
  },
  {
    id: 4,
    title: "UI Components Library",
    description: "Collection of reusable React components and Tailwind-based utilities for quick prototyping.",
    demo: "https://your-demo-link.com/ui-kit",
    date: "Aug 02, 2025",
    status: "in-progress",
    image: "/assets/projects/uikit.jpg"
  },
  {
    id: 1,
    title: "PixHaven — Image Gallery",
    description: "A responsive image gallery using Pixabay API, with category filters, modal viewer and offline handling.",
    demo: "https://your-demo-link.com/pixhaven",
    date: "Oct 15, 2025",
    status: "completed",
    image: "/assets/projects/pixhaven.jpg"
  },
  {
    id: 2,
    title: "Fellowship Web Page",
    description: "Landing site for fellowship events with carousel, event cards and signup integration.",
    demo: "https://your-demo-link.com/fellowship",
    date: "Sep 20, 2025",
    status: "completed",
    image: "/assets/projects/fellowship.jpg"
  },
  {
    id: 3,
    title: "Portfolio (This Site)",
    description: "Personal portfolio showcasing projects, contact form, and a modern UI with animations.",
    demo: "https://your-demo-link.com/portfolio",
    date: "Oct 29, 2025",
    status: "in-progress",
    image: "/assets/projects/portfolio.jpg"
  },
  {
    id: 4,
    title: "UI Components Library",
    description: "Collection of reusable React components and Tailwind-based utilities for quick prototyping.",
    demo: "https://your-demo-link.com/ui-kit",
    date: "Aug 02, 2025",
    status: "in-progress",
    image: "/assets/projects/uikit.jpg"
  }
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
          <p class="text-muted">Try clearing filters or adding projects to the projects array in <code>projects.js</code>.</p>
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
