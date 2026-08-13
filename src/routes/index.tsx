import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Gem,
  RefreshCw,
  Truck,
  ArrowRight,
  Quote,
} from "lucide-react";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import logoAsset from "../assets/logo.png.asset.json";

const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
const logoUrl = base ? `${base}${logoAsset.url}` : logoAsset.url;

import catRings from "../assets/cat-rings.jpg";
import catNecklaces from "../assets/cat-necklaces.jpg";
import catEarrings from "../assets/cat-earrings.jpg";
import catBangles from "../assets/cat-bangles.jpg";
import newRing from "../assets/new-ring.jpg";
import newEarrings from "../assets/new-earrings.jpg";
import newPendant from "../assets/new-pendant.jpg";
import newBangle from "../assets/new-bangle.jpg";
import aboutCraft from "../assets/about-craft.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const COLLECTIONS = [
  { name: "Rings", count: "48 pieces", image: catRings },
  { name: "Necklaces", count: "36 pieces", image: catNecklaces },
  { name: "Earrings", count: "52 pieces", image: catEarrings },
  { name: "Bangles", count: "27 pieces", image: catBangles },
];

const ARRIVALS = [
  {
    name: "Sapphire Solitaire Ring",
    material: "18k Gold · Blue Sapphire",
    price: "PKR 245,000",
    image: newRing,
  },
  {
    name: "Pearl Drop Hoops",
    material: "22k Gold · Freshwater Pearl",
    price: "PKR 132,000",
    image: newEarrings,
  },
  {
    name: "Ruby Teardrop Pendant",
    material: "22k Gold · Ruby",
    price: "PKR 188,000",
    image: newPendant,
  },
  {
    name: "Brushed Satin Kada",
    material: "22k Gold",
    price: "PKR 320,000",
    image: newBangle,
  },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Hallmarked & Certified",
    text: "Every piece is independently tested and carries a hallmark of purity.",
  },
  {
    icon: Gem,
    title: "Master Craftsmanship",
    text: "Hand-finished by in-house karigars with decades of expertise.",
  },
  {
    icon: RefreshCw,
    title: "Lifetime Exchange",
    text: "Exchange or upgrade your jewellery anytime, at today's gold rate.",
  },
  {
    icon: Truck,
    title: "Insured Delivery",
    text: "Complimentary insured delivery to your door across Pakistan.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "My bridal set from Almas was beyond my dreams. The craftsmanship is unmatched and the team made the whole experience feel special.",
    name: "Ayesha Khan",
    place: "Karachi",
  },
  {
    quote:
      "Three generations of my family have bought from Almas. Their gold is always certified and their designs are timeless.",
    name: "Fatima Raza",
    place: "Lahore",
  },
  {
    quote:
      "Exchanged an old bangle for a new kanda set with zero hassle. Honest pricing and beautiful work every single time.",
    name: "Sana Malik",
    place: "Islamabad",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="home">
        <Hero />
        <TrustStrip />
        <Collections />
        <NewArrivals />
        <Heritage />
        <Features />
        <Testimonials />
        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  );
}

/* ---------------- Hero ---------------- */
/* NOTE: When the official hero banner image is provided, replace the
   gradient background below with a full-bleed <img> / background-image. */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
      {/* Decorative gold radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 0%, oklch(0.45 0.1 80 / 0.35), transparent 70%)",
        }}
      />
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
        <span className="text-[0.68rem] uppercase tracking-luxe text-primary">
          Est. 1978 · Karachi
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
          Heirlooms in the Making
        </h1>
        <div className="gold-rule mt-8 h-px w-28" />
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-secondary-foreground/75 sm:text-base">
          Fine handcrafted gold and diamond jewellery, designed to be treasured for
          generations. Each piece hallmarked, certified and made by hand in our
          Karachi atelier.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#collections"
            className="group inline-flex items-center justify-center gap-2 bg-primary px-8 py-3.5 text-xs font-medium uppercase tracking-luxe text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore Collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-secondary-foreground/30 px-8 py-3.5 text-xs font-medium uppercase tracking-luxe text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust strip ---------------- */
function TrustStrip() {
  const items = [
    "Certified Gold",
    "Hallmarked Purity",
    "Lifetime Exchange",
    "Insured Delivery",
  ];
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-3 px-4 py-5 text-center sm:px-6 lg:grid-cols-4">
        {items.map((t) => (
          <span
            key={t}
            className="text-[0.7rem] uppercase tracking-luxe text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Collections ---------------- */
function Collections() {
  return (
    <Section id="collections" eyebrow="Browse by Category" title="Our Collections">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {COLLECTIONS.map((c) => (
          <a
            key={c.name}
            href="#arrivals"
            className="group relative block overflow-hidden bg-card"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
              <div>
                <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                  {c.name}
                </h3>
                <p className="text-[0.65rem] uppercase tracking-luxe text-white/70">
                  {c.count}
                </p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- New Arrivals ---------------- */
function NewArrivals() {
  return (
    <Section
      id="arrivals"
      eyebrow="Just In"
      title="New Arrivals"
      description="The latest pieces from our atelier — limited and made to order."
    >
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {ARRIVALS.map((p) => (
          <div key={p.name} className="group flex flex-col">
            <div className="overflow-hidden bg-card">
              <img
                src={p.image}
                alt={p.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                {p.name}
              </h3>
              <p className="mt-1 text-[0.7rem] uppercase tracking-luxe text-muted-foreground">
                {p.material}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {p.price}
                </span>
                <button
                  type="button"
                  className="text-[0.7rem] font-medium uppercase tracking-luxe text-primary transition-colors hover:text-foreground"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Heritage / About ---------------- */
function Heritage() {
  return (
    <section id="about" className="bg-muted/50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="order-2 lg:order-1">
          <span className="text-[0.68rem] uppercase tracking-luxe text-primary">
            Our Story
          </span>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Four Decades of Craft, Carried by Hand
          </h2>
          <div className="gold-rule mt-6 h-px w-24" />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Founded in 1978 in the heart of Karachi, Almas Jewellers began as a
              small family workshop. Today, three generations of karigars still
              shape every piece by hand — drawing on techniques passed down through
              the years.
            </p>
            <p>
              From bridal sets to everyday wear, we work only in hallmarked gold and
              certified stones, because trust is the only thing more precious than
              the metal itself.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <Stat value="1978" label="Established" />
            <Stat value="45+" label="Years of Craft" />
            <Stat value="22k" label="Hallmarked Gold" />
          </div>
          <a
            href="#collections"
            className="mt-10 inline-flex items-center gap-2 border border-foreground px-8 py-3.5 text-xs font-medium uppercase tracking-luxe text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Discover Our Work
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden">
            <img
              src={aboutCraft}
              alt="A master goldsmith crafting gold filigree jewellery by hand"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-[0.65rem] uppercase tracking-luxe text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

/* ---------------- Features ---------------- */
function Features() {
  return (
    <Section id="why" eyebrow="Why Almas" title="The Almas Promise">
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div key={f.title} className="text-center sm:text-left">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary text-primary sm:mx-0">
              <f.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="text-center">
          <span className="text-[0.68rem] uppercase tracking-luxe text-primary">
            Kind Words
          </span>
          <h2 className="mt-5 font-display text-3xl font-medium sm:text-4xl">
            Loved Across Generations
          </h2>
          <div className="gold-rule mx-auto mt-6 h-px w-24" />
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col border border-secondary-foreground/15 bg-secondary-foreground/[0.03] p-8"
            >
              <Quote className="h-7 w-7 text-primary" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-secondary-foreground/85 sm:text-base">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display text-base font-semibold">{t.name}</p>
                <p className="text-[0.7rem] uppercase tracking-luxe text-secondary-foreground/60">
                  {t.place}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact CTA ---------------- */
function ContactCTA() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-[0.68rem] uppercase tracking-luxe text-primary">
              Visit the Atelier
            </span>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Book a Private Appointment
            </h2>
            <div className="gold-rule mt-6 h-px w-24" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              See our collections in person, try on bridal sets, or commission a
              bespoke piece. Walk-ins welcome, though appointments are always
              quieter.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={logoUrl}
                alt="Almas Jewellers logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  Almas Jewellers
                </p>
                <p className="text-[0.7rem] uppercase tracking-luxe text-muted-foreground">
                  Empress Market Road, Karachi
                </p>
              </div>
            </div>
          </div>

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </Field>
              <Field label="Phone" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+92 ___ _______"
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </Field>
            </div>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </Field>
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us what you're looking for…"
                className="w-full resize-none border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </Field>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-3.5 text-xs font-medium uppercase tracking-luxe text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request Appointment
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-[0.7rem] font-medium uppercase tracking-luxe text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

/* ---------------- Shared Section ---------------- */
function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="text-center">
          <span className="text-[0.68rem] uppercase tracking-luxe text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-medium text-foreground sm:text-4xl">
            {title}
          </h2>
          <div className="gold-rule mx-auto mt-6 h-px w-24" />
          {description ? (
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

export default Index;
