import { SITE } from "@/lib/content";

export function Wordmark() {
  return (
    <a href="#top" className="flex flex-row items-baseline gap-2.5">
      <span className="font-display text-[clamp(18px,4.4vw,22px)] leading-[1.1]">
        {SITE.name}
      </span>
      <span className="font-mono text-eyebrow-sm tracking-[.14em] uppercase text-muted">
        {SITE.role}
      </span>
    </a>
  );
}
