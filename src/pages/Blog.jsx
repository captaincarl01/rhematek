import { useState } from "react";
import posts from "../data/posts.js";

const CATEGORIES = [
  "All",
  "Frontend",
  "React",
  "Design Systems",
  "Freelancing",
  "Agency & Operations",
];

function PostBody({ body }) {
  return (
    <div className="flex flex-col gap-space-md">
      {body.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="font-headline-md text-headline-md font-bold text-on-surface mt-space-md"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              className="font-headline-sm text-headline-sm font-bold text-on-surface mt-space-sm"
            >
              {block.text}
            </h3>
          );
        }
        return (
          <p
            key={i}
            className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openSlug, setOpenSlug] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to a real email service (Mailchimp, Buttondown, etc.)
    setSubscribed(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden pb-space-3xl">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl lg:pt-space-3xl flex flex-col items-start gap-space-md">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
            Blog
          </span>
          <h1 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface max-w-2xl">
            Notes On Frontend, Freelancing & Building Rhematek
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
            Writing about what I'm actually learning and building -- React
            patterns, client project lessons, and running Rhematek day to
            day.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
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

      {/* POSTS */}
      <section className="w-full pb-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-lg">
          {filtered.length === 0 && (
            <div className="max-w-2xl mx-auto text-center p-space-2xl rounded-3xl bg-surface-container-low shadow-md flex flex-col items-center gap-space-md">
              <span className="material-symbols-outlined text-primary text-headline-lg">
                draft
              </span>
              <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
                No Posts In This Category Yet
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed max-w-md">
                More writing is on the way -- subscribe below to get
                notified.
              </p>
            </div>
          )}

          {filtered.map((post) => {
            const isOpen = openSlug === post.slug;
            return (
              <article
                key={post.slug}
                className="rounded-2xl bg-surface-container-low shadow-md overflow-hidden"
              >
                <div className="p-space-xl flex flex-col gap-space-sm">
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <span className="px-space-sm py-space-3xs rounded-full bg-primary/10 text-primary font-label-caps text-label-caps uppercase font-bold">
                      {post.category}
                    </span>
                    <span className="font-label-code text-label-code text-on-surface-variant">
                      {post.readTime} read &middot; {post.date}
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
                    {post.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {post.dek}
                  </p>
                  <div className="flex flex-wrap gap-space-2xs pt-space-xs">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="px-space-xs py-space-3xs rounded bg-surface-container-high font-label-code text-label-code text-on-surface"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setOpenSlug(isOpen ? null : post.slug)}
                    className="mt-space-sm self-start inline-flex items-center gap-space-xs font-headline-sm text-headline-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    {isOpen ? "Collapse" : "Read Article"}
                    <span className="material-symbols-outlined text-headline-sm">
                      {isOpen ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                </div>

                {isOpen && (
                  <div className="px-space-xl pb-space-xl border-t border-outline-variant/20 pt-space-lg">
                    <PostBody body={post.body} />
                    <div className="mt-space-lg pt-space-lg border-t border-outline-variant/20 flex items-center gap-space-sm">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                        Written by
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                        Adeyeye Stephen -- Founder, Rhematek Web Solutions
                      </span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* NEWSLETTER SIGNUP */}
      <section className="w-full py-space-4xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-space-md">
            <span className="material-symbols-outlined text-primary text-headline-lg">
              mail
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
              Get Notified On New Posts
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              No spam -- just an email whenever a new article goes live.
            </p>

            {subscribed ? (
              <p className="font-body-sm text-body-sm text-primary font-semibold pt-space-sm">
                Thanks -- you're on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="w-full flex flex-col sm:flex-row gap-space-sm pt-space-sm"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-space-md py-space-sm rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-space-xl py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-md hover:bg-secondary-container transition-all"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}