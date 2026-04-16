type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`flex items-center gap-2 ${className}`}
      aria-label="Celestium"
    >
      <CelestiumMark className="h-7 w-7" />
      <span className="hidden text-lg font-extrabold tracking-tight text-white sm:inline-block">
        celestium
      </span>
    </span>
  );
}

export function CelestiumMark({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="celt-gold" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#FFE68B" />
          <stop offset="50%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#C0830B" />
        </linearGradient>
      </defs>
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="url(#celt-gold)"
        strokeWidth="1.5"
        fill="rgba(245,197,24,0.06)"
      />
      <path
        d="M11 12.5C11 11.1193 12.1193 10 13.5 10H21V13H14V15H20V18H14V20H21V23H13.5C12.1193 23 11 21.8807 11 20.5V12.5Z"
        fill="url(#celt-gold)"
      />
    </svg>
  );
}
