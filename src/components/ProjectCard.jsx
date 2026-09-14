import { ExternalLink, Github } from "lucide-react";
import Reveal from "./Reveal.jsx";

const FIELDS = [
  ["Overview", "overview"],
  ["Challenge", "challenge"],
  ["Approach", "approach"],
  ["Lessons Learned", "lessons"],
  ["What I'd Improve", "improve"],
];

export default function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 100}>
      <div className="bg-white rounded-3xl border border-primary/5 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] overflow-hidden">
        <div className="aspect-[16/9] bg-gradient-to-br from-primary via-slate-800 to-accent/40 flex items-center justify-center">
          <span className="text-white/30 text-sm font-medium">
            {project.title} — Screenshot
          </span>
        </div>

        <div className="p-8 md:p-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-primary">
              {project.title}
            </h2>
            <p className="text-sm text-accent font-medium mt-1">
              {project.tag}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            {FIELDS.map(([label, key]) => (
              <div key={key} className={key === "overview" ? "md:col-span-2" : ""}>
                <p className="text-xs font-bold uppercase tracking-wide text-primary/40 mb-2">
                  {label}
                </p>
                <p className="text-primary/70 leading-relaxed">
                  {project[key]}
                </p>
              </div>
            ))}

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-primary/40 mb-2">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-primary/70 bg-background px-2.5 py-1 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            
              <a href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Live Demo <ExternalLink size={14} />
            </a>
            
              <a href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/60 hover:text-primary transition-colors"
            >
              <Github size={14} /> Github
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}