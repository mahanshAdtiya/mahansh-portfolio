const TOTAL = 48;
const KEPT_WHEN_RETRIEVING = 14;

const SHADES = ["bg-accent", "bg-accent/85", "bg-accent/70"];

export function TokenGrid({ on }: { on: boolean }) {
  const kept = on ? KEPT_WHEN_RETRIEVING : TOTAL;

  return (
    <ul
      aria-hidden="true"
      className="mb-4 grid grid-cols-12 gap-1"
    >
      {Array.from({ length: TOTAL }, (_, i) => (
        <li
          key={i}
          className={`aspect-square transition-colors duration-[400ms] ${
            i < kept ? SHADES[i % 3] : "bg-well"
          }`}
        />
      ))}
    </ul>
  );
}
