import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { logoDataUrl as logoUrl } from "../assets/logo-data-url";

const SHOP = [
  { label: "Rings", href: "#collections" },
  { label: "Necklaces", href: "#collections" },
  { label: "Earrings", href: "#collections" },
  { label: "Bangles", href: "#collections" },
];
const COMPANY = [
  { label: "About Us", href: "#about" },
  { label: "New Arrivals", href: "#arrivals" },
  { label: "Contact", href: "#contact" },
  { label: "Book Appointment", href: "#contact" },
];
const SUPPORT = [
  { label: "Hallmarking & Certification", href: "#" },
  { label: "Lifetime Exchange", href: "#" },
  { label: "Shipping & Returns", href: "#" },
  { label: "Care Guide", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Almas Jewellers logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full bg-background object-cover p-0.5"
              />
              <span className="font-display text-2xl font-semibold">
                Almas Jewellers
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
              Fine handcrafted gold and diamond jewellery, made in Karachi since
              1978. Every piece hallmarked, certified and made to be treasured for
              generations.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary-foreground/25 transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary-foreground/25 transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@almasjewellers.pk"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary-foreground/25 transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <FooterCol title="Shop" links={SHOP} />
          <FooterCol title="Company" links={COMPANY} />
          <FooterCol title="Support" links={SUPPORT} />
        </div>

        {/* Contact row */}
        <div className="mt-12 grid gap-6 border-t border-secondary-foreground/15 pt-10 sm:grid-cols-3">
          <ContactItem
            icon={<MapPin className="h-5 w-5" />}
            title="Visit Us"
            lines={["Empress Market Road", "Karachi, Pakistan"]}
          />
          <ContactItem
            icon={<Phone className="h-5 w-5" />}
            title="Call Us"
            lines={["+92 21 3456 7890", "Mon–Sat · 11am–8pm"]}
          />
          <ContactItem
            icon={<Mail className="h-5 w-5" />}
            title="Email Us"
            lines={["hello@almasjewellers.pk", "bridal@almasjewellers.pk"]}
          />
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/15 pt-8 text-center text-xs text-secondary-foreground/60 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Almas Jewellers. All rights reserved.</p>
          <p className="uppercase tracking-luxe">
            Portfolio Project by AK Web Design
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-luxe text-secondary-foreground/90">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 text-primary">{icon}</span>
      <div>
        <p className="font-display text-sm font-semibold uppercase tracking-luxe">
          {title}
        </p>
        {lines.map((ln) => (
          <p key={ln} className="mt-1 text-sm text-secondary-foreground/70">
            {ln}
          </p>
        ))}
      </div>
    </div>
  );
}
