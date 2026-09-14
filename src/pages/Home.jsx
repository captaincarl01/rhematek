import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import projects from "../data/projects.js";

const TECH_STACK = [
  { name: "React.js", tag: "Core Frontend", icon: "code_blocks" },
  { name: "JavaScript", tag: "Modern ES6+", icon: "javascript" },
  { name: "HTML5 / CSS3", tag: "Semantic Web", icon: "html" },
  { name: "Tailwind CSS", tag: "Fluid Design", icon: "palette" },
  { name: "Bootstrap", tag: "Rapid UI", icon: "grid_view" },
  { name: "Vite", tag: "Instant HMR", icon: "speed" },
  { name: "Figma", tag: "UI System Design", icon: "draw" },
  { name: "Git & GitHub", tag: "Version Control", icon: "fork_right" },
  { name: "Vercel & Netlify", tag: "Deployment", icon: "cloud_sync" },
];

const LEARNING_STACK = [
  { name: "Node.js", icon: "terminal" },
  { name: "Express", icon: "api" },
  { name: "MongoDB", icon: "database" },
];

const SERVICES = [
  {
    icon: "domain",
    title: "Business Websites",
    desc: "Clean, credible corporate sites built to convert visitors into inquiries — matched precisely to a Figma design or built from scratch.",
  },
  {
    icon: "space_dashboard",
    title: "Custom Web Applications",
    desc: "Frontend-focused web apps with rich UI, dashboards, and component architecture — paired with a backend partner when full-stack work is needed.",
  },
  {
    icon: "school",
    title: "School & CBT Platforms",
    desc: "Computer-based testing and school portal interfaces designed for clarity under exam conditions.",
  },
  {
    icon: "shopping_bag",
    title: "E-commerce Storefronts",
    desc: "Product catalogs, cart flows, and checkout experiences — including WhatsApp-first checkout for local markets.",
  },
  {
    icon: "design_services",
    title: "UI/UX Design Systems",
    desc: "Reusable component libraries and design tokens so a product stays visually consistent as it grows.",
  },
  {
    icon: "build",
    title: "Website Maintenance",
    desc: "Ongoing fixes, content updates, and performance tuning for sites already in production.",
  },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Understanding the goal, audience, and constraints before any design starts." },
  { step: "02", title: "Planning", desc: "Sitemap, structure, and content plan agreed before code is touched." },
  { step: "03", title: "Design", desc: "UI built in Figma first, so structure and content are validated early." },
  { step: "04", title: "Development", desc: "Component-by-component build in React and Tailwind CSS." },
  { step: "05", title: "Testing", desc: "Cross-device checks — layout, performance, and interaction states." },
  { step: "06", title: "Deployment", desc: "Shipped to Vercel or Netlify with a clean, documented handover." },
  { step: "07", title: "Maintenance", desc: "Ongoing support available after launch, as needed." },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden pb-space-4xl lg:pb-space-5xl">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full bg-primary-container/10 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center pt-space-xl lg:pt-space-3xl">
            {/* Left column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-space-lg">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container/90 backdrop-blur-md shadow-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="font-label-caps text-label-caps text-secondary font-bold tracking-widest uppercase">
                  Frontend Developer &amp; Founder of Rhematek
                </span>
              </div>

              <div className="flex flex-col gap-space-xs">
                <h1 className="font-display text-display-mobile lg:text-display font-extrabold tracking-tight text-on-surface">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-on-surface via-primary to-secondary bg-clip-text text-transparent">
                    Adeyeye Stephen
                  </span>
                </h1>
                <p className="font-headline-md text-headline-md text-primary font-semibold tracking-tight">
                  Software Engineer | Frontend Developer | Founder of
                  Rhematek Web Solutions
                </p>
              </div>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                I build clean, scalable frontend interfaces and business
                websites that solve real commercial problems — merging
                careful engineering with high-converting visual design.
              </p>

              <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-xl hover:bg-secondary-container transition-all"
                >
                  <span>Hire Me</span>
                  <span className="material-symbols-outlined text-headline-sm">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  to="/projects"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-surface-container-high/70 text-on-surface font-headline-sm text-headline-sm font-semibold backdrop-blur-md hover:bg-surface-container-highest transition-all"
                >
                  <span>View Projects</span>
                  <span className="material-symbols-outlined text-headline-sm">
                    open_in_new
                  </span>
                </Link>
              </div>

              {/* Stats — edit these to reflect real numbers as they grow */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xl">
                {[
                  ["3+", "Projects Built"],
                  ["2024", "Freelancing Since"],
                  ["9+", "Tools & Frameworks"],
                  ["1+", "Years Learning"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-headline-xl text-headline-xl font-bold text-on-surface tracking-tight">
                        {value}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="font-label-code text-label-code text-on-surface-variant uppercase tracking-wider mt-space-2xs">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — hero portrait placeholder */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute inset-0 max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-tr from-primary/30 via-transparent to-primary-container/20 blur-2xl -z-10 transform scale-105" />
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest">
               <img
                  src="/images/home.jpeg"
                  alt="Adeyeye Stephen"
                  className="w-full h-full"
                />
                <div className="absolute top-space-md left-space-md px-space-md py-space-xs rounded-xl bg-surface-container-highest/80 backdrop-blur-xl shadow-lg flex items-center gap-space-xs">
                  <span
                    className="material-symbols-outlined text-primary text-headline-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-on-surface uppercase font-bold">
                      Frontend Focused
                    </span>
                    <span className="font-label-code text-label-code text-primary font-semibold">
                      Reliable Delivery
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-space-md right-space-md px-space-md py-space-xs rounded-xl bg-surface-container-highest/80 backdrop-blur-xl shadow-lg flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-headline-sm">
                    bolt
                  </span>
                  <div className="flex flex-col text-right">
                    <span className="font-label-caps text-label-caps text-on-surface uppercase font-bold">
                      React &amp; Tailwind
                    </span>
                    <span className="font-label-code text-label-code text-secondary font-semibold">
                      UI Specialist
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECH ECOSYSTEM */}
      <section className="w-full py-space-3xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col items-center">
          <div className="flex items-center gap-space-xs mb-space-xl">
            <span className="h-1 w-6 bg-primary rounded-full" />
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">
              Core Toolkit
            </span>
            <span className="h-1 w-6 bg-primary rounded-full" />
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-space-sm">
            {TECH_STACK.map((t) => (
              <div
                key={t.name}
                className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col items-center justify-center gap-space-2xs text-center group cursor-default shadow-sm"
              >
                <span className="material-symbols-outlined text-primary text-headline-md group-hover:scale-110 transition-transform">
                  {t.icon}
                </span>
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {t.name}
                </span>
                <span className="font-label-code text-label-code text-on-surface-variant">
                  {t.tag}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full mt-space-xl pt-space-xl border-t border-outline-variant/20 flex flex-col items-center gap-space-md">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">
              Currently Learning
            </span>
            <div className="flex flex-wrap justify-center gap-space-sm">
              {LEARNING_STACK.map((t) => (
                <div
                  key={t.name}
                  className="px-space-md py-space-xs rounded-xl bg-surface-container-low flex items-center gap-space-xs"
                >
                  <span className="material-symbols-outlined text-secondary text-headline-sm">
                    {t.icon}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS */}
      <section className="w-full py-space-4xl lg:py-space-5xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-3xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
                Selected Work
              </span>
              <h2 className="font-headline-xl-mobile lg:text-headline-xl lg:font-headline-xl text-headline-xl-mobile font-bold text-on-surface">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-space-xs font-headline-sm text-headline-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              <span>View All Projects</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-xl">
            {projects.map((p) => (
              <div
                key={p.slug}
                className="flex flex-col rounded-2xl bg-surface-container-low overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative w-full h-56 bg-surface-container-high overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full"
                  />
                  <div className="absolute top-space-md right-space-md px-space-sm py-space-3xs rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
                    <span className="font-label-code text-label-code text-primary font-bold">
                      {p.status}
                    </span>
                  </div>
                </div>

                <div className="p-space-xl flex flex-col flex-1 justify-between gap-space-lg">
                  <div className="flex flex-col gap-space-sm">
                    <span className="font-label-code text-label-code text-secondary font-medium">
                      {p.category}
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-space-md pt-space-xs">
                    <div className="flex flex-wrap gap-space-2xs">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="px-space-xs py-space-3xs rounded bg-surface-container-high font-label-code text-label-code text-on-surface"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-space-xs">
                      
                      <a  href={p.live}
                        className="inline-flex items-center gap-space-xs font-headline-sm text-headline-sm font-semibold text-primary hover:text-secondary transition-colors"
                      >
                        <span>Live Demo</span>
                        <span className="material-symbols-outlined text-headline-sm">
                          arrow_outward
                        </span>
                      </a>
                      
                      <a  href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="p-space-xs rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-headline-sm">
                          code
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES */}
      <section className="w-full py-space-4xl lg:py-space-5xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-3xl">
          <div className="flex flex-col max-w-2xl gap-space-xs">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              Services &amp; Capabilities
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              What I Can Build For You
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Frontend-focused engineering, from single landing pages to
              full product interfaces — under the Rhematek Web Solutions
              brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="p-space-xl rounded-2xl bg-surface-container flex flex-col justify-between gap-space-lg hover:bg-surface-container-high transition-all shadow-md group"
              >
                <div className="flex flex-col gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-headline-md">
                      {s.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    {s.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY WORK WITH ME — PROCESS */}
      <section className="w-full py-space-4xl lg:py-space-5xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-3xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              How I Work
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              A Clear, Predictable Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col gap-space-sm shadow-sm"
              >
                <span className="font-label-code text-label-code text-primary font-bold">
                  {p.step}
                </span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {p.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS — placeholder until real client feedback exists */}
      <section className="w-full py-space-4xl lg:py-space-5xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-2xl items-center text-center">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
            Client Feedback
          </span>
          <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
            Testimonials Coming Soon
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            {/* This section is reserved for real feedback from clients. Once a
            project wraps, ask the client for a short quote and swap this
            placeholder out — never publish a testimonial that wasn't
            actually given. */}
          </p>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="w-full py-space-4xl lg:py-space-5xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="relative rounded-3xl bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container overflow-hidden px-space-xl py-space-4xl text-center">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary-container/10 rounded-full blur-3xl" />
            <div className="relative flex flex-col items-center gap-space-lg">
              <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface max-w-2xl">
                Let's Build Something Amazing Together
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-space-md">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-xl hover:bg-secondary-container transition-all"
                >
                  Start a Project
                  <span className="material-symbols-outlined text-headline-sm">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-surface-container-high text-on-surface font-headline-sm text-headline-sm font-semibold hover:bg-surface-container-highest transition-all"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}