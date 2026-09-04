import { STACK_GROUPS, STACK_HINT } from "@/lib/content";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { StackGraph } from "./stack-graph";

export function Stack() {
  return (
    <section id="stack">
      <Reveal className="mx-auto max-w-page px-gutter py-[clamp(64px,14vh,150px)]">
        <SectionHeading
          num="04"
          title="Stack"
          className="mb-[clamp(20px,4vh,36px)]"
        />

        <StackGraph groups={STACK_GROUPS} hint={STACK_HINT} />
      </Reveal>
    </section>
  );
}
