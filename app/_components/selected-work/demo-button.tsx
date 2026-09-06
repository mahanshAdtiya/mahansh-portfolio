export function DemoButton({
  onClick,
  controls,
  pressed,
  active,
  children,
}: {
  onClick: () => void;
  controls?: string;
  pressed?: boolean;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-sound="click"
      aria-controls={controls}
      aria-pressed={pressed}
      className={`min-h-11 rounded-pill border px-3.5 py-3 font-mono text-eyebrow-sm uppercase hover:border-accent hover:text-accent ${
        active ? "border-accent text-accent" : "border-edge-strong text-heading"
      }`}
    >
      {children}
    </button>
  );
}
