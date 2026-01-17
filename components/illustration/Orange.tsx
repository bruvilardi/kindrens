import React from 'react';

const Orange: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768533604/Laranja_xkkiup.svg" 
      alt="Cute Orange Character"
      className={className}
      width="170"
      height="180"
      draggable={false}
      style={{ userSelect: 'none' }}
    />
  );
};
export default Orange;