"use client";

import { useId, useState } from "react";

import type { ProgressPanel as ProgressPanelData } from "@/lib/content";
import { DemoButton } from "../demo-button";
import { DemoPanel } from "../demo-panel";

export function ProgressPanel({ data }: { data: ProgressPanelData }) {
  const [watched, setWatched] = useState(data.initial);
  const readoutId = useId();

  const done = watched >= data.total;

  return (
    <DemoPanel
      id={readoutId}
      title={data.title}
      readout={{
        left: watched === 0 ? data.status.idle : done ? data.status.done : data.status.partial,
        right: `${watched} / ${data.total} episodes`,
      }}
      note={done ? data.note.done : data.note.partial}
      action={
        <DemoButton
          controls={readoutId}
          onClick={() =>
            setWatched((current) => (current >= data.total ? 0 : current + 1))
          }
        >
          {done ? data.button.reset : data.button.mark}
        </DemoButton>
      }
    >
      {/* Decorative: the readout already states the count in words. */}
      <ul aria-hidden="true" className="mb-4 grid grid-cols-8 gap-[5px]">
        {Array.from({ length: data.total }, (_, i) => (
          <li
            key={i}
            className={`aspect-[2/3] border transition-[background-color,border-color] duration-[320ms] ${
              i < watched ? "border-accent bg-accent" : "border-edge bg-well"
            }`}
          />
        ))}
      </ul>

      <div className="mb-2.5 h-2.5 overflow-hidden bg-well">
        {/* A width Tailwind cannot know at build time — 17 possible values. */}
        <div
          className="h-full bg-accent transition-[width] duration-[600ms] ease-[cubic-bezier(.2,.8,.2,1)]"
          style={{ width: `${(watched / data.total) * 100}%` }}
        />
      </div>
    </DemoPanel>
  );
}
