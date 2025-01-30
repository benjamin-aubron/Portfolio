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
      <hr className="mt-2"/>
      <div className={`flex items-center justify-between ${engineeringSkills ? "" : "hidden"}`}>
        <div>
          <h4>Web</h4>
          <ul>
            <li>React</li>
            <li>Next</li>
            <li>Prisma</li>
            <li>NextAuth</li>
            <li>Docusaurus</li>
          </ul>
        </div>
        <div>
          <h4>Data Science</h4>
          <ul>
            <li>Python</li>
            <li>Next</li>
            <li>Prisma</li>
            <li>NextAuth</li>
            <li>Docusaurus</li>
          </ul>
        </div>
        <div>
          <h4>Logistique</h4>
          <ul>
            <li>Ordonnancement</li>
            <li>Gestion de stock</li>
            <li>ERP - SAP/APO</li>
            <li>PowerBI</li>
            <li>Docusaurus</li>
          </ul>
        </div>
      </div>
      <div className={`flex items-center justify-between ${engineeringSkills ? "hidden" : ""}`}>
        <div>
          <h4>Savoir être</h4>
          <ul>
            <li>React</li>
            <li>Next</li>
            <li>Prisma</li>
          </ul>
        </div>
        <div>
          <h4>Langues</h4>
          <ul>
            <li>blabla</li>
            <li>Next blabla</li>
          </ul>
        </div>
      </div>
    </>
  )
}
