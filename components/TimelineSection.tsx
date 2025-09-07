"use client";
import Section from "@/components/Section";
import TimelineCard from "@/components/TimelineCard";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { experiences } from "@/db/experiences";
import { useTranslations } from "next-intl";

export default function TimelineSection() {
  const t = useTranslations("timeline");
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
  );
}
