export default function ImagePlaceholder({
  label = "Add your image",
  className = "",
  icon = "image",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-space-2xs border-2 border-dashed border-outline-variant bg-surface-container-lowest text-on-surface-variant ${className}`}
    >
      <span className="material-symbols-outlined text-headline-lg opacity-50">
        {icon}
      </span>
      <span className="font-label-caps text-label-caps uppercase tracking-widest text-center px-space-sm">
        {label}
      </span>
    </div>
  );
}