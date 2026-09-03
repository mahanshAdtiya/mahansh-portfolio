type SectionHeadingProps = {
  /** Two-digit section number, e.g. "01" */
  num: string;
  title: string;
  /**
   * Spacing below the heading, which differs per section in the design.
   * Deliberately not defaulted: a default `mb-*` here could not be
   * reliably overridden from the caller, since equal-specificity classes
   * are resolved by stylesheet order, not by className order.
   */
  className?: string;
};

export function SectionHeading({ num, title, className = "" }: SectionHeadingProps) {
  return (
    <div
      className={`flex items-baseline gap-3.5 border-b border-edge pb-3.5 ${className}`}
    >
      <span className="font-mono text-eyebrow text-accent">{num}</span>
      <h2>{title}</h2>
    </div>
  );
}
