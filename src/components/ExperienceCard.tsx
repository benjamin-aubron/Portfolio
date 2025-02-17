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
      <AccordionTrigger className={` [&[data-state=open]>svg]:text-[--primaryColor] ${experience.description ?`[&[data-state=open]>div>div:first-child]:bg-[--primaryColor]`:"[&>svg]:invisible"}`}>
        <div className="flex items-center justify-start w-full">
          <div className="flex flex-0 items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-md bg-neutral-500">
            {experience.activity === "job" && <MdWork className="text-xl md:text-2xl text-black" />}
            {experience.activity === "entrepreneurship" && <IoIosRocket className="text-xl md:text-2xl text-black" />}
            {experience.activity === "study" && <PiStudentFill className="text-xl md:text-2xl text-black" />}
          </div>
          <div className="flex flex-1 justify-between ml-3 text-neutral-200 text-sm md:text-xl font-semibold">
            <div>
              <div>{experience.position}</div>
              <div className="text-neutral-500">{experience.entity}{experience.entity && ", "}{experience.place}</div>
            </div>
            <div className="flex flex-col text-right mr-2 md:mr-6 font-normal">
              <div className="text-neutral-500">{experience.startDate}{experience.endDate && " - "}{experience.endDate}</div>
              <div className="text-neutral-500">{experience.duration}</div>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className={`${experience.description ? "" : "hidden"}`}>
        <div className="flex items-center justify-start pb-2 text-sm md:text-base">
          <div className="min-w-[2px] mx-[15px] md:mx-[23px] bg-[--secondaryColor] self-stretch rounded"></div>        
          <div className="ml-3">
            <div className="py-1 text-neutral-200 md:max-w-[80%]">{experience.description}</div>
            <div className="flex flex-wrap py-2 items-center">
              {experience.skills && <div className="text-neutral-300 mr-1">Compétences : </div>}
              {experience.skills?.map((skill, index) => <div className="text-[--secondaryColor] mr-1" key={index}>{skill}</div>)}
            </div>
          </div>
        </div>
      </AccordionContent>
    </div>
  )
}
