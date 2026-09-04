import type { Role } from "@/lib/content";

/** Server-rendered contents of a tab button. */
export function RoleTabLabel({ role }: { role: Role }) {
  return (
    <>
      <span className="block">
        <span className="block font-display text-[clamp(20px,2.4vw,26px)] leading-[1.15]">
          {role.company}
        </span>
        <span className="mt-1.5 block font-mono text-eyebrow-sm tracking-[.12em] uppercase text-muted">
          {role.title}
        </span>
      </span>
      <span className="font-mono text-eyebrow-sm whitespace-nowrap text-muted">
        {role.years}
      </span>
    </>
  );
}
