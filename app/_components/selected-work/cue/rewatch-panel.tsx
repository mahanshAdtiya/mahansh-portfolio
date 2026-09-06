"use client";

import { useId, useState } from "react";

import type { RewatchPanel as RewatchPanelData } from "@/lib/content";
import { DemoPanel } from "../demo-panel";

export function RewatchPanel({ data }: { data: RewatchPanelData }) {
  const [selected, setSelected] = useState(0);
  const readoutId = useId();

  const pass = data.passes[selected];

  return (
    <DemoPanel
      id={readoutId}
      title={data.title}
      readout={{
        left: `Rated ${pass.rating} / 5`,
        right: `Pass ${selected + 1} of ${data.passes.length}`,
      }}
      note={pass.note}
    >
      <div className="mb-[18px] grid gap-[5px]">
        {data.passes.map((item, i) => (
          <button
            key={item.label}
            type="button"
            data-sound="click"
            aria-pressed={i === selected}
            aria-controls={readoutId}
            onClick={() => setSelected(i)}
            className={`flex min-h-11 items-baseline justify-between gap-3 border px-4 py-3.5 text-left transition-[background-color,border-color] ${
              i === selected
                ? "border-accent bg-well"
                : "border-edge bg-transparent hover:border-edge-strong"
            }`}
          >
            <span className="font-display text-[19px] text-heading">
              {item.label}
            </span>
            <span
              className={`font-mono text-[11px] whitespace-nowrap ${
                i === selected ? "text-accent" : "text-muted"
              }`}
            >
              {item.date}
            </span>
          </button>
        ))}
      </div>
    </DemoPanel>
  );
}
