import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Industry, Project, Service } from "../data/content";
import { BrowserBar, Reveal } from "./ui";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* Service card                                                        */
/* ------------------------------------------------------------------ */

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={service.path}
        className="card card-hover group flex h-full flex-col overflow-hidden focus-visible:outline-2"
        aria-label={`${service.name} — ${service.cta}`}
      >
        <div className="media-zoom relative h-[220px] min-[1080px]:h-[248px]">
          <img
            src={service.image}
            alt={service.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 45%, rgba(27,27,27,0.9))" }}
          />
          <span className="chip absolute left-4 top-4" style={{ "--chip-accent": service.accent } as React.CSSProperties}>
            <span className="dot" aria-hidden /> {service.index}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 min-[820px]:p-7">
          <h3 className="t-h3 text-fg">{service.name}</h3>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-mut">{service.desc}</p>
          <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 border-t border-[#242424] pt-6 min-[480px]:grid-cols-2">
            {service.items.map((it) => (
              <li key={it} className="flex items-center gap-2.5 text-[0.83rem] font-semibold text-[#c6c6c6]">
                <Check size={14} strokeWidth={3} style={{ color: service.accent }} aria-hidden className="shrink-0" />
                {it}
              </li>
            ))}
          </ul>
          <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[0.9rem] font-bold text-fg">
            <span className="transition-colors duration-300" style={{ color: service.accent }}>
              {service.cta}
            </span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Industry card                                                       */
/* ------------------------------------------------------------------ */

export function IndustryCard({ industry, delay = 0 }: { industry: Industry; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="group relative h-full overflow-hidden rounded-lg border border-line">
        <div className="media-zoom aspect-[4/3.4]">
          <img
            src={industry.image}
            alt={industry.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 transition-opacity duration-300"
          style={{ background: "linear-gradient(185deg, transparent 40%, rgba(13,13,13,0.88) 88%)" }}
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-4">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: industry.accent }} aria-hidden />
          <span className="text-[0.86rem] font-bold tracking-[0.01em] text-fg">{industry.name}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Project preview frame                                               */
/* ------------------------------------------------------------------ */

export function ProjectFrame({ project, className }: { project: Project; className?: string }) {
  const domain = project.url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  return (
    <div className={cn("card overflow-hidden", className)}>
      <BrowserBar url={domain} accent={project.accent} />
      <div className="media-zoom aspect-[16/10]">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Project card (work grid)                                            */
/* ------------------------------------------------------------------ */

export function ProjectCard({ project, delay = 0, large = false }: { project: Project; delay?: number; large?: boolean }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col">
        <ProjectFrame
          project={project}
          className="card-hover transition-transform duration-[400ms]"
        />
        <div className="flex flex-1 flex-col pt-6">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: project.accent }} aria-hidden />
            <p className="t-eyebrow !text-[0.66rem] text-mut2">{project.category}</p>
          </div>
          <h3 className={cn("mt-3 font-semibold tracking-[-0.03em] text-fg", large ? "t-h3" : "text-[1.35rem] leading-[1.1]")}>
            {project.name}
          </h3>
          <p className="mt-2.5 max-w-[560px] text-[0.92rem] leading-relaxed text-mut">{project.desc}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm mt-6 self-start font-bold after:absolute after:inset-0"
            aria-label={`View the ${project.name} website (opens in a new tab)`}
          >
            <span>View Project</span>
            <ArrowUpRight className="btn-arrow" size={15} aria-hidden />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Featured project row (home)                                         */
/* ------------------------------------------------------------------ */

export function FeaturedRow({ project, flip = false, delay = 0 }: { project: Project; flip?: boolean; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article
        className={cn(
          "group relative grid items-center gap-8 min-[980px]:grid-cols-2 min-[980px]:gap-14",
        )}
      >
        <div className={cn(flip && "min-[980px]:order-2")}>
          <ProjectFrame project={project} className="card-hover" />
        </div>
        <div className={cn(flip && "min-[980px]:order-1")}>
          <div className="flex items-center gap-3">
            <span className="chip" style={{ "--chip-accent": project.accent } as React.CSSProperties}>
              <span className="dot" aria-hidden /> {project.industry}
            </span>
            <span className="t-mono-num text-mut2">{project.category}</span>
          </div>
          <h3 className="mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-fg">
            {project.name}
          </h3>
          <p className="mt-4 max-w-[440px] text-[0.98rem] leading-relaxed text-mut">{project.desc}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm mt-8 after:absolute after:inset-0"
            aria-label={`View the ${project.name} project (opens in a new tab)`}
          >
            <span>View Project</span>
            <ArrowUpRight className="btn-arrow" size={15} aria-hidden />
          </a>
        </div>
      </article>
    </Reveal>
  );
}
