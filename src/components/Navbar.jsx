import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/rhematek", label: "Rhematek" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-2xl shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-space-sm group"
        >
          <img
            src="/images/home (2).jpeg"
            alt="logo"
            className="h-8 w-8 rounded-lg shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
              Adeyeye Stephen
            </span>
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
              Rhematek Solutions
            </span>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-space-3xs rounded-full bg-surface-container-high/60">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">
            Available for Projects
          </span>
        </div>

        {/* DESKTOP NAV -- visible lg and up */}
        <nav className="hidden lg:flex items-center gap-space-xs px-space-xs py-space-3xs rounded-xl bg-surface-container/60">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `px-space-sm py-space-xs rounded-lg font-body-sm text-body-sm transition-all ${
                  isActive
                    ? "text-on-primary-container bg-primary-container font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE -- desktop CTA, mobile hamburger */}
        <div className="flex items-center gap-space-sm">
          <ThemeToggle />

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-space-sm pl-space-lg pr-space-xs py-space-2xs rounded-full bg-primary-container text-on-primary-container shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:bg-secondary-container transition-all"
          >
            <span className="font-headline-sm text-headline-sm font-bold">
              Let's Talk
            </span>
          </Link>

          {/* HAMBURGER -- visible below lg */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="lg:hidden w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-headline-sm">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL -- slides open below lg */}
      {menuOpen && (
        <div className="lg:hidden border-t border-outline-variant/20 bg-surface-container-lowest px-gutter-mobile py-space-lg flex flex-col gap-space-xs">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-space-md py-space-sm rounded-lg font-body-md text-body-md transition-all ${
                  isActive
                    ? "text-on-primary-container bg-primary-container font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-space-sm inline-flex items-center justify-center gap-space-sm px-space-lg py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-md"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </header>
  );
}