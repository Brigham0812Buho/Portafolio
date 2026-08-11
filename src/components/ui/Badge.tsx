type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "soft" | "dark";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-accent/20 text-muted",
    soft: "bg-accent-secondary/10 text-accent-secondary",
    dark: "bg-foreground text-background",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
