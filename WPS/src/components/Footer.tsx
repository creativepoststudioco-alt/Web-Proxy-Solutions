import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, CreditCard, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { services, PHONE_DISPLAY, PHONE_TEL, PAYPAL_URL } from "../data/content";

const pageLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services/website-design" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-[#1e1e1e] bg-[#0a0a0a]">
      <div className="page-width section-sm">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-[300px] text-[0.95rem] leading-relaxed text-mut">
              Websites, social content and short-form video for small businesses.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <span className="chip" style={{ "--chip-accent": "#6ea1ff" } as React.CSSProperties}>
                <span className="dot" aria-hidden /> USA
              </span>
              <span className="chip" style={{ "--chip-accent": "#ffb35c" } as React.CSSProperties}>
                <span className="dot" aria-hidden /> Australia
              </span>
            </div>
          </div>

          <nav aria-label="Footer pages">
            <p className="t-eyebrow text-mut2">Pages</p>
            <ul className="mt-6 space-y-3.5">
              {pageLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="link-u text-[0.92rem] font-semibold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <p className="t-eyebrow text-mut2">Services</p>
            <ul className="mt-6 space-y-3.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={s.path} className="group flex items-center gap-2.5 text-[0.92rem] font-semibold text-[#c6c6c6] transition-colors hover:text-fg">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.accent }} aria-hidden />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="t-eyebrow text-mut2">Contact</p>
            <div className="mt-6 space-y-4">
              <a href={PHONE_TEL} className="flex items-center gap-3 text-[0.95rem] font-bold text-fg transition-colors hover:text-warm">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface">
                  <Phone size={15} aria-hidden />
                </span>
                {PHONE_DISPLAY}
              </a>
              <a
                href={PAYPAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[0.95rem] font-semibold text-[#c6c6c6] transition-colors hover:text-fg"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface">
                  <CreditCard size={15} aria-hidden />
                </span>
                Pay with PayPal
                <ArrowUpRight size={14} className="text-mut2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </a>
              <p className="flex items-start gap-3 text-[0.88rem] leading-relaxed text-mut">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface">
                  <MapPin size={15} aria-hidden />
                </span>
                Serving small businesses across the USA &amp; Australia
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[#1e1e1e] pt-7 text-[0.82rem] text-mut2 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between">
          <p>© {year} Web Proxy Solutions. All rights reserved.</p>
          <p>Creative digital partner for local businesses.</p>
        </div>
      </div>

      {/* Watermark */}
      <div aria-hidden className="pointer-events-none select-none">
        <p className="page-width -mb-[2vw] whitespace-nowrap text-[11.5vw] font-extrabold leading-[0.8] tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_#1c1c1c]">
          WEB PROXY
        </p>
      </div>
    </footer>
  );
}
