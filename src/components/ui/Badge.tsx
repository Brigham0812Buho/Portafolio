type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "border-border bg-white/[0.03] text-muted",
    accent: "border-accent/30 bg-accent/10 text-accent",
    success: "border-success/30 bg-success/10 text-success",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
