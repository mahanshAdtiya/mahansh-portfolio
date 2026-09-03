import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section
      id="contact"
      data-theme="dark"
      className="flow-root bg-page text-heading pt-[clamp(72px,16vh,170px)]"
    >
      <div className="mx-auto max-w-page px-gutter">
        <SectionHeading
          num="06"
          title="Contact"
          className="mb-[clamp(24px,5vh,48px)]"
        />
      </div>
    </section>
  );
}
