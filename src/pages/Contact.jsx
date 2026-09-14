import { useState } from "react";

const PROJECT_TYPES = [
  "Business Website",
  "Web Application",
  "School / CBT Platform",
  "E-commerce Store",
  "UI/UX Design",
  "Ongoing Maintenance",
];

const TIMELINES = ["ASAP", "Within a Month", "1-3 Months", "Just Exploring"];

const FAQS = [
  {
    q: "Can I hire you individually, or is it only through Rhematek?",
    a: "Both work -- smaller projects can run as direct freelance work, and anything larger or full-stack runs under the Rhematek brand with team collaboration where needed.",
  },
  {
    q: "How quickly can we kick off a new project?",
    a: "Depends on current workload, but I'll always give you a real answer on the discovery call rather than a guessed date.",
  },
  {
    q: "What if I need an NDA before sharing project details?",
    a: "No problem -- happy to sign a mutual NDA before any detailed discussion.",
  },
];

export default function Contact() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [timeline, setTimeline] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [openFaq, setOpenFaq] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const toggleType = (t) => {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mdeorvnq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          projectType: selectedTypes.join(", ") || "Not specified",
          timeline: timeline || "Not specified",
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden pb-space-3xl">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl lg:pt-space-3xl flex flex-col items-start gap-space-md">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
            Contact
          </span>
          <h1 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface max-w-2xl">
            Let's Talk About Your Project
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
            Tell me a bit about what you're building, and I'll get back to
            you directly -- no account managers, no forms into a void.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xl w-full max-w-2xl">
            {[
              ["verified_user", "Mutual NDA", "Available before any detailed discussion"],
              ["key", "100% Code Ownership", "Full transfer on final delivery"],
              ["public", "Sango-Ota, Nigeria", "UTC+1, open to remote clients"],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="p-space-md rounded-xl bg-surface-container/60 shadow-md backdrop-blur-md flex flex-col gap-space-2xs"
              >
                <span className="material-symbols-outlined text-primary text-headline-sm">
                  {icon}
                </span>
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {title}
                </span>
                <span className="font-label-code text-label-code text-on-surface-variant">
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT: INTAKE FORM + DIRECT CHANNELS */}
      <section className="w-full pb-space-4xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* INTAKE FORM */}
          <div className="lg:col-span-7 p-space-2xl rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-lg">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
              Start a Project
            </h2>

            {status === "sent" ? (
              <div className="p-space-xl rounded-xl bg-primary/10 text-center flex flex-col items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-headline-lg">
                  check_circle
                </span>
                <p className="font-body-md text-body-md text-on-surface">
                  Message sent -- I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-space-lg">
                <div>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">
                    What are you building?
                  </span>
                  <div className="flex flex-wrap gap-space-xs mt-space-sm">
                    {PROJECT_TYPES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => toggleType(t)}
                        className={`px-space-md py-space-xs rounded-full font-body-sm text-body-sm font-medium transition-all ${
                          selectedTypes.includes(t)
                            ? "bg-primary-container text-on-primary-container"
                            : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">
                    Timeline
                  </span>
                  <div className="flex flex-wrap gap-space-xs mt-space-sm">
                    {TIMELINES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`px-space-md py-space-xs rounded-full font-body-sm text-body-sm font-medium transition-all ${
                          timeline === t
                            ? "bg-primary-container text-on-primary-container"
                            : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-space-md py-space-sm rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="px-space-md py-space-sm rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary"
                  />
                </div>

                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="px-space-md py-space-sm rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-xl hover:bg-secondary-container transition-all disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Project Details"}
                  <span className="material-symbols-outlined text-headline-sm">
                    arrow_forward
                  </span>
                </button>
                {status === "error" && (
                  <p className="font-label-code text-label-code text-error text-center">
                    Something went wrong -- try again, or email me directly.
                  </p>
                )}
                <p className="font-label-code text-label-code text-on-surface-variant text-center">
                  Your details go straight to my inbox -- nothing is stored
                  on this site.
                </p>
              </form>
            )}
          </div>

          {/* DIRECT CHANNELS */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-md">
              <div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                  Adeyeye Stephen
                </h3>
                <p className="font-label-caps text-label-caps uppercase text-primary font-semibold">
                  Founder, Rhematek Web Solutions
                </p>
              </div>

              
             <a   href="mailto:adeyeyestephen278@gmail.com"
                className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-primary">mail</span>
                <div className="flex flex-col">
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    Email
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    adeyeyestephen278@gmail.com
                  </span>
                </div>
              </a>

              
             <a   href="https://wa.me/2347039655708"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-primary">forum</span>
                <div className="flex flex-col">
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    WhatsApp -- Line 1
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    0703 965 5708
                  </span>
                </div>
              </a>

              
            <a    href="https://wa.me/2348156505752"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-primary">forum</span>
                <div className="flex flex-col">
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    WhatsApp -- Line 2
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    0815 650 5752
                  </span>
                </div>
              </a>

              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                
                <a  href="https://github.com/captaincarl01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm hover:bg-primary hover:text-on-primary transition-colors"
                >
                  GitHub
                </a>
                
                <a  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm hover:bg-primary hover:text-on-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-md">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Operating Presence
              </h3>
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-headline-sm">apartment</span>
                <div>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">
                    Ilasa, Lagos State, Nigeria
                  </p>
                  <p className="font-label-code text-label-code text-on-surface-variant">
                    West Africa Time (WAT / UTC+1)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-headline-sm">language</span>
                <div>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">
                    Open to Remote Clients
                  </p>
                  <p className="font-label-code text-label-code text-on-surface-variant">
                    Async-friendly via GitHub and chat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-space-4xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-2xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              FAQ
            </span>
            <h2 className="font-headline-xl-mobile lg:text-headline-xl text-headline-xl-mobile font-bold text-on-surface">
              Engagement Clarity
            </h2>
          </div>
          <div className="max-w-2xl mx-auto w-full flex flex-col gap-space-sm">
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
    </div>
  );
}