import type { ExperienceItem } from "@/data/types";

export const experienceItems: ExperienceItem[] = [
  {
    role: "IT Support",
    organization: "Adapted Exams Centre, University of Ottawa",
    dates: "2025 - 2026",
    summary: "Maintained reliability and security of large-scale exam environments.",
    bullets: [
      "Supported large fleets of Linux and Windows exam workstations in high-pressure environments.",
      "Diagnosed and resolved OS, network, and authentication issues using logs and system tooling.",
      "Performed hardening and pre-exam validation to reduce incidents during secure assessments.",
      "Authored runbooks and troubleshooting playbooks for repeatable incident response."
    ]
  },
  {
    role: "IT Systems Developer",
    organization: "Faculty of Health Sciences, University of Ottawa",
    dates: "2024 - 2025",
    summary: "Developed and secured content and data workflows for high-traffic web systems.",
    bullets: [
      "Maintained and optimized Drupal- and WordPress-based systems with a focus on backend performance and security.",
      "Improved role-based access and configuration to reduce operational and security risks.",
      "Refactored data-driven pages to improve responsiveness, accessibility, and structure.",
      "Collaborated with stakeholders to align content workflows with analytics and infrastructure needs."
    ]
  }
];
