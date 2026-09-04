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

export const NODE_WIDTH: Record<string, string> = {
  foundations: "md:w-[38%] lg:w-[30%]",
  frontend: "md:w-[30%] lg:w-[25%]",
  backend: "md:w-[30%] lg:w-[25%]",
  database: "md:w-[30%] lg:w-[25%]",
  cloud: "md:w-[30%] lg:w-[25%]",
};

const MARGIN = { x: 90, y: 70 };

export function clampToCanvas({ x, y }: Point): Point {
  return {
    x: Math.min(Math.max(x, MARGIN.x), VIEW.width - MARGIN.x),
    y: Math.min(Math.max(y, MARGIN.y), VIEW.height - MARGIN.y),
  };
}

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
