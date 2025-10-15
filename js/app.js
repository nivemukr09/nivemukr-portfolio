// Projects data (easy to edit later)
const projects = [
  {
    title: "NiveFlix-DevSecOps",
    stack: "DevSecOps pipeline · Docker · K8s (thumbnails supported)",
    repo: "https://github.com/nivemukr09/NiveFlix-DevSecOps",
    // Put a file like /images/niveflix-thumb.jpg to enable this:
    image: "/images/niveflix-thumb.jpg" // optional; remove if not available
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
        <div class="actions-row">
          <span class="btn-text">View repo →</span>
        </div>
      </a>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
