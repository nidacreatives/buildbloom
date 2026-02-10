"use client";

export default function Logo({
  className = "w-12 h-12",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#070864" />
          <stop offset="50%" stopColor="#36177e" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer Circle - Build */}
      <circle
        cx="100"
        cy="100"
        r="85"
        stroke="url(#gradient1)"
        strokeWidth="4"
        fill="none"
        opacity="0.3"
      />

      {/* Middle Circle */}
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="url(#gradient2)"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />

      {/* Inner Geometric Shape - Represents Building/Growth */}
      <g filter="url(#glow)">
        {/* Letter B - Stylized */}
        <path
          d="M 70 60 L 70 140 L 105 140 C 120 140 130 130 130 115 C 130 105 125 100 120 100 C 125 100 128 95 128 85 C 128 70 118 60 105 60 Z M 85 75 L 100 75 C 108 75 113 80 113 87 C 113 94 108 95 100 95 L 85 95 Z M 85 105 L 103 105 C 111 105 115 110 115 117 C 115 124 111 125 103 125 L 85 125 Z"
          fill="url(#gradient1)"
        />
      </g>

      {/* Flower/Bloom element - Top Right */}
      <g transform="translate(140, 50)" filter="url(#glow)">
        {/* Petals */}
        <ellipse cx="0" cy="-15" rx="8" ry="15" fill="#ec4899" opacity="0.8" />
        <ellipse
          cx="15"
          cy="0"
          rx="15"
          ry="8"
          fill="#8b5cf6"
          opacity="0.8"
          transform="rotate(90 0 0)"
        />
        <ellipse cx="0" cy="15" rx="8" ry="15" fill="#6366f1" opacity="0.8" />
        <ellipse
          cx="-15"
          cy="0"
          rx="15"
          ry="8"
          fill="#ec4899"
          opacity="0.8"
          transform="rotate(90 0 0)"
        />
        {/* Center */}
        <circle cx="0" cy="0" r="6" fill="url(#gradient1)" />
      </g>

      {/* Sparkle/Growth indicators */}
      <g opacity="0.6">
        <path
          d="M 50 40 L 52 45 L 57 47 L 52 49 L 50 54 L 48 49 L 43 47 L 48 45 Z"
          fill="#6366f1"
        />
        <path
          d="M 150 140 L 152 145 L 157 147 L 152 149 L 150 154 L 148 149 L 143 147 L 148 145 Z"
          fill="#ec4899"
        />
        <path
          d="M 40 120 L 42 125 L 47 127 L 42 129 L 40 134 L 38 129 L 33 127 L 38 125 Z"
          fill="#8b5cf6"
        />
      </g>
    </svg>
  );
}
