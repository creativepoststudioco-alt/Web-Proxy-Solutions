import { Monitor, Megaphone, Clapperboard, Compass, Users, Handshake } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Eyebrow, Reveal, SectionHead } from "../components/ui";
import { CTASection } from "../components/sections";
import { IMG } from "../data/content";

const crafts = [
  {
    icon: Monitor,
    a: "#6ea1ff",
    t: "Websites",
    d: "Professional, mobile-first websites built to turn local searches into enquiries and bookings.",
  },
  {
    icon: Megaphone,
    a: "#ff6fa5",
    t: "Social Content",
    d: "Consistent, branded post design that keeps your business visible and credible week after week.",
  },
  {
    icon: Clapperboard,
    a: "#ffb35c",
    t: "Short-form Video",
    d: "Reels and short videos that showcase your work, your team and your results — fast.",
  },
];

const values = [
  {
    icon: Compass,
    t: "Design with purpose",
    d: "Everything we make exists to move a customer closer to calling you. Style matters — but clarity wins.",
  },
  {
    icon: Users,
    t: "Small-business native",
    d: "We work exclusively with small and local businesses, so our process, pricing and pace are sized for you — not for enterprise.",
  },
  {
    icon: Handshake,
    t: "One accountable partner",
    d: "Your website, posts and videos come from one team with one standard. No hand-offs, no mismatched work.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Web Proxy Solutions"
        title={
          <>
            The creative partner <span className="text-gradient">local businesses</span> deserve.
          </>
        }
        copy="Web Proxy Solutions is a digital creative agency for small and local businesses across the USA and Australia. We combine websites, social content and short-form video into one digital service — so your business looks as good online as it is in real life."
        accent="#e7dfcf"
        image={{ src: IMG.studioMoodboard, alt: "Creative studio desk with design sketches and brand mood boards" }}
        secondary={{ label: "See Our Work", to: "/work" }}
        chips={[
          { label: "USA", accent: "#6ea1ff" },
          { label: "Australia", accent: "#ffb35c" },
        ]}
      />

      {/* One offering */}
      <section className="section-sm border-t border-[#181818]" aria-labelledby="craft-head">
        <div className="page-width">
          <SectionHead
            eyebrow="What We Do"
            title="One partner. Three crafts working together."
            copy="Most businesses piece their digital presence together from different providers. We design the whole thing as one system — so it looks consistent and works harder."
            accent="#6ea1ff"
          />
          <div className="mt-14 grid gap-4 min-[820px]:grid-cols-3">
            {crafts.map((c, i) => (
              <Reveal key={c.t} delay={i * 90} className="h-full">
                <div className="card card-hover h-full p-8">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-lg border"
                    style={{ background: `${c.a}12`, borderColor: `${c.a}30` }}
                  >
                    <c.icon size={20} style={{ color: c.a }} aria-hidden />
                  </span>
                  <h3 className="t-h3 mt-7 text-fg">{c.t}</h3>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-mut">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split */}
      <section className="section border-t border-[#181818] bg-[#0f0f0f]" aria-labelledby="value-head">
        <div className="page-width grid items-center gap-14 min-[980px]:grid-cols-2 min-[980px]:gap-20">
          <Reveal mask>
            <figure className="relative overflow-hidden rounded-lg border border-line">
              <div className="media-zoom aspect-[4/3.2]">
                <img
                  src={IMG.studioLaptop}
                  alt="Designer working on a business website at a clean studio desk"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="absolute bottom-4 left-4">
                <span className="chip bg-[#151515d9]">Design, done properly</span>
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow accent="#ff6fa5">How We Think</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 id="value-head" className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-fg">
                Straightforward by design.
              </h2>
            </Reveal>
            <div className="mt-10 space-y-8">
              {values.map((v, i) => (
                <Reveal key={v.t} delay={i * 80}>
                  <div className="flex gap-5">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface">
                      <v.icon size={17} className="text-warm" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[1.05rem] font-bold text-fg">{v.t}</h3>
                      <p className="mt-1.5 text-[0.92rem] leading-relaxed text-mut">{v.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="section" aria-label="Our belief">
        <div className="page-width">
          <Reveal>
            <p className="t-eyebrow text-mut2">Our Belief</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-[1000px] text-[clamp(1.8rem,4.6vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.045em] text-fg">
              A professional digital presence shouldn't be reserved for big companies with big
              budgets. <span className="text-mut2">Local businesses are the backbone of every community —</span>{" "}
              and they deserve to <span className="text-gradient">look the part online.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
