"use client";

import { useEffect, useRef, useState } from "react";
import {
  CORE,
  INITIAL_POSITIONS,
  VIEW,
  clampToCanvas,
  type Point,
} from "./graph-layout";

const DESKTOP = "(min-width: 48rem)";
const DRAG_THRESHOLD_PX = 4;
const RESET_MS = 460;

type Drag = {
  key: string;
  pointerId: number;
  startX: number;
  startY: number;
  origin: Point;
  rect: DOMRect;
  moved: boolean;
};

export function useNodeDrag(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [positions, setPositions] = useState(INITIAL_POSITIONS);
  const drag = useRef<Drag | null>(null);
  const resetFrame = useRef<number | null>(null);
  const suppressClick = useRef(false);

  function cancelReset() {
    if (resetFrame.current !== null) cancelAnimationFrame(resetFrame.current);
    resetFrame.current = null;
  }

  useEffect(() => cancelReset, []);

  function onPointerDown(event: React.PointerEvent, key: string) {
    if (event.button !== 0) return;
    cancelReset();
    if (!window.matchMedia(DESKTOP).matches) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    event.currentTarget.setPointerCapture(event.pointerId);

    drag.current = {
      key,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      origin: positions[key],
      rect,
      moved: false,
    };
  }

  function onPointerMove(event: React.PointerEvent) {
    const current = drag.current;
    if (!current || event.pointerId !== current.pointerId) return;

    const dx = event.clientX - current.startX;
    const dy = event.clientY - current.startY;

    if (!current.moved && Math.hypot(dx, dy) > DRAG_THRESHOLD_PX) {
      current.moved = true;
    }
    if (!current.moved) return;

    setPositions((prev) => ({
      ...prev,
      [current.key]: clampToCanvas({
        x: current.origin.x + (dx / current.rect.width) * VIEW.width,
        y: current.origin.y + (dy / current.rect.height) * VIEW.height,
      }),
    }));
  }

  function onPointerUp(event: React.PointerEvent) {
    const current = drag.current;
    if (!current || event.pointerId !== current.pointerId) return;
    suppressClick.current = current.moved;
    drag.current = null;
  }

  function consumeClickAfterDrag() {
    const suppressed = suppressClick.current;
    suppressClick.current = false;
    return suppressed;
  }

  function reset() {
    cancelReset();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPositions(INITIAL_POSITIONS);
      return;
    }

    const from = positions;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / RESET_MS);
      const eased = 1 - Math.pow(1 - progress, 3);

      if (progress === 1) {
        setPositions(INITIAL_POSITIONS);
        resetFrame.current = null;
        return;
      }

      setPositions(
        Object.fromEntries(
          Object.keys(INITIAL_POSITIONS).map((key) => [
            key,
            {
              x: from[key].x + (INITIAL_POSITIONS[key].x - from[key].x) * eased,
              y: from[key].y + (INITIAL_POSITIONS[key].y - from[key].y) * eased,
            },
          ]),
        ),
      );
      resetFrame.current = requestAnimationFrame(step);
    };

    resetFrame.current = requestAnimationFrame(step);
  }

  const isMoved = Object.keys(INITIAL_POSITIONS).some(
    (key) =>
      positions[key].x !== INITIAL_POSITIONS[key].x ||
      positions[key].y !== INITIAL_POSITIONS[key].y,
  );

  return {
    positions,
    core: CORE,
    isMoved,
    reset,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    consumeClickAfterDrag,
  };
}
