import Section from "@/components/Section";
import TimelineCard from "@/components/TimelineCard";
import { Accordion, AccordionItem } from "@/components/shadcn/accordion";
import { experiences } from "@/db/experiences";
import { getScopedI18n } from "../../public/locales/server";


export default async function TimelineSection() {
  const t = await getScopedI18n("timeline");
  return (
    <Section id="timeline" title={t("title")}>
    <Accordion type="single" collapsible>
      {experiences.map((experience, index) => (
        <AccordionItem key={index} value={experience.position}>
          <TimelineCard experience={experience} />
        </AccordionItem>
      ))}
    </Accordion>
  </Section>
  )
}
