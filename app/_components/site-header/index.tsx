import { NAV, SITE, CONTACT } from "@/lib/content";
import { Wordmark } from "./wordmark";
import { DesktopNav } from "./desktop-nav";
import { MobileMenu } from "./mobile-menu";
import { ScrollProgress } from "./scroll-progress";

export function SiteHeader() {
  return (
    <>
      <ScrollProgress />

      <header className="fixed inset-x-0 top-0 z-50 h-header border-b border-edge bg-page/92 backdrop-blur-[14px]">
        <div className="max-w-page mx-auto px-gutter h-full flex flex-row justify-between items-center gap-5">
          <Wordmark />

          <DesktopNav />

          <MobileMenu>
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center justify-between gap-3 border-b border-hairline px-[18px] py-[13px] text-faint hover:bg-surface hover:text-accent"
              >
                <span>
                  {item.num} {item.label}
                </span>
                <span aria-hidden="true" className="text-edge-strong">
                  →
                </span>
              </a>
            ))}

            <a
              href={SITE.resume}
              download
              data-sound="click"
              className="flex min-h-11 items-center justify-between gap-3 border-t border-edge-strong bg-surface px-[18px] py-[15px] text-accent hover:bg-accent hover:text-on-accent"
            >
              <span>{CONTACT.resumeLabel}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </MobileMenu>
        </div>
      </header>
    </>
  );
}
