type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 rounded-[24px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(14,34,64,0.95),rgba(19,47,82,0.98))] p-5 md:p-6 shadow-[0_18px_56px_rgba(2,10,25,0.35)] backdrop-blur-sm">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-accent-secondary">
        {eyebrow}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm text-muted">{description}</p>
      )}
    </div>
  );
}
