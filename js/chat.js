const AI_MAINTENANCE_MODE = CONFIG.MAINTENANCE_MODE;
const AI_API_URL = CONFIG.AI_API_URL;

const AI_MAINTENANCE_MESSAGE = {
  title: "SYSTEM NOTICE",
  message: "Assistant is currently under maintenance. Please try again later or drop an email at ubaidalikhan247@gmail.com",
};

const bootSequence = [
  { text: "[INITIALIZING NEURAL LINK...]", delay: 0 },
  { text: "[ACCESS GRANTED: WELCOME USER]", delay: 700 },
];

const aiWelcomeMessage = "Hello, I am Ubaid's digital twin. I can answer questions about his experience, technical stack, or project philosophy. What would you like to know?";

let conversationHistory = [];
let isBooted = false;

function openAITerminal() {
  document.getElementById("navbar").style.display = "none";
  const overlay = document.getElementById("ai-overlay");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  if (AI_MAINTENANCE_MODE) {
    showMaintenanceBanner();
  }

  if (!isBooted) {
    runBootSequence();
    isBooted = true;
  }
}

function closeAITerminal() {
  document.getElementById("navbar").style.display = "";
  const overlay = document.getElementById("ai-overlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

function showMaintenanceBanner() {
  // Don't add duplicate
  if (document.getElementById("ai-maintenance-banner")) return;

  const terminal = document.getElementById("ai-terminal");

  const banner = document.createElement("div");
  banner.className = "ai-maintenance-banner";
  banner.id = "ai-maintenance-banner";

  banner.innerHTML = `
    <div class="ai-maintenance-inner">
      <div class="ai-maintenance-left">
        <span class="ai-maintenance-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </span>
        <div class="ai-maintenance-text">
          <span class="ai-maintenance-title">[${AI_MAINTENANCE_MESSAGE.title}]</span>
          <span class="ai-maintenance-body">${AI_MAINTENANCE_MESSAGE.message}</span>
        </div>
      </div>
      <button class="ai-maintenance-close" onclick="this.parentElement.parentElement.remove()" aria-label="Dismiss">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  `;

  // Insert above terminal body
  terminal.insertBefore(banner, terminal.querySelector(".ai-terminal-body"));
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
    appendMessage("AI", "[ERROR: NEURAL LINK DISRUPTED] Apologies — I've encountered an unexpected system fault. A full diagnostic report has been dispatched to Ubaid. He's been notified and is likely already aware. In the meantime, you may reach him directly at ubaidalikhan247@gmail.com.", false);
    console.error("AI API error:", err);
  }
}

function initAITerminal() {
  const ctaBtn = document.querySelector(".nav-cta-pill");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openAITerminal();
    });
  } 

  initHistoryToggle();

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


// History Preservation State
let historyPreservationEnabled = false;
let preservationEmail = null;

function initHistoryToggle() {
  const toggle = document.getElementById("ai-history-toggle");
  const modal = document.getElementById("ai-email-modal");
  const modalClose = document.getElementById("ai-email-modal-close");
  const modalCancel = document.getElementById("ai-email-modal-cancel");
  const modalConfirm = document.getElementById("ai-email-modal-confirm");
  const emailInput = document.getElementById("ai-email-input");

  // Open modal on toggle click
  toggle.addEventListener("click", () => {
    if (historyPreservationEnabled) {
      // Turn off
      disableHistoryPreservation();
    } else {
      // Open modal to collect email
      openEmailModal();
    }
  });

  // Close modal — reset toggle
  modalClose.addEventListener("click", cancelEmailModal);
  modalCancel.addEventListener("click", cancelEmailModal);

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) cancelEmailModal();
  });

  // Confirm
  modalConfirm.addEventListener("click", confirmHistoryPreservation);

  // Enter key in input
  emailInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") confirmHistoryPreservation();
  });
}

function openEmailModal() {
  const modal = document.getElementById("ai-email-modal");
  const emailInput = document.getElementById("ai-email-input");
  modal.classList.add("active");
  setTimeout(() => emailInput.focus(), 300);
}

function cancelEmailModal() {
  const modal = document.getElementById("ai-email-modal");
  const emailInput = document.getElementById("ai-email-input");
  modal.classList.remove("active");
  emailInput.value = "";

  // Reset toggle to off
  historyPreservationEnabled = false;
  document.getElementById("ai-history-toggle").classList.remove("on");
}

function confirmHistoryPreservation() {
  const emailInput = document.getElementById("ai-email-input");
  const email = emailInput.value.trim();

  if (!email || !isValidEmail(email)) {
    emailInput.classList.add("shake");
    setTimeout(() => emailInput.classList.remove("shake"), 500);
    return;
  }

  preservationEmail = email;
  historyPreservationEnabled = true;

  // Close modal
  document.getElementById("ai-email-modal").classList.remove("active");
  emailInput.value = "";

  // Activate toggle visually
  document.getElementById("ai-history-toggle").classList.add("on");

  // Notify user in terminal
  appendSystemLine(`[HISTORY PRESERVATION ENABLED: ${email}]`);
  scrollToBottom();
}

function disableHistoryPreservation() {
  historyPreservationEnabled = false;
  preservationEmail = null;
  document.getElementById("ai-history-toggle").classList.remove("on");
  appendSystemLine("[HISTORY PRESERVATION DISABLED]");
  scrollToBottom();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}