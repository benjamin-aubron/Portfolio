import Nav from "@/components/Nav"
import CTA from "@/components/CTA"
import ProjectCard from "@/components/ProjectCard"
import ExperienceCard from "@/components/ExperienceCard"
import SkillsTabs from "@/components/SkillsTabs"
import StackCard from "@/components/StackCard"
import { projects } from "@/db/projects"
import { experiences } from "@/db/experiences"
import { stack } from "@/db/stack"


export default function HomePage() {
  return (
    <div className="bg-black h-full">
      <Nav />
      <CTA/>

      <section id="project" className="bg-black max-w-screen-xl mx-auto px-4 py-40 text-neutral-100">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">My last projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {/* <div className="flex justify-center text-center text-[--primaryColor] text-xl mt-10">See more projects</div> */}
      </section>

      <section id="skills" className="bg-black max-w-screen-lg mx-auto px-4 py-32 text-neutral-100 max-h-[650px]">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">Mes compétences</h2>
        <SkillsTabs />
      </section>

      <section id="stack" className="bg-black max-w-screen-lg mx-auto px-4 py-32 text-neutral-100">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">Ma stack favorite</h2>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="col-span-2">
            <StackCard stack={stack[0]}/>
          </div>
          <div className="col-span-1">
            <StackCard stack={stack[1]}/>
          </div>
          <div className="col-span-1">
            <StackCard stack={stack[2]}/>
          </div>
          <div className="col-span-2">
            <StackCard stack={stack[3]}/>
          </div>
        </div>
      </section>

      <section id="experiences" className="bg-black max-w-screen-lg mx-auto px-4 py-32 text-neutral-100">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">Chronologie</h2>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </section>

      <section id="about" className="bg-black max-w-screen-lg mx-auto px-4 pt-32 pb-80 text-neutral-100">
      <h2 className="text-4xl text-neutral-100 font-semibold pb-6">A propos</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem reiciendis consectetur saepe officiis animi aspernatur, ipsa nihil illo pariatur laudantium. Quis soluta quo, natus deleniti quasi amet officia eaque?
      </section>


    </div>
  )
}
