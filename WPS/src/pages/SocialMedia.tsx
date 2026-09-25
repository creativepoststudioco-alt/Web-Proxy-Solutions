import {
  ThumbsUp,
  Camera,
  BadgePercent,
  Megaphone,
  Tag,
  Palette,
  Rocket,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal, SectionHead } from "../components/ui";
import { CTASection } from "../components/sections";
import { IMG } from "../data/content";

const deliverables = [
  { icon: ThumbsUp, t: "Facebook Posts", d: "Feed posts designed for local reach and engagement." },
  { icon: Camera, t: "Instagram Posts", d: "Grid posts and carousels that make your profile worth following." },
  { icon: BadgePercent, t: "Promotional Graphics", d: "Offers and specials designed to be noticed and acted on." },
  { icon: Megaphone, t: "Service Promotions", d: "Graphics that put your core services in front of local customers." },
  { icon: Tag, t: "Offer Graphics", d: "Discount, seasonal and limited-time offer creatives." },
  { icon: Palette, t: "Branded Content", d: "A consistent visual identity across every post you publish." },
  { icon: Rocket, t: "Campaign Creatives", d: "Coordinated creative sets for launches and campaigns." },
];

const process = [
  { n: "01", t: "Brand Direction", d: "We define your look — colours, fonts, tone and layout style." },
  { n: "02", t: "Design System", d: "We build a reusable post system so everything stays consistent." },
  { n: "03", t: "Content Created", d: "Posts, offers and promos designed around your services." },
  { n: "04", t: "Ready to Post", d: "Delivery in the right sizes for Facebook and Instagram." },
];

/* Mini social-post mockup — original art-directed post design */
function PostMock({
  image,
  brand,
  handle,
  headline,
  sub,
  accent,
  delay = 0,
}: {
  image: string;
  brand: string;
  handle: string;
  headline: string;
  sub: string;
  accent: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card card-hover h-full overflow-hidden">
        {/* header */}
        <div className="flex items-center gap-3 px-4 py-3">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-extrabold text-[#0d0d0d]"
            style={{ background: accent }}
            aria-hidden
          >
            {brand.slice(0, 1)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.8rem] font-bold text-fg">{brand}</p>
            <p className="truncate text-[0.68rem] text-mut2">{handle}</p>
          </div>
          <span className="rounded-md px-3 py-1.5 text-[0.68rem] font-bold" style={{ background: `${accent}1c`, color: accent }}>
            Follow
          </span>
        </div>
        {/* creative */}
        <div className="relative">
          <div className="aspect-[4/3.6]">
            <img src={image} alt={`${brand} ${headline} promotional post design`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
          <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(190deg, rgba(13,13,13,0.06) 30%, rgba(13,13,13,0.9))" }} />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="t-eyebrow !text-[0.6rem]" style={{ color: accent }}>
              Limited offer
            </p>
            <p className="mt-2 text-[1.45rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
              {headline}
            </p>
            <p className="mt-1.5 text-[0.78rem] font-semibold text-white/75">{sub}</p>
          </div>
        </div>
        {/* actions */}
        <div className="flex items-center gap-4 px-4 py-3">
          <Heart size={16} className="text-[#ff6fa5]" aria-hidden />
          <MessageCircle size={16} className="text-mut" aria-hidden />
          <Send size={16} className="text-mut" aria-hidden />
          <Bookmark size={16} className="ml-auto text-mut" aria-hidden />
        </div>
      </article>
    </Reveal>
  );
}

export default function SocialMedia() {
  return (
    <>
      <PageHero
        eyebrow="Social Media Posts"
        title={
          <>
            Give your business something <span className="text-gradient">worth scrolling for.</span>
          </>
        }
        copy="Branded social media post design for Facebook and Instagram — promotional graphics, offers and content that keep your business visible, consistent and professional."
        accent="#ff6fa5"
        image={{ src: IMG.socialFlatlay, alt: "Flat lay of branded social content drafts beside a smartphone" }}
        chips={[
          { label: "Facebook", accent: "#6ea1ff" },
          { label: "Instagram", accent: "#ff6fa5" },
          { label: "Brand-consistent", accent: "#ffb35c" },
        ]}
      />

      {/* Deliverables */}
      <section className="section-sm border-t border-[#181818]" aria-labelledby="social-deliver">
        <div className="page-width">
          <SectionHead
            eyebrow="What We Design"
            title={<span id="social-deliver">Content that keeps you visible.</span>}
            copy="A complete set of post types, designed in one consistent visual system for your business."
            accent="#ff6fa5"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#222] bg-[#222] min-[600px]:grid-cols-2 min-[1080px]:grid-cols-4">
            {deliverables.map((d, i) => (
              <Reveal key={d.t} delay={(i % 4) * 50} className="h-full">
                <div className="group h-full bg-[#121212] p-7 transition-colors duration-300 hover:bg-[#181818]">
                  <d.icon size={20} className="text-mut transition-colors duration-300 group-hover:text-[#ff6fa5]" aria-hidden />
                  <h3 className="mt-5 text-[0.98rem] font-bold text-fg">{d.t}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-mut">{d.d}</p>
                </div>
              </Reveal>
            ))}
            {/* filler tile */}
            <Reveal delay={150} className="h-full">
              <div className="flex h-full flex-col justify-between bg-[#121212] bg-[linear-gradient(135deg,#ff6fa515,transparent_55%)] p-7">
                <p className="text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.03em] text-fg">
                  One look, everywhere you post.
                </p>
                <p className="mt-6 text-[0.85rem] leading-relaxed text-mut">
                  Consistency builds recognition — and recognition builds enquiries.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Example designs */}
      <section className="section border-t border-[#181818] bg-[#0f0f0f]" aria-labelledby="examples-head">
        <div className="page-width">
          <SectionHead
            eyebrow="Example Designs"
            title={<span id="examples-head">Posts designed to stop the scroll.</span>}
            copy="Sample post concepts for local service businesses — bold offers, clean branding and a clear next step."
            accent="#ffb35c"
          />
          <div className="mt-14 grid gap-5 min-[700px]:grid-cols-2 min-[1080px]:grid-cols-3">
            <PostMock
              image="https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              brand="Rambo Cleaning"
              handle="@rambocleaning"
              headline="Spring Reset — 20% Off"
              sub="Whole-home cleans, booked in 60 seconds."
              accent="#6ea1ff"
            />
            <PostMock
              image="https://images.pexels.com/photos/7464721/pexels-photo-7464721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              brand="Shine Removals"
              handle="@shineremovals"
              headline="Moving? Get a Free Quote"
              sub="Local moves, done carefully and on time."
              accent="#ffb35c"
              delay={80}
            />
            <PostMock
              image="https://images.pexels.com/photos/36153946/pexels-photo-36153946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              brand="Flora Painting"
              handle="@florapainting"
              headline="Fresh Coat, Fresh Start"
              sub="Interior repaints from local professionals."
              accent="#ff6fa5"
              delay={160}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="social-process">
        <div className="page-width">
          <SectionHead
            eyebrow="The Process"
            title={<span id="social-process">From blank feed to brand presence.</span>}
            copy="A simple system that turns your services into a consistent stream of professional content."
            accent="#a8e063"
          />
          <div className="mt-14 grid gap-4 min-[600px]:grid-cols-2 min-[1080px]:grid-cols-4">
            {process.map((s, i) => (
              <Reveal key={s.n} delay={i * 70} className="h-full">
                <div className="card card-hover h-full p-7">
                  <p className="t-mono-num text-mut2">/ {s.n}</p>
                  <h3 className="mt-5 text-[1.05rem] font-bold text-fg">{s.t}</h3>
                  <p className="mt-2.5 text-[0.87rem] leading-relaxed text-mut">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Ready for a feed that <span className="text-gradient">looks professional?</span>
          </>
        }
        copy="Tell us about your business and we'll design a content system that keeps you visible every week."
      />
    </>
  );
}
