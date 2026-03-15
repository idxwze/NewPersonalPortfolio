import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p>
            {siteConfig.title} • {siteConfig.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
