import { SELECTED_WORK } from "@/lib/content";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { WorkArticle } from "./work-article";

export function SelectedWork() {
  return (
    <section
      id="work"
      data-theme="dark"
      className="bg-page text-heading py-[clamp(64px,14vh,150px)]"
    >
      <Reveal className="mx-auto max-w-page px-gutter">
        <SectionHeading
          num="03"
          title="Selected work"
          className="mb-[clamp(32px,7vh,90px)]"
        />

        {SELECTED_WORK.map((work, i) => (
          <WorkArticle
            key={work.slug}
            work={work}
            divider={i < SELECTED_WORK.length - 1}
          />
        ))}
      </Reveal>
    </section>
  );
}
