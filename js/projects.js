function renderProjects() {
  const grid = document.getElementById("projects-grid");

  grid.innerHTML = projectsData.map(({ index, type, title, accentColor, github, desc, tags }) => `
    <div class="showcase-item" style="--project-accent: ${accentColor};">
      <div class="showcase-meta">
        <span class="showcase-index">${index}</span>
        <span class="showcase-divider"></span>
        <span class="showcase-type">${type}</span>
        <a href="${github}" target="_blank" class="showcase-github" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
          Code
        </a>
      </div>

      <h3 class="showcase-title">${title}</h3>

      <div class="showcase-visual">
        <div class="showcase-visual-bg"></div>
        <span class="showcase-visual-label">${type}</span>
      </div>

      <p class="showcase-desc">${desc}</p>

      <div class="showcase-tags">
        ${tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

renderProjects();