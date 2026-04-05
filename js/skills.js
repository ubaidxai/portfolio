function renderSkills() {
  const grid = document.getElementById("skills-grid");

  grid.innerHTML = skillsData.map((group, i) => `
    <div class="skills-card" style="--skills-accent: ${group.accentColor};">

      <div class="skills-left">
        <div class="skills-index">${String(i + 1).padStart(2, "0")}</div>
        <div class="skills-spine"></div>
      </div>

      <div class="skills-body">
        <div class="skills-header">
          <div class="skills-icon">${group.icon}</div>
          <h3 class="skills-category">${group.category}</h3>
        </div>

        <div class="skills-divider"></div>

        <div class="skills-items">
          ${group.skills.map(skill => `
            <div class="skill-item">
              <div class="skill-item-top">
                <span class="skill-item-name">${skill.name}</span>
                <span class="skill-item-percent">${skill.percent}%</span>
              </div>
              <div class="skill-item-bar">
                <div class="skill-item-progress" style="width: ${skill.percent}%;"></div>
              </div>
              <div class="skill-item-level">${skill.level}</div>
            </div>
          `).join("")}
        </div>
      </div>

    </div>
  `).join("");
}

renderSkills();