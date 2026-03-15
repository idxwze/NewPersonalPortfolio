"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navigationItems, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("about");

  React.useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (active?.target.id) {
          setActiveSection(active.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.45, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="container flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group">
            <p className="font-display text-lg font-semibold tracking-tight text-foreground">{siteConfig.name}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Backend & Data/ML</p>
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto md:gap-3">
          <nav
            aria-label="Primary navigation"
            className="flex min-w-max items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur"
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button asChild size="sm" variant="outline">
              <a href={siteConfig.resumeHref} target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
