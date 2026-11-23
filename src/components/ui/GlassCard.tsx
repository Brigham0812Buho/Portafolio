type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-[24px] border border-[rgba(213,178,124,0.18)] bg-[linear-gradient(135deg,rgba(37,27,19,0.92),rgba(29,23,18,0.98))] p-4 shadow-[0_22px_60px_rgba(8,5,3,0.4)] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
