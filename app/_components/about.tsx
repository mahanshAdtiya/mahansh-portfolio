import { ABOUT } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about">
      <Reveal className="mx-auto max-w-page px-gutter pt-[clamp(48px,7vh,80px)] pb-[clamp(64px,14vh,160px)]">
        <SectionHeading
          num="01"
          title="The short version"
          className="mb-[clamp(32px,7vh,80px)]"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(28px,4vw,56px)]">
          <div>
            <p className="mb-5 font-display text-[clamp(21px,4.6vw,32px)] leading-[1.3] tracking-[-0.01em] text-heading">
              {ABOUT.lead}
            </p>
            <p className="text-[15px] leading-[1.75]">{ABOUT.body}</p>
          </div>

          <dl className="grid content-start gap-px border border-edge bg-edge">
            {ABOUT.facts.map((fact) => (
              <div key={fact.label} className="bg-page px-[22px] py-5">
                <dt className="mb-2 font-mono text-eyebrow-sm tracking-[.14em] uppercase text-muted">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-[1.6] text-faint">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="mt-[clamp(32px,6vh,72px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,170px),1fr))] gap-px border border-edge bg-edge">
          {ABOUT.metrics.map((metric) => (
            <li key={metric.figure} className="bg-page px-[22px] py-6">
              <p
                data-count={metric.countTo ?? undefined}
                data-suffix={metric.suffix}
                className={`font-display text-accent ${
                  metric.countTo === null
                    ? "text-[clamp(28px,6vw,36px)] leading-[1.2]"
                    : "text-[clamp(34px,7vw,44px)] leading-none"
                }`}
              >
                {metric.figure}
              </p>
              <p className="mt-2.5 text-[13px] leading-[1.5]">{metric.caption}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
