"use client";

import { Fragment, useEffect, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const DESKTOP = "(min-width: 64rem)";

type RoleTabsProps = {
  items: {
    id: string;
    label: React.ReactNode;
    panel: React.ReactNode;
  }[];
};

export function RoleTabs({ items }: RoleTabsProps) {
  const [open, setOpen] = useState<number | null>(null);

  /**
   * The one place a media query genuinely has to be in JavaScript: which
   * panel starts open is state, not layout, and CSS cannot set state.
   * Mobile opens collapsed like an accordion; desktop needs a panel in the
   * second column or half the section is empty on arrival.
   *
   * useLayoutEffect, so the desktop panel is open before the first paint
   * rather than popping in after it. The layout itself is still pure CSS —
   * only the starting value depends on width.
   */
  useIsomorphicLayoutEffect(() => {
    const query = window.matchMedia(DESKTOP);

    // Desktop always keeps one role open, or the second column sits empty.
    // Mobile starts fully collapsed, like the design's accordion. Re-run on
    // change so resizing or rotating into desktop opens the first role.
    const sync = () =>
      setOpen((current) => (query.matches && current === null ? 0 : current));

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Clicking the open role collapses it — but only where collapsing makes
  // sense. On desktop that would blank the panel column, so it stays open.
  function handleClick(index: number) {
    const isDesktop = window.matchMedia(DESKTOP).matches;
    setOpen((current) => (current === index && !isDesktop ? null : index));
  }

  return (
    <div className="grid items-start gap-0.5 lg:grid-cols-[minmax(240px,0.85fr)_minmax(0,1.6fr)] lg:grid-rows-[auto_auto_auto_1fr] lg:gap-x-[clamp(24px,4vw,64px)]">
      {items.map((item, i) => {
        const on = i === open;

        return (
          <Fragment key={item.id}>
            <button
              type="button"
              aria-expanded={on}
              aria-controls={`role-panel-${item.id}`}
              onClick={() => handleClick(i)}
              data-theme={on ? "dark" : undefined}
              className={`flex min-h-11 items-baseline justify-between gap-3.5 border bg-page p-[18px] text-left text-heading transition-[background-color,border-color] lg:col-start-1 lg:self-start ${
                on ? "border-page" : "border-edge"
              }`}
            >
              {item.label}
            </button>

            <div
              id={`role-panel-${item.id}`}
              inert={!on}
              aria-hidden={!on}
              className={`grid transition-[grid-template-rows,opacity] duration-[420ms] ease-[cubic-bezier(.16,.84,.24,1)] lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:self-start ${
                on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-[clamp(22px,3vh,32px)] lg:border-t lg:border-heading">
                  {item.panel}
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
