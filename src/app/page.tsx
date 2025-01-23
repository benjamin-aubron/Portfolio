import Nav from "@/components/Nav"
import CTA from "@/components/CTA"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/db/projects"

export default function HomePage() {
  return (
    <div className="bg-black h-full">
      <Nav />
      <CTA />

      <section className="bg-black max-w-screen-xl mx-auto px-4 py-20 text-neutral-100">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-4">My last projects</h2>
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center text-center text-[--primaryColor] text-xl mt-10">See more projects</div>
      </section>
    </div>
  )
}
