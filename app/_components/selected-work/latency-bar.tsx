export function LatencyBar({ on }: { on: boolean }) {
  return (
    <div className="mb-2.5 h-2.5 overflow-hidden bg-well">
      <div
        className={`h-full bg-accent transition-[width] duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] ${
          on ? "w-[30%]" : "w-full"
        }`}
      />
    </div>
  );
}
