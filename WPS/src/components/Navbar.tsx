import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Monitor,
  Megaphone,
  Clapperboard,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";
import { services, PHONE_TEL, PHONE_DISPLAY } from "../data/content";
import { cn } from "../utils/cn";

const dropIcons = [Monitor, Megaphone, Clapperboard];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const openDrop = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setDropOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setDropOpen(false), 140);
  };

  const servicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <header className={cn("site-header", scrolled && "scrolled")}>
        <div className="nav-inner header-h flex items-center justify-between gap-6">
          <Link to="/" aria-label="Web Proxy Solutions — home" className="shrink-0 rounded-lg">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-[22px] lg:flex">
            <NavLink to="/" end className={({ isActive }) => cn("nav-link", isActive && "active")}>
              Home
            </NavLink>

            <div
              className="drop-wrap"
              data-open={dropOpen}
              onMouseEnter={openDrop}
              onMouseLeave={scheduleClose}
            >
              <button
                className={cn("nav-link flex items-center gap-1.5", servicesActive && "active")}
                aria-expanded={dropOpen}
                aria-haspopup="true"
                onClick={() => setDropOpen((v) => !v)}
                onKeyDown={(e) => e.key === "Escape" && setDropOpen(false)}
              >
                Services
                <ChevronDown
                  size={14}
                  strokeWidth={2.5}
                  className={cn("transition-transform duration-300", dropOpen && "rotate-180")}
                  aria-hidden
                />
              </button>

              <div className="drop-panel" role="menu" aria-label="Services">
                <div className="card overflow-hidden bg-[#1b1b1b] p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]">
                  {services.map((s, i) => {
                    const Icon = dropIcons[i];
                    return (
                      <Link
                        key={s.id}
                        to={s.path}
                        role="menuitem"
                        className="group flex items-center gap-4 rounded-lg px-4 py-3.5 transition-colors duration-200 hover:bg-[#242424]"
                      >
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border"
                          style={{ background: `${s.accent}14`, borderColor: `${s.accent}33` }}
                        >
                          <Icon size={17} style={{ color: s.accent }} aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.92rem] font-bold text-fg">{s.name}</span>
                          <span className="mt-0.5 block text-[0.8rem] text-mut2">{s.tagline}</span>
                        </span>
                        <ArrowRight
                          size={15}
                          className="shrink-0 text-mut2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-fg"
                          aria-hidden
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <NavLink to="/work" className={({ isActive }) => cn("nav-link", isActive && "active")}>
              Work
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => cn("nav-link", isActive && "active")}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => cn("nav-link", isActive && "active")}>
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="btn btn-primary btn-sm hidden lg:inline-flex"
            >
              Get a Free Quote
            </Link>

            {/* Hamburger */}
            <button
              className="flex h-[46px] w-[46px] flex-col items-center justify-center gap-[6px] rounded-lg border border-line bg-surface lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span
                className={cn(
                  "h-[2px] w-[18px] rounded-full bg-fg transition-transform duration-300",
                  menuOpen && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-[2px] w-[18px] rounded-full bg-fg transition-transform duration-300",
                  menuOpen && "-translate-y-[4px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className="mobile-menu" data-open={menuOpen} aria-hidden={!menuOpen}>
        <div className="nav-inner header-h flex items-center justify-between">
          <Logo />
          <button
            className="flex h-[46px] w-[46px] flex-col items-center justify-center gap-[6px] rounded-lg border border-line bg-surface"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <span className="h-[2px] w-[18px] translate-y-[4px] rotate-45 rounded-full bg-fg" />
            <span className="h-[2px] w-[18px] -translate-y-[4px] -rotate-45 rounded-full bg-fg" />
          </button>
        </div>

        <nav aria-label="Mobile" className="page-width mt-10 flex flex-col pb-16">
          {[
            { label: "Home", path: "/" },
            { label: "Work", path: "/work" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
          ].map((l, i) => (
            <div className="mm-item" style={{ transitionDelay: `${120 + i * 55}ms` }} key={l.path}>
              <NavLink
                to={l.path}
                end={l.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "group flex items-center justify-between border-b border-[#1f1f1f] py-5 text-[2rem] font-bold tracking-[-0.03em] transition-colors",
                    isActive ? "text-fg" : "text-mut hover:text-fg",
                  )
                }
              >
                {l.label}
                <ArrowRight size={22} className="opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              </NavLink>
            </div>
          ))}

          <div className="mm-item" style={{ transitionDelay: "340ms" }}>
            <p className="t-eyebrow mt-9 text-mut2">Services</p>
            <div className="mt-4 grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.id}
                  to={s.path}
                  className="card flex items-center gap-3 px-4 py-4 text-[0.9rem] font-bold text-fg"
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: s.accent }} aria-hidden />
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mm-item mt-10 flex flex-col gap-4" style={{ transitionDelay: "420ms" }}>
            <Link to="/contact" className="btn btn-primary w-full">
              Get a Free Quote
            </Link>
            <a href={PHONE_TEL} className="flex items-center justify-center gap-2 text-[0.95rem] font-semibold text-mut">
              <Phone size={16} aria-hidden /> {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
