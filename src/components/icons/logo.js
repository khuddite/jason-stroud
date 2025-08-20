import React from 'react';

const IconLogo = () => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Google-inspired precise gradient - mathematical perfection */}
      <radialGradient id="primaryGrad" cx="50%" cy="30%" r="80%">
        <stop offset="0%" style={{ stopColor: '#112240', stopOpacity: 1 }} />
        <stop offset="70%" style={{ stopColor: '#0a192f', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#020c1b', stopOpacity: 1 }} />
      </radialGradient>

      {/* Purposeful accent - represents growth and innovation */}
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#64ffda', stopOpacity: 0.9 }} />
        <stop offset="100%" style={{ stopColor: '#87ceeb', stopOpacity: 0.7 }} />
      </linearGradient>

      {/* Subtle depth with Google's material design principles */}
      <filter id="elevation" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.12" />
        <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.24" />
      </filter>
    </defs>

    {/* Perfect circle - universal symbol of completeness and perfection */}
    <circle cx="60" cy="60" r="50" fill="url(#primaryGrad)" filter="url(#elevation)" />

    {/* Golden ratio ring - mathematical beauty */}
    <circle
      cx="60"
      cy="60"
      r="46"
      fill="none"
      stroke="url(#accentGrad)"
      strokeWidth="0.5"
      opacity="0.6"
    />

    {/* Monogram "J" - Inspired by Swiss typography and Google's clean aesthetics */}
    <g transform="translate(60, 60)">
      {/* J - Represents journey, growth, and forward momentum */}
      <path
        d="M-8 -20 L-8 8 Q-8 16 0 16 Q8 16 8 8"
        stroke="#64ffda"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="1"
      />
      {/* Intentional dot - represents focus, precision, attention to detail */}
      <circle cx="-8" cy="-28" r="2" fill="#64ffda" opacity="1" />
    </g>

    {/* Monogram "S" - Perfect balance and flow */}
    <g transform="translate(60, 60)">
      {/* S - Represents solutions, systems, and seamless experiences */}
      <path
        d="M16 -12 Q8 -16 0 -12 Q-4 -8 0 -4 L8 0 Q12 4 8 8 Q4 12 -4 8"
        stroke="#64ffda"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="1"
      />
    </g>

    {/* Purposeful accent marks - Represent innovation and forward thinking */}
    <g opacity="0.4">
      {/* Subtle directional indicators - inspired by Google's arrow motifs */}
      <path d="M25 35 L30 35" stroke="#64ffda" strokeWidth="1" strokeLinecap="round" />
      <path d="M90 35 L95 35" stroke="#64ffda" strokeWidth="1" strokeLinecap="round" />
    </g>

    {/* Inner precision ring - represents perfection and attention to detail */}
    <circle cx="60" cy="60" r="38" fill="none" stroke="#64ffda" strokeWidth="0.25" opacity="0.3" />
  </svg>
);

export default IconLogo;
