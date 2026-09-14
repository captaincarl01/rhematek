import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";

const VALUES = [
  {
    icon: "verified",
    title: "Honest Scope",
    desc: "Clear about what's frontend-ready today versus what's still being learned — no overpromising on backend or infrastructure work.",
  },
  {
    icon: "design_services",
    title: "Design-First",
    desc: "Every build starts in Figma. Structure and content get validated before a single component is coded.",
  },
  {
    icon: "code_blocks",
    title: "Clean Architecture",
    desc: "Reusable, readable components over one-off hacks — code that's easy to hand off or extend later.",
  },
  {
    icon: "groups",
    title: "Team Collaboration",
    desc: "One point of contact throughout, even when a project scales up and brings in collaborators under the Rhematek brand.",
  },
];

const INDUSTRIES = [
  { icon: "account_balance", name: "FinTech", tag: "Escrow & Payment UIs" },
  { icon: "school", name: "EdTech", tag: "CBT & School Portals" },
  { icon: "shopping_bag", name: "E-commerce", tag: "Storefronts & Checkout" },
  { icon: "home_work", name: "PropTech", tag: "Rental & Listing Platforms" },
  { icon: "local_hospital", name: "HealthTech", tag: "Booking & Portals" },
  { icon: "local_shipping", name: "Logistics", tag: "Tracking & Dispatch" },
  { icon: "solar_power", name: "Clean Energy", tag: "Smart Metering UIs" },
  { icon: "rocket_launch", name: "Startups", tag: "MVP & Landing Pages" },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Understanding the goal, audience, and constraints before any design starts." },
  { step: "02", title: "Planning", desc: "Sitemap, structure, and content plan agreed before code is touched." },
  { step: "03", title: "Design", desc: "UI built in Figma first, so structure and content are validated early." },
  { step: "04", title: "Development", desc: "Component-by-component build in React and Tailwind CSS." },
  { step: "05", title: "Testing", desc: "Cross-device checks — layout, performance, and interaction states." },
  { step: "06", title: "Deployment & Handover", desc: "Shipped to Vercel or Netlify with a clean, documented handover." },
];

const ENGAGEMENT_MODELS = [
  {
    title: "One-Off Project",
    desc: "A single website, landing page, or feature build — scoped, quoted, and delivered.",
    features: ["Fixed scope & timeline", "Figma-first design", "Deployment included"],
  },
  {
    title: "Ongoing Partner",
    desc: "Continued work across multiple features or pages for a growing product.",
    features: ["Priority turnaround", "Direct Git collaboration", "Flexible monthly scope"],
    highlighted: true,
  },
  {
    title: "Maintenance & Fixes",
    desc: "Keeping an existing site healthy — content updates, bug fixes, performance tuning.",
    features: ["As-needed support", "Quick response time", "No long-term lock-in"],
  },
];

export default function Rhematek() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden pb-space-3xl">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl lg:pt-space-3xl flex flex-col items-start gap-space-md">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container/90 backdrop-blur-md shadow-md">
            <span className="material-symbols-outlined text-primary text-headline-sm">
              domain
            </span>
            <span className="font-label-caps text-label-caps text-secondary font-bold tracking-widest uppercase">
              Rhematek Web Solutions
            </span>
          </div>
          <h1 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface max-w-2xl">
            A Frontend-First Digital Agency, Built On Direct Collaboration
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
            Rhematek is the brand under which I take on client work —
            websites, web applications, and UI/UX design — with one person
            handling the project from first Figma sketch to final deploy.
          </p>
        </div>
      </section>

      {/* ABOUT + FOUNDER */}
      <section className="w-full py-space-3xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-7 p-space-2xl rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-lg">
            <div>
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
                Agency Philosophy
              </span>
              <h2 className="font-headline-md text-headline-md font-bold text-on-surface mt-space-xs">
                Small By Design, Not By Accident
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Rhematek stays lean by design. Smaller projects run solo, end
              to end. Larger or full-stack builds bring in team
              collaboration — other developers working under the Rhematek
              brand — but you still deal with one point of contact from
              first Figma sketch to final deploy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-sm">
              <div className="p-space-lg rounded-xl bg-surface-container">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
                  Mission
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  Build clean, usable digital products for businesses that
                  can't yet afford a full in-house engineering team.
                </p>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
                  Vision
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  Grow Rhematek from a solo freelance practice into a small,
                  trusted team — one honest project at a time.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-space-2xl rounded-2xl bg-surface-container-low shadow-md flex flex-col justify-between">
            <div className="flex items-center gap-space-md mb-space-lg">
              <img
                src="/images/home.jpeg"
                alt="Adeyeye Stephen"
                className="w-20 h-20 rounded-2xl shrink-0"
              />
              <div>
                <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
                  Adeyeye Stephen
                </h4>
                <p className="font-label-caps text-label-caps uppercase text-primary font-semibold">
                  Founder & Frontend/UI Developer
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Ilasa, Lagos State, Nigeria
                </p>
              </div>
            </div>
            <blockquote className="font-body-md text-body-md text-on-surface italic leading-relaxed">
              "I'd rather tell a client exactly what I can build today than
              promise something I'd have to fake my way through later."
            </blockquote>
            <div className="mt-space-lg flex flex-wrap gap-space-2xs">
              {["React", "Tailwind CSS", "Figma", "Vite"].map((t) => (
                <span
                  key={t}
                  className="px-space-xs py-space-3xs rounded bg-surface-container-high font-label-code text-label-code text-on-surface"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md pt-space-md border-t border-outline-variant/20">
              Rhematek takes on full-stack projects too — frontend built
              directly, backend and larger builds delivered through team
              collaboration when the scope calls for it, always under one
              brand and one point of contact.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full py-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-2xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              Core Values
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              How Rhematek Operates
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-space-sm"
              >
                <span className="material-symbols-outlined text-primary text-headline-md">
                  {v.icon}
                </span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {v.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="w-full py-space-4xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-2xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              Industries We Accelerate
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              Serving Businesses Nationwide
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              FinTech, E-commerce, and PropTech reflect direct project
              experience. The rest are industries Rhematek is actively
              taking on — delivered solo or through team collaboration
              when a project calls for it.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="p-space-lg rounded-2xl bg-surface-container flex flex-col items-center text-center gap-space-xs shadow-sm"
              >
                <span className="material-symbols-outlined text-primary text-headline-md">
                  {ind.icon}
                </span>
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {ind.name}
                </span>
                <span className="font-label-code text-label-code text-on-surface-variant">
                  {ind.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full py-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-2xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              Company Process
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              How A Project Runs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
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

      {/* ENGAGEMENT MODELS */}
      <section className="w-full py-space-4xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-2xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              Working Together
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              Engagement Models
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            {ENGAGEMENT_MODELS.map((m) => (
              <div
                key={m.title}
                className={`p-space-xl rounded-2xl flex flex-col gap-space-md shadow-md ${
                  m.highlighted
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-surface-container-low text-on-surface"
                }`}
              >
                <h3 className="font-headline-md text-headline-md font-bold">
                  {m.title}
                </h3>
                <p
                  className={`font-body-sm text-body-sm leading-relaxed ${
                    m.highlighted ? "opacity-90" : "text-on-surface-variant"
                  }`}
                >
                  {m.desc}
                </p>
                <ul className="flex flex-col gap-space-xs pt-space-xs">
                  {m.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-space-xs font-body-sm text-body-sm"
                    >
                      <span className="material-symbols-outlined text-headline-sm">
                        check_circle
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — placeholder until real client feedback exists */}
      <section className="w-full py-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-md items-center text-center">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
            Client Feedback
          </span>
          <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
            Testimonials Coming Soon
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Reserved for real feedback from real clients — swap this in
            once a project wraps and a client agrees to be quoted.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="relative rounded-3xl bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container overflow-hidden px-space-xl py-space-4xl text-center">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative flex flex-col items-center gap-space-lg">
              <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface max-w-2xl">
                Have A Project For Rhematek?
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-xl hover:bg-secondary-container transition-all"
              >
                Start a Conversation
                <span className="material-symbols-outlined text-headline-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}