type FeatureCardProps = {
  title: string;
  description: string;
  span?: boolean;
};

export function FeatureCard({ title, description, span = false }: FeatureCardProps) {
  return (
    <div
      className={`rounded-[20px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(11,25,48,0.88),rgba(18,39,71,0.96))] p-3 min-h-[112px] ${
        span ? "sm:col-span-2" : ""
      }`}
    >
      <p className="text-xs uppercase tracking-[0.25em] text-accent-secondary">{title}</p>
      <p className="mt-2 text-base font-semibold text-foreground">{description}</p>
    </div>
  );
}
