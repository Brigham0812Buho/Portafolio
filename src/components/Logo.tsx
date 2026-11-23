export function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="GC"
      className={className}
    >
      <rect x="0.5" y="0.5" width="39" height="39" rx="10" fill="var(--color-surface-2)" stroke="var(--color-border-strong)" />
      <text
        x="20"
        y="25.5"
        textAnchor="middle"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontWeight="700"
        fontSize="15"
        letterSpacing="-0.5"
        fill="var(--color-accent)"
      >
        GC
      </text>
    </svg>
  );
}
