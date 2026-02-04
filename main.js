// ===== Portfolio data (edit later if you want) =====
const portfolioItems = [
  {
    title: "Mission Impossible: Cat Edition",
    subtitle: "AI Short Video Concept (9:16, 10s)",
    desc: "A cinematic and funny spy-style short where the main character is a stealthy cat agent. Built for fast cuts, dramatic lighting, and rewatch value.",
    tools: "ChatGPT (script & prompts), AI Video Generator (Runway/Sora), AI image tool (concept frames)",
    prompt: "Create a 10-second cinematic vertical AI video of a stealthy cat as a secret agent. High contrast lighting, fast cuts, smooth camera moves. Mood: mysterious + funny. Aspect ratio 9:16.",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=60",
    link: "#"
  },
  {
    title: "The Secret Life of Animals",
    subtitle: "AI Viral Shorts Series Concept",
    desc: "A short-form series concept showing animals living secret human-like lives, designed to hook in the first second and end with a rewatch-worthy twist.",
    tools: "ChatGPT (concept), AI video tool, AI sound/music tool",
    prompt: "Create an 8–10 second cinematic AI short showing animals acting like humans in secret moments. Fast pacing, emotional + mysterious vibe, dramatic lighting, 9:16.",
    image: "https://images.unsplash.com/photo-1501706362039-c6e13d7b7d68?auto=format&fit=crop&w=1200&q=60",
    link: "#"
  },
  {
    title: "AI Product Ad: 10-Second Hook",
    subtitle: "Performance-style creative concept",
    desc: "A 10-second AI-generated ad concept for a fictional tech product. Focus: strong hook in 1s, premium look, and a final visual punch.",
    tools: "ChatGPT (hook + structure), AI image/video tools",
    prompt: "Create a high-impact 10-second AI product ad. First second must shock or surprise. Clean modern premium lighting. End with a strong visual hook. 9:16.",
    image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=60",
    link: "#"
  }
];

// ===== Render Portfolio Cards into Swiper container =====
function renderPortfolio() {
  const container = document.getElementById("portfolio-container");
  if (!container) return;

  container.innerHTML = portfolioItems.map(item => `
    <div class="card-item swiper-slide">
      <div class="portfolio_card">
        <div class="portfolio_img" style="background-image:url('${item.image}')"></div>
        <div class="portfolio_content">
          <h3>${item.title}</h3>
          <p class="muted">${item.subtitle}</p>
          <p>${item.desc}</p>

          <div class="more-points" style="display:none;">
            <p><b>Tools:</b> ${item.tools}</p>
            <p><b>Prompt:</b> ${item.prompt}</p>
          </div>

          <div class="portfolio_actions">
            <button class="read-more-btn">Read more</button>
            ${item.link && item.link !== "#" ? `<a class="btn_primary" href="${item.link}" target="_blank">View</a>` : ""}
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// ===== Read more buttons =====
function setupReadMoreButtons() {
  document.querySelectorAll(".read-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".qualification__description") || btn.closest(".portfolio_content");
      if (!parent) return;

      const more = parent.querySelector(".more-points");
      if (!more) return;

      const isHidden = more.style.display === "none" || more.style.display === "";
      more.style.display = isHidden ? "block" : "none";
      btn.textContent = isHidden ? "Read less" : "Read more";
    });
  });
}

// ===== Swiper init (safe) =====
function initSwipers() {
  if (typeof Swiper === "undefined") return;

  // Certificates slider
  const certEl = document.querySelector("#certificates.swiper");
  if (certEl) {
    new Swiper("#certificates.swiper", {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      pagination: { el: "#certificates .swiper-pagination", clickable: true },
      navigation: {
        nextEl: "#certificates .swiper-button-next",
        prevEl: "#certificates .swiper-button-prev"
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        700: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  // Portfolio slider
  const portEl = document.querySelector("#portfolio.swiper");
  if (portEl) {
    new Swiper("#portfolio.swiper", {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      pagination: { el: "#portfolio .swiper-pagination", clickable: true },
      navigation: {
        nextEl: "#portfolio .swiper-button-next",
        prevEl: "#portfolio .swiper-button-prev"
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        700: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  // Blog slider
  const blogEl = document.querySelector("#blog.swiper");
  if (blogEl) {
    new Swiper("#blog.swiper", {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      pagination: { el: "#blog .swiper-pagination", clickable: true },
      navigation: {
        nextEl: "#blog .swiper-button-next",
        prevEl: "#blog .swiper-button-prev"
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        700: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }
}

// ===== Run =====
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
  setupReadMoreButtons();
  initSwipers();
});
