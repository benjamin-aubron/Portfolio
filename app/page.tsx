import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import StackSection from "@/components/StackSection";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-black overflow-hidden">
      <Nav />
      <CTA />
      <ProjectSection />
      <SkillsSection />
      <StackSection />
      <TimelineSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
