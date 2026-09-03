import { CONTACT, SITE } from "@/lib/content";
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

        <p className="mb-[clamp(28px,5vh,52px)] max-w-[22ch] font-display text-[clamp(34px,8.4vw,86px)] leading-[1.02] tracking-[-0.02em] text-heading">
          {CONTACT.heading}
        </p>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-px border border-edge bg-edge">
          {CONTACT.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="block h-full bg-page px-6 py-[26px] text-heading hover:bg-surface-hover"
              >
                <span className="mb-2.5 block font-mono text-eyebrow-sm tracking-[.14em] uppercase text-muted">
                  {link.label}
                </span>
                <span className="block text-[clamp(15px,3.8vw,18px)] break-words">
                  {link.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
