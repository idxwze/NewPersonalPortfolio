import type { SkillGroup } from "@/data/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "C", "Go", "SQL", "JavaScript"]
  },
  {
    title: "Backend",
    items: ["REST APIs", "CRUD", "Auth basics", "Database design", "Transactions", "Indexing", "Caching basics"]
  },
  {
    title: "Data/ML",
    items: ["EDA", "Feature engineering", "NumPy", "Pandas", "scikit-learn", "Evaluation metrics", "Recommender systems"]
  },
  {
    title: "Systems & Networks",
    items: ["Linux", "Bash", "OS fundamentals", "TCP/IP", "DNS", "Basic routing", "Wireshark"]
  },
  {
    title: "Security",
    items: ["Secure coding", "Secure systems design concepts", "OS hardening basics", "IDS/IPS concepts"]
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "Docker (basic)", "Jupyter", "Analytics tools", "Common IDEs"]
  }
];
