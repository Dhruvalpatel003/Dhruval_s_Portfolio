import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectSection from "@/components/portfolio/ProjectSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
