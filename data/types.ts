export interface NavItem {
  label: string;
  href: string;
}

export interface HighlightItem {
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  dates: string;
  summary: string;
  bullets: string[];
}

export interface ProjectSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  tags: string[];
  tech: string[];
  image: string;
  imageAlt: string;
  status?: "In Progress" | "Planned / exploratory";
  heroEyebrow: string;
  overview: string;
  sections: ProjectSection[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}
