import React from 'react';

const FruitGroup: React.FC = () => {
  const strokeColor = "#3f2217";
  const strokeWidth = 3.5;
  
  return (
    <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      {/* --- GRAPES (Back Center) --- */}
      <g transform="translate(220, 20)">
        {/* Curly Vine */}
        <path d="M110 20 Q140 -10 160 20 Q170 40 150 40" stroke={strokeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M110 20 L105 -5" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />

        {/* Leaf */}
        <path d="M80 20 Q60 -10 40 20 Q20 30 40 50 Q60 70 80 50 Z" fill="#65A30D" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
        <path d="M80 50 L60 30" stroke={strokeColor} strokeWidth="2" />

        {/* Grapes Body - Tighter Cluster */}
        <g>
            {/* Back Circles */}
            <circle cx="60" cy="80" r="28" fill="#9333EA" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="120" cy="80" r="28" fill="#9333EA" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="90" cy="140" r="28" fill="#9333EA" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="50" cy="120" r="28" fill="#9333EA" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="130" cy="120" r="28" fill="#9333EA" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="90" cy="170" r="26" fill="#9333EA" stroke={strokeColor} strokeWidth={strokeWidth} />

            {/* Front Circles (Face area) */}
            <circle cx="90" cy="60" r="30" fill="#9333EA" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="70" cy="100" r="30" fill="#9333EA" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="110" cy="100" r="30" fill="#9333EA" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="90" cy="110" r="20" fill="#9333EA" stroke="none" /> {/* Filler to hide internal lines if needed, simplified here */}
        </g>

        {/* Face */}
        <g transform="translate(90, 100)">
            <circle cx="-20" cy="-5" r="5" fill={strokeColor}/>
            <circle cx="20" cy="-5" r="5" fill={strokeColor}/>
            <path d="M-5 8 Q0 12 5 8" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
            {/* Cheeks */}
            <ellipse cx="-30" cy="2" rx="7" ry="4" fill="#D8B4FE" opacity="0.6"/>
            <ellipse cx="30" cy="2" rx="7" ry="4" fill="#D8B4FE" opacity="0.6"/>
        </g>
        
        {/* Arms */}
        <path d="M30 110 Q10 90 0 70" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M150 110 Q170 90 180 70" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        
        {/* Legs */}
         <path d="M70 160 L65 190 L55 190" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M110 160 L115 190 L125 190" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      </g>


      {/* --- ORANGE (Right) --- */}
      <g transform="translate(320, 140)">
        {/* Legs */}
        <path d="M50 130 L45 160 L35 160" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M90 130 L95 160 L105 160" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Body */}
        <circle cx="70" cy="70" r="65" fill="#FB923C" stroke={strokeColor} strokeWidth={strokeWidth} />
        
        {/* Texture Spots */}
        <circle cx="30" cy="50" r="2" fill="#FDBA74" />
        <circle cx="110" cy="80" r="2" fill="#FDBA74" />
        <circle cx="40" cy="100" r="2" fill="#FDBA74" />

        {/* Face */}
        <g transform="translate(70, 70)">
            <circle cx="-20" cy="-5" r="5" fill={strokeColor}/>
            <circle cx="20" cy="-5" r="5" fill={strokeColor}/>
            <path d="M-8 8 Q0 15 8 8" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="-35" cy="5" rx="8" ry="5" fill="#FDA4AF" opacity="0.8"/>
            <ellipse cx="35" cy="5" rx="8" ry="5" fill="#FDA4AF" opacity="0.8"/>
        </g>

        {/* Leaf */}
        <path d="M70 5 Q90 -15 100 0 Q90 20 70 5 Z" fill="#65A30D" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round"/>
        <path d="M70 5 L70 -10" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"/>

        {/* Arms */}
        <path d="M10 70 Q-10 50 -10 30" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M130 70 Q150 50 160 30" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      </g>


      {/* --- LEMON (Center Front) --- */}
      <g transform="translate(160, 160)">
        {/* Legs */}
        <path d="M50 140 L45 170 L35 170" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M80 140 L85 170 L95 170" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>

        {/* Body */}
        <path d="M65 10 Q105 20 115 80 Q105 140 65 150 Q25 140 15 80 Q25 20 65 10 Z" fill="#FACC15" stroke={strokeColor} strokeWidth={strokeWidth} />
        {/* Nubs */}
        <path d="M65 10 Q65 5 65 0" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"/>
        <path d="M65 150 Q65 155 65 160" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"/>
        
        {/* Face */}
        <g transform="translate(65, 80)">
             <circle cx="-18" cy="-5" r="5" fill={strokeColor}/>
             <circle cx="18" cy="-5" r="5" fill={strokeColor}/>
             <path d="M-6 8 Q0 12 6 8" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
             <ellipse cx="-30" cy="5" rx="7" ry="4" fill="#FDA4AF" opacity="0.6"/>
             <ellipse cx="30" cy="5" rx="7" ry="4" fill="#FDA4AF" opacity="0.6"/>
        </g>
        
        {/* Texture */}
        <circle cx="35" cy="40" r="1.5" fill="#FEF08A" />
        <circle cx="95" cy="110" r="1.5" fill="#FEF08A" />

        {/* Arms */}
        <path d="M20 70 Q0 60 -10 40" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M110 70 Q130 60 140 40" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      </g>


      {/* --- STRAWBERRY (Left) --- */}
      <g transform="translate(10, 160)">
        {/* Legs */}
        <path d="M50 120 L45 150 L35 150" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M90 120 L95 150 L105 150" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>

        {/* Body */}
        <path d="M25 40 Q70 15 115 40 Q125 70 110 100 Q90 140 70 140 Q50 140 30 100 Q15 70 25 40 Z" fill="#EF4444" stroke={strokeColor} strokeWidth={strokeWidth} />
        
        {/* Seeds */}
        <ellipse cx="45" cy="60" rx="2" ry="3" fill="#FECACA" opacity="0.6"/>
        <ellipse cx="95" cy="60" rx="2" ry="3" fill="#FECACA" opacity="0.6"/>
        <ellipse cx="70" cy="110" rx="2" ry="3" fill="#FECACA" opacity="0.6"/>
        <ellipse cx="40" cy="90" rx="2" ry="3" fill="#FECACA" opacity="0.6"/>
        <ellipse cx="100" cy="90" rx="2" ry="3" fill="#FECACA" opacity="0.6"/>

        {/* Face */}
        <g transform="translate(70, 80)">
            <circle cx="-18" cy="-5" r="5" fill={strokeColor}/>
            <circle cx="18" cy="-5" r="5" fill={strokeColor}/>
            <path d="M-6 8 Q0 12 6 8" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="-32" cy="5" rx="7" ry="4" fill="#FDA4AF" opacity="0.7"/>
            <ellipse cx="32" cy="5" rx="7" ry="4" fill="#FDA4AF" opacity="0.7"/>
        </g>

        {/* Leaf Cap */}
        <path d="M30 40 L45 20 L60 35 L70 15 L80 35 L95 20 L110 40" fill="#22C55E" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />

        {/* Arms */}
        <path d="M25 70 Q5 60 0 40" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M115 70 Q135 60 140 40" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      </g>

    </svg>
  );
};

export default FruitGroup;