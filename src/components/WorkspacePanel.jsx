import { motion } from "framer-motion";

const STACK = [
  { name: "React", color: "#2563EB" },
  { name: "Tailwind", color: "#10B981" },
  { name: "GitHub", color: "#0F172A" },
  { name: "Vite", color: "#F97316" },
  { name: "Firebase", color: "#F97316" },
];

export default function WorkspacePanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-br from-accent/10 via-transparent to-success/10 rounded-[2.5rem] blur-2xl" />
      <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] border border-primary/5 p-6 md:p-8">
        <div className="flex items-center gap-1.5 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-orange/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
        </div>

        <div className="space-y-3">
          {STACK.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-background border border-primary/5"
            >
              <span className="text-sm font-medium text-primary">
                {item.name}
              </span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-primary/5 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-xs font-medium text-primary/60">
            Deploying...
          </span>
        </div>
      </div>
    </div>
  );
}