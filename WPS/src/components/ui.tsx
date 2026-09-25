import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* Reveal — IntersectionObserver based entrance animation              */
/* ------------------------------------------------------------------ */

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  mask?: boolean;
  as?: "div" | "section" | "li" | "figure";
};

export function Reveal({ children, className, delay = 0, mask = false, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={cn("reveal", mask && "reveal-mask", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary";
  small?: boolean;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Btn({
  children,
  to,
  href,
  variant = "primary",
  small = false,
  arrow = false,
  className,
  onClick,
  type = "button",
}: BtnProps) {
  const cls = cn(
    "btn",
    variant === "primary" ? "btn-primary" : "btn-secondary",
    small && "btn-sm",
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowUpRight className="btn-arrow" size={17} strokeWidth={2.4} aria-hidden />}
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  if (href)
    return (
      <a
        className={cls}
        href={href}
        onClick={onClick}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Eyebrow + Section heading                                           */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, accent = "#6ea1ff", center = false }: { children: ReactNode; accent?: string; center?: boolean }) {
  return (
    <p className={cn("t-eyebrow flex items-center gap-3 text-mut", center && "justify-center")}>
      <span
        aria-hidden
        className="inline-block h-[6px] w-[6px] rounded-full"
        style={{ background: accent, boxShadow: `0 0 12px ${accent}80` }}
      />
      <span className="text-mut">{children}</span>
    </p>
  );
}

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  accent?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHead({ eyebrow, title, copy, accent, align = "left", className }: SectionHeadProps) {
  const center = align === "center";
  return (
    <div className={cn("max-w-[820px]", center && "mx-auto text-center", className)}>
      <Reveal>
        <Eyebrow accent={accent} center={center}>
          {eyebrow}
        </Eyebrow>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="t-h2 mt-5 text-fg">{title}</h2>
      </Reveal>
      {copy && (
        <Reveal delay={170}>
          <p className={cn("t-lede mt-6 max-w-[560px] text-mut", center && "mx-auto")}>{copy}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Browser / phone frames                                              */
/* ------------------------------------------------------------------ */

export function BrowserBar({ url, accent }: { url: string; accent?: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-line bg-[#171717] px-4 py-2.5">
      <div className="flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-[#0f0f0f] px-3 py-1">
        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent ?? "#a8e063" }} />
        <span className="truncate text-[11px] font-medium tracking-wide text-mut2">{url}</span>
      </div>
    </div>
  );
}
