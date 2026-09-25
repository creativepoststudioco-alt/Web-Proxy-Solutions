export const PHONE_DISPLAY = "910-777-7422";
export const PHONE_TEL = "tel:9107777422";
export const PAYPAL_URL = "https://www.paypal.com/ncp/payment/DZDHAWNS8M8A8";

/* ------------------------------------------------------------------ */
/* Imagery (curated Pexels CDN)                                        */
/* ------------------------------------------------------------------ */

export const IMG = {
  // hero collage
  heroWeb:
    "https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  heroSocial:
    "https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  heroReel:
    "https://images.pexels.com/photos/8371393/pexels-photo-8371393.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

  // services
  webService:
    "https://images.pexels.com/photos/7181184/pexels-photo-7181184.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  webServiceAlt:
    "https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  socialService:
    "https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  socialFlatlay:
    "https://images.pexels.com/photos/7610534/pexels-photo-7610534.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  socialCafe:
    "https://images.pexels.com/photos/18556884/pexels-photo-18556884.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  reelService:
    "https://images.pexels.com/photos/13250815/pexels-photo-13250815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  reelForest:
    "https://images.pexels.com/photos/13622213/pexels-photo-13622213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  reelKitchen:
    "https://images.pexels.com/photos/8357676/pexels-photo-8357676.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

  // misc
  introCafe:
    "https://images.pexels.com/photos/10375820/pexels-photo-10375820.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  studioMoodboard:
    "https://images.pexels.com/photos/37471992/pexels-photo-37471992.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  studioLaptop:
    "https://images.pexels.com/photos/5054214/pexels-photo-5054214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  laptopHands:
    "https://images.pexels.com/photos/17485353/pexels-photo-17485353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  desc: string;
  path: string;
  accent: string;
  image: string;
  alt: string;
  items: string[];
  cta: string;
};

export const services: Service[] = [
  {
    id: "web",
    index: "01",
    name: "Website Design",
    tagline: "Your hardest-working employee",
    desc: "Professional, conversion-focused websites designed around your business — built to turn local searches into real enquiries.",
    path: "/services/website-design",
    accent: "#6ea1ff",
    image: IMG.webService,
    alt: "Modern business website displayed on a laptop in a clean workspace",
    items: [
      "Business & service websites",
      "Landing pages",
      "Mobile-first responsive design",
      "Contact & quote forms",
      "Service pages",
      "Conversion-focused layouts",
      "Performance-focused builds",
      "Modern visual design",
    ],
    cta: "Explore Website Design",
  },
  {
    id: "social",
    index: "02",
    name: "Social Media Posts",
    tagline: "Stay visible, stay consistent",
    desc: "Branded post design that keeps your business looking professional and active across Facebook and Instagram.",
    path: "/services/social-media",
    accent: "#ff6fa5",
    image: IMG.socialService,
    alt: "Hand scrolling through a colourful branded Instagram feed on a smartphone",
    items: [
      "Facebook posts",
      "Instagram posts",
      "Promotional graphics",
      "Service promotions",
      "Offer graphics",
      "Branded content",
      "Campaign creatives",
    ],
    cta: "Explore Social Media",
  },
  {
    id: "reels",
    index: "03",
    name: "Reels & Short Videos",
    tagline: "Content people actually watch",
    desc: "Short-form promotional video made for modern platforms — showcasing your work, your team and your results.",
    path: "/services/reels",
    accent: "#ffb35c",
    image: IMG.reelService,
    alt: "Creator filming a vertical promotional video with a smartphone on a gimbal",
    items: [
      "Instagram Reels",
      "Facebook Reels",
      "Promotional videos",
      "Service showcases",
      "Business introductions",
      "Motion graphics",
      "Campaign content",
    ],
    cta: "Explore Reels",
  },
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export type Industry = { name: string; image: string; alt: string; accent: string };

const AC = ["#6ea1ff", "#ff6fa5", "#ffb35c", "#a8e063", "#b297ff", "#5fd6c6"];

function ind(name: string, url: string, alt: string): Industry {
  return { name, image: url, alt, accent: AC[0] };
}

export const industries: Industry[] = [
  ind(
    "Cleaning",
    "https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Professional cleaner vacuuming a bright modern living room",
  ),
  ind(
    "Painting",
    "https://images.pexels.com/photos/5798972/pexels-photo-5798972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Professional painter rolling colour onto an interior wall",
  ),
  ind(
    "Removals",
    "https://images.pexels.com/photos/7464721/pexels-photo-7464721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Two movers smiling from their moving company van",
  ),
  ind(
    "Construction",
    "https://images.pexels.com/photos/32141080/pexels-photo-32141080.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Construction workers in safety gear on a rebar-grid site",
  ),
  ind(
    "Landscaping",
    "https://images.pexels.com/photos/4920293/pexels-photo-4920293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Landscaper trimming hedges in a sunny garden",
  ),
  ind(
    "Plumbing",
    "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Plumber installing steel pipe fittings by hand",
  ),
  ind(
    "Electrical",
    "https://images.pexels.com/photos/7285965/pexels-photo-7285965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Electrician organising colourful wiring with precision tools",
  ),
  ind(
    "Roofing",
    "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Roofer installing shingles on a residential roof",
  ),
  ind(
    "Handyman",
    "https://images.pexels.com/photos/6790808/pexels-photo-6790808.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Handyman using a power drill on timber in a workshop",
  ),
  ind(
    "Pest Control",
    "https://images.pexels.com/photos/4176541/pexels-photo-4176541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Pest control technician treating a modern living space",
  ),
  ind(
    "Pressure Washing",
    "https://images.pexels.com/photos/6873122/pexels-photo-6873122.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Technician pressure washing with a high-power washer hose",
  ),
  ind(
    "Auto Detailing",
    "https://images.pexels.com/photos/14231684/pexels-photo-14231684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Detailer machine-polishing a black car to a mirror shine",
  ),
  ind(
    "Healthcare",
    "https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Team of healthcare professionals in a modern clinic",
  ),
  ind(
    "Beauty & Salon",
    "https://images.pexels.com/photos/7750125/pexels-photo-7750125.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Stylish modern beauty salon with marble floors and mirrors",
  ),
  ind(
    "Other Local Services",
    "https://images.pexels.com/photos/3906984/pexels-photo-3906984.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "Smiling local business owner at her café counter",
  ),
].map((it, i) => ({ ...it, accent: AC[i % AC.length] }));

/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export type Project = {
  name: string;
  industry: string;
  category: string;
  url: string;
  image: string;
  alt: string;
  desc: string;
  accent: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Healthcare Light",
    industry: "Healthcare",
    category: "Healthcare Website",
    url: "https://healthcare-light.vercel.app/",
    image:
      "https://images.pexels.com/photos/6627926/pexels-photo-6627926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Doctors collaborating in a bright, modern clinic",
    desc: "A calm, trustworthy website for a modern healthcare provider — structured to make services clear and booking simple.",
    accent: "#5fd6c6",
    featured: true,
  },
  {
    name: "Shine Custom Removals",
    industry: "Removals",
    category: "Removal / Moving Website",
    url: "https://shine-custom-removals.vercel.app/",
    image:
      "https://images.pexels.com/photos/7464690/pexels-photo-7464690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Professional mover carefully packing a fragile item",
    desc: "A bold removals website with clear services, strong trust signals and fast quote enquiries.",
    accent: "#ffb35c",
    featured: true,
  },
  {
    name: "Rambo Cleaning Service",
    industry: "Cleaning",
    category: "Cleaning Service Website",
    url: "https://rambo-cleaning-service.vercel.app/",
    image:
      "https://images.pexels.com/photos/6197121/pexels-photo-6197121.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Professional cleaners refreshing a modern kitchen",
    desc: "A fresh, high-energy website for a residential and commercial cleaning business built to generate bookings.",
    accent: "#6ea1ff",
    featured: true,
  },
  {
    name: "Belong Together Services",
    industry: "Support Services",
    category: "Support Services Website",
    url: "https://belong-together-sample.vercel.app/",
    image:
      "https://images.pexels.com/photos/5327654/pexels-photo-5327654.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Care professionals working together with digital devices",
    desc: "A warm, welcoming website for a community support provider — clarity, compassion and easy contact.",
    accent: "#b297ff",
  },
  {
    name: "Shine Removals",
    industry: "Removals",
    category: "Removal / Moving Website",
    url: "https://shine-removals.vercel.app/",
    image:
      "https://images.pexels.com/photos/7464724/pexels-photo-7464724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Movers carrying boxes into a new apartment",
    desc: "A clean, conversion-focused website for a local moving company with instant quote pathways.",
    accent: "#ffb35c",
  },
  {
    name: "State Constructions Co",
    industry: "Construction",
    category: "Construction Website",
    url: "https://state-constructions-co.vercel.app/",
    image:
      "https://images.pexels.com/photos/10932214/pexels-photo-10932214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Construction workers assembling a steel frame on site",
    desc: "A solid, confident web presence for a construction company — showcasing capability, projects and process.",
    accent: "#ffb35c",
  },
  {
    name: "Lucky High Cleaning",
    industry: "Cleaning",
    category: "Cleaning Service Website",
    url: "https://lucky-high-cleaning.vercel.app/",
    image:
      "https://images.pexels.com/photos/4098925/pexels-photo-4098925.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Cleaner detailing a stylish living room",
    desc: "A bright, friendly website that makes booking a cleaning service feel effortless.",
    accent: "#6ea1ff",
  },
  {
    name: "Elite Support Services",
    industry: "Support Services",
    category: "Support Services Website",
    url: "https://elite-support-services.vercel.app/",
    image:
      "https://images.pexels.com/photos/32115899/pexels-photo-32115899.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Confident support professional in a modern care environment",
    desc: "A professional support-services website structured for clarity, trust and easy enquiries.",
    accent: "#b297ff",
  },
  {
    name: "Flora Painting Services",
    industry: "Painting",
    category: "Painting Website",
    url: "https://flora-painting-services.vercel.app/#home",
    image:
      "https://images.pexels.com/photos/36153946/pexels-photo-36153946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Painters renovating a bright interior together",
    desc: "A colourful, polished website for a residential and commercial painting business.",
    accent: "#ff6fa5",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    n: "01",
    title: "Tell Us About Your Business",
    desc: "We learn about your business, your customers and what you want your digital presence to achieve.",
  },
  {
    n: "02",
    title: "Plan & Design",
    desc: "We map the structure and create a visual direction built around your brand and your goals.",
  },
  {
    n: "03",
    title: "Review & Refine",
    desc: "You review the work, share feedback and we refine every detail together.",
  },
  {
    n: "04",
    title: "Launch",
    desc: "We deliver the finished website, content or video — ready to put your business in front of customers.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQs (Website Design)                                               */
/* ------------------------------------------------------------------ */

export const websiteFaqs = [
  {
    q: "How long does a website take?",
    a: "Most small business websites are designed, built and launched within two to four weeks, depending on the size of the site and how quickly content is approved.",
  },
  {
    q: "What do you need from me to start?",
    a: "Just the basics — your services, your service area, any photos or branding you already have. We handle the structure, design and content direction from there.",
  },
  {
    q: "Will my website work on phones?",
    a: "Every website we build is designed mobile-first and tested across phones, tablets and desktop screens — because that's where most of your customers will find you.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can rebuild or refresh an existing site with a modern design, stronger structure and clearer calls to action.",
  },
  {
    q: "Do you help with the content?",
    a: "We shape and polish your content so it reads professionally, reflects your business and is structured to convert visitors into enquiries.",
  },
  {
    q: "How do we get started?",
    a: "Send an enquiry or call us on 910-777-7422. We'll discuss your business and put together a clear plan and quote — no obligation.",
  },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services", dropdown: true },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];
