import { IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/types/types";
import { getScopedI18n } from '../../public/locales/server'



export default async function ProjectCard({project}: {project: Project}) {

  const t = await getScopedI18n('projects')

  return (
    <div className="relative bg-neutral-900 text-neutral-200 p-4 rounded-2xl group border border-neutral-900 lg:hover:border-[--secondaryColor] duration-300">
      <div className="pb-2">
        <img src={`${project.src}`} alt={`${project.name}`} className="object-cover object-center w-full h-52 rounded-t-xl md:saturate-50 group-hover:saturate-100 transition-all duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-100 py-1">{t(project.name as "alaska.name" | "amicale.name" | "cryptogalaxy.name")}</h3>
      <div className="text-neutral-300 py-3">{t(project.date as "alaska.date" | "amicale.date" | "cryptogalaxy.date")}</div>
      <div className="pb-1 h-32 text-neutral-40">
        <div className="line-clamp-5">{t(project.description as "alaska.description" | "amicale.description" | "cryptogalaxy.description")}</div>
      </div>
      <hr className="border-neutral-700" />
      <div className="flex flex-wrap gap-2 pt-2 pb-10">
        {project.techs.map((tech, index) => (
          <div key={index} className="py-1 px-3 bg-neutral-700 rounded">{tech}</div>
        ))}

      </div>
      <div className="absolute bottom-4 flex gap-2">
        <a href={project.url} target="_blank" className="flex items-center gap-1 bg-neutral-950 hover:bg-neutral-900 py-1 px-3 rounded">
          <IoGlobeOutline className="text-base" />
          Website</a>
        <a href={project.github} target="_blank" className="flex items-center gap-1 bg-neutral-950 hover:bg-neutral-900 py-1 px-3 rounded">
          <FaGithub className="text-base" />
          Github</a>
      </div>
    </div>
  )
}
