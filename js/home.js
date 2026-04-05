let wi = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const word = typewriterWords[wi];
  if (!deleting) {
    tw.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    tw.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      wi = (wi + 1) % typewriterWords.length;
    }
  }
  setTimeout(type, deleting ? 30 : 80);
}
type();

document.getElementById("hero-cta-btn").addEventListener("click", (e) => {
  e.preventDefault();
  openAITerminal();
});