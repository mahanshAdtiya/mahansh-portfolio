"use client";

import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";

const STAGGER_MS = 110;
const MAX_STAGGER_STEPS = 4;
const COUNT_MS = 1100;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const frames = new Set<number>();

    function countUp(scope: Element) {
      if (reduceMotion) return;

      scope.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const to = Number(el.dataset.count);
        if (!Number.isFinite(to)) return;

        const suffix = el.dataset.suffix ?? "";
        const start = performance.now();

        const step = (now: number) => {
          const progress = Math.min(1, (now - start) / COUNT_MS);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(to * eased) + suffix;
          if (progress < 1) frames.add(requestAnimationFrame(step));
        };

        frames.add(requestAnimationFrame(step));
      });
    }

    const targets = Array.from(root.children);
    targets.forEach((child) => child.setAttribute("data-reveal", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const step = Math.min(targets.indexOf(el), MAX_STAGGER_STEPS);
          el.style.animationDelay = `${step * STAGGER_MS}ms`;
          el.setAttribute("data-shown", "");
          countUp(el);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      frames.forEach(cancelAnimationFrame);
    };
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
