import { Section } from "@/components/Section";
import SkillsTabs from "@/components/SkillsTabs";
import { getScopedI18n } from "../../public/locales/server";

export default async function SkillsSection() {
  const t = await getScopedI18n("skills");
  return (
    <Section id="skills" title={t("title")}>
      <SkillsTabs />
    </Section>
  );
}
