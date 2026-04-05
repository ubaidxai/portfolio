function renderContact() {
  const grid = document.getElementById("contact-grid");

  grid.innerHTML = contactData.map(({ label, value, link, accentColor, icon }) => `
    <a href="${link}" target="_blank" class="contact-card-new" style="--contact-accent: ${accentColor};">
      <div class="contact-card-icon">
        ${icon}
      </div>
      <div class="contact-card-info">
        <span class="contact-card-label">${label}</span>
        <span class="contact-card-value">${value}</span>
      </div>
      <svg class="contact-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
    </a>
  `).join("");
}

renderContact();