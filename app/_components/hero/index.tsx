import { HERO } from "@/lib/content";
import { Reveal } from "../reveal";
import { NowCard } from "./now-card";

export function Hero() {
  return (
    <section id="top">
      <Reveal className="mx-auto grid max-w-page items-center gap-[clamp(30px,5vh,44px)] px-gutter pt-[clamp(24px,4vh,40px)] lg:pt-0 lg:min-h-[72svh] lg:grid-cols-[1fr_min(40vw,400px)] lg:gap-14">
        <div>
          <div className="mb-[clamp(22px,6vh,64px)] flex flex-wrap gap-x-[clamp(18px,2.4vw,32px)] gap-y-2.5 font-mono text-[clamp(10px,2.6vw,11px)] tracking-[.16em] uppercase text-muted">
            {HERO.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <span className="text-accent">{HERO.metaAccent}</span>
          </div>

          <h1 className="max-w-[13em] lg:max-w-none">
            {HERO.headline}{" "}
            <em className="italic text-accent">{HERO.headlineEmphasis}</em>
          </h1>

          <div className="mt-[clamp(28px,7vh,72px)] flex flex-wrap items-end justify-between gap-7">
            <p className="max-w-[48ch] text-[clamp(14px,3.6vw,15px)]">
              {HERO.intro}
            </p>
          </div>
        </div>

        <NowCard />
      </Reveal>
    </section>
  );
}
