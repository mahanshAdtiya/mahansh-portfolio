import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-page px-gutter pt-[clamp(48px,7vh,80px)] pb-[clamp(64px,14vh,160px)]"
    >
      <SectionHeading
        num="01"
        title="The short version"
        className="mb-[clamp(32px,7vh,80px)]"
      />
    </section>
  );
}
