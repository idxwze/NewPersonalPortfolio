"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { heroStats, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut"
    }
  }
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_28%)]" />
      <div className="container grid items-center gap-14 pb-16 pt-12 md:grid-cols-[1.05fr_0.95fr] md:pb-24">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-8">
          <motion.p variants={fadeUp} className="section-kicker">
            Ottawa-based new grad profile
          </motion.p>
          <div className="space-y-5">
            <motion.h1 variants={fadeUp} className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl xl:text-7xl">
              {siteConfig.name}
            </motion.h1>
            <motion.p variants={fadeUp} className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              {siteConfig.heroHeadline}
            </motion.p>
            <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-primary">
              {siteConfig.heroSubheadline}
            </motion.p>
            <motion.p variants={fadeUp} className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {siteConfig.heroDescription}
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={siteConfig.resumeHref} target="_blank" rel="noreferrer">
                <Download className="size-4" />
                View Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">
                Explore Projects
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="font-display text-xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-[32rem]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -left-8 top-10 hidden rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground shadow-2xl backdrop-blur-xl md:block">
              Reliable APIs
            </div>
            <div className="absolute -right-6 bottom-12 hidden rounded-3xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary shadow-2xl backdrop-blur-xl md:block">
              ML-powered products
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/70 p-5 shadow-[0_40px_120px_-60px_rgba(34,211,238,0.45)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_35%)]" />
              <div className="relative flex flex-col gap-5">
                <div className="mx-auto size-48 overflow-hidden rounded-full border border-white/10 p-2 sm:size-60">
                  <div className="relative size-full overflow-hidden rounded-full">
                    <Image
                      src="/images/me.jpg"
                      alt="Placeholder portrait of Seifeddine Reguige."
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-background/60 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Primary focus</p>
                    <p className="mt-2 text-sm leading-7 text-foreground">Backend services, data products, recommender logic, and ML-backed engineering workflows.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-background/60 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Core stack</p>
                    <p className="mt-2 text-sm leading-7 text-foreground">Python, Java, Go, SQL, Pandas, scikit-learn, Linux, and systems fundamentals.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
