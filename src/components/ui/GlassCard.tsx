type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-[24px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(11,28,54,0.92),rgba(18,39,75,0.98))] p-4 shadow-[0_22px_60px_rgba(10,24,50,0.45)] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
