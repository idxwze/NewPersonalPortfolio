import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";
import { Section } from "@/components/layout/section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="container">
        <Section id="about">
          <AboutSection />
        </Section>
        <Section id="experience">
          <ExperienceSection />
        </Section>
        <Section id="projects">
          <ProjectsSection />
        </Section>
        <Section id="skills">
          <SkillsSection />
        </Section>
        <Section id="contact">
          <ContactSection />
        </Section>
      </div>
    </>
  );
}
