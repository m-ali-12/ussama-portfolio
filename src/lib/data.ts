export const site = {
  name: "Ussama Binyamin",
  role: "Full‑Stack Developer",
  logoText: "U",
  location: "Sahiwal, Pakistan",
  email: "muhammadussama35@gmail.com",
  social: {
    github: "https://github.com/ussama-binyamin",
    linkedin: "https://www.linkedin.com/in/usama-binyamin-b94651329/",
  },
};

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
    desc: "Firebase,  REST APIs, SQLite",
    icon: "Database",
  },
  {
    title: "App Performance",
    desc: "Clean Architecture, Native Performance, UI/UX",
    icon: "Zap",
  },
];

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
      { name: "Firebase ", level: 82 },
      { name: "REST APIs / JSON", level: 85 },
      { name: "SQLite  ", level: 78 },
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

export const experience = [
  {
    title: " Flutter Developer",
    company: "Desired Technologies Software House",
    period: "2025 — Present",
    bullets: [
      "Built high-performance cross-platform mobile apps for Android & iOS using Flutter.",
      "Integrated Firebase services (Firestore, Auth, Cloud Messaging) and REST APIs.",
      "Optimized app performance, reducing build sizes and improving UI frame rates (60fps).",
    ],
  },
  {
    title: "Mobile App Developer (Intern/Part-time)",
    company: "Jeux Developer",
    period: "2024 — 2025",
    bullets: [
      "Developed responsive and pixel-perfect UIs from Figma designs using Flutter widgets.",
      "Managed app state efficiently using GetX/Provider and handled local data with SQLite.",
      "Assisted in deploying apps to Google Play Store and managing version control with Git.",
    ],
  },
];

export const education = [
  {
    title: "BS Computer Science",
    org: "University oF Sahiwal",
    period: "2020 — 2024",
   bullets: [
  "Core Computer Science: OOP, DBMS, Software Architecture, Mobile Computing.",
  "Deep understanding of Data Structures & Algorithms (DSA) for app optimization.",
  "Final Year Project: Cross-platform Mobile App using Flutter & Firebase (e.g., E-commerce/Healthcare App).",

    ],
  },
];

export type ProjectCategory =
  | "All"
  | "Mobile Apps"    // Pehle "Web" tha
  | "UI/UX Kits"      // Pehle "Dashboard" tha
  | "E‑Commerce"      // Ye same reh sakta hai (Flutter e-comm apps bohot banti hain)
  | "Firebase / Cloud" // Pehle "Landing" tha
  | "Open Source";    // Optional: Agar aapne Flutter packages banaye hon
  
export const projects = [
  {
    slug: "medipedia",
    title: "Medipedia — Medical Guide App",
    category: "Mobile Apps" as const,
    desc: "A comprehensive medical guide app providing detailed information about medicines, diseases, and healthcare tips with a clean UI.",
    stack: ["Flutter", "Dart", "Local DB", "UI/UX"],
    cover: "/projects/p1.webp", // /public/projects folder mein image rakhin
    links: {
      live: "https://play.google.com/store/apps/details?id=com.medical_guide.medipedia",
      github: "https://github.com/your-username/medipedia",
    },
  },
  {
    slug: "office-orbital",
    title: "Office Orbit — Management System",
    category: "Mobile Apps" as const,
    desc: "An all-in-one office management solution to track tasks, attendance, and team collaboration efficiently.",
    stack: ["Flutter", "Firebase", "GetX", "Cloud Messaging"],
    cover: "/projects/p2.webp",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.desired_tech.office_orbit",
      github: "https://github.com/your-username/office-orbit",
    },
  },
  {
    slug: "expense-wallet",
    title: "Expense Wallet — Finance Tracker",
    category: "Mobile Apps" as const,
    desc: "A smart personal finance manager to track daily expenses, set budgets, and visualize spending habits with charts.",
    stack: ["Flutter", "SQLite", "Charts", "Provider"],
    cover: "/projects/p3.webp",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.desired_tech.expense_wallet",
      github: "https://github.com/your-username/expense-wallet",
    },
  },
] as const;

export const services = [
  {
    title: "Cross-Platform App Dev",
    desc: "High-performance Android and iOS apps from a single codebase using Flutter.",
    points: ["Native performance", "Pixel-perfect UI", "Fast development cycle"],
  },
  {
    title: "Firebase & Backend Setup",
    desc: "Scalable backend solutions with real-time databases and authentication.",
    points: ["Push Notifications", "MY SQL", "Secure Auth systems"],
  },
  {
    title: "UI/UX & App Revamp",
    desc: "Modernizing old apps with smooth animations and clean, responsive layouts.",
    points: ["Flutter Animations", "Figma to Flutter", "State Management (GetX)"],
  },
  {
    title: "App Maintenance & Fixes",
    desc: "Fixing bugs, upgrading Flutter versions, and optimizing app performance.",
    points: ["Performance Tuning", "API Integration", "Play Store Deployment"],
  },
];

export const contactCards = [
  { label: "Location", value: site.location },
  { label: "Email", value: site.email },
  { label: "Response time", value: "Within 24 hours" },
];
