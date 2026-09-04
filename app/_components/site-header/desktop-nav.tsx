import { NAV, SITE, CONTACT } from "@/lib/content";
import { UnderlineReveal } from "../underline-reveal";

export function DesktopNav() {
  return (
    <div className="hidden lg:flex flex-row items-center gap-6 font-mono text-eyebrow tracking-[.1em] uppercase whitespace-nowrap">
      <nav className="flex flex-row items-center gap-[clamp(12px,1.8vw,26px)]">
        {NAV.map((item) => (
          <UnderlineReveal
            key={item.href}
            href={item.href}
            data-sound="click"
            className="pb-1 text-muted hover:text-accent"
          >
            {item.num} {item.label}
          </UnderlineReveal>
        ))}
      </nav>

      <a
        href={SITE.resume}
        download
        data-sound="click"
        className="border border-heading rounded-pill px-3.5 py-2 hover:bg-heading hover:text-page"
      >
        {CONTACT.resumeLabel} <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
