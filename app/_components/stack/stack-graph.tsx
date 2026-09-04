"use client";

import { useRef, useState } from "react";
import type { StackGroup } from "@/lib/content";
import { GroupCard } from "./group-card";
import { NODE_WIDTH, VIEW, edgePath, toPercent } from "./graph-layout";
import { useNodeDrag } from "./use-node-drag";

export function StackGraph({
  groups,
  hint,
}: {
  groups: StackGroup[];
  hint: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const drag = useNodeDrag(containerRef);
  const current = groups.find((group) => group.key === active);

  return (
    <>
      <p
        aria-live="polite"
        className="mb-[clamp(24px,4vh,40px)] max-w-[56ch] min-h-[3lh] text-[15px] leading-[1.75]"
      >
        {current ? current.blurb : hint}
      </p>

      <div
        ref={containerRef}
        onPointerMove={drag.onPointerMove}
        onPointerUp={drag.onPointerUp}
        onPointerCancel={drag.onPointerUp}
        className="relative grid w-full max-w-full gap-0.5 md:block md:aspect-[1000/620] md:min-h-[700px] lg:min-h-[640px]"
      >
        <svg
          viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden size-full md:block"
        >
          {groups.map((group) => (
            <path
              key={group.key}
              d={edgePath(drag.positions[group.key], drag.core)}
              fill="none"
              vectorEffect="non-scaling-stroke"
              stroke={active === group.key ? "var(--accent)" : "var(--edge-strong)"}
              strokeWidth={active === group.key ? 2.4 : 1.4}
              strokeDasharray="2 9"
              strokeLinecap="round"
              className="animate-[ants_4.5s_linear_infinite] transition-[stroke]"
            />
          ))}
        </svg>

        <div
          data-theme="dark"
          style={toPercent(drag.core)}
          className="hidden bg-page px-5 py-6 text-center text-heading md:absolute md:block md:w-[22%] md:min-w-[190px] md:-translate-x-1/2 md:-translate-y-1/2"
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
            style={toPercent(drag.positions[group.key])}
            onPointerDown={(event) => drag.onPointerDown(event, group.key)}
            onMouseEnter={() => setActive(group.key)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(group.key)}
            onBlur={() => setActive(null)}
            onClick={() => {
              if (drag.consumeClickAfterDrag()) return;
              setActive((prev) => (prev === group.key ? null : group.key));
            }}
            className={`cursor-pointer md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:cursor-grab md:touch-none md:active:cursor-grabbing ${NODE_WIDTH[group.key]}`}
          >
            <GroupCard group={group} active={active === group.key} />
          </div>
        ))}

        {drag.isMoved && (
          <button
            type="button"
            onClick={drag.reset}
            className="hidden font-mono text-eyebrow-sm tracking-[.12em] uppercase text-muted underline-offset-4 hover:text-accent md:absolute md:right-0 md:bottom-0 md:block"
          >
            Reset layout
          </button>
        )}
      </div>
    </>
  );
}
