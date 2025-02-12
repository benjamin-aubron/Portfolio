import { Experience } from "@/types/types";
import { IoIosRocket } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import {
  AccordionContent,
  AccordionTrigger,
} from "@/components/shadcn/accordion"


export default function ExperienceCard({experience}: {experience: Experience}) {
  return (
    <div className="pb-2">
      <AccordionTrigger>
        <div className="flex items-center justify-start pb-2">
          <div className="flex flex-0 items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[--primaryColor]">
            {experience.activity === "job" && <MdWork className="text-xl md:text-2xl text-black" />}
            {experience.activity === "entrepreneurship" && <IoIosRocket className="text-xl md:text-2xl text-black" />}
            {experience.activity === "study" && <PiStudentFill className="text-xl md:text-2xl text-black" />}
          </div>
          <div className="flex flex-1 ml-3 text-neutral-200 text-xl md:text-2xl font-semibold">{experience.position}{experience.entity && " - "}{experience.entity}</div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex items-center justify-start pb-2">
          <div className="min-w-[2px] mx-[15px] md:mx-[19px] bg-[--secondaryColor] self-stretch rounded"></div>        
          <div className="ml-3">
            <div className="text-neutral-500">{experience.startDate}{experience.endDate && " - "}{experience.endDate} - {experience.duration} - {experience.place}</div>
            <div className="py-1 text-neutral-300">{experience.description}</div>
            <div className="flex flex-wrap py-2 items-center">
              {experience.skills && <div className="text-neutral-300 mr-1">Compétences : </div>}
              {experience.skills?.map((skill, index) => <div className="text-[--tertiaryColor] mr-1" key={index}>{skill}</div>)}
            </div>
          </div>
        </div>
      </AccordionContent>
    </div>
  )
}
