# 🚀 Personal Portfolio By Ubaid Ali Khan

A futuristic, dark-themed personal portfolio website built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just clean, fast, handcrafted code.

---

## ✨ Features

- **Fully JS-driven data** — all content (skills, projects, experience, education, certifications, contact) is rendered from structured data arrays, making updates effortless
- **Futuristic design system** — glassmorphism, gradient text, glow effects, accent-color-per-section theming via CSS custom properties
- **Floating pill navbar** — centered, glassmorphic, with scroll spy active state
- **Animated hero** — typewriter role cycling, terminal-style prefix, gradient name
- **Scrolling tools bar** — infinite marquee with edge fade and pause-on-hover
- **Interactive skills grid** — grouped by category, each with progress bars and proficiency levels
- **Project showcase** — 3-column card grid with per-project accent colors
- **Experience & Education timeline** — left spine + index number layout with color-coded cards
- **Certifications** — embedded under Education as a subheading grid
- **Contact section** — 4-card grid with icon, label, and arrow link pattern
- **Animated footer** — logo, copyright, pulsing dot divider, social icon links
- **Particle canvas background** — fixed animated constellation effect
- **Fully responsive** — mobile-friendly breakpoints throughout

---

## 🛠️ Tech Stack

| Layer      | Choice                        |
|------------|-------------------------------|
| Markup     | HTML5                         |
| Styling    | CSS3 (custom properties, grid, flexbox) |
| Logic      | Vanilla JavaScript (ES6+)     |
| Icons      | Lucide SVG (inline)           |
| Fonts      | Inter + JetBrains Mono        |
| Background | Canvas API (particle system)  |

---

## 📁 Project Structure
```
portfolio/
├── index.html        # Full single-page markup shells
├── style.css         # All styles, section by section
└── script.js         # All data arrays + render functions
```

---

## 🚀 Getting Started

No install, no build step.
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

Then just open `index.html` in your browser. That's it.

---

## ⚙️ Configuration

All environment-specific values live in `config.js` in the root directory.
Copy the example file and fill in your values:
```bash
cp config.example.js config.js
```

| Key | Description |
|-----|-------------|
| `AI_API_URL` | Your FastAPI assistant endpoint (hosted on Render or elsewhere) |
| `OWNER_EMAIL` | Your contact email shown in error and maintenance messages |
| `MAINTENANCE_MODE` | Set to `true` to show maintenance banner, `false` when API is live |

> `config.js` is listed in `.gitignore` and will not be committed. `config.example.js` is the safe-to-commit template.

---

## ✏️ Customization

All content lives in JS data arrays at the top of `script.js`. To update anything:

**Personal info & hero**
```js
const heroData = {
  name: "Your Name",
  roles: ["Your Role 1", "Your Role 2"],
  ...
};
```

**Projects**
```js
const projectsData = [
  { title: "Your Project", accentColor: "#00a2ff", ... },
];
```

**Experience, Education, Skills, Contact** — same pattern. Find the relevant `const` array, edit the objects, done.

---

## 🎨 Design Tokens

All colors are CSS custom properties in `:root`:
```css
:root {
  --main-bg-color:  #0b0d0f;
  --primary-color:  #00a2ff;
  --secondary-color: #00ffaa;
  --cyan:           #00d4ff;
  --font-mono:      'JetBrains Mono', monospace;
}
```

Change these to instantly retheme the entire site.

## 🤝 Use This as Your Base

Feel free to use this portfolio as a starting point for your own.
Swap out the data, make it yours, and ship it.

If it helped you, a ⭐ on the repo or a mention would mean a lot — but no pressure.

> Built by [Ubaid Ali Khan](https://www.linkedin.com/in/ubaid-ali-khan-967930169) · No license, no restrictions · Just build cool things.