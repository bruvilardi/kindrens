import React from 'react';

const Grape: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768533605/Uva_o9ystz.svg" 
      alt="Cute Grape Character"
      className={className}
      width="150"
      height="165"
      draggable={false}
      style={{ userSelect: 'none' }}
    />
  );
};
export default Grape;