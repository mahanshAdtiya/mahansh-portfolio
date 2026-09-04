type SectionHeadingProps = {
  num: string;
  title: string;
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
