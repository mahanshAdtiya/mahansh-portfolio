import { HERO } from "@/lib/content";

export function NowCard() {
  return (
    <div className="border border-edge-strong bg-surface px-[18px] py-3.5 opacity-[.82] lg:px-[clamp(20px,2.2vw,26px)] lg:py-[clamp(18px,2vw,24px)] lg:opacity-100">
      {HERO.cards.map((card, i) => (
        <div
          key={card.label}
          className={`grid grid-cols-[68px_1fr] items-baseline gap-[clamp(12px,3vw,26px)] border-b py-4 lg:grid-cols-[84px_1fr] ${
            i === HERO.cards.length - 1 ? "border-transparent" : "border-edge-strong"
          }`}     
        >
          <span className="font-mono text-eyebrow-sm tracking-[.16em] uppercase text-muted">
            {card.label}
          </span>

          <div>
            {card.href ? (
              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noreferrer" : undefined}
                className="text-[clamp(15px,3.6vw,17px)] leading-[1.4] text-accent border-b border-accent/40"
              >
                {card.title}
                {card.external && (
                  <>
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </>
                )}
              </a>
            ) : (
              <div className="text-[clamp(15px,3.6vw,17px)] leading-[1.4]">
                {card.title}
              </div>
            )}
            <div className="mt-[5px] font-mono text-[11px] leading-[1.6] text-muted">
              {card.detail}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
