"use client";

import { motion } from "framer-motion";
import { aboutHighlights, aboutParagraphs } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="space-y-6"
      >
        <div className="space-y-3">
          <p className="section-kicker">About</p>
          <h2 className="section-title">Engineering at the intersection of backend systems and applied data work.</h2>
        </div>
        <div className="space-y-4">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
      >
        <Card className="h-full overflow-hidden">
          <CardContent className="space-y-4 p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary/90">Highlights</p>
            <div className="flex flex-wrap gap-3">
              {aboutHighlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.08 * index }}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  {item.label}
                </motion.div>
              ))}
            </div>

            <div className="grid gap-3 pt-4">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/12 to-transparent p-5">
                <p className="text-sm font-medium text-foreground">Focus</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Backend APIs, data workflows, recommender logic, computer vision reliability, and production-minded engineering fundamentals.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-transparent p-5">
                <p className="text-sm font-medium text-foreground">Style</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Clean architecture, strong data foundations, readable systems, and practical ML that can connect back to real product workflows.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
