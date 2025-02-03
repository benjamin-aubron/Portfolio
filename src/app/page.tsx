import Nav from "@/components/Nav"
import CTA from "@/components/CTA"
import ProjectCard from "@/components/ProjectCard"
import ExperienceCard from "@/components/ExperienceCard"
import SkillsTabs from "@/components/SkillsTabs"
import StackCard from "@/components/StackCard"
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

      <section id="skills" className="bg-black max-w-screen-lg mx-auto px-4 py-20 text-neutral-100 h-[500px]">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">Mes compétences</h2>
        <SkillsTabs />
      </section>

      <section id="skills" className="bg-black max-w-screen-lg mx-auto px-4 py-20 text-neutral-100 h-[500px]">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">Ma stack favorite</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <StackCard name="Next">Framework react moderne, Next offre des performances optimisées et un rendu rapide grâce au server-side rendering (SSR) et au static site generation (SSG).</StackCard>
          </div>
          <div className="col-span-1">
            <StackCard name="Tailwind">Pour le design, Tailwind offre le meilleur compromis entre simplicité, rapidité et performances</StackCard>
          </div>
          <div className="col-span-1">
            <StackCard name="Typescript">Création d'un code robuste grâce au typage statique, tout en facilitant la maintenance.</StackCard>
          </div>
          <div className="col-span-2">
            <StackCard name="NextAuth x Prisma">Flexible et facile à intégrer, la combination de NextAuth et Prisma permet de facilement gérer l'authentification.</StackCard> 
          </div>
        </div>
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
