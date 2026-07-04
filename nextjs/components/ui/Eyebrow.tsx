import clsx from "clsx";

export default function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={clsx(
        "font-display text-xs tracking-[0.18em] uppercase text-muted flex items-center gap-2.5 mb-5",
        center && "justify-center"
      )}
    >
      <span className="w-6 h-px bg-muted-dim" />
      {children}
    </div>
  );
}
