import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import "@/app/globals.css";

const fontSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = createMetadata({
  description: siteConfig.seoDescription
});

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    email: siteConfig.email,
    jobTitle: siteConfig.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ottawa",
      addressRegion: "ON",
      addressCountry: "Canada"
    },
    sameAs: [siteConfig.linkedin, siteConfig.github],
    alumniOf: "University of Ottawa",
    url: siteConfig.url
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontDisplay.variable} min-h-screen`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
