const projects = [
  {
    title: "Data Analytics & AI-driven Insights",
    tag: "Analytics",
    desc:
      "Analyzed performance signals and metrics to extract actionable insights and support decision-making. Focused on trends, KPI interpretation, and turning findings into practical next steps.",
    tools: "KPI analysis, trend detection, reporting/dashboard thinking",
    prompt:
      "If needed: Generate a concise summary of KPI movement, probable causes, and suggested next actions. Keep it decision-focused.",
    link: "#"
  },
  {
    title: "AI Automation & Workflow Design",
    tag: "Automation",
    desc:
      "Designed AI-assisted workflows to reduce repetitive tasks and improve efficiency. Built structured prompt logic and repeatable steps that make outputs consistent and scalable.",
    tools: "Workflow mapping, prompt templates, repeatable process design",
    prompt:
      "Create a reusable prompt template that takes input variables and returns a standardized output format. Include constraints, tone, and validation checks.",
    link: "#"
  },
  {
    title: "AI Content Creation (Short-form & Visual)",
    tag: "Creator",
    desc:
      "Created short-form AI content with hook-first structure, clear pacing, and iterative refinement. Optimized prompts and visual direction to increase clarity and rewatch value.",
    tools: "Prompt iteration, story beats, 9:16 structure, visual direction",
    prompt:
      "Create a 10-second vertical AI video concept with a hook in the first second, fast cinematic pacing, minimal text, and a strong ending loop.",
    link: "#"
  }
];

function el(tag, className) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  return e;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  projects.forEach((p, idx) => {
    const card = el("article", "card project");

    const top = el("div", "project__top");
    const left = el("div");
    const title = el("h3", "project__title");
    title.textContent = p.title;

    const badge = el("div", "badge");
    badge.textContent = p.tag;

    left.appendChild(title);
    top.appendChild(left);
    top.appendChild(badge);

    const desc = el("p", "project__desc");
    desc.textContent = p.desc;

    const more = el("div", "project__more");
    more.innerHTML = `
      <p><b>Tools/Concepts:</b> ${escapeHtml(p.tools)}</p>
      <p><b>Example Prompt:</b> ${escapeHtml(p.prompt)}</p>
    `;

    const actions = el("div", "project__actions");
    const btnMore = el("button", "btn btn--ghost");
    btnMore.type = "button";
    btnMore.textContent = "Read more";
    btnMore.addEventListener("click", () => {
      const open = more.style.display === "block";
      more.style.display = open ? "none" : "block";
      btnMore.textContent = open ? "Read more" : "Read less";
    });

    actions.appendChild(btnMore);

    if (p.link && p.link !== "#") {
      const view = el("a", "btn btn--primary");
      view.href = p.link;
      view.target = "_blank";
      view.rel = "noreferrer";
      view.textContent = "View";
      actions.appendChild(view);
    }

    card.appendChild(top);
    card.appendChild(desc);
    card.appendChild(more);
    card.appendChild(actions);

    grid.appendChild(card);
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Mobile menu
function setupMenu() {
  const toggle = document.getElementById("navToggle");
  const list = document.getElementById("navList");
  if (!toggle || !list) return;

  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close after clicking a link (mobile)
  list.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      list.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Copy email draft button
async function setupCopyDraft() {
  const btn = document.getElementById("copyEmailBtn");
  const status = document.getElementById("copyStatus");
  const name = document.getElementById("msgName");
  const msg = document.getElementById("msgText");
  if (!btn || !status || !name || !msg) return;

  btn.addEventListener("click", async () => {
    const yourName = (name.value || "Your Name").trim();
    const yourMsg = (msg.value || "Hello Tural, ...").trim();

    const draft =
`To: tural.a.zamanli@gmail.com
Subject: Hello

Hi Tural,

${yourMsg}

Best regards,
${yourName}`;

    try {
      await navigator.clipboard.writeText(draft);
      status.textContent = "Copied! Paste it into your email client ✅";
    } catch {
      status.textContent = "Copy failed. Select and copy manually.";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupMenu();
  setupCopyDraft();

  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
});
