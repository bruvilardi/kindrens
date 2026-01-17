import React from 'react';

const Lemon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768533604/Lima%CC%83o_vtihru.svg" 
      alt="Cute Lemon Character"
      className={className}
      width="160"
      height="190"
      draggable={false}
      style={{ userSelect: 'none' }}
    />
  );
};
export default Lemon;