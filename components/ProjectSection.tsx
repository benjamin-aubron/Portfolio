import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/db/projects";

export default async function ProjectSection() {
  return (
    <Section id="project" title="Mes derniers projets" boxsize="xl">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
