"use client";

import { useEffect, useRef, useState } from "react";

export function MobileMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      const root = rootRef.current;
      if (root && !root.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        className="min-h-11 rounded-pill border border-heading px-3.5 font-mono text-eyebrow-sm tracking-[.12em] uppercase hover:bg-heading hover:text-page"
      >
        {open ? "Close ✕" : "Menu ≡"}
      </button>

      {open && (
        <nav
          id="mobile-menu-panel"
          onClick={() => setOpen(false)}
          className="absolute top-[calc(100%+8px)] right-gutter grid w-[min(280px,calc(100vw-32px))] overflow-hidden border border-edge-strong bg-page font-mono text-[12px] tracking-[.08em] uppercase shadow-[0_26px_50px_-28px_rgb(26_20_20/0.45)]"
        >
          <div className="border-b border-edge-strong bg-surface px-[18px] pt-3.5 pb-3 text-eyebrow-sm text-muted">
            Sections
          </div>
          {children}
        </nav>
      )}
    </div>
  );
}
