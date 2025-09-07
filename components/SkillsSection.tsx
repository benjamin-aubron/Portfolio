"use client";
import Section from "@/components/Section";
import SkillsTabs from "@/components/SkillsTabs";
import { useTranslations } from "next-intl";

export default function SkillsSection() {
  const t = useTranslations("skills");
  return (
    <Section id="skills" title={t("title")}>
      <SkillsTabs />
    </Section>
  );
}
