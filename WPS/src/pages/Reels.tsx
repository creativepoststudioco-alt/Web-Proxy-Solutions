import {
  Camera,
  ThumbsUp,
  Video,
  Sparkles,
  Users,
  Rocket,
  Wand2,
  Play,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal, SectionHead } from "../components/ui";
import { CTASection } from "../components/sections";
import { IMG } from "../data/content";

const deliverables = [
  { icon: Camera, t: "Instagram Reels", d: "Vertical short-form video designed for the Reels feed." },
  { icon: ThumbsUp, t: "Facebook Reels", d: "Platform-ready video for Facebook reach and local discovery." },
  { icon: Video, t: "Promotional Videos", d: "Short promos for offers, seasons and campaigns." },
  { icon: Sparkles, t: "Service Showcases", d: "Before-and-after and behind-the-scenes videos that sell the result." },
  { icon: Users, t: "Business Introductions", d: "Friendly intro videos that put a face to your business." },
  { icon: Rocket, t: "Campaign Content", d: "Coordinated video sets for launches and promotions." },
  { icon: Wand2, t: "Motion Graphics", d: "Animated text, logos and graphics that add polish." },
];

const process = [
  { n: "01", t: "Concept & Script", d: "We shape the idea around your service and your customer." },
  { n: "02", t: "Filming Direction", d: "A simple shot plan — your phone footage or supplied media." },
  { n: "03", t: "Edit & Motion", d: "Professional editing, captions, music and motion graphics." },
  { n: "04", t: "Ready to Publish", d: "Delivered vertical, captioned and sized for every platform." },
];

function ReelCard({
  image,
  title,
  tag,
  length,
  accent,
  delay = 0,
}: {
  image: string;
  title: string;
  tag: string;
  length: string;
  accent: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="group relative h-full overflow-hidden rounded-lg border border-line">
        <div className="media-zoom aspect-[9/14]">
          <img
            src={image}
            alt={`${title} — short-form video example`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(185deg, rgba(13,13,13,0.15) 30%, rgba(13,13,13,0.88) 90%)" }}
        />
        <span
          className="chip absolute left-4 top-4 !py-1.5 !text-[0.68rem]"
          style={{ "--chip-accent": accent } as React.CSSProperties}
        >
          <span className="dot" aria-hidden /> {tag}
        </span>
        <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#111] opacity-95 shadow-xl transition-transform duration-300 group-hover:scale-110">
          <Play size={19} className="ml-0.5 fill-current" aria-hidden />
        </span>
        <figcaption className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[1.15rem] font-bold leading-tight tracking-[-0.02em] text-white">{title}</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25">
              <div className="h-full w-[55%] rounded-full" style={{ background: accent }} />
            </div>
            <span className="text-[0.7rem] font-bold tabular-nums text-white/80">{length}</span>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function Reels() {
  return (
    <>
      <PageHero
        eyebrow="Reels & Short Videos"
        title={
          <>
            Turn your services into content <span className="text-gradient">people remember.</span>
          </>
        }
        copy="Short-form promotional video for Instagram and Facebook — service showcases, business intros and motion graphics that make your work impossible to scroll past."
        accent="#ffb35c"
        image={{ src: IMG.reelForest, alt: "Content creator filming stabilised vertical video outdoors" }}
        chips={[
          { label: "Instagram Reels", accent: "#ff6fa5" },
          { label: "Facebook Reels", accent: "#6ea1ff" },
          { label: "Motion graphics", accent: "#b297ff" },
        ]}
      />

      {/* Deliverables */}
      <section className="section-sm border-t border-[#181818]" aria-labelledby="reel-deliver">
        <div className="page-width">
          <SectionHead
            eyebrow="What We Create"
            title={<span id="reel-deliver">Video made for the modern feed.</span>}
            copy="Every format your business needs to show up where your customers are already watching."
            accent="#ffb35c"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#222] bg-[#222] min-[600px]:grid-cols-2 min-[1080px]:grid-cols-4">
            {deliverables.map((d, i) => (
              <Reveal key={d.t} delay={(i % 4) * 50} className="h-full">
                <div className="group h-full bg-[#121212] p-7 transition-colors duration-300 hover:bg-[#181818]">
                  <d.icon size={20} className="text-mut transition-colors duration-300 group-hover:text-[#ffb35c]" aria-hidden />
                  <h3 className="mt-5 text-[0.98rem] font-bold text-fg">{d.t}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-mut">{d.d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={150} className="h-full">
              <div className="flex h-full flex-col justify-between bg-[#121212] bg-[linear-gradient(135deg,#ffb35c15,transparent_55%)] p-7">
                <p className="text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.03em] text-fg">
                  Vertical. Captioned. Ready to post.
                </p>
                <p className="mt-6 text-[0.85rem] leading-relaxed text-mut">
                  Every video delivered in 9:16 with captions and sound-safe framing.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="section border-t border-[#181818] bg-[#0f0f0f]" aria-labelledby="reel-examples">
        <div className="page-width">
          <SectionHead
            eyebrow="Video Examples"
            title={<span id="reel-examples">Formats that work for local business.</span>}
            copy="Three proven short-form styles — showcases, introductions and before-and-after edits."
            accent="#b297ff"
          />
          <div className="mt-14 grid gap-5 min-[600px]:grid-cols-3">
            <ReelCard
              image={IMG.reelKitchen}
              title="The Reset — Before & After"
              tag="Showcase"
              length="0:18"
              accent="#ffb35c"
            />
            <ReelCard
              image={IMG.heroReel}
              title="Meet the Team Intro"
              tag="Intro"
              length="0:24"
              accent="#6ea1ff"
              delay={90}
            />
            <ReelCard
              image={IMG.reelService}
              title="On the Job — Day in the Life"
              tag="Story"
              length="0:31"
              accent="#ff6fa5"
              delay={180}
            />
          </div>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {["Vertical 9:16", "5–30 seconds", "Captions included", "Platform-ready", "Licensed music"].map((s) => (
                <span key={s} className="chip !text-[0.74rem]" style={{ "--chip-accent": "#ffb35c" } as React.CSSProperties}>
                  <span className="dot" aria-hidden /> {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="reel-process">
        <div className="page-width">
          <SectionHead
            eyebrow="The Process"
            title={<span id="reel-process">From idea to published reel.</span>}
            copy="You don't need to be a filmmaker — we handle the concept, the edit and the polish."
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
            Ready to be the business <span className="text-gradient">everyone watches?</span>
          </>
        }
        copy="Tell us what you do and we'll turn it into short-form content your customers actually remember."
      />
    </>
  );
}
