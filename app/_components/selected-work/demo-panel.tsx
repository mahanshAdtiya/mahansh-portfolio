export function DemoPanel({
  id,
  title,
  action,
  label,
  children,
  readout,
  note,
}: {
  id?: string;
  title: string;
  action?: React.ReactNode;
  label?: string;
  children: React.ReactNode;
  readout: { left: string; right: string };
  note: string;
}) {
  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3.5">
        <span className="font-mono text-eyebrow-sm tracking-[.14em] uppercase text-muted">
          {title}
        </span>
        {action}
      </div>

      <div id={id} aria-live="polite">
        {label && (
          <p className="mb-2.5 font-mono text-eyebrow tracking-[.1em] uppercase text-accent">
            {label}
          </p>
        )}

        {children}

        <div className="flex flex-wrap justify-between gap-3 font-mono text-[11px] text-muted">
          <span>{readout.left}</span>
          <span>{readout.right}</span>
        </div>

        <p className="mt-[26px] border-t border-edge pt-5 text-[13px] leading-[1.7] text-faint">
          {note}
        </p>
      </div>
    </>
  );
}
