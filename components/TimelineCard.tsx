import { Experience } from "@/lib/types";
import { IoIosRocket } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import {
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PositionProps =
  | "devWebFreelance.position"
  | "devWeb.position"
  | "entrepreneurship.position"
  | "dataScience.position"
  | "logistics.position"
  | "workshopScheduler.position"
  | "assistant.position"
  | "studentA2I.position"
  | "studentLCIE.position"
  | "studentIMSI.position";

type PlaceProps =
  | "devWebFreelance.place"
  | "devWeb.place"
  | "entrepreneurship.place"
  | "dataScience.place"
  | "logistics.place"
  | "workshopScheduler.place"
  | "assistant.place"
  | "studentA2I.place"
  | "studentLCIE.place"
  | "studentIMSI.place";
  
type DurationProps =
  | "devWebFreelance.duration"
  | "devWeb.duration"
  | "entrepreneurship.duration"
  | "dataScience.duration"
  | "logistics.duration"
  | "workshopScheduler.duration"
  | "assistant.duration"
  | "studentA2I.duration"
  | "studentLCIE.duration"
  | "studentIMSI.duration";

type DescriptionProps =
  | "devWebFreelance.description"
  | "devWeb.description"
  | "entrepreneurship.description"
  | "dataScience.description"
  | "logistics.description"
  | "workshopScheduler.description"
  | "assistant.description"

type SkillsProps =
  | "devWebFreelance.skills"
  | "devWeb.skills"
  | "entrepreneurship.skills"
  | "dataScience.skills"
  | "logistics.skills"
  | "workshopScheduler.skills"
  | "assistant.skills"


export default async function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="pb-2">
      <AccordionTrigger
        className={` [&[data-state=open]>svg]:text-[--primaryColor] ${
          experience.description
            ? `[&[data-state=open]>div>div:first-child]:bg-[--primaryColor]`
            : "[&>svg]:invisible cursor-default"
        }`}
      >
        <div className="flex items-center justify-start w-full">
          <div className="flex flex-0 items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-md bg-neutral-500">
            {experience.activity === "job" && (
              <MdWork className="text-xl md:text-2xl text-black" />
            )}
            {experience.activity === "entrepreneurship" && (
              <IoIosRocket className="text-xl md:text-2xl text-black" />
            )}
            {experience.activity === "study" && (
              <PiStudentFill className="text-xl md:text-2xl text-black" />
            )}
          </div>
          <div className="flex flex-1 justify-between ml-3 text-neutral-200 text-sm md:text-xl">
            <div>
              <div>{experience.position as PositionProps}</div>
              <div className="text-neutral-500 font-light">
                {experience.entity}
                {experience.entity && ", "}
                {experience.place as PlaceProps}
              </div>
            </div>
            <div
              className={`flex flex-col text-right mr-2 md:mr-6 font-normal text-neutral-500`}
            >
              <div>
                {experience.startDate}
                {experience.endDate && " - "}
                {experience.endDate}
              </div>
              <div>{experience.duration as DurationProps}</div>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className={`${experience.description ? "" : "hidden"}`}>
        <div className="flex items-center justify-start pb-2 text-sm md:text-base">
          <div className="min-w-[2px] mx-[15px] md:mx-[23px] bg-secondary self-stretch rounded"></div>
          <div className="ml-3">
            <div className="py-1 text-neutral-200 md:max-w-[80%]">
              {experience.description as DescriptionProps}
            </div>
            <div className="flex flex-wrap py-2 items-center">
              {experience.skills && (
                <div className="text-neutral-300 mr-1">Compétences : </div>
              )}
              <span className="text-secondary">
                {experience.skills as SkillsProps}
              </span>
            </div>
          </div>
        </div>
      </AccordionContent>
    </div>
  );
}
