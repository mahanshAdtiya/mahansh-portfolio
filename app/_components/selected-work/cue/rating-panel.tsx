"use client";

import { useId, useState } from "react";

import type { RatingPanel as RatingPanelData } from "@/lib/content";
import { DemoButton } from "../demo-button";
import { DemoPanel } from "../demo-panel";

const MAX = 5;

export function RatingPanel({ data }: { data: RatingPanelData }) {
  const [rating, setRating] = useState(data.initial);
  const [favourite, setFavourite] = useState(data.favourite.initial);
  const readoutId = useId();

  return (
    <DemoPanel
      id={readoutId}
      title={data.title}
      readout={{ left: data.labels[rating], right: `${rating} / ${MAX}` }}
      note={data.note}
      action={
        <DemoButton
          active={favourite}
          pressed={favourite}
          onClick={() => setFavourite((current) => !current)}
        >
          {favourite ? data.favourite.on : data.favourite.off}
        </DemoButton>
      }
    >
      <div className="mb-5 flex gap-1.5">
        {Array.from({ length: MAX }, (_, i) => {
          const filled = i < rating;

          return (
            <button
              key={i}
              type="button"
              data-sound="click"
              aria-label={data.labels[i + 1]}
              aria-pressed={filled}
              aria-controls={readoutId}
              onClick={() => setRating(i + 1)}
              className={`min-h-14 min-w-0 flex-1 border text-[22px] leading-none transition-[background-color,border-color,color] duration-[260ms] ${
                filled
                  ? "border-accent bg-well text-accent"
                  : "border-edge bg-transparent text-muted hover:border-edge-strong"
              }`}
            >
              <span aria-hidden="true">{filled ? "★" : "☆"}</span>
            </button>
          );
        })}
      </div>
    </DemoPanel>
  );
}
