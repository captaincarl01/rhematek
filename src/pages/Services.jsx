import { useState } from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: "domain",
    title: "Business Websites",
    tag: "Corporate & Local Business Sites",
    features: [
      "Custom design matched to a Figma file or built from scratch",
      "Fully responsive across mobile, tablet, and desktop",
      "Deployed to Vercel or Netlify with a clean handover",
      "Basic SEO structure and fast load times",
    ],
    timeline: "1-3 Weeks",
    deliverable: "Deployed, Responsive Website",
  },
  {
    icon: "space_dashboard",
    title: "Custom Web Applications",
    tag: "Frontend-Led, Team Collaboration for Backend",
    features: [
      "React component architecture built for growth",
      "Dashboards, forms, and interactive UI states",
      "Backend delivered solo or through team collaboration",
      "Git-based workflow with clear handoff",
    ],
    timeline: "3-6 Weeks",
    deliverable: "Production Frontend + Backend Integration",
  },
  {
    icon: "school",
    title: "School & CBT Platforms",
    tag: "Computer-Based Testing & Portals",
    features: [
      "Exam interfaces designed for clarity under time pressure",
      "Student, moderator, and admin role-based views",
      "Results and review screens",
      "Built with React Router and Tailwind CSS",
    ],
    timeline: "4-8 Weeks",
    deliverable: "CBT Platform & Admin Views",
  },
  {
    icon: "shopping_bag",
    title: "E-commerce Storefronts",
    tag: "Product Catalogs & Checkout Flows",
    features: [
      "Product listing, cart, and checkout UI",
      "WhatsApp-first checkout for local markets, or full payment integration",
      "Image management via Cloudinary",
      "Backend paired with team collaboration when needed",
    ],
    timeline: "2-5 Weeks",
    deliverable: "Working Storefront",
  },
  {
    icon: "design_services",
    title: "UI/UX Design Systems",
    tag: "Reusable Component Libraries",
    features: [
      "Design tokens defined in Figma and matched in Tailwind",
      "Reusable component library",
      "Consistent spacing, color, and typography rules",
      "Documentation for future designers or developers",
    ],
    timeline: "2-3 Weeks",
    deliverable: "Figma File + Component Library",
  },
  {
    icon: "build",
    title: "Website Maintenance",
    tag: "Fixes, Updates & Performance",
    features: [
      "Content and copy updates",
      "Bug fixes on existing builds",
      "Basic performance tuning",
      "As-needed support, no long-term lock-in",
    ],
    timeline: "Ongoing",
    deliverable: "As-Needed Support",
  },
];

const FRAMEWORK = [
  { step: "01", icon: "account_tree", title: "Discovery", desc: "Understanding the goal, audience, and constraints before any design starts." },
  { step: "02", icon: "draw", title: "Design", desc: "UI built in Figma first, so structure and content are validated early." },
  { step: "03", icon: "terminal", title: "Development", desc: "Component-by-component build in React and Tailwind CSS." },
  { step: "04", icon: "task_alt", title: "Testing", desc: "Cross-device checks - layout, performance, and interaction states." },
  { step: "05", icon: "rocket_launch", title: "Launch & Handover", desc: "Deployed to Vercel or Netlify with a clean, documented handover." },
];

const FAQS = [
  {
    q: "Do you handle backend development yourself?",
    a: "Frontend and UI is where I work independently. Backend work is delivered through team collaboration - I coordinate the project, but backend code is written together with a collaborator rather than solo.",
  },
  {
    q: "What's your typical turnaround time?",
    a: "Depends on scope - a landing page can take 1-3 weeks, while a full web application with backend integration runs 3-6 weeks. Timelines are agreed before work starts.",
  },
  {
    q: "Do I own the code after the project is done?",
    a: "Yes - full code and repository access is handed over once the project is complete and paid for.",
  },
  {
    q: "Can you work with an existing design?",
    a: "Yes - I regularly build directly from a client's Figma file, matching spacing and typography precisely.",
  },
  {
    q: "How do we communicate during the project?",
    a: "Directly - there's no account manager layer. You talk to me throughout.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope, so I don't publish fixed prices - reach out with your project details and I'll put together a quote.",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden pb-space-3xl">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl lg:pt-space-3xl flex flex-col items-start gap-space-md">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
            Services
          </span>
          <h1 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface max-w-2xl">
            What I Can Build For You
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
            Frontend-focused engineering, from a single landing page to a
            full product interface - backed by team collaboration under
            the Rhematek brand when a project needs more than frontend.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xl w-full">
            {[
              ["code", "100% Code Ownership", "Full repository transfer on final delivery"],
              ["design_services", "Figma-First Builds", "Matched precisely to your design, or built from scratch"],
              ["handshake", "Direct Communication", "One point of contact, start to finish"],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="p-space-lg rounded-xl bg-surface-container/60 shadow-md backdrop-blur-md flex items-start gap-space-md"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-headline-md">
                    {icon}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    {title}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DEEP-DIVE CARDS */}
      <section className="w-full py-space-3xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="p-space-xl rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-md"
            >
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-headline-md">
                    {s.icon}
                  </span>
                </div>
                <div>
                  <span className="font-label-code text-label-code text-primary font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    {s.title}
                  </h3>
                </div>
              </div>
              <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">
                {s.tag}
              </p>
              <ul className="flex flex-col gap-space-xs">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-space-xs font-body-sm text-body-sm text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined text-primary text-headline-sm shrink-0">
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-space-sm mt-auto border-t border-outline-variant/20">
                <div className="flex flex-col">
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    Typical Timeline
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                    {s.timeline}
                  </span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    Deliverable
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                    {s.deliverable}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-STEP FRAMEWORK */}
      <section className="w-full py-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-2xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              How I Work
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              A Clear, Predictable Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-lg">
            {FRAMEWORK.map((f) => (
              <div
                key={f.step}
                className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col gap-space-sm shadow-sm"
              >
                <span className="material-symbols-outlined text-primary text-headline-md">
                  {f.icon}
                </span>
                <span className="font-label-code text-label-code text-primary font-bold">
                  STEP {f.step}
                </span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {f.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING - contact for a quote, no fixed tiers */}
      <section className="w-full py-space-4xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="max-w-2xl mx-auto text-center p-space-2xl rounded-3xl bg-surface-container-low shadow-xl flex flex-col items-center gap-space-md">
            <span className="material-symbols-outlined text-primary text-headline-lg">
              request_quote
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              Pricing Depends On Scope
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every project is different, so pricing is quoted per project
              rather than fixed to a tier. Reach out with what you need and
              I'll put together a clear quote in US Dollars.
            </p>
            <Link
              to="/contact"
              className="mt-space-sm inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-xl hover:bg-secondary-container transition-all"
            >
              Request a Quote
              <span className="material-symbols-outlined text-headline-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-2xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              FAQ
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto w-full flex flex-col gap-space-sm">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl bg-surface-container-low shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-space-md p-space-lg text-left"
                  >
                    <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      {faq.q}
                    </span>
                    <span className="material-symbols-outlined text-primary text-headline-sm shrink-0">
                      {isOpen ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-space-lg pb-space-lg font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="relative rounded-3xl bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container overflow-hidden px-space-xl py-space-4xl text-center">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative flex flex-col items-center gap-space-lg">
              <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface max-w-2xl">
                Ready To Start A Project?
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-xl hover:bg-secondary-container transition-all"
              >
                Contact Me
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