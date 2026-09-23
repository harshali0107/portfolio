// ---------- The library ----------
// Each book: spine look (color, size, style) + what's printed inside.
const BOOKS = [
  // ——— Shelf 1: The Work ———
  {
    id: "arifac", shelf: "work",
    spine: { title: "ARIFAC", sub: "Vol. I", c: "#7b2d26", h: 258, w: 78, style: "gilt" },
    kicker: "IAMAI · Fintech Convergence Council · 2024 – Present",
    title: "ARIFAC",
    subtitle: "Building a national platform from the ground up",
    intro: "ARIFAC, the Alliance of Reporting Entities in India for AML/CFT, brings together reporting entities, regulators and technology providers to strengthen India’s financial-crime prevention ecosystem. When IAMAI brought it into its operations, I took ownership and built it out: how it’s structured, what it offers, how people engage with it and how it grows.",
    stats: [
      ["₹10 Cr", "projected revenue pipeline, FY 2026–27"],
      ["6", "platform arms built out"],
    ],
    note: "from one initiative → a whole operating platform",
    sections: [
      { h: "What I built", items: [
        "Took ARIFAC from a single industry initiative to a platform with multiple products, programmes, communities and revenue streams.",
        "Six arms: Learning & Certification, Policy & Regulatory Engagement, Knowledge & Intelligence, Working Groups, Industry Outreach and Flagship Programmes.",
        "Owned the full lifecycle: spotting industry needs, shaping the proposition, building programmes, bringing stakeholders on board and seeing it through to execution.",
        "Designed the growth model across membership, certifications, learning programmes, events and partnerships.",
      ]},
    ],
    tags: ["Platform building", "AML/CFT", "Growth model", "0 → 1"],
  },
  {
    id: "learning", shelf: "work",
    spine: { title: "Learning & Certification", sub: "ARIFAC · II", c: "#23344f", h: 238, w: 60, style: "cloth" },
    kicker: "ARIFAC · Product",
    title: "Learning & Certification",
    subtitle: "Turning capability gaps into products",
    intro: "Compliance teams across India needed structured ways to build AML/CFT capability. I built ARIFAC’s Learning & Certification arm to turn those gaps into programmes professionals and institutions could actually enrol in.",
    stats: [["Role-based", "certification pathways"]],
    note: "product thinking, applied to learning",
    sections: [
      { h: "The work", items: [
        "Built structured learning and certification products for professionals and reporting entities.",
        "Designed role-based certification pathways, with foundational programmes and specialised sector modules.",
        "Mapped the organisational journey for enrolling employees and assigning courses.",
        "Worked closely on the membership and learning platforms, including the digital journeys for membership, enrolment, course access and certification.",
      ]},
    ],
    tags: ["Product", "Learning design", "User journeys"],
  },
  {
    id: "flagships", shelf: "work",
    spine: { title: "FinSight & N-SAFE", sub: "ARIFAC · III", c: "#c28b2c", t: "#2a1d0e", h: 222, w: 56, style: "label" },
    kicker: "ARIFAC · Flagship Programmes",
    title: "FinSight & N-SAFE",
    subtitle: "Rooms where industry and regulators meet",
    intro: "Some conversations only happen when the right people are in the room. I led the development of ARIFAC’s two flagship platforms and the outreach that brought the wider industry in.",
    stats: [],
    note: "banks · NBFCs · UCBs · fintechs",
    sections: [
      { h: "FinSight", items: [
        "An invite-only leadership platform for senior compliance, risk and financial-crime professionals, regulators, policymakers and technology providers.",
      ]},
      { h: "N-SAFE", items: [
        "ARIFAC’s flagship AML/CFT platform for industry-regulator dialogue, knowledge exchange and capability building.",
      ]},
      { h: "Outreach & knowledge", items: [
        "Sector-specific outreach programmes for banks, NBFCs, UCBs and other reporting entities.",
        "Knowledge and thought-leadership work: research, knowledge sessions and practitioner discussions on emerging risks.",
      ]},
    ],
    tags: ["Programme design", "Events", "Thought leadership"],
  },
  {
    id: "policy", shelf: "work",
    spine: { title: "The Policy Desk", sub: "", c: "#2f4a3a", h: 248, w: 66, style: "bands" },
    kicker: "ARIFAC & FCC · Policy & Regulatory Engagement",
    title: "The Policy Desk",
    subtitle: "Consultations, working groups & regulators",
    intro: "I built ARIFAC’s policy and regulatory engagement arm, creating structured channels for reporting entities to engage with regulators, and I work deeply on AML/CFT, KYC, financial crime, digital identity and emerging financial-sector regulation.",
    stats: [["30+", "consultations, roundtables & working-group discussions"]],
    note: "RBI · FIU-IND · UIDAI · MoF · CERSAI · SEBI",
    sections: [
      { h: "Engagement", items: [
        "Consultations, closed-door discussions and issue-based forums between industry and regulators.",
        "Turned discussions into policy recommendations, representations, research and industry guidance.",
        "Work with RBI, FIU-IND, UIDAI, the Ministry of Finance, CERSAI, SEBI and senior industry representatives.",
      ]},
      { h: "Working groups", items: [
        "Set up and ran groups on sanctions screening, enhanced due diligence, transaction monitoring and mule-account risk, working through real implementation issues together.",
      ]},
    ],
    tags: ["AML/CFT", "KYC", "Digital identity", "Regulation"],
  },
  {
    id: "regtech", shelf: "work",
    spine: { title: "RegTech Committee", sub: "FCC", c: "#2d6468", h: 230, w: 54, style: "cloth" },
    kicker: "IAMAI · Fintech Convergence Council",
    title: "The RegTech Committee",
    subtitle: "Growing a community around regulatory technology",
    intro: "I joined IAMAI through the Fintech Convergence Council and still lead its RegTech Committee alongside ARIFAC, owning member engagement, policy discussions, programming and ecosystem development.",
    stats: [["+54%", "committee growth"]],
    note: "promoted from Executive → Senior Executive",
    sections: [
      { h: "Highlights", items: [
        "Grew the committee by over 54% through targeted outreach, structured onboarding and programming.",
        "Lead policy engagement across RegTech, AML/CFT, identity, cybersecurity and privacy.",
        "Build roundtables, workshops and leadership forums connecting institutions, fintechs, tech companies and regulators.",
        "Contribute to whitepapers, research notes and industry representations.",
        "Support strategic programming and stakeholder engagement for Global Fintech Fest and WAVES.",
      ]},
    ],
    tags: ["Community", "Ecosystem", "Cybersecurity", "Privacy"],
  },
  {
    id: "xircls", shelf: "work",
    spine: { title: "XIRCLS", sub: "2023", c: "#b77a73", t: "#2b1411", h: 214, w: 50, style: "plain", lean: true },
    kicker: "Marketing Research & Development Intern · Jun 2023 – Jan 2024",
    title: "XIRCLS",
    subtitle: "Where I learned how products reach markets",
    intro: "XIRCLS is a marketing technology platform helping businesses grow through collaborative marketing. I worked across research, product, marketing and business development, and learned how a product is taken to market end to end.",
    stats: [
      ["+20%", "client acquisition in six months"],
      ["+15%", "engagement"],
      ["+10%", "new partnerships"],
    ],
    note: "led a 15-member global intern team!",
    sections: [
      { h: "What I did", items: [
        "Researched markets, customer needs and trends to find new product and business opportunities.",
        "Helped shape the product proposition using customer and market insight.",
        "Built and ran growth strategies across lead generation, acquisition, engagement and retention.",
        "Worked with content, design and business teams to turn insights into campaigns.",
        "Managed a 15-member global intern team across research, content and business development.",
      ]},
    ],
    tags: ["Market research", "Growth", "Go-to-market"],
  },

  // ——— Shelf 2: Notes, Learning & Life ———
  {
    id: "preface", shelf: "life",
    spine: { title: "Preface", sub: "read me first", c: "#22201d", h: 226, w: 64, style: "spiral" },
    kicker: "A note before you browse",
    title: "Preface",
    subtitle: "Hello, I’m Harshali.",
    intro: "I’m a policy and strategy professional working across financial regulation, product and platform building, market research, growth and ecosystem development. I’m currently at IAMAI’s Fintech Convergence Council, working on financial-sector policy while building and scaling industry platforms and programmes.",
    stats: [],
    note: "also: a stationery hoarder & book collector ✎",
    sections: [
      { h: "How to read this shelf", items: [
        "The top shelf is the work: ARIFAC, policy, RegTech and XIRCLS.",
        "The bottom shelf is research, education and the things I do beyond the desk.",
        "The postcard at the end is how to reach me.",
      ]},
      { h: "Currently", items: [
        "Senior Executive, Fintech Convergence Council, IAMAI (Mumbai)",
      ]},
    ],
    tags: ["Policy", "Strategy", "Product", "Ecosystems"],
  },
  {
    id: "research", shelf: "life",
    spine: { title: "Why We Buy iPhones", sub: "NMIMS Journal", c: "#e6dcc4", t: "#3a2a1a", h: 244, w: 58, style: "bands" },
    kicker: "Research · Published in the NMIMS Journal",
    title: "Why We Buy iPhones",
    subtitle: "An empirical analysis of purchasing behaviour & Apple’s marketing",
    intro: "A study of how Apple’s marketing strategies shape purchasing decisions among consumers aged 16–24, using primary survey data and secondary research.",
    stats: [["16–24", "age group studied"]],
    note: "behavioural econ is my favourite lens",
    sections: [
      { h: "What it examined", items: [
        "Nudge theory and choice architecture in consumer decisions.",
        "Social identity and the Veblen effect.",
        "How brand positioning and marketing tactics shape perception and purchase.",
        "Where behavioural economics meets commercial strategy.",
      ]},
    ],
    tags: ["Behavioural economics", "Consumer research", "Published"],
  },
  {
    id: "education", shelf: "life",
    spine: { title: "Education", sub: "2016 – 2025", c: "#5a3149", h: 252, w: 70, style: "gilt" },
    kicker: "Education & Coursework",
    title: "Education",
    subtitle: "Economics, marketing & psychology",
    intro: "A liberal arts education with economics at its core, and a habit of adding more courses on top.",
    stats: [
      ["3.94/4", "GPA · NMIMS"],
      ["9.84/10", "GPA · University of Mumbai"],
    ],
    note: "yes, two degrees at once",
    sections: [
      { h: "Degrees", items: [
        "NMIMS: B.A. Liberal Arts (Hons.), Economics, Marketing & Psychology · 2021–2024",
        "University of Mumbai: B.A. Economics · 2022–2025",
      ]},
      { h: "School", items: [
        "Jai Hind College: HSC, Humanities · 97%",
        "The J.B. Vachha High School: SSC · 92%",
      ]},
      { h: "Coursework", items: [
        "Behavioural Economics & Public Policy · IIM Bangalore",
        "Ethics in Public Policy · O.P. Jindal Global University",
        "Analysing & Visualising Data with Power BI · Skill Nation",
      ]},
    ],
    tags: ["Economics", "Psychology", "Public policy"],
  },
  {
    id: "leadership", shelf: "life",
    spine: { title: "Beyond the Desk", sub: "", c: "#7f8c6a", t: "#1e2616", h: 218, w: 52, style: "label" },
    kicker: "Leadership & Initiatives",
    title: "Beyond the Desk",
    subtitle: "Stories, communities & causes",
    intro: "The things I’ve organised and led outside of work, mostly by getting people together around something worth doing.",
    stats: [],
    note: "Aarey Forest drive was a favourite",
    sections: [
      { h: "TEDxNMIMS · Marketing & PR Head", items: [
        "Led marketing and PR: campaigns, partnerships and storytelling to grow the event’s reach and audience engagement.",
      ]},
      { h: "Millennium Fellowship", items: [
        "Organised a beach-cleaning drive after Ganesh Visarjan and a conservation drive at Aarey Forest.",
      ]},
      { h: "Lions Club", items: [
        "Organised a food donation initiative for underprivileged children.",
      ]},
    ],
    tags: ["Leadership", "Community", "Storytelling"],
  },
];

// The postcard isn't a book, but it opens like one.
const CONTACT = {
  id: "contact",
  spine: { c: "#b0463a" },
  kicker: "Correspondence",
  title: "Say hello",
  subtitle: "Always happy to talk policy, platforms, or stationery.",
  intro: "If you’re working on financial-sector policy, RegTech, AML/CFT, or building a platform or programme and want to compare notes, I’d love to hear from you.",
  stats: [],
  note: "replies usually within a day or two",
  contact: true,
  sections: [
    { h: "Find me", items: [
      '<a href="mailto:harshalisaigal70@gmail.com">harshalisaigal70@gmail.com</a>',
      '<a href="#">LinkedIn</a>', // TODO: add LinkedIn URL
      '<a href="https://github.com/harshali0107">GitHub</a>',
      "Mumbai, India",
    ]},
  ],
  tags: [],
};

const ALL = [...BOOKS, CONTACT];
const roman = (n) => ["i","ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii"][n] || n + 1;

// ---------- Render spines ----------
function spineHTML(b) {
  const s = b.spine;
  return `
    <button class="book ${s.style}${s.lean ? " lean" : ""}" data-id="${b.id}"
      style="--c:${s.c};--t:${s.t || "#e9c77b"};height:${s.h}px;width:${s.w}px"
      aria-label="Open ${b.title}">
      <span class="spine-title">${s.title}</span>
      ${s.sub ? `<span class="spine-sub">${s.sub}</span>` : ""}
    </button>`;
}

["work", "life"].forEach((shelf) => {
  const row = document.querySelector(`.row[data-shelf="${shelf}"]`);
  row.insertAdjacentHTML("afterbegin", BOOKS.filter((b) => b.shelf === shelf).map(spineHTML).join(""));
});

// ---------- Reader ----------
const dialog = document.getElementById("reader");
const inner = dialog.querySelector(".reader-inner");
let current = -1;

function spreadHTML(b, i) {
  const stats = b.stats.length
    ? `<div class="stats">${b.stats.map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("")}</div>`
    : "";
  const sections = b.sections.map((s) => `
      <h3>${s.h}</h3>
      <ul>${s.items.map((it) => `<li>${it}</li>`).join("")}</ul>`).join("");
  const tags = b.tags.length ? `<p class="tags">${b.tags.map((t) => `<span>${t}</span>`).join("")}</p>` : "";

  return `
    <article class="spread${b.contact ? " is-postcard" : ""}" style="--c:${b.spine.c}">
      <span class="ribbon" aria-hidden="true"></span>
      <section class="page left">
        <p class="running">${b.kicker}</p>
        <h2 id="reader-title">${b.title}</h2>
        <p class="subtitle">${b.subtitle}</p>
        <p class="ornament" aria-hidden="true">❦</p>
        <p class="lead">${b.intro}</p>
        ${stats}
        <p class="margin-note">${b.note}</p>
        <span class="ex-libris" aria-hidden="true">EX LIBRIS<br><b>H·S</b></span>
        <span class="folio">${roman(i * 2)}</span>
      </section>
      <section class="page right">
        ${sections}
        ${tags}
        <span class="folio">${roman(i * 2 + 1)}</span>
      </section>
    </article>
    <nav class="reader-nav">
      <button class="nav-btn" data-go="-1" aria-label="Previous book">← prev</button>
      <button class="nav-btn close" aria-label="Close book">put it back ✕</button>
      <button class="nav-btn" data-go="1" aria-label="Next book">next →</button>
    </nav>`;
}

function openBook(id) {
  const i = ALL.findIndex((b) => b.id === id);
  if (i < 0) return;
  current = i;
  document.querySelectorAll(".pulled").forEach((el) => el.classList.remove("pulled"));
  const spine = document.querySelector(`[data-id="${id}"]`);
  spine && spine.classList.add("pulled");

  inner.innerHTML = spreadHTML(ALL[i], i);
  inner.scrollTop = 0;
  if (!dialog.open) {
    // brief pause so the spine visibly slides out first
    setTimeout(() => dialog.showModal(), spine && !matchMedia("(prefers-reduced-motion: reduce)").matches ? 260 : 0);
  }
}

function closeBook() {
  dialog.classList.add("closing");
  setTimeout(() => {
    dialog.close();
    dialog.classList.remove("closing");
  }, 220);
}

dialog.addEventListener("close", () => {
  document.querySelectorAll(".pulled").forEach((el) => el.classList.remove("pulled"));
});

document.addEventListener("click", (e) => {
  const trigger = e.target.closest(".book, .postcard");
  if (trigger) return openBook(trigger.dataset.id);

  if (e.target === dialog || e.target.closest(".close")) return closeBook();

  const go = e.target.closest("[data-go]");
  if (go) openBook(ALL[(current + Number(go.dataset.go) + ALL.length) % ALL.length].id);
});

document.addEventListener("keydown", (e) => {
  if (!dialog.open) return;
  if (e.key === "ArrowRight") openBook(ALL[(current + 1) % ALL.length].id);
  if (e.key === "ArrowLeft") openBook(ALL[(current - 1 + ALL.length) % ALL.length].id);
});

document.getElementById("year").textContent = new Date().getFullYear();
