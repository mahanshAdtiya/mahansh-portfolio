import { PROJECTS } from "@/lib/content";
import { Reveal } from "./reveal";
import { UnderlineReveal } from "./underline-reveal";
import { SectionHeading } from "./section-heading";

const EASE = "ease-[cubic-bezier(.16,.84,.24,1)]";

export function Projects() {
  return (
    <section id="projects">
      <Reveal className="mx-auto max-w-page px-gutter pb-[clamp(64px,14vh,150px)]">
        <SectionHeading
          num="05"
          title="Other projects"
          className="mb-[clamp(24px,5vh,48px)]"
        />

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3.5">
          {PROJECTS.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                data-sound="hover"
                className={`group relative block h-full border border-edge py-[22px] pl-[22px] pr-11 transition-[translate,border-color,box-shadow] duration-[560ms] ${EASE} hover:-translate-y-1.5 hover:border-heading hover:shadow-lift`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-4 right-4 -translate-x-[5px] translate-y-[5px] text-accent opacity-0 transition-[opacity,translate] duration-[420ms] ${EASE} group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>

                {/* Scoped to the title itself, not the tile: the hover group
                    lives on the UnderlineReveal root. */}
                <h3 className="mb-2 font-display text-[26px] leading-none">
                  <UnderlineReveal as="span" className="pb-1">
                    {project.title}
                  </UnderlineReveal>
                </h3>
                <p className="mb-3.5 text-sm leading-[1.65]">
                  {project.description}
                </p>
                <p className="font-mono text-eyebrow-sm tracking-[.08em] uppercase text-muted">
                  {project.tech}
                </p>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
