import React from 'react';

const IconLogo = () => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#0a192f', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#112240', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#233554', stopOpacity: 1 }} />
      </linearGradient>

      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#64ffda', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: '#64ffda', stopOpacity: 0.4 }} />
      </linearGradient>

      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2" />
      </filter>

      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Main circle with refined gradient */}
    <circle cx="60" cy="60" r="54" fill="url(#primaryGrad)" filter="url(#shadow)" />

    {/* Elegant border ring */}
    <circle
      cx="60"
      cy="60"
      r="54"
      fill="none"
      stroke="url(#accentGrad)"
      strokeWidth="1"
      opacity="0.6"
    />

    {/* Refined letter "J" - more elegant and minimal */}
    <g transform="translate(35, 30)">
      <path
        d="M12 8 L12 35 Q12 42 18 42 Q24 42 24 35"
        stroke="#64ffda"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <circle cx="12" cy="2" r="3" fill="#64ffda" opacity="0.8" />
    </g>

    {/* Refined letter "S" - more flowing and elegant */}
    <g transform="translate(65, 30)">
      <path
        d="M25 12 Q15 8 8 12 Q5 16 8 20 L20 24 Q25 28 20 32 Q15 36 8 32 Q5 28 8 24"
        stroke="#64ffda"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </g>

    {/* Subtle accent elements - more refined */}
    <g opacity="0.4">
      {/* Bottom accent line */}
      <path
        d="M25 95 Q20 95 20 100 Q20 105 25 105"
        stroke="#64ffda"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Top accent line */}
      <path
        d="M85 25 Q90 25 90 30 Q90 35 85 35"
        stroke="#64ffda"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Subtle corner dots */}
      <circle cx="25" cy="20" r="1.5" fill="#64ffda" opacity="0.6" />
      <circle cx="95" cy="20" r="1.5" fill="#64ffda" opacity="0.6" />
      <circle cx="25" cy="100" r="1.5" fill="#64ffda" opacity="0.6" />
      <circle cx="95" cy="100" r="1.5" fill="#64ffda" opacity="0.6" />
    </g>

    {/* Inner glow ring */}
    <circle cx="60" cy="60" r="48" fill="none" stroke="#64ffda" strokeWidth="0.5" opacity="0.2" />
  </svg>
);

export default IconLogo;
