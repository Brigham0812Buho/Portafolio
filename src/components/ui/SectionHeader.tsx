type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  as?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <Heading className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </Heading>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
