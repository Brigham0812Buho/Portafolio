export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="GC"
      className={className}
    >
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="24"
        fill="rgba(7,16,31,0.92)"
        stroke="var(--color-accent)"
        strokeWidth="3"
      />
      <path
        d="M30 30h22c10 0 18 8 18 18s-8 18-18 18H30"
        fill="none"
        stroke="var(--color-accent-secondary)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 66h24"
        fill="none"
        stroke="var(--color-accent-secondary)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M63 33l11 0"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M63 67l11 0"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="73" cy="50" r="4" fill="var(--color-accent)" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="var(--color-accent)"
        letterSpacing="-1"
      >
        GC
      </text>
    </svg>
  );
}
