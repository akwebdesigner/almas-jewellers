import { useEffect, useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import logoAsset from "../assets/logo.png.asset.json";

const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
const logoUrl = base ? `${base}${logoAsset.url}` : logoAsset.url;

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "New Arrivals", href: "#arrivals" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-secondary text-secondary-foreground">
        <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[0.68rem] uppercase tracking-luxe">
          Hallmarked & Certified · Complimentary Delivery Across Pakistan
        </p>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
            : "border-transparent bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center p-1.5 text-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <img
              src={logoUrl}
              alt="Almas Jewellers logo"
              width={44}
              height={44}
              className="h-9 w-9 rounded-full object-cover sm:h-11 sm:w-11"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-wide text-foreground sm:text-xl">
                Almas
              </span>
              <span className="text-[0.6rem] uppercase tracking-luxe text-muted-foreground">
                Jewellers
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-xs font-medium uppercase tracking-luxe text-foreground/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              aria-label="Search"
              className="hidden p-1.5 text-foreground/80 transition-colors hover:text-foreground sm:inline-flex"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Shopping bag"
              className="relative p-1.5 text-foreground/80 transition-colors hover:text-foreground"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[0.6rem] font-semibold text-primary-foreground">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <span className="font-display text-xl font-semibold text-foreground">
              Almas
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-1.5 text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col px-2 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 px-3 py-4 font-display text-lg text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto px-6 py-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full bg-primary px-6 py-3 text-center text-xs font-medium uppercase tracking-luxe text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
