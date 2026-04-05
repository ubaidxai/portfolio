function renderExperience() {
  const grid = document.getElementById("experience-grid");

  grid.innerHTML = experienceData.map((exp, i) => `
    <div class="exp-card" style="--exp-accent: ${exp.accentColor};">

      <div class="exp-left">
        <div class="exp-index">${String(i + 1).padStart(2, "0")}</div>
        <div class="exp-spine"></div>
      </div>

      <div class="exp-body">
        <div class="exp-header">
          <div class="exp-title-block">
            <div class="exp-role-row">
              <h3 class="exp-role">${exp.role}</h3>
              ${exp.current ? `<span class="exp-current-badge">● CURRENT</span>` : ""}
            </div>
            <div class="exp-company-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              <span class="exp-company">${exp.company}</span>
            </div>
          </div>

          <div class="exp-meta">
            <div class="exp-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <span>${exp.period}</span>
            </div>
            <div class="exp-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${exp.location}</span>
            </div>
          </div>
        </div>

        <div class="exp-divider"></div>

        <div class="exp-achievements">
          <p class="exp-achievements-label">Key Responsibilities & Achievements</p>
          <ul class="exp-list">
            ${exp.achievements.map(a => `
              <li>
                <span class="exp-bullet">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
                ${a}
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="exp-tags">
          ${exp.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
      </div>

    </div>
  `).join("");
}

renderExperience();