import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Heart,
  MessageCircle,
  Monitor,
  LayoutDashboard,
  Smartphone,
  Megaphone,
  Clapperboard,
  Handshake,
  Store,
  Globe2,
} from "lucide-react";
import { Btn, BrowserBar, Eyebrow, Reveal, SectionHead } from "../components/ui";
import { IndustryCard, ServiceCard, FeaturedRow } from "../components/cards";
import { Marquee, ProcessSection, CTASection } from "../components/sections";
import { services, industries, featuredProjects, IMG } from "../data/content";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function HeroCollage() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[560px] min-[480px]:h-[470px] min-[1080px]:h-[620px] min-[1080px]:max-w-none">
      {/* glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[80%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.2] blur-3xl"
        style={{ background: "conic-gradient(from 120deg, #6ea1ff55, #ff6fa544, #ffb35c44, #6ea1ff55)" }}
      />

      {/* Website card */}
      <Reveal delay={250} className="absolute left-0 top-[10%] z-10 w-[74%]">
        <div className="float-y" style={{ animationDelay: "0s" }}>
          <div className="card -rotate-3 overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
            <BrowserBar url="yourbusiness.com" accent="#a8e063" />
            <div className="aspect-[16/10]">
              <img
                src={IMG.heroWeb}
                alt="Website preview showing a professional cleaning business homepage"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
          <span className="chip absolute -bottom-4 left-5 shadow-lg" style={{ "--chip-accent": "#6ea1ff" } as React.CSSProperties}>
            <span className="dot" aria-hidden /> Website Design
          </span>
        </div>
      </Reveal>

      {/* Social phone */}
      <Reveal delay={400} className="absolute right-[1%] top-0 z-20 w-[30%] max-w-[172px]">
        <div className="float-y" style={{ animationDelay: "1.1s" }}>
          <div className="rotate-[5deg] rounded-[24px] border border-[#3a3a3a] bg-[#0a0a0a] p-[6px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)]">
            <div className="relative overflow-hidden rounded-[18px]">
              <div className="aspect-[9/15]">
                <img
                  src={IMG.heroSocial}
                  alt="Branded social media post being scrolled on a phone"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/75 to-transparent px-3.5 pb-3 pt-8">
                <Heart size={14} className="fill-[#ff6fa5] text-[#ff6fa5]" aria-hidden />
                <MessageCircle size={14} className="text-white/85" aria-hidden />
                <span className="ml-auto text-[10px] font-bold tracking-[0.08em] text-white/85">2.4k</span>
              </div>
            </div>
          </div>
          <span className="chip absolute -left-5 top-6 shadow-lg" style={{ "--chip-accent": "#ff6fa5" } as React.CSSProperties}>
            <span className="dot" aria-hidden /> Social Posts
          </span>
        </div>
      </Reveal>

      {/* Reel card */}
      <Reveal delay={540} className="absolute bottom-[1%] right-[16%] z-30 w-[27%] max-w-[148px]">
        <div className="float-y" style={{ animationDelay: "2s" }}>
          <div className="-rotate-2 overflow-hidden rounded-[14px] border border-[#2f2f2f] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)]">
            <div className="relative">
              <div className="aspect-[9/14]">
                <img
                  src={IMG.heroReel}
                  alt="Short-form promotional reel being filmed on a smartphone"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-black/25" aria-hidden />
              <span className="absolute inset-0 m-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#111] shadow-lg">
                <Play size={15} className="ml-0.5 fill-current" aria-hidden />
              </span>
              <div className="absolute inset-x-0 bottom-0 px-2.5 pb-2.5">
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/25">
                  <div className="h-full w-[62%] rounded-full bg-[#ffb35c]" />
                </div>
                <p className="mt-1.5 text-[9px] font-bold tracking-[0.1em] text-white/85">REEL · 0:24</p>
              </div>
            </div>
          </div>
          <span className="chip absolute -right-3 -top-4 shadow-lg" style={{ "--chip-accent": "#ffb35c" } as React.CSSProperties}>
            <span className="dot" aria-hidden /> Reels &amp; Video
          </span>
        </div>
      </Reveal>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-[150px] min-[1080px]:pt-[186px]" aria-labelledby="hero-head">
      {/* grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(#1b1b1b 1px, transparent 1px), linear-gradient(90deg, #1b1b1b 1px, transparent 1px)",
          backgroundSize: "78px 78px",
          WebkitMaskImage: "radial-gradient(ellipse 95% 60% at 50% 0%, black 20%, transparent 72%)",
          maskImage: "radial-gradient(ellipse 95% 60% at 50% 0%, black 20%, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -left-56 top-24 h-[560px] w-[560px] rounded-full opacity-[0.09] blur-3xl"
        style={{ background: "radial-gradient(circle, #6ea1ff, transparent 65%)" }}
      />

      <div className="page-width relative grid items-center gap-14 pb-20 min-[1080px]:grid-cols-[1.04fr_0.96fr] min-[1080px]:gap-12 min-[1080px]:pb-28">
        <div>
          <Reveal>
            <span className="chip">
              <span className="flex gap-1" aria-hidden>
                <span className="dot" style={{ background: "#6ea1ff" }} />
                <span className="dot" style={{ background: "#ff6fa5" }} />
                <span className="dot" style={{ background: "#ffb35c" }} />
              </span>
              A creative digital partner for local businesses
            </span>
          </Reveal>
          <Reveal delay={110}>
            <h1 id="hero-head" className="t-hero mt-7 text-fg">
              Make Your Business <span className="text-gradient">Impossible</span> to Ignore.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="t-lede mt-8 max-w-[480px] text-mut">
              Professional websites, social media content and short-form videos designed for small
              businesses across the USA and Australia.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="cta-row mt-10">
              <Btn to="/contact" arrow>
                Get a Free Quote
              </Btn>
              <Btn to="/work" variant="secondary">
                View Our Work
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.82rem] font-semibold text-mut2">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6ea1ff]" aria-hidden /> Websites
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff6fa5]" aria-hidden /> Social Content
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffb35c]" aria-hidden /> Short-form Video
              </span>
              <span className="flex items-center gap-2 border-l border-[#2a2a2a] pl-7">
                USA + Australia
              </span>
            </div>
          </Reveal>
        </div>
        <HeroCollage />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Intro / positioning                                                 */
/* ------------------------------------------------------------------ */

function Intro() {
  return (
    <section className="section" aria-labelledby="intro-head">
      <div className="page-width">
        <div className="grid gap-12 min-[980px]:grid-cols-[1.15fr_0.85fr] min-[980px]:items-end">
          <div>
            <Reveal>
              <Eyebrow accent="#e7dfcf">Who We Are</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 id="intro-head" className="t-h2 mt-6 max-w-[720px] text-fg">
                Your business is local. Your digital presence shouldn't look{" "}
                <span className="text-gradient">small.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <div>
              <p className="t-lede text-mut">
                Web Proxy Solutions helps local businesses present themselves professionally online —
                through the three things customers actually see: your website, your social content and
                your short-form video.
              </p>
              <ul className="mt-8 space-y-3.5">
                {[
                  ["#6ea1ff", "Websites that turn searches into enquiries"],
                  ["#ff6fa5", "Social content that keeps you visible"],
                  ["#ffb35c", "Video that makes your work memorable"],
                ].map(([c, t]) => (
                  <li key={t} className="flex items-center gap-3 text-[0.98rem] font-semibold text-fg">
                    <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: c }} aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} mask className="mt-16 min-[980px]:mt-20">
          <figure className="group relative overflow-hidden rounded-lg border border-line">
            <div className="media-zoom aspect-[16/10] min-[820px]:aspect-[21/8]">
              <img
                src={IMG.introCafe}
                alt="Cheerful local business owner welcoming customers from her café window"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(13,13,13,0.05) 40%, rgba(13,13,13,0.75))" }}
            />
            <figcaption className="absolute bottom-0 left-0 max-w-[560px] p-6 min-[820px]:p-10">
              <p className="t-h3 text-fg">Built for the businesses your community runs on.</p>
              <p className="mt-3 text-[0.92rem] text-[#d8d8d8]/85">
                Trades, home services, professional services — if you serve a local area, we're built
                for you.
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

function ServicesSection() {
  return (
    <section className="section border-t border-[#181818] bg-[#0f0f0f]" aria-labelledby="services-head">
      <div className="page-width">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Our Services"
            title={
              <span id="services-head">
                What we create — <br />
                <span className="text-mut2">three crafts, one partner.</span>
              </span>
            }
            copy="Everything your business needs to look established online — designed to work together, not in silos."
            accent="#6ea1ff"
          />
        </div>
        <div className="mt-14 grid gap-4 min-[820px]:grid-cols-2 min-[1080px]:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

function IndustriesSection() {
  return (
    <section className="section" aria-labelledby="industries-head">
      <div className="page-width">
        <SectionHead
          eyebrow="Industries"
          title={<span id="industries-head">Built for local businesses.</span>}
          copy="From trades and home services to clinics and salons — we design for the way local customers actually choose a business."
          accent="#a8e063"
        />
        <ul className="mt-14 grid grid-cols-2 gap-3 min-[700px]:grid-cols-3 min-[1080px]:grid-cols-5 min-[1080px]:gap-4" role="list">
          {industries.map((ind, i) => (
            <li key={ind.name}>
              <IndustryCard industry={ind} delay={(i % 5) * 55} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Featured work                                                       */
/* ------------------------------------------------------------------ */

function FeaturedWork() {
  return (
    <section className="section border-t border-[#181818] bg-[#0f0f0f]" aria-labelledby="work-head">
      <div className="page-width">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Selected Work"
            title={<span id="work-head">Real websites for real local businesses.</span>}
            copy="A few recent projects for service businesses — designed, built and launched by Web Proxy Solutions."
            accent="#b297ff"
          />
          <Reveal delay={220}>
            <Link to="/work" className="btn btn-secondary btn-sm group">
              <span>View All Work</span>
              <ArrowRight size={15} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-16 space-y-20 min-[1080px]:mt-24 min-[1080px]:space-y-28">
          {featuredProjects.map((p, i) => (
            <FeaturedRow key={p.name} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why WPS                                                             */
/* ------------------------------------------------------------------ */

const whyItems = [
  { icon: Monitor, t: "Modern Design", d: "Clean, contemporary creative that makes your business look established.", a: "#6ea1ff" },
  { icon: LayoutDashboard, t: "Business-Focused", d: "Layouts built around your services, your area and your customers.", a: "#ff6fa5" },
  { icon: Smartphone, t: "Mobile Responsive", d: "Designed phone-first — because that's where your customers are.", a: "#ffb35c" },
  { icon: Megaphone, t: "Social Content", d: "Consistent, branded posts that keep your business visible.", a: "#a8e063" },
  { icon: Clapperboard, t: "Short-form Video", d: "Reels that showcase your work and results in seconds.", a: "#b297ff" },
  { icon: Handshake, t: "One Creative Partner", d: "Website, content and video from one team — one consistent look.", a: "#5fd6c6" },
  { icon: Store, t: "Built for Small Business", d: "Practical, professional creative sized for real local businesses.", a: "#ff6fa5" },
  { icon: Globe2, t: "USA + Australia", d: "Focused on the markets you operate in, with friendly support.", a: "#6ea1ff" },
];

function WhySection() {
  return (
    <section className="section" aria-labelledby="why-head">
      <div className="page-width">
        <SectionHead
          eyebrow="Why Web Proxy Solutions"
          title={
            <span id="why-head">
              Everything your business needs to look <span className="text-gradient">professional online.</span>
            </span>
          }
          copy="No juggling freelancers, no mismatched branding. One partner for your entire digital presence."
          accent="#5fd6c6"
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#222] bg-[#222] min-[600px]:grid-cols-2 min-[1080px]:grid-cols-4">
          {whyItems.map((w, i) => (
            <Reveal key={w.t} delay={(i % 4) * 60} className="h-full">
              <div className="group flex h-full flex-col bg-[#121212] p-7 transition-colors duration-300 hover:bg-[#181818]">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ background: `${w.a}12`, borderColor: `${w.a}30` }}
                >
                  <w.icon size={18} style={{ color: w.a }} aria-hidden />
                </span>
                <h3 className="mt-6 text-[1.02rem] font-bold tracking-[-0.01em] text-fg">{w.t}</h3>
                <p className="mt-2 text-[0.87rem] leading-relaxed text-mut">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={industries.map((i) => i.name)} />
      <Intro />
      <ServicesSection />
      <IndustriesSection />
      <FeaturedWork />
      <WhySection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
