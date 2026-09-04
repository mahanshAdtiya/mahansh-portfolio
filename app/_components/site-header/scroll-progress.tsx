"use client";

import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let frame = 0;

    function paint() {
      frame = 0;
      if (!bar) return;

      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
      const max = scrollHeight - clientHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;

      bar.style.transform = `scaleX(${ratio})`;
    }

    function schedule() {
      frame ||= requestAnimationFrame(paint);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    paint();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-60 h-0.5"
    >
      <div
        ref={barRef}
        style={{ transform: "scaleX(0)" }}
        className="h-full origin-left bg-accent"
      />
    </div>
  );
}
