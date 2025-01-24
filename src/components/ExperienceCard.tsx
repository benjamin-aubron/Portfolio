import { Experience } from "@/types/types";
import { IoIosRocket } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";

export default function ExperienceCard({experience}: {experience: Experience}) {
  return (
    <div className="pb-2">
      <div className="flex items-center justify-start pb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500">
          {experience.activity === "job" && <MdWork className="text-2xl" />}
          {experience.activity === "entrepreneurship" && <IoIosRocket className="text-2xl" />}
          {experience.activity === "study" && <PiStudentFill className="text-2xl" />}
        </div>
        <div className="ml-3">{experience.position}{experience.entity && " - "}{experience.entity}</div>
      </div>
      <div className="flex items-center justify-start pb-2">
        <div className="w-1 mx-[18px] bg-red-300 self-stretch rounded"></div>
        
        <div className="ml-3">
          <div>{experience.startDate}{experience.endDate && " - "}{experience.endDate} - {experience.duration} - {experience.place}</div>
          <div className="py-1">{experience.description}</div>
          <div className="flex space-x-2">{experience.skills?.map((skill, index) => <div className="bg-red-300 px-2 py-1 rounded" key={index}>{skill}</div>)}</div>
        </div>
      </div>
    </div>
  )
}
