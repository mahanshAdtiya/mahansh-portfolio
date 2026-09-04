"use client";

import { useId, useState } from "react";
import type { SelectedWork } from "@/lib/content";
import { LatencyBar } from "./latency-bar";
import { TokenGrid } from "./token-grid";

const CORES = {
  latency: LatencyBar,
  retrieval: TokenGrid,
} satisfies Record<SelectedWork["demo"]["kind"], React.ComponentType<{ on: boolean }>>;

export function WorkDemo({ demo }: { demo: SelectedWork["demo"] }) {
  const [on, setOn] = useState(demo.initialOn);
  const readoutId = useId();

  const state = on ? demo.state.on : demo.state.off;
  const Core = CORES[demo.kind];

  return (
    <div className="border border-edge bg-surface p-[clamp(18px,3vw,32px)]">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3.5">
        <span className="font-mono text-eyebrow-sm tracking-[.14em] uppercase text-muted">
          {demo.caption}
        </span>

        <button
          type="button"
          onClick={() => setOn((prev) => !prev)}
          data-sound="click"
          aria-controls={readoutId}
          className="min-h-11 rounded-pill border border-edge-strong px-3.5 py-3 font-mono text-eyebrow-sm uppercase text-heading hover:border-accent hover:text-accent"
        >
          {on ? demo.button.on : demo.button.off}
        </button>
      </div>

      <div id={readoutId} aria-live="polite">
        {state.label && (
          <p className="mb-2.5 font-mono text-eyebrow tracking-[.1em] uppercase text-accent">
            {state.label}
          </p>
        )}

        <Core on={on} />

        <div className="flex flex-wrap justify-between gap-3 font-mono text-[11px] text-muted">
          <span>{state.primary}</span>
          <span>{state.note}</span>
        </div>

        <p className="mt-[26px] border-t border-edge pt-5 text-[13px] leading-[1.7] text-faint">
          {state.detail}
        </p>
      </div>
    </div>
  );
}
