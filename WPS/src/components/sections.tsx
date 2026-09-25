import { Phone, Plus } from "lucide-react";
import { Btn, Eyebrow, Reveal, SectionHead } from "./ui";
import { processSteps, PHONE_DISPLAY, PHONE_TEL } from "../data/content";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* Marquee                                                             */
/* ------------------------------------------------------------------ */

export function Marquee({ items }: { items: string[] }) {
  const row = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((it, i) => (
        <span key={`${it}-${i}`} className="flex items-center">
          <span className="t-eyebrow px-6 text-[0.78rem] text-mut2">{it}</span>
          <span
            aria-hidden
            className="h-[5px] w-[5px] rounded-full"
            style={{ background: ["#6ea1ff", "#ff6fa5", "#ffb35c", "#a8e063"][i % 4] }}
          />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee overflow-hidden border-y border-[#1c1c1c] bg-[#0f0f0f] py-5">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export function ProcessSection({
  eyebrow = "The Process",
  title = "A simple process, done properly.",
  copy = "Four clear steps from first conversation to finished work — no jargon, no confusion.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="section" aria-labelledby="process-head">
      <div className="page-width">
        <SectionHead eyebrow={eyebrow} title={title} copy={copy} accent="#ffb35c" />
        <div className="mt-14">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="group grid gap-3 border-b border-[#202020] py-9 transition-colors duration-300 first:border-t hover:bg-[#111111] min-[820px]:grid-cols-[110px_1fr_1.05fr] min-[820px]:items-baseline min-[820px]:gap-8 min-[820px]:px-4">
                <p className="t-mono-num text-mut2 transition-colors duration-300 group-hover:text-warm">
                  / {s.n}
                </p>
                <h3 className="t-h3 text-fg" id={i === 0 ? "process-head" : undefined}>
                  {s.title}
                </h3>
                <p className="max-w-[440px] text-[0.95rem] leading-relaxed text-mut">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

export function CTASection({
  title = (
    <>
      Ready to Make Your Business <span className="text-gradient">Look Better Online?</span>
    </>
  ),
  copy = "Tell us what you're building and we'll help you turn it into a stronger digital presence.",
}: {
  title?: React.ReactNode;
  copy?: string;
}) {
  return (
    <section className="section" aria-labelledby="cta-head">
      <div className="page-width">
        <Reveal>
          <div className="relative overflow-hidden rounded-[16px] border border-[#262626] bg-[#121212] px-6 py-20 text-center min-[820px]:px-16 min-[820px]:py-28">
            {/* glow decor */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full opacity-[0.16] blur-3xl"
              style={{ background: "radial-gradient(circle, #6ea1ff, transparent 65%)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-48 -right-32 h-[460px] w-[460px] rounded-full opacity-[0.13] blur-3xl"
              style={{ background: "radial-gradient(circle, #ff6fa5, transparent 65%)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #6ea1ff66, #ff6fa566, #ffb35c66, transparent)",
              }}
            />
            <div className="relative mx-auto max-w-[900px]">
              <Eyebrow center accent="#a8e063">
                Get Started
              </Eyebrow>
              <h2 id="cta-head" className="t-h2 mt-6 text-fg">
                {title}
              </h2>
              <p className="t-lede mx-auto mt-7 max-w-[520px] text-mut">{copy}</p>
              <div className="cta-row mt-11 justify-center">
                <Btn to="/contact" arrow>
                  Get a Free Quote
                </Btn>
                <Btn href={PHONE_TEL} variant="secondary">
                  <Phone size={16} aria-hidden /> Call {PHONE_DISPLAY}
                </Btn>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-4">
      {items.map((f, i) => (
        <Reveal key={f.q} delay={i * 40}>
          <details className={cn("faq group border-b border-[#202020]", i === 0 && "border-t")}>
            <summary className="flex items-center justify-between gap-6 py-6 text-left">
              <span className="text-[1.05rem] font-bold tracking-[-0.01em] text-fg min-[820px]:text-[1.2rem]">
                {f.q}
              </span>
              <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-mut transition-colors group-hover:text-fg">
                <Plus size={16} aria-hidden />
              </span>
            </summary>
            <p className="max-w-[640px] pb-7 text-[0.95rem] leading-relaxed text-mut">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
