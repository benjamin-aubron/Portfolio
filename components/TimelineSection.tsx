import Section from "@/components/Section";
import TimelineCard from "@/components/TimelineCard";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { experiences } from "@/db/experiences";

export default async function TimelineSection() {
  return (
    <Section id="timeline" title="Chronologie">
      <Accordion type="single" collapsible>
        {experiences.map((experience, index) => (
          <AccordionItem key={index} value={experience.position}>
            <TimelineCard experience={experience} />
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
