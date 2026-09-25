import { Phone, CreditCard, Clock, ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { Reveal } from "../components/ui";
import { PHONE_DISPLAY, PHONE_TEL, PAYPAL_URL } from "../data/content";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build your <span className="text-gradient">digital presence.</span>
          </>
        }
        copy="Tell us about your business and what you need — a website, social content, video, or all three. We'll come back with a clear plan and a free quote."
        accent="#a8e063"
        primary={{ label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL }}
      />

      <section className="section-sm border-t border-[#181818]" aria-label="Enquiry form and contact details">
        <div className="page-width grid gap-6 min-[980px]:grid-cols-[1.35fr_0.65fr]">
          <Reveal className="h-full" delay={60}>
            <div id="enquiry" className="h-full scroll-mt-28">
              <ContactForm />
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={140}>
              <a href={PHONE_TEL} className="card card-hover group flex items-center gap-5 p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#6ea1ff30] bg-[#6ea1ff12]">
                  <Phone size={19} className="text-[#6ea1ff]" aria-hidden />
                </span>
                <span>
                  <span className="t-eyebrow block !text-[0.64rem] text-mut2">USA Phone</span>
                  <span className="mt-1.5 block text-[1.2rem] font-bold tracking-[-0.02em] text-fg transition-colors group-hover:text-warm">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={200}>
              <div className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#ffb35c30] bg-[#ffb35c12]">
                  <CreditCard size={19} className="text-[#ffb35c]" aria-hidden />
                </span>
                <h2 className="mt-6 text-[1.05rem] font-bold text-fg">Pay securely with PayPal</h2>
                <p className="mt-2.5 text-[0.88rem] leading-relaxed text-mut">
                  Prefer to get started right away? You can pay for your project securely through
                  our official PayPal page.
                </p>
                <a
                  href={PAYPAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm mt-6"
                >
                  <span>Pay with PayPal</span>
                  <ArrowUpRight className="btn-arrow" size={15} aria-hidden />
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#a8e06330] bg-[#a8e06312]">
                  <Clock size={19} className="text-[#a8e063]" aria-hidden />
                </span>
                <h2 className="mt-6 text-[1.05rem] font-bold text-fg">Where we work</h2>
                <p className="mt-2.5 text-[0.88rem] leading-relaxed text-mut">
                  We serve small businesses across the <span className="font-semibold text-fg">USA</span> and{" "}
                  <span className="font-semibold text-fg">Australia</span> — every project handled
                  remotely with clear, friendly communication.
                </p>
                <div className="mt-5 flex gap-2">
                  <span className="chip !py-1.5 !text-[0.7rem]" style={{ "--chip-accent": "#6ea1ff" } as React.CSSProperties}>
                    <span className="dot" aria-hidden /> USA
                  </span>
                  <span className="chip !py-1.5 !text-[0.7rem]" style={{ "--chip-accent": "#ffb35c" } as React.CSSProperties}>
                    <span className="dot" aria-hidden /> Australia
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
