import { Link } from "react-router-dom";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Stephen" },
  { to: "/projects", label: "Selected Works" },
  { to: "/contact", label: "Start a Project" },
];

const SERVICES = [
  "Business Websites",
  "Custom Web Applications",
  "School & CBT Platforms",
  "UI/UX Design Systems",
  "Website Maintenance",
];

const SOCIALS = [
  { label: "LinkedIn", href: "www.linkedin.com/in/stephen-adeyeye-3b521235b" },
  { label: "GitHub", href: "https://github.com/captaincarl01" },
  { label: "X / Twitter", href: "https://twitter.com" },
  { label: "WhatsApp", href: "https://wa.me" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant pt-space-4xl pb-space-2xl">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-2xl pb-space-3xl">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                src="/images/home (2).jpeg"
                alt="Rhematek Solutions"
                className="h-8 w-8 rounded-lg shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">
                  Rhematek Solutions
                </span>
                <span className="font-label-caps text-label-caps uppercase text-primary">
                  By Adeyeye Stephen
                </span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Engineering clean frontend architecture, business websites, and
              digital products for growing brands.
            </p>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-headline-sm">
                location_on
              </span>
              <span className="font-body-sm text-body-sm text-on-surface">
               Ilasa, Lagos State, Nigeria and Remote
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-space-md">
            <span className="font-label-caps text-label-caps uppercase text-on-surface font-bold tracking-widest">
              Quick Links
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <span className="font-label-caps text-label-caps uppercase text-on-surface font-bold tracking-widest">
              Services
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm">
              {SERVICES.map((s) => (
                <li key={s} className="text-on-surface">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-space-md">
            <span className="font-label-caps text-label-caps uppercase text-on-surface font-bold tracking-widest">
              Networks and Social
            </span>
            <div className="flex flex-wrap gap-space-xs">
              {SOCIALS.map((s) => (
                
                <a  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm hover:bg-primary hover:text-on-primary transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <div className="mt-space-sm p-space-md rounded-xl bg-surface-container-low">
              <div className="flex items-center gap-space-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="font-label-code text-label-code text-primary">
                  Status: Accepting Contracts
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/20">
          <p>
            Copyright {new Date().getFullYear()} Adeyeye Stephen / Rhematek Web
            Solutions. All rights reserved.
          </p>
          <p className="font-label-code text-label-code text-on-surface-variant">
            Crafted with Architectural Precision
          </p>
        </div>
      </div>
    </footer>
  );
}