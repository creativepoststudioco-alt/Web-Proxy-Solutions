import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "../data/content";

const serviceOptions = [
  "Website Design",
  "Social Media Posts",
  "Reels & Short Videos",
  "Multiple Services",
];

type FormState = {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: "Website Design",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card flex h-full flex-col items-start justify-center p-8 min-[820px]:p-12" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#a8e06333] bg-[#a8e06314]">
          <CheckCircle2 size={26} className="text-[#a8e063]" aria-hidden />
        </span>
        <h2 className="t-h3 mt-7 text-fg">Enquiry received.</h2>
        <p className="mt-4 max-w-[420px] text-[0.95rem] leading-relaxed text-mut">
          Thanks, {form.name.split(" ")[0] || "there"} — we've received your enquiry about{" "}
          <span className="font-semibold text-fg">{form.service}</span> and we'll be in touch
          shortly. For anything urgent, call us directly.
        </p>
        <a href={PHONE_TEL} className="btn btn-secondary mt-8">
          Call {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form className="card p-7 min-[820px]:p-9" onSubmit={onSubmit} aria-label="Project enquiry form">
      <div className="grid gap-5 min-[640px]:grid-cols-2">
        <div>
          <label className="label" htmlFor="f-name">Name</label>
          <input id="f-name" className="input" required autoComplete="name" placeholder="Your name" value={form.name} onChange={set("name")} />
        </div>
        <div>
          <label className="label" htmlFor="f-business">Business Name</label>
          <input id="f-business" className="input" required autoComplete="organization" placeholder="Your business" value={form.business} onChange={set("business")} />
        </div>
        <div>
          <label className="label" htmlFor="f-email">Email</label>
          <input id="f-email" type="email" className="input" required autoComplete="email" placeholder="you@business.com" value={form.email} onChange={set("email")} />
        </div>
        <div>
          <label className="label" htmlFor="f-phone">Phone</label>
          <input id="f-phone" type="tel" className="input" autoComplete="tel" placeholder="Best contact number" value={form.phone} onChange={set("phone")} />
        </div>
        <div className="min-[640px]:col-span-2">
          <label className="label" htmlFor="f-service">Service Needed</label>
          <select id="f-service" className="input" value={form.service} onChange={set("service")}>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="min-[640px]:col-span-2">
          <label className="label" htmlFor="f-message">Message</label>
          <textarea
            id="f-message"
            className="input min-h-[140px] resize-y"
            required
            placeholder="Tell us a little about your business and what you need…"
            value={form.message}
            onChange={set("message")}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-7 w-full min-[640px]:w-auto">
        <span>Send Enquiry</span>
        <ArrowUpRight className="btn-arrow" size={17} aria-hidden />
      </button>
      <p className="mt-5 text-[0.8rem] leading-relaxed text-mut2">
        We reply to every genuine enquiry. Prefer to talk? Call{" "}
        <a href={PHONE_TEL} className="link-u">{PHONE_DISPLAY}</a>.
      </p>
    </form>
  );
}
