"use client"

import { useState } from "react"


export default function SkillsTabs() {

  const [engineeringSkills, setEngineeringSkills] = useState(true)

  return (
    <>
      <div className="flex gap-2">
        <div className={`hover:bg-neutral-800 py-1 px-4 rounded text-lg cursor-pointer ${engineeringSkills && "bg-neutral-900"}`} onClick={() => setEngineeringSkills(true)}>Ingénierie</div>
        <div className="w-[1px] bg-neutral-800 rounded"></div>
        <div className={`hover:bg-neutral-800 py-1 px-4 rounded text-lg cursor-pointer ${!engineeringSkills && "bg-neutral-900"}`} onClick={() => setEngineeringSkills(false)}>Autres</div>
      </div> 
      <hr className="my-2"/>
      <div className={`flex items-center justify-around ${engineeringSkills ? "delay-300 duration-300 opacity-100" : "duration-300 opacity-0"}`}>
        <div>
          <h4 className="pt-2 pb-1 text-neutral-500 font-semibold text-sm">Web</h4>
          <ul className="text-lg">
            <li>React</li>
            <li>Next</li>
            <li>Prisma</li>
            <li>NextAuth</li>
            <li>Docusaurus</li>
          </ul>
        </div>
        <div>
        <h4 className="pt-2 pb-1 text-neutral-500 font-semibold text-sm">Data Science</h4>
        <ul className="text-lg">
            <li>Python</li>
            <li>Data visualization</li>
            <li>Machine learning</li>
            <li>Deep learning</li>
            <li>R - Tests statistiques</li>
          </ul>
        </div>
        <div>
        <h4 className="pt-2 pb-1 text-neutral-500 font-semibold text-sm">Logistique</h4>
        <ul className="text-lg">
            <li>Ordonnancement</li>
            <li>Gestion de stock</li>
            <li>Gestion de projets</li>
            <li>ERP - SAP/APO</li>
            <li>PowerBI</li>
          </ul>
        </div>
      </div>
      <div className={`relative -top-[168px] flex items-center justify-around ${engineeringSkills ? "duration-300 opacity-0" : "delay-300 duration-300 opacity-100"}`}>
        <div>
        <h4 className="pt-2 pb-1 text-neutral-500 font-semibold text-sm">Autres</h4>
        <ul className="text-lg">
            <li>Parler en publique</li>
            <li>Figma</li>
            <li>Notion d'UI/UX</li>
          </ul>
        </div>
        <div>
        <h4 className="pt-2 pb-1 text-neutral-500 font-semibold text-sm">Langues</h4>
        <ul className="text-lg">
            <li>Français - <span className="text-neutral-400">langue maternelle</span></li>
            <li>Anglais - <span className="text-neutral-400">compétences professionnelles</span></li>
            <li>Mandarin - <span className="text-neutral-400">notions</span></li>
          </ul>
        </div>
      </div>
    </>
  )
}
