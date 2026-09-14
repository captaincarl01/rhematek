import { useState } from "react";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import projects, { CATEGORIES } from "../data/projects.js";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedSlug, setExpandedSlug] = useState(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden pb-space-3xl">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl lg:pt-space-3xl flex flex-col items-start gap-space-md">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
            Selected Work
          </span>
          <h1 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
            Featured Projects
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
            A collection of interfaces, products, and business websites I've
            built — each one broken down into how it was approached, not
            just what it looks like.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="w-full pb-space-2xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-wrap gap-space-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-space-md py-space-xs rounded-full font-body-sm text-body-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="w-full pb-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-xl">
          {filtered.map((p) => {
            const isOpen = expandedSlug === p.slug;
            return (
              <div
                key={p.slug}
                className="flex flex-col rounded-2xl bg-surface-container-low overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative w-full h-56 lg:h-full bg-surface-container-high">
                    <img
                      src={p.image}
                      alt={`Screenshot of ${p.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-space-md right-space-md px-space-sm py-space-3xs rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
                      <span className="font-label-code text-label-code text-primary font-bold">
                        {p.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-space-xl flex flex-col gap-space-md">
                    <div className="flex flex-col gap-space-2xs">
                      <span className="font-label-code text-label-code text-secondary font-medium">
                        {p.category}
                      </span>
                      <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
                        {p.title}
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {p.overview}
                      </p>
                    </div>

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

                    <div className="flex items-center gap-space-md pt-space-xs">
                      
                      <a  href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-space-xs font-headline-sm text-headline-sm font-semibold text-primary hover:text-secondary transition-colors"
                      >
                        Live Demo
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
                      <button
                        onClick={() =>
                          setExpandedSlug(isOpen ? null : p.slug)
                        }
                        className="ml-auto inline-flex items-center gap-space-xs font-body-sm text-body-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors"
                      >
                        {isOpen ? "Hide Case Study" : "View Case Study"}
                        <span className="material-symbols-outlined text-headline-sm">
                          {isOpen ? "expand_less" : "expand_more"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="p-space-xl border-t border-outline-variant/20 grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-space-2xs">
                        Challenge
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {p.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-space-2xs">
                        Approach
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {p.approach}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-space-2xs">
                        Lessons Learned
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {p.lessons}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-space-2xs">
                        What I'd Improve
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {p.improve}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-center font-body-md text-body-md text-on-surface-variant py-space-2xl">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}