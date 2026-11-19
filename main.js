const GH = "https://github.com/Dicapso/";

const CATS = [
  { id: "all", en: "All", az: "Hamısı" },
  { id: "data", en: "Data & Analytics", az: "Data və Analitika", c: "#e7dcc6" },
  { id: "biz", en: "Business Systems", az: "Biznes Sistemləri", c: "#dfe3d3" },
  { id: "mobile", en: "Mobile Apps", az: "Mobil Tətbiqlər", c: "#ecd9cc" },
  { id: "ai", en: "Automation & AI", az: "Avtomatlaşdırma və AI", c: "#d9e0e3" },
  { id: "motion", en: "Motion & Video", az: "Motion və Video", c: "#e8d6dc" },
];

const WORK = [
  { cat: "mobile", repo: "testix-phone-check", img: "assets/work/testix.png", badge: { en: "Google Play · testing", az: "Google Play · test" },
    title: "Testix: Phone Check",
    en: "Tests every part of a used phone in minutes: 26 hardware tests, authenticity checks and PDF reports. AZ / EN / RU.",
    az: "İşlənmiş telefonu dəqiqələrlə yoxlayır: 26 aparat testi, orijinallıq yoxlaması və PDF hesabat. AZ / EN / RU.",
    tags: ["Kotlin", "Compose", "AdMob", "Billing"] },
  { cat: "biz", repo: "weighbridge-control-suite", glyph: "⚖",
    title: "Weighbridge Control Suite",
    en: "Card access, two-pass weighing read from the serial port, gate control, reports and a mobile API for an industrial site.",
    az: "Sənaye obyekti üçün kartla giriş, COM portdan iki mərhələli çəki, qapı idarəsi, hesabatlar və mobil API.",
    tags: ["C#", "WPF", "SQL Server", "MAUI"] },
  { cat: "ai", repo: "agent-ofis", glyph: "AI",
    title: "Agent Ofis",
    en: "An AI marketing office: agents plan content, audit SEO, watch competitors and learn from results; Meta & Telegram channels.",
    az: "AI marketinq ofisi: agentlər kontent planlayır, SEO audit edir, rəqibləri izləyir və nəticələrdən öyrənir.",
    tags: ["Next.js", "Claude API", "Postgres", "Meta API"] },
  { cat: "data", repo: "fleet-daily-report-automation", glyph: "xlsx",
    title: "Fleet Daily Report Automation",
    en: "Drop a raw Excel file on an .exe, get the finished daily fleet report: tonnage, GPS status from the tracking API, incidents, 9 charts.",
    az: "Xam Excel faylını .exe-yə at, hazır gündəlik flot hesabatını al: tonnaj, GPS statusu, hadisələr, 9 qrafik.",
    tags: ["Python", "openpyxl", "REST API"] },
  { cat: "biz", repo: "erp-platform", glyph: "ERP",
    title: "ERP Platform",
    en: "A 1C-style ERP: many databases, each opened from a configuration (Trade, Restaurant, Accounting, Payroll). Metadata-driven UI.",
    az: "1C prinsipli ERP: bir neçə baza, hər biri konfiqurasiyadan açılır (Ticarət, Restoran, Mühasibat, Əmək haqqı).",
    tags: ["Node.js", "React", "SQLite"] },
  { cat: "motion", repo: "motion-videos-hyperframes", img: "assets/work/motion.gif",
    title: "Motion Videos as Code",
    en: "Vertical explainer and ad videos written as HTML + GSAP timelines, with a shared brand system and AI voice-over.",
    az: "HTML + GSAP ilə kod kimi yazılan vertikal izah və reklam videoları: vahid brend sistemi və AI səsləndirmə.",
    tags: ["HyperFrames", "Remotion", "GSAP"] },
  { cat: "biz", repo: "market-1c-configuration", glyph: "1C",
    title: "Market — 1C Configuration",
    en: "Grocery-store configuration for 1C:Enterprise in Azerbaijani, generated from Python: barcode POS, stock, debts, roles.",
    az: "Marketlər üçün Azərbaycan dilində 1C konfiqurasiyası, Python generatoru ilə: barkodlu kassa, anbar, borclar, rollar.",
    tags: ["1C", "BSL", "Python"] },
  { cat: "biz", repo: "crm-customer-registry", glyph: "CRM",
    title: "CRM — Customer Registry",
    en: "Team CRM on MS SQL Server: customers and call logs, JWT httpOnly auth, rate limiting, scheduled email digests.",
    az: "MS SQL Server üzərində komanda CRM-i: müştərilər, zəng tarixçəsi, JWT giriş, planlı email xülasələri.",
    tags: ["Express", "SQL Server", "JWT"] },
  { cat: "mobile", repo: "hesab-defterim", glyph: "₼",
    title: "Hesab Dəftərim",
    en: "Offline personal budget: balance, debts with due-date warnings, income and expense by category.",
    az: "Oflayn şəxsi büdcə: balans, son tarix xəbərdarlıqlı borclar, kateqoriya üzrə gəlir və xərc.",
    tags: ["React Native", "Expo"] },
  { cat: "mobile", repo: "tez-kart-wallet", glyph: "▥",
    title: "Tez Kart",
    en: "Loyalty card wallet: scan or photograph cards, full-brightness barcodes, biometric lock, home-screen widget.",
    az: "Endirim kartları cüzdanı: kartı skan et, tam parlaqlıqda barkod, biometrik kilid, widget.",
    tags: ["Expo Router", "TypeScript"] },
  { cat: "mobile", repo: "dil-seyaheti", glyph: "Aa",
    title: "Dil Səyahəti",
    en: "A travel-map language game for German and English from A0, explained in Azerbaijani, with spaced repetition.",
    az: "Alman və ingilis dilini A0-dan öyrədən səyahət oyunu: izahlar azərbaycanca, aralıqlı təkrar sistemi.",
    tags: ["React Native", "SQLite", "SRS"] },
  { cat: "mobile", repo: "ultra-pil", glyph: "%",
    title: "Ultra Pil",
    en: "Ultra battery saver for Android: blocks every app except the chosen ones, minimal launcher, battery-health scan.",
    az: "Android üçün ultra pil qənaəti: seçilənlərdən başqa bütün tətbiqləri bloklayır, batareya sağlamlığı skanı.",
    tags: ["Kotlin", "Shizuku"] },
  { cat: "mobile", repo: "ios-style-android", glyph: "◐",
    title: "iOS-style Launcher & Dialer",
    en: "A full default dialer on InCallService and an iPhone-look launcher for Android, built in Compose.",
    az: "Android üçün InCallService əsaslı tam zəng tətbiqi və iPhone görünüşlü launcher.",
    tags: ["Kotlin", "Compose"] },
  { cat: "ai", repo: "whatif-shorts-pipeline", glyph: "▶",
    title: "What-if Shorts Pipeline",
    en: "Idea → script → images → animation → voice → edit → YouTube, fully automated with a terminal UI.",
    az: "İdeya → ssenari → şəkil → animasiya → səs → montaj → YouTube, tam avtomatik.",
    tags: ["Python", "FFmpeg", "AI APIs"] },
  { cat: "ai", repo: "job-hunter-az", glyph: "⌕",
    title: "Job Hunter AZ",
    en: "Scrapes 7 Azerbaijani job boards, filters by role, salary and date, and builds a sortable HTML report.",
    az: "7 Azərbaycan iş saytını gəzir, vəzifə, maaş və tarixə görə süzür, HTML hesabat yaradır.",
    tags: ["Python", "Scraping"] },
  { cat: "ai", repo: "all-device-optimizer", glyph: "⚙",
    title: "All Device Optimizer",
    en: "Checks, de-bloats and speeds up Android phones over ADB, and cleans the Windows PC they are plugged into.",
    az: "Android telefonları ADB ilə yoxlayır, yüngülləşdirir, sürətləndirir; Windows-u da təmizləyir.",
    tags: ["PowerShell", "ADB"] },
  { cat: "ai", repo: "tz-ai", glyph: "TZ",
    title: "TZ AI",
    en: "A local, offline-first AI assistant built on Qwen3, with optional web search.",
    az: "Qwen3 əsasında yerli, oflayn işləyən AI köməkçi, istəyə görə internet axtarışı ilə.",
    tags: ["Local LLM", "Qwen3"] },
  { cat: "ai", repo: "Browser-mini-lowram", glyph: "◎",
    title: "Browser Mini",
    en: "A low-RAM Windows browser replacement for GPS monitoring portals.",
    az: "GPS monitorinq portalları üçün az RAM tutan Windows brauzeri.",
    tags: ["C#", "WebView2"] },
  { cat: "data", repo: "Fleet-Analytics", glyph: "BI",
    title: "Fleet Analytics — Power BI",
    en: "Fleet management analytics: Python data generation, SQL Server model and a Power BI report.",
    az: "Flot analitikası: Python ilə data, SQL Server modeli və Power BI hesabatı.",
    tags: ["Power BI", "T-SQL", "Python"] },
  { cat: "data", repo: "Fleet-Telemetry-SQL-Analytics", glyph: "SQL",
    title: "Fleet Telemetry — SQL",
    en: "GPS fleet database with daily, weekly and semi-monthly reports, window functions and stored procedures.",
    az: "Gündəlik, həftəlik və yarımaylıq hesabatlı GPS flot bazası, window funksiyaları, prosedurlar.",
    tags: ["T-SQL", "Window functions"] },
  { cat: "data", repo: "GPS-Telemetry-ETL-Pipeline", glyph: "ETL",
    title: "GPS Telemetry — ETL",
    en: "Cleans noisy GPS pings (duplicates, gaps, teleport glitches) into a daily per-vehicle report.",
    az: "Səs-küylü GPS ping-lərini təmizləyib maşın üzrə gündəlik hesabata çevirir.",
    tags: ["Python", "pandas", "pytest"] },
];

const DAYS = [
  ["Customer-Churn-Analysis", "Telecom customer churn", "Telekom müştəri itkisi"],
  ["Ecommerce-Sales-SQL-Analysis", "E-commerce sales in SQL", "E-ticarət satışı SQL ilə"],
  ["Electricity-Demand-Forecasting", "Electricity demand forecasting", "Elektrik tələbatı proqnozu"],
  ["AB-Test-Checkout-Redesign", "A/B test: checkout redesign", "A/B test: ödəniş səhifəsi"],
  ["Cohort-Retention-LTV-Analysis", "Cohort retention & LTV", "Kohort saxlama və LTV"],
  ["RFM-Customer-Segmentation", "RFM customer segmentation", "RFM seqmentasiya"],
  ["Baku-Housing-ETL-Pricing", "Baku housing ETL & pricing", "Bakı mənzil ETL və qiymət"],
  ["Delivery-Ops-KPI-Dashboard", "Delivery ops KPI dashboard", "Çatdırılma KPI paneli"],
  ["Pharmacy-Market-Basket-Analysis", "Pharmacy market basket", "Aptek səbət analizi"],
  ["Price-Elasticity-Promo-ROI", "Price elasticity & promo ROI", "Qiymət elastikliyi və promo ROI"],
  ["Credit-Risk-Scorecard", "Credit risk scorecard", "Kredit riski skorkartı"],
  ["Call-Centre-Workforce-Planning", "Call centre workforce planning", "Zəng mərkəzi kadr planı"],
  ["Marketing-Mix-Modeling", "Marketing mix model", "Marketinq miks modeli"],
  ["Employee-Attrition-Survival-Analysis", "Attrition survival analysis", "İşçi axını sağqalma analizi"],
  ["Haul-Truck-Predictive-Maintenance", "Haul-truck predictive maintenance", "Yük maşını proqnozlaşdırıcı təmir"],
  ["Inventory-Optimisation-Simulation", "Inventory optimisation", "Ehtiyat optimallaşdırması"],
  ["Store-Remodel-Causal-Impact", "Store remodel causal impact", "Mağaza yenilənməsinin səbəb təsiri"],
];

const T = {
  az: {
    navWork: "İşlər", navAbout: "Haqqımda", navExp: "Təcrübə", navSkills: "Bacarıqlar", navContact: "Əlaqə",
    eyebrow: "Bakı, Azərbaycan · iş təkliflərinə açığam", role: "Data və Avtomatlaşdırma Developeri",
    lede: "Dağınıq iş proseslərini aydın rəqəmlərə və işləyən alətlərə çevirirəm — GPS hesabatları və SQL analitikadan tərəzi proqramına, Android tətbiqlərinə və marketinq ofisini idarə edən AI agentlərə qədər.",
    ctaWork: "İşlərə bax", ctaCv: "CV yüklə",
    statA: "analitika layihəsi", statB: "tətbiq və alət", statC: "il İT və data sahəsində",
    workTitle: "Seçilmiş işlər", workSub: "İşin nə etdiyinə görə qruplaşdırılıb. Hər kart ekran görüntüləri və arxitektura olan showcase reposunu açır.",
    seriesKicker: "Data və Analitika · seriya", seriesTitle: "Gündəlik Data Analitika — 17 layihə",
    seriesSub: "Hər gün bir tam analiz, hər biri öz reposunda: biznes sualı, data keyfiyyəti, KPI-lar, icra olunmuş notebook və tövsiyələr cədvəli. Data sintetikdir və sabit seed ilə yaradılıb — hər rəqəm təkrarlana bilir.",
    aboutTitle: "Haqqımda",
    about1: "İT satış və helpdesk ilə başladım, ERP üzərindən satınalmaya keçdim, indi isə dağ-mədən parkının mərkəzi monitorinq və analitikasında çalışıram. Bu yolda işə lazım olan, amma olmayan alətləri özüm qurdum.",
    about2: "\"Data və Avtomatlaşdırma Developeri\" mənim üçün budur: prosesi başa düşmək, ölçmək, sonra darıxdırıcı hissəni avtomatlaşdırmaq — cavab SQL hesabatı, tərəziyə bağlı masaüstü proqram, mobil tətbiq və ya AI agentlər komandası ola bilər.",
    fLoc: "Yer", fLocV: "Bakı, Azərbaycan", fLang: "Dillər", fNow: "Hazırda", fNowV: "Mərkəzi Monitorinq və Analitika", fDrive: "Sürücülük vəsiqəsi",
    expTitle: "Təcrübə", present: "indi",
    job1: "Mərkəzi Monitorinq və Analitika Mütəxəssisi",
    job1a: "Park üzrə GPS izləmə xətalarını aşkarlamaq və həll etmək",
    job1b: "Gündəlik, həftəlik və yarımaylıq hesabatlar: reyslər, çıxış vaxtı, zona sürətləri, növbə üzrə məsafə",
    job1c: "Obyektdə istifadə olunan hesabat avtomatlaşdırmasını və tərəzi proqramını qurdum",
    job2: "Rəqəmsal Avadanlıq Satınalma Mütəxəssisi",
    job2a: "1C və Mikro ERP ilə satınalma və anbar uçotu", job2b: "Təchizatçılarla əlaqə və çatdırılma nəzarəti",
    job3: "İT Satış və Dəstək Mütəxəssisi",
    job3a: "Kompüter, şəbəkə və İT avadanlığı üzrə məsləhət və satış",
    job3b: "Quraşdırma, OS və proqram tənzimləmələri; L1 helpdesk və satış sonrası xidmət",
    skillsTitle: "Alətlər", sk1: "Data və BI", sk2: "Biznes sistemləri", sk3: "Mobil", sk4: "Avtomatlaşdırma və AI", sk5: "Motion və video",
    sk6: "Dəstək və əməliyyatlar", sk6v: "L1 helpdesk · SLA · ERP satınalma · avadanlıq quraşdırma · GPS telemetriya",
    credTitle: "Sertifikatlar və təhsil", edu1: "Magistr, Biznesin təşkili və idarə edilməsi", edu2: "Bakalavr, Mühasibat uçotu və audit",
    contactTitle: "Gəlin faydalı bir şey quraq.", contactSub: "Analitika, daxili alətlər, mobil tətbiqlər və ya avtomatlaşdırma — 24 saat ərzində cavab verirəm.",
    footNote: "Showcase repoları işi təsvir edir; mənbə kodu istək əsasında paylaşılır.",
  },
};

let lang = "en";
let cat = "all";
const EN = {};
document.querySelectorAll("[data-i18n]").forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function renderFilters() {
  const box = document.getElementById("filters");
  box.innerHTML = CATS.map(c => {
    const n = c.id === "all" ? WORK.length + DAYS.length : WORK.filter(w => w.cat === c.id).length + (c.id === "data" ? DAYS.length : 0);
    return `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="${c.id === cat}">${esc(c[lang])}<span class="n">${n}</span></button>`;
  }).join("");
  box.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => { cat = b.dataset.cat; renderFilters(); renderGrid(); }));
}

function renderGrid() {
  const items = WORK.filter(w => cat === "all" || w.cat === cat);
  const color = id => (CATS.find(c => c.id === id) || {}).c;
  document.getElementById("grid").innerHTML = items.map((w, i) => {
    const c = CATS.find(x => x.id === w.cat);
    const cover = w.img
      ? `<img src="${w.img}" alt="${esc(w.title)} preview" loading="lazy">`
      : `<span class="glyph" aria-hidden="true">${esc(w.glyph || w.title[0])}</span>`;
    return `<a class="card" href="${GH + w.repo}" target="_blank" rel="noopener" style="animation-delay:${Math.min(i, 8) * 40}ms">
      <div class="cover" style="--c:${color(w.cat)}">${cover}${w.badge ? `<span class="badge">${esc(w.badge[lang])}</span>` : ""}<span class="arrow" aria-hidden="true">↗</span></div>
      <div class="body"><span class="cat">${esc(c[lang])}</span><h3>${esc(w.title)}</h3><p>${esc(w[lang])}</p>
      <div class="tags">${w.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div></div></a>`;
  }).join("");
  document.getElementById("series").hidden = !(cat === "all" || cat === "data");
}

function renderDays() {
  document.getElementById("days").innerHTML = DAYS.map((d, i) =>
    `<li><a href="${GH + d[0]}" target="_blank" rel="noopener"><b>${String(i + 1).padStart(2, "0")}</b>${esc(lang === "az" ? d[2] : d[1])}</a></li>`).join("");
}

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    el.innerHTML = l === "az" && T.az[k] ? T.az[k] : EN[k];
  });
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
  try { localStorage.setItem("lang", l); } catch (e) {}
  renderFilters(); renderGrid(); renderDays();
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

document.getElementById("themeBtn").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

let saved = "en";
try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}
setLang(saved === "az" ? "az" : "en");
