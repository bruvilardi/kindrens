import React from 'react';

const OrangeCharacter: React.FC = () => {
  return (
    <svg width="350" height="350" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Legs */}
      <path d="M150 320 L130 360" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />
      <path d="M130 360 L115 360" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />
      
      <path d="M250 320 L270 360" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />
      <path d="M270 360 L285 360" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />

      {/* Arms */}
      <path d="M80 170 Q 50 140 60 110" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />
      {/* Left Hand fingers (simple) */}
      <path d="M60 110 L50 100" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />
      <path d="M60 110 L60 95" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />
      <path d="M60 110 L75 100" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />

      <path d="M320 170 Q 350 140 340 110" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />
       {/* Right Hand fingers (simple) */}
       <path d="M340 110 L330 100" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />
       <path d="M340 110 L340 95" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />
       <path d="M340 110 L355 100" stroke="#4A3B2A" strokeWidth="6" strokeLinecap="round" />


      {/* Body */}
      <circle cx="200" cy="200" r="130" fill="#F4B084" stroke="#4A3B2A" strokeWidth="4" />
      
      {/* Texture dots */}
      <circle cx="150" cy="150" r="3" fill="#D99166" />
      <circle cx="160" cy="270" r="2" fill="#D99166" />
      <circle cx="280" cy="180" r="3" fill="#D99166" />
      <circle cx="250" cy="250" r="2" fill="#D99166" />
      <circle cx="120" cy="220" r="4" fill="#D99166" />

      {/* Cheeks */}
      <ellipse cx="130" cy="210" rx="15" ry="8" fill="#E89F71" opacity="0.6" />
      <ellipse cx="270" cy="210" rx="15" ry="8" fill="#E89F71" opacity="0.6" />

      {/* Face */}
      <circle cx="160" cy="190" r="10" fill="#4A3B2A" />
      <circle cx="240" cy="190" r="10" fill="#4A3B2A" />
      <path d="M185 220 Q 200 235 215 220" stroke="#4A3B2A" strokeWidth="4" strokeLinecap="round" />

      {/* Leaf */}
      <path d="M200 70 Q 240 20 280 50 Q 240 80 200 70 Z" fill="#5F8C4A" stroke="#4A3B2A" strokeWidth="3" />
      <path d="M200 70 Q 190 60 195 50" stroke="#4A3B2A" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

export default OrangeCharacter;