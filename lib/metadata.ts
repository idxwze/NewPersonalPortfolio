import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function createMetadata({
  title,
  description,
  path = "/"
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description ?? siteConfig.seoDescription;
  const url = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_CA",
      type: "website",
      images: [{ url: "/opengraph-image" }]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/opengraph-image"]
    }
  };
}
