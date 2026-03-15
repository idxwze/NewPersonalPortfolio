import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectBySlug, projectItems } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projectItems.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return createMetadata({ title: "Project not found", path: `/projects/${params.slug}` });
  }

  const metadata = createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      images: [{ url: `/projects/${project.slug}/opengraph-image` }]
    },
    twitter: {
      ...metadata.twitter,
      images: [`/projects/${project.slug}/opengraph-image`]
    }
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    creator: {
      "@type": "Person",
      name: "Seifeddine Reguige"
    },
    keywords: project.tags.join(", "),
    url: `https://seifeddine-reguige.vercel.app/projects/${project.slug}`
  };

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>

        <header className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
            {project.status ? <Badge variant="secondary">{project.status}</Badge> : null}
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">{project.heroEyebrow}</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{project.overview}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </header>

        <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] border border-white/10">
          <Image src={project.image} alt={project.imageAlt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        </div>

        <Card>
          <CardContent className="space-y-10 p-8">
            <div className="space-y-3">
              <p className="section-kicker">Overview</p>
              <p className="text-base leading-8 text-muted-foreground sm:text-lg">{project.summary}</p>
            </div>

            {project.sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">{section.title}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="grid gap-3 text-sm leading-7 text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 size-1.5 rounded-full bg-primary" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </CardContent>
        </Card>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }} />
    </div>
  );
}
