"use client";

import { motion } from "framer-motion";
import { experienceItems } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">University IT experience grounded in reliability, systems, and operational clarity.</h2>
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          Experience across support and systems work with an emphasis on stability, secure configuration, and data-aware workflows in real operational environments.
        </p>
      </div>

      <div className="relative space-y-6 before:absolute before:left-5 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-white/10">
        {experienceItems.map((item, index) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative pl-12"
          >
            <span className="absolute left-[0.875rem] top-8 size-3 rounded-full bg-primary shadow-[0_0_24px_hsl(var(--primary)/0.8)]" />
            <Card className="overflow-hidden">
              <CardContent className="space-y-5 p-6 sm:p-8">
                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">{item.dates}</p>
                  <h3 className="font-display text-2xl font-semibold text-foreground">{item.role}</h3>
                  <p className="text-base text-muted-foreground">{item.organization}</p>
                  <p className="max-w-2xl text-sm leading-7 text-muted-foreground">{item.summary}</p>
                </div>
                <ul className="grid gap-3 text-sm leading-7 text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-primary/80" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
