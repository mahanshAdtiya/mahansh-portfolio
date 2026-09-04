"use client";

import { useEffect, useRef, useState } from "react";
import {
  CORE,
  INITIAL_POSITIONS,
  VIEW,
  clampToCanvas,
  type Point,
} from "./graph-layout";

/** Below this the graph is a stacked list, where coordinates mean nothing. */
const DESKTOP = "(min-width: 48rem)";
/** Movement under this reads as a click, not a drag. */
const DRAG_THRESHOLD_PX = 4;
const RESET_MS = 460;

type Drag = {
  key: string;
  pointerId: number;
  startX: number;
  startY: number;
  origin: Point;
  /** Cached so a resize mid-drag cannot skew the mapping. */
  rect: DOMRect;
  moved: boolean;
};

export function useNodeDrag(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [positions, setPositions] = useState(INITIAL_POSITIONS);
  const drag = useRef<Drag | null>(null);
  const resetFrame = useRef<number | null>(null);
  /** Survives pointerup so the click that follows a drag can be ignored. */
  const suppressClick = useRef(false);

  function cancelReset() {
    if (resetFrame.current !== null) cancelAnimationFrame(resetFrame.current);
    resetFrame.current = null;
  }

  useEffect(() => cancelReset, []);

  function onPointerDown(event: React.PointerEvent, key: string) {
    if (event.button !== 0) return;
    // Grabbing a card mid-reset should take over, not fight the tween.
    cancelReset();
    if (!window.matchMedia(DESKTOP).matches) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Capture keeps events coming to this element even when the pointer
    // outruns it — without it, a fast drag simply stops following.
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

  /** True when the click should be swallowed because it ended a drag. */
  function consumeClickAfterDrag() {
    const suppressed = suppressClick.current;
    suppressClick.current = false;
    return suppressed;
  }

  /**
   * Tweened rather than transitioned in CSS: the connector paths are derived
   * from this same state, so animating the state moves the cards and the
   * edges together. A CSS transition on left/top would glide the cards while
   * the paths snapped.
   */
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
