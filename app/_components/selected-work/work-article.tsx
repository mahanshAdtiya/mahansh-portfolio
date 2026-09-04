import type { SelectedWork } from "@/lib/content";
import { WorkDemo } from "./work-demo";

export function WorkArticle({
  work,
  divider,
}: {
  work: SelectedWork;
  divider: boolean;
}) {
  return (
    <article
      className={`grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(24px,4vw,64px)] ${
        divider
          ? "mb-[clamp(48px,9vh,110px)] border-b border-edge pb-[clamp(48px,9vh,110px)]"
          : ""
      }`}
    >
      <div>
        <p className="mb-4 flex flex-wrap gap-3 font-mono text-eyebrow tracking-[.14em] uppercase text-muted">
          {work.meta.map((item, i) => (
            <span key={item} className="contents">
              {i > 0 && <span className="text-edge-strong">/</span>}
              <span>{item}</span>
            </span>
          ))}
        </p>

        <h3 className="mb-[18px] text-[clamp(38px,9vw,72px)] leading-none">
          {work.title}
        </h3>

        <p className="mb-[22px] text-[15px] leading-[1.75]">{work.summary}</p>

        <ul className="flex flex-wrap gap-2">
          {work.tech.map((label) => (
            <li
              key={label}
              className="border border-edge-strong px-2.5 py-1.5 font-mono text-eyebrow-sm tracking-[.08em] uppercase text-muted"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      <WorkDemo demo={work.demo} />
    </article>
  );
}
