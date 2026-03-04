interface LogoProps {
  className?: string
  /** "dark" = white text/icon (for dark backgrounds), "light" = black text + red GO (default) */
  variant?: "light" | "dark"
  width?: number
  height?: number
}

export default function Logo({ className = "", variant = "light", width = 160, height = 160 }: LogoProps) {
  const textColor = variant === "dark" ? "#ffffff" : "#111111"
  const redColor = "#CC1111"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 320"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Benzigo — топливный процессинг"
    >
      {/* Outer red circle arc (open at top-right where nozzle sits) */}
      <path
        d="M 160 20 A 140 140 0 1 0 270 75"
        fill="none"
        stroke={redColor}
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Fuel pump nozzle — positioned top-right of circle */}
      {/* Handle / body */}
      <g transform="translate(220, 10) rotate(30)">
        {/* Hose curve */}
        <path
          d="M 30 60 Q 55 20 70 10 Q 85 0 90 15 Q 95 30 80 35 Q 65 40 50 65"
          fill="none"
          stroke={redColor}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Nozzle body */}
        <rect x="10" y="55" width="42" height="22" rx="6" fill={redColor} />
        {/* Nozzle tip */}
        <rect x="-8" y="60" width="20" height="12" rx="4" fill={redColor} />
        {/* Trigger guard */}
        <path
          d="M 20 77 Q 25 90 35 90 Q 45 90 48 77"
          fill="none"
          stroke={redColor}
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Top ridge */}
        <rect x="22" y="48" width="28" height="10" rx="4" fill={redColor} />
      </g>

      {/* BENZI — black (or white on dark) */}
      <text
        x="52"
        y="216"
        fontFamily="Montserrat, Arial Black, sans-serif"
        fontWeight="900"
        fontSize="76"
        fill={textColor}
        letterSpacing="-2"
      >
        BENZI
      </text>

      {/* GO — red */}
      <text
        x="213"
        y="216"
        fontFamily="Montserrat, Arial Black, sans-serif"
        fontWeight="900"
        fontSize="76"
        fill={redColor}
        letterSpacing="-2"
      >
        GO
      </text>
    </svg>
  )
}
