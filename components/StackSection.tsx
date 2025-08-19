import Section from "@/components/Section";
import StackCard from "@/components/StackCard";
import { stack } from "@/db/stack";

export default async function StackSection() {
  return (
    <Section id="stack" title="Ma stack favorite">
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
