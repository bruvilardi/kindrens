import React from 'react';

const Strawberry: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768533604/Morango_k2wsih.svg" 
      alt="Cute Strawberry Character"
      className={className}
      width="160"
      height="180"
      draggable={false}
      style={{ userSelect: 'none' }}
    />
  );
};
export default Strawberry;