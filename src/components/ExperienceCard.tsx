import { Experience } from "@/types/types";
import { IoIosRocket } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";

export default function ExperienceCard({experience}: {experience: Experience}) {
  return (
    <div className="pb-2">
      <div className="flex items-center justify-start pb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[--primaryColor]">
          {experience.activity === "job" && <MdWork className="text-2xl text-black" />}
          {experience.activity === "entrepreneurship" && <IoIosRocket className="text-2xl text-black" />}
          {experience.activity === "study" && <PiStudentFill className="text-2xl text-black" />}
        </div>
        <div className="ml-3 text-neutral-200 text-2xl font-semibold">{experience.position}{experience.entity && " - "}{experience.entity}</div>
      </div>
      <div className="flex items-center justify-start pb-2">
        <div className="min-w-[2px] mx-[18px] bg-[--secondaryColor] self-stretch rounded"></div>        
        <div className="ml-3">
          <div className="text-neutral-400">{experience.startDate}{experience.endDate && " - "}{experience.endDate} - {experience.duration} - {experience.place}</div>
          <div className="py-1 text-neutral-200">{experience.description}</div>
          <div className="flex space-x-1 py-2 items-center">
            {experience.skills && <div>Compétences : </div>}
            {experience.skills?.map((skill, index) => <div className="text-[--tertiaryColor]" key={index}>{skill}</div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
