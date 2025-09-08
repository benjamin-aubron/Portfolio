"use client"
import { Experience } from "@/lib/types";
import { IoIosRocket } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const t = useTranslations("timeline");
  return (
    <div className="pb-2">
      <AccordionTrigger disabled={t(experience.description) === ""}
        className={` [&[data-state=open]>svg]:text-primary ${
          t(experience.description) !== ""
            ? `[&[data-state=open]>div>div:first-child]:bg-primary cursor-pointer`
            : "[&>svg]:invisible cursor-default"
        }`}
      >
        <div className="flex items-center justify-start w-full">
          <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-md bg-neutral-500 flex-shrink-0">
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
          <div className="flex flex-col md:flex-row md:flex-1 md:justify-between ml-3 text-neutral-200 text-sm md:text-xl">
            <div>
              <div>{t(experience.position)}</div>
              <div className="flex text-neutral-500 font-normal">
                <div
                  className={`flex md:hidden text-right mr-1 text-neutral-500`}
                >
                  <div>
                    {experience.startDate}
                    {experience.endDate && "-"}
                    {experience.endDate},
                  </div>
                </div>
                {experience.entity}
                {experience.entity && ", "}
                {t(experience.place)}
              </div>
            </div>
            <div
              className={`hidden md:flex md:flex-col text-right mr-2 md:mr-6 font-normal text-neutral-500`}
            >
              <div>
                {experience.startDate}
                {experience.endDate && " - "}
                {experience.endDate}
              </div>
              <div>{t(experience.duration)}</div>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className={`${experience.description ? "" : "hidden"}`}>
        <div className="flex items-center justify-start pb-2 text-sm md:text-base">
          <div className="min-w-[2px] mx-[15px] md:mx-[23px] bg-secondary self-stretch rounded"></div>
          <div className="ml-3">
            <div className="py-1 text-neutral-200 md:max-w-[80%]">
              {t(experience.description)}
            </div>
            <div className="flex flex-wrap py-2 items-center">
              {experience.skills && (
                <div className="text-neutral-300 mr-1">{t("skills")} : </div>
              )}
              <span className="text-secondary">
                {t(experience.skills)}
              </span>
            </div>
          </div>
        </div>
      </AccordionContent>
    </div>
  );
}
