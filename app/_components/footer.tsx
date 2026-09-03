import { FOOTER } from "@/lib/content";
import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer
      data-theme="dark"
      className="bg-page text-heading pt-[clamp(64px,12vh,130px)] pb-[clamp(32px,5vh,56px)]"
    >
      <Reveal className="mx-auto max-w-page px-gutter">
        <div className="relative overflow-hidden border-t border-edge">
          <div
            aria-hidden="true"
            className="mt-[clamp(24px,4vh,44px)] mb-[-0.16em] text-center font-display text-[21.5vw] leading-[0.74] tracking-[-0.035em] whitespace-nowrap text-watermark select-none pointer-events-none"
          >
            {FOOTER.watermark}
          </div>

          <div className="relative z-[2] flex flex-wrap justify-between gap-4 border-t border-edge pt-5 font-mono text-eyebrow-sm tracking-[.12em] uppercase text-faint">
            <span>{FOOTER.copyright}</span>
            <span>{FOOTER.education}</span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
