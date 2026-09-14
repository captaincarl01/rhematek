import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import timeline from "../data/timeline.js";

const TENETS = [
  {
    icon: "verified",
    title: "Honest Scope",
    desc: "I'm upfront about what I can and can't build yet — frontend and UI is where I'm strong; backend work is a growing skill, not a finished one.",
  },
  {
    icon: "design_services",
    title: "Design-First",
    desc: "Structure and content get validated in Figma before a single component is coded.",
  },
  {
    icon: "code_blocks",
    title: "Clean Components",
    desc: "Reusable, readable React components over clever one-off code.",
  },
  {
    icon: "school",
    title: "Always Learning",
    desc: "Currently deepening Node.js, Express, and MongoDB to grow past frontend-only work.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden pb-space-4xl">
        <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center pt-space-xl lg:pt-space-3xl">
            <div className="lg:col-span-7 flex flex-col items-start gap-space-lg">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container/90 backdrop-blur-md shadow-md">
                <span className="material-symbols-outlined text-primary text-headline-sm">
                  person
                </span>
                <span className="font-label-caps text-label-caps text-secondary font-bold tracking-widest uppercase">
                  About Adeyeye Stephen
                </span>
              </div>

              <h1 className="font-headline-xl-mobile lg:text-display text-headline-xl-mobile font-extrabold tracking-tight text-on-surface">
                I don't just write code.
                <br />
                <span className="text-primary">
                  I solve business problems through technology.
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Self-taught frontend and UI developer, based in Ilasa,
                Lagos State, Nigeria — building under the Rhematek Web
                Solutions brand and currently completing NYSC.
              </p>

              <div className="flex flex-wrap gap-space-md pt-space-xs">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-xl hover:bg-secondary-container transition-all"
                >
                  Work With Me
                  <span className="material-symbols-outlined text-headline-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute inset-0 max-w-sm mx-auto aspect-square rounded-3xl bg-gradient-to-tr from-primary/30 via-transparent to-primary-container/20 blur-2xl -z-10 transform scale-105" />
              <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest">
                <img
                  src="/images/home.jpeg"
                  alt="Adeyeye Stephen"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY / MISSION / VISION */}
      <section className="w-full py-space-4xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-3xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              My Story
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              Who I Am, How I Work, Where I'm Going
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-sm">
              <span className="material-symbols-outlined text-primary text-headline-md">
                person
              </span>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                Who I Am
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                A self-taught frontend developer with a B.Ed in History and
                International Relations — a background that shapes how I
                approach problems, reading context before jumping to
                solutions.
              </p>
            </div>

            <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-headline-md">
                bolt
              </span>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                How I Work
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                I break interfaces into small, reusable components and stay
                honest about scope — frontend and UI is where I deliver
                independently; backend work is done in collaboration while I
                keep building that skill.
              </p>
            </div>

            <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-sm">
              <span className="material-symbols-outlined text-tertiary text-headline-md">
                rocket_launch
              </span>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                Where I'm Going
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Deepening Node.js, Express, and MongoDB so Rhematek can take
                on full end-to-end builds without leaning on a separate
                backend partner for every project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg pt-space-md">
            {TENETS.map((t) => (
              <div
                key={t.title}
                className="p-space-lg rounded-2xl bg-surface-container flex flex-col gap-space-sm shadow-sm"
              >
                <span className="material-symbols-outlined text-primary text-headline-md">
                  {t.icon}
                </span>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {t.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="w-full py-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-3xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              The Journey So Far
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              Career Timeline
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto w-full pl-space-lg md:pl-space-2xl">
            <div className="absolute left-0 md:left-space-xs top-2 bottom-2 w-px bg-outline-variant/30" />

            <div className="flex flex-col gap-space-2xl">
              {timeline.map((node) => (
                <div
                  key={`${node.org}-${node.period}`}
                  className="relative flex flex-col gap-space-sm pl-space-md md:pl-space-xl"
                >
                  <div className="absolute -left-[27px] md:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-surface flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full ${node.dotColor}`} />
                  </div>
                  <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-xs">
                      <span className="px-space-sm py-space-3xs rounded-full bg-primary/10 text-primary font-label-caps text-label-caps uppercase font-bold">
                        {node.period}
                      </span>
                      <span className="font-label-code text-label-code text-secondary font-semibold">
                        {node.org}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      {node.role}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs leading-relaxed">
                      {node.description}
                    </p>
                    <div className="flex flex-wrap gap-space-xs mt-space-md pt-space-xs">
                      {node.tags.map((t) => (
                        <span
                          key={t}
                          className="px-space-xs py-space-3xs rounded bg-surface-container-high text-on-surface-variant font-label-code text-label-code"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="w-full py-space-4xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-3xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              Education
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              Formal Background
            </h2>
          </div>

          <div className="max-w-2xl mx-auto w-full p-space-2xl rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm text-primary">
              <span className="material-symbols-outlined text-headline-md">
                school
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider font-bold">
                Formal Academic Degree
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
              B.Ed in History and International Relations
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Not a computer science background — the frontend and UI
              development skills were learned independently, self-taught,
              alongside this degree. NYSC service is currently pending.
            </p>
          </div>

          <div className="max-w-2xl mx-auto w-full p-space-lg rounded-xl border-2 border-dashed border-outline-variant text-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
              Add real certifications here, or remove this block
            </span>
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
                Have a project in mind?
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-xl hover:bg-secondary-container transition-all"
              >
                Let's Talk
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