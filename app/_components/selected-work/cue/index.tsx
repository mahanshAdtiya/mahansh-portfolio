"use client";

import { useRef, useState } from "react";

import type { CueTab, TabsDemo } from "@/lib/content";
import { ProgressPanel } from "./progress-panel";
import { RatingPanel } from "./rating-panel";
import { RewatchPanel } from "./rewatch-panel";
import { SharedPanel } from "./shared-panel";

/** `tab.id` narrows `tab.panel`, so each panel gets a fully typed payload. */
function panelFor(tab: CueTab) {
  switch (tab.id) {
    case "progress":
      return <ProgressPanel data={tab.panel} />;
    case "shared":
      return <SharedPanel data={tab.panel} />;
    case "rewatch":
      return <RewatchPanel data={tab.panel} />;
    case "ratings":
      return <RatingPanel data={tab.panel} />;
  }
}

export function CueDemo({ demo }: { demo: TabsDemo }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const last = demo.tabs.length - 1;

  /** Arrow keys move between tabs; Tab itself moves out to the panel. */
  function handleKeyDown(event: React.KeyboardEvent) {
    const next = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }[event.key];

    if (next === undefined) return;

    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="border border-edge bg-surface p-[clamp(18px,3vw,32px)]">
      <p className="mb-3.5 font-mono text-eyebrow-sm tracking-[.14em] uppercase text-muted">
        {demo.caption}
      </p>

      <div
        role="tablist"
        aria-label={demo.caption}
        onKeyDown={handleKeyDown}
        className="mb-[26px] grid grid-cols-[repeat(auto-fit,minmax(min(50%,110px),1fr))] gap-[5px]"
      >
        {demo.tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(node) => {
              tabs.current[i] = node;
            }}
            type="button"
            role="tab"
            id={`cue-tab-${tab.id}`}
            data-sound="click"
            aria-selected={i === active}
            aria-controls={`cue-panel-${tab.id}`}
            /* Roving tabindex: the tablist is one stop, not four. */
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`min-h-11 border px-3 py-[11px] font-mono text-eyebrow-sm uppercase transition-[color,border-color,background-color] duration-[260ms] ${
              i === active
                ? "border-accent bg-well text-accent"
                : "border-edge bg-transparent text-muted hover:border-edge-strong hover:text-heading"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Every panel stays mounted so its state survives a tab switch. */}
      <div className="min-h-[300px]">
        {demo.tabs.map((tab, i) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`cue-panel-${tab.id}`}
            aria-labelledby={`cue-tab-${tab.id}`}
            hidden={i !== active}
            inert={i !== active}
          >
            {panelFor(tab)}
          </div>
        ))}
      </div>
    </div>
  );
}
