"use client";

import { useId, useState } from "react";

import type { SharedPanel as SharedPanelData } from "@/lib/content";
import { DemoButton } from "../demo-button";
import { DemoPanel } from "../demo-panel";

export function SharedPanel({ data }: { data: SharedPanelData }) {
  const [shared, setShared] = useState(true);
  const readoutId = useId();

  /** Index 0 is always the visitor; the rest appear only once shared. */
  const watchers = shared ? data.watchers : data.watchers.slice(0, 1);

  return (
    <DemoPanel
      id={readoutId}
      title={shared ? data.mode.on : data.mode.off}
      readout={{
        left: data.title,
        right: shared ? data.count.on : data.count.off,
      }}
      note={shared ? data.note.on : data.note.off}
      action={
        <DemoButton
          controls={readoutId}
          pressed={shared}
          onClick={() => setShared((current) => !current)}
        >
          {shared ? data.button.on : data.button.off}
        </DemoButton>
      }
    >
      <ul className="mb-[18px] grid gap-3.5">
        {watchers.map((watcher, i) => (
          <li key={watcher.name}>
            <div
              className={`mb-[7px] flex justify-between gap-3 font-mono text-[11px] ${
                i === 0 ? "text-body" : "text-muted"
              }`}
            >
              <span>{watcher.name}</span>
              <span>{watcher.at}</span>
            </div>

            <div className="h-2 overflow-hidden bg-well">
              <div
                className={`h-full transition-[width] duration-[600ms] ease-[cubic-bezier(.2,.8,.2,1)] ${
                  i === 0 ? "bg-accent" : "bg-accent/45"
                }`}
                style={{ width: `${watcher.percent}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </DemoPanel>
  );
}
