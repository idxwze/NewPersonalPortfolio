import type { MetadataRoute } from "next";
import { projectItems } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];

  for (const project of projectItems) {
    routes.push({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    });
  }

  return routes;
}
