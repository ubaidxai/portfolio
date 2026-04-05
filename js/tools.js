function renderTools() {
  const track = document.getElementById("tools-track");

  // Double the items for seamless infinite loop
  const allTools = [...toolsData, ...toolsData];

  track.innerHTML = allTools.map(({ name, icon }) => `
    <div class="tool-pill">
      <span class="tool-pill-icon">${icon}</span>
      <span class="tool-pill-name">${name}</span>
    </div>
  `).join("");
}

renderTools();