const portfolioData = {
  name: "Satish Kumar Mahto",
  intro:
    "Certified cybersecurity professional with hands-on exposure to risk assessment, vulnerability management, incident response, digital forensics, and offensive tooling. Focused on turning research, lab execution, and field observations into practical defense outcomes.",
  location: "Bokaro, Jharkhand, India",
  email: "satishkm9@gmail.com",
  phone: "+91-8294113807",
  linkedin: "https://www.linkedin.com/in/satishkrmahto/",
  address:
    "At+Po - Palamu, Via - Dhori, P.S. - Penk (Narayanpur), Dist. - Bokaro, Jharkhand, Pin - 825102",
  languages: "English, Hindi, German (Beginner)",
  roles: [
    "Aspiring Security Engineer",
    "Cybersecurity Subject Matter Expert",
    "Digital Forensics Intern",
    "CTF Competitor",
  ],
  terminalFeed: [
    "Scope loaded: risk assessment, OSINT, VAPT, incident response",
    "Tools online: Nmap, Metasploit, Burp Suite, Wireshark",
    "Forensics stack: Cellebrite UFED, FTK Imager, evidence handling",
    "Community signal: BSides Ahmedabad, IIT-Kharagpur workshops, Google I/O Extended",
  ],
  metrics: [
    { value: 10, suffix: "+", label: "Research Papers Contributed" },
    { value: 200, suffix: "+", label: "Students Mentored" },
    { value: 25, suffix: "+", label: "Hands-on Labs Led" },
    { value: 2, suffix: "+", label: "Years in Cybersecurity SME Work" },
  ],
  skillGroups: [
    {
      category: "all",
      title: "Risk & Threat Analysis",
      items: [
        "Risk assessment",
        "OSINT",
        "Vulnerability management",
        "Incident response",
      ],
    },
    {
      category: "offensive",
      title: "Offensive Security",
      items: [
        "Nmap",
        "Metasploit",
        "Burp Suite",
        "Vulnerability scanners",
      ],
    },
    {
      category: "forensics",
      title: "Digital Forensics",
      items: [
        "Digital evidence handling",
        "Mobile forensics",
        "FTK Imager",
        "Cellebrite UFED",
      ],
    },
    {
      category: "network",
      title: "Networks & Defense",
      items: ["TCP/IP", "IDS/IPS", "Firewalls", "VPNs", "Wireshark"],
    },
    {
      category: "systems",
      title: "Systems & Scripting",
      items: ["Python", "Bash", "Windows", "Linux", "Unix"],
    },
    {
      category: "compliance",
      title: "Governance Awareness",
      items: ["HIPAA", "GDPR", "ISO 27001"],
    },
  ],
  filters: [
    { key: "all", label: "All" },
    { key: "offensive", label: "Offensive" },
    { key: "forensics", label: "Forensics" },
    { key: "network", label: "Network" },
    { key: "systems", label: "Systems" },
    { key: "compliance", label: "Compliance" },
  ],
  experience: [
    {
      title: "Freelancer at UrDoer",
      subtitle: "Cybersecurity Subject Matter Expert",
      period: "2022 - Present",
      summary:
        "Worked across research, mentorship, and lab design with strong focus on practical cybersecurity education and offensive security concepts.",
      points: [
        "Conducted in-depth threat intelligence analysis in network security and cryptography.",
        "Contributed to 10+ research papers.",
        "Mentored 200+ master's students on secure design and vulnerability management.",
        "Designed and led 25+ labs on penetration testing, incident response, and threat detection.",
      ],
    },
    {
      title: "Cyber Crime Police Station, CID, Ranchi",
      subtitle: "Cyber & Digital Forensic Intern",
      period: "Sep 2021 - Dec 2021",
      summary:
        "Observed live investigative processes and evidence workflows inside a cybercrime and digital forensics environment.",
      points: [
        "Gained practical exposure to digital evidence collection and analysis.",
        "Observed procedures for securing and managing digital evidence.",
        "Participated in live investigations involving digital forensics.",
      ],
    },
  ],
  education: [
    {
      title: "M.Sc. Cybersecurity",
      subtitle: "Amity University, Rajasthan",
      period: "2023 - 2025",
      summary:
        "Major areas included cybersecurity, networking, IDS/IPS, and digital forensics.",
      points: ["GPA: 7.22"],
    },
    {
      title: "BCA",
      subtitle: "Amity University, Jharkhand",
      period: "2019 - 2022",
      summary:
        "Covered computer networks, operating systems, information security, cyber laws, computer science, and Python.",
      points: ["GPA: 7.32"],
    },
  ],
  certifications: [
    "Certified Ethical Hacker v12 (EC-Council) - 2023",
    "Practical Ethical Hacking (TCM Security) - 2023",
    "Certified AppSec Practitioner (The SecOps Group) - 2023",
    "Introduction to Cyber Security (Cisco) - 2022",
    "Linux101 (TCM Security) - 2023",
  ],
  achievements: [
    "Ranked Top 10 in Cybersecurity CTF at Amity University, Jharkhand (2019).",
    "Recognized in Hall of Fame by Lucid Motors and SitePlus for vulnerability discovery.",
  ],
  community: [
    "Attended BSides Ahmedabad hacking conferences in 2023 and 2024.",
    "Participated in Google I/O Extended conference, Bangalore (2019).",
    "Participated in ethical hacking workshops at IIT-Kharagpur (2020).",
    "Participated in Cybersecurity CTF at Amity University, Jharkhand.",
  ],
};

const introText = document.querySelector("#intro-text");
const roleRotator = document.querySelector("#role-rotator");
const locationText = document.querySelector("#location-text");
const terminalFeed = document.querySelector("#terminal-feed");
const metricsGrid = document.querySelector("#metrics-grid");
const skillGrid = document.querySelector("#skill-grid");
const skillFilters = document.querySelector("#skill-filters");
const experienceTimeline = document.querySelector("#experience-timeline");
const educationTimeline = document.querySelector("#education-timeline");
const certificationCloud = document.querySelector("#certification-cloud");
const achievementList = document.querySelector("#achievement-list");
const communityList = document.querySelector("#community-list");
const contactGrid = document.querySelector("#contact-grid");
const footerYear = document.querySelector("#footer-year");

introText.textContent = portfolioData.intro;
locationText.textContent = portfolioData.location;

function rotateRoles() {
  let index = 0;
  roleRotator.textContent = portfolioData.roles[index];
  window.setInterval(() => {
    index = (index + 1) % portfolioData.roles.length;
    roleRotator.textContent = portfolioData.roles[index];
  }, 2200);
}

function renderTerminal() {
  terminalFeed.innerHTML = portfolioData.terminalFeed
    .map(
      (entry, index) =>
        `<span class="terminal-line"><strong>0${index + 1}</strong> ${entry}</span>`,
    )
    .join("");
}

function renderMetrics() {
  metricsGrid.innerHTML = portfolioData.metrics
    .map(
      ({ value, suffix, label }) => `
        <article class="metric-card">
          <span class="metric-value" data-target="${value}" data-suffix="${suffix}">0${suffix}</span>
          <span class="metric-label">${label}</span>
        </article>
      `,
    )
    .join("");

  const counters = document.querySelectorAll("[data-target]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const counter = entry.target;
        const target = Number(counter.dataset.target);
        const suffix = counter.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();

        const tick = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const value = Math.round(progress * target);
          counter.textContent = `${value}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.unobserve(counter);
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

function renderSkills(activeFilter = "all") {
  skillGrid.innerHTML = portfolioData.skillGroups
    .map(
      (group) => `
        <article class="skill-card" data-hidden="${
          activeFilter !== "all" && group.category !== activeFilter
        }">
          <h3>${group.title}</h3>
          <div class="badge-row">
            ${group.items.map((item) => `<span class="badge">${item}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSkillFilters() {
  skillFilters.innerHTML = portfolioData.filters
    .map(
      ({ key, label }, index) => `
        <button class="filter-button ${index === 0 ? "is-active" : ""}" data-filter="${key}" type="button">
          ${label}
        </button>
      `,
    )
    .join("");

  skillFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) {
      return;
    }

    const filter = button.dataset.filter;

    skillFilters.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    renderSkills(filter);
  });
}

function createTimelineItem(item) {
  return `
    <article class="timeline-item">
      <div class="timeline-content">
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
        <span class="timeline-meta">${item.period}</span>
        <p>${item.summary}</p>
        <div class="timeline-points">
          ${item.points.map((point) => `<span>${point}</span>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderJourney() {
  experienceTimeline.innerHTML = portfolioData.experience.map(createTimelineItem).join("");
  educationTimeline.innerHTML = portfolioData.education.map(createTimelineItem).join("");
}

function renderBadges() {
  certificationCloud.innerHTML = portfolioData.certifications
    .map((item) => `<span class="badge">${item}</span>`)
    .join("");

  achievementList.innerHTML = portfolioData.achievements
    .map((item) => `<div class="stack-item">${item}</div>`)
    .join("");

  communityList.innerHTML = portfolioData.community
    .map((item) => `<div class="stack-item">${item}</div>`)
    .join("");
}

function renderContact() {
  const contactItems = [
    {
      label: "Email",
      value: `<a href="mailto:${portfolioData.email}">${portfolioData.email}</a>`,
    },
    {
      label: "Phone",
      value: `<a href="tel:${portfolioData.phone.replace(/\s+/g, "")}">${portfolioData.phone}</a>`,
    },
    {
      label: "LinkedIn",
      value: `<a href="${portfolioData.linkedin}" target="_blank" rel="noreferrer">satishkrmahto</a>`,
    },
    {
      label: "Languages",
      value: `<span>${portfolioData.languages}</span>`,
    },
    {
      label: "Address",
      value: `<span>${portfolioData.address}</span>`,
    },
    {
      label: "Resume",
      value: `<a href="./assets/resume.pdf" target="_blank" rel="noreferrer">Download / View PDF</a>`,
    },
  ];

  contactGrid.innerHTML = contactItems
    .map(
      (item) => `
        <article class="contact-item">
          <span class="contact-label">${item.label}</span>
          ${item.value}
        </article>
      `,
    )
    .join("");
}

function renderFooter() {
  footerYear.textContent = `${new Date().getFullYear()} / ${portfolioData.name}`;
}

rotateRoles();
renderTerminal();
renderMetrics();
renderSkills();
renderSkillFilters();
renderJourney();
renderBadges();
renderContact();
renderFooter();
