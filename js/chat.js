// ################################################################################
// ################################### AI TERMINAL ################################
// ################################################################################
const AI_API_URL = "https://your-api.onrender.com/chat"; // 🔌 Replace with your FastAPI endpoint

const bootSequence = [
  { text: "[INITIALIZING NEURAL LINK...]", delay: 0 },
  { text: "[ACCESS GRANTED: WELCOME USER]", delay: 700 },
];

const aiWelcomeMessage = "Hello, I am Ubaid's digital twin. I can answer questions about his experience, technical stack, or project philosophy. What would you like to know?";

let conversationHistory = [];
let isBooted = false;

function openAITerminal() {
  const overlay = document.getElementById("ai-overlay");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  if (!isBooted) {
    runBootSequence();
    isBooted = true;
  }
}

function closeAITerminal() {
  const overlay = document.getElementById("ai-overlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

function runBootSequence() {
  const messages = document.getElementById("ai-messages");
  messages.innerHTML = "";

  bootSequence.forEach(({ text, delay }) => {
    setTimeout(() => {
      appendSystemLine(text);
    }, delay);
  });

  setTimeout(() => {
    appendMessage("AI", aiWelcomeMessage);
  }, 1200);
}

function appendSystemLine(text) {
  const messages = document.getElementById("ai-messages");
  const line = document.createElement("div");
  line.className = "ai-system-line";
  line.textContent = text;
  messages.appendChild(line);
  scrollToBottom();
}

function appendMessage(role, text, withCursor = false) {
  const messages = document.getElementById("ai-messages");

  const row = document.createElement("div");
  row.className = `ai-message ai-message--${role.toLowerCase()}`;

  const label = document.createElement("span");
  label.className = "ai-message-label";
  label.textContent = role + ":";

  const content = document.createElement("span");
  content.className = "ai-message-content";

  row.appendChild(label);
  row.appendChild(content);
  messages.appendChild(row);
  scrollToBottom();

  if (role === "AI") {
    typewriterPrint(content, text, withCursor);
  } else {
    content.textContent = text;
  }
}

function typewriterPrint(el, text, withCursor = true) {
  let i = 0;
  el.textContent = "";

  // Add blinking cursor at end
  const cursor = document.createElement("span");
  cursor.className = "ai-cursor";
  cursor.textContent = "█";

  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    scrollToBottom();

    if (i >= text.length) {
      clearInterval(interval);
      if (withCursor) {
        el.appendChild(cursor);
      }
    }
  }, 18);
}

function appendThinking() {
  const messages = document.getElementById("ai-messages");

  const row = document.createElement("div");
  row.className = "ai-message ai-message--ai";
  row.id = "ai-thinking";

  const label = document.createElement("span");
  label.className = "ai-message-label";
  label.textContent = "AI:";

  const dots = document.createElement("span");
  dots.className = "ai-thinking-dots";
  dots.innerHTML = `<span>.</span><span>.</span><span>.</span>`;

  row.appendChild(label);
  row.appendChild(dots);
  messages.appendChild(row);
  scrollToBottom();
}

function removeThinking() {
  const el = document.getElementById("ai-thinking");
  if (el) el.remove();
}

function scrollToBottom() {
  const body = document.getElementById("ai-terminal-body");
  body.scrollTop = body.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("ai-input");
  const userText = input.value.trim();
  if (!userText) return;

  input.value = "";
  appendMessage("USER", userText);

  conversationHistory.push({ role: "user", content: userText });

  appendThinking();

  try {
    const response = await fetch(AI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userText,
        history: conversationHistory,
      }),
    });

    const data = await response.json();
    const aiReply = data.response || data.message || data.answer || "Sorry, I could not process that.";

    removeThinking();
    conversationHistory.push({ role: "assistant", content: aiReply });
    appendMessage("AI", aiReply, true);

  } catch (err) {
    removeThinking();
    appendMessage("AI", "[ERROR: NEURAL LINK DISRUPTED. Please try again.]", false);
    console.error("AI API error:", err);
  }
}

function initAITerminal() {
  // CTA button in navbar
  const ctaBtn = document.querySelector(".nav-cta-pill");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openAITerminal();
    });
  }

  // Close button
  document.getElementById("ai-close-btn").addEventListener("click", closeAITerminal);

  // Close on overlay backdrop click
  document.getElementById("ai-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeAITerminal();
  });

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAITerminal();
  });

  // Send on Enter
  document.getElementById("ai-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}

initAITerminal();