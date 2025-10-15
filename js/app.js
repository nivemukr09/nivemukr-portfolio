// --- Typewriter effect in the hero ---
const phrases = [
  "Building automated, secure cloud infrastructure",
  "CI/CD · GitOps · Observability",
  "AWS · Terraform · Kubernetes"
];
function typeIt(el, items, speed = 60, pause = 1300) {
  let i = 0, j = 0, deleting = false;
  function tick() {
    const phrase = items[i];
    el.textContent = phrase.slice(0, j);
    if (!deleting && j <= phrase.length) j++;
    if (deleting && j >= 0) j--;

    if (j === phrase.length + 1) { deleting = true; setTimeout(tick, pause); return; }
    if (deleting && j === 0) { deleting = false; i = (i + 1) % items.length; }

    setTimeout(tick, deleting ? speed / 2 : speed);
  }
  tick();
}

// --- Projects data (edit any time) ---
const projects = [
  {
    title: "NiveFlix-DevSecOps",
    stack: "DevSecOps pipeline · Docker · K8s (thumbnails supported)",
    repo: "https://github.com/nivemukr09/NiveFlix-DevSecOps",
    // image: "/images/niveflix-thumb.jpg" // optional: add this file to show thumbnail
  },
  {
    title: "Fraud-detector-devops",
    stack: "Flask · Docker · Jenkins · K8s · Helm · ArgoCD · Prometheus/Grafana",
    repo: "https://github.com/nivemukr09/fraud-detector-devops"
  },
  {
    title: "GitOps Microservices on EKS",
    stack: "Terraform modules · ArgoCD · Multi-tenant RBAC",
    repo: "https://github.com/nivemukr09/gitops-microservices-eks"
  }
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projects.map(p => {
    const img = p.image ? `<img class="thumb" src="${p.image}" alt="${p.title} thumbnail" />` : "";
    return `
      <a class="card link" href="${p.repo}" target="_blank" rel="noopener" data-aos="zoom-in-up">
        ${img}
        <h3 style="margin-top:${p.image ? '10px':'0'}">${p.title}</h3>
        <p class="stack">${p.stack || ""}</p>
        <span class="btn-text">View repo →</span>
      </a>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  const typeEl = document.getElementById("type");
  if (typeEl) typeIt(typeEl, phrases);
});
