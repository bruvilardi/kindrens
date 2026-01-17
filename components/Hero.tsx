import React from 'react';
import Grape from './illustration/Grape';
import Strawberry from './illustration/Strawberry';
import Lemon from './illustration/Lemon';
import Orange from './illustration/Orange';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full pt-24 pb-24 px-6 md:px-12 overflow-hidden bg-cream">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <img 
          src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768629160/Ativo_31_2x_hwvlvt.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left space-y-4 pt-10 md:pt-0 pl-4 md:pl-12">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-primary-text">
            Healthy Habits, <br/> 
            Four Times the Fun!
          </h1>
          <p className="text-lg md:text-xl text-primary-text font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
            Delicious multivitamin gummies packed with essential nutrients to support your child's growth and immunity.
          </p>
          <div className="pt-6">
            <button 
              onClick={scrollToProducts}
              className="bg-[#ec681c] hover:bg-[#ec681c]/90 text-primary-text border-[3px] border-primary-text font-bold py-3 px-8 rounded-full shadow-sm transform hover:-translate-y-1 transition-all duration-200 text-lg"
            >
              Shop All Flavors
            </button>
          </div>
        </div>

        {/* Character Illustration */}
        <div className="flex justify-center md:justify-end scale-[0.5] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.85] origin-center md:origin-right mt-8 md:mt-0">
          <div className="relative w-[600px] h-[500px]">
             {/* Back Layer - Grape (Center Back) */}
             <div className="absolute top-[40px] left-[205px] z-0 animate-float-slow">
               <Grape className="w-[190px] h-auto drop-shadow-lg" />
             </div>
             
             {/* Middle Layer - Orange (Left) */}
             <div className="absolute top-[110px] left-[20px] z-10 animate-float-medium">
               <Orange className="w-[220px] h-auto drop-shadow-lg" />
             </div>

             {/* Middle Layer - Strawberry (Right) */}
             <div className="absolute top-[120px] left-[360px] z-10 animate-wiggle">
               <Strawberry className="w-[200px] h-auto drop-shadow-lg" />
             </div>

             {/* Front Layer - Lemon (Center Front) */}
             <div className="absolute top-[210px] left-[195px] z-20 animate-float-fast">
               <Lemon className="w-[200px] h-auto drop-shadow-lg" />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;