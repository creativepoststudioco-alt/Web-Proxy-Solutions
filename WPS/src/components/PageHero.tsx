import type { ReactNode } from "react";
import { Btn, Eyebrow, Reveal } from "./ui";
import { cn } from "../utils/cn";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  accent?: string;
  image?: { src: string; alt: string };
  chips?: { label: string; accent?: string }[];
  primary?: { label: string; to?: string; href?: string };
  secondary?: { label: string; to?: string; href?: string };
};

export function PageHero({
  eyebrow,
  title,
  copy,
  accent = "#6ea1ff",
  image,
  chips,
  primary = { label: "Get a Free Quote", to: "/contact" },
  secondary,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[150px] min-[1080px]:pt-[190px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.1] blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 65%)` }}
      />
      <div className="page-width relative pb-16 min-[1080px]:pb-24">
        <div className={cn("grid items-center gap-12", image && "min-[1080px]:grid-cols-[1.05fr_0.95fr] min-[1080px]:gap-16")}>
          <div>
            <Reveal>
              <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 text-[clamp(2.85rem,6.6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-fg">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="t-lede mt-7 max-w-[520px] text-mut">{copy}</p>
            </Reveal>
            {(primary || secondary) && (
              <Reveal delay={260}>
                <div className="cta-row mt-10">
                  {primary && (
                    <Btn to={primary.to} href={primary.href} arrow>
                      {primary.label}
                    </Btn>
                  )}
                  {secondary && (
                    <Btn to={secondary.to} href={secondary.href} variant="secondary">
                      {secondary.label}
                    </Btn>
                  )}
                </div>
              </Reveal>
            )}
            {chips && (
              <Reveal delay={340}>
                <div className="mt-9 flex flex-wrap gap-2.5">
                  {chips.map((c) => (
                    <span key={c.label} className="chip" style={{ "--chip-accent": c.accent ?? accent } as React.CSSProperties}>
                      <span className="dot" aria-hidden /> {c.label}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {image && (
            <Reveal delay={200} mask>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[20px] opacity-[0.14] blur-2xl"
                  style={{ background: `linear-gradient(135deg, ${accent}, transparent 60%)` }}
                />
                <div className="card relative overflow-hidden">
                  <div className="aspect-[4/3] min-[1080px]:aspect-[5/4]">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(200deg, transparent 55%, rgba(13,13,13,0.55))" }}
                  />
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
