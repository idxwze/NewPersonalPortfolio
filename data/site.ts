import type { HighlightItem, NavItem, StatItem } from "@/data/types";

export const siteConfig = {
  name: "Seifeddine Reguige",
  location: "Ottawa, ON, Canada",
  title: "Backend & Data/ML Engineer",
  email: "sregu043@uottawa.ca",
  linkedin: "https://www.linkedin.com/in/seifeddine-reguige-4164bb251",
  github: "https://github.com/idxwze",
  url: "https://seifeddine-reguige.vercel.app",
  resumeHref: "/files/Seifeddine-Reguige-Resume.pdf",
  heroHeadline: "Backend & Data/ML Engineer.",
  heroSubheadline: "Designing reliable APIs, data workflows, and ML-powered features.",
  heroDescription:
    "Backend and data/ML-focused engineer building production-minded software with Python, Java, Go, SQL, and practical machine learning tooling. Interested in dependable systems, applied AI products, and the engineering discipline required to move from experiments to usable software.",
  seoDescription:
    "Seifeddine Reguige is a Backend & Data/ML Engineer focused on reliable APIs, data workflows, systems thinking, and ML-powered product experiences."
};

export const navigationItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const aboutParagraphs = [
  "Seifeddine brings together backend engineering discipline and data/ML curiosity. His foundation spans algorithms, data structures, operating systems, networking, AI, and secure systems, which helps him reason clearly about how software behaves under real constraints.",
  "He enjoys building the connective tissue between data and product: APIs, preprocessing pipelines, database-backed workflows, analytics surfaces, and ML-informed features that still feel maintainable, observable, and production-ready."
];

export const aboutHighlights: HighlightItem[] = [
  { label: "Backend & Data/ML Engineering" },
  { label: "University of Ottawa - CS (Co-op)" },
  { label: "Projects in Computer Vision, Recommenders, Sports Analytics, Security" }
];

export const heroStats: StatItem[] = [
  { value: "5", label: "Project case studies" },
  { value: "2", label: "University IT roles" },
  { value: "Python + SQL + ML", label: "Core toolkit" }
];

export const socialLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "GitHub", href: siteConfig.github }
];
