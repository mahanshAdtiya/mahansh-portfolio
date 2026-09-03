import { SectionHeading } from "./section-heading";

export function SelectedWork() {
  return (
    <section
      id="work"
      data-theme="dark"
      className="bg-page text-heading py-[clamp(64px,14vh,150px)]"
    >
      <div className="mx-auto max-w-page px-gutter">
        <SectionHeading
          num="03"
          title="Selected work"
          className="mb-[clamp(32px,7vh,90px)]"
        />
      </div>
    </section>
  );
}
