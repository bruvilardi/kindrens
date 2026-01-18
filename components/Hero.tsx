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
    <section className="relative w-full pt-12 pb-16 md:pt-24 md:pb-24 px-6 md:px-12 overflow-hidden bg-cream">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-50 md:opacity-100">
        <img 
          src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768670156/Ativo_32_2x_ozyeii.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left space-y-4 pt-4 md:pt-0 md:pl-12 order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-primary-text">
            Healthy Habits, <br/> 
            Four Times the Fun!
          </h1>
          <p className="text-base md:text-xl text-primary-text font-medium max-w-lg mx-auto md:mx-0 leading-relaxed px-4 md:px-0">
            Delicious multivitamin gummies packed with essential nutrients to support your child's growth and immunity.
          </p>
          <div className="pt-6">
            <button 
              onClick={scrollToProducts}
              className="bg-[#8cc046] hover:bg-[#8cc046]/90 text-primary-text border-[3px] border-primary-text font-bold py-3 px-8 rounded-full shadow-sm transform hover:-translate-y-1 transition-all duration-200 text-lg w-full md:w-auto"
            >
              Shop All Flavors
            </button>
          </div>
        </div>

        {/* Character Illustration */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 mt-4 md:mt-0">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[500px] scale-[0.8] sm:scale-100 md:scale-[0.85] origin-center md:origin-right">
             {/* Back Layer - Grape (Center Back) */}
             <div className="absolute top-[20px] left-[100px] md:top-[40px] md:left-[205px] z-0 animate-float-slow">
               <Grape className="w-[120px] md:w-[190px] h-auto drop-shadow-lg" />
             </div>
             
             {/* Middle Layer - Orange (Left) */}
             <div className="absolute top-[60px] left-[0px] md:top-[110px] md:left-[20px] z-10 animate-float-medium">
               <Orange className="w-[140px] md:w-[220px] h-auto drop-shadow-lg" />
             </div>

             {/* Middle Layer - Strawberry (Right) */}
             <div className="absolute top-[70px] left-[180px] md:top-[120px] md:left-[360px] z-10 animate-wiggle">
               <Strawberry className="w-[130px] md:w-[200px] h-auto drop-shadow-lg" />
             </div>

             {/* Front Layer - Lemon (Center Front) */}
             <div className="absolute top-[120px] left-[100px] md:top-[210px] md:left-[195px] z-20 animate-float-fast">
               <Lemon className="w-[130px] md:w-[200px] h-auto drop-shadow-lg" />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;