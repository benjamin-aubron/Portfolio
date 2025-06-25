import Section from "./Section";
import ProjectCard from "@/components/ProjectCard";
import { getScopedI18n } from "../../public/locales/server";
import { projects } from "@/db/projects";

export default async function ProjectSection() {
  const t = await getScopedI18n("project");
  return (
    <Section id="project" title={t("title")} boxsize="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
