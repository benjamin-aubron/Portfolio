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
    <div className="bg-black overflow-hidden">
      <Nav />
      <CTA/>

      <section id="project" className="bg-black max-w-screen-xl mx-auto px-4 pt-32 pb-40 text-neutral-100">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">My last projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {/* <div className="flex justify-center text-center text-[--primaryColor] text-xl mt-10">See more projects</div> */}
      </section>

      <section id="skills" className="bg-black max-w-screen-lg mx-auto px-4 py-32 text-neutral-100">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">Mes compétences</h2>
        <SkillsTabs />
      </section>

      <section id="stack" className="bg-black max-w-screen-lg mx-auto px-4 py-32 text-neutral-100">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">Ma stack favorite</h2>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
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

      <section id="timeline" className="bg-black max-w-screen-lg mx-auto px-4 py-32 text-neutral-100">
        <h2 className="text-4xl text-neutral-100 font-semibold pb-6">Chronologie</h2>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </section>

      <section id="about" className="bg-black max-w-screen-lg mx-auto px-4 pt-32 pb-80 text-neutral-100">
      <h2 className="text-4xl text-neutral-100 font-semibold pb-6">A propos</h2>
        <div className="leading-8">Développeur front end junior, je maîtrise le Framework <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex h-4 pb-[1px] mr-1" viewBox="0 0 32 32"><path fill="currentColor" d="M23.749 30.005c-.119.063-.109.083.005.025a.3.3 0 0 0 .095-.061c0-.021 0-.021-.1.036m.24-.13c-.057.047-.057.047.011.016a.3.3 0 0 0 .068-.047c0-.027-.016-.021-.079.031m.156-.094c-.057.047-.057.047.011.016a.3.3 0 0 0 .068-.048c0-.025-.016-.02-.079.032m.158-.093c-.057.047-.057.047.009.015c.037-.02.068-.041.068-.047c0-.025-.016-.02-.077.032m.213-.141c-.109.073-.147.12-.047.068c.067-.041.181-.131.161-.131c-.043.016-.079.043-.115.063zM14.953.011c-.073.005-.292.025-.484.041c-4.548.412-8.803 2.86-11.5 6.631a15.8 15.8 0 0 0-2.824 6.989c-.129.88-.145 1.14-.145 2.333c0 1.192.016 1.448.145 2.328c.871 6.011 5.147 11.057 10.943 12.927c1.043.333 2.136.563 3.381.704c.484.052 2.577.052 3.061 0c2.152-.24 3.969-.771 5.767-1.688c.276-.14.328-.177.291-.208a341 341 0 0 1-2.609-3.495l-2.557-3.453l-3.203-4.745a416 416 0 0 0-3.229-4.744c-.011 0-.025 2.109-.031 4.681c-.011 4.505-.011 4.688-.068 4.792a.57.57 0 0 1-.276.287c-.099.047-.188.057-.661.057h-.541l-.141-.088a.6.6 0 0 1-.208-.229l-.068-.141l.005-6.271l.011-6.271l.099-.125a.8.8 0 0 1 .229-.187c.131-.063.183-.073.724-.073c.635 0 .74.025.907.208a603 603 0 0 1 3.859 5.812c2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839l.125-.083a16.4 16.4 0 0 0 3.285-2.885a15.94 15.94 0 0 0 3.767-8.177c.129-.88.145-1.141.145-2.333s-.016-1.448-.145-2.328C30.985 7.668 26.709 2.622 20.913.751a17 17 0 0 0-3.328-.697c-.303-.031-2.371-.068-2.631-.041zM21.5 9.688a.62.62 0 0 1 .317.364c.027.084.032 1.823.027 5.74l-.011 5.624l-.989-1.52l-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204a.67.67 0 0 1 .313-.395c.124-.063.172-.068.667-.068c.463 0 .541.005.645.063z"></path></svg> Next.JS
          </span>. Je cherche à mettre mes compétences techniques et ma créativité au service de projets innovants. Technophile et curieux, je me forme régulièrement pour m’adapter aux dernières évolutions technologiques de mon secteur. De plus, j'observe les changements de paradigmes autour des technologies <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md"><img src="web3.png" alt="blockchain network" className="inline items-center h-5 pb-1 mr-2"/>blockchain et web 3.0</span>. J'aime également participer à des projets open source tels que le projet <a href="https://github.com/dataforgoodfr/13_eclaireur_public" target="_blank" className="hover:underline text-[--secondaryColor] hover:text-[--primaryColor]">@éclaireur public</a>.</div>
        <div className="leading-8">Je suis une personne curieuse et désireuse de comprendre la complexité de notre monde. Je m'intéresse à différents domaines tels que la<span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md"><img src="geopolitique.png" alt="earth" className="inline items-center h-5 pb-1 mr-2"/>géopolitique</span>, <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md"><img src="economie.png" alt="coin" className="inline items-center h-5 pb-1 mr-2"/>l'économie et la finance</span> ainsi que la <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md"><img src="sociologie.png" alt="social network" className="inline items-center h-5 pb-1 mr-2"/>sociologie.</span></div>  
        <div className="leading-8">Sur mon temps libre, j'aime découvrir la <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md"><img src="cuisine.png" alt="chef hat" className="inline items-center h-5 pb-1 mr-2"/>cuisine du monde</span>, jouer au <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md"><img src="badminton.png" alt="badminton racket" className="inline items-center h-5 pb-0.5 mr-2"/>badminton</span> et je suis trésorier dans une association pour la promotion du <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md"><img src="donsang.png" alt="Blood drop" className="inline items-center h-5 pb-1 mr-1"/> Don du Sang</span>.</div>

      </section>


    </div>
  )
}


