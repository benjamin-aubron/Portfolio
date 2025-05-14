import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import { Accordion, AccordionItem } from "@/components/shadcn/accordion";
import { experiences } from "@/db/experiences";
import { getScopedI18n } from "../../public/locales/server";


export default async function TimelineSection() {
  const t1 = await getScopedI18n("timeline");
  return (
    <Section id="timeline" title={t1("title")}>
    <Accordion type="single" collapsible>
      {experiences.map((experience, index) => (
        <AccordionItem key={index} value={experience.position}>
          <ExperienceCard experience={experience} />
        </AccordionItem>
      ))}
    </Accordion>
  </Section>
  )
}
