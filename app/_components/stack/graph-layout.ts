/**
 * Node positions in the SVG's own 1000×620 coordinate space, so the cards and
 * the connectors share one system. Rendered as percentages, which keeps the
 * graph fluid and lets the initial layout be server-rendered.
 */
export type Point = { x: number; y: number };

export const VIEW = { width: 1000, height: 620 };

export const CORE: Point = { x: 500, y: 332 };

export const INITIAL_POSITIONS: Record<string, Point> = {
  foundations: { x: 500, y: 87 },
  frontend: { x: 150, y: 198 },
  backend: { x: 150, y: 471 },
  database: { x: 850, y: 198 },
  cloud: { x: 850, y: 471 },
};

/** Foundations sits alone on the top row, so it can afford to be wider. */
export const NODE_WIDTH: Record<string, string> = {
  foundations: "md:w-[38%] lg:w-[30%]",
  frontend: "md:w-[30%] lg:w-[25%]",
  backend: "md:w-[30%] lg:w-[25%]",
  database: "md:w-[30%] lg:w-[25%]",
  cloud: "md:w-[30%] lg:w-[25%]",
};

/** Keeps a dragged card from being pushed off the canvas entirely. */
const MARGIN = { x: 90, y: 70 };

export function clampToCanvas({ x, y }: Point): Point {
  return {
    x: Math.min(Math.max(x, MARGIN.x), VIEW.width - MARGIN.x),
    y: Math.min(Math.max(y, MARGIN.y), VIEW.height - MARGIN.y),
  };
}

/**
 * A cubic bezier from a node to the core. Control points are pulled halfway
 * along the horizontal gap, which gives a gentle S for side nodes and
 * degenerates to a straight line for ones directly above or below.
 *
 * Both ends sit at element centres; the cards are painted over the SVG, so
 * the line appears to start at their edges.
 */
export function edgePath(from: Point, to: Point): string {
  const bend = (to.x - from.x) / 2;
  return `M ${from.x} ${from.y} C ${from.x + bend} ${from.y}, ${to.x - bend} ${to.y}, ${to.x} ${to.y}`;
}

export function toPercent({ x, y }: Point) {
  return {
    left: `${(x / VIEW.width) * 100}%`,
    top: `${(y / VIEW.height) * 100}%`,
  };
}
