interface HeroSceneProps {
  className?: string
}

/** Horizon, mountains, lunar surface and the young stargazer silhouette. */
export function HeroScene({ className }: HeroSceneProps) {
  const silhouette = '#03050c'

  return (
    <svg
      className={className}
      viewBox="0 0 1440 610"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="hs-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f08b6e" stopOpacity="0" />
          <stop offset="0.65" stopColor="#c8655e" stopOpacity="0.35" />
          <stop offset="0.88" stopColor="#f5a66f" stopOpacity="0.75" />
          <stop offset="1" stopColor="#f6c27a" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="hs-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2a4e" />
          <stop offset="1" stopColor="#141831" />
        </linearGradient>
        <linearGradient id="hs-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#11152c" />
          <stop offset="1" stopColor="#070a17" />
        </linearGradient>
        <radialGradient id="hs-moon" cx="0.55" cy="0.1" r="0.75">
          <stop offset="0" stopColor="#6f7a9c" />
          <stop offset="0.35" stopColor="#3a4468" />
          <stop offset="0.75" stopColor="#1d2442" />
          <stop offset="1" stopColor="#0a0e1f" />
        </radialGradient>
      </defs>

      {/* Sunset glow on the horizon */}
      <rect x="0" y="120" width="1440" height="260" fill="url(#hs-glow)" />

      {/* Distant mountains */}
      <path
        d="M0 330 L90 305 L170 318 L260 282 L360 312 L470 276 L560 300 L660 288 L760 318 L860 278 L960 300 L1060 262 L1160 296 L1270 274 L1360 298 L1440 286 V610 H0Z"
        fill="url(#hs-far)"
      />
      {/* Nearer hills */}
      <path d="M0 382 Q 260 336 560 372 T 1120 356 T 1440 366 V610 H0Z" fill="url(#hs-near)" />

      {/* Lunar surface curving in from the left */}
      <ellipse cx="160" cy="690" rx="820" ry="330" fill="url(#hs-moon)" />
      <path d="M-660 690 A 820 330 0 0 1 980 690" fill="none" stroke="#c9d3ef" strokeOpacity="0.22" strokeWidth="2" />
      <g fill="#0d1228" opacity="0.55">
        <ellipse cx="120" cy="420" rx="38" ry="9" />
        <ellipse cx="330" cy="400" rx="22" ry="6" />
        <ellipse cx="520" cy="440" rx="46" ry="11" />
        <ellipse cx="250" cy="470" rx="30" ry="8" />
        <ellipse cx="700" cy="470" rx="26" ry="7" />
        <ellipse cx="40" cy="480" rx="20" ry="6" />
      </g>

      {/* Ridge the stargazer stands on */}
      <path d="M780 610 L820 520 Q 860 452 1060 448 Q 1280 444 1440 470 V610 H820Z" fill={silhouette} />

      {/* Telescope on tripod */}
      <g stroke={silhouette} strokeWidth="6" strokeLinecap="round">
        <line x1="1012" y1="360" x2="958" y2="500" />
        <line x1="1012" y1="360" x2="1068" y2="500" />
        <line x1="1012" y1="360" x2="1014" y2="500" />
      </g>
      <rect x="1000" y="346" width="24" height="22" rx="4" fill={silhouette} />
      <g transform="translate(1012 348) rotate(28)" fill={silhouette}>
        <rect x="-112" y="-15" width="190" height="30" rx="6" />
        <rect x="-122" y="-19" width="26" height="38" rx="5" />
        <rect x="74" y="-7" width="26" height="14" rx="3" />
        <rect x="-30" y="-24" width="50" height="10" rx="3" />
      </g>

      {/* Child looking through the eyepiece */}
      <g fill={silhouette}>
        <circle cx="1132" cy="392" r="27" />
        <path d="M1108 380 Q 1118 352 1146 360 Q 1166 368 1160 392 Q 1150 372 1128 374Z" />
        <rect x="1120" y="410" width="20" height="18" rx="6" />
        <path d="M1086 520 L1092 466 Q1098 428 1132 424 Q1172 424 1182 462 L1196 520Z" />
        <path d="M1110 440 Q 1096 430 1098 410 L1110 404 Q 1112 424 1124 432Z" />
      </g>
    </svg>
  )
}
