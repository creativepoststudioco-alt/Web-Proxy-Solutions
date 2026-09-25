import { useMemo, useState } from "react";
import { Eyebrow, Reveal } from "../components/ui";
import { ProjectCard } from "../components/cards";
import { CTASection } from "../components/sections";
import { projects } from "../data/content";
import { cn } from "../utils/cn";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.industry === filter)),
    [filter],
  );

  return (
    <>
      <section className="relative overflow-hidden pt-[150px] min-[1080px]:pt-[190px]" aria-labelledby="work-title">
        <div
          aria-hidden
          className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full opacity-[0.09] blur-3xl"
          style={{ background: "radial-gradient(circle, #b297ff, transparent 65%)" }}
        />
        <div className="page-width relative pb-14">
          <Reveal>
            <Eyebrow accent="#b297ff">Portfolio</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 id="work-title" className="mt-6 max-w-[900px] text-[clamp(2.9rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.068em] text-fg">
              Work that works for <span className="text-gradient">local business.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="t-lede mt-7 max-w-[540px] text-mut">
              Websites designed and built for service businesses across cleaning, removals,
              construction, painting, healthcare and support services.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-12 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by industry">
              {filters.map((f) => {
                const active = f === filter;
                const count = f === "All" ? projects.length : projects.filter((p) => p.industry === f).length;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-full border px-4 py-2 text-[0.8rem] font-bold transition-all duration-300",
                      active
                        ? "border-fg bg-fg text-[#111]"
                        : "border-line bg-transparent text-mut hover:border-[#4a4a4a] hover:text-fg",
                    )}
                  >
                    {f} <span className={cn("ml-1 font-semibold", active ? "text-[#555]" : "text-mut2")}>{count}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 min-[1080px]:pb-32" aria-label="Project list">
        <div className="page-width grid gap-x-6 gap-y-16 min-[820px]:grid-cols-2 min-[1080px]:gap-y-20">
          {list.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={(i % 2) * 80} />
          ))}
        </div>
        <Reveal className="page-width mt-20">
          <p className="border-t border-[#1e1e1e] pt-8 text-[0.9rem] text-mut2">
            Every project above is a real website for a real local business — designed around their
            services, their area and their customers.
          </p>
        </Reveal>
      </section>

      <CTASection
        title={
          <>
            Your business could look <span className="text-gradient">this good.</span>
          </>
        }
        copy="Tell us about your business and we'll design a website that wins you work — not just compliments."
      />
    </>
  );
}
