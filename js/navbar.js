function renderNavbar() {
  const pill = document.getElementById("nav-pill");

  pill.innerHTML = `
    <a href="${navData.links[0].href}" class="nav-logo-pill">${navData.logo}</a>

    <div class="nav-separator"></div>

    <div class="nav-links-pill">
      ${navData.links.map(link => `
        <a href="${link.href}" class="nav-link-pill" data-href="${link.href}">
          ${link.label}
        </a>
      `).join("")}
    </div>

    <div class="nav-separator"></div>

    <a href="${navData.cta.href}" class="nav-cta-pill" id="nav-cta-btn">
      ${navData.cta.icon}
      ${navData.cta.label}
    </a>

    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  `;

  // Mobile menu overlay
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'nav-mobile-menu';
  mobileMenu.id = 'nav-mobile-menu';
  mobileMenu.innerHTML = `
    <button class="nav-mobile-close" id="nav-mobile-close" aria-label="Close menu">&times;</button>
    <div class="nav-mobile-links">
      ${navData.links.map(link => `
        <a href="${link.href}" class="nav-mobile-link" data-href="${link.href}">
          ${link.label}
        </a>
      `).join("")}
      <a href="${navData.cta.href}" class="nav-mobile-cta" id="nav-mobile-cta-btn">${navData.cta.label}</a>
    </div>
  `;
  document.body.appendChild(mobileMenu);

  document.getElementById('nav-hamburger').addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('nav-mobile-close').addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('.nav-mobile-link, .nav-mobile-cta').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  initNavActiveState();
  initNavScroll();

  // AI Terminal trigger
  document.getElementById("nav-cta-btn").addEventListener("click", (e) => {
    e.preventDefault();
    openAITerminal();
  });

  document.getElementById("nav-mobile-cta-btn").addEventListener("click", (e) => {
    e.preventDefault();
    closeMobileMenu();
    openAITerminal();
  });
}

function initNavActiveState() {
  const links = document.querySelectorAll(".nav-link-pill");

  // Click active
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Scroll spy
  const sections = document.querySelectorAll("section[id], div[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = "#" + entry.target.id;
        links.forEach(link => {
          link.classList.toggle("active", link.dataset.href === id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

  // Set first active by default
  if (links.length) links[0].classList.add("active");
}

function initNavScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });
}

renderNavbar();