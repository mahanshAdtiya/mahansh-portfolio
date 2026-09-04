"use client";

import { Fragment, useEffect, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const DESKTOP = "(min-width: 64rem)";

type RoleTabsProps = {
  items: {
    id: string;
    label: React.ReactNode;
    labelActive: React.ReactNode;
    panel: React.ReactNode;
  }[];
};

export function RoleTabs({ items }: RoleTabsProps) {
  const [open, setOpen] = useState<number | null>(null);

  useIsomorphicLayoutEffect(() => {
    const query = window.matchMedia(DESKTOP);
    const sync = () =>
      setOpen((current) => (query.matches && current === null ? 0 : current));

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

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
              className={`group/role flex min-h-11 items-baseline justify-between gap-3.5 border bg-page p-[18px] text-left text-heading transition-[background-color,border-color] lg:col-start-1 lg:self-start ${
                on
                  ? "border-page"
                  : "border-edge hover:border-heading hover:bg-heading"
              }`}
            >
              {on ? item.labelActive : item.label}
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
