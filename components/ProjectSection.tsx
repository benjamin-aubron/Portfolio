"use client"
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/db/projects";
import {useTranslations} from 'next-intl';

export default function ProjectSection() {
  const t =  useTranslations("project");
  return (
    <Section id="project" title={t("title")} boxsize="xl">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
