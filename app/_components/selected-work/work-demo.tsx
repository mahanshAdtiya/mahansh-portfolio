"use client";

import { useId, useState } from "react";

import type { ToggleDemo } from "@/lib/content";
import { DemoButton } from "./demo-button";
import { DemoPanel } from "./demo-panel";
import { LatencyBar } from "./latency-bar";
import { TokenGrid } from "./token-grid";

const CORES = {
  latency: LatencyBar,
  retrieval: TokenGrid,
} satisfies Record<ToggleDemo["kind"], React.ComponentType<{ on: boolean }>>;

export function WorkDemo({ demo }: { demo: ToggleDemo }) {
  const [on, setOn] = useState(demo.initialOn);
  const readoutId = useId();

  const state = on ? demo.state.on : demo.state.off;
  const Core = CORES[demo.kind];

  return (
    <div className="border border-edge bg-surface p-[clamp(18px,3vw,32px)]">
      <DemoPanel
        id={readoutId}
        title={demo.caption}
        label={state.label}
        readout={{ left: state.primary, right: state.note }}
        note={state.detail}
        action={
          <DemoButton onClick={() => setOn((prev) => !prev)} controls={readoutId}>
            {on ? demo.button.on : demo.button.off}
          </DemoButton>
        }
      >
        <Core on={on} />
      </DemoPanel>
    </div>
  );
}
