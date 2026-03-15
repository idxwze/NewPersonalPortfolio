"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectItems } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Case studies that make backend, data, and ML work feel concrete.</h2>
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          A curated set of projects spanning computer vision reliability, sports analytics, recommenders, database-backed systems, and exploratory security plus ML work.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projectItems.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, delay: index * 0.06 }}
            whileHover={{ y: -8, rotateX: 1.4, rotateY: -1.4 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Card className="group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={project.image} alt={project.imageAlt} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {project.status ? <Badge>{project.status}</Badge> : null}
                </div>
              </div>

              <CardHeader className="space-y-4">
                <div className="space-y-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-7">{project.summary}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="mt-auto space-y-5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition group-hover:text-primary"
                >
                  View case study
                  <ArrowUpRight className="size-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
