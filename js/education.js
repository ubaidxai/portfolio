function renderEducation() {
  const grid = document.getElementById("education-grid");

  grid.innerHTML = educationData.map((edu, i) => `
    <div class="edu-card" style="--edu-accent: ${edu.accentColor};">

      <div class="edu-left">
        <div class="edu-index">${String(i + 1).padStart(2, "0")}</div>
        <div class="edu-spine"></div>
      </div>

      <div class="edu-body">
        <div class="edu-header">
          <div class="edu-title-block">
            <div class="edu-degree-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              <h3 class="edu-degree">${edu.degree}</h3>
            </div>
            <div class="edu-institution-row">
              <span class="edu-institution">${edu.institution}</span>
            </div>
            ${edu.badge ? `
              <div class="edu-badge-row">
                <span class="edu-badge" style="--badge-color: ${edu.badge.color};">${edu.badge.text}</span>
              </div>
            ` : ""}
          </div>

          <div class="edu-meta">
            <div class="edu-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <span>${edu.period}</span>
            </div>
            <div class="edu-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${edu.location}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  `).join("");
}
function renderCertifications() {
  const grid = document.getElementById("certifications-grid");

  grid.innerHTML = certificationsData.map((cert) => `
    <a href="${cert.link}" target="_blank" class="cert-card" style="--cert-accent: ${cert.accentColor};">
      <div class="cert-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
      </div>
      <div class="cert-info">
        <span class="cert-name">${cert.name}</span>
        <span class="cert-issuer">${cert.issuer}</span>
      </div>
      <div class="cert-year">${cert.year}</div>
      <svg class="cert-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
    </a>
  `).join("");
}

renderEducation();
renderCertifications();