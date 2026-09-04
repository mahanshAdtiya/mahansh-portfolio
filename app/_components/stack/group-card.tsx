import type { StackGroup } from "@/lib/content";

/**
 * Purely presentational. The whole card is the hover target, so the
 * interaction handlers live on the wrapper in stack-graph.tsx.
 *
 * Not a <button>: the design's graph nodes are focusable divs, and a button
 * may only contain phrasing content — a <ul> of chips inside one makes the
 * browser treat the card as a single atomic control.
 */
export function GroupCard({
  group,
  active,
}: {
  group: StackGroup;
  active: boolean;
}) {
  return (
    <div
      className={`h-full border p-4 transition-[background-color,border-color] ${
        active ? "border-accent bg-accent/[.08]" : "border-edge bg-transparent"
      }`}
    >
      <div className="mb-3.5 flex items-center gap-3.5">
        <span
          aria-hidden="true"
          className="flex size-[42px] flex-none items-center justify-center rounded-xl bg-accent [box-shadow:0_0_0_6px_color-mix(in_oklab,var(--accent)_10%,transparent),0_8px_22px_-10px_color-mix(in_oklab,var(--accent)_60%,transparent)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={group.icon} alt="" width={22} height={22} />
        </span>

        <div className="flex min-w-0 flex-1 items-baseline justify-between gap-2.5">
          <span className="font-display text-xl leading-[1.15]">
            {group.label}
          </span>
          <span className="font-mono text-eyebrow-sm whitespace-nowrap text-muted">
            {group.skills.length} skills
          </span>
        </div>
      </div>

      <ul className="flex flex-wrap items-center gap-2.5">
        {group.skills.map((skill) =>
          skill.icon ? (
            /* Bare logo, no box — the design only borders text chips, and a
               32px bordered square per skill made every card outgrow its
               slot in the graph. */
            <li key={skill.label} className="group/chip relative flex">
              <span
                aria-hidden="true"
                style={{
                  maskImage: `url(${skill.icon})`,
                  WebkitMaskImage: `url(${skill.icon})`,
                }}
                className="size-[22px] flex-none bg-muted [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
              />
              <span className="sr-only">{skill.label}</span>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 border border-edge-strong bg-page px-2 py-1 font-mono text-eyebrow-sm tracking-[.06em] whitespace-nowrap text-heading opacity-0 transition-opacity group-hover/chip:opacity-100"
              >
                {skill.label}
              </span>
            </li>
          ) : (
            <li
              key={skill.label}
              className="border border-edge px-2 py-[5px] font-mono text-eyebrow-sm tracking-[.06em] uppercase text-muted"
            >
              {skill.label}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
