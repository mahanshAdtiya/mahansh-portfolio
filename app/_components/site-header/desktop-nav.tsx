import { NAV, SITE, CONTACT } from "@/lib/content";

/**
 * Server Component. The wide-viewport presentation of the header links.
 *
 * The <nav> element wraps only the six section anchors — the résumé is a
 * file download, not site navigation, so it sits outside <nav> while still
 * belonging to this component visually.
 */
export function DesktopNav() {
  return (
    <div className="hidden lg:flex flex-row items-center gap-6 font-mono text-eyebrow tracking-[.1em] uppercase whitespace-nowrap">
      <nav className="flex flex-row items-center gap-[clamp(12px,1.8vw,26px)]">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-muted hover:text-accent"
          >
            {item.num} {item.label}
          </a>
        ))}
      </nav>

      <a
        href={SITE.resume}
        download
        className="border border-heading rounded-pill px-3.5 py-2 hover:bg-heading hover:text-page"
      >
        {CONTACT.resumeLabel} <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
