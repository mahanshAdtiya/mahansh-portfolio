import type { Role } from "@/lib/content";

const SLIDE = "transition-[translate,opacity,color]";

/**
 * Server-rendered contents of a role button.
 *
 * Hover behaviour differs by state, so the classes are picked here rather
 * than in CSS: an unselected card previews the dark treatment and reduces to
 * just the company name, while a selected one spreads its parts apart.
 */
export function RoleTabLabel({ role, active }: { role: Role; active: boolean }) {
  return (
    <>
      <span className="block">
        <span
          className={`block font-display text-[clamp(20px,2.4vw,26px)] leading-[1.15] ${SLIDE} group-hover/role:translate-x-2 ${
            active ? "" : "group-hover/role:text-page"
          }`}
        >
          {role.company}
        </span>

        <span
          className={`mt-1.5 block font-mono text-eyebrow-sm tracking-[.12em] uppercase text-muted ${SLIDE} ${
            active ? "group-hover/role:translate-x-2" : "group-hover/role:opacity-0"
          }`}
        >
          {role.title}
        </span>
      </span>

      {/* inline-block: translate does not apply to non-replaced inline boxes. */}
      <span
        className={`inline-block font-mono text-eyebrow-sm whitespace-nowrap text-muted ${SLIDE} ${
          active ? "group-hover/role:-translate-x-2" : "group-hover/role:opacity-0"
        }`}
      >
        {role.years}
      </span>
    </>
  );
}
