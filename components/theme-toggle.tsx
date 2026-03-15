"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const nextTheme = mounted && (theme === "system" ? resolvedTheme : theme) === "dark" ? "light" : "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="rounded-full border border-white/10 bg-white/5 backdrop-blur"
      aria-label={mounted ? `Switch to ${nextTheme} mode` : "Toggle theme"}
      onClick={() => setTheme(nextTheme)}
    >
      <motion.span
        key={mounted && (theme === "dark" || (theme === "system" && resolvedTheme === "dark")) ? "sun" : "moon"}
        initial={{ rotate: -35, opacity: 0, scale: 0.85 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {mounted && (theme === "dark" || (theme === "system" && resolvedTheme === "dark")) ? (
          <Sun className="size-4" aria-hidden="true" />
        ) : (
          <Moon className="size-4" aria-hidden="true" />
        )}
      </motion.span>
    </Button>
  );
}
