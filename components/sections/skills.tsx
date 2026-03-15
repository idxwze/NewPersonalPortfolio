"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">A technical profile built for backend, systems, and applied data roles.</h2>
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          Grouped skills stay fully editable through `data/skills.ts`, so adding new tools or reshaping the profile later does not require changing layout code.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2, scale: 1.03 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: groupIndex * 0.05 + itemIndex * 0.02 }}
                  >
                    <Badge variant="secondary" className="rounded-full px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:border-primary/30 hover:text-foreground">
                      {item}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
