import React from 'react';

interface BottleProps {
  labelColor?: string;
  labelTitle?: string;
}

const Bottle: React.FC<BottleProps> = ({ labelColor = "#CDE4B4", labelTitle = "Vitamin" }) => {
  return (
    <svg width="150" height="225" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
       {/* Cap */}
       <rect x="30" y="5" width="40" height="15" rx="2" fill="#FFFFFF" stroke="#3f2217" strokeWidth="2" />
       <line x1="32" y1="10" x2="68" y2="10" stroke="#E5E5E5" strokeWidth="1" />
       <line x1="32" y1="14" x2="68" y2="14" stroke="#E5E5E5" strokeWidth="1" />

       {/* Bottle Body */}
       <rect x="20" y="25" width="60" height="110" rx="12" fill="rgba(255,255,255,0.7)" stroke="#3f2217" strokeWidth="2" />
       
       {/* Gummies Inside */}
       <circle cx="35" cy="40" r="6" fill={labelColor} opacity="0.6"/>
       <circle cx="55" cy="45" r="6" fill={labelColor} opacity="0.6"/>
       <circle cx="40" cy="55" r="6" fill={labelColor} opacity="0.6"/>
       <circle cx="60" cy="55" r="6" fill={labelColor} opacity="0.6"/>
       <circle cx="45" cy="70" r="6" fill={labelColor} opacity="0.6"/>
       <circle cx="30" cy="110" r="6" fill={labelColor} opacity="0.6"/>
       <circle cx="65" cy="105" r="6" fill={labelColor} opacity="0.6"/>
       <circle cx="50" cy="120" r="6" fill={labelColor} opacity="0.6"/>
       
       {/* Label */}
       <rect x="21" y="50" width="58" height="60" fill="white" opacity="0.9" />
       <rect x="21" y="50" width="58" height="60" stroke="#3f2217" strokeWidth="1" strokeDasharray="2 2" fill="none"/>
       
       {/* Label Content */}
       <circle cx="50" cy="70" r="10" fill={labelColor} />
       <circle cx="47" cy="68" r="1" fill="#3f2217" />
       <circle cx="53" cy="68" r="1" fill="#3f2217" />
       <path d="M48 72 Q50 74 52 72" stroke="#3f2217" strokeWidth="1" fill="none" />

       {/* Text Lines */}
       <line x1="30" y1="90" x2="70" y2="90" stroke="#3f2217" strokeWidth="2" strokeLinecap="round" />
       <line x1="35" y1="95" x2="65" y2="95" stroke="#3f2217" strokeWidth="1" strokeLinecap="round" />

       {/* Reflections */}
       <path d="M25 35 Q 25 35 25 55" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
       <path d="M75 110 Q 75 125 75 125" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>

    </svg>
  );
};

export default Bottle;