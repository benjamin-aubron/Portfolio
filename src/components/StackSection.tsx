import Section from "./Section";
import StackCard from "@/components/StackCard";
import { stack } from "@/db/stack";
import { getScopedI18n } from "../../public/locales/server";

export default async function StackSection() {
  const t = await getScopedI18n("stack");
  return (
    <Section id="stack" title={t("title")}>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
        <div className="col-span-2">
          <StackCard stack={stack[0]} />
        </div>
        <div className="col-span-1">
          <StackCard stack={stack[1]} />
        </div>
        <div className="col-span-1">
          <StackCard stack={stack[2]} />
        </div>
        <div className="col-span-2">
          <StackCard stack={stack[3]} />
        </div>
      </div>
    </Section>
  );
}
