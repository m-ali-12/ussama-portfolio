// TYPES
export type ProjectCategory =
  | "All"
  | "Web"
  | "Dashboard"
  | "E-Commerce"
  | "Landing"
  | "Mobile Apps";

// SITE INFO
export const site = {
  name: "Ussama Binyamin",
  role: "Full-Stack Developer",
  logoText: "U",
  location: "Sahiwal, Pakistan",
  email: "muhammadussama35@gmail.com",
  social: {
    github: "https://github.com/ussama-binyamin",
    linkedin: "https://www.linkedin.com/in/usama-binyamin-b94651329/",
  },
};

// HIGHLIGHTS
export const highlights = [
  {
    title: "Mobile Apps",
    desc: "Flutter, Dart, Android & iOS (Cross-Platform)",
    icon: "Smartphone",
  },
  {
    title: "State Management",
    desc: "Provider, Riverpod",
    icon: "Layers",
  },
  {
    title: "Backend & DB",
    desc: "Firebase, REST APIs, SQLite",
    icon: "Database",
  },
  {
    title: "App Performance",
    desc: "Clean Architecture, Native Performance, UI/UX",
    icon: "Zap",
  },
];

// SKILLS
export const skills = [
  {
    group: "App Development",
    items: [
      { name: "Flutter / Dart", level: 92 },
      { name: "UI & Animations", level: 88 },
      { name: "State Management (Provider, Riverpod)", level: 85 },
      { name: "Responsive Layouts", level: 90 },
    ],
  },
  {
    group: "Backend & Storage",
    items: [
      { name: "Firebase", level: 82 },
      { name: "REST APIs / JSON", level: 85 },
      { name: "SQLite", level: 78 },
      { name: "Auth & Security", level: 75 },
    ],
  },
  {
    group: "DevOps & Tools",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "Play Store / App Store", level: 80 },
      { name: "CI/CD (Codemagic/Actions)", level: 72 },
      { name: "Postman / Debugging", level: 84 },
    ],
  },
];

// EXPERIENCE
export const experience = [
  {
    title: "Flutter Developer",
    company: "Desired Technologies Software House",
    period: "2025 — Present",
    bullets: [
      "Built high-performance cross-platform mobile apps for Android & iOS using Flutter.",
      "Integrated Firebase services (Firestore, Auth, Cloud Messaging) and REST APIs.",
      "Optimized app performance improving UI frame rates (60fps).",
    ],
  },
  {
    title: "Mobile App Developer (Intern/Part-time)",
    company: "Jeux Developer",
    period: "2024 — 2025",
    bullets: [
      "Developed responsive and pixel-perfect UIs from Figma designs using Flutter widgets.",
      "Managed app state using Provider and handled local data with SQLite.",
      "Assisted in deploying apps to Google Play Store and managing Git version control.",
    ],
  },
];

// EDUCATION
export const education = [
  {
    title: "BS Computer Science",
    org: "University of Sahiwal",
    period: "2020 — 2024",
    bullets: [
      "Core Computer Science: OOP, DBMS, Software Architecture, Mobile Computing.",
      "Strong understanding of Data Structures & Algorithms (DSA).",
      "Final Year Project: Cross-platform Mobile App using Flutter & Firebase.",
    ],
  },
];

// PROJECTS
// export const projects = [
//   {
//     slug: "medipedia",
//     title: "Medipedia — Medical Guide App",
//     category: "Mobile Apps" as const,
//     desc: "Medical guide app providing information about medicines, diseases and healthcare tips.",
//     stack: ["Flutter", "Dart", "Local DB", "UI/UX"],
//     cover: "/projects/p1.webp",
//     links: {
//       live: "https://play.google.com/store/apps/details?id=com.medical_guide.medipedia",
//       github: "https://github.com/your-username/medipedia",
//     },
//   },
//   {
//     slug: "office-orbit",
//     title: "Office Orbit — Management System",
//     category: "Mobile Apps" as const,
//     desc: "Office management system to track tasks, attendance and collaboration.",
//     stack: ["Flutter", "Firebase", "GetX", "Cloud Messaging"],
//     cover: "/projects/p2.webp",
//     links: {
//       live: "https://play.google.com/store/apps/details?id=com.desired_tech.office_orbit",
//       github: "https://github.com/your-username/office-orbit",
//     },
//   },
//   {
//     slug: "expense-wallet",
//     title: "Expense Wallet — Finance Tracker",
//     category: "Mobile Apps" as const,
//     desc: "Finance tracker to manage daily expenses and budgets with charts.",
//     stack: ["Flutter", "SQLite", "Charts", "Provider"],
//     cover: "/projects/p3.webp",
//     links: {
//       live: "https://play.google.com/store/apps/details?id=com.desired_tech.expense_wallet",
//       github: "https://github.com/your-username/expense-wallet",
//     },
//   },
// ] 
export const projects = [
  {
    slug: "medipedia",
    title: "Medipedia — Medical Guide App",
    category: "Mobile Apps",
    desc: "Medical guide app providing information about medicines, diseases and healthcare tips.",
    stack: ["Flutter", "Dart", "Local DB", "UI/UX"],
    cover: "/projects/p1.webp",
    links: {
      live: "...",
      github: "...",
    },
  },

  {
    slug: "office-orbit",
    title: "Office Orbit — Management System",
    category: "Mobile Apps",
    desc: "Office management system to track tasks, attendance and collaboration.",
    stack: ["Flutter", "Firebase", "GetX", "Cloud Messaging"],
    cover: "/projects/p2.webp",
    links: {
      live: "...",
      github: "...",
    },
  },

  // 👇 NEW PROJECT ADD HERE
  {
    slug: "portfolio",
    title: "Developer Portfolio",
    category: "Web",
    desc: "Personal developer portfolio built with Next.js.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    cover: "/projects/p4.webp",
    links: {
      live: "#",
      github: "#",
    },
  }
];

// SERVICES
export const services = [
  {
    title: "Cross-Platform App Development",
    desc: "High-performance Android & iOS apps using Flutter.",
    points: ["Native performance", "Pixel-perfect UI", "Fast development"],
  },
  {
    title: "Firebase & Backend Setup",
    desc: "Scalable backend solutions with authentication and databases.",
    points: ["Push Notifications", "Firestore / Realtime DB", "Secure Auth"],
  },
  {
    title: "UI/UX & App Revamp",
    desc: "Modern UI redesign with smooth Flutter animations.",
    points: ["Flutter Animations", "Figma to Flutter", "State Management"],
  },
  {
    title: "App Maintenance",
    desc: "Bug fixes, upgrades and performance optimization.",
    points: ["Performance tuning", "API Integration", "Play Store Deployment"],
  },
];

// CONTACT
export const contactCards = [
  { label: "Location", value: site.location },
  { label: "Email", value: site.email },
  { label: "Response time", value: "Within 24 hours" },
];