import Nav from "@/components/Nav"
import CTA from "@/components/CTA"
import ProjectCard from "@/components/ProjectCard"
import ExperienceCard from "@/components/ExperienceCard"
import { projects } from "@/db/projects"
import { experiences } from "@/db/experiences"

export default function HomePage() {
  return (
    <div className="bg-black h-full">
      <Nav />
      <CTA />

      <section id="project" className="bg-black max-w-screen-xl mx-auto px-4 py-20 text-neutral-100">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">My last projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {/* <div className="flex justify-center text-center text-[--primaryColor] text-xl mt-10">See more projects</div> */}
      </section>

      <section>

      </section>

      <section id="experiences" className="bg-black max-w-screen-lg mx-auto px-4 py-20 text-neutral-100">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">Chronologie</h2>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </section>


    </div>
  )
}
