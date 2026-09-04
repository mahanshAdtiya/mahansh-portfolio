"use client";

import { useState } from "react";
import type { StackGroup } from "@/lib/content";
import { GroupCard } from "./group-card";

const NODES: Record<string, { position: string; path: string }> = {
  foundations: {
    position: "md:left-1/2 md:top-[14%] md:w-[38%] lg:w-[30%]",
    path: "M 500 148 L 500 272",
  },
  frontend: {
    position: "md:left-[15%] md:top-[32%] md:w-[30%] lg:w-[25%]",
    path: "M 278 196 C 360 208, 340 300, 398 322",
  },
  backend: {
    position: "md:left-[15%] md:top-[76%] md:w-[30%] lg:w-[25%]",
    path: "M 278 470 C 360 458, 340 360, 398 342",
  },
  database: {
    position: "md:left-[85%] md:top-[32%] md:w-[30%] lg:w-[25%]",
    path: "M 722 196 C 640 208, 660 300, 602 322",
  },
  cloud: {
    position: "md:left-[85%] md:top-[76%] md:w-[30%] lg:w-[25%]",
    path: "M 722 470 C 640 458, 660 360, 602 342",
  },
};

export function StackGraph({
  groups,
  hint,
}: {
  groups: StackGroup[];
  hint: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  const current = groups.find((group) => group.key === active);

  return (
    <>
      {/* The design's hint promises "hover to read what it is used for" but
          never renders the blurbs. They exist in the data, so show them. */}
      <p
        aria-live="polite"
        className="mb-[clamp(24px,4vh,40px)] max-w-[56ch] min-h-[3lh] text-[15px] leading-[1.75]"
      >
        {current ? current.blurb : hint}
      </p>

    <div className="relative grid w-full max-w-full gap-0.5 md:block md:aspect-[1000/620] md:min-h-[700px] lg:min-h-[640px]">

      <svg
        viewBox="0 0 1000 620"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden size-full md:block"
      >
        {groups.map((group) => (
          <path
            key={group.key}
            d={NODES[group.key].path}
            fill="none"
            vectorEffect="non-scaling-stroke"
            stroke={active === group.key ? "var(--accent)" : "var(--edge-strong)"}
            strokeWidth={active === group.key ? 2.4 : 1.4}
            strokeDasharray="2 9"
            strokeLinecap="round"
            className="animate-[ants_2.4s_linear_infinite] transition-[stroke]"
          />
        ))}
      </svg>

      <div
        data-theme="dark"
        className="hidden bg-page px-5 py-6 text-center text-heading md:absolute md:left-1/2 md:top-[53.5%] md:block md:w-[22%] md:min-w-[190px] md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <p className="font-display text-2xl leading-[1.15] text-heading">
          Software Engineer
        </p>
        <p className="mt-2.5 font-mono text-[9px] tracking-[.2em] uppercase text-muted">
          Core
        </p>
      </div>

      {groups.map((group) => (
        <div
          key={group.key}
          tabIndex={0}
          onMouseEnter={() => setActive(group.key)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(group.key)}
          onBlur={() => setActive(null)}
          onClick={() =>
            setActive((current) => (current === group.key ? null : group.key))
          }
          className={`cursor-pointer md:absolute md:-translate-x-1/2 md:-translate-y-1/2 ${NODES[group.key].position}`}
        >
          <GroupCard group={group} active={active === group.key} />
        </div>
      ))}
      </div>
    </>
  );
}