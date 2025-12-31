// -------------------------
// Projects data
// -------------------------
const projects = [
  {
    title: "NiveFlix-DevSecOps",
    stack: "DevSecOps pipeline · Docker · K8s",
    repo: "https://github.com/nivemukr09/NiveFlix-DevSecOps",
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

  grid.innerHTML = projects.map(p => `
    <a class="card link" href="${p.repo}" target="_blank" rel="noopener" data-aos="zoom-in-up">
      <h3>${p.title}</h3>
      <p class="stack">${p.stack || ""}</p>
      <span class="btn-text">View repo →</span>
    </a>
  `).join("");
}

// -------------------------
// Premium cursor (dot + smooth ring follow)
// -------------------------
function initCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  // current & target positions
  let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
  let cx = tx, cy = ty;

  const onMove = (e) => {
    tx = e.clientX;
    ty = e.clientY;
    dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
  };

  window.addEventListener("mousemove", onMove);

  // smooth follow (lerp)
  const animate = () => {
    cx += (tx - cx) * 0.14;
    cy += (ty - cy) * 0.14;
    ring.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  };
  animate();

  // hover expand on interactive elements
  const hoverTargets = "a, button, .btn, .card";
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
  });
}

// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initCursor();
});
