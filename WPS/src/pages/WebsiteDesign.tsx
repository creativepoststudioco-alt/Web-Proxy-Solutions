import { Link } from "react-router-dom";
import {
  Store,
  Wrench,
  MousePointerClick,
  Smartphone,
  Mail,
  Target,
  Gauge,
  Palette,
  Search,
  Zap,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Eyebrow, Reveal, SectionHead } from "../components/ui";
import { ProjectFrame } from "../components/cards";
import { ProcessSection, CTASection, FAQ } from "../components/sections";
import { featuredProjects, websiteFaqs, IMG } from "../data/content";

const whyPoints = [
  {
    icon: Search,
    t: "Customers search first",
    d: "Before they call, they Google. A professional website makes sure what they find looks credible, current and worth contacting.",
  },
  {
    icon: Zap,
    t: "First impressions are instant",
    d: "Visitors judge a business in seconds. Strong design earns the trust that slow, outdated or DIY sites quietly lose.",
  },
  {
    icon: Trophy,
    t: "Good websites win work",
    d: "Clear services, strong reviews and obvious quote buttons turn casual visitors into booked jobs and real enquiries.",
  },
];

const buildItems = [
  { icon: Store, t: "Business Websites", d: "Complete sites that present your business professionally from homepage to contact." },
  { icon: Wrench, t: "Service Websites", d: "Structured around your services and service area — built for local search behaviour." },
  { icon: MousePointerClick, t: "Landing Pages", d: "Focused pages for promotions, campaigns and specific services that convert." },
  { icon: Smartphone, t: "Mobile-First Design", d: "Designed on the phone first and scaled up — flawless on every screen size." },
  { icon: Mail, t: "Contact & Quote Forms", d: "Simple, clear enquiry forms and quote buttons that make contacting you effortless." },
  { icon: Target, t: "Conversion Structure", d: "Layouts that guide visitors towards calling, booking or requesting a quote." },
  { icon: Gauge, t: "Performance Focused", d: "Fast-loading, lightweight builds that don't keep customers waiting." },
  { icon: Palette, t: "Visual Identity", d: "Colours, type and imagery that make your business look established and consistent." },
];

export default function WebsiteDesign() {
  return (
    <>
      <PageHero
        eyebrow="Website Design"
        title={
          <>
            Websites built to make your business <span className="text-gradient">look the part.</span>
          </>
        }
        copy="Conversion-focused websites for local businesses — designed, written and built to turn visitors into enquiries. Mobile-first, fast and unmistakably professional."
        accent="#6ea1ff"
        image={{ src: IMG.webServiceAlt, alt: "Modern business website open on a laptop in a stylish office" }}
        secondary={{ label: "See Website Work", to: "/work" }}
        chips={[
          { label: "Mobile-first", accent: "#6ea1ff" },
          { label: "Quote-ready", accent: "#a8e063" },
          { label: "Fast loading", accent: "#ffb35c" },
        ]}
      />

      {/* Why */}
      <section className="section-sm border-t border-[#181818]" aria-labelledby="why-web">
        <div className="page-width">
          <SectionHead
            eyebrow="Why It Matters"
            title={<span id="why-web">Why your business needs a professional website.</span>}
            copy="Your website is where decisions get made. Here's what a professional one actually does for a local business."
            accent="#6ea1ff"
          />
          <div className="mt-14 grid gap-4 min-[820px]:grid-cols-3">
            {whyPoints.map((w, i) => (
              <Reveal key={w.t} delay={i * 90} className="h-full">
                <div className="card card-hover h-full p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#6ea1ff30] bg-[#6ea1ff12]">
                    <w.icon size={18} className="text-[#6ea1ff]" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-[1.1rem] font-bold tracking-[-0.01em] text-fg">{w.t}</h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-mut">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section border-t border-[#181818] bg-[#0f0f0f]" aria-labelledby="build-head">
        <div className="page-width">
          <SectionHead
            eyebrow="What We Build"
            title={<span id="build-head">Everything a local business website needs.</span>}
            copy="From full business sites to focused landing pages — every build includes the essentials that make it work."
            accent="#a8e063"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#222] bg-[#222] min-[600px]:grid-cols-2 min-[1080px]:grid-cols-4">
            {buildItems.map((b, i) => (
              <Reveal key={b.t} delay={(i % 4) * 50} className="h-full">
                <div className="group h-full bg-[#121212] p-7 transition-colors duration-300 hover:bg-[#181818]">
                  <b.icon size={20} className="text-mut transition-colors duration-300 group-hover:text-[#6ea1ff]" aria-hidden />
                  <h3 className="mt-5 text-[0.98rem] font-bold text-fg">{b.t}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-mut">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="section" aria-labelledby="showcase-head">
        <div className="page-width">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              eyebrow="Recent Websites"
              title={<span id="showcase-head">See the standard.</span>}
              copy="A sample of recent website projects for local service businesses."
              accent="#b297ff"
            />
            <Reveal delay={200}>
              <Link to="/work" className="btn btn-secondary btn-sm group">
                <span>Full Portfolio</span>
                <ArrowRight size={15} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 min-[820px]:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`View the ${p.name} website (opens in a new tab)`}>
                  <ProjectFrame project={p} className="card-hover" />
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[1.02rem] font-bold text-fg">{p.name}</p>
                      <p className="mt-1 text-[0.82rem] text-mut2">{p.category}</p>
                    </div>
                    <ArrowRight size={17} className="shrink-0 text-mut2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-fg" aria-hidden />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        eyebrow="The Process"
        title="From brief to launch in four steps."
        copy="A clear, collaborative process — you'll always know what's happening and what comes next."
      />

      {/* FAQ */}
      <section className="section-sm border-t border-[#181818] bg-[#0f0f0f]" aria-labelledby="faq-head">
        <div className="page-width grid gap-12 min-[980px]:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <Eyebrow accent="#ffb35c">Questions</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 id="faq-head" className="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-fg">
                Website design, answered.
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-6 max-w-[380px] text-[0.95rem] leading-relaxed text-mut">
                Still unsure about something? Send an enquiry or call us — we're happy to talk it
                through, no obligation.
              </p>
            </Reveal>
          </div>
          <FAQ items={websiteFaqs} />
        </div>
      </section>

      <CTASection
        title={
          <>
            Ready for a website that <span className="text-gradient">wins you work?</span>
          </>
        }
        copy="Tell us about your business and we'll map out a website designed to bring in enquiries."
      />
    </>
  );
}
