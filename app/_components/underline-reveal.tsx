import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const RULE =
  "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-current transition-transform duration-[450ms] ease-[cubic-bezier(0.16,0.84,0.24,1)] group-hover/underline:origin-left group-hover/underline:scale-x-100 group-focus-visible/underline:origin-left group-focus-visible/underline:scale-x-100";

type UnderlineRevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function UnderlineReveal<T extends ElementType = "a">({
  as,
  children,
  className = "",
  ...rest
}: UnderlineRevealProps<T>) {
  const Tag: ElementType = as ?? "a";

  return (
    <Tag
      className={`group/underline relative inline-flex ${className}`}
      {...rest}
    >
      {children}
      <span aria-hidden="true" className={RULE} />
    </Tag>
  );
}
